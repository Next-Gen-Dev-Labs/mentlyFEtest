'use client';

import Link from 'next/link';
import { useState } from "react";
import { MdOutlineArrowOutward, MdOutlineCheckCircle, MdOutlineError } from "react-icons/md";

function LoginForm() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    
    };

    async function submit(e) {
        e.preventDefault();

        if (inputs.email === process.env.NEXT_PUBLIC_EMAIL && inputs.password === process.env.NEXT_PUBLIC_PASSWORD) {
            // Redirect to the dashboard
            window.location.href = "/dashboard";
        }
        else {
            // Show error message
            document.getElementById('error').style.display = 'block';
        }
    }

    return (
        <>
            <p id="error" className="flex gap-2 items-center text-lg p-2 bg-red-100 text-red-800 rounded-md hidden mb-4"><MdOutlineError /> <span>Invalid username or password</span></p>
            <form onSubmit={submit} className="flex flex-col gap-5">
                <div className="flex flex-col">
                    <label className="font-semibold" htmlFor="email">Email Address <span className="text-[#f00] text-xl">*</span></label>
                    <input required autoComplete='email' className="rounded-md p-2.5 focus:border focus:border-blue focus:border-sm focus:bg-[#eee] " name="email" id="email" placeholder="Email Address" onChange={handleChange}/>
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold" htmlFor="password">Password <span className="text-[#f00] text-xl">*</span></label>
                    <input required autoComplete='current-password' className="rounded-md p-2.5 focus:border focus:border-blue focus:border-sm focus:bg-[#eee] " name="password" id="password" placeholder="Password" type="password" onChange={handleChange}/>
                </div>

                <input type="submit" className="bg-blue rounded-md py-2.5 text-white hover:bg-green font-semibold" />
            </form>
        </>
    )

}

function ContactForm() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    
    };

    async function submit(e) {
        e.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzMUIY70-w0_6hOewvdzGXnw_wqvGkkXDTCdAqqV7brTRcS5QuE92Oys56hxC1L5CiySA/exec';
		const form = document.forms['ContactForm'];
        const data = new FormData(form);
		fetch(scriptURL, { mode: 'no-cors', method: 'POST', body: data});
        console.log('Form submitted', inputs.Name, inputs.Phone, inputs.email, inputs.Message);

        try {
            const response = await fetch('../../api/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  to: [inputs.email],
                  cc: [''], 
                  bcc: [''],
                  message: {
                     subject: 'We have gotten your message',
                     text: `Hello ${inputs.Name}, Thanks for reaching out. We have gotten your message and will be in touch with you soon.`,
                     html: `
                     <html>
                        <head></head>
                        <body>
                           <p>Hello ${inputs.Name},</p>
                           <p>Thanks for reaching out. We have gotten your message and will be in touch with you soon. <br> 
                           A representative will contact you shortly. </p>

                           <p>Can't wait? Click the button below to start a chat.</p>
                           </p>
                           
                           <br>
                            <a href="https://wa.me/2348052765167"><button style="background-color: #F0CEA0; color: #000; font-size:18px; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Start a chat</button></a>
                           <br>
                           <p>Regards,<br><b>Blessing</b></p>
                           <p><i>Founder, Benison Home Medicare Limited</i></p>
                        </body>
                     </html>`,
                  },
               }),
            });


            const result = await response.json();
            document.getElementById('success').style.display = 'block';
            document.getElementById('ContactForm').style.display = 'none';
            document.getElementById('error').style.display = 'none';
            console.log(result.message); // You can also add route instead of alert  route.push() add you own page.
            
        } catch (error) {
            document.getElementById('error').style.display = 'block';
            document.getElementById('success').style.display = 'none';
            console.error('Error sending email:', error);
        }

        try {
            const response = await fetch('../../api/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  to: ['webtest898@gmail.com, benisonehomecare@gmail.com'],
                  cc: [''], 
                  bcc: [''],
                  message: {
                     subject: 'New Contact Form Submission',
                     text: `Hi Blessing, ${inputs.Name} just filled a contact form on your website.`,
                     html: `
                     <html>
                        <head></head>
                        <body>
                           <p>Hello Blessing,</p>
                           <p>${inputs.Name} just filled a contact form on your website.</p>

                           <p>Here are the details:</p>
                           <p>Name: ${inputs.Name}</p>
                           <p>Phone: ${inputs.Phone}</p>
                           <p>Email: ${inputs.email}</p>
                           <p>Message: ${inputs.Message}</p>
                           
                           <br>
                            <a href="mailto:${inputs.email}"><button style="background-color: #F0CEA0; color: #000; font-size:18px; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Send them a mail</button></a>
                           <br>
                           <p>Regards,<br><b>Blessing</b></p>
                           <p><i>Founder, Benison Home Medicare</i></p>
                        </body>
                     </html>`,
                  },
               }),
            });
        } catch (error) {
            console.error('Error sending site owner email:', error);
        }
    };

    return (
        <>
        <p id="success" className="flex gap-2 items-center text-lg p-2 bg-light-green text-green-800 rounded-md hidden"><MdOutlineCheckCircle className="text-25px"/> <span>Message Sent! We will be in touch soon.</span></p>
        <p id="error" className="flex gap-2 items-center text-lg p-2 bg-red-100 text-red-800 rounded-md hidden mb-4"><MdOutlineError /> <span>Message sending failed. Please try again.</span></p>

        <form onSubmit={submit} className="flex flex-col gap-5" name="ContactForm" id="ContactForm" >
            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="name">Full Name <span className="text-[#f00] text-xl">*</span> </label>
                <input required autoComplete='name' className="rounded-md p-2.5 focus:border focus:border-blue focus:border-sm focus:bg-[#eee] " name="Name" id="Name" placeholder="First and Last Name" onChange={handleChange}/>
            </div>

            <div className='flex gap-2'>
                <div className="flex flex-col w-1/2">
                    <label className="font-semibold" htmlFor="phone">Phone Number  <span className="text-[#f00] text-xl">*</span></label>
                    <input required autoComplete='tel' className="rounded-md p-2.5 focus:border-sm focus:border-blue focus:bg-[#eee]" name="Phone" id="Phone" placeholder="Phone Number" type="tel" onChange={handleChange}/>
                </div>

                <div className='flex flex-col w-1/2'>
                    <label className="font-semibold" htmlFor="email">Email Address <span className="text-[#f00] text-xl">*</span></label>
                    <input required autoComplete="email" className="rounded-md p-2.5 focus:border-sm focus:border-blue focus:bg-[#eee]" name="email" id="email" placeholder="Email Address" type="email" onChange={handleChange}/>
                </div>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="message">Message <span className="text-[#f00] text-xl">*</span></label>
                <textarea required className="rounded-md p-2.5 focus:border-sm focus:border-blue focus:bg-[#eee]" name="Message" id="Message" placeholder="Type in your message" type="text" onChange={handleChange}/>
            </div>

            <input type="submit" className="bg-blue rounded-md py-2.5 text-white hover:bg-green font-semibold" />
        </form>
        </>
    )
}

function WorkWithUsForm() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    
    };

    async function submit(e) {
        e.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycby5f-kwt1TC8BvWdg1Xlx5hRhzezW2JQbSE6_rM9h66Y8zDRkJ0rQr38F_T2Iqld4Lr/exec';
		const form = document.forms['form'];
        const data = new FormData(form);
		fetch(scriptURL, { mode: 'no-cors', method: 'POST', body: data});
        console.log('Form submitted');

        try {
            const response = await fetch('../../api/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  to: [inputs.email],
                  cc: [''], 
                  bcc: [''],
                  message: {
                     subject: 'Application received!',
                     text: `Hello ${inputs.Name}, Thanks for reaching out. Your application has been received.`,
                     html: `
                     <html>
                        <head></head>
                        <body>
                           <p>Hello ${inputs.Name},</p>
                           <p>Thanks for reaching out. Your application has been received. <br> 
                           A representative will contact you shortly with next steps. </p>

                           <p>Regards,<br><b>Blessing</b></p>
                           <p><i>Founder, Benison Home Medicare Limited</i></p>
                        </body>
                     </html>`,
                  },
               }),
            });


            const result = await response.json();
            document.getElementById('success').style.display = 'block';
            document.getElementById('form').style.display = 'none';
            document.getElementById('error').style.display = 'none';
            console.log(result.message); // You can also add route instead of alert  route.push() add you own page.
            
        } catch (error) {
            document.getElementById('error').style.display = 'block';
            document.getElementById('success').style.display = 'none';
            console.error('Error sending email:', error);
        }

        try {
            const response = await fetch('../../api/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  to: ['webtest898@gmail.com, benisonehomecare@gmail.com'],
                  cc: [''], 
                  bcc: [''],
                  message: {
                     subject: 'New Work with us form submission',
                     text: `Hi Blessing, ${inputs.Name} just signified interest to work with Benison Home Medicare Limited.`,
                     html: `
                     <html>
                        <head></head>
                        <body>
                           <p>Hello Blessing,</p>
                           <p>${inputs.Name} just signified interest to work with Benison Home Medicare Limited.</p>

                           <p>Here are the details:</p>
                           <p>Name: ${inputs.Name}</p>
                           <p>Phone: ${inputs.Phone}</p>
                           <p>Email: ${inputs.email}</p>
                           <p>Experience: ${inputs.Experience}</p>
                           
                           <br>
                            <a href="tel:${inputs.Phone}"><button style="background-color: #F0CEA0; color: #000; font-size:18px; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Call them now</button></a>
                           <br>
                           <p>Regards,<br><b>Blessing</b></p>
                           <p><i>Founder, Benison Home Medicare</i></p>
                        </body>
                     </html>`,
                  },
               }),
            });
        } catch (error) {
            console.error('Error sending site owner email:', error);
        }
    };

    return (
        <>
        <p id="success" className="flex gap-2 items-center text-lg p-2 bg-light-green text-green-800 rounded-md hidden"><MdOutlineCheckCircle className="text-25px"/> <span>Application Received! You will get a mail from us soon.</span></p>
        <p id="error" className="flex gap-2 items-center text-lg p-2 bg-red-100 text-red-800 rounded-md hidden mb-4"><MdOutlineError /> <span>An error occured. Please try again.</span></p>

        <form className="flex flex-col gap-5" name="form" id="form" onSubmit={submit}>
            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="name">Full Name <span className="text-[#f00] text-xl">*</span> </label>
                <input required autoComplete='name' className="rounded-md p-2.5 focus:border focus:border-blue focus:border-sm focus:bg-[#eee] " name="Name" id="Name" placeholder="First and Last Name" onChange={handleChange} />
            </div>

            <div className='flex gap-2'>
                <div className="flex flex-col w-1/2">
                    <label className="font-semibold" htmlFor="email">Email Address <span className="text-[#f00] text-xl">*</span></label>
                    <input required autoComplete className="rounded-md p-2.5 focus:border-sm focus:border-blue focus:bg-[#eee]" name="email" id="email" placeholder="Email Address" type="email" onChange={handleChange} />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold" htmlFor="phone">Phone Number  <span className="text-[#f00] text-xl">*</span></label>
                    <input required autoComplete='tel' className="rounded-md p-2.5 focus:border-sm focus:border-blue focus:bg-[#eee]" name="Phone" id="Phone" placeholder="Phone Number" type="tel" onChange={handleChange} />
                </div>
            </div>

            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="message">Work Experience <span className="text-[#f00] text-xl">*</span></label>
                <textarea required  className="rounded-md p-2.5 focus:border-sm focus:border-blue focus:bg-[#eee]" name="Experience" id="Experience" placeholder="Give us the details of your professional work experience" type="text" onChange={handleChange} />
            </div>

            <input type="submit" className="bg-blue rounded-md py-2.5 text-white hover:bg-green font-semibold" />
        </form>
        </>
    )
}

function FooterForm() {
    return (
        
        <Link href="https://wa.me/2348052765167"><button className="flex bg-blue hover:bg-green rounded-xl text-xl text-white self-start w-full items-center justify-center gap-8" ><span className=" rounded-l-xl py-2">Start a Conversation</span> <MdOutlineArrowOutward className="rh45 text-30px lg:text-2xl text-center" /></button></Link>
    )
}

export { LoginForm, ContactForm, WorkWithUsForm, FooterForm }