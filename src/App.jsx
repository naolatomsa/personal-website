import react from "react";
import NavBar from "./develop/layouts/navBar";
import Home from "./develop/layouts/home";
import { Footer } from "./develop/layouts/footer";
import { AboutMe } from "./develop/layouts/aboutMe";

function App() {
  return (
    <div className="grid w-full gap-20">
      <div className="fixed">
        <NavBar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
