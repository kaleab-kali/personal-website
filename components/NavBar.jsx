import Image from "next/image";
import Link from "next/link";
import React from "react";
import {AiOutlineMenu} from 'react-icons/ai';

const NavBar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/logo.png"
          alt="/"
          width="125"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="../public/assets/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="../public/assets/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="../public/assets/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skill</li>
            </Link>
            <Link href="../public/assets/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Project
              </li>
            </Link>
            <Link href="../public/assets/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu />
        
          </div>
        </div>{/*end of buttons*/}
       
      </div>
    </div>
  );
};

export default NavBar;
