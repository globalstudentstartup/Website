export function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#242EC0] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Comprehensive support and services designed to help you achieve your educational and career goals.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {/* Educational Programs */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Educational Programs</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our comprehensive educational programs cover a wide range of disciplines, from technology and engineering to business and leadership. Each program is carefully designed to provide both theoretical knowledge and practical skills.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#242EC0] mr-2">•</span>
                    <span>Full-time and part-time learning options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#242EC0] mr-2">•</span>
                    <span>Online and in-person classes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#242EC0] mr-2">•</span>
                    <span>Industry-recognized certifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#242EC0] mr-2">•</span>
                    <span>Hands-on projects and real-world applications</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#E4E6F3] p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Program Duration</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-bold text-lg mb-1">Short Courses</div>
                    <div className="text-gray-600">4-12 weeks</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Certificate Programs</div>
                    <div className="text-gray-600">3-6 months</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Diploma Programs</div>
                    <div className="text-gray-600">6-12 months</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Advanced Programs</div>
                    <div className="text-gray-600">12-24 months</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mentorship */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-[#08044C] text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Mentorship Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#242EC0] mr-2">•</span>
                    <span>Personalized career guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#242EC0] mr-2">•</span>
                    <span>Industry insights and networking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#242EC0] mr-2">•</span>
                    <span>Skill development support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#242EC0] mr-2">•</span>
                    <span>Resume and portfolio reviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#242EC0] mr-2">•</span>
                    <span>Interview preparation</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold mb-6">Mentorship Program</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Connect with experienced professionals and industry leaders who provide personalized guidance, share their expertise, and help you navigate your career path. Our mentors are committed to your success and growth.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through regular one-on-one sessions, you'll receive tailored advice, constructive feedback, and the support you need to achieve your goals.
                </p>
              </div>
            </div>

            {/* Career Services */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Career Placement Services</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our dedicated career services team works closely with students and alumni to connect them with employment opportunities at leading organizations worldwide.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We maintain strong partnerships with companies across various industries, ensuring that our graduates have access to exciting career opportunities that match their skills and aspirations.
                </p>
                <div className="bg-[#E4E6F3] p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">Placement Support Includes:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Job matching and referrals</li>
                    <li>• Company introductions</li>
                    <li>• Interview coordination</li>
                    <li>• Salary negotiation guidance</li>
                    <li>• Ongoing career support</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#242EC0] text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Career Success Rates</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-5xl font-bold mb-2">85%</div>
                    <div className="text-gray-200">Placement rate within 6 months</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">95%</div>
                    <div className="text-gray-200">Student satisfaction rate</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">200+</div>
                    <div className="text-gray-200">Partner companies globally</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Scholarship Assistance</h3>
              <p className="text-gray-700 leading-relaxed">
                We help students identify and apply for scholarships, grants, and financial aid opportunities to make education more accessible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Language Support</h3>
              <p className="text-gray-700 leading-relaxed">
                English language courses and support services to help international students succeed in their programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Student Resources</h3>
              <p className="text-gray-700 leading-relaxed">
                Access to online libraries, learning materials, study groups, and academic support services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Networking Events</h3>
              <p className="text-gray-700 leading-relaxed">
                Regular events, workshops, and conferences that connect students with professionals and peers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Alumni Network</h3>
              <p className="text-gray-700 leading-relaxed">
                Join a global community of alumni who support each other through mentorship and collaboration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Wellness Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Mental health resources, counseling services, and wellness programs to support student well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get Started Today</h2>
          <p className="text-xl text-gray-700 mb-8">
            Take the first step towards your future. Our team is here to help you succeed.
          </p>
          <button className="bg-[#242EC0] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#1a22a0] transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
