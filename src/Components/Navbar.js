// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-primary text-white p-4">
//       <div className="container mx-auto flex justify-between">
//         <Link href="/">
//           <h1 className="text-lg font-bold">Skills for Peace</h1>
//         </Link>
//         <div className="space-x-4">
//           <Link href="/about">About</Link>
//           <Link href="/programs">Programs</Link>
//           <Link href="/events">Events</Link>
//           <Link href="/contact">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }


// "Use client";
// import Link from 'next/link';
// import Image from 'next/image';  // For image optimization

// export default function Navbar() {
//   return (
//     <nav className="bg-[#f7eed5] text-white p-4 sticky">
//       <div className="container  mx-auto flex justify-between items-center">
//         {/* Logo Section */}
//         <Link href="/">
//           <div className="flex items-center space-x-2">
//             <Image
//               src="/logo.jpg"  // Path to your logo image
//               alt="Skills for Peace Logo"
//               width={60}        // Adjust logo size here
//               height={46}       // Adjust logo size here
//             />
//             <h1 className="text-xl font-bold text-[#FAA413]">Skills for Peace & Development</h1>
//           </div>
//         </Link>

//         {/* Navigation Links */}
//         <div className="space-x-6 text-lg">
//           <Link href="/about" className="hover:text-secondary text-lg">About</Link>
//           <Link href="/programs" className="hover:text-secondary">Programs</Link>
//           <Link href="/events" className="hover:text-secondary">Events</Link>
//           <Link href="/contact" className="hover:text-secondary">Contact</Link>
//         </div>
//         <button>Contact Us</button>
//       </div>
//     </nav>
//   );
// }




"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Mobile menu icons
import ContactForm from "./ContactForm";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);


  return (
    <motion.nav
      className="bg-[#f7eed5] p-4 sticky top-0 shadow-md z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/">
          <motion.div
            className="flex items-center space-x-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/Logo.png"
              alt="Skills for Peace Logo"
              width={60} 
              height={46}
              className="square"
            />
            <h1 className="text-xs font-bold md:text-lg text-[#FAA413]">
              Skills for Peace & Development
            </h1>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg">
          {["about", "programs", "events", "contact"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="hover:text-[#FAA413] transition duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Contact Us Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:block bg-[#FAA413] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#d78c0d] transition duration-300"
          onClick={() => setShowContact(true)}
        >
          Contact Us
        </motion.button>
        {/* Contact Form Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90%] max-w-lg">
            <button
              className="absolute top-2 right-2 text-gray-700"
              onClick={() => setShowContact(false)}
            >
              ✖
            </button>
            <ContactForm />
            </div>
        </div>
      )}

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden flex flex-col bg-[#f7eed5] p-4 mt-2 rounded-md shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["about", "programs", "events", "contact"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="block py-2 text-center hover:text-[#FAA413] transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-2 bg-[#FAA413] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#d78c0d] transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
}
