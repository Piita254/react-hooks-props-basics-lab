import React from "react";
import user from "../data/user";
import NavBar from "./NavBar"; 
import Home from "./Home";
import About from "./About";
import Links from "./Links";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={"I made this!"} links={user.links} />
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;
