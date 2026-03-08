import { motion } from "motion/react";
import { Trophy, Code, Brain, Target, DollarSign, Users, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export default function AICup() {
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
              Global<br />AI Cup
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light uppercase tracking-wide">
              Applied AI Competition - Regional → Seoul
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
                  The Global AI Cup is GSSF's regional activation and marketing engine. A $2,000 regional investment activates 10+ university campuses with 50+ participants each — moving students from AI consumers to AI builders through applied, in-person competition. The top 2 finalists from each University AI Cup advance to the Regional AI Cup to compete for GAICup.io. By 2030, the top 5 regional champions advance to the Global AI Cup at GSSC Worlds in Seoul. The most capital-efficient activation model in the GSSF portfolio.
                </p>
              </motion.div>
            </div>

            {/* Statistics */}
            <div className="space-y-8">
              <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#242EC0] mb-2">$2,000</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Initial Investment</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#242EC0] mb-2">500</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Students Activated</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#242EC0] mb-2">&lt;$4</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Per Student</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Activation Path */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-12 tracking-tight uppercase">
            Activation Path
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div {...fadeInUp} className="bg-white p-8 rounded-lg">
              <div className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-4">Step 1</div>
              <h3 className="text-2xl font-bold mb-4 uppercase">University AI Cup</h3>
              <p className="text-gray-700 leading-relaxed">
                On-campus AI Cup competition (4x weeks)
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-lg">
              <div className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-4">Step 2</div>
              <h3 className="text-2xl font-bold mb-4 uppercase">Regional AI Cup</h3>
              <p className="text-gray-700 leading-relaxed">
                Top 2 finalists from university (1 month)
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-lg">
              <div className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-4">Step 3 - 2030</div>
              <h3 className="text-2xl font-bold mb-4 uppercase">Global AI Cup - 2030</h3>
              <p className="text-gray-700 leading-relaxed">
                Top 5 regionals compete in Seoul (2030+)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Evaluation Framework */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-4 tracking-tight uppercase">
            Evaluation Framework
          </motion.h2>
          <motion.p {...fadeInUp} className="text-gray-600 mb-12 uppercase tracking-wider text-sm">
            (25 pts each)
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div {...fadeInUp} className="border-l-4 border-[#242EC0] pl-6 py-4">
              <h3 className="text-xl font-bold mb-2">Technical Complexity — 25 pts</h3>
              <p className="text-gray-700">RAG, agentic workflows, fine-tuning</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="border-l-4 border-[#242EC0] pl-6 py-4">
              <h3 className="text-xl font-bold mb-2">Applied Utility & Impact — 25 pts</h3>
              <p className="text-gray-700">Real-world problem solving</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="border-l-4 border-[#242EC0] pl-6 py-4">
              <h3 className="text-xl font-bold mb-2">System Demo & Reliability — 25 pts</h3>
              <p className="text-gray-700">Live performance</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="border-l-4 border-[#242EC0] pl-6 py-4">
              <h3 className="text-xl font-bold mb-2">Scalability & Feasibility — 10 pts</h3>
              <p className="text-gray-700">Path to product</p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="border-l-4 border-[#242EC0] pl-6 py-4 md:col-span-2">
              <h3 className="text-xl font-bold mb-2">Presentation & Docs — 15 pts</h3>
              <p className="text-gray-700">README, architecture clarity</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Phases */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-12 tracking-tight uppercase">
            Regional Expansion
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="bg-white p-8 rounded-lg">
              <h3 className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-4">Phase 1 - Active (FY25-26)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• India</li>
                <li>• Middle East</li>
                <li>• South Korea</li>
                <li>• United States-Europe</li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-lg">
              <h3 className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-4">Phase 2 - By March (2027)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Singapore</li>
                <li>• Ukraine</li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-lg">
              <h3 className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-4">Phase 3 - Waitlist (2028+)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Australia</li>
                <li>• Nigeria</li>
                <li>• Target: ~10 regional AI competitions per year</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prize Structure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-12 tracking-tight uppercase">
            Prize Type Regions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-[#242EC0] mb-2">$1,000</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">1st Place</div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-[#242EC0] mb-2">$500</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">2nd Place</div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-[#242EC0] mb-2">Local</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Innovation Support</div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-[#E4E6F3] p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-[#242EC0] mb-2">$2,000</div>
              <div className="text-sm uppercase tracking-wider text-gray-600">Total Regional Activation</div>
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
              Join the AI Cup
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to build AI solutions that matter? Connect with us to bring the AI Cup to your region or university.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-[#242EC0] hover:bg-white/90 px-10 py-6 h-auto uppercase tracking-wide font-semibold">
                    Get Involved
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
