import { motion } from "motion/react";
import { Lightbulb, Users, Globe, Target, Shield, Award, TrendingUp, Code } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export default function Advisory() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-[#242EC0] mb-6 font-bold">
              Pioneering at Architecture at Innovation
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight uppercase leading-tight">
              GSSF<br />Advisory
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light uppercase tracking-wide">
              Strategic Advisory & Executive Development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Description */}
            <div className="lg:col-span-2">
              <motion.div {...fadeInUp}>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                  GSSF Advisory develops global ecosystem-building strategy and program development for governments, universities, and institutions. A mission-led platform that prioritizes stewardship, trust, and durable impact over short-term outcomes. When aligned with the GSSF mission, GSSF Advisory also runs two-day, in-person applied AI workshops.
                </p>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold">
                  Not consulting. Not a referral network.
                </p>
              </motion.div>
            </div>

            {/* Service Types */}
            <div className="space-y-8">
              <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-sm uppercase tracking-wider text-gray-600 mb-2">At Mission</div>
                <div className="text-3xl font-bold text-[#242EC0]">Strategy</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-sm uppercase tracking-wider text-gray-600 mb-2">AI Workshops</div>
                <div className="text-3xl font-bold text-[#242EC0]">2-Day</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-sm uppercase tracking-wider text-gray-600 mb-2">At Readiness</div>
                <div className="text-3xl font-bold text-[#242EC0]">Mission</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ecosystem Design */}
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg">
              <h3 className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-6">
                Ecosystem Design & Capacity-Building
              </h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Startup ecosystem architecture and design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>University-industry collaboration models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Accelerator, competition, and venture pipeline design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Talent development and founder pathways</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Policy, incentives, and ecosystem benchmarking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Responsible integration of AI-led digital innovation</span>
                </li>
              </ul>
            </motion.div>

            {/* Applied AI */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-lg">
              <h3 className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-6">
                Applied AI Engagements (2-Day, In-Person)
              </h3>
              <ul className="space-y-4 text-gray-700 text-lg mb-6">
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Experimenting Productively Using AI Tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Building Personal AI Agents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>AI Workflows & Automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>AI Wrapper Applications (Cursor, Figment)</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed border-t pt-6 border-gray-200">
                Run only when aligned with the GSSF mission. Led by GSSF Global Fellows or professors from world-leading universities. Live builds, demos, and guided exercises—no abstract strategy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-12 tracking-tight uppercase">
            Advisory Team Structure
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-8 rounded-lg">
              <Award className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Advisory Tailors</h3>
              <p className="text-gray-700">
                Senior leaders with deep domain expertise. Lead flagship advisory engagements and support bootcamps.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-8 rounded-lg">
              <Users className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Student Partners</h3>
              <p className="text-gray-700">
                Trusted domain experts and ecosystem operators. Deliver specialized services under shared GSSF standards.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-8 rounded-lg">
              <Globe className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Global Associates</h3>
              <p className="text-gray-700">
                Emerging leaders and practitioners. Support research, execution, and ecosystem coordination.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-[#E4E6F3] p-8 rounded-lg">
              <Shield className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Governance?</h3>
              <p className="text-gray-700">
                All advisory activities maintain separation from competition judging and venture funding. Zero conflict of interest.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-12 tracking-tight uppercase">
            What Sets Us Apart
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="bg-white p-8 rounded-lg">
              <Target className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Mission-Led</h3>
              <p className="text-gray-700">
                Prioritizing stewardship, trust, and durable impact over short-term outcomes
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-lg">
              <Lightbulb className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Expert-Led</h3>
              <p className="text-gray-700">
                Senior domain experts and professors from world-leading universities
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-lg">
              <Code className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Hands-On Approach</h3>
              <p className="text-gray-700">
                Live builds, demos, and guided exercises—no abstract strategy
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white p-8 rounded-lg">
              <TrendingUp className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Ecosystem Focus</h3>
              <p className="text-gray-700">
                Comprehensive strategy for governments, universities, and institutions
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="bg-white p-8 rounded-lg">
              <Shield className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Zero Conflict</h3>
              <p className="text-gray-700">
                Complete separation from competition judging and venture funding
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="bg-white p-8 rounded-lg">
              <Globe className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Global Network</h3>
              <p className="text-gray-700">
                Access to worldwide ecosystem of experts and practitioners
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeInUp}>
            <Lightbulb className="text-white mx-auto mb-8" size={64} />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight uppercase">
              Work with GSSF Advisory
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Interested in strategic advisory or applied AI workshops? Let's discuss how we can support your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-[#242EC0] hover:bg-white/90 px-10 py-6 h-auto uppercase tracking-wide font-semibold">
                    Get in Touch
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
