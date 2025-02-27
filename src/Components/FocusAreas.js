import Link from "next/link";
import { BookOpen, Heart, Droplet, Utensils, Handshake, GraduationCap, Users } from "lucide-react";

const focusAreas = [
  { name: "Capacity Development", icon: BookOpen, description: "Enhancing skills and knowledge for community growth.", path: "/focus/capacity-development" },
  { name: "Health & Nutrition", icon: Heart, description: "Promoting access to quality healthcare and proper nutrition.", path: "/focus/health-nutrition" },
  { name: "Water & Sanitation", icon: Droplet, description: "Ensuring clean water and proper sanitation practices.", path: "/focus/water-sanitation" },
  { name: "Food Security & Livelihoods", icon: Utensils, description: "Supporting food sustainability and income-generating activities.", path: "/focus/food-security-livelihoods" },
  { name: "Peace Building", icon: Handshake, description: "Fostering dialogue, reconciliation, and conflict resolution.", path: "/focus/peace-building" },
  { name: "Education", icon: GraduationCap, description: "Providing access to quality education and learning opportunities.", path: "/focus/education" },
  { name: "Community Empowerment", icon: Users, description: "Strengthening community participation and leadership.", path: "/focus/community-empowerment" },
];

export default function FocusAreas() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold">Our Focus Areas</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6">
        {focusAreas.map((area, index) => (
          <Link key={index} href={area.path} className="block p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
            <area.icon className="mx-auto h-12 w-12 text-[#E9D5A2]" />
            <h3 className="text-xl font-semibold mt-4">{area.name}</h3>
            <p className="text-gray-600 mt-2">{area.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
