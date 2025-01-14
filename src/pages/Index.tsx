import { ThemeToggle } from "@/components/ThemeToggle";
import { LoginCard } from "@/components/LoginCard";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-image font-poppins">
      <div className="absolute inset-0 gradient-overlay"></div>
      
      <div className="relative z-10 flex justify-between items-center p-4">
        <img 
          src="/lovable-uploads/8da0b256-5650-4c5e-bf53-d408be9431e3.png"
          alt="Logo"
          className="h-8"
        />
        <ThemeToggle />
      </div>

      <main className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
        <LoginCard />
      </main>
    </div>
  );
};

export default Index;