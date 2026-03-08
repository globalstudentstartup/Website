import { motion } from "motion/react";
import { Rocket, DollarSign, Users, Lightbulb, TrendingUp, Award, Target, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export default function Ventures() {
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
            <p className="text-sm uppercase tracking-widest text-white/80 mb-6">
              Financing by Guided Signal Models
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight uppercase leading-tight">
              GSSF<br />Ventures
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light uppercase tracking-wide">
              Venture Access & Signal Platform
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
                  GSSF Ventures connects exceptional undergraduate founding teams to leading VC firms, accelerators, and Startup ecosystems — with access-fully funded. Talent is identified through GSSF's global network of mentors, who collectively vet thousands of startups and founders each year. GSSF takes zero equity. The focus is identification, brokering, and signal creation — surfacing the world's best student founders and giving them a credible path to global capital.
                </p>
              </motion.div>
            </div>

            {/* Statistics */}
            <div className="space-y-8">
              <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#242EC0] mb-2">10</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Select Teams/Cohort</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#242EC0] mb-2">0%</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Equity Taken</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#242EC0] mb-2">Fully</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Funded Access</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is / Is Not */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* What It Is */}
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight text-[#242EC0]">What It Is</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>A venture access & signal platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>A global scouting & filtering mechanism</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>A bridge between regional ecosystems and global capital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>A bootstrapping-driven model organized in fund</span>
                </li>
              </ul>
            </motion.div>

            {/* What It Is Not */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight text-[#242EC0]">What It Is Not</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Not a capital allocator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Not a long-term accelerator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Not an investment fund</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Not a same-day cheque</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Golden Ticket & Global Scouting */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* The Golden Ticket */}
            <motion.div {...fadeInUp}>
              <div className="flex items-start gap-4 mb-6">
                <Award className="text-[#242EC0] flex-shrink-0" size={40} />
                <h2 className="text-3xl font-bold uppercase tracking-tight">The "Golden Ticket"</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ten Select Teams per cohort receive Golden Ticket access — an intensive in-person venture bootcamp followed by private pitch sessions with top Silicon Valley venture capital firms and institutional accelerators.
              </p>
            </motion.div>

            {/* Global Scouting */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <div className="flex items-start gap-4 mb-6">
                <Search className="text-[#242EC0] flex-shrink-0" size={40} />
                <h2 className="text-3xl font-bold uppercase tracking-tight">Global Scouting</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ventures are surfaced through Friends & Family network plus annuity scouting engine. Trusted regional buyers recommend standout teams - from participants we tested and referential existing discovery beyond traditional startup pipelines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-12 tracking-tight uppercase">
            Program Highlights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="bg-white p-8 rounded-lg">
              <Rocket className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Access to Capital</h3>
              <p className="text-gray-700">
                Direct connections to top VC firms and accelerators
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-lg">
              <DollarSign className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Zero Equity</h3>
              <p className="text-gray-700">
                GSSF takes no equity in your venture
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-lg">
              <Users className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Expert Network</h3>
              <p className="text-gray-700">
                Curated introductions through trusted mentors
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white p-8 rounded-lg">
              <Lightbulb className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Intensive Bootcamp</h3>
              <p className="text-gray-700">
                In-person training to prepare for investor meetings
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="bg-white p-8 rounded-lg">
              <TrendingUp className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Signal Creation</h3>
              <p className="text-gray-700">
                Build credibility through GSSF's network validation
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="bg-white p-8 rounded-lg">
              <Target className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Fully Funded</h3>
              <p className="text-gray-700">
                All program costs covered for selected teams
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeInUp}>
            <Rocket className="text-white mx-auto mb-8" size={64} />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight uppercase">
              Get Started with GSSF Ventures
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Building something exceptional? Connect with us to learn about Golden Ticket opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-[#242EC0] hover:bg-white/90 px-10 py-6 h-auto uppercase tracking-wide font-semibold">
                    Apply Now
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
