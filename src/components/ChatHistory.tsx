import { X } from 'lucide-react';

interface ChatHistoryProps {
  onClose: () => void;
}

const ChatHistory = ({ onClose }: ChatHistoryProps) => {
  return (
    <div className="w-64 border-r bg-card">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="font-semibold">Chat History</h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-accent rounded-lg"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">
        {/* Chat history items would go here */}
        <div className="text-sm text-muted-foreground">No chat history yet</div>
      </div>
    </div>
  );
}

export default ChatHistory;