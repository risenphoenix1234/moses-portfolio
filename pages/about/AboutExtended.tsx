export default function AboutExtended() {
  const processSteps = [
    {
      number: 1,
      title: "Discovery & Research",
      description:
        "Getting a clear picture of what the product is actually trying to solve. This usually means talking to stakeholders, looking at competitors, and trying to understand user behavior before anything is designed.",
    },
    {
      number: 2,
      title: "UX Strategy & Wireframing",
      description:
        "Turning all that messy early insight into structure. Information flows, user journeys, rough layouts — the kind of sketches that help you see if the idea even makes sense before polishing anything.",
    },
    {
      number: 3,
      title: "UI Design & Prototyping",
      description:
        "Bringing the experience to life visually. High-fidelity screens in Figma, interactive prototypes, and careful attention to spacing, hierarchy, and usability so it feels real not just planned.",
    },
    {
      number: 4,
      title: "Design System Development",
      description:
        "Creating a consistent set of reusable components and styles so everything stays aligned. Buttons, inputs, colors, typography rules — basically building the language the product speaks.",
    },
    {
      number: 5,
      title: "Design Handoff",
      description:
        "Preparing everything for developers in a clean, usable way. Organising files, adding clear specs, states and interactions so the transition from design to build feels smooth and nothing gets lost in translation.",
    },
    {
      number: 6,
      title: "Testing & Iteration",
      description:
        "Putting the design in front of real users, watching what breaks or confuses them, and refining it step by step. It's less about getting it perfect the first time and more about improving it with real feedback.",
    },
  ];

  const advantages = [
    {
      title: "Dual Perspective",
      description:
        "I design with a strong understanding of how products are built, which helps me create experiences that are both visually strong and practical to implement from the start.",
    },
    {
      title: "Efficient Workflow",
      description:
        "My process is built to reduce friction. From ideation to final screens, everything is structured to move quickly, stay clear, and avoid unnecessary back-and-forth.",
    },
    {
      title: "Scalable Thinking",
      description:
        "I create systems, not just screens. My work is structured to grow with the product, making it easier to maintain consistency as things evolve.",
    },
    {
      title: "Goal-Oriented Design",
      description:
        "I focus on what the product is actually trying to achieve. Every layout, interaction, and decision is guided by user needs and business outcomes, not just aesthetics.",
    },
  ];

  return ( <div className="bg-white">
    <div className="font-sans bg-white max-w-[1280px] mx-auto px-10 py-16 space-y-20">

      {/* Design and Development Stack */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-1">Design and Development Stack</h2>
        <p className="text-sm text-gray-500 mb-8">My tools for transforming ideas into functional products</p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Design Toolkits */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-4">
              <span className="text-gray-400">◎</span> Design Toolkits
            </p>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Framer", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems", "Wireframing", "Usability Testing"].map((tool) => (
                <span key={tool} className="text-sm text-gray-700 bg-gray-100 rounded-md px-3 py-1">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Core Methodologies */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-700 flex items-center gap-2 mb-4">
              <span className="text-green-500">◎</span> Core Methodologies
            </p>
            <div className="space-y-2">
              {[
                { dot: "green", label: "Design Thinking" },
                { dot: "green", label: "User-Centred Design" },
                { dot: "green", label: "Agile" },
                { dot: "green", label: "Lean UX" },
                { dot: "green", label: "Component Architecture" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Design Process */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-1">My Design Process</h2>
        <p className="text-sm text-gray-500 mb-8">How I approach projects from discovery to deployment</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {processSteps.map((step) => (
            <div key={step.number} className="border border-gray-200 rounded-2xl p-6">
              <p className="text-sm text-gray-400 mb-3">{step.number}</p>
              <h3 className="text-base font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Work With Me */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-1">Why Work With Me</h2>
        <p className="text-sm text-gray-500 mb-8">The unique advantages I bring to your projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {advantages.map((item) => (
           <div key={item.title} className="rounded-2xl p-6" style={{ backgroundColor: "#fbfff0" }}>
              <h3 className="text-base font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
    </div>
  );
}