import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ChevronsUpDown, EllipsisVertical, Eraser, History, Bot, Brain, CloudLightning, Fish, Globe, Infinity, Sparkles, Wind, ChevronUp } from "lucide-react";
import ChatInput from "./ChatInput";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import { Fragment, useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLocation } from "react-router-dom";


interface ChatPanelProps {
  className?: string;
  modelId?: string;
  onShowHistory?: () => void;
}

const models = [
  {
    label: 'ChatGPT-4o',
    icon: Bot,
    href: '/model/chatgpt-4o',
    value: 'chatgpt-4o',
  },
  {
    label: 'Gemini 1.5 Pro',
    icon: Sparkles,
    href: '/model/gemini',
    value: 'gemini',
  },
  {
    label: 'Claude 3.5',
    icon: Brain,
    href: '/model/claude',
    value: 'claude',
  },
  {
    label: 'Llama',
    icon: Infinity,
    href: '/model/llama',
    value: 'llama',
  },
  {
    label: 'DeepSeek',
    icon: Fish,
    href: '/model/deepseek',
    value: 'deepseek',
  },
  {
    label: 'Mistral',
    icon: Wind,
    href: '/model/mistral',
    value: 'mistral',
  },
  {
    label: 'Groq',
    icon: CloudLightning,
    href: '/model/groq',
    value: 'groq',
  },
  {
    label: 'Cohere',
    icon: Globe,
    href: '/model/cohere',
    value: 'cohere',
  }
];

const ChatPanel = ({ className, modelId, onShowHistory }: ChatPanelProps) => {
  const location = useLocation();
  const [isChatInputVisible, setIsChatInputVisible] = useState(false);
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(modelId)

  useEffect(() => {
    setValue(modelId)
  }, [modelId])

  return (
    <Card
      className={cn(
        "flex flex-col h-full bg-white rounded-md relative group",
        className
      )}>
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <div className="flex items-center gap-2">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" aria-expanded={open} className="w-[180px] justify-between">
                {value ? models.find((model) => model.value === value)?.label : "Select model..."}
                <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search model..." />
                <CommandList>
                  <CommandEmpty>No model found.</CommandEmpty>
                  <CommandGroup>
                    {models.map((model) => (
                      <CommandItem
                        key={model.value}
                        value={model.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue)
                          setOpen(false)
                        }}
                      >
                        <Check className={cn("mr-2 size-4", value === model.value ? "opacity-100" : "opacity-0")} />
                        {model.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {
          location.pathname === "/" ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline">
                  <EllipsisVertical className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={onShowHistory}>
                  <History className="size-4 text-gray-500 mr-2" /> Chat History
                </DropdownMenuItem>
                <DropdownMenuItem >
                  <Eraser className="size-4 text-gray-500 mr-2" /> Clear Chat
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" onClick={onShowHistory}>
                <History className="size-4 text-gray-500 mr-2" /> Chat History
              </Button>
              <Button size="sm" variant="outline">
                <Eraser className="size-4 text-gray-500 mr-2" /> Clear Chat
              </Button>
            </div>
          )
        }

      </div>

      <ScrollArea
        className={cn("p-4 flex-1", className)}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptatibus corporis delectus assumenda unde ex soluta provident expedita, ducimus ad distinctio, accusamus sunt tenetur ullam iste eos, facilis suscipit officiis laborum dolorem beatae adipisci laboriosam excepturi
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptatibus corporis delectus assumenda unde ex soluta provident expedita, ducimus ad distinctio, accusamus sunt tenetur ullam iste eos, facilis suscipit officiis laborum dolorem beatae adipisci laboriosam excepturi
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptatibus corporis delectus assumenda unde ex soluta provident expedita, ducimus ad distinctio, accusamus sunt tenetur ullam iste eos, facilis suscipit officiis laborum dolorem beatae adipisci laboriosam excepturi
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptatibus corporis delectus assumenda unde ex soluta provident expedita, ducimus ad distinctio, accusamus sunt tenetur ullam iste eos, facilis suscipit officiis laborum dolorem beatae adipisci laboriosam excepturi
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptatibus corporis delectus assumenda unde ex soluta provident expedita, ducimus ad distinctio, accusamus sunt tenetur ullam iste eos, facilis suscipit officiis laborum dolorem beatae adipisci laboriosam excepturi
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptatibus corporis delectus assumenda unde ex soluta provident expedita, ducimus ad distinctio, accusamus sunt tenetur ullam iste eos, facilis suscipit officiis laborum dolorem beatae adipisci laboriosam excepturi
      </ScrollArea>

      <div
        className={cn("text-center", location.pathname === "/" && !isChatInputVisible && "-mb-[5px]")}
      >
        {location.pathname === "/" ? (
          <Fragment>
            <Button
              id="toggle-chat-input"
              className="px-6 h-5 mt-0 rounded-t-lg rounded-b-none border border-b-0 transition-opacity opacity-0 group-hover:opacity-100"
              variant="ghost"
              onClick={() => setIsChatInputVisible((prev) => !prev)}
            >
              <ChevronUp className={cn("size-4 text-gray-500 transition-transform", isChatInputVisible && "rotate-180")}
              />
            </Button>

            {isChatInputVisible && (
              <ChatInput
                className="rounded-t-none border-b-0 border-t -mt-1.5"
                onSend={(message) => console.log("Message:", message)}
                onImageUpload={(file) => console.log("Image:", file)}
                onFileUpload={(file) => console.log("File:", file)}
              />
            )}
          </Fragment>
        ) : (
          <ChatInput
            className="rounded-t-none border-b-0 border-t"
            onSend={(message) => console.log("Message:", message)}
            onImageUpload={(file) => console.log("Image:", file)}
            onFileUpload={(file) => console.log("File:", file)}
          />
        )}
      </div>

    </Card>
  );
}

export default ChatPanel;