import { useParams } from 'react-router-dom';
import ChatPanel from './ChatPanel';
import { cn } from '@/lib/utils';

interface AIModelChatProps {
  onShowHistory?: () => void;
  className?: string;
}

const AIModelChat = ({ onShowHistory, className }: AIModelChatProps) => {
  const { modelId } = useParams();

  return (
    <div>
      <ChatPanel
        className={cn('', className)}
        modelId={modelId}
        onShowHistory={onShowHistory}
      />
    </div>
  );
}

export default AIModelChat;