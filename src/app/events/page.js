// "use client";
// import Link from "next/link";
// import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// const events = [
//   {
//     id: "peace-conference-2024",
//     title: "National Peacebuilding Conference 2024",
//     date: "March 15, 2024",
//     location: "Juba, South Sudan",
//     description:
//       "A national forum bringing together leaders, NGOs, and community members to discuss sustainable peace solutions.",
//   },
//   {
//     id: "education-workshop",
//     title: "Education & Skills Development Workshop",
//     date: "April 10, 2024",
//     location: "Wau, South Sudan",
//     description:
//       "A hands-on workshop providing vocational training and career guidance for youth and women.",
//   },
//   {
//     id: "food-security-summit",
//     title: "Agriculture & Food Security Summit",
//     date: "May 20, 2024",
//     location: "Bor, South Sudan",
//     description:
//       "A summit focused on innovative farming techniques, climate adaptation, and food security strategies.",
//   },
// ];

// export default function Events() {
//   return (
//     <section className="py-16 px-6 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <h2 className="text-4xl font-extrabold text-center text-green-700">Upcoming Events</h2>
//         <p className="text-center mt-4 text-lg text-gray-700">
//           Join our events to learn, collaborate, and make a difference in your community.
//         </p>

//         {/* Events List */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {events.map((event) => (
//             <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
//               <div className="mt-2 flex items-center text-gray-600">
//                 <FaCalendarAlt className="text-green-700 mr-2" />
//                 <span>{event.date}</span>
//               </div>
//               <div className="flex items-center text-gray-600 mt-1">
//                 <FaMapMarkerAlt className="text-red-600 mr-2" />
//                 <span>{event.location}</span>
//               </div>
//               <p className="text-gray-600 mt-2">{event.description}</p>
//               <Link href={`/events/${event.id}`}>
//                 <button className="mt-4 px-5 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition">
//                   Read More
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const events = [
  {
    id: "peace-conference-2024",
    title: "National Peacebuilding Conference 2024",
    date: "March 15, 2024",
    location: "Juba, South Sudan",
    description:
      "A national forum bringing together leaders, NGOs, and community members to discuss sustainable peace solutions.",
  },
  {
    id: "education-workshop",
    title: "Education & Skills Development Workshop",
    date: "April 10, 2024",
    location: "Wau, South Sudan",
    description:
      "A hands-on workshop providing vocational training and career guidance for youth and women.",
  },
  {
    id: "food-security-summit",
    title: "Agriculture & Food Security Summit",
    date: "May 20, 2024",
    location: "Bor, South Sudan",
    description:
      "A summit focused on innovative farming techniques, climate adaptation, and food security strategies.",
  }

];

export default function Events() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center text-green-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Upcoming Events
        </motion.h2>
        
        <motion.p
          className="text-center mt-4 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Join our events to learn, collaborate, and make a difference in your community.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
              <div className="mt-2 flex items-center text-gray-600">
                <FaCalendarAlt className="text-green-700 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-600 mt-1">
                <FaMapMarkerAlt className="text-red-600 mr-2" />
                <span>{event.location}</span>
              </div>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <Link href={`/events/${event.id}`}>
                <button className="mt-4 px-5 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition">
                  Read More
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
