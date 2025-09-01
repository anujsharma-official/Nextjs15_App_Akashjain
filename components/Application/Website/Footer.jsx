import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/images/logo-black.png'
import Link from 'next/link'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FiTwitter } from "react-icons/fi";

import { USER_DASHBOARD, WEBSITE_HOME, WEBSITE_LOGIN, WEBSITE_REGISTER, WEBSITE_SHOP } from '@/routes/WebsiteRoute'
const Footer = () => {
             

     const whatsappNumber = "9079101618";
     const message = "Hello! I want to connect with you.";
     const encodedMessage = encodeURIComponent(message);


    return (
        <footer className='bg-gray-50 border-t'>
            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10 py-10 lg:px-32 px-4'>

                <div className='lg:col-span-1 md:col-span-2 col-span-1'>
                    <Image
                        src={logo}
                        width={383}
                        height={146}
                        alt='logo'
                        className='w-36 mb-2'
                    />
                    <p className='text-gray-500 text-sm'>
                    <b>STYLITHIC FASHIONS</b> — your trusted destination for style, quality, and everyday convenience. From timeless fashion to daily essentials, we deliver everything you need, straight to your doorstep. Shop smarter, live better, and experience the difference — only with <b>STYLITHIC FASHIONS</b>.
                    </p>
                </div>


                <div>
                    <h4 className='text-xl font-bold uppercase mb-5'>Categories</h4>
                    <ul>
                        <li className='mb-2 text-gray-500'>
                            <Link href={`${WEBSITE_SHOP}?category=t-shirts`}>T-shirt</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={`${WEBSITE_SHOP}?category=hoodies`}>Hoodies</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={`${WEBSITE_SHOP}?category=oversized`}>Oversized</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={`${WEBSITE_SHOP}?category=full-sleeves`}>Full Sleeves</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={`${WEBSITE_SHOP}?category=polo`}>Polo</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-bold uppercase mb-5'>Userfull Links</h4>
                    <ul>
                        <li className='mb-2 text-gray-500'>
                            <Link href={WEBSITE_HOME}>Home</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={WEBSITE_SHOP}>Shop</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href="/about-us">About</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={WEBSITE_REGISTER}>Register</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={WEBSITE_LOGIN}>Login</Link>
                        </li>

                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-bold uppercase mb-5'>Help Center</h4>
                    <ul>
                        <li className='mb-2 text-gray-500'>
                            <Link href={WEBSITE_REGISTER}>Register</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={WEBSITE_LOGIN}>Login</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href={USER_DASHBOARD}>My Account</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li className='mb-2 text-gray-500'>
                            <Link href="/terms-and-conditions">Terms & Conditions</Link>
                        </li>


                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-bold uppercase mb-5'>Contact Us </h4>
                    <ul>
                        <li className='mb-2 text-gray-500 flex gap-2'>
                            <IoLocationOutline size={20} />
                            <span className='text-sm'>jaipur</span>
                        </li>
                        <li className='mb-2 text-gray-500 flex gap-2'>
                            <MdOutlinePhone size={20} />
                            <Link href="tel:+91-9079101618" className='hover:text-primary text-sm'>+91-9079101618</Link>
                        </li>
                        <li className='mb-2 text-gray-500 flex gap-2'>
                            <MdOutlineMail size={20} />
                            <Link href="mailto:Stylithic.sup.1304@gmail.com" className='hover:text-primary text-sm'>Stylithic.sup.1304@gmail.com</Link>
                        </li>

                    </ul>


                    <div className='flex gap-5 mt-5'>

                       
                        <Link href="https://www.instagram.com/akash_618_?igsh=MjAxc2UzOTc4bTBh">
                            <FaInstagram className='text-primary' size={25} />
                        </Link>
                        <Link href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}>
                            <FaWhatsapp className='text-primary'   size={25} />
                        </Link>

                    </div>

                </div>

            </div>


            <div className='py-5 bg-gray-100' >
                <p className='text-center'>© {new Date().getFullYear()} Stylithic Fashions™. All Rights Reserved.</p>
            </div>

        </footer>
    )
}

export default Footer