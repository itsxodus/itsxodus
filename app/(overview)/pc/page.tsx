import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="p-4 m-4 text-4xl text-center text-white">
      PC Build content coming soon...
    </div>
    <Footer/>
    </>
  );
}
