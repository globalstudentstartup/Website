import { motion } from "motion/react";
import { Globe } from "lucide-react";

export default function Network() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const Badge = ({ children }: { children: React.ReactNode }) => (
    <div className="px-4 py-2 bg-white/10 border border-white/20 rounded text-white text-sm uppercase tracking-wider font-semibold hover:bg-white/20 transition-colors">
      {children}
    </div>
  );

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
              Global Network
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight uppercase leading-tight">
              Mentor<br />Network
            </h1>
            <p className="text-xl text-white/70 max-w-4xl leading-relaxed">
              GSSF programs are powered by mentors and advisors from the world's most influential technology, media, academic, diplomatic, and public sector institutions. Individual participation; no implied institutional endorsement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mentor Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          {/* Technology & Innovation */}
          <motion.div {...fadeInUp}>
            <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
              Technology & Innovation
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge>Google</Badge>
              <Badge>Microsoft</Badge>
              <Badge>Amazon</Badge>
              <Badge>OpenAI</Badge>
              <Badge>Duolingo</Badge>
              <Badge>Techstars</Badge>
              <Badge>Netscape</Badge>
            </div>
          </motion.div>

          {/* Media & Entertainment */}
          <motion.div {...fadeInUp}>
            <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
              Media & Entertainment
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge>YouTube</Badge>
              <Badge>TikTok</Badge>
              <Badge>Netflix</Badge>
              <Badge>Disney+</Badge>
              <Badge>Live Nation</Badge>
              <Badge>Warner Bros.</Badge>
              <Badge>Fox</Badge>
              <Badge>Ticketmaster</Badge>
            </div>
          </motion.div>

          {/* Public Sector & International Relations */}
          <motion.div {...fadeInUp}>
            <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
              Public Sector & International Relations
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge>NASA</Badge>
              <Badge>United Nations</Badge>
              <Badge>US State Department</Badge>
              <Badge>Girls in Tech Korea</Badge>
            </div>
          </motion.div>

          {/* Academic Leadership */}
          <motion.div {...fadeInUp}>
            <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
              Academic Leadership
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge>USC</Badge>
              <Badge>UC Berkeley</Badge>
              <Badge>NASA / JPL / Caltech</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Universities Section */}
      <section className="py-24 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp}>
            <p className="text-sm uppercase tracking-widest text-white/60 mb-6">
              2026 Partner Network
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight uppercase leading-tight">
              Global<br />Universities
            </h2>
            <p className="text-xl text-white/80 max-w-4xl leading-relaxed mb-16">
              181 universities across four continents participate in the 2026 GSSC cycle. Participation by individuals; no implied institutional endorsement.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Americas */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Americas
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>USC</Badge>
                <Badge>UC Berkeley</Badge>
                <Badge>Harvard</Badge>
                <Badge>Stanford</Badge>
                <Badge>Cornell</Badge>
              </div>
            </motion.div>

            {/* Europe */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Europe
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>University of Oxford</Badge>
                <Badge>Aalto University</Badge>
              </div>
            </motion.div>

            {/* Asia & Middle East */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Asia & Middle East
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>STU</Badge>
                <Badge>KAIST</Badge>
                <Badge>Postech</Badge>
                <Badge>Korea University</Badge>
                <Badge>Ewha Womans University</Badge>
                <Badge>CMU Qatar</Badge>
                <Badge>Ajou University</Badge>
              </div>
            </motion.div>

            {/* India - Mega Region */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                India — Mega Region
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>IIT Delhi</Badge>
                <Badge>Ashoka University</Badge>
                <Badge>Plaksha University</Badge>
                <Badge>OP Jindal</Badge>
                <Badge>SRCC</Badge>
                <Badge>St. Stephen's</Badge>
                <Badge>Lady Shri Ram</Badge>
                <Badge>Miranda House</Badge>
                <Badge>Shaheed Sukhdev</Badge>
              </div>
            </motion.div>

            {/* Planned Expansion */}
            <motion.div {...fadeInUp}>
              <h3 className="text-sm uppercase tracking-widest text-white/60 mb-6">
                Planned Expansion (Not Committed)
              </h3>
              <div className="flex flex-wrap gap-3">
                <Badge>Singapore (2027)</Badge>
                <Badge>Ukraine (2027)</Badge>
                <Badge>Australia (2028)</Badge>
                <Badge>Nigeria (2028)</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
