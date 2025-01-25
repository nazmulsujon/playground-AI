import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, X } from "lucide-react";

interface ChatPanelProps {
  title: string;
  className?: string;
}

const ChatPanel = ({ title, className }: ChatPanelProps) => {
  return (
    <Card className={`flex flex-col h-full ${className}`}>
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {/* Chat messages would go here */}
      </div>

      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input placeholder="Write a message..." className="flex-1" />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ChatPanel;