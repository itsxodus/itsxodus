import { FaFigma, FaGitAlt, FaGithub, FaLinux, FaWindows } from "react-icons/fa";
import { SiGnubash, SiHeroku, SiJetbrains, SiOpenai, SiVercel, SiVisualstudio } from "react-icons/si";
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
            <div className="flex sm:gap-12 gap-2 py-4 px-4 sm:text-5xl text-2xl grid grid-flow-col grid-rows-2">
                <div>
                    <FaGitAlt/>
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
                <div>
                    <SiVisualstudio/>
                    <p className="text-sm mt-2 text-center">
                        Visual Studio
                    </p>
                </div>
                <div>
                    <SiJetbrains/>
                    <p className="text-sm mt-2 text-center">
                        Jetbrains IDEs
                    </p>
                </div>
            </div>
            <div className="mx-12">
                <p className="font-medium leading-loose">
                    I have experience with many of the oft-used tools that
                    developers use in their day-to-day work, like the 
                    quintessential Git and GitHub. I am native to 
                    Windows, but have experience with many Linux distros
                    and use of bash. I have used Figma for UI/UX prototyping,
                    Vercel and Heroku for hosting, and use ChatGPT and Copilot
                    for the ever-increasing importance that AI assistance has
                    in development work in Visual Studio and Jetbrains IDEs.
                </p>
            </div>
        </div>
        </>
    );
}
