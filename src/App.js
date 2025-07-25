import React, { useEffect, useState } from "react";
import "./styles/main.scss";
import Demo from "./demo";
import Hooks from "./hooks";
import Forms from "./form";
import ExploreFile from "./fileExplore";

export default function App() {

  return (
    <section className="p-2">
      <ExploreFile/>
    </section>

  );
}
