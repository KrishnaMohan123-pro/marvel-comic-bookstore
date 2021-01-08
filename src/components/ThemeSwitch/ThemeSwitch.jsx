import React, { useState } from "react";
import { Switch } from "@material-ui/core";
export default function ThemeSwitch() {
  const [dark, setDark] = useState(true);
  function handleThemeChange() {
    if (dark) {
      setDark(false);
    }
    if (!dark) {
      setDark(true);
    }
  }
  const body = document.getElementsByTagName("body")[0];
  const comicLinks = document.querySelectorAll(".comic-link p");
  if (!dark) {
    body.classList.add("light-theme");
    for (let i = 0; i < comicLinks.length; i++) {
      comicLinks[i].classList.add("light-theme-comic-link");
    }
  } else {
    body.classList.remove("light-theme");
    for (let i = 0; i < comicLinks.length; i++) {
      comicLinks[i].classList.remove("light-theme-comic-link");
    }
  }
  return <Switch color="primary" checked={dark} onChange={handleThemeChange} />;
}
