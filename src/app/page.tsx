import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Music <span className="text-[hsl(280,100%,70%)]">Blocks</span> 4
        </h1>
        <p className="text-xl text-center max-w-2xl">
          A visual programming environment for music creation and exploration.
          Create, visualize and understand how music programs execute.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/workspace"
          >
            <h3 className="text-2xl font-bold">Enter Workspace →</h3>
            <div className="text-lg">
              Open the Music Blocks workspace to create and run music programs.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://github.com/sugarlabs/musicblocks" 
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Learn More →</h3>
            <div className="text-lg">
              Explore the Music Blocks project, documentation, and examples.
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
