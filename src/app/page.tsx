import Customize from "./components/customize";
import Everywhere from "./components/everywhere";
import Extension from "./components/extension";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import Sponsors from "./components/sponsors";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Work/>
      <Extension />
      <Customize />
      <Everywhere/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}
