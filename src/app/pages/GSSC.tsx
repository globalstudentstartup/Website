import { motion } from "motion/react";
import { Calendar, Users, Globe, CheckCircle, MapPin, Trophy } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export default function GSSC() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight uppercase leading-tight">
              GSSC<br />Worlds
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light uppercase tracking-wide">
              The Global Proving Ground - Seoul, South Korea
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
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  The Global Student Startup Competition is the flagship annual culmination of the GSSF cycle. Undergraduate teams from regional qualifiers across six continents compete at the World Stage at the Asian Leadership Conference (ALC) in Seoul — one of Asia's most influential global convenings. Every participant is audited against the GSSC Competition Standards to ensure the global stage maintains a world-class merit signal.
                </p>
              </motion.div>
            </div>

            {/* Statistics */}
            <div className="space-y-8">
              <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#242EC0] mb-2">20</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Finalist Worlds</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#242EC0] mb-2">10+</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Initiatives</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#242EC0] mb-2">May</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Regional Stage</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team Structure */}
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <Users className="text-[#242EC0] flex-shrink-0" size={32} />
                <h3 className="text-2xl font-bold uppercase tracking-tight">Team Structure</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Teams of 2-5 undergrad students. Delegations include 2-4 competing students for venture plus one funded student coordinator who travels to Seoul.
              </p>
            </motion.div>

            {/* Eligibility */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle className="text-[#242EC0] flex-shrink-0" size={32} />
                <h3 className="text-2xl font-bold uppercase tracking-tight">Eligibility</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Current undergrad or recent graduates. Ventures must be pre-revenue, pre-incorporation, with work beginning no earlier than June 2022. English language participation required.
              </p>
            </motion.div>

            {/* 2026 Schedule */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <Calendar className="text-[#242EC0] flex-shrink-0" size={32} />
                <h3 className="text-2xl font-bold uppercase tracking-tight">2026 Schedule</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span><span className="font-semibold">Arrival:</span> May 17 by 4PM KST</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span><span className="font-semibold">Pitch Bootcamp:</span> May 18-19</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span><span className="font-semibold">Preliminaries:</span> May 19</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span><span className="font-semibold">Finals @ ALC:</span> May 21</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span><span className="font-semibold">Depart on:</span> May 22+</span>
                </li>
              </ul>
            </motion.div>

            {/* GSSC x Region */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white p-10 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <Globe className="text-[#242EC0] flex-shrink-0" size={32} />
                <h3 className="text-2xl font-bold uppercase tracking-tight">GSSC x Region</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                In person regional qualifying competitions select teams for GSSC Worlds. Early regions are seeded by GSSF or parent sponsors. Maturing regions are expected to be self-sustained by 2030.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeInUp}>
            <Trophy className="text-white mx-auto mb-8" size={64} />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight uppercase">
              Join GSSC 2026
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to compete on the global stage? Learn more about regional qualifiers and application requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-[#242EC0] hover:bg-white/90 px-10 py-6 h-auto uppercase tracking-wide font-semibold">
                    Register Interest
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
