"use client";

import Image from "next/image";
import Link from "next/link";

const sections = ["Overview", "Problem", "Goal", "Approach", "Execution", "Outcome"];

export default function ProofboardProject() {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      <main className="font-sans bg-white min-h-screen max-w-[1280px] mx-auto px-10 py-12">

        <Link
          href="/projects"
          className="text-sm text-gray-500 mt-20 flex items-center gap-1 mb-8 hover:text-black"
        >
          &larr; View all Projects
        </Link>

        <h1 className="text-4xl font-black text-gray-900 mb-2">Proofboard</h1>

        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
          Timeline: 5 Months
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {sections.map((s, i) => (
            <button
              key={s}
              onClick={() => scrollToSection(s)}
              className="text-xs font-medium px-4 py-1.5 rounded cursor-pointer transition-all hover:opacity-80"
              style={{
                backgroundColor: i === 0 ? "#C8F135" : "transparent",
                color: i === 0 ? "#1a1a1a" : "#6b7280",
                border: i === 0 ? "none" : "1px solid #e5e7eb",
              }}
            >
              {s}
            </button>
          ))}
        </div>

        <p className="text-sm font-bold text-gray-900 mb-10">
          View Figma Design:{" "}
          <a
            href="https://www.figma.com/design/Hoyb8k45JKmpgnEz6wRRaB/Untitled?node-id=38-1407"
            className="text-blue-500 font-normal break-all"
            target="_blank"
            rel="noreferrer"
          >
            https://www.figma.com/design/Hoyb8k45JKmpgnEz6wRRaB/Untitled
          </a>
        </p>

        {/* IMAGE 1 */}
        <div className="w-full rounded-2xl overflow-hidden mb-12">
          <Image src="/pfd1.png" alt="Homepage" width={1280} height={700} className="w-full object-cover" />
        </div>

        {/* OVERVIEW */}
        <section id="overview" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Overview</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Proofboard is a SaaS platform that helps freelancers showcase verified proof of their work to potential clients. 
            Instead of traditional portfolios, it highlights deliverable results with tailored testimonials, 
            giving clients confidence in a freelancer's ability to deliver.
          </p>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Problem</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Freelancers struggle to convert potential clients because:
          </p>

          <p className="text-sm font-bold text-gray-900 mb-3">Key Constraints:</p>

          <ul className="space-y-2">
            {[
              "Portfolios show past work but don't prove delivery for new clients",
              "Proposals rely on claims instead of verifiable outcomes",
              "Fragmented tools make it hard to present proof efficiently",
              "Clients hesitate without credible evidence of successful delivery",
            ].map((item) => (
              <li key={item} className="text-base text-gray-600 flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* IMAGE 2 */}
        <div className="w-full rounded-2xl overflow-hidden mb-12">
          <Image src="/pfd2.png" alt="Homepage UI" width={1280} height={700} className="w-full object-cover" />
        </div>

        {/* GOAL */}
        <section id="goal" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The Goal</h2>
          <ul className="space-y-2">
            {[
              "Showcase proof of completed work tailored to each client",
              "Include verified testimonials to increase credibility",
              "Streamline how freelancers present work",
              "Build client confidence and improve conversion rates",
            ].map((item) => (
              <li key={item} className="text-base text-gray-600 flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* IMAGE 3 */}
        <div className="w-full rounded-2xl overflow-hidden mb-12">
          <Image src="/pfd3.png" alt="Dashboard" width={1280} height={700} className="w-full object-cover" />
        </div>

        {/* APPROACH */}
        <section id="approach" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">My Approach</h2>
          <ul className="space-y-2">
            {[
              "Focused on a trust-first design approach",
              "Structured proof into clear and digestible sections",
              "Simplified how freelancers create and present proof",
              "Ensured alignment between claims and evidence",
              "Maintained clean, minimal UI for readability",
            ].map((item) => (
              <li key={item} className="text-base text-gray-600 flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* IMAGE 4 */}
        <div className="w-full rounded-2xl overflow-hidden mb-12">
          <Image src="/pfd4.png" alt="Proposal Dashboard" width={1280} height={700} className="w-full object-cover" />
        </div>

        {/* EXECUTION */}
        <section id="execution" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Execution</h2>
          <ul className="space-y-2">
            {[
              "Designed structured workflows for proof creation",
              "Built reusable UI components for scalability",
              "Developed dashboards for managing proposals",
              "Integrated testimonials and measurable results",
              "Refined the experience through iteration",
            ].map((item) => (
              <li key={item} className="text-base text-gray-600 flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* IMAGE 5 */}
        <div className="w-full rounded-2xl overflow-hidden mb-12">
          <Image src="/pfd5.png" alt="Management Page" width={1280} height={700} className="w-full object-cover" />
        </div>

        {/* OUTCOME */}
        <section id="outcome" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Outcome</h2>

          <ul className="space-y-2 mb-8">
            {[
              "Improves freelancer credibility",
              "Increases proposal conversion rates",
              "Provides structured, verifiable proof of work",
              "Reduces client hesitation",
            ].map((item) => (
              <li key={item} className="text-base text-gray-600 flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-base text-gray-600 leading-relaxed">
            Proofboard shifts freelancers from static portfolios to structured proof-driven storytelling 
            that builds trust and drives decisions.
          </p>
        </section>

        {/* IMAGE 6 */}
        <div className="w-full rounded-2xl overflow-hidden mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-6">Media Gallery</h2>
          <Image src="/pfd6.png" alt="Media Gallery" width={1280} height={700} className="w-full object-cover" />
        </div>

      </main>
    </div>
  );
}