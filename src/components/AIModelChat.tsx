import { useParams } from 'react-router-dom';
import ChatPanel from './ChatPanel';
import { Button } from './ui/button';
import { History } from 'lucide-react';
import { getModelTitle } from '@/lib/getModelTitle';

interface AIModelChatProps {
  onShowHistory: () => void;
}

const AIModelChat = ({ onShowHistory }: AIModelChatProps) => {
  const { modelId } = useParams();

  return (
    <div className="h-screen p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{getModelTitle(modelId)}</h2>
        <Button variant="outline" onClick={onShowHistory}>
          <History className="h-4 w-4 mr-2" />
          Chat History
        </Button>
      </div>
      <ChatPanel title={getModelTitle(modelId)} className="h-[calc(100vh-6rem)]" />
    </div>
  );
}

export default AIModelChat;