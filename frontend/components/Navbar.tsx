import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-8 py-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold cursor-pointer">
          Koda
        </h1>
      </Link>

      <div className="flex gap-6">

        <Link href="/dashboard">
          <button className="hover:text-gray-300">
            Dashboard
          </button>
        </Link>

        <Link href="/jobs">
          <button className="hover:text-gray-300">
            Jobs
          </button>
        </Link>

        <Link href="/candidates">
          <button className="hover:text-gray-300">
            Candidates
          </button>
        </Link>

      </div>
    </nav>
  );
}