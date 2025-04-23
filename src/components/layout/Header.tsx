
import React from 'react';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

type HeaderProps = {
  username: string;
  userRole: string;
}

const Header: React.FC<HeaderProps> = ({ username, userRole }) => {
  return (
    <header className="flex justify-between items-center p-4">
      <div></div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
        
        <div className="flex items-center gap-3 bg-white rounded-full p-1 pl-3 shadow-sm">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium">{username}</span>
            <span className="text-xs text-muted-foreground">{userRole}</span>
          </div>
          
          <Avatar className="h-8 w-8 border-2 border-techrity-purple">
            <AvatarImage src="/lovable-uploads/53cfce98-e4aa-46ca-b5f3-2b8b7983b99d.png" />
            <AvatarFallback>{username[0]}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
