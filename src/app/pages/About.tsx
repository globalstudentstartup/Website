import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Building a world where talent and opportunity are equally distributed.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase">Our Mission</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              The GSSF Educational Mission is to create pathways for talented individuals worldwide to access quality education, mentorship, and career opportunities. We believe that talent is equally distributed across the globe, but opportunity is not.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our foundation works to bridge this gap by providing comprehensive educational programs, building global partnerships, and creating sustainable pathways to success for underserved communities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#08044C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/30 p-8 rounded-lg">
              <CheckCircle className="text-[#242EC0] mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-300">
                We are committed to delivering world-class educational programs and maintaining the highest standards in everything we do.
              </p>
            </div>
            <div className="bg-black/30 p-8 rounded-lg">
              <CheckCircle className="text-[#242EC0] mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Equity</h3>
              <p className="text-gray-300">
                We believe everyone deserves equal access to opportunities, regardless of their background, location, or circumstances.
              </p>
            </div>
            <div className="bg-black/30 p-8 rounded-lg">
              <CheckCircle className="text-[#242EC0] mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-300">
                We continuously seek new and better ways to connect talent with opportunity through technology and creative solutions.
              </p>
            </div>
            <div className="bg-black/30 p-8 rounded-lg">
              <CheckCircle className="text-[#242EC0] mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-300">
                We build strong partnerships with organizations, institutions, and communities to maximize our collective impact.
              </p>
            </div>
            <div className="bg-black/30 p-8 rounded-lg">
              <CheckCircle className="text-[#242EC0] mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-300">
                We operate with transparency, accountability, and ethical practices in all our programs and partnerships.
              </p>
            </div>
            <div className="bg-black/30 p-8 rounded-lg">
              <CheckCircle className="text-[#242EC0] mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Impact</h3>
              <p className="text-gray-300">
                We measure our success by the tangible positive change we create in the lives of individuals and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GSSF Global Standards */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase">The GSSF Global Standards</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#242EC0]">Educational Excellence</h3>
              <p className="text-gray-300 mb-6">
                All our programs meet rigorous international standards for curriculum design, delivery, and assessment. We ensure that every student receives education that is recognized and valued globally.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#242EC0]">Mentorship Quality</h3>
              <p className="text-gray-300 mb-6">
                Our mentors are carefully selected professionals with proven track records in their fields. We maintain high standards for mentor training, engagement, and impact measurement.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#242EC0]">Accessibility</h3>
              <p className="text-gray-300 mb-6">
                We design all programs to be accessible to individuals from diverse backgrounds, with accommodations for different learning styles, languages, and technological capabilities.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#242EC0]">Outcome Measurement</h3>
              <p className="text-gray-300 mb-6">
                We track and report on student outcomes, program effectiveness, and long-term impact to ensure continuous improvement and accountability to our stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase">Governance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Board of Directors</h3>
              <p className="text-gray-300 mb-6">
                Our board comprises experienced leaders from education, business, technology, and nonprofit sectors. They provide strategic guidance and ensure we stay true to our mission and values.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>• Quarterly board meetings and annual strategic planning</li>
                <li>• Independent audit and compliance oversight</li>
                <li>• Transparent financial reporting and management</li>
                <li>• Advisory committees for program development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Accountability & Transparency</h3>
              <p className="text-gray-300 mb-6">
                We are committed to maintaining the highest standards of accountability and transparency in all our operations:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>• Annual reports published and publicly available</li>
                <li>• Regular program evaluations and impact assessments</li>
                <li>• Clear policies for conflict of interest and ethics</li>
                <li>• Stakeholder feedback mechanisms and responsiveness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl font-bold mb-4">2,000+</div>
              <div className="text-xl text-white/90">Students Supported</div>
              <p className="text-white/70 mt-4">
                Across all our programs and initiatives worldwide
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-4">25+</div>
              <div className="text-xl text-white/90">Partner Institutions</div>
              <p className="text-white/70 mt-4">
                Universities, companies, and organizations globally
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-4">5+</div>
              <div className="text-xl text-white/90">Active Programs</div>
              <p className="text-white/70 mt-4">
                From education to career development and beyond
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
