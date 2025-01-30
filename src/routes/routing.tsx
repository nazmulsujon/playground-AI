import AIModelChat from '@/pages/AIModelChat';
import Playground from '@/pages/Playground';
import Referrals from '@/pages/referrals';
import Settings from '@/pages/Settings';
import { Dispatch, SetStateAction } from 'react';
import { Routes, Route } from 'react-router-dom';

type RoutingProps = {
    setShowChatHistory: Dispatch<SetStateAction<boolean>>;
};

const Routing: React.FC<RoutingProps> = ({ setShowChatHistory }) => {
    return (
        <Routes>
            <Route path="/" element={<Playground onShowHistory={() => setShowChatHistory(true)} />} />
            <Route
                path="/model/:modelId"
                element={
                    <AIModelChat className='m-4 h-[calc(100vh-2rem)]' onShowHistory={() => setShowChatHistory(true)} />
                }
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="/referrals" element={<Referrals />} />
        </Routes>
    );
};

export default Routing;
