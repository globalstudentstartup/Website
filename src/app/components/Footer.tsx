import { Link } from "react-router";
import logoBlack from "figma:asset/79566f8df6b5c3761b519dc9d46ef31e438a7a0b.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/8 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img src={logoBlack} alt="GSSF" className="h-16 w-auto mb-6" />
            <p className="text-gray-600 max-w-md leading-relaxed">
              Talent is equal. Opportunity is not. We're working to change that through education, innovation, and global collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/gssc" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  GSSC
                </Link>
              </li>
              <li>
                <Link to="/ai-cup" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  AI Cup
                </Link>
              </li>
              <li>
                <Link to="/academy" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  Academy
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  Ventures
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/network" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  Global Network
                </Link>
              </li>
              <li>
                <Link to="/governance" className="text-gray-600 hover:text-[#242EC0] transition-colors">
                  Governance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/8 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">&copy; 2026 GSSF. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-500">
            <Link to="/policies/conflict-of-interest" className="hover:text-[#242EC0] transition-colors">
              Conflict of Interest Policy
            </Link>
            <Link to="/policies/use-of-funds" className="hover:text-[#242EC0] transition-colors">
              Use of Funds Policy
            </Link>
            <Link to="/policies/by-laws" className="hover:text-[#242EC0] transition-colors">
              By-Laws
            </Link>
            <Link to="/policies/privacy-policy" className="hover:text-[#242EC0] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}