import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedMountains from "./components/FeaturedMountains";
import InteractiveMountainMap from "./components/InteractiveMountainMap";
import About from "./components/About";
import Footer from "./components/Footer";

import { mountains } from "./data/mountains";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMountains = mountains.filter((mountain) =>
    mountain.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-black text-white">
      <Navbar />

      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <FeaturedMountains
        mountains={filteredMountains}
      />

      <InteractiveMountainMap />

      <About />

      <Footer />
    </main>
  );
}

export default App;