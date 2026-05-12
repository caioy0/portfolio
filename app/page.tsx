import Header from "@/components/header"
import { CyberGrid } from "@/components/cybergrid"
import { HeroSession } from "@/components/hero"

export default function Home() {
  return (
      <main
          // className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black"
      >
          <CyberGrid />
          <Header />
          <HeroSession />
        </main>
    );
}
