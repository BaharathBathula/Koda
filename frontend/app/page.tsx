import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Koda
        </h1>

        <p className="text-xl text-gray-600">
          AI ATS Resume Screening & Candidate Matching Platform
        </p>
      </section>
    </main>
  );
}