import { Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Globe, Users, Award } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#242EC0] overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
          <div className="max-w-5xl mx-auto">
            {/* Main Hero Heading */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight uppercase tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Global Student<br />Startup Foundation
            </motion.h1>

            {/* Quote - Secondary */}
            <motion.blockquote
              className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-16 italic border-l-4 border-white/40 pl-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              "Talent is Global.<br />Opportunity is Not."
            </motion.blockquote>

            {/* About GSSF */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xs uppercase tracking-widest text-white/80 mb-6">
                Global. Funded. In-Person.
              </p>
              <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-16 max-w-4xl">
                The Global Student Startup Foundation (GSSF) is a 501(c)(3) institutional bridge that connects the world's brightest minds to the global stage. We develop the next generation of global leaders through funded undergraduate innovation and entrepreneurship programs, ensuring that the accident of birth never limits the capacity to lead.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">18+</div>
                  <div className="text-sm uppercase tracking-wider text-white/80 mb-2">Universities - Now</div>
                  <div className="text-sm text-white/60">(self-sustaining on 6 continents - 2030)</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">4</div>
                  <div className="text-sm uppercase tracking-wider text-white/80 mb-2">Continents - Now</div>
                  <div className="text-sm text-white/60">(All 6 continents - 2030)</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">~500</div>
                  <div className="text-sm uppercase tracking-wider text-white/80 mb-2">Students Reached - Now</div>
                  <div className="text-sm text-white/60">(~target on full scholarship - 2030)</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/gssc">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg"
                      className="bg-white text-[#242EC0] hover:bg-white/90 px-10 py-6 h-auto uppercase tracking-wide text-sm font-semibold"
                    >
                      Our Programs
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/network">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg"
                      className="bg-white text-[#242EC0] hover:bg-white/90 px-10 py-6 h-auto uppercase tracking-wide text-sm font-semibold"
                    >
                      Partner With Us
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Links Section */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
            Explore Our Programs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div {...fadeInUp}>
              <Link to="/gssc">
                <div className="bg-white p-8 rounded-lg hover:shadow-xl transition-shadow group cursor-pointer h-full">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#242EC0] transition-colors">GSSC</h3>
                  <p className="text-gray-600">Global Student Success Conference</p>
                </div>
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Link to="/ai-cup">
                <div className="bg-white p-8 rounded-lg hover:shadow-xl transition-shadow group cursor-pointer h-full">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#242EC0] transition-colors">AI Cup</h3>
                  <p className="text-gray-600">International AI Competition</p>
                </div>
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Link to="/academy">
                <div className="bg-white p-8 rounded-lg hover:shadow-xl transition-shadow group cursor-pointer h-full">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#242EC0] transition-colors">Academy</h3>
                  <p className="text-gray-600">World-class educational programs</p>
                </div>
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Link to="/ventures">
                <div className="bg-white p-8 rounded-lg hover:shadow-xl transition-shadow group cursor-pointer h-full">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#242EC0] transition-colors">Ventures</h3>
                  <p className="text-gray-600">Supporting student entrepreneurs</p>
                </div>
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <Link to="/advisory">
                <div className="bg-white p-8 rounded-lg hover:shadow-xl transition-shadow group cursor-pointer h-full">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#242EC0] transition-colors">Advisory</h3>
                  <p className="text-gray-600">Guided by global leaders</p>
                </div>
              </Link>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
              <Link to="/team">
                <div className="bg-white p-8 rounded-lg hover:shadow-xl transition-shadow group cursor-pointer h-full">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#242EC0] transition-colors">Team</h3>
                  <p className="text-gray-600">Meet our global team</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision 2030 Section */}
      <section className="py-24 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp}>
            <p className="text-sm uppercase tracking-widest text-white/60 mb-6">
              Vision 2030 — Global Benchmarks
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight uppercase">
              The 2030<br />Generational Mission
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mb-16">
              Three quantified benchmarks define success by 2030 — built into every program, every partnership, and every funding decision.
            </p>
          </motion.div>

          <div className="border-t border-[#242EC0] pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div {...fadeInUp}>
                <div className="text-sm uppercase tracking-widest text-white/60 mb-4">Student Impact</div>
                <div className="text-6xl md:text-7xl font-bold text-white mb-6">2,000</div>
                <p className="text-white/70 leading-relaxed">
                  Undergraduate students educated annually through GSSF programs — on full scholarship, regardless of nationality or geographic circumstance.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <div className="text-sm uppercase tracking-widest text-white/60 mb-4">Learning Leaders</div>
                <div className="text-6xl md:text-7xl font-bold text-white mb-6">20-25</div>
                <p className="text-white/70 leading-relaxed">
                  Regional AI Competitions executed annually through the Global AI Cup. Each activates 300+ students at under $4,000 per student.
                </p>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <div className="text-sm uppercase tracking-widest text-white/60 mb-4">Global Continent</div>
                <div className="text-6xl md:text-7xl font-bold text-white mb-6">6</div>
                <p className="text-white/70 leading-relaxed">
                  Self-sustaining operations across all six inhabited continents. Liability regions independent by fund. Has own unique tools and GSSC Worlds designation.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Summary Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Global Network
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              GSSF programs are powered by mentors and advisors from the world's most influential institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <motion.div {...fadeInUp} className="text-center">
              <Globe className="text-[#242EC0] mx-auto mb-6" size={64} />
              <h3 className="text-2xl font-bold mb-4 uppercase">181 Universities</h3>
              <p className="text-gray-600 leading-relaxed">
                Partner universities across four continents participate in the 2026 GSSC cycle
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center">
              <Users className="text-[#242EC0] mx-auto mb-6" size={64} />
              <h3 className="text-2xl font-bold mb-4 uppercase">Global Mentors</h3>
              <p className="text-gray-600 leading-relaxed">
                Industry leaders from Google, Microsoft, Amazon, OpenAI, and more guide our programs
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center">
              <Award className="text-[#242EC0] mx-auto mb-6" size={64} />
              <h3 className="text-2xl font-bold mb-4 uppercase">4 Continents</h3>
              <p className="text-gray-600 leading-relaxed">
                Active operations across Americas, Europe, Asia & Middle East, with expansion planned
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center">
            <Link to="/network">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Button size="lg" className="bg-[#242EC0] text-white hover:bg-[#242EC0]/90 px-10 py-6 h-auto uppercase tracking-wide font-semibold">
                  Explore Our Network
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}