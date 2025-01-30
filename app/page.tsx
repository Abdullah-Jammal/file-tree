import { FileTreeDemo } from "@/components/FileTree";
import { ModeToggle } from "@/components/MoodToggle";

export default function Home() {
  return (
    <main className="container mx-auto">
      <ModeToggle />
      <h1 className="dark:text-primary text-red-500">WELCOME FILE TTREE</h1>
      <FileTreeDemo/>
    </main>
  );
}
