import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { getPanelLayout } from '@/lib/getPanelLayout';
import ChatInput from '../components/ChatInput';
import { Columns2, Columns3, Grid2X2, Table } from 'lucide-react';
import { cn } from '@/lib/utils';
import AIModelChat from './AIModelChat';

interface PlaygroundProps {
  className?: string;
  modelId?: string;
  onShowHistory?: () => void;
}

const Playground = ({ onShowHistory }: PlaygroundProps) => {
  const [panelCount, setPanelCount] = useState(2);

  return (
    <div className="h-screen flex flex-col p-4 overflow-y-auto">
      <div className={`lg:grid ${getPanelLayout(panelCount)} gap-4 flex-1`}>
        {Array.from({ length: panelCount }).map((_, idx) => (
          <AIModelChat
            onShowHistory={onShowHistory}
            className={cn(panelCount === 4 || panelCount === 6 ? 'h-72' : 'h-[calc(100vh-6rem)]')}
            key={idx}
          />
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 space-x-4">
        <ChatInput
          onSend={(message) => console.log("Message:", message)}
          onImageUpload={(file) => console.log("Image:", file)}
          onFileUpload={(file) => console.log("File:", file)}
        />
        <div className="flex space-x-2">
          <Button
            size="icon"
            variant={panelCount === 2 ? "ghost" : "outline"}
            onClick={() => setPanelCount(2)}
          >
            <Columns2 className={cn('size-5 text-gray-400', panelCount === 2 && "text-black")} />
          </Button>
          <Button
            size="icon"
            variant={panelCount === 3 ? "ghost" : "outline"}
            onClick={() => setPanelCount(3)}
          >
            <Columns3
              className={cn('size-5 text-gray-400', panelCount === 3 && "text-black")}
            />
          </Button>
          <Button
            size="icon"
            variant={panelCount === 4 ? "ghost" : "outline"}
            onClick={() => setPanelCount(4)}
          >
            <Grid2X2 className={cn('size-5 text-gray-400', panelCount === 4 && "text-black")} />
          </Button>
          <Button
            size="icon"
            variant={panelCount === 6 ? "ghost" : "outline"}
            onClick={() => setPanelCount(6)}
          >
            <Table className={cn('size-5 transform rotate-90 text-gray-400', panelCount === 6 && "text-black")} />
          </Button>
        </div>
      </div>

    </div>
  );
}

export default Playground;