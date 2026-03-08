import { motion } from "motion/react";
import { Users } from "lucide-react";

export default function Team() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="bg-[#161616]">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-white/60 mb-6">
              Foundation Leadership
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight uppercase leading-tight">
              The Team
            </h1>
            <p className="text-xl text-white/80 max-w-4xl">
              Operators, educators, and ecosystem builders united by the "Organizers as Leaders" philosophy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-sm uppercase tracking-widest text-white/60 mb-12">
            Global Leadership
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {/* Mike Lee */}
            <motion.div {...fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Mike Lee</h3>
              <p className="text-sm uppercase tracking-wider text-[#242EC0] mb-4 font-bold">
                President & Executive
              </p>
              <p className="text-white/70 leading-relaxed">
                Former executive at Netscape, Fox, and Warner Bros. Founder of the USC AI Workforce of the Future Initiative. Co-founder of WBW and architect of the global competition framework.
              </p>
            </motion.div>

            {/* Liz Lee */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Liz Lee</h3>
              <p className="text-sm uppercase tracking-wider text-[#242EC0] mb-4 font-bold">
                Managing Director, Partnerships
              </p>
              <p className="text-white/70 leading-relaxed">
                Veteran ecosystem builder. Managing Director of Girls in Tech Korea. Led the roll out of Hillside. Expert in scaling high-growth, sustainable entities, and mixed-technology companies. The "Travelling Board" embodying systems at global operations.
              </p>
            </motion.div>

            {/* Carolina Avila */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Carolina Avila</h3>
              <p className="text-sm uppercase tracking-wider text-[#242EC0] mb-4 font-bold">
                Managing Director, Finance & Operations
              </p>
              <p className="text-white/70 leading-relaxed">
                Expert in global entrepreneurship programs. Former Head of Programs at Founders Pledge innovation platform. Strategic advisor to governments, universities, and the United Nations.
              </p>
            </motion.div>

            {/* Jade Baring */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Jade Baring</h3>
              <p className="text-sm uppercase tracking-wider text-[#242EC0] mb-4 font-bold">
                VP, Programs & Global Competitions
              </p>
              <p className="text-white/70 leading-relaxed">
                Founder of the GSSC movement and operational architect of the global competition framework. Curates large-scale in-person community and career memoirs at major technology and media companies.
              </p>
            </motion.div>

            {/* Yeseul Byun */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Yeseul Byun</h3>
              <p className="text-sm uppercase tracking-wider text-[#242EC0] mb-4 font-bold">
                Director, Global Competitions
              </p>
              <p className="text-white/70 leading-relaxed">
                Co-leads the Global Competition pillar, focusing on strategic expansion of the GSSC brand, and revolutionizing the "satellite" model across all regional qualifiers and global finals.
              </p>
            </motion.div>

            {/* Zoe Beach */}
            <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Zoe Beach</h3>
              <p className="text-sm uppercase tracking-wider text-[#242EC0] mb-4 font-bold">
                Director, Global Site Sponsors
              </p>
              <p className="text-white/70 leading-relaxed">
                Embodies the GSSF "Organizers as Leaders" pipeline, having moved from program participant to Foundation leader. Connects world-class driven talent with Silicon Valley venture capital and international innovators.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-sm uppercase tracking-widest text-white/60 mb-12">
            Regional Leadership
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Mihaya Agarwal */}
            <motion.div {...fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Mihaya Agarwal</h3>
              <p className="text-sm uppercase tracking-wider text-[#242EC0] mb-4 font-bold">
                Regional Director, Mumbai
              </p>
              <p className="text-white/70 leading-relaxed">
                Professor and mentor. Building the regional scaling model. Designed to achieve full off-sustainable revenue and partnerships.
              </p>
            </motion.div>

            {/* Jongyeop Seon */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Jongyeop Seon</h3>
              <p className="text-sm uppercase tracking-wider text-[#242EC0] mb-4 font-bold">
                Regional Director, Korea
              </p>
              <p className="text-white/70 leading-relaxed">
                Building sustainable, scalable regional ecosystems rooted by the GSSF World yearly event in Seoul. Oversees regional university partnerships and corporate agreements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Advisors */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 {...fadeInUp} className="text-sm uppercase tracking-widest text-white/60 mb-12">
            Global Advisors
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Gigi Wang */}
            <motion.div {...fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Gigi Wang</h3>
              <p className="text-sm uppercase tracking-wider text-[#242EC0] mb-4 font-bold">
                Senior Director & Global Fellow
              </p>
              <p className="text-white/70 leading-relaxed">
                Industry Fellow at USC. Ecosystem builder. Co-founder of the GSSC movement and overall nonparallel bridge of entrepreneurship, pioneering programs that bridge academia with Silicon Valley.
              </p>
            </motion.div>

            {/* Cheryl Edison */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Cheryl Edison</h3>
              <p className="text-sm uppercase tracking-wider text-[#242EC0] mb-4 font-bold">
                Global Advisor
              </p>
              <p className="text-white/70 leading-relaxed">
                Global business advisor and expert in US Market Entry. Led innovation initiatives in 3E business. Strategic consultant for the US State Department, specializing in global brand strategy and ecosystem building.
              </p>
            </motion.div>

            {/* Andres Barreto */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Andres Barreto</h3>
              <p className="text-sm uppercase tracking-wider text-[#242EC0] mb-4 font-bold">
                Global Advisor
              </p>
              <p className="text-white/70 leading-relaxed">
                Managing Director at Techstars Fintech. Serial entrepreneur and early-stage investor, ensuring student-led teams meet the rigorous investment standards of global venture capitalists.
              </p>
            </motion.div>

            {/* Nitin Kale */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Nitin Kale</h3>
              <p className="text-sm uppercase tracking-wider text-[#242EC0] mb-4 font-bold">
                Academic Advisor
              </p>
              <p className="text-white/70 leading-relaxed">
                Professor of Engineering Practice at USC. Expert in AI, Analytics, and Blockchain, ensuring GSSF curricula remain at the forefront of emerging technologies.
              </p>
            </motion.div>

            {/* Rob Upham */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">Rob Upham</h3>
              <p className="text-sm uppercase tracking-wider text-[#242EC0] mb-4 font-bold">
                Global Advisor
              </p>
              <p className="text-white/70 leading-relaxed">
                Industry Fellow at UC Berkeley. Expert in global entrepreneurship and venture investment, connecting GSSF ventures with capital through a strong global network of investors and founders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
