import AIModelChat from '@/components/AIModelChat';
import Playground from '@/components/Playground';
import { Dispatch, SetStateAction } from 'react';
import { Routes, Route } from 'react-router-dom';

type RoutingProps = {
    setShowChatHistory: Dispatch<SetStateAction<boolean>>;
};

const Routing: React.FC<RoutingProps> = ({ setShowChatHistory }) => {
    return (
        <Routes>
            <Route path="/" element={<Playground />} />
            <Route path="/playground" element={<Playground />} />
            <Route
                path="/model/:modelId"
                element={
                    <AIModelChat onShowHistory={() => setShowChatHistory(true)} />
                }
            />
        </Routes>
    );
};

export default Routing;
