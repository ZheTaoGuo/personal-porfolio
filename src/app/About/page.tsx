import Image from 'next/image'
import Intro from './description'

export default function About() {
    return (
        <div className="flex flex-col items-center h-[100vh] justify-center md:gap-5 lg:gap-4 xl:gap-3">
            <div className="flex flex-wrap justify-center items-center md:gap-16 lg:gap-32">
                <div className="max-w-full h-auto">
                    <Image
                        src="/zhetao.png"
                        alt="myImage"
                        className="select-none rounded-full"
                        width="200"
                        height="100"
                    />
                </div>
                <div className="flex flex-col gap-2 md:gap-3 xl:gap-6 flex-wrap max-w-full">
                    <div className="text-md md:text-2xl lg:text-lg xl:text-xl dark:bg-slate-800">
                        Hello, my name is
                    </div>
                    <div className="text-3xl md:text-2xl lg:text-3xl xl:text-5xl dark:bg-slate-800 font-bold">
                        Guo ZheTao
                    </div>
                    <div className="text-md md:text-2xl lg:text-3xl xl:text-5xl text-slate-100">
                        I am a <Intro />
                    </div>
                    <div className="text-md md:text-2xl lg:text-lg xl:text-xl text-slate-300">
                        Currently an Information Systems Undergraduate at Singapore Management University
                    </div>
                </div>

            </div>
        </div>
    )
}
