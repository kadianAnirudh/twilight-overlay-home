import { Button } from "@/components/ui/button";

export function LoginCard() {
  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-black/20 backdrop-blur-sm rounded-lg text-white">
      <div className="flex flex-col items-center space-y-4">
        <img 
          src="/lovable-uploads/ba2b780b-a44b-4710-a958-4a2b0a0835cc.png" 
          alt="Logo" 
          className="h-12 mb-4"
        />
        <h1 className="text-2xl font-semibold">Welcome to Forescribe</h1>
      </div>

      <div className="space-y-4">
        <Button 
          className="w-full bg-[#4285F4] hover:bg-[#357ABD] text-white flex items-center justify-center gap-2 h-12"
          variant="default"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-6 h-6" alt="Google" />
          Continue with Google
        </Button>

        <Button 
          className="w-full bg-[#2F2F2F] hover:bg-[#1F1F1F] text-white flex items-center justify-center gap-2 h-12"
          variant="default"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg" className="w-6 h-6" alt="Microsoft" />
          Continue with Microsoft
        </Button>
      </div>

      <div className="text-sm text-center text-gray-300">
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