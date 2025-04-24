import { BigButton } from "./buttons";
import Link from 'next/link';
import Image from 'next/image';
import { FooterForm } from "./forms";
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';


function Footer() {
    
    function FooterLink({url, text}) {
        return (
            <>
            <Link href={url} > <p className="text-lg hover:text-grey hover:underline"> {text} </p> </Link>
            </>
        )
    }

    return (
        <>
            <div className="p-1 lg:p-2.5">
                <section className="mx-2.5 lg:mx-0 lg:px-50 z-0 relative lg:mt-24">

                    <div className="bg-blue text-white px-5 py-8 md:px-8 lg:p-50 lg:flex lg:items-center lg:justify-between rounded-xl z-50">
                        <div className="lg:w-1/2">
                            <h4 className="text-30px lg:text-2xl lg:leading-25px capitalize font-semibold lg:font-normal">Care for Your Loved Ones That 
                                Doesn&apos;t Put Your Life on Hold.
                            </h4>

                            <p className="text-xl py-2.5">Do all the things you have to do while we provide adequate care. </p>
                        </div>

                        <BigButton
                            url="/contact-benison-home-medicare"
                            text="Get Home Care"
                            className="bg-green"
                        />
                    </div>

                </section>

                <section className="bg-dark px-5 lg:px-50 pt-64 pb-50 -mt-48 lg:-mt-[140px] -z-10 text-white border-blue border-b">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-3/5 lg:pr-52">
                            <h4 className="text-30px lg:text-2xl capitalize">Got Questions?</h4>
                            <p className="text-xl">Reach out to us via chat and a member of our team will reply promptly to answer your questions.</p>
                            <div className="py-2.5" />
                            <FooterForm />
                        </div>

                        <div className="flex lg:w-2/5 gap-12 pt-5 lg:pt-0">
                            <div className="md:w-2/5 flex flex-col gap-4">
                                <h3 className="font-semibold text-xl pb-5">Benison Home Medicare</h3>
                                <FooterLink url="/about-us" text="About Us" />
                                <FooterLink url="/our-services" text="Services" />
                                <FooterLink url="/faqs" text="FAQs" />
                                <FooterLink url="/contact-benison-home-medicare" text="Contact Us" />                            
                            </div>

                            <div className="md:w-2/5 flex flex-col gap-4">
                                <h3 className="font-semibold text-xl pb-5">For Customers</h3>
                                <FooterLink url="" text="Priority Support" />
                                <FooterLink url="" text="Reschedule Appointment" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-5 lg:px-50 py-2.5 lg:py-1.5 bg-dark rounded-b-xl flex items-center text-white justify-between lg:justify-center">
                    <div className="lg:w-1/3 flex text-25px lg:text-30px gap-8">
                        <a href="https://www.facebook.com/p/Benison-home-Medicare-100083341477008/"><FaFacebook className="hover:text-blue" /></a>
                        <a href="https://www.instagram.com/benison_care/"><FaInstagram className="hover:text-blue" /></a>
                        <a href="mailto:benisonhomecare@gmail.com"><FaEnvelope className="hover:text-blue" /></a>
                    </div>

                    <div className="w-1/3 lg:flex flex-col items-center justify-center hidden ">
                        <Image 
                            src="/BenisonHomecareLogo.png"
                            alt=""
                            height={50}
                            width={50}
                            className="hidden md:block"
                        />

                        <p className="text-sm text-center">©2025, Benison Home Medicare Limited <br/> All Rights Reserved</p>
                    </div>

                    <div className="w-1/3 text-right text-lg">
                        <Link href="/privacy-policy"><p className="text-lg hover:text-grey hover:underline pb-1.5">Privacy Policy</p></Link>
                        <a className="text-sm hover:text-grey hover:underline lg:hidden" href="https://biteagency.pro">Built by BITe Agency</a>
                        <a className="text-sm hover:text-grey hover:underline hidden lg:block" href="https://biteagency.pro">Website built by BITe Agency</a>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer