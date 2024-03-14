import { GrVmware } from "react-icons/gr";
import { PiComputerTower } from "react-icons/pi";
import { SiAdobephotoshop, SiObsstudio, SiVirtualbox, SiVmware } from "react-icons/si";

export default function Other() {
    return (
        <>
        <div className="title-section">
            <div className="mb-2">
                <a className="text-2xl font-bold hover:text-green-500 duration-150" href="#other">
                    Other
                </a>
            </div>
            <div className="flex sm:gap-12 gap-6 py-4 sm:text-5xl text-2xl">
                <div>
                    <SiAdobephotoshop/>
                    <p className="text-sm mt-2 text-center">
                        Photshop
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
            </div>
            <div className="mx-12">
                <p className="font-medium leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut purus tellus, sodales malesuada imperdiet molestie, elementum et nunc.
                    Integer non eros sed mi dictum finibus.
                    Vestibulum eleifend mauris vitae magna aliquet tristique.
                    Aliquam volutpat orci sapien.
                </p>
            </div>
        </div>
        </>
    );
}
