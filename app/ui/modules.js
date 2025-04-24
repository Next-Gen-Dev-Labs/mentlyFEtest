'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './buttons';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';


function Divider() {
	return (
		<>
			<div className="divider "></div>
		</>
	)
}

function Toggle ({q, a}) {
	const [isOpen, setIsOpen] = useState(false);

	function Open() {
		setIsOpen(!isOpen);
	}
	
	return (
		<>
			<div className='border-blue border-b-2 py-5' onClick={Open}>
				<div className='flex gap-5 justify-between'>
					<h4 className='font-normal text-25px lg:text-30px'>{q}</h4>
					<button className='border-0 ' onClick={Open}> { isOpen ? <PlusIcon height={40} /> : <MinusIcon height={40} /> } </button>
				</div>

				<p className={ `${isOpen ? "block" : "hidden" }  text-xl py-2.5` }> {a} </p>
			</div>
		</>
	)
}

function Tag({ className, text }) {
	return (
		<h2 className={ className + " text-md p-2.5 bg-light-blue rounded-xl" }> { text } </h2>
	)
}

function LeftImageSection({ src, alt, imgClass, title, text }) {
	return (
		<div className="lg:flex lg:flex-row lg:items-center pt-12 gap-100 ">
			<div className="lg:w-1/2">
				<Image 
				src={src} 
				alt={alt}
				height={400} width={600} className={ imgClass + " w-full rounded-xl "} 
				/>
			</div>
			<div className="lg:w-1/2 pt-5 lg:pt-0">
				<h3 className="text-25px lg:text-30px font-semibold">{title}</h3>
				<p className="pt-5 text-xl  ">{text}</p>
				<div className="p-5" />
				<Button className="hidden lg:block" url="/contact-benison-home-medicare" text="Get Home Care" />
			</div>
		</div>
	)
}

function RightImageSection({ src, alt, imgClass, title, text }) {
	return (
		<div className="flex flex-col-reverse lg:flex-row lg:items-center pt-12 gap-5 lg:gap-100 ">
            
			<div className="lg:w-1/2 lg:pt-12 lg:pt-0">
				<h3 className="text-25px lg:text-30px font-semibold"> {title} </h3>
				<p className="pt-5 text-xl ">{text}
				</p>
				<div className="p-5" />
				<Button className="hidden lg:block" url="/contact-benison-home-medicare" text="Get Home Care" />
			</div>

			<div className="lg:w-1/2 pt-50 lg:pt-0">
				<Image 
				src={src}
				alt={alt} height={400} width={600} className={ imgClass + " w-full rounded-xl "}  
				/>
			</div>
		</div>
	)
}

function Testimonials() {
	return (
		<div className="p-1 lg:p-2.5 lg:pt-0">
			<section className="px-5 py-12 lg:px-50 lg:py-100 bg-light-green rounded-xl">
			<div className="px-5 py-8 lg:p-50 lg:flex items-center gap-100 bg-white rounded-xl">
				<div className="w-2/5 ">
					<Image className="rounded-xl hidden lg:block" 
						src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1737666104/feedback-rating-concept-cartoon-hand-holds-yellow-star-sign-feedback-rating-good-review-five-stars-rating-vector-3d-illustration_221648-643_sqfwqh.jpg" 
						alt="" 
						width={500} height={400} 
					/>
				</div>

				<div className="lg:w-3/5 flex flex-col items-start">
				<Tag className="rounded-xl" text="Testimonials" />
				<p className="text-xl lg:pt-12 lg:pb-8 py-5">&quot;Benison Homecare has been a life saver. Since I started using them, I can go to work and 
					cater to my nuclear family with absolute peace of mind, knowing very well that my aged mother is in good hands.&quot;
				</p>
				<span className="text-25px text-blue">Adaobi E.</span>
				<span className="text-lg">Client&apos;s Daughter</span>

				</div>
			</div>
			</section>
		</div>

	)
}

function Locations() {
	return (
		<div className="p-1 lg:p-2.5 lg:pt-0 ">
        <section className="px-5 lg:px-50 py-12 lg:py-50 rounded-xl bg-grey lg:flex gap-24 justify-between items-center">

          <div className="lg:w-2/5">
            <h3 className='lg:text-2xl text-30px font-bold '>Locations We Serve</h3>

            <p className='text-xl'>We provide homecare services in Benin city, round the clock.
              You can reach us via:
            </p>

            <p className='text-xl font-semibold pt-5'>Phone: 
              <Link href="tel:+2348052765167" className='hover:underline'> +2348052765167,</Link> 
              <Link href="tel:+2349032217601" className='hover:underline'> +2349032217601</Link>
            </p>

            <p className='text-xl font-semibold'>Whatsapp: <Link href="https://wa.me/2348052765167" className='hover:underline'>+2348052765167</Link></p>

			<p className='text-xl font-semibold'>Email: <Link href="mailto:benisonhomecare@gmail.com" className='hover:underline'>benisonhomecare@gmail.com</Link></p>


            <p className='text-xl font-semibold'>Address: 78, Uselu Shell, Benin City, Edo State.</p>

          </div>

          <div className="lg:w-3/5 flex lg:justify-end">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.475543411577!2d5.598811142967041!3d6.400304444594233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10472d10711eacf5%3A0xba82c49f07476599!2sUselu!5e0!3m2!1sen!2sng!4v1737642464968!5m2!1sen!2sng" width={600} height={450} style={{border:"0"}} loading="lazy" className='rounded-xl md:w-full'></iframe>
          </div>
        </section>

      </div>
	)
}

export { Divider, Tag, Toggle, LeftImageSection, RightImageSection, Testimonials, Locations }