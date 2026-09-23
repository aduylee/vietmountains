import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedMountains from "./components/FeaturedMountains";
import MountainMap from "./components/MountainMap";
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
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Featured Mountains */}
      <FeaturedMountains
        mountains={filteredMountains}
      />

      {/* Mountain Map */}
      <MountainMap />

      {/* About */}
      <About />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;