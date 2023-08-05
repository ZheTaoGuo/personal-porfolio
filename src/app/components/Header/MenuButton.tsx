import { motion } from 'framer-motion'

export default function MenuButton({ isOpen }: { isOpen: boolean }) {
    return (
        <button className="flex flex-col justify-around w-5">
            <motion.div
                className="flex flex-col justify-around h-5 w-full"
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
            >
                <motion.span
                    className="block w-full h-1 bg-slate-100"
                    variants={{
                        closed: { rotate: 0 },
                        open: { rotate: 45, translateY: '9px' },
                    }}
                />
                <motion.span
                    className="block w-full h-1 bg-slate-100"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                />
                <motion.span
                    className="block w-full h-1 bg-slate-100"
                    variants={{
                        closed: { rotate: 0 },
                        open: { rotate: -45, translateY: '-5px' },
                    }}
                />
            </motion.div>
        </button>
    )
}
