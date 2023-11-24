import About from "./about/page";
import Hero from "./components/Hero";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
    </div>
  )
}
