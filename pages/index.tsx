import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <title>Disha's</title>
      <link rel="icon" href="/dishaslogo.jpg"></link>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight">
        <Navbar />
      </main>
    </>
  );
}
