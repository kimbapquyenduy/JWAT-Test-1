import "./App.css";
import { Nav } from "./Components/Nav";
import { VideoGSD } from "./Components/VideoGSD";
import { Footer } from "./Components/Footer";
import { Whatscn } from "./Components/WhatScn";
import { Pagenav } from "./Components/PageNav";

function App() {
  return (
    <>
      <Nav />
      <div className="md:mt-36 mt-24 mb-10 mr-4 ml-4 lg:ml-20 md:ml-8">
        <VideoGSD />
        <Whatscn />
        <Pagenav />
      </div>
      <Footer />
    </>
  );
}

export default App;
