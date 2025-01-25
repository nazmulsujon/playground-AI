import { useParams } from 'react-router-dom';
import ChatPanel from './ChatPanel';
import { Button } from './ui/button';
import { History } from 'lucide-react';

interface AIModelChatProps {
  onShowHistory: () => void;
}

const AIModelChat = ({ onShowHistory }: AIModelChatProps) => {
  const { modelId } = useParams();

  const getModelTitle = () => {
    switch (modelId) {
      case 'chatgpt-4o':
        return 'ChatGPT-4o';
      case 'gemini':
        return 'Gemini 1.5 Pro';
      case 'claude':
        return 'Claude 3.5';
      case 'llama':
        return 'Llama';
      default:
        return 'AI Chat';
    }
  };

  return (
    <div className="h-screen p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{getModelTitle()}</h2>
        <Button variant="outline" onClick={onShowHistory}>
          <History className="h-4 w-4 mr-2" />
          Chat History
        </Button>
      </div>
      <ChatPanel title={getModelTitle()} className="h-[calc(100vh-8rem)]" />
    </div>
  );
}

export default AIModelChat;