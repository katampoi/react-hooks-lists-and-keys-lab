import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const arrayLinks = links.map((link)=>(<a key={link}href={"#" + link}>{link}</a>))

  return <nav>{arrayLinks}</nav>;
}

export default NavBar;
