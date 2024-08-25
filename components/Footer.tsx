import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube, FaDiscord } from "react-icons/fa6";

function Footer() {
  return (
    <div className='bg-violet-100/[0.05] pt-2 rounded-3xl mt-20'>

    <div className='container-1200 flex flex-col md:flex-row justify-between items-center mt-[3rem] md:mt-[7rem] pl-20 pr-20'>
        <Image
        src="/images/techbrewers.png"
        alt="TechBrewers Logo"
        width={225}
        height={225}
        />
        <div className='flex flex-col justify-between items-center md:items-end mt-12 md:mt-0 h-full gap-y-4 w-full md:w-auto'>
            <div className='flex flex-row items-center w-full justify-between md:justify-end gap-x-auto md:gap-x-6 md:w-unset mx-auto text-3xl'>
                <Link href='https://www.instagram.com/club_techbrewers/' className='text-white hover:text-violet-300' target='_blank'>
                <FaInstagram />
                </Link>
                <Link href='https://www.linkedin.com/company/club-techbrewers/' className='text-white hover:text-violet-300' target='_blank'>
                <FaLinkedinIn />
                </Link>
                <Link href='https://twitter.com/ClubTechBrewers' className='text-white hover:text-violet-300' target='_blank'>
                <FaXTwitter />
                </Link>
                <Link href='https://www.youtube.com/@club_techbrewers' className='text-white hover:text-violet-300' target='_blank'>
                <FaYoutube />
                </Link>
                <Link href='https://bit.ly/TBDISCORD' className='text-white hover:text-violet-300' target='_blank'>
                <FaDiscord />
                </Link>

            </div>
            <div className='flex flex-row gap-x-[0.5rem] md:gap-x-[2rem] text-[0.8rem] md:text-[1rem] items-center text-center justify-between w-full md:w-unset mt-1'>
            <Link href='mailto:contact@techbrewers.org' target='_blank' className='text-xl text-white hover:text-violet-300'>Partner with us</Link>
            <Link href='https://drive.google.com/drive/folders/1IQOpzydf6TpsRUpgsCXPN2VC4e-27sul?usp=sharing' target='_blank' className='text-xl text-white hover:text-violet-300'>Brand Guide</Link>
            
            </div>
        </div>
    </div>
    <div className="overflow-hidden relative">
        <p className="text-center uppercase mt-20 text-4xl md:text-8xl lg:text-[11rem] xl:text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-violet-800/[0.2] to-neutral-200 dark:to-white-100/[0.1]">
          TechBrewers
        </p>
    </div>
    
    </div>
  );
}

export default Footer;
