import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ScrollArea } from './ui/scroll-area';
import { sidebarBottomItems, sidebarMenuItems } from '@/lib/data';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();


  return (
    <div
      className={cn(
        'hidden relative md:flex flex-col border-r bg-card transition-all duration-300',
        isCollapsed ? 'w-[60px]' : 'w-[240px]'
      )}
    >
      <div className="px-3 py-2">
        <Link to="/" className='flex items-center space-x-1 text-black hover:text-black/80'>
          <img className='size-8' src="/logo.png" alt="logo" />
          {!isCollapsed && <span className='text-lg font-bold'>Playground.ai</span>}

        </Link>
      </div>

      <div className="flex-1 h-[60%]">
        <ScrollArea className="h-5/6 w-full">
          {sidebarMenuItems.map((section, idx) => (
            <div key={idx} className="px-3 py-2">
              {!isCollapsed && (
                <h3 className="mb-2 px-2 text-sm font-bold text-black hover:text-black/80">
                  {section.title}
                </h3>
              )}


              {section.title === "AI Models" ? (
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
                          <span className="ml-2 text-sm">{item.label}</span>
                        )}
                      </Link>
                    );
                  })}

                  <button
                    className="w-full py-2 mt-2 bg-transparent"
                    onClick={() => navigate("/settings")}
                  >
                    <div className="flex items-center rounded-lg bg-black text-white px-2 py-2 text-sm font-medium">
                      <Plus className="h-5 w-5" />
                      {!isCollapsed && (
                        <span className="ml-2">Add More Modules</span>
                      )}
                    </div>
                  </button>
                </div>

              ) : (
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
                          <span className="ml-2 text-sm">{item.label}</span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}

            </div>
          ))}
        </ScrollArea>

        {!isCollapsed && (
          <div className="px-3 py-2 mt-2">
            <div className="flex items-center rounded-lg bg-accent/50 px-2 py-2 border border-black/90">
              <div className="flex items-center space-x-2 text-sm font-medium">

                <>
                  <span>Monthly Usage:</span>
                  <span className="font-semibold">10/50</span>
                </>

              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t p-3 h-[30%]">
        <div className="space-y-1.5">
          {sidebarBottomItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                to={item.href}
                key={idx}
                className="flex w-full items-center rounded-lg px-2 py-2 bg-gray-100 hover:bg-accent hover:text-accent-foreground text-black/80 text-sm font-medium"
              >
                <Icon className="h-5 w-5" />
                {!isCollapsed && <span className="ml-2">{item.label}</span>}
              </Link>
            );
          })}
        </div>
      </div>

      <button
        onClick={onToggle}
        className="absolute top-1/2 -right-3 flex h-6 w-6 items-center justify-center rounded-full border bg-background shadow-md"
      >
        {isCollapsed ? (
          <ChevronRight className="size-4" />
        ) : (
          <ChevronLeft className="size-4" />
        )}
      </button>
    </div>
  );
}

export default Sidebar;