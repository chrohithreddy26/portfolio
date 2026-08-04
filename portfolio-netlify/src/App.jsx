import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import {
  profile,
  skillGroups,
  experience,
  certifications,
  education,
} from "./data/portfolio.js";

export default function App() {
  return (
    <>
      <Navbar name={profile.name} />
      <main>
        <Hero profile={profile} education={education} />
        <Skills groups={skillGroups} />
        <Experience experience={experience} />
        <Certifications certifications={certifications} />
        <Contact />
      </main>
      <Footer profile={profile} />
    </>
  );
}
