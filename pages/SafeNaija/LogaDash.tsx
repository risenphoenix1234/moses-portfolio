import Image from "next/image";
import Link from "next/link";

const sections = ["Overview", "Problem", "Goal", "Approach", "Execution", "Outcome"];

export default function SafeNaijaProject() {
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

      <h1 className="text-4xl font-black text-gray-900 mb-2">SafeNaija</h1>

      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
        Timeline: 4 Months
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
        
          <a href="https://www.figma.com/design/dIImkcg7IOHx1LilSEDTzA/Safenija?node-id=0-1&t=hItYU7X2G0xisaEW-1"
          className="text-blue-500 font-normal break-all"
          target="_blank"
          rel="noreferrer"
        >
          https://www.figma.com/design/...
        </a>
      </p>

      <div className="w-full rounded-2xl overflow-hidden mb-12">
        <Image
          src="/sn1.png"
          alt="SafeNaija Homepage"
          width={1280}
          height={700}
          className="w-full object-cover"
        />
      </div>

      {/* OVERVIEW */}
      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Overview</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          SafeNaija is a security-focused platform that helps users stay informed and protected by providing 
          real-time safety alerts, location-based updates, and emergency support tools. It empowers individuals 
          and communities with timely information to make safer decisions in their daily lives.
        </p>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Problem</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          Personal and community safety can be unpredictable, and people often lack immediate access to 
          reliable information during critical situations.
        </p>
        <p className="text-sm font-bold text-gray-900 mb-3">Key Constraints:</p>
        <ul className="space-y-2">
          {[
            "Limited awareness of nearby security threats",
            "Delayed access to emergency alerts and updates",
            "Difficulty reaching the right help quickly",
            "Lack of a centralized platform for safety information",
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
          src="/sn2.png"
          alt="Check-in Screen"
          width={1280}
          height={700}
          className="w-full object-cover"
        />
      </div>

      {/* GOAL */}
      <section id="goal" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">The Goal</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-4">
          To design a secure and reliable platform where users can:
        </p>
        <ul className="space-y-2">
          {[
            "Receive real-time safety alerts based on their location",
            "Quickly contact emergency services when needed",
            "Check on the safety of friends and family",
            "Access reliable safety information without delays",
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
          src="/sn3.png"
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
            "Designed a calm and clear interface suitable for high-stress situations",
            "Prioritised quick access to emergency features",
            "Used location-based logic to deliver relevant alerts",
            "Ensured information is easy to scan and understand instantly",
            "Focused on reliability and speed of critical interactions",
            "Maintained consistency across all safety-related features",
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
          src="/sn4.png"
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
          SafeNaija was developed through a structured design approach focused on usability, speed, and reliability.
        </p>
        <ul className="space-y-2">
          {[
            "Mapped emergency and alert-based user flows",
            "Designed intuitive screens for fast interaction",
            "Built scalable components for different alert types",
            "Integrated real-time updates for safety notifications",
            "Tested usability for clarity under pressure",
            "Ensured smooth design-to-development handoff",
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
          src="/sn5.png"
          alt="More Screens"
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
            "Improves awareness of nearby safety risks",
            "Enables faster response during emergencies",
            "Enhances communication between users and support services",
            "Builds confidence through reliable information",
            "Reduces uncertainty in critical situations",
            "Provides a dependable personal safety tool",
          ].map((item) => (
            <li key={item} className="text-base text-gray-600 flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-sm font-bold text-gray-900 mb-2">Impact</p>
        <p className="text-base text-gray-600 leading-relaxed">
          SafeNaija empowers users with timely and reliable safety information, helping them stay alert, 
          respond quickly, and make safer decisions in their everyday lives.
        </p>
      </section>

       <div className="w-full rounded-2xl overflow-hidden mb-12">
              <h2 className="text-2xl font-black text-gray-900 mb-6">Media Gallery</h2>
        <Image
          src="/sn6.png"
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