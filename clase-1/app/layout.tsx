import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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

export const metadata: Metadata = {
    title: "Crombie Next",
    description: "Generated by create next app",
};

const categoryArray = [
    { name: "women" },
    { name: "men" },
    { name: "kids" },
    { name: "outlet" },
];

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
                <h2 className="flex justify-center">Navigation</h2>
                {/* <div className="flex gap-6 justify-center font-bold text-fuchsia-400">
          <Link href="/" className="hover:text-fuchsia-600">Home</Link>
          <Link href="/categorias/zapatos" className="hover:text-fuchsia-600">Zapatos</Link>
        </div> */}
                <ul className="flex gap-6 justify-center font-bold text-fuchsia-400">
                    <Link href="/">Home</Link>
                    <Link href="/login">Login</Link>
                    {categoryArray.map((category) => (
                        <Link
                            key={category.name}
                            href={`/categorias/${category.name}`}
                        >
                            {category.name}
                        </Link>
                    ))}
                </ul>
                {children}
            </body>
        </html>
    );
}
