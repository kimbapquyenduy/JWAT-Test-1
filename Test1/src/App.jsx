import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Nav } from "./Components/Nav";
import { VideoGSD } from "./Components/VideoGSD";
import { Footer } from "./Components/Footer";
import { Whatscn } from "./Components/Whatscn";
import { Pagenav } from "./Components/Pagenav";

function App() {
  return (
    <>
      <Nav />
      <div className=" mt-36 mb-10 mr-4 ml-4 lg:ml-20 md:ml-8">
        <VideoGSD />
        <Whatscn />
        <Pagenav />
      </div>
      <Footer />
    </>
  );
}

export default App;
