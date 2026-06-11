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

      <h1 className="text-4xl font-black text-gray-900 mb-2">LogaDash</h1>

      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
        Timeline: 3 Months
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

      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-1">
          {"View Figma Design: "}
    
        </h1>
          <a href="https://www.figma.com/design/he0KhQlJtuuB1MVE9AbeDV/Food-Delivery-App?node-id=0-1&t=5f9R8YE1xVZuBZTD-1"
            className="text-gray-500 font-normal break-all"
            target="_blank"
            rel="noreferrer"
          >
            https://www.figma.com/design/he0KhQlJtuuB1MVE9AbeDV/Food-Delivery-App?node-id=0-1&t=5f9R8YE1xVZuBZTD-1
          </a>
      </div>


      <div className="w-full rounded-2xl overflow-hidden mb-12">
        <Image
          src="/da1.png"
          alt="LogaDash Homepage"
          width={1280}
          height={700}
          className="w-full object-cover"
        />
      </div>

      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Overview</h2>
        <p className="text-base text-gray-600 leading-relaxed">
          LogaDash is a mobile application that allows users to order food and send items for
          delivery, all in one place. The platform connects multiple types of users, customers,
          riders, kitchen partners, and admins, creating a seamless ecosystem for food and item
          delivery. Customers can browse menus, place orders, or schedule deliveries for items,
          while riders receive pickup requests, navigate to the destination, and update delivery
          status in real time. Kitchen partners manage orders from customers, prepare meals
          efficiently, and communicate with riders when items are ready for pickup. Admins oversee
          the entire platform, monitoring orders, deliveries, and user interactions to ensure smooth
          operations. This interconnected system allows each user type to perform their tasks
          efficiently while keeping the experience transparent, reliable, and fast for everyone
          involved.
        </p>
      </section>

      <section id="problem" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Problem</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          People do not just need food delivered, they also need items moved from one place to
          another with effective real time tracking system.
        </p>
        <p className="text-sm font-bold text-gray-900 mb-3">Key Constraints:</p>
        <ul className="space-y-2">
          {[
            "Food delivery apps only handle meals",
            "Logistics services can be slow or complicated",
            "Users have limited visibility into their deliveries",
            "Communication with riders is often unclear or delayed",
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
          src="/da2.png"
          alt="LogaDash Order Screen"
          width={1280}
          height={700}
          className="w-full object-cover"
        />
      </div>

      {/* GOAL */}
      <section id="goal" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">The Goal</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-4">
          To design a unified platform where users can:
        </p>
        <ul className="space-y-2">
          {[
            "Order food easily",
            "Send items for delivery without stress",
            "Track their deliveries in real time",
            "Communicate directly with riders when needed",
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
          src="/da3.png"
          alt="LogaDash Admin Dashboard"
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
            "Designed a seamless experience that supports multiple use cases without overwhelming users",
            "Created separate but connected user flows for food ordering and item delivery",
            "Ensured clarity at every step of the user journey",
            "Kept navigation simple for easy switching between services",
            "Built a clean, intuitive interface focused on key actions",
            "Prioritised real-time feedback like tracking updates and in-app chat",
            "Kept users informed and in control throughout the process",
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
          src="/da4.png"
          alt="LogaDash Riders Dashboard"
          width={1280}
          height={700}
          className="w-full object-cover"
        />
      </div>

      {/* EXECUTION */}
      <section id="execution" className="mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Execution</h2>
        <p className="text-base text-gray-600 leading-relaxed mb-6">
          The LogaDash app was developed through a structured design process that turned user needs
          into intuitive, efficient, and visually cohesive experiences.
        </p>
        <ul className="space-y-2">
          {[
            "Translated user needs into clear, structured user flows for food ordering and item delivery",
            "Designed wireframes and high-fidelity interfaces focused on simplicity and usability",
            "Built a consistent design system for cohesive visuals and interactions",
            "Implemented real-time features like delivery tracking and in-app communication",
            "Iterated designs based on feedback to improve clarity and performance",
            "Ensured smooth handoff for development with well-organized design assets and specifications",
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
          src="/da5.png"
          alt="LogaDash Price Management Page"
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
            "Delivers a flexible and efficient platform for both food ordering and item delivery",
            "Improves visibility and control across daily operations",
            "Speeds up processes, making tasks more seamless",
            "Enhances coordination with live stock alerts and food-ready notifications",
            "Reduces delays through better communication and tracking",
            "Supports efficient kitchen and service management with inventory tracking",
          ].map((item) => (
            <li key={item} className="text-base text-gray-600 flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-sm font-bold text-gray-900 mb-2">Impact</p>
        <p className="text-base text-gray-600 leading-relaxed">
          LogaDash enhances efficiency and coordination by simplifying how deliveries and orders are
          managed, making the entire process faster, smoother, and more reliable for both users and
          operators.
        </p>
      </section>
      <div className="w-full rounded-2xl overflow-hidden mb-12">
        <h2 className="text-2xl font-black text-gray-900 mb-6">Media Gallery</h2>
        <Image
          src="/da6.png"
          alt="LogaDash Media Gallery"
          width={1280}
          height={700}
          className="w-full object-cover"
        />
      </div>

    </main>
  </div>
  );
}