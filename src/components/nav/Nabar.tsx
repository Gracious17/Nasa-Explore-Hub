"use client"
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export function Navbar() {
  const { data: session } = useSession()
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <div className="space-x-4">
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
    </nav>
  );
}
