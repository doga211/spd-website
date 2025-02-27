// import { FaHandsHelping, FaBookOpen, FaSeedling, FaBriefcase } from "react-icons/fa";

// const programs = [
//   {
//     title: "Peacebuilding & Conflict Resolution",
//     description:
//       "We promote peace and reconciliation through dialogue, training, and community engagement programs.",
//     icon: <FaHandsHelping className="text-green-700 text-6xl mx-auto" />,
//   },
//   {
//     title: "Education & Skills Development",
//     description:
//       "Our education programs empower youth and adults with vocational training and essential life skills.",
//     icon: <FaBookOpen className="text-green-700 text-6xl mx-auto" />,
//   },
//   {
//     title: "Agriculture & Food Security",
//     description:
//       "We support local farmers with training, resources, and sustainable farming techniques to enhance food security.",
//     icon: <FaSeedling className="text-green-700 text-6xl mx-auto" />,
//   },
//   {
//     title: "Livelihood & Economic Empowerment",
//     description:
//       "We provide business training, financial literacy, and microfinance support to uplift communities economically.",
//     icon: <FaBriefcase className="text-green-700 text-6xl mx-auto" />,
//   },
// ];

// export default function Programs() {
//   return (
//     <section className="py-16 px-6 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <h2 className="text-4xl font-extrabold text-center text-green-700">Our Programs</h2>
//         <p className="text-center mt-4 text-lg text-gray-700">
//           We implement programs that promote peace, education, economic growth, and sustainability.
//         </p>

//         {/* Programs Grid */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {programs.map((program, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
//               {program.icon}
//               <h3 className="text-2xl font-semibold text-gray-800 mt-4">{program.title}</h3>
//               <p className="text-gray-600 mt-2">{program.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import Link from "next/link";
import { FaHandsHelping, FaBookOpen, FaSeedling, FaBriefcase } from "react-icons/fa";

const programs = [
  {
    id: "peacebuilding",
    title: "Peacebuilding & Conflict Resolution",
    description:
      "We promote peace and reconciliation through dialogue, training, and community engagement programs.",
    icon: <FaHandsHelping className="text-green-700 text-6xl mx-auto" />,
  },
  {
    id: "education",
    title: "Education & Skills Development",
    description:
      "Our education programs empower youth and adults with vocational training and essential life skills.",
    icon: <FaBookOpen className="text-green-700 text-6xl mx-auto" />,
  },
  {
    id: "agriculture",
    title: "Agriculture & Food Security",
    description:
      "We support local farmers with training, resources, and sustainable farming techniques to enhance food security.",
    icon: <FaSeedling className="text-green-700 text-6xl mx-auto" />,
  },
  {
    id: "livelihood",
    title: "Livelihood & Economic Empowerment",
    description:
      "We provide business training, financial literacy, and microfinance support to uplift communities economically.",
    icon: <FaBriefcase className="text-green-700 text-6xl mx-auto" />,
  },
];

export default function Programs() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-center text-green-700">Our Programs</h2>
        <p className="text-center mt-4 text-lg text-gray-700">
          We implement programs that promote peace, education, economic growth, and sustainability.
        </p>

        {/* Programs Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              {program.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">{program.title}</h3>
              <p className="text-gray-600 mt-2">{program.description}</p>
              <Link href={`/programs/${program.id}`}>
                <button className="mt-4 px-5 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
