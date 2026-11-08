import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Resyan Azril Pratama | Portofolio",
  description:
    "Portofolio Muhammad Resyan Azril Pratama, siswa SMK calon Junior Web Developer di Kelas Industri UBIG.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-latar text-gray-800">
        {children}
        <footer className="mt-auto bg-utama px-4 py-6 text-center text-sm text-white">
          © {new Date().getFullYear()} Muhammad Resyan Azril Pratama. Dibuat dengan
          Next.js di Kelas Industri UBIG.
        </footer>
      </body>
    </html>
  );
}