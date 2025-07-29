---
title: "Catching EC2 Grouper- no indicators required!"
layout: "blog.njk"
author: "naol"
categories: threat Development
---

## Introduction

Through the years of analyzing identity compromises in the cloud, we’ve seen the same attackers pop up regularly, some more frequently than others. Among the more prolific ones we’ve come to know is one we’ve dubbed **“EC2 Grouper”**. Over the past couple of years, we’ve seen this actor in several dozen customer environments, making them one of the more active groups we’ve tracked. This usual suspect is attributed by their penchant for using similar **user agents** and the same **security group naming convention** in their attacks.
While indicators such as user agents and even security group names can assist in attribution and hunting, we have found them unreliable for comprehensive threat detection. In this blog, we’ll detail tactics associated with EC2 Grouper and how **Lacework FortiCNAPP** can be leveraged to detect this threat, among others. More importantly, we will showcase how this is achieved without relying on actor-specific indicators, which can be transient in nature.

## Tactics and Techniques

### User Agent Patterns

EC2 Grouper is characterized by their usage of **AWS tools for PowerShell** to carry out attacks. This is presumed by their **user agent**, which was consistent for a number of years:

AWSPowerShell.Common/4.1.90.0 .NET_Core/6.0.5 OS/Microsoft_Windows_10.0.17763 PowerShellCore/7.-1 ClientAsync

In recent attacks, they have updated their UA, which now contains **new versioning and unusual # characters**, possibly as a detection countermeasure:
AWSPowerShell.Common/4.1.534.0 ua/2.0 .NET_Core#6.0.5 OS/windows#10.0.17763.0 md/ARCH#X64 PowerShellCore/7.-1 cfg/retry-mode#legacy md/ClientAsync

### Security Group Naming Convention

A more consistent indicator has emerged with a **security group naming convention**. Attacks in the cloud often leverage the `CreateSecurityGroup` API (**T1098**) to enable **remote access and lateral movement** in the cloud environment.
EC2 Grouper typically attempts to create multiple security groups using a **naming pattern**: `ec2group` suffixed with **sequential numbers** (1-5). Example request parameters:

```json
{
  "groupDescription": "ec2group",
   "groupName": "ec2group"
}
{
  "groupDescription": "ec2group1",
  "groupName": "ec2group1"
}
{
  "groupDescription": "ec2group12",
  "groupName": "ec2group12"
}
{
  "groupDescription": "ec2group123",
  "groupName": "ec2group123"
}
{
  "groupDescription": "ec2group1234",
  "groupName": "ec2group1234"
}
{
  "groupDescription": "ec2group12345",
  "groupName": "ec2group12345"
}
```

### Attack Execution Flow

In all instances of EC2 Grouper attacks, cloud activity appears **largely automated**. The attacker typically follows this sequence:

1. **DescribeInstanceTypes** – Inventory EC2 types in the environment.
2. **DescribeRegions** – Retrieve available regions.
3. **Iterate through each region**:
   - `DescribeVpcs` (**T1580**) – Request information about VPCs.
   - `CreateSecurityGroup` (**T1098 & T1021**) – Create a new security group `ec2group`.
   - `DescribeSecurityGroups` – Query available security groups.
   - `DescribeAccountAttributes` (**T1580**) – Acquire account attributes (quotas, limits).
   - `GetServiceQuota` (**T1580**) – Identify resource limits.
   - `DescribeInstances` (**T1580**) – Gather details on running EC2 instances.
   - `RunInstances` (**T1496**) – Attempt to launch new EC2 instances using `ec2group`.

Interestingly, **EC2 Grouper does not call `AuthorizeSecurityGroupIngress`**, which is required to configure inbound access. Instead, they often use:

- `CreateInternetGateway`
- `CreateVpc`

These actions suggest a focus on **resource hijacking** (**T1496**), but their exact objectives remain **unconfirmed**.

## Detection

### Compromised Credentials

In every attack using **valid credentials**, the credentials **must originate from somewhere**. A **common source** remains **code repositories**, where developers mistakenly commit cloud access keys to **public repositories**. Once exposed, these credentials are quickly exploited by **attackers and secret scanners** alike.

### Secret Scanning Services

Given the popularity of **leaked credentials**, it is prudent to **monitor secret scanning services** such as:

- **GitGuardian**
- **GitHub’s secret scanning service**

These services can help detect exposed credentials **before attackers use them**.

### Composite Alerting Approach

Since **credential exposure alone does not confirm a compromise**, we correlate signals to **reduce false positives**:

- **Monitor specific APIs** frequently used in attacks.
- Use **TDiscover** (open-source project) to map attack techniques.
- **Detect anomalies** indicative of reconnaissance or privilege escalation.

By leveraging these signals, we **increase detection accuracy** beyond simple **actor-specific indicators**.

## Conclusion

Detecting **illicit usage of valid credentials in the cloud** is a **nuanced challenge**. Most cloud attacks involve **compromised credentials**, making detection **difficult**.

While EC2 Grouper has unique attack patterns, **many attackers do not**. Thus, **correlating weak signals**—such as API sequences and environmental anomalies—provides **higher detection accuracy**.

By implementing a **composite alerting strategy**, organizations can significantly improve **threat detection and response** against cloud-based attackers.
