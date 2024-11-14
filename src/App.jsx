import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import resumeData from "./resumeData.json";

const App = () => {

  const { main, portfolio, resume } = resumeData;

  return (
    <main className="App">
      <Header data={main} />
      <About data={main} />
      <Portfolio data={portfolio} />
      <Resume data={resume} />
      <Footer data={main} />
    </main>
  );
};

export default App;
