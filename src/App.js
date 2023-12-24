import React from "react";
import Header from "./components/header/header";
import "./components/header/header.css";
import  Topcontainer  from "./components/header/topcontainer/topcontainer.js";
import Topcontent from "./components/header/topcontent/topcontent.js";
import "./components/header/topcontent/topcontent.css";
import "./components/header/topcontainer/topcontainer.css";
import "./components/skillcontainer/skillcontainer.js";
import { Skillcontainer } from "./components/skillcontainer/skillcontainer.js";
import "./components/skillcontainer/skillcontainer.css";
import Project_container from "./components/Project_container/Project_container.js";
import "C:/Users/PREETHI SHREE/myapp/src/App.css"
import "./components/Project_container/Project_container.css"
import Contact from "./components/contact/contact.js";

const  App = () => {
  return (
    <div>
      <Header />
      <Topcontainer />
      <Topcontent />
      <Skillcontainer />
      <Project_container />
      <Contact />
    </div>
  );
};

export default App;
