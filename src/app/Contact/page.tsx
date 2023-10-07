import Image from 'next/image'
import ContactForm from './form'

export default function Contact() {
	return (
		<section id="contact_section" className="py-20 mx-auto max-w-5xl gap-14">
			<div className="flex flex-col justify-center items-center">
				<div className="text-xl font-bold md:text-4xl bg-clip-text text-transparent bg-cyan-400">
					Contact Me
				</div>
			</div>
			<div className='flex flex-col md:flex-row justify-center items-center mt-12 md:gap-28'>
				<div>
					<Image src="/ContactMe.png" alt="contact" width={250} height={100} />
				</div>
				<ContactForm />
			</div>
		</section>
	)
}
