import Link from "next/link";
import { FaClock, FaNewspaper } from "react-icons/fa";

const posts = [
  {
    id: "women-empowerment-initiative",
    title: "SPD Launches Women Empowerment Initiative",
    date: "Feb 5, 2024",
    description: "A new program aimed at increasing economic opportunities for women in South Sudan.",
  },
  {
    id: "youth-leadership-training",
    title: "Youth Leadership Training Program",
    date: "Jan 20, 2024",
    description: "SPD recently hosted a leadership development program for young changemakers.",
  },
];

export default function Blog() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-green-700">Latest News</h2>
        <p className="text-center mt-4 text-lg text-gray-700">
          Stay updated with our latest initiatives and impact stories.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                <FaNewspaper className="text-green-700 mr-2" /> {post.title}
              </h3>
              <div className="mt-2 flex items-center text-gray-600">
                <FaClock className="text-blue-500 mr-2" />
                <span>{post.date}</span>
              </div>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <Link href={`/blog/${post.id}`}>
                <button className="mt-4 px-5 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
