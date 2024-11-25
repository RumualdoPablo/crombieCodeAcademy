"use client";

import { metadata } from './metadata';
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const categoryArray = [{ name: 'women' }, { name: 'men' }, { name: 'kids' }, { name: 'outlet' }];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gray-800 text-white py-4">
          <nav className="flex justify-center space-x-6 font-bold text-gray-400">
            <ul className="flex gap-6 justify-center font-bold text-gray-400">
              <li>
                <Link href="/" className="hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li className="border-l border-gray-600 pl-6">
                <Link href="/login" className="hover:text-gray-200">
                  Login
                </Link>
              </li>
              {categoryArray.map((category) => (
                <li key={category.name} className="border-l border-gray-600 pl-6">
                  <Link href={`/categorias/${category.name}`} className="hover:text-gray-200">
                    {category.name}
                  </Link>
                </li>
              ))}
              <li className="relative group border-l border-gray-600 pl-6">
                <Link href="#" className="hover:text-gray-200">
                  Newsletter
                </Link>
                <ul className="absolute z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out bg-white text-black rounded-lg shadow-lg mt-2 min-w-[200px]">
                  <li>
                    <Link href="/newsletter/signup" className="block px-4 py-2 hover:bg-gray-200 rounded-t-lg">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link href="/newsletter/last" className="block px-4 py-2 hover:bg-gray-200 rounded-b-lg">
                      Last Newsletter
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
