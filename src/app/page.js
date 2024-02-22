import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center p-5 bg-[#0c0c0c]">
        <h1 className="md:text-[100px] text-[56px] text-center text-white font-[Sahonme-Extrafelt] uppercase">AI Engineer </h1>
        <h1 className="md:text-[100px] text-[56px] text-white font-[Sahonme-Extrafelt] uppercase text-center">Hardware & Systems</h1>
        <p className="text-white md:text-5xl px-0 text-xl font-[Sahonme-Buch] text-center md:px-48 capitalize md:leading-[60px]">Architect of the future, one algorithm at a time. 🤖 #AIEngineer</p>
      </div>

      <Projects />
    </>
  );
}
