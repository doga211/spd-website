// export default function Footer() {
//     return (
//       <footer className="bg-secondary text-black text-center p-4">
//         <p>&copy; {new Date().getFullYear()} Skills for Peace and Development</p>
//       </footer>
//     );
//   }
  

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Add social media icons

export default function Footer() {
  return (
    <footer className="bg-[#E9D5A2] text-black p-8">
      <div className="container mx-auto text-center">
        {/* Logo or Name Section */}
        <h2 className="text-2xl font-semibold mb-4">Skills for Peace and Development</h2>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="https://facebook.com" target="_blank">
            <FaFacebook className="text-xl hover:text-primary transition duration-300" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter className="text-xl hover:text-primary transition duration-300" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin className="text-xl hover:text-primary transition duration-300" />
          </Link>
        </div>

        {/* Contact Information */}
        <div className="text-lg mb-4">
          <p>
            <strong>Contact Us:</strong> Munuki Block ‘C’, near Holy Family Catholic Parish Church, Juba-South Sudan
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:lutteay2016@gmail.com" className="hover:text-primary">lutteay2016@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+211929298668" className="hover:text-primary">+211 929 298 668</a> / <a href="tel:+211917394080" className="hover:text-primary">+211 917 394 080</a>
          </p>
        </div>

        {/* Footer Copyright */}
        <p className="text-sm mt-4">
          &copy; {new Date().getFullYear()} Skills for Peace and Development. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
