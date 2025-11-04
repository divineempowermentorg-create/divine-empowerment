import { useState } from "react";

export default function DivineEmpowermentSite() {
  const [lang, setLang] = useState("en");
  const content = {
    en: {
      heroTitle: "From Within, We Rise — Empowering Families and Building Hope.",
      heroDesc:
        "Divine Empowerment is a grassroots nonprofit in Phoenix, Arizona — serving families all throughout the Valley of the Sun, offering free, bilingual, trauma‑informed and evidence‑based programs that uplift families, youth, and caregivers through healing, prevention, and empowerment.",
      aboutTitle: "About Divine Empowerment / La Fuerza Divina",
      aboutDesc:
        "Founded by a community advocate who turned lived experience into purpose, Divine Empowerment helps families rebuild their lives through education, resilience, and cultural pride. We believe every person deserves dignity, healing, and the power to rise again.",
      valuesTitle: "Our Core Values",
      values: [
        { title: "Integrity & Purpose", desc: "We lead with transparency, compassion, and commitment to our mission." },
        { title: "Healing & Growth", desc: "We use trauma‑informed and evidence‑based approaches to restore hope and stability." },
        { title: "Family & Culture", desc: "We honor cultural roots, family unity, and intergenerational healing." },
        { title: "Empowerment & Equity", desc: "We stand for justice, opportunity, and community leadership." },
      ],
      communityTitle: "Community Impact & Services",
      communityIntro:
        "Even without external funding, Divine Empowerment provides free, culturally rooted, trauma‑informed, and evidence‑based services to our Phoenix community. We collaborate with local organizations to make prevention, healing, and empowerment accessible to all.",
      services: [
        {
          title: "Parenting & Prevention",
          desc: "Workshops that strengthen families, teach prevention, and build protective factors.",
        },
        {
          title: "Youth Mentoring & Healing Circles",
          desc: "Safe spaces for youth to grow resilience, share experiences, and receive trauma‑informed support.",
        },
        {
          title: "Family Drug Education",
          desc: "Community education to prevent substance misuse and encourage open family communication.",
        },
        {
          title: "Foster Youth & Caregiver Support",
          desc: "Guided prevention and mentoring programs designed for current and former foster youth and caregivers.",
        },
        {
          title: "Child Well‑Being & Safety",
          desc: "Resources and advocacy to help prevent child abuse and strengthen protective family bonds.",
        },
        {
          title: "Domestic & Sexual Violence Awareness",
          desc: "Education and support in partnership with community leaders to create safer families.",
        },
      ],
      founderTitle: "A Message from Our Founder",
      founderQuote:
        "This work is personal. Every family we reach reminds me that compassion, knowledge, and resilience can heal generations. We rise together to build stronger, safer, and more empowered communities.",
      contactTitle: "Contact Us",
      contactDesc:
        "Have questions, want to collaborate, or need services? Get in touch — we’d love to hear from you.",
      phone: "(480) 297‑9340",
      email: "divineempowermentorg@gmail.com",
      footerNote:
        "© " + new Date().getFullYear() + " Divine Empowerment / La Fuerza Divina. Built on evidence‑based practice, cultural pride, and community strength.",
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
          <a href="#hero" className="flex items-center gap-3 group" aria-label="Divine Empowerment home">
            {/* Brand logo image (upload to /assets/logo-header-192.png on your host) */}
            <img
              src="/assets/logo-header-192.png"
              alt="Divine Empowerment – La Fuerza Divina logo"
              className="h-10 w-auto drop-shadow-sm"
              onError={(e)=>{e.currentTarget.style.display='none'}}
            />
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Divine Empowerment <span className="text-slate-500 text-sm">/ La Fuerza Divina</span>
            </span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-[#F1B31C]">About</a>
            <a href="#values" className="hover:text-[#F1B31C]">Values</a>
            <a href="#community" className="hover:text-[#F1B31C]">Programs</a>
            <a href="#contact" className="hover:text-[#F1B31C]">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#0B1B2B]/5 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">{t.heroTitle}</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-8">{t.heroDesc}</p>
          <a href="#community" className="inline-block bg-[#F1B31C] text-[#0B1B2B] px-6 py-3 rounded-full shadow hover:shadow-lg font-semibold">Explore Programs</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.aboutTitle}</h2>
            <p className="text-slate-700 leading-relaxed">{t.aboutDesc}</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-gradient-to-tr from-[#F7C948]/40 to-[#C23D83]/20 p-6">
            <p className="text-slate-800 italic font-medium text-center">
              “Breaking Chains. Building Strength. Empowering Families.”
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{t.valuesTitle}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {t.values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact & Services */}
      <section id="community" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">{t.communityTitle}</h2>
          <p className="max-w-3xl mx-auto text-center text-slate-700 mb-10 leading-relaxed">{t.communityIntro}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl mx-auto text-center italic text-slate-600">
            {t.founderQuote}
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.contactTitle}</h2>
            <p className="text-slate-700 mb-6">{t.contactDesc}</p>
            <ul className="space-y-2 text-slate-700">
              <li><strong>Phone:</strong> {t.phone}</li>
              <li><strong>Email:</strong> <a href="mailto:divineempowermentorg@gmail.com" className="underline">{t.email}</a></li>
              <li><strong>Location:</strong> Phoenix, Arizona — serving families all throughout the Valley of the Sun</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <label className="block mb-3 text-sm font-medium">Name
              <input type="text" className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" placeholder="Your name" />
            </label>
            <label className="block mb-3 text-sm font-medium">Email
              <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" placeholder="you@example.org" />
            </label>
            <label className="block mb-4 text-sm font-medium">Message
              <textarea rows={5} className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" placeholder="How can we help?" />
            </label>
            <button type="button" className="w-full rounded-full bg-slate-900 text-white px-5 py-3 font-semibold shadow hover:shadow-md">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Footer brand (upload to /assets/logo-512.png) */}
            <img src="/assets/logo-512.png" alt="Divine Empowerment logo" className="h-10 w-auto" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <p className="text-sm text-slate-500 text-center md:text-left">{t.footerNote}</p>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-[#F1B31C]">About</a>
            <a href="#community" className="hover:text-[#F1B31C]">Programs</a>
            <a href="#contact" className="hover:text-[#F1B31C]">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
