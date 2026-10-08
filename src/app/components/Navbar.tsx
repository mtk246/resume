import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm p-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-gray-800 text-xl font-bold">
          My Portfolio
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
