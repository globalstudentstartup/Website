import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function UseOfFunds() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
        <Link to="/governance" className="inline-flex items-center gap-2 text-[#242EC0] hover:underline mb-8">
          <ArrowLeft size={20} />
          Back to Governance
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight uppercase">
            Use of Funds Policy
          </h1>
          <p className="text-sm text-gray-500 mb-12">
            Adopted: December 28, 2023 | Updated: February 14, 2025
          </p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              [Policy content to be added]
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
