// // src/app/contact/page.js
// export default function Contact() {
//     return (
//       <section className="py-16">
//         <h2 className="text-3xl font-bold text-center text-green-700">Contact Us</h2>
//         <div className="max-w-xl mx-auto mt-6">
//           <p className="text-gray-700">Munuki Block ‘C’, near Holy Family Catholic Parish Church, off 107 Street, Juba-South Sudan.</p>
//           <p className="mt-2 text-gray-700">Phone: +211 929 298 668 / +211 917 394 080</p>
//           <p className="mt-2 text-gray-700">Email: lutteay2016@gmail.com</p>
//         </div>
//       </section>
//     );
// //   }
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

// export default function Contact() {
//   return (
//     <section className="py-16 px-6 bg-gray-50">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <h2 className="text-4xl font-extrabold text-center text-green-700">Contact Us</h2>
//         <p className="text-center mt-4 text-lg text-gray-700">
//           Get in touch with Skills for Peace and Development (SPD) for inquiries, collaborations, and support.
//         </p>

//         {/* Organization Details */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
//             <h3 className="text-2xl font-semibold text-gray-800">Organization Details</h3>
//             <p className="text-lg text-gray-700">
//               <strong>Name:</strong> Skills for Peace and Development (SPD)
//             </p>
//             <p className="text-lg text-gray-700 flex items-center">
//               <FaMapMarkerAlt className="text-green-700 text-2xl mr-3" />
//               <span>Munuki Block ‘C’, near Holy Family Catholic Parish Church, off 107 Street, Juba-South Sudan.</span>
//             </p>
//             <p className="text-lg text-gray-700">
//               <strong>Executive Director:</strong> Florence Nighty Otto Luttay
//             </p>
//             <p className="text-lg text-gray-700 flex items-center">
//               <FaPhoneAlt className="text-green-700 text-2xl mr-3" />
//               <span>+211 929 298 668 / +211 917 394 080</span>
//             </p>
//             <p className="text-lg text-gray-700 flex items-center">
//               <FaEnvelope className="text-green-700 text-2xl mr-3" />
//               <a href="mailto:lutteay2016@gmail.com" className="text-blue-600 hover:underline">
//                 lutteay2016@gmail.com
//               </a>
//             </p>

//             {/* Social Media Links */}
//             <div className="flex space-x-4 mt-4">
//               <a href="#" className="text-green-700 text-3xl hover:text-green-500">
//                 <FaFacebook />
//               </a>
//               <a href="#" className="text-green-700 text-3xl hover:text-green-500">
//                 <FaTwitter />
//               </a>
//               <a href="#" className="text-green-700 text-3xl hover:text-green-500">
//                 <FaLinkedin />
//               </a>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-semibold text-gray-800">Send Us a Message</h3>
//             <form className="mt-4 space-y-4">
//               <div>
//                 <label className="block text-lg font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full mt-2 p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-lg font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full mt-2 p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-lg font-medium text-gray-700">Message</label>
//                 <textarea
//                   placeholder="Your Message"
//                   rows="4"
//                   className="w-full mt-2 p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-green-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-center text-green-700">Contact Us</h2>
        <p className="text-center mt-4 text-lg text-gray-700">
          Get in touch with Skills for Peace and Development (SPD) for inquiries, collaborations, and support.
        </p>

        {/* Organization Details */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Organization Details</h3>
            <p className="text-lg text-gray-700">
              <strong>Name:</strong> Skills for Peace and Development (SPD)
            </p>
            <p className="text-lg text-gray-700 flex items-center">
              <FaMapMarkerAlt className="text-green-700 text-2xl mr-3" />
              <span>Munuki Block ‘C’, near Holy Family Catholic Parish Church, off 107 Street, Juba-South Sudan.</span>
            </p>
            <p className="text-lg text-gray-700">
              <strong>Executive Director:</strong> Florence Nighty Otto Luttay
            </p>
            <p className="text-lg text-gray-700 flex items-center">
              <FaPhoneAlt className="text-green-700 text-2xl mr-3" />
              <span>+211 929 298 668 / +211 917 394 080</span>
            </p>
            <p className="text-lg text-gray-700 flex items-center">
              <FaEnvelope className="text-green-700 text-2xl mr-3" />
              <a href="mailto:lutteay2016@gmail.com" className="text-blue-600 hover:underline">
                lutteay2016@gmail.com
              </a>
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-green-700 text-3xl hover:text-green-500">
                <FaFacebook />
              </a>
              <a href="#" className="text-green-700 text-3xl hover:text-green-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-green-700 text-3xl hover:text-green-500">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">Send Us a Message</h3>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-lg font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Table */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Contacts</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Position</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Florence Nighty Otto Luttay</td>
                <td className="border border-gray-300 px-4 py-2">Executive Director</td>
                <td className="border border-gray-300 px-4 py-2">+211 929 298 668</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="mailto:lutteay2016@gmail.com" className="text-blue-600 hover:underline">
                    lutteay2016@gmail.com
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">John Doe</td>
                <td className="border border-gray-300 px-4 py-2">Operations Manager</td>
                <td className="border border-gray-300 px-4 py-2">+211 900 123 456</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="mailto:john.doe@example.com" className="text-blue-600 hover:underline">
                    john.doe@example.com
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Jane Smith</td>
                <td className="border border-gray-300 px-4 py-2">Finance Officer</td>
                <td className="border border-gray-300 px-4 py-2">+211 911 567 890</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="mailto:jane.smith@example.com" className="text-blue-600 hover:underline">
                    jane.smith@example.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
