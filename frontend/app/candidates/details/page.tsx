import Navbar from "../../../components/Navbar";

export default function CandidateDetailsPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="p-10">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                John Doe
              </h1>

              <p className="text-gray-500 text-lg">
                Senior Data Engineer
              </p>
            </div>

            <div className="text-right">
              <p className="text-gray-500 mb-2">
                Match Score
              </p>

              <div className="text-6xl font-bold text-green-600">
                92%
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Skills Match
          </h2>

          <div className="flex gap-3 flex-wrap">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              Python
            </span>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              Spark
            </span>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              AWS
            </span>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
              SQL
            </span>

            <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full">
              Missing: Snowflake
            </span>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid grid-cols-2 gap-8 mb-8">

          {/* Pros */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              Strengths
            </h2>

            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>Strong Python experience</li>
              <li>Excellent Spark background</li>
              <li>AWS cloud experience matches JD</li>
              <li>Healthcare domain experience</li>
            </ul>
          </div>

          {/* Cons */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-red-600">
              Weaknesses
            </h2>

            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>Missing Snowflake experience</li>
              <li>No Databricks certification</li>
              <li>Limited CI/CD exposure</li>
            </ul>
          </div>

        </div>

        {/* Recommendation */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">
            AI Recommendation
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            Candidate is a strong fit for the Senior Data Engineer role.
            Strong cloud and big data experience aligns well with the
            job description. Recommended for recruiter screening round.
          </p>
        </div>

      </section>
    </main>
  );
}