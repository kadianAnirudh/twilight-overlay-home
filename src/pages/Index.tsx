import { ThemeToggle } from "@/components/ThemeToggle";
import { LoginCard } from "@/components/LoginCard";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-image">
      <div className="absolute inset-0 gradient-overlay"></div>
      
      <nav className="relative z-10 flex justify-end p-4">
        <ThemeToggle />
      </nav>

      <main className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
        <LoginCard />
      </main>
    </div>
  );
};

export default Index;