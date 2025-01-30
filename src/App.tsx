import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatHistory from './components/ChatHistory';
import Routing from './routes/routing';
import { Toaster } from 'react-hot-toast';


function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showChatHistory, setShowChatHistory] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      <Toaster/>
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {showChatHistory && (
        <ChatHistory onClose={() => setShowChatHistory(false)} />
      )}

      <main className="flex-1 overflow-hidden">
        <Routing setShowChatHistory={setShowChatHistory} />
      </main>
    </div>
  );
}

export default App;