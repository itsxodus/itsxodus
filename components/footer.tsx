import { FaGithub, FaDiscord, FaYoutube, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
    return (
        <footer 
        className="flex-col bg-black p-4 text-white bottom-0 w-full">
            <div>
                <Link 
                href="mailto:matthewlamo02@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex hover:text-green-500 w-72">
                    <IoMail className="m-1 text-xl"/>
                    <p>matthewlamo02@gmail.com</p>
                </Link>
                <Link 
                href="https://www.linkedin.com/in/matthew-lamour/" 
                target="_blank" rel="noopener noreferrer" 
                className="flex hover:text-blue-500 w-48">
                    <FaLinkedin className="m-1 text-xl"/>
                    <p>@matthew-lamour</p>
                </Link>
                <Link 
                href="https://github.com/itsxodus/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex hover:text-gray-500 w-32">
                    <FaGithub className="m-1 text-xl"/>
                    <p>@itsxodus</p>
                </Link>
                <Link 
                href="https://www.youtube.com/@xodus." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex hover:text-red-500 w-32">
                    <FaYoutube className="m-1 text-xl"/>
                    <p>@xodus.</p>
                </Link> 
                <Link 
                href="https://www.discord.com/users/xodus." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex hover:text-indigo-500 w-32">
                    <FaDiscord className="m-1 text-xl"/>
                    <p>@xodus.</p>
                </Link>
            </div>
            <div className="flex flex-col space-x-4 py-2">
                <h1 className="font-bold">© 2024 XoDus</h1>
            </div>
        </footer>
    );
}
