import { useState } from 'react';
import { Button } from "@/components/ui/button";
import ChatPanel from './ChatPanel';

const Playground = () => {
  const [panelCount, setPanelCount] = useState(4);
  
  const getPanelLayout = () => {
    switch (panelCount) {
      case 2:
        return 'grid-cols-2';
      case 3:
        return 'grid-cols-3';
      case 4:
        return 'grid-cols-2';
      case 6:
        return 'grid-cols-3';
      default:
        return 'grid-cols-2';
    }
  };

  return (
    <div className="h-screen flex flex-col p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <Button
            variant={panelCount === 2 ? "default" : "outline"}
            onClick={() => setPanelCount(2)}
          >
            2 Panels
          </Button>
          <Button
            variant={panelCount === 3 ? "default" : "outline"}
            onClick={() => setPanelCount(3)}
          >
            3 Panels
          </Button>
          <Button
            variant={panelCount === 4 ? "default" : "outline"}
            onClick={() => setPanelCount(4)}
          >
            4 Panels
          </Button>
          <Button
            variant={panelCount === 6 ? "default" : "outline"}
            onClick={() => setPanelCount(6)}
          >
            6 Panels
          </Button>
        </div>
        <Button>Prompts</Button>
      </div>

      <div className={`grid ${getPanelLayout()} gap-4 flex-1`}>
        {Array.from({ length: panelCount }).map((_, idx) => (
          <ChatPanel
            key={idx}
            title={`Chat ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Playground;