import Hero from '../components/sections/Hero';
import Highlights from '../components/sections/Highlights';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </>
  );
}