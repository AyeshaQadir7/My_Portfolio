import Interface from "@/components/main/Interface";
import Hero from "@/components/main/hero";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Interface />
      </div>
    </main>
  );
}