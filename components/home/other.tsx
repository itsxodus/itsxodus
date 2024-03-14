import { GiJapan } from "react-icons/gi";
import { GrVmware } from "react-icons/gr";
import { PiComputerTower } from "react-icons/pi";
import { SiAdobephotoshop, SiObsstudio, SiVirtualbox, SiVmware } from "react-icons/si";

export default function Other() {
    return (
        <>
        <div className="title-section">
            <div className="mb-2">
                <a className="text-2xl font-bold hover:text-green-500 duration-150" href="#other">
                    Hobbies / Other
                </a>
            </div>
            <div className="flex sm:gap-12 gap-6 py-4 px-4 sm:text-5xl text-2xl">
                <div>
                    <SiAdobephotoshop/>
                    <p className="text-sm mt-2 text-center">
                        Photshop
                    </p>
                </div>
                <div>
                    <GiJapan/>
                    <p className="text-sm mt-2 text-center">
                        Japanese
                    </p>
                </div>
                <div>
                    <SiObsstudio/>
                    <p className="text-sm mt-2 text-center">
                        OBS
                    </p>
                </div>
                <div>
                    <GrVmware/>
                    <p className="text-sm mt-2 text-center">
                        VMs
                    </p>
                </div>
                <div>
                    <PiComputerTower/>
                    <p className="text-sm mt-2 text-center">
                        PC builds
                    </p>
                </div>
                <div>
                    +
                    <p className="text-sm mt-2 text-center">
                        and more!
                    </p>
                </div>
            </div>
            <div className="mx-12">
                <p className="font-medium leading-loose">
                    Outside of software development, I have over 8 years of 
                    graphic design experience with Photoshop, over 7 years
                    of self-studying the Japanese language, multiple years of
                    producing YouTube videos with OBS, Vegas Pro and Davinci
                    Resolve, years of working with Virtual Machines, and
                    multiple PC building projects, including builds for myself 
                    and assisting others in the part-picking and building
                    processes.
                </p>
            </div>
        </div>
        </>
    );
}
