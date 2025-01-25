import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { History, X } from "lucide-react";

interface ChatPanelProps {
  title: string;
  className?: string;
}

const ChatPanel = ({ title, className }: ChatPanelProps) => {
  return (
    <Card className={`flex flex-col h-full bg-white ${className}`}>
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-900">{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
            <History className="h-4 w-4 text-gray-500" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
            <X className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Chat messages would go here */}
      </div>

      <div className="p-3 border-t bg-gray-50">
        <div className="flex gap-2">
          <Input
            placeholder="Write here..."
            className="flex-1 bg-white border-gray-200 focus-visible:ring-gray-300"
          />
          <Button
            size="default"
            className="bg-gray-900 hover:bg-gray-800 text-white px-4"
          >
            Prompt
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default ChatPanel;