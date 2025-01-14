import { Button } from "@/components/ui/button";

export function LoginCard() {
  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-black/40 backdrop-blur-sm rounded-lg text-white">
      <div className="flex flex-col items-center space-y-4">
        <img 
          src="/lovable-uploads/133aaa01-14db-4f50-8526-e8a5413bbb4c.png" 
          alt="Logo" 
          className="h-12 mb-4"
        />
        <h1 className="text-2xl font-semibold font-poppins">Welcome to Forescribe</h1>
      </div>

      <div className="space-y-4">
        <Button 
          className="w-full bg-[#9b87f5] hover:bg-[#8b7ae0] text-white flex items-center justify-center gap-2 h-12 font-poppins"
          variant="default"
        >
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            className="w-6 h-6 brightness-0 invert" 
            alt="Google" 
          />
          Continue with Google
        </Button>

        <Button 
          className="w-full bg-[#2F2F2F] hover:bg-[#1F1F1F] text-white flex items-center justify-center gap-2 h-12 font-poppins"
          variant="default"
        >
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg" 
            className="w-6 h-6 brightness-0 invert" 
            alt="Microsoft" 
          />
          Continue with Microsoft
        </Button>
      </div>

      <div className="text-sm text-center text-gray-300 font-poppins">
        <p>
          By clicking "Continue with Google/Microsoft" above, you acknowledge that you have read and understood, and agree to Forescribe's{" "}
          <a href="#" className="text-purple-400 hover:text-purple-300">Terms & Conditions</a>
          {" "}and{" "}
          <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}