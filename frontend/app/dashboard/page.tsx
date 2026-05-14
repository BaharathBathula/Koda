export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">
        Recruiter Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg text-gray-500 mb-2">
            Total Jobs
          </h2>

          <p className="text-5xl font-bold">
            12
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg text-gray-500 mb-2">
            Candidates
          </h2>

          <p className="text-5xl font-bold">
            148
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg text-gray-500 mb-2">
            Matches Generated
          </h2>

          <p className="text-5xl font-bold">
            324
          </p>
        </div>
      </div>

      {/* Recent Jobs */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Recent Job Descriptions
        </h2>

        <div className="space-y-4">
          <div className="border rounded-xl p-4">
            <h3 className="font-semibold">
              Senior Data Engineer
            </h3>

            <p className="text-gray-500">
              Python • Spark • AWS • SQL
            </p>
          </div>

          <div className="border rounded-xl p-4">
            <h3 className="font-semibold">
              AI Engineer
            </h3>

            <p className="text-gray-500">
              LLM • FastAPI • Vector DB • RAG
            </p>
          </div>
        </div>
      </div>

      {/* Recent Candidates */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">
          Top Candidates
        </h2>

        <div className="space-y-4">
          <div className="border rounded-xl p-4 flex justify-between">
            <div>
              <h3 className="font-semibold">
                John Doe
              </h3>

              <p className="text-gray-500">
                Senior Data Engineer
              </p>
            </div>

            <div className="text-green-600 font-bold text-xl">
              92%
            </div>
          </div>

          <div className="border rounded-xl p-4 flex justify-between">
            <div>
              <h3 className="font-semibold">
                Sarah Smith
              </h3>

              <p className="text-gray-500">
                AI Engineer
              </p>
            </div>

            <div className="text-green-600 font-bold text-xl">
              88%
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}