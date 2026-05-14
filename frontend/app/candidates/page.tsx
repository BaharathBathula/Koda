import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function CandidatesPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="p-10">
        <h1 className="text-4xl font-bold mb-8">
          Candidates
        </h1>

        <div className="space-y-6">

          {/* Candidate Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">
                John Doe
              </h2>

              <p className="text-gray-500 mb-2">
                Senior Data Engineer
              </p>

              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Python
                </span>

                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Spark
                </span>

                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  AWS
                </span>

                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  SQL
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-5xl font-bold text-green-600 mb-2">
                92%
              </div>

              <Link href="/candidates/details">
  <button className="bg-black text-white px-5 py-2 rounded-xl">
    View Profile
  </button>
</Link>
            </div>
          </div>

          {/* Candidate Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Sarah Smith
              </h2>

              <p className="text-gray-500 mb-2">
                AI Engineer
              </p>

              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  FastAPI
                </span>

                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  RAG
                </span>

                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  LLM
                </span>

                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Vector DB
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-5xl font-bold text-green-600 mb-2">
                88%
              </div>

              <button className="bg-black text-white px-5 py-2 rounded-xl">
                View Profile
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}