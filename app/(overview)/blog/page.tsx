import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="p-4">
      Blog page content
    </div>
    <Footer/>
    </>
  );
}
