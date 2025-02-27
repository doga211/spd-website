// // src/app/about/page.js
// export default function About() {
//     return (
//       <section className="py-16">
//         <h2 className="text-3xl font-bold text-center text-green-700">About SPD</h2>
//         <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
//           SPD is a registered national NGO focused on empowering communities through sustainable development initiatives. Founded in 2015 and recognized in 2022 under the Relief and Rehabilitation Commission.
//         </p>
//       </section>
//     );
//   }

// export default function About() {
//   return (
//     <section className="py-16 px-6 bg-gray-50">
//       <div className="max-w-4xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-center text-green-700">About SPD</h2>
//         <p className="text-center mt-4 text-lg text-gray-700">
//           SPD was founded to empower communities through sustainable development initiatives. 
//           Registered as a National NGO in 2015 and officially recognized in 2022 under the 
//           Relief and Rehabilitation Commission.
//         </p>

//         {/* Vision & Mission */}
//         <div className="mt-10 text-center">
//           <h3 className="text-2xl font-semibold text-gray-800">Our Vision & Mission</h3>
//           <p className="mt-3 text-lg">
//             <strong className="text-green-700">Vision:</strong> "Prosperity for all."
//           </p>
//           <p className="mt-2 text-lg">
//             <strong className="text-green-700">Mission:</strong> "Enhancing capacities for positive change and sustainable development."
//           </p>
//         </div>

//         {/* Goals */}
//         <div className="mt-10 text-center">
//           <h3 className="text-2xl font-semibold text-gray-800">Our Goals</h3>
//           <ul className="mt-4 space-y-2 text-lg text-gray-700">
//             <li>✔️ Creating informed and economically empowered citizens.</li>
//             <li>✔️ Promoting peaceful coexistence and social change.</li>
//           </ul>
//         </div>

//         {/* Core Values */}
//         <div className="mt-10 text-center">
//           <h3 className="text-2xl font-semibold text-gray-800">Core Values</h3>
//           <ul className="mt-4 space-y-3 text-lg text-gray-700">
//             <li><strong className="text-green-700">🤝 Collaboration -</strong> Working with various stakeholders for maximum impact.</li>
//             <li><strong className="text-green-700">🛡️ Integrity -</strong> Upholding transparency and accountability.</li>
//             <li><strong className="text-green-700">🌍 Inclusivity -</strong> Respecting diversity and human dignity.</li>
//             <li><strong className="text-green-700">🌱 Sustainability -</strong> Ensuring long-term solutions for communities.</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import { FaEye, FaBullseye, FaHandshake, FaShieldAlt, FaUsers, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  { name: "Florence Nighty Otto", role: "Executive Director", img: "/ED.png" },
  { name: "Jane Kenyi", role: "Programs Coordinator", img: "/jane.jpg" },
  { name: "Michael Brown", role: "Finance Manager", img: "/jane.jpg" },
  { name: "Emily White", role: "Community Outreach", img: "/ED.png" },
];

export default function About() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-center text-green-700">About SPD</h2>
        <p className="text-center mt-4 text-lg text-gray-700 leading-relaxed">
          SPD was founded to empower communities through sustainable development initiatives. 
          Registered as a National NGO in 2015 and officially recognized in 2022 under the 
          Relief and Rehabilitation Commission.
        </p>

        {/* Vision & Mission */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaEye className="text-green-700 text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
              <p className="mt-2 text-lg text-gray-700">"Prosperity for all."</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
            <FaBullseye className="text-green-700 text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
              <p className="mt-2 text-lg text-gray-700">
                "Enhancing capacities for positive change and sustainable development."
              </p>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
            <FaBullseye className="text-green-700 text-3xl mr-3" /> Our Goals
          </h3>
          <ul className="mt-4 space-y-2 text-lg text-gray-700">
            <li>• Creating informed and economically empowered citizens.</li>
            <li>• Promoting peaceful coexistence and social change.</li>
          </ul>
        </div>

        {/* Core Values */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaHandshake className="text-green-700 text-4xl mb-3" />
            <h4 className="text-xl font-semibold text-gray-800">Collaboration</h4>
            <p className="mt-2 text-gray-700 text-sm">
              Working with various stakeholders for maximum impact.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaShieldAlt className="text-green-700 text-4xl mb-3" />
            <h4 className="text-xl font-semibold text-gray-800">Integrity</h4>
            <p className="mt-2 text-gray-700 text-sm">
              Upholding transparency and accountability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaUsers className="text-green-700 text-4xl mb-3" />
            <h4 className="text-xl font-semibold text-gray-800">Inclusivity</h4>
            <p className="mt-2 text-gray-700 text-sm">
              Respecting diversity and human dignity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <FaLeaf className="text-green-700 text-4xl mb-3" />
            <h4 className="text-xl font-semibold text-gray-800">Sustainability</h4>
            <p className="mt-2 text-gray-700 text-sm">
              Ensuring long-term solutions for communities.
            </p>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center text-green-700">Meet Our Team</h3>
          <p className="text-center mt-4 text-lg text-gray-700">
            Our dedicated team is committed to driving positive change in our communities.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full shadow-md"
                />
                <h4 className="mt-3 text-lg font-semibold text-gray-800">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
