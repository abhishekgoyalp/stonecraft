import "./App.css";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Products } from "./components/Products.jsx";
import { Services } from "./components/Services.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
