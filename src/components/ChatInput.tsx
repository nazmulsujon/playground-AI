"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ImagePlus, Paperclip, SendHorizontal } from "lucide-react"
import { type ChangeEvent, useState, useRef } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface ChatInputProps {
    onSend?: (message: string) => void
    onImageUpload?: (file: File) => void
    onFileUpload?: (file: File) => void
    className?: string
}

export default function ChatInput({ onSend, onImageUpload, onFileUpload, className }: ChatInputProps) {
    const [message, setMessage] = useState("")
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file && onImageUpload) {
            onImageUpload(file)
        }
    }

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file && onFileUpload) {
            onFileUpload(file)
        }
    }

    const handleSend = () => {
        if (message.trim() && onSend) {
            onSend(message)
            setMessage("")

            if (textareaRef.current) {
                textareaRef.current.style.height = "48px"
            }
        }
    }

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
        if (textareaRef.current) {
            textareaRef.current.style.height = "48px"
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 300)}px`
        }
    }

    return (
        <div className="flex items-center gap-2 w-full">
            <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 space-x-0.5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <label htmlFor="image-upload" className="cursor-pointer">
                                    <ImagePlus className="size-5 text-gray-400 hover:text-gray-600" />
                                </label>
                            </TooltipTrigger>
                            <TooltipContent className="w-fit text-sm text-gray-600 bg-background">
                                Image input
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <Input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                    />

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <label htmlFor="file-upload" className="cursor-pointer">
                                    <Paperclip className="size-5 text-gray-400 hover:text-gray-600" />
                                </label>
                            </TooltipTrigger>
                            <TooltipContent className="w-80 lg:w-fit text-sm text-gray-600 bg-background">
                                Upload files up to 10MB in pdf, doc, docx, txt, xlsx, xls, or csv format.
                                <br />
                                Files will be deleted 3 days after upload.
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <Input
                        id="file-upload"
                        type="file"
                        accept=".pdf,.doc,.docx,.txt,.xlsx,.xls,.csv"
                        className="hidden"
                        onChange={handleFileUpload}
                    />
                </div>

                <Button
                    variant="ghost"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent p-0"
                    onClick={handleSend}
                >
                    <SendHorizontal className="size-5 text-gray-400 hover:text-gray-600" />
                </Button>

                <Textarea
                    ref={textareaRef}
                    value={message}
                    onChange={handleTextareaChange}
                    placeholder="Use Shift+Enter to add new line"
                    className={cn("pl-20 pr-11 py-2 border border-gray-200 bg-white rounded-md focus-visible:ring-gray-300 resize-none w-full h-[48px] min-h-[48px] max-h-[300px] overflow-y-auto leading-[1.78rem] placeholder:leading-[1.78rem]", className)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSend()
                        }
                    }}
                    style={{
                        scrollbarWidth: "thin",
                    }}
                />
            </div>
        </div>
    )
}
