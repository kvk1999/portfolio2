import { FileText, Download, ExternalLink } from "lucide-react";
import resumeClassic from "../assets/Resume-Classic.pdf";
import resumeModern from "../assets/Resume-modern.pdf";

const resumes = [
  {
    id: 1,
    title: "Classic Resume",
    description:
      "ATS-friendly resume with a clean and minimal layout. Best for online job applications.",
    file: resumeClassic,
    badge: "ATS Friendly",
  },
  {
    id: 2,
    title: "Modern Resume",
    description:
      "Modern resume with improved visual hierarchy, suitable for recruiters and portfolio reviews.",
    file: resumeModern,
    badge: "Professional",
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          My Resume
        </h1>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          Choose the resume version that best fits your needs. Both versions
          contain the same information but differ in presentation.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <FileText className="w-10 h-10 text-cyan-400" />

                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
                  {resume.badge}
                </span>
              </div>

              <h2 className="text-2xl font-semibold mb-3">
                {resume.title}
              </h2>

              <p className="text-gray-400 mb-8">
                {resume.description}
              </p>

              <div className="flex gap-4">
                <a
                  href={resume.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <button className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-xl transition">
                    <ExternalLink size={18} />
                    View Resume
                  </button>
                </a>

                <a href={resume.file} download>
                  <button className="flex items-center justify-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-5 py-3 rounded-xl transition">
                    <Download size={18} />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}