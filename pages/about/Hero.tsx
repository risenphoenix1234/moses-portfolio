import Image from "next/image";

export default function AboutPage() {
  const skills = [
    { icon: "◎", label: "UI/UX Design" },
    { icon: "◎", label: "Design Systems" },
    { icon: "◎", label: "User Research" },
    { icon: "✏", label: "Graphics Design" },
  ];

  return (
    <main className="font-sans min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-10 py-16">

        {/* Profile Card */}
        <div className="rounded-2xl border border-gray-200 p-10 flex flex-col sm:flex-row items-center sm:items-start gap-12 mb-14">

          {/* Avatar */}
          <div className="relative w-[260px] h-[320px] rounded-2xl overflow-hidden shrink-0 bg-gray-100">
            <Image
              src="\msses.jpeg"
              alt="Aniebiet Moses"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left pt-4">
            <h1 className="text-2xl font-bold tracking-wide uppercase text-gray-900 mb-2">
              Aniebiet Moses
            </h1>
            <p className="text-base text-gray-600 mb-8">
              UI/UX Designer, Graphic Designer &amp; Framer Developer
            </p>

            <div className="space-y-3 text-base text-gray-600 mb-8">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <span>📍</span>
                <span>Uyo, Nigeria</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <span>🗂</span>
                <span>2+ Experience in UI/UX Design</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <span>🏆</span>
                <span>6+ Projects Delivered</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <p className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">
                Get in touch
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-base text-gray-600">
                <span>✉</span>
                <a href="mailto:thenowfocus@gmail.com" className="hover:text-black transition-colors">
                  thenowfocus@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Design Meets Experience */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Design Meets Experience
          </h2>
          <div className="border border-gray-200 rounded-2xl p-8">
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
              I design User friendly interfaces for service-focused apps, combining strategic UX
              thinking with clean, user-centered UI design. Leveraging design systems and
              human-centered methodologies, I create experiences that guide users clearly and
              efficiently, ensuring safety, trust, and engagement. From research to final interface
              design, I craft solutions that make complex services easy to understand and use,
              driving real impact for users.
            </p>
          </div>
        </div>

        {/* Core Expertise */}
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-5">
            Core Expertise
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="flex items-center gap-3 bg-gray-900 text-white rounded-xl px-6 py-5 text-base font-medium"
              >
                <span className="text-lg opacity-70">{skill.icon}</span>
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}