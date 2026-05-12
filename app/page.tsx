import Header from "@/components/header";
import { CyberGrid } from "@/components/cybergrid";
import { GlitchText } from "@/components/glitchtext";
import { SkillChip } from "@/components/skillchip";

import { skills } from "@/data/skills";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <Header />
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <CyberGrid />
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <GlitchText className="" text="caioy0!" />
                </div>
                <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                    {skills.skills.map((item) => (
                        <SkillChip
                            key={item.index}
                            skill={item.skill}
                            index={item.index}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
