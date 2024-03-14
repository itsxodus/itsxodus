import { RiReactjsFill } from "react-icons/ri";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function FrontEnd() {
    return (
        <>
        <div className="title-section">
            <div className="mb-2">
                <a className="text-2xl font-bold hover:text-green-500 duration-150" href="#frontend">
                    Frontend
                </a>
            </div>
            <div className="flex sm:gap-12 gap-6 py-4 px-4 sm:text-5xl text-2xl">
                <div>
                    <SiNextdotjs/>
                    <p className="text-sm mt-2 text-center">
                        Next.js
                    </p>
                </div>
                <div>
                    <SiTailwindcss/>
                    <p className="text-sm mt-2 text-center">
                        Tailwind
                    </p>
                </div>
                <div>
                    <RiReactjsFill/>
                    <p className="text-sm mt-2 text-center">
                        React
                    </p>
                </div>
                <div>
                    <SiTypescript/>
                    <p className="text-sm mt-2 text-center">
                        TypeScript
                    </p>
                </div>
            </div>
            <div className="mx-12">
                <p className="font-medium leading-loose">
                    I have most recently gained experience with frontend
                    development in Next.js, Tailwind, React, and TypeScript.
                    I have used these technologies to create frontend systems
                    for various projects, and am constantly learning more
                    about these technologies and improving my frontend skills.
                </p>
            </div>
        </div>
        </>
    );
}
