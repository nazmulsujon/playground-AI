import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Bot,
  Sparkles,
  Brain,
  Infinity,
  Plus,
  HeadphonesIcon,
  Users,
  Share2,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ScrollArea } from './ui/scroll-area';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const menuItems = [
  {
    title: 'Primary',
    items: [
      {
        label: 'PlayGround',
        icon: LayoutGrid,
        href: '/playground'
      }
    ]
  },
  {
    title: 'AI Models',
    items: [
      {
        label: 'ChatGPT-4o',
        icon: Bot,
        href: '/model/chatgpt-4o'
      },
      {
        label: 'Gemini 1.5 Pro',
        icon: Sparkles,
        href: '/model/gemini'
      },
      {
        label: 'Claude 3.5',
        icon: Brain,
        href: '/model/claude'
      },
      {
        label: 'Llama',
        icon: Infinity,
        href: '/model/llama'
      }
    ]
  }
];

const bottomItems = [
  { label: 'Support', icon: HeadphonesIcon },
  { label: 'Referrals', icon: Users },
  { label: 'Affiliate Program', icon: Share2 },
  { label: 'Settings', icon: Settings }
];

const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const location = useLocation();

  return (
    <div
      className={cn(
        'relative flex flex-col border-r bg-card transition-all duration-300',
        isCollapsed ? 'w-[60px]' : 'w-[240px]'
      )}
    >
      <div className="flex-1">
        {menuItems.map((section, idx) => (
          <div key={idx} className="px-3 py-2">
            {!isCollapsed && (
              <h3 className="mb-2 px-2 text-sm font-semibold text-muted-foreground">
                {section.title}
              </h3>
            )}


            <div className="space-y-1">
              {section.items.map((item, itemIdx) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={itemIdx}
                    to={item.href}
                    className={cn(
                      'flex items-center rounded-lg px-2 py-2',
                      'hover:bg-accent hover:text-accent-foreground',
                      isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground',
                      isCollapsed && 'justify-center'
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {!isCollapsed && (
                      <span className="ml-2">{item.label}</span>
                    )}
                  </Link>
                );
              })}
            </div>

          </div>
        ))}

        <button
          className="w-full px-3 py-2 mt-2"
        >
          <div className="flex items-center rounded-lg bg-black text-white px-2 py-2">
            <Plus className="h-5 w-5" />
            {!isCollapsed && (
              <span className="ml-2">Add More Modules</span>
            )}
          </div>
        </button>

        <div className="px-3 py-2 mt-2">
          <div className="flex items-center rounded-lg bg-accent/50 px-2 py-2 border border-black/90">
            <div className="flex items-center space-x-2">
              {!isCollapsed && (
                <>
                  <span>Monthly Usage:</span>
                  <span className="font-semibold">10/50</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t p-3">
        <div className="space-y-1">
          {bottomItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                className="flex w-full items-center rounded-lg px-2 py-2 hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2">{item.label}</span>}
              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={onToggle}
        className="absolute top-1/2 -right-3 flex h-6 w-6 items-center justify-center rounded-full border bg-background shadow-md"
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

export default Sidebar;