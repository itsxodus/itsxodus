import { FaFigma, FaGit, FaGithub, FaLinux, FaWindows } from "react-icons/fa";
import { SiGnubash, SiHeroku, SiOpenai, SiVercel } from "react-icons/si";
import { GoCopilot } from "react-icons/go";

export default function Tools() {
    return (
        <>
        <div className="title-section">
            <div className="mb-2">
                <a className="text-2xl font-bold hover:text-red-500 duration-150" href="#tools">
                    Tools
                </a>
            </div>
            <div className="flex sm:gap-12 gap-6 py-4 sm:text-5xl text-2xl grid grid-flow-col grid-rows-2">
                <div>
                    <FaGit/>
                    <p className="text-sm mt-2 text-center">
                        Git
                    </p>
                </div>
                <div>
                    <FaGithub/>
                    <p className="text-sm mt-2 text-center">
                        GitHub
                    </p>
                </div>
                <div>
                    <FaWindows/>
                    <p className="text-sm mt-2 text-center">
                        Windows
                    </p>
                </div>
                <div>
                    <FaLinux/>
                    <p className="text-sm mt-2 text-center">
                        Linux
                    </p>
                </div>
                <div>
                    <SiGnubash/>
                    <p className="text-sm mt-2 text-center">
                        Bash
                    </p>
                </div>
                <div>
                    <SiHeroku/>
                    <p className="text-sm mt-2 text-center">
                        Heroku
                    </p>
                </div>
                <div>
                    <SiVercel/>
                    <p className="text-sm mt-2 text-center">
                        Vercel
                    </p>
                </div>
                <div>
                    <FaFigma/>
                    <p className="text-sm mt-2 text-center">
                        Figma
                    </p>
                </div>
                <div>
                    <SiOpenai/>
                    <p className="text-sm mt-2 text-center">
                        ChatGPT
                    </p>
                </div>
                <div>
                    <GoCopilot/>
                    <p className="text-sm mt-2 text-center">
                        Copilot
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
