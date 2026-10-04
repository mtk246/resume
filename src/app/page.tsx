import Image from "next/image";
import { position, contact, summary, skills } from "@/consts";

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-8">
      <main className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-10 space-y-10 border border-primary-200">
        {/* Header Section */}
        <header className="text-center pb-6 border-b-2 border-primary-300">
          <h1 className="text-4xl font-bold text-primary leading-tight">
            Min Thu Kyaw
          </h1>
          <p className="text-xl text-secondary mt-2">{position.join(" | ")}</p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Column (Contact, Skills) */}
          <div className="md:col-span-1 space-y-8">
            <section className="p-6 bg-white rounded-lg shadow-md border border-secondary-200">
              <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-b border-accent-300">
                Contact
              </h2>
              <p className="text-md text-foreground">
                Email:{" "}
                <a
                  href="mailto:your.email@example.com"
                  className="text-primary hover:underline"
                >
                  {contact[0].email}
                </a>
              </p>
              <p className="text-md text-foreground">Phone: {contact[1].phone}</p>
              <p className="text-md text-foreground">
                LinkedIn:{" "}
                <a href={`https://${contact[2].linkedin}`} className="text-primary hover:underline">
                  {contact[2].linkedin}
                </a>
              </p>
              <p className="text-md text-foreground">
                GitHub:{" "}
                <a href={`https://${contact[3].github}`} className="text-primary hover:underline">
                  {contact[3].github}
                </a>
              </p>
            </section>

            <section className="p-6 bg-white rounded-lg shadow-md border border-secondary-200">
              <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-b border-accent-300">
                Skills
              </h2>
              <ul className="list-disc list-inside text-md text-foreground space-y-1">
                {skills.map((skill, index) => (
                    <li key={index}>
                        <strong className="text-primary">{skill.name}:</strong> {skill.skills.join(", ")}
                    </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column (Summary, Experience, Education) */}
          <div className="md:col-span-2 space-y-8">
            <section className="p-6 bg-white rounded-lg shadow-md border border-secondary-200">
              <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-b border-accent-300">
                Professional Summary
              </h2>
              <p className="text-md text-foreground leading-relaxed indent-10">{summary[0]}</p>
              <p className="text-md text-foreground leading-relaxed indent-10">{summary[1]}</p>
              <p className="text-md text-foreground leading-relaxed indent-10">{summary[2]}</p>
            </section>

            <section className="p-6 bg-white rounded-lg shadow-md border border-secondary-200">
              <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-b border-accent-300">
                Experience
              </h2>
              <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-foreground">
                  Job Title,{" "}
                  <span className="text-lg font-normal text-secondary">
                    Company Name
                  </span>
                </h3>
                <p className="text-sm text-secondary mb-2">
                  Month Year – Month Year | City, State
                </p>
                <ul className="list-disc list-inside text-md text-foreground space-y-1">
                  <li>
                    Description of your responsibilities and achievements. Focus
                    on impact and results.
                  </li>
                  <li>
                    Quantifiable results are highly encouraged. Example:
                    Increased user engagement by 20% through a redesigned user
                    interface.
                  </li>
                  <li>
                    Collaborated with a team of 5 engineers to deliver features
                    on time using Agile methodologies.
                  </li>
                </ul>
              </div>
              {/* Add more experience entries as needed */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-foreground">
                  Another Job Title,{" "}
                  <span className="text-lg font-normal text-secondary">
                    Another Company
                  </span>
                </h3>
                <p className="text-sm text-secondary mb-2">
                  Month Year – Month Year | City, State
                </p>
                <ul className="list-disc list-inside text-md text-foreground space-y-1">
                  <li>
                    Developed and maintained web applications using React and
                    Node.js.
                  </li>
                  <li>Implemented RESTful APIs for data communication.</li>
                  <li>
                    Optimized application performance, reducing load times by
                    15%.
                  </li>
                </ul>
              </div>
            </section>

            <section className="p-6 bg-white rounded-lg shadow-md border border-secondary-200">
              <h2 className="text-2xl font-semibold text-primary mb-4 pb-2 border-b border-accent-300">
                Education
              </h2>
              <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-foreground">
                  Degree, Major,{" "}
                  <span className="text-lg font-normal text-secondary">
                    University Name
                  </span>
                </h3>
                <p className="text-sm text-secondary mb-2">
                  Year of Graduation | City, State
                </p>
                <ul className="list-disc list-inside text-md text-foreground space-y-1">
                  <li>
                    Relevant coursework: Data Structures, Algorithms, Web
                    Development.
                  </li>
                  <li>GPA: 3.8/4.0 (Optional)</li>
                </ul>
              </div>
              {/* Add more education entries as needed */}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
