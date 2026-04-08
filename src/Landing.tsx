export default function Landing() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-[#060e20]/60 backdrop-blur-xl flex justify-between items-center px-6 h-16 shadow-[0_0_32px_rgba(129,236,255,0.1)]">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#81ecff] to-[#00e3fd] bg-clip-text text-transparent font-['Space_Grotesk'] tracking-tight">
            Talent Land 2026
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-['Space_Grotesk'] tracking-tight">
          <a
            className="text-[#81ecff] border-b-2 border-[#81ecff] pb-1"
            href="#"
          >
            Dashboard
          </a>
          <a
            className="text-[#dee5ff] hover:text-[#81ecff] transition-colors"
            href="#"
          >
            Schedule
          </a>
          <a
            className="text-[#dee5ff] hover:text-[#81ecff] transition-colors"
            href="#"
          >
            Rooms
          </a>
          <a
            className="text-[#dee5ff] hover:text-[#81ecff] transition-colors"
            href="#"
          >
            Settings
          </a>
        </div>
        <div className="flex items-center gap-4 text-[#81ecff]">
          <button className="p-2 hover:bg-[#1f2b49]/50 transition-all duration-300 active:scale-95 rounded-full">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 hover:bg-[#1f2b49]/50 transition-all duration-300 active:scale-95 rounded-full">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </header>

      {/* SideNavBar - Web Only */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-[#060e20] border-r border-[#40485d]/15 pt-20 z-40">
        <div className="px-6 mb-8">
          <h2 className="font-['Space_Grotesk'] font-bold text-[#81ecff] text-xl">
            Speaker Hub
          </h2>
          <p className="text-on-surface-variant text-sm">Talent Land 2026</p>
        </div>
        <nav className="flex-grow font-['Inter'] font-medium">
          <a
            className="bg-gradient-to-r from-[#81ecff]/10 to-transparent text-[#81ecff] border-l-4 border-[#81ecff] px-4 py-3 flex items-center gap-3 transition-transform duration-200 cursor-pointer active:opacity-80"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>{" "}
            Dashboard
          </a>
          <a
            className="text-[#dee5ff]/70 px-4 py-3 flex items-center gap-3 hover:bg-[#1f2b49]/30 hover:translate-x-1 transition-transform duration-200 cursor-pointer active:opacity-80"
            href="#"
          >
            <span className="material-symbols-outlined">calendar_today</span>{" "}
            Schedule
          </a>
          <a
            className="text-[#dee5ff]/70 px-4 py-3 flex items-center gap-3 hover:bg-[#1f2b49]/30 hover:translate-x-1 transition-transform duration-200 cursor-pointer active:opacity-80"
            href="#"
          >
            <span className="material-symbols-outlined">meeting_room</span>{" "}
            Rooms
          </a>
          <a
            className="text-[#dee5ff]/70 px-4 py-3 flex items-center gap-3 hover:bg-[#1f2b49]/30 hover:translate-x-1 transition-transform duration-200 cursor-pointer active:opacity-80"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span> Settings
          </a>
        </nav>
        <div className="p-4">
          <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(129,236,255,0.2)] active:scale-95 transition-all">
            <span className="material-symbols-outlined">add</span> Add New Talk
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="md:ml-64 pt-24 pb-24 px-4 md:px-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="text-secondary font-label tracking-widest text-sm mb-4 block uppercase font-bold">
              Welcome Back, Dr. Aris
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface tracking-tighter leading-none neon-glow">
              Mis <span className="text-primary">Ponencias</span>
            </h1>
            <p className="mt-6 text-on-surface-variant max-w-xl text-lg leading-relaxed">
              Managing your sessions for the world's largest innovation
              festival. Ensure your materials are uploaded 2 hours prior to
              start time.
            </p>
          </div>
          {/* Summary Stats */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
              <span className="text-on-surface-variant text-xs block mb-2 uppercase tracking-wider">
                Total Talks
              </span>
              <span className="text-4xl font-headline font-bold text-primary">
                12
              </span>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
              <span className="text-on-surface-variant text-xs block mb-2 uppercase tracking-wider">
                Completed
              </span>
              <span className="text-4xl font-headline font-bold text-secondary">
                08
              </span>
            </div>
          </div>
        </section>

        {/* Festival Progress */}
        <div className="mb-12 bg-surface-container p-6 rounded-xl overflow-hidden relative border border-outline-variant/5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
              <span className="font-headline font-medium text-on-surface">
                Festival Progress
              </span>
            </div>
            <span className="text-sm font-label text-on-surface-variant">
              Day 3 of 5
            </span>
          </div>
          <div className="h-1 bg-surface-variant w-full rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-secondary w-[60%]"></div>
          </div>
        </div>

        {/* Bento Grid for Upcoming Talks */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Primary Card (Next Session) */}
          <div className="xl:col-span-2 glass-panel rounded-xl p-8 border border-primary/20 flex flex-col justify-between min-h-[320px] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <span className="bg-secondary/10 text-secondary border border-secondary/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>{" "}
                Live in 45m
              </span>
            </div>
            <div>
              <div className="flex items-center gap-3 text-primary mb-4">
                <span className="material-symbols-outlined">stadium</span>
                <span className="font-label font-medium uppercase tracking-widest text-sm">
                  Main Stage A
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-headline font-bold text-on-surface leading-tight mb-4">
                The Neural Interface: <br />
                Merging AI with Human Consciousness
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-8 mt-6 pt-6 border-t border-outline-variant/10">
              <div>
                <span className="text-on-surface-variant text-xs block uppercase mb-1">
                  Start Time
                </span>
                <span className="text-lg font-medium">14:00 PM</span>
              </div>
              <div>
                <span className="text-on-surface-variant text-xs block uppercase mb-1">
                  Duration
                </span>
                <span className="text-lg font-medium">50 Minutes</span>
              </div>
              <div>
                <span className="text-on-surface-variant text-xs block uppercase mb-1">
                  Estimated Audience
                </span>
                <span className="text-lg font-medium">2,500+</span>
              </div>
            </div>
          </div>

          {/* Upcoming Card */}
          <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-surface-bright p-3 rounded-lg">
                <span className="material-symbols-outlined text-primary">
                  psychology
                </span>
              </div>
              <span className="text-on-surface-variant text-sm font-label">
                16:30 PM
              </span>
            </div>
            <h4 className="text-xl font-headline font-bold mb-2">
              Ethics in the Age of Synthetic Content
            </h4>
            <p className="text-on-surface-variant text-sm mb-6 flex-grow">
              Interactive Workshop - Room 402
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-surface-variant px-3 py-1 rounded-full text-on-surface uppercase font-bold tracking-tighter">
                Upcoming
              </span>
              <button className="text-primary hover:underline font-label text-sm">
                Edit Details
              </button>
            </div>
          </div>

          {/* Completed Card */}
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex flex-col opacity-80 grayscale-[0.5]">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-surface-container-highest p-3 rounded-lg">
                <span className="material-symbols-outlined text-on-surface-variant">
                  check_circle
                </span>
              </div>
              <span className="text-on-surface-variant text-sm font-label">
                Yesterday
              </span>
            </div>
            <h4 className="text-xl font-headline font-bold mb-2 text-on-surface-variant">
              Quantum Computing Basics for Gen Z
            </h4>
            <p className="text-on-surface-variant/60 text-sm mb-6 flex-grow">
              Tech Zone - Arena 1
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-surface-container-highest px-3 py-1 rounded-full text-on-surface-variant uppercase font-bold tracking-tighter">
                Completed
              </span>
              <button className="text-tertiary-dim hover:underline font-label text-sm">
                View Feedback
              </button>
            </div>
          </div>

          {/* Empty Action Card */}
          <div className="bg-surface-container-lowest border-2 border-dashed border-outline-variant/20 rounded-xl p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary/40 transition-all">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-3xl text-outline-variant group-hover:text-primary">
                add_circle
              </span>
            </div>
            <p className="font-headline font-bold text-on-surface-variant mb-1 group-hover:text-on-surface">
              Propose New Session
            </p>
            <p className="text-xs text-on-surface-variant/60">
              Slots available for Day 5
            </p>
          </div>
        </section>

        {/* Speakers Map / Venue Quick View */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-surface-container-low rounded-xl overflow-hidden h-[300px] relative">
            <img
              alt="Abstract blue digital map of venue"
              className="w-full h-full object-cover mix-blend-luminosity opacity-40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFhb5xlUG6rezwrU48Zu7iHzVdSq6MaE89ADmfbGJAGdqgRGhIvzwQBn48NAOdU2AqhpBPK5g3V6tWfCy6qZceliEdqJUVMjLFXEOu9vFp7KM0SSp1C3ufA2nK1CcAHqNo9fuJRfeSof0QKhTYv8o3Y8-V4s_8W3GH7w4itby4fjWbjWkIkQ5rm1GIrzN6QN1GzD-cLU_PfWsyK628XKHF9xrBQP4bN0s6zH6AFkZ-DfO_XmT4ona5HBOgsm0gobUKc2aq3XXyIl4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent p-8 flex flex-col justify-end">
              <h5 className="text-xl font-headline font-bold">Venue Map</h5>
              <p className="text-on-surface-variant text-sm">
                Expo Guadalajara - Speaker Lounges &amp; Stages
              </p>
            </div>
          </div>
          <div className="bg-surface-container p-8 rounded-xl flex flex-col justify-center">
            <h5 className="text-lg font-headline font-bold mb-4">
              Speaker Resources
            </h5>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group cursor-pointer">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                  download
                </span>
                <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Speaker Guide PDF
                </span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                  support_agent
                </span>
                <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Request Technical Aid
                </span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                  hotel
                </span>
                <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Hotel &amp; Logistics
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* BottomNavBar - Mobile Only */}
      <footer className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-4 pb-safe bg-[#060e20]/80 backdrop-blur-2xl z-50 rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        <a
          className="flex flex-col items-center justify-center text-[#81ecff] bg-[#81ecff]/10 rounded-full px-4 py-1 active:scale-90 transition-transform duration-150"
          href="#"
        >
          <span className="material-symbols-outlined">mic</span>
          <span className="text-[10px] uppercase tracking-widest font-['Inter']">
            Talks
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-[#dee5ff]/50 hover:text-[#81ecff] active:scale-90 transition-transform duration-150"
          href="#"
        >
          <span className="material-symbols-outlined">event</span>
          <span className="text-[10px] uppercase tracking-widest font-['Inter']">
            Schedule
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-[#dee5ff]/50 hover:text-[#81ecff] active:scale-90 transition-transform duration-150"
          href="#"
        >
          <span className="material-symbols-outlined">notifications</span>
          <span className="text-[10px] uppercase tracking-widest font-['Inter']">
            Alerts
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-[#dee5ff]/50 hover:text-[#81ecff] active:scale-90 transition-transform duration-150"
          href="#"
        >
          <span className="material-symbols-outlined">person_outline</span>
          <span className="text-[10px] uppercase tracking-widest font-['Inter']">
            Profile
          </span>
        </a>
      </footer>
    </div>
  );
}
