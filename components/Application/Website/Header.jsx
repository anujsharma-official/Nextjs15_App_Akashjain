'use client'

import { USER_DASHBOARD, WEBSITE_HOME, WEBSITE_LOGIN, WEBSITE_SHOP } from '@/routes/WebsiteRoute'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '@/public/assets/images/logo-black.png'
import { IoIosSearch } from "react-icons/io"
import Cart from './Cart'
import { VscAccount } from "react-icons/vsc"
import { useSelector } from 'react-redux'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import userIcon from '@/public/assets/images/user.png'
import { IoMdClose } from "react-icons/io"
import { HiMiniBars3 } from "react-icons/hi2"
import Search from './Search'

const Header = () => {
  const auth = useSelector(store => store.authStore.auth)
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const navLinks = [
    { href: WEBSITE_HOME, label: "Home" },
    { href: "/about-us", label: "About" },
    { href: WEBSITE_SHOP, label: "Shop" },
    { href: `${WEBSITE_SHOP}?category=t-shirts`, label: "T-shirt" },
    { href: `${WEBSITE_SHOP}?category=hoodies`, label: "Hoodies" },
    { href: `${WEBSITE_SHOP}?category=oversized`, label: "Oversized" },
  ]

  return (
    <header className="bg-white border-b lg:px-32 px-4 sticky top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center lg:py-4 py-3">
        
        {/* Logo */}
        <Link href={WEBSITE_HOME}>
          <Image
            src={logo}
            width={383}
            height={146}
            alt="logo"
            className="lg:w-32 w-24"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <Link 
              key={idx} 
              href={link.href} 
              className="text-gray-600 hover:text-primary hover:font-semibold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          
          {/* Search */}
          <button 
            type="button" 
            onClick={() => setShowSearch(!showSearch)} 
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <IoIosSearch className="text-gray-600" size={24} />
          </button>

          {/* Cart with hover effect */}
          <div className="relative">
            <Cart />
            {/* Example Badge (agar count chahiye to redux se number lo) */}
            {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
              3
            </span> */}
          </div>

          {/* Account */}
          {!auth ? (
            <Link href={WEBSITE_LOGIN} className="p-2 rounded-full hover:bg-gray-100 transition">
              <VscAccount className="text-gray-600" size={24} />
            </Link>
          ) : (
            <Link href={USER_DASHBOARD} className="p-1 rounded-full hover:bg-gray-100 transition">
              <Avatar className="w-8 h-8">
                <AvatarImage src={auth?.avatar?.url || userIcon.src} />
              </Avatar>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button 
            type="button" 
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition" 
            onClick={() => setIsMobileMenu(true)}
          >
            <HiMiniBars3 size={24} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenu && (
        <div className="fixed inset-0 bg-black/40 z-50 lg:hidden" onClick={() => setIsMobileMenu(false)}>
          <div
            className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-5 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top with logo and close */}
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <Image src={logo} width={120} height={50} alt="logo" />
              <button onClick={() => setIsMobileMenu(false)}>
                <IoMdClose size={26} className="text-gray-600 hover:text-primary" />
              </button>
            </div>

            {/* Nav Links */}
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="block text-gray-700 hover:text-primary font-medium"
                    onClick={() => setIsMobileMenu(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Search Component */}
      <Search isShow={showSearch} />
    </header>
  )
}

export default Header
