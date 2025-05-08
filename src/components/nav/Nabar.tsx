"use client"
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
export function Navbar() {
  const [navOpen,setNavOpen]=useState(false)
  const { data: session } = useSession()
 
  const handleNavOpen=()=>{
    setNavOpen(!navOpen)
  }
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <div className="space-x-4 hidden md:flex">
        <Link href="/">Home</Link>
        <Link href="/picture">Pictures</Link>
        <Link href="mars-weather">Mars</Link>
        <Link href="/iss-tracker">ISS</Link>
        <Link href="/asteroids">Asteroids</Link>
        <Link href="/planets">Planets</Link>
      </div>
      <div>
        {session ? (
          <button onClick={() => signOut} className="hover:underline">
            LogOut
          </button>
        ) : (
          <button onClick={() => signIn("github")} className="hover:underline">
            LogIn
          </button>
        )}
      </div>
      <div className="relative md:hidden cursor-pointer border-2 border-white rounded-full p-2" onClick={handleNavOpen}>
        {navOpen?(
          <X size={25}/>
        ):(  <AlignJustify size={25}/>)}
      </div>
      {navOpen && (
        <div className=" absolute space-x-4 flex flex-col bg-gray-900 p-8 rounded shadow-md top-16 right-4 md:hidden">
        <Link href="/">Home</Link>
        <Link href="/picture">Pictures</Link>
        <Link href="mars-weather">Mars</Link>
        <Link href="/iss-tracker">ISS</Link>
        <Link href="/asteroids">Asteroids</Link>
        <Link href="/planets">Planets</Link>
      </div>
      )}
    </nav>
  );
}
