import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Click to explore them live.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-600 mb-2">E-commerce Website</h3>
              <p className="text-gray-600 mb-4">
                A modern online shopping platform with product listings and cart functionality.
              </p>
              <a
                href="https://e-commerce-five-sand-35.vercel.app/"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg transition hover:opacity-90"
              >
                <span>View Project</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-600 mb-2">Age Calculator</h3>
              <p className="text-gray-600 mb-4">
                Calculate your exact age in years, months, and days from your birth date.
              </p>
              <a
                href="https://age-calculator-tau-jet.vercel.app/"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg transition hover:opacity-90"
              >
                <span>View Project</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-600 mb-2">Text-to-Voice Converter</h3>
              <p className="text-gray-600 mb-4">
                Convert any text to speech with different voice options in your browser.
              </p>
              <a
                href="https://text-to-voice-six-lime.vercel.app/"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg transition hover:opacity-90"
              >
                <span>View Project</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cyan-600 mb-2">Quiz App</h3>
              <p className="text-gray-600 mb-4">
                Test your knowledge with this interactive quiz application.
              </p>
              <a
                href="https://quiz-app-teal-mu-70.vercel.app/"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg transition hover:opacity-90"
              >
                <span>View Project</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center text-gray-500">
          <p>More projects coming soon...</p>
        </div>
      </div>
    </div>
  );
}