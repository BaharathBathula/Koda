import Navbar from "../../components/Navbar";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="p-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            Job Descriptions
          </h1>

          <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
            + Create Job
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">
              Senior Data Engineer
            </h2>

            <p className="text-gray-500 mb-4">
              Python • Spark • AWS • SQL
            </p>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">
                24 Candidates Matched
              </span>

              <button className="bg-black text-white px-4 py-2 rounded-lg">
                View Candidates
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">
              AI Engineer
            </h2>

            <p className="text-gray-500 mb-4">
              LLM • FastAPI • RAG • Vector DB
            </p>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">
                18 Candidates Matched
              </span>

              <button className="bg-black text-white px-4 py-2 rounded-lg">
                View Candidates
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}