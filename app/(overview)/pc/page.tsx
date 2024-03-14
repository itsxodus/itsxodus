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
    <div className="p-4 m-4 text-2xl text-center text-white">
      View my <a href="https://pcpartpicker.com/user/XoDusPC/" className="text-sky-500 underline">PCPartPicker</a> profile in the meantime!
    </div>
    <Footer/>
    </>
  );
}
