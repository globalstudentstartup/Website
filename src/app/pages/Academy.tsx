import { motion } from "motion/react";
import { GraduationCap, Users, Plane, Award, Target, Lightbulb } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export default function Academy() {
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
              Programs Subject to Executive Discretion
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight uppercase leading-tight">
              GSSF<br />Academy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light uppercase tracking-wide">
              3-Week Global Innovation Academy - Europe
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
                  A three-week, in-person Global Innovation Academy designed to bring together high-potential undergraduate students and experienced mentors from around the world to build early-stage, human-centered ventures. Taught by industry operators and mentors from the Tech and non-VC VCs. The Academy is a 'feeder accelerator and ecosystem extension' — not a substitute for GSSC Worlds. One team per cohort attends GSSC Worlds in Seoul with all expenses covered.
                </p>
              </motion.div>
            </div>

            {/* Statistics */}
            <div className="space-y-8">
              <motion.div {...fadeInUp} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#242EC0] mb-2">3</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Weeks - 1st Madrid</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#242EC0] mb-2">1</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Team to Seoul</div>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-[#E4E6F3] p-8 rounded-lg">
                <div className="text-5xl font-bold text-[#242EC0] mb-2">2,000</div>
                <div className="text-sm uppercase tracking-wider text-gray-600">Cohort - Now</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-12 tracking-tight uppercase">
            Program Structure
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Week 1 */}
            <motion.div {...fadeInUp} className="bg-white p-10 rounded-lg">
              <div className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-4">Week 1</div>
              <h3 className="text-2xl font-bold mb-6 uppercase">Formation & Validation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Team formation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Idea factory & problem exploration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Customer discovery & validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Early traction experiments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Mentor/ VC Advisor MVPs</span>
                </li>
              </ul>
            </motion.div>

            {/* Week 2 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-lg">
              <div className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-4">Week 2</div>
              <h3 className="text-2xl font-bold mb-6 uppercase">Design & Prototyping</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Product and service design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Technical & non-technical prototyping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Business model refinement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Mentor feedback loops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Iterative proofs of innovation</span>
                </li>
              </ul>
            </motion.div>

            {/* Week 3 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-lg">
              <div className="text-sm uppercase tracking-wider text-[#242EC0] font-bold mb-4">Week 3</div>
              <h3 className="text-2xl font-bold mb-6 uppercase">Storytelling & Pitch</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Pitch development & narrative clarity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Demo preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Final presentations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Selection of team for GSSC Worlds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#242EC0] mr-3 font-bold">•</span>
                  <span>Full travel & lodging covered for selected team</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Model */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold mb-8 tracking-tight uppercase">
                Application Model
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Invitation-led program with limited open application slots to ensure access diversity. Participants are selected through GSSF friends & family network introductions as well as limited open application slots and a smaller set of semi-application. Once selected, all participants are insured equally — no tiers, labels, or distinctions.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-4xl font-bold mb-8 tracking-tight uppercase">
                Pathway to GSSC Worlds
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                One Academy team is selected to attend GSSC Worlds in Seoul with international travel, lodging, full participation in the GSSC, first-class dinners, and co-leader plaything at the Asian Leadership Conference — all expenses covered by GSSF.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#E4E6F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-12 tracking-tight uppercase">
            What's Included
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="bg-white p-8 rounded-lg">
              <GraduationCap className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Expert Mentorship</h3>
              <p className="text-gray-700">
                Industry operators and VCs guide your venture development
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-lg">
              <Users className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Global Network</h3>
              <p className="text-gray-700">
                Connect with high-potential students from around the world
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-lg">
              <Target className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Hands-On Building</h3>
              <p className="text-gray-700">
                Three weeks of intensive venture development
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white p-8 rounded-lg">
              <Lightbulb className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Human-Centered Design</h3>
              <p className="text-gray-700">
                Build solutions that solve real problems
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="bg-white p-8 rounded-lg">
              <Plane className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Seoul Opportunity</h3>
              <p className="text-gray-700">
                Winning team attends GSSC Worlds fully funded
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.5 }} className="bg-white p-8 rounded-lg">
              <Award className="text-[#242EC0] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-3 uppercase">Equal Treatment</h3>
              <p className="text-gray-700">
                All participants equally supported—no tiers or labels
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeInUp}>
            <GraduationCap className="text-white mx-auto mb-8" size={64} />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight uppercase">
              Join GSSF Academy
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Applications are invitation-led with limited open slots. Interested in participating?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-[#242EC0] hover:bg-white/90 px-10 py-6 h-auto uppercase tracking-wide font-semibold">
                    Express Interest
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
