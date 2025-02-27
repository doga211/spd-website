// "use client";
// import { useRouter } from "next/navigation";

// const eventDetails = {
//   "peace-conference-2024": {
//     title: "National Peacebuilding Conference 2024",
//     content:
//       "This event will bring together key stakeholders from across South Sudan to discuss peace and reconciliation strategies. Topics include community mediation, conflict resolution, and social cohesion.",
//   },
//   "education-workshop": {
//     title: "Education & Skills Development Workshop",
//     content:
//       "This workshop is designed to provide essential skills training for youth and women, including vocational education, entrepreneurship, and financial literacy.",
//   },
//   "food-security-summit": {
//     title: "Agriculture & Food Security Summit",
//     content:
//       "The summit will focus on modern farming techniques, sustainability, and climate adaptation strategies for local farmers.",
//   },
// };

// export default function EventDetail({ params }) {
//   const event = eventDetails[params.id];

//   if (!event) {
//     return <p className="text-center text-red-600">Event not found</p>;
//   }

//   return (
//     <section className="py-16 px-6 bg-gray-100">
//       <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md">
//         <h2 className="text-3xl font-bold text-green-700">{event.title}</h2>
//         <p className="mt-4 text-gray-700">{event.content}</p>
//       </div>
//     </section>
//   );
// }




"use client";
import { useState } from "react";
import Link from "next/link";
import Calendar from "react-calendar";
// Assuming you use a UI library like shadcn/ui
import { motion } from "framer-motion";

const events = [
  {
    id: "peace-conference-2024",
    title: "National Peacebuilding Conference 2024",
    date: new Date(2024, 8, 10), // Example: Sept 10, 2024
    description:
      "This event will bring together key stakeholders from across South Sudan to discuss peace and reconciliation strategies.",
  },
  {
    id: "education-workshop",
    title: "Education & Skills Development Workshop",
    date: new Date(2024, 9, 15), // Oct 15, 2024
    description:
      "Essential skills training for youth and women, including vocational education, entrepreneurship, and financial literacy.",
  },
  {
    id: "food-security-summit",
    title: "Agriculture & Food Security Summit",
    date: new Date(2024, 10, 20), // Nov 20, 2024
    description:
      "The summit focuses on modern farming techniques, sustainability, and climate adaptation strategies for local farmers.",
  },
];

export default function EventsPage() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700">
          Upcoming Events
        </h1>

        {/* Calendar View */}
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Event Calendar
            </h2>
            <Calendar
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="border rounded-md shadow-md p-2"
            />
          </div>

          {/* Event List */}
          <div className="w-full md:w-2/3">
            {events.map((event) => (
              <motion.div
                key={event.id}
                className="bg-white p-6 shadow-md rounded-lg mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-green-700">
                  {event.title}
                </h3>
                <p className="text-gray-600 mt-2">{event.description}</p>
                <p className="text-gray-500 mt-1">
                  📅 {event.date.toDateString()}
                </p>
                <Link href={`/events/${event.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition duration-300"
                  >
                    View Details
                  </motion.button>
                </Link>
                <Link href={`/events/register?event=${event.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 ml-4 bg-[#FAA413] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#d78c0d] transition duration-300"
                  >
                    Register
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
