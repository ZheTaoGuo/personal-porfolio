import Linkedin from '@/app/components/svg/linkedin'
import Github from '@/app/components/svg/github'
import Email from '@/app/components/svg/email'

export default function Footer() {
    return (
        <div className="py-5 px-6 lg:px-14 bg-slate-700 flex justify-between items-center">
            <div className="text-sm text-slate-300 sm:text-center dark:text-gray-400">
                © Designed and Built by Guo ZheTao
            </div>
            <div className="flex align-center text-slate-300 gap-3 lg:gap-8 items-center">
                <a
                    href="https://www.linkedin.com/in/guozhetao"
                    className="block hover:translate-y-[-0.2rem]"
                >
                    <Linkedin />
                </a>
                <a
                    href="https://github.com/guozhetao"
                    className="block hover:translate-y-[-0.2rem]"
                >
                    <Github />
                </a>
            </div>
        </div>
    )
}
