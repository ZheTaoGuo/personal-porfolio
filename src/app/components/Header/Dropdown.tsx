export default function Dropdown({ isOpen, toggleMenu }: { isOpen: boolean, toggleMenu: () => void }) {
    return (
        <div className="text-white flex flex-col h-screen w-full"
        >
            <a href="#exp_section" onClick={toggleMenu} className="px-7 py-4 bg-slate-900 border-t bg border-t-slate-600">Experience</a>
            <a href="#project_section" onClick={toggleMenu} className="px-7 py-4 bg-slate-900 border-t border-t-slate-600">Projects</a>
            <a href="#contact_section" onClick={toggleMenu} className="px-7 py-4 bg-slate-900 border-t border-t-slate-600">Contact</a>
        </div>
    )
}

