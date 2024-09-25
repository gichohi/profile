import Hero from "./Hero";
import Skills from "./skills/Skills";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col items-center sm:items-start">
        <Hero />
        <Skills />
      </main>
    </div>
  );
}
