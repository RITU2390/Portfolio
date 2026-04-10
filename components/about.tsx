export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative border-t border-white/10 overflow-hidden"
    >
      {/* 🔥 BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/bg_about.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔥 DARK OVERLAY (VERY IMPORTANT) */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">

        {/* 🔹 TITLE */}
        <h2 className="text-3xl md:text-6xl font-bold text-center">
          <span className="bg-gradient-to-b from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent font-sora drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">
            About
          </span>{" "}
          <span className="text-white-400 font-playfair italic drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]">Me</span>
        </h2>

        {/* 🔹 INTRO */}
        <p className="mt-6 text-base md:text-lg text-white/90 leading-relaxed text-center max-w-4xl mx-auto">
          I hold a{" "}
          <span className="font-semibold">Bachelor of Engineering</span> in{" "}
          <span className="font-semibold">Information Technology</span> from{" "}
          <span className="font-semibold">
            Sant Gadge Baba Amravati University
          </span>{" "}
          (2025) with a CGPA of <span className="font-semibold">8.28</span>. I
          am a driven and detail-oriented individual with a keen interest in{" "}
          <span className="block mt-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-medium">
  Software Engineering, Cybersecurity, and Cloud Technologies.
</span>

        </p>

        {/* 🔹 SECOND PARAGRAPH */}
        <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed text-center max-w-3xl mx-auto">
          My focus lies in building{" "}
          <span className="font-medium text-white">
            secure, scalable, and efficient applications
          </span>{" "}
          that deliver meaningful user experiences and solve real-world
          problems. I possess a strong technical foundation and continuously
          work towards expanding my expertise by learning modern tools,
          frameworks, and best practices.
        </p>

        {/* 🔹 THIRD PARAGRAPH */}
        <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed text-center max-w-3xl mx-auto">
          I am committed to continuous improvement and look forward to
          contributing to impactful projects in a{" "}
          <span className="font-medium text-white">
            collaborative and growth-oriented environment
          </span>
          .
        </p>
      </div>
    </section>
  );
}
