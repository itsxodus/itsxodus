import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "XoDus",
  description: "XoDus's personal website.",
};

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="p-4">
      Main page content
    </div>
    <Footer/>
    </>
  );
}
