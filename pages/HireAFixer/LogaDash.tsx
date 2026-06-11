import Image from "next/image";
import Link from "next/link";

const sections = ["Overview", "Problem", "Goal", "Approach", "Execution", "Outcome"];

export default function LogaDashProject() {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (<div className="bg-white">
    <main className="font-sans bg-white min-h-screen max-w-[1280px] mx-auto px-10 py-12">

      <Link
        href="/projects"
        className="text-sm text-gray-500 mt-20 flex items-center gap-1 mb-8 hover:text-black"
      >
        &larr; View all Projects
      </Link>

      <h1 className="text-4xl font-black text-gray-900 mb-2">HireAfixer</h1>

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

      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-1">
          {"View Figma Design: "}
        </h1>
        <a href="https://www.figma.com/design/4PdgXX2yc0qqujAMx4UglX/Profixer-Project?node-id=0-1&t=UOLgKi0MMHiwuBCC-1"
          className="text-gray-600 font-normal break-all"
          target="_blank"
          rel="noreferrer"
        >
          https://www.figma.com/design/4PdgXX2yc0qqujAMx4UglX/Profixer-Project?node-id=0-1&t=1FIc5lOFaqsfKXmi-1
        </a>
      </div>


      <div className="w-full rounded-2xl overflow-hidden mb-12">
        <Image
          src="/hf1.png"
          alt="HireAfixer Homepage"
          width={1280}
          height={700}
          className="w-full object-cover"
        />
      </div>

      {/* OVERVIEW */}
      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Overview</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          HireAfixer is a platform that connects users with verified service providers for home repairs
          and small tasks, ensuring quality work and reliable payments. The app simplifies hiring,
          tracking, and payment processes for both customers and service providers.
        </p>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Problem</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          People often struggle to find trustworthy professionals for home repairs or small tasks,
          leading to delays, poor quality work, or payment issues.
        </p>
        <p className="text-sm font-bold text-gray-900 mb-3">Key Constraints:</p>
        <ul className="space-y-2">
          {[
            "Users can't easily verify service providers' reliability",
            "Service requests and scheduling can be confusing or inconsistent",
            "Payment processes may feel insecure or complicated",
            "Communication between users and service providers is often unclear or delayed",
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
          src="/hf2.png"
          alt="Projects Page"
          width={1280}
          height={700}
          className="w-full object-cover"
        />
      </div>

      {/* GOAL */}
      <section id="goal" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">The Goal</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-4">
          To create a reliable platform that connects users with verified service providers:
        </p>
        <ul className="space-y-2">
          {[
            "Enable users to quickly find and hire verified professionals",
            "Simplify job scheduling and progress tracking",
            "Ensure secure and transparent payment processes",
            "Improve communication between users and service providers in real time",
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
          src="/hf3.png"
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
            "Focused on building trust through verified profiles and ratings",
            "Designed a simple and intuitive booking flow for quick task creation",
            "Ensured clear visibility of job status from request to completion",
            "Reduced friction by keeping the interface minimal and easy to navigate",
            "Integrated real-time updates to keep users informed at every stage",
            "Prioritised mobile usability for fast and convenient access",
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
          src="/hf4.png"
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
          The HireAfixer platform was designed through a structured process focused on usability, clarity,
          and efficiency for both users and service providers.
        </p>
        <ul className="space-y-2">
          {[
            "Mapped user journeys to simplify hiring and task management",
            "Designed clean and consistent interfaces for easy interaction",
            "Built scalable UI components for different service categories",
            "Implemented real-time tracking and communication features",
            "Refined layouts based on usability feedback",
            "Ensured smooth transition from design to development",
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
          src="/hf5.png"
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
            "Provides a reliable way to find and hire service professionals",
            "Improves trust through transparency and verified providers",
            "Reduces delays with better scheduling and communication",
            "Enhances overall user experience for both customers and providers",
            "Simplifies task management from start to completion",
            "Encourages efficiency and accountability across services",
          ].map((item) => (
            <li key={item} className="text-base text-gray-600 flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-sm font-bold text-gray-900 mb-2">Impact</p>
        <p className="text-base text-gray-600 leading-relaxed">
          HireAfixer improves how people handle everyday service needs by making the process faster,
          more transparent, and more reliable for both users and service providers.
        </p>
      </section>

      <div className="w-full rounded-2xl overflow-hidden mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-6">Media Gallery</h2>
        <Image
          src="/hf6.png"
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