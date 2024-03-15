/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GoCpu } from "react-icons/go";
import { FaFan, FaHeadphones, FaKeyboard, FaMemory, FaMicrophone, FaMouse, FaWindows } from "react-icons/fa";
import { BsFillMotherboardFill, BsFillWebcamFill, BsGpuCard, BsNvmeFill } from "react-icons/bs";
import { ImPowerCord } from "react-icons/im";
import { MdMonitor } from "react-icons/md";
import { PiComputerTowerFill } from "react-icons/pi";
import { GiCooler } from "react-icons/gi";

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
    <div className="p-4 m-4 text-xl justify-left text-white">
      My current PC specs:
      <ul className="text-xl items-center justify-center">
        <br></br>
        <GoCpu/>
        <li>CPU: Intel Core i7-14700K</li>
        <GiCooler/>
        <li>Cooler: Corsair iCUE H150i Elite LCX XT 360mm</li>
        <BsFillMotherboardFill/>
        <li>MoBo: ASUS ROG Strix Z790-A GAMING WIFI</li>
        <FaMemory/>
        <li>RAM: Corsair Vengeance RGB 32GB (2x16GB) DDR5-6000 CL36</li>
        <BsNvmeFill/>
        <li>SSDs: 4TB NVMe M.2</li>
        <BsGpuCard/>
        <li>GPU: PNY XLR8 GeForce RTX 4080 VERTO EPIC-X RGB OC 16GB</li>
        <ImPowerCord/>
        <li>PSU: Vetroo GV1000 1000W 80+ Gold</li>
        <PiComputerTowerFill/>
        <li>Case: NZXT H9 Flow</li>
        <FaFan/>
        <li>Fans: Lian Li Uni Fan SL-Infinity 120mm (x10)</li>
        <FaWindows/>
        <li>OS: Windows 11 Home</li>

        <br></br>
        <MdMonitor/>
        <li>Monitor: Samsung Odyssey G9 49" 240Hz 5120x1440</li>
        <FaKeyboard/>
        <li>Keyboard: Corsair K70 RGB PRO (Cherry MX Speed)</li>
        <FaMouse/>
        <li>Mouse: Razer Basilisk Ultimate RGB Wireless</li>
        <FaHeadphones/>
        <li>Headphones: beyerdynamic DT 770 Pro 80 Ohm, w/ FiiO E10K</li>
        <FaMicrophone/>
        <li>Microphone: AudioTechnica AT2020USB+</li>
        <BsFillWebcamFill/>
        <li>Webcam: Razer Kiyo Pro</li>
      </ul>
    </div>
    <Footer/>
    </>
  );
}
