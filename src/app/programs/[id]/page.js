"use client";
import { useRouter } from "next/navigation";

const programDetails = {
  peacebuilding: {
    title: "Peacebuilding & Conflict Resolution",
    content:
      "Our peacebuilding initiatives focus on dialogue, training, and conflict resolution strategies to foster reconciliation and unity.",
  },
  education: {
    title: "Education & Skills Development",
    content:
      "SPD provides vocational training and education programs to empower youth and adults with critical skills for personal and professional growth.",
  },
  agriculture: {
    title: "Agriculture & Food Security",
    content:
      "We support small-scale farmers with training, resources, and modern techniques to ensure food security and sustainable agriculture.",
  },
  livelihood: {
    title: "Livelihood & Economic Empowerment",
    content:
      "We provide microfinance support, business training, and financial literacy programs to help communities achieve economic stability.",
  },
};

export default function ProgramDetail({ params }) {
  const program = programDetails[params.id];

  if (!program) {
    return <p className="text-center text-red-600">Program not found</p>;
  }

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-md">
        <h2 className="text-3xl font-bold text-green-700">{program.title}</h2>
        <p className="mt-4 text-gray-700">{program.content}</p>
      </div>
    </section>
  );
}
