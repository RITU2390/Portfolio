export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Heading */}
        <h2 id="about-title" className="text-2xl font-semibold text-balance">
          <span className="text-red-500">About</span> Me
        </h2>

        {/* Introduction */}
        <p className="mt-4 text-white/90 leading-relaxed">
          I’m a final-year <span className="font-semibold">Information Technology (BE, 2025)</span> student, passionate about
          <span className="text-red-400"> Software Engineering, Cybersecurity, and Cloud Technologies</span>.  
          My focus lies in building secure, scalable, and user-friendly applications that solve real-world problems.
        </p>

        {/* Internship Experience */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-red-400">💼 Internship Experience</h3>
          <p className="mt-2 text-white/90 leading-relaxed">
            During my <span className="font-medium">Project Management Internship at ATG, Banao</span>,  
            I led client projects that achieved:
          </p>
          <ul className="list-disc list-inside mt-2 text-white/90 space-y-1">
            <li>📈 20% increase in user engagement</li>
            <li>✅ 30% improvement in content accuracy</li>
            <li>👥 Leadership experience managing a 5-member team</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-red-400">🚀 Key Projects</h3>
          <ul className="list-disc list-inside mt-2 text-white/90 space-y-1">
            <li>
              <span className="font-medium">QR-Based E-Gate Pass Management System</span> –  
              Built with React.js & Firebase, featuring secure QR access and real-time notifications.
            </li>
            <li>
              <span className="font-medium">Vehicle Services Management System</span> –  
              Full-stack web app for service scheduling, tracking, and customer data management.
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-red-400">🛠 Technical Skills</h3>
          <p className="mt-2 text-white/90">
            <span className="font-medium">Languages:</span> C/C++, Python, JavaScript, SQL, HTML, CSS <br />
            <span className="font-medium">Frameworks & Tools:</span> React.js, Bootstrap, Tailwind, Firebase, Git/GitHub, Linux, Figma <br />
            <span className="font-medium">Core Areas:</span> OOP, Data Structures & Algorithms, DBMS, Operating Systems, Secure App Development
          </p>
        </div>

        {/* Certifications */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-red-400">🎓 Certifications</h3>
          <ul className="list-disc list-inside mt-2 text-white/90 space-y-1">
            <li>Google Cybersecurity Professional</li>
            <li>Google AI Essentials</li>
            <li>SQL for Data Science</li>
            <li>Android Developer Internship</li>
          </ul>
        </div>

        {/* Extracurricular */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-red-400">⚡ Beyond Academics</h3>
          <p className="mt-2 text-white/90 leading-relaxed">
            I’m an active sports enthusiast <span className=" text-red-400"> —3rd place in Intercollegiate Handball</span>, with achievements in table tennis and badminton.  
            These experiences have sharpened my <span className="font-medium">teamwork, focus, and resilience</span>.
          </p>
        </div>

        {/* Career Goals */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-red-400">🔍 Career Goals</h3>
          <p className="mt-2 text-white/90 leading-relaxed">
            I’m actively seeking opportunities in <span className="font-medium">Software Development, Cybersecurity, and Cloud/DevOps</span>,  
            where I can contribute with technical expertise and a problem-solving mindset.
          </p>
          <p className="mt-2 text-white/90">
            📫 Let’s connect—I’m always open to networking, mentorship, and new opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
