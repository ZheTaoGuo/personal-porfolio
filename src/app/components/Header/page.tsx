'use client'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import MenuButton from "@/app/components/Header/MenuButton";
import Dropdown from './Dropdown'
import Linkedin from "@/app/components/svg/linkedin"
import Github from "@/app/components/svg/github"
import Email from "@/app/components/svg/email"

export default function Header(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    function toggleMenu(){
        setIsOpen(!isOpen)
    }
    function handleResize(){
        if (window.innerWidth > 768){
            setIsOpen(false)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isOpen])
    return (
        <header className="flex flex-wrap mx-auto justify-between px-6 py-3 w-screen bg-slate-900 fixed left-0 z-5">
            <div className="inline">
                <Image src="/HeaderLogo.png" alt="headerImage" className="select-none justify-items-start" width="100" height="100">
                </Image>
            </div>
            <div className="flex align-center text-slate-200 items-center gap-5 lg:gap-8">
                <a
                    href="#exp_section"
                    className="hidden md:block text-md hover:text-[#8de8ff] ease-in transition duration-200 hover:translate-y-[-0.1rem]"
                >
                    <span className="text-[#8de8ff]">01.</span> Experience
                </a>
                <a
                    href="#project_section"
                    className="hidden md:block text-md hover:text-[#8de8ff] ease-in transition duration-200 hover:translate-y-[-0.1rem]"
                >
                    <span className="text-[#8de8ff]">02.</span> Projects
                </a>
                <a href="#skills" className="hidden md:block text-md hover:text-[#8de8ff] ease-in transition duration-200 hover:translate-y-[-0.1rem]">
                    <span className="text-[#8de8ff]">03.</span> Skills
                </a>
                <a href="#contact" className="hidden md:block text-md hover:text-[#8de8ff] ease-in transition duration-200 hover:translate-y-[-0.1rem]">
                    <span className="text-[#8de8ff]">04.</span> Contact
                </a>
            </div>
            <div className="flex align-center text-slate-300 gap-5 lg:gap-8 items-center">
                <a
                    href="https://www.linkedin.com/in/guozhetao/"
                    className="hidden md:block ease-in transition duration-200 hover:translate-y-[-0.2rem]"
                >
                    <Linkedin />
                </a>
                <a
                    href="https://github.com/ZheTaoGuo"
                    className="hidden md:block ease-in transition duration-200 hover:translate-y-[-0.2rem]"
                >
                    <Github />
                </a>
                <a
                    href="mailto:zhetao.guo.2021@scis.smu.edu.sg"
                    className="hidden md:block ease-in transition duration-200 hover:translate-y-[-0.2rem]"
                >
                    <Email />
                </a>
                <div onClick={toggleMenu} className="md:hidden">
                    <MenuButton isOpen={isOpen} />
                </div>
            </div>



            <div className={`${
                    isOpen ? 'opacity-100 block' : 'opacity-0 invisible'
                } top-24 w-full right-0 transition-opacity duration-500 ease-in-out backdrop-blur-sm fixed z-20`}>
                <Dropdown isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
        </header>

    )
}