'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import * as Form from '@radix-ui/react-form';

const ContactForm = () => {
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleSubjectChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSubject(event.target.value);
	};

	const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(event.target.value);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const body = encodeURIComponent(message);
		const subjectEncoded = encodeURIComponent(subject);
		const mailtoUrl = `mailto:zhetao.guo.2021@scis.smu.edu.sg?subject=${subjectEncoded}&body=${body}`;
		window.location.href = mailtoUrl;
	};

	return (
		<Form.Root
			className="w-full max-w-xl flex flex-col gap-3"
			onSubmit={handleSubmit}
		>
			<Form.Field className="grid mb-[10px]" name="email">
				<div className="flex items-baseline justify-between">
					<Form.Label className="text-[15px] font-medium leading-[35px] text-slate-300">
						Email
					</Form.Label>
					<Form.Message
						className="text-[13px] text-slate-300"
						match="valueMissing"
					>
						Please enter your email
					</Form.Message>
					<Form.Message
						className="text-[13px] text-slate-300"
						match="typeMismatch"
					>
						Please provide a valid email
					</Form.Message>
				</div>
				<Form.Control asChild>
					<input
						className="box-border bg-slate-700 w-full inline-flex h-[45px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-slate-300 outline-none"
						type="email"
						name="email"
						required
						placeholder="name@company.com"
						value={email}
						onChange={handleEmailChange}
					/>
				</Form.Control>
			</Form.Field>

			<Form.Field className="grid mb-[10px]" name="subject">
				<div className="flex items-baseline justify-between">
					<Form.Label className="text-[15px] font-medium leading-[35px] text-slate-300">
						Subject
					</Form.Label>
					<Form.Message
						className="text-[13px] text-slate-300 opacity-[0.8]"
						match="valueMissing"
					>
						Please enter a subject
					</Form.Message>
				</div>
				<Form.Control asChild>
					<input
						className="box-border bg-slate-700 h-[45px] w-full inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-slate-300 outline-none"
						required
						placeholder="Share your idea with me!"
						name="subject"
						value={subject}
						onChange={handleSubjectChange}
					/>
				</Form.Control>
			</Form.Field>

			<Form.Field className="grid mb-[10px]" name="message">
				<div className="flex items-baseline justify-between">
					<Form.Label className="text-[15px] font-medium leading-[35px] text-slate-300">
						Your Message
					</Form.Label>
					<Form.Message
						className="text-[13px] text-slate-300 opacity-[0.8]"
						match="valueMissing"
					>
						Please enter a message
					</Form.Message>
				</div>
				<Form.Control asChild>
          <textarea
			  className="box-border bg-slate-700 h-[100px] w-full inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-slate-300 outline-none"
			  required
			  name="message"
			  value={message}
			  onChange={handleMessageChange}
			  placeholder="Enter your message here"
		  />
				</Form.Control>
			</Form.Field>

			<div className="flex justify-start">
				<Form.Submit asChild>
					<button
						className="text-slate-300 border border-[#8de8ff] rounded-md px-4 py-3 hover:bg-[#8de8ff] hover:text-slate-700 transition-all ease-out"
						type="submit"
					>
						Submit Message
					</button>
				</Form.Submit>
			</div>
		</Form.Root>
	);
};

export default ContactForm;