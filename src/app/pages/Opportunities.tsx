import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Opportunities() {
  const scholarships = [
    {
      title: "Full Scholarship Program",
      description: "Complete tuition coverage for students from underserved communities. Includes living stipend and materials.",
      eligibility: "Students from developing countries with demonstrated financial need",
      deadline: "Rolling admissions",
      amount: "Full tuition + $500/month stipend"
    },
    {
      title: "Partial Scholarship",
      description: "50-75% tuition coverage for qualified students. Based on merit and financial need.",
      eligibility: "All students with strong academic record",
      deadline: "Quarterly deadlines",
      amount: "50-75% tuition coverage"
    },
    {
      title: "Women in Tech Scholarship",
      description: "Supporting women entering technology fields. Includes mentorship and career placement support.",
      eligibility: "Women pursuing technology-related programs",
      deadline: "March 31, September 30",
      amount: "Up to $5,000"
    }
  ];

  const partnerships = [
    {
      organization: "Global Tech Corporation",
      type: "Corporate Partner",
      description: "Provides internship opportunities, guest lectures, and hiring partnerships for our graduates.",
      opportunities: ["Internships", "Mentorship", "Job Placement"]
    },
    {
      organization: "International University Network",
      type: "Academic Partner",
      description: "Offers credit transfer and pathway programs for Academy graduates to continue their education.",
      opportunities: ["Credit Transfer", "Degree Programs", "Research Opportunities"]
    },
    {
      organization: "Digital Skills Foundation",
      type: "Program Partner",
      description: "Collaborates on curriculum development and provides certification opportunities.",
      opportunities: ["Joint Programs", "Certifications", "Resources"]
    },
    {
      organization: "Innovation Hub Africa",
      type: "Regional Partner",
      description: "Provides local support, facilities, and connections to the African tech ecosystem.",
      opportunities: ["Co-working Space", "Local Events", "Community Network"]
    }
  ];

  const successStories = [
    {
      name: "Maria Silva",
      country: "Brazil",
      program: "Software Development Track",
      outcome: "Now working as a Full-Stack Developer at a major tech company in Silicon Valley",
      year: "Class of 2024"
    },
    {
      name: "Ahmed Ibrahim",
      country: "Egypt",
      program: "Data Science Specialization",
      outcome: "Founded his own AI consulting firm serving clients across the Middle East",
      year: "Class of 2023"
    },
    {
      name: "Priya Sharma",
      country: "India",
      program: "Leadership Development",
      outcome: "Leading educational initiatives for underserved communities in South Asia",
      year: "Class of 2024"
    },
    {
      name: "Carlos Martinez",
      country: "Colombia",
      program: "Digital Marketing",
      outcome: "Head of Marketing at a fast-growing startup, managing a team of 15",
      year: "Class of 2023"
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tight">
            Global Opportunities
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Discover scholarships, partnerships, and success stories from our global network.
          </p>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase">Scholarships</h2>
          <div className="space-y-6">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-[#161616] p-8 rounded-lg border border-[#242EC0]">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{scholarship.title}</h3>
                    <p className="text-gray-300 mb-4">{scholarship.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Eligibility</p>
                        <p className="text-gray-300">{scholarship.eligibility}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Application Deadline</p>
                        <p className="text-gray-300">{scholarship.deadline}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:text-right">
                    <div className="text-3xl font-bold text-[#242EC0] mb-4">{scholarship.amount}</div>
                    <Button className="bg-[#242EC0] hover:bg-[#1a2190] text-white">
                      Apply Now <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-[#08044C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase">Partner Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-black/30 p-8 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{partner.organization}</h3>
                    <p className="text-[#242EC0] font-semibold">{partner.type}</p>
                  </div>
                  <ExternalLink className="text-gray-400" size={20} />
                </div>
                <p className="text-gray-300 mb-6">{partner.description}</p>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Opportunities Available:</p>
                  <div className="flex flex-wrap gap-2">
                    {partner.opportunities.map((opp, idx) => (
                      <span 
                        key={idx}
                        className="bg-[#242EC0] text-white px-3 py-1 rounded-full text-sm"
                      >
                        {opp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-[#161616] p-8 rounded-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#242EC0] rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-xl font-bold">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{story.name}</h3>
                    <p className="text-gray-400">{story.country}</p>
                    <p className="text-sm text-[#242EC0]">{story.year}</p>
                  </div>
                </div>
                <p className="text-gray-500 mb-3">{story.program}</p>
                <p className="text-gray-300">{story.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-20 bg-[#242EC0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">Partner With Us</h2>
            <p className="text-xl text-white/90 mb-12">
              Are you an organization interested in partnering with GSSF to create opportunities for talented individuals worldwide? We're always looking for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-black/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Corporate Partners</h3>
                <p className="text-white/80">Provide internships, jobs, and mentorship opportunities</p>
              </div>
              <div className="bg-black/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Academic Institutions</h3>
                <p className="text-white/80">Collaborate on programs and offer pathway opportunities</p>
              </div>
              <div className="bg-black/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Funding Partners</h3>
                <p className="text-white/80">Support scholarships and program development</p>
              </div>
            </div>
            <Button className="bg-black hover:bg-[#161616] text-white border border-white px-8">
              Get in Touch <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#242EC0] mb-2">89%</div>
              <p className="text-gray-300">Employment Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#242EC0] mb-2">150+</div>
              <p className="text-gray-300">Partner Organizations</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#242EC0] mb-2">$2M+</div>
              <p className="text-gray-300">Scholarships Awarded</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#242EC0] mb-2">95%</div>
              <p className="text-gray-300">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
