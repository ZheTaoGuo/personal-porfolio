'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Intro() {
    const typedRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: [
                    'Aspiring Software Engineer',
                    'DeFi Enthusiast',
                    'Bookworm'
                ],
                typeSpeed: 100,
                backSpeed: 100,
                loop: true,
            })

            return () => {
                typed.destroy()
            }
        }
    }, [])

    return <span ref={typedRef} className="text-[#8de8ff]"></span>
}
