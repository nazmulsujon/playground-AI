import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatHistory from './components/ChatHistory';
import Routing from './routes/routing';
import { Toaster } from 'react-hot-toast';
import { PanelLeftOpen } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showChatHistory, setShowChatHistory] = useState(false);
  const [showSheet, setShowSheet] = useState(false);

  const handleToggleSheet = () => {
    setShowSheet(!showSheet);
  };


  return (
    <div>
      <div className="flex h-screen bg-background">
        <Toaster />
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className='hidden md:block'
        />

        {showChatHistory && (
          <ChatHistory onClose={() => setShowChatHistory(false)} />
        )}

        <main className="flex-1 overflow-hidden">
          <Sheet open={showSheet} onOpenChange={handleToggleSheet}>
            <SheetTrigger className='md:hidden size-5 text-primary mx-4 mt-4 mb-0'>
              <PanelLeftOpen className='text-gray-500' />
            </SheetTrigger>
            <SheetContent side="left" className='p-0 py-2 w-fit'>
              <Sidebar
                isCollapsed={isSidebarCollapsed}
                onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                handleToggleSheet={handleToggleSheet}
                className='md:hidden'
              />
            </SheetContent>
          </Sheet>


          <Routing setShowChatHistory={setShowChatHistory} />
        </main>
      </div>
    </div>
  );
}

export default App;