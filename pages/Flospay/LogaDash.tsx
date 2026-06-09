import Image from "next/image";
import Link from "next/link";

const sections = ["Overview", "Problem", "Goal", "Approach", "Execution", "Outcome"];

export default function FlosPayProject() {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (  <div className="bg-white">
    <main className="font-sans bg-white min-h-screen max-w-[1280px] mx-auto px-10 py-12">

      <Link
        href="/projects"
        className="text-sm text-gray-500 mt-20 flex items-center gap-1 mb-8 hover:text-black"
      >
        &larr; View all Projects
      </Link>

      <h1 className="text-4xl font-black text-gray-900 mb-2">FlosPay</h1>

      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
        Timeline: 2 Months
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
        {"View Figma Design: "}
        
          <a href="https://www.figma.com/design/xQXWPPKvvPqDov8RskPIMP/Flospay-Main?node-id=0-1&t=KaVBiuIXKt628Nf9-1"
          className="text-blue-500 font-normal break-all"
          target="_blank"
          rel="noreferrer"
        >
          https://www.figma.com/design/uxXWPPVKRvfqDovR8skPIM/Flospay-Main
        </a>
      </p>

      <div className="w-full rounded-2xl overflow-hidden mb-12">
        <Image
          src="/fp1.png"
          alt="FlosPay Landing Page"
          width={1280}
          height={700}
          className="w-full object-cover"
        />
      </div>

      {/* OVERVIEW */}
      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Overview</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          FlosPay is a fintech app that enables users to save, send payments, and create payment links with ease. 
          It also supports group savings through Esusu, where participants contribute regularly and take turns 
          accessing the pooled funds. The app simplifies personal and corporate financial management, making 
          payments and saving transparent and effortless.
        </p>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Problem</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          Managing personal and group finances can be complex and opaque. Users often struggle with:
        </p>
        <p className="text-sm font-bold text-gray-900 mb-3">Key Constraints:</p>
        <ul className="space-y-2">
          {[
            "Sending payments securely and quickly",
            "Tracking contributions and withdrawals in group savings",
            "Maintaining transparency and trust among participants",
            "Generating convenient payment links for easy collection",
          ].map((item) => (
            <li key={item} className="text-base text-gray-600 flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="w-full rounded-2xl overflow-hidden mb-12">
        <Image
          src="/fp2.png"
          alt="Features"
          width={1280}
          height={700}
          className="w-full object-cover"
        />
      </div>

      {/* GOAL */}
      <section id="goal" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">The Goal</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-4">
          To create a reliable financial platform that helps users manage payments and savings efficiently:
        </p>
        <ul className="space-y-2">
          {[
            "Save money individually or in groups via Esusu",
            "Generate and share payment links for easy transactions",
            "Send and receive payments quickly and securely",
            "Track contributions and withdrawals transparently",
            "Manage corporate or group savings efficiently",
          ].map((item) => (
            <li key={item} className="text-base text-gray-600 flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="w-full rounded-2xl overflow-hidden mb-12">
        <Image
          src="/fp3.png"
          alt="Dashboard"
          width={1280}
          height={700}
          className="w-full object-cover"
        />
      </div>

      {/* APPROACH */}
      <section id="approach" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">My Approach</h2>
        <p className="text-sm font-bold text-gray-900 mb-3">Key Decisions:</p>
        <ul className="space-y-2">
          {[
            "Designed a clean and trustworthy interface suitable for financial transactions",
            "Simplified complex financial flows into clear, guided user steps",
            "Focused on transparency through clear transaction history and tracking",
            "Integrated group savings (Esusu) with easy participation and visibility",
            "Ensured quick access to core actions like send, save, and request",
            "Maintained consistency across all financial interactions",
          ].map((item) => (
            <li key={item} className="text-base text-gray-600 flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="w-full rounded-2xl overflow-hidden mb-12">
        <Image
          src="/fp4.png"
          alt="More Screens"
          width={1280}
          height={700}
          className="w-full object-cover"
        />
      </div>

      {/* EXECUTION */}
      <section id="execution" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Execution</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          The FlosPay product was designed with a focus on clarity, security, and ease of use for everyday financial activities.
        </p>
        <ul className="space-y-2">
          {[
            "Created structured user flows for payments, savings, and group contributions",
            "Designed intuitive dashboards for financial overview and tracking",
            "Built reusable UI components for scalability",
            "Integrated real-time updates for transactions and balances",
            "Refined the experience through usability improvements",
            "Ensured consistency between design and development implementation",
          ].map((item) => (
            <li key={item} className="text-base text-gray-600 flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="w-full rounded-2xl overflow-hidden mb-12">
        <Image
          src="/fp5.png"
          alt="Management Page"
          width={1280}
          height={700}
          className="w-full object-cover"
        />
      </div>

      {/* OUTCOME */}
      <section id="outcome" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Expected Outcome</h2>
        <ul className="space-y-2 mb-8">
          {[
            "Simplifies financial management for individuals and groups",
            "Improves transparency in group savings and transactions",
            "Enhances trust through clear and secure payment processes",
            "Reduces friction in sending and receiving money",
            "Encourages consistent saving habits",
            "Provides an efficient and user-friendly fintech experience",
          ].map((item) => (
            <li key={item} className="text-base text-gray-600 flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-sm font-bold text-gray-900 mb-2">Impact</p>
        <p className="text-base text-gray-600 leading-relaxed">
          FlosPay makes managing money simpler, more transparent, and more accessible, helping users 
          confidently handle both personal and group finances.
        </p>
      </section>

       <div className="w-full rounded-2xl overflow-hidden mb-12">
              <h2 className="text-2xl font-black text-gray-900 mb-6">Media Gallery</h2>
        <Image
          src="/fp6.png"
          alt="Media Gallery"
          width={1280}
          height={700}
          className="w-full object-cover"
        />
      </div>

    </main>
    </div>
  );
}