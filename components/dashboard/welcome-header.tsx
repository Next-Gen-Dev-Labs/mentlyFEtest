import { Button } from "@/components/ui/button";

interface WelcomeHeaderProps {
  name: string;
}

export default function WelcomeHeader({ name }: WelcomeHeaderProps) {
  return (
    <div className="bg-[#2E0D4F] text-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          Welcome Aboard, {name} <span className="text-2xl">👋</span>
        </h1>
        <p className="text-purple-200 mt-1">We're thrilled to have you join Techrity Team!</p>
      </div>
      <Button
        variant="outline"
        className="bg-white text-[#2E0D4F] hover:bg-gray-100 border-none"
      >
        Update Profile
      </Button>
    </div>
  );
}