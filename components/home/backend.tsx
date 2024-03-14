import { SiCplusplus, SiCsharp, SiMysql, SiPostgresql } from "react-icons/si";
import { FaJava, FaPython } from "react-icons/fa";

export default function BackEnd() {
    return (
        <>
        <div className="title-section">
            <div className="mb-2">
                <a className="text-2xl font-bold hover:text-blue-500 duration-150" href="#backend">
                    Backend
                </a>
            </div>
            <div className="flex sm:gap-12 gap-6 py-4 sm:text-5xl text-2xl">
                <div>
                    <FaPython/>
                    <p className="text-sm mt-2 text-center">
                        Python
                    </p>
                </div>
                <div>
                    <SiCplusplus/>
                    <p className="text-sm mt-2 text-center">
                        C/C++
                    </p>
                </div>
                <div>
                    <SiCsharp/>
                    <p className="text-sm mt-2 text-center">
                        C#
                    </p>
                </div>
                <div>
                    <FaJava/>
                    <p className="text-sm mt-2 text-center">
                        Java
                    </p>
                </div>
                <div>
                    <SiMysql/>
                    <p className="text-sm mt-2 text-center">
                        MySQL
                    </p>
                </div>
                <div>
                    <SiPostgresql/>
                    <p className="text-sm mt-2 text-center">
                        Postgres
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
