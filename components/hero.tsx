"use client"
import { GlitchText } from "@/components/glitchtext"
import { NeonButton } from "@/components/neonbutton"
import { CyberGrid } from "@/components/cybergrid"
import { ProjectCard } from "@/components/projectcard"
import { SkillChip } from "@/components/skillchip"
import { TerminalWindow } from "@/components/terminalwindow"
import { GithubLogoIcon, MailboxIcon, LinkedinLogoIcon, TerminalIcon, CodeIcon, WhatsappLogoIcon, DatabaseIcon, ComputerTowerIcon, GlobeIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { cardsData } from "@/data/cards";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";

export function HeroSession() {

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CyberGrid />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-(--neon-cyan) opacity-10 blur-[100px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-(--neon-magenta) opacity-10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-(--neon-yellow) tracking-[0.3em] uppercase border border-(--neon-yellow) px-4 py-2 inline-block">
              &lt;DEVELOPER /&gt;
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <GlitchText
              text="Caio Y!"
              className="block mb-6 tracking-wider"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-(--neon-cyan) mb-8 max-w-2xl mx-auto tracking-wide"
          >
            <TerminalIcon className="inline w-5 h-5 mr-2" />
            Full-Stack Developer | Cybersecurity Noob | AI Integration | Network and Server
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <NeonButton variant="cyan" onClick={() => window.open('https://github.com/caioy0', '_blank')}>
              <GithubLogoIcon className="inline w-5 h-5 mr-2" />
              VIEW_PROJECTS
            </NeonButton>
            <NeonButton variant="magenta" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <MailboxIcon className="inline w-5 h-5 mr-2" />
              CONTACT_ME
            </NeonButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex gap-6 justify-center"
          >
            <a href="https://github.com/caioy0" target="_blank" rel="noopener noreferrer" className="text-(--neon-cyan) hover:text-(--neon-yellow) transition-colors">
              <GithubLogoIcon className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/caio-yugo/" className="text-(--neon-cyan) hover:text-(--neon-yellow) transition-colors">
              <LinkedinLogoIcon className="w-8 h-8" />
            </a>
            <a href="mailto:caio.yugo.coat095@passinbox.com" className="text-(--neon-cyan) hover:text-(--neon-yellow) transition-colors">
              <MailboxIcon className="w-8 h-8" />
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-(--neon-cyan) rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-3 bg-(--neon-cyan) rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16"
          >
            <h2 className="text-(--neon-magenta) tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <CodeIcon className="w-8 h-8" />
              SYSTEM.INFO
            </h2>
            <div className="h-1 w-32 bg-linear-to-r from-(--neon-magenta) to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <TerminalWindow title="whoami.exe">
              <div className="space-y-4">
                <p className="text-(--neon-green)">
                  <span className="text-(--neon-yellow)">$</span> cat about.txt
                </p>
                <p className="text-(--foreground)/90 leading-relaxed">
                  {cardsData[0].text}
                </p>
                <p className="text-(--neon-green)">
                  <span className="text-(--neon-yellow)">$</span> ls -la ./expertise/
                </p>
                <div className="pl-4 space-y-1 text-(--foreground)/80">
                  <p>→ Frontend Architecture & UI/UX</p>
                  <p>→ Backend Systems & APIs</p>
                  <p>→ Cloud Infrastructure & DevOps</p>
                  <p>→ AI/ML Integration</p>
                  <p>→ Blockchain & Web3</p>
                </div>
              </div>
            </TerminalWindow>

            <TerminalWindow title="stats.sys">
              <div className="space-y-6">
                {[
                  { label: "Code Quality", value: 95, color: "var(--neon-cyan)" },
                  { label: "Problem Solving", value: 98, color: "var(--neon-magenta)" },
                  { label: "Innovation", value: 92, color: "var(--neon-yellow)" },
                  { label: "Team Collaboration", value: 88, color: "var(--neon-green)" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-(--neon-green)">{stat.label}</span>
                      <span className="text-(--neon-yellow)">{stat.value}%</span>
                    </div>
                    <div className="h-2 bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full"
                        style={{
                          backgroundColor: stat.color,
                          boxShadow: `0 0 10px ${stat.color}`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TerminalWindow>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-32 px-6 bg-linear-to-b from-transparent via-(--neon-cyan)/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16"
          >
            <h2 className="text-(--neon-cyan) tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <WhatsappLogoIcon className="w-8 h-8" />
              PROJECTS.ARCHIVE
            </h2>
            <div className="h-1 w-32 bg-linear-to-r from-(--neon-cyan) to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16"
          >
            <h2 className="text-(--neon-yellow) tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <DatabaseIcon className="w-8 h-8" />
              TECH.STACK
            </h2>
            <div className="h-1 w-32 bg-linear-to-r from-(--neon-yellow) to-transparent" />
          </motion.div>

          <div className="flex flex-wrap gap-4 justify-center">
            {skillsData.map((skill, i) => (
              <SkillChip key={i} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 bg-linear-to-t from-(--neon-magenta)/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16 text-center"
          >
            <h2 className="text-(--neon-green) tracking-[0.2em] uppercase mb-4 flex items-center gap-3 justify-center">
              <ComputerTowerIcon className="w-8 h-8" />
              CONNECT.PROTOCOL
            </h2>
            <div className="h-1 w-32 bg-linear-to-r from-(--neon-green) to-transparent mx-auto" />
          </motion.div>

          <TerminalWindow title="contact.sh">
            <div className="space-y-6">
              <p className="text-(--neon-green)">
                <span className="text-(--neon-yellow)">$</span> ./initiate_connection.sh
              </p>
              <p className="text-(--foreground)/90 leading-relaxed">
                Ready to collaborate on your next project? Lets build something amazing together.
                Reach out through any of the following channels:
              </p>

              <div className="space-y-4 pl-4">
                <motion.a
                  whileHover={{ x: 10 }}
                  href="https://github.com/caioy0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-(--neon-cyan) hover:text-(--neon-yellow) transition-colors"
                >
                  <GithubLogoIcon className="w-6 h-6" />
                  <span>github.com/caioy0</span>
                </motion.a>

                <motion.a
                  whileHover={{ x: 10 }}
                  href="mailto:caio.yugo.coat095@passinbox.com"
                  className="flex items-center gap-3 text-(--neon-cyan) hover:text-(--neon-yellow) transition-colors"
                >
                  <MailboxIcon className="w-6 h-6" />
                  <span>caio.yugo.coat095@passinbox.com</span>
                </motion.a>

                <motion.a
                  whileHover={{ x: 10 }}
                  href="linkedin.com/in/caio-yugo"
                  className="flex items-center gap-3 text-(--neon-cyan) hover:text-(--neon-yellow) transition-colors"
                >
                  <LinkedinLogoIcon className="w-6 h-6" />
                  <span>linkedin.com/in/caio-yugo</span>
                </motion.a>

                <motion.a
                  whileHover={{ x: 10 }}
                  href="caio-yugo.vercel.app"
                  className="flex items-center gap-3 text-(--neon-cyan) hover:text-(--neon-yellow) transition-colors"
                >
                  <GlobeIcon className="w-6 h-6" />
                  <span>caio-yugo.vercel.app</span>
                </motion.a>
              </div>

              <p className="text-(--neon-green) pt-4">
                <span className="text-(--neon-yellow)">$</span> status: online
                <span className="inline-block w-2 h-2 bg-(--neon-green) rounded-full ml-2 animate-pulse" />
              </p>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t-2 border-(--neon-cyan) py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-(--foreground)/60 tracking-wider">
            <span className="text-(--neon-yellow)">&copy;</span> 2026 CAIO_YOSHIDA.DEV
            <span className="mx-4 text-(--neon-cyan)">|</span>
            DESIGNED IN <span className="text-(--neon-magenta)">NIGHT_CITY</span>
          </p>
        </div>
      </footer>

      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-5">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-(--neon-cyan) to-transparent animate-pulse"
             style={{ backgroundSize: '100% 4px' }} />
      </div>
    </div>
  );
}