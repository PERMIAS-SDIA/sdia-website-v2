import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <span className="text-xl font-bold">
                PERMIAS SDIA - Persatuan Mahasiswa Indonesia di Amerika Serikat, San Diego Indonesian Association
              </span>
            </div>
            <p className="mb-4 max-w-md text-gray-400">
              Connecting Indonesian students and anyone interested in Indonesian culture at San Diego.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-secondary-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="transition-colors hover:text-secondary-400"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/events-documentation"
                  className="transition-colors hover:text-secondary-400"
                >
                  Event Documentation
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/alumni"
                  className="transition-colors hover:text-secondary-400"
                >
                  Alumni
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-secondary-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://www.instagram.com/permias.sdia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-secondary-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/permias-san-diego"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-secondary-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:permias.sandiego@gmail.com"
                  target="_blank"
                  className="transition-colors hover:text-secondary-400"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 PERMIAS SDIA. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
