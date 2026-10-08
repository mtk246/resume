export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 text-center text-gray-600 border-t border-gray-200 mt-8">
      <div className="container mx-auto">
        <p className="text-sm mt-2">
          Built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Tailwind CSS
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
