"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Camera, FileUp, SendHorizontal } from "lucide-react"
import { type ChangeEvent, useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ChatInputProps {
    onSend?: (message: string) => void
    onImageUpload?: (file: File) => void
    onFileUpload?: (file: File) => void
}

export default function ChatInput({ onSend, onImageUpload, onFileUpload }: ChatInputProps) {
    const [message, setMessage] = useState("")

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
        }
    }

    return (
        <div className="flex items-center gap-2 w-full">
            <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <label htmlFor="image-upload" className="cursor-pointer">
                                    <Camera className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                </label>
                            </TooltipTrigger>
                            <TooltipContent className="w-fit text-sm text-gray-600 bg-background">
                                Image input
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <label htmlFor="file-upload" className="cursor-pointer">
                                    <FileUp className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                </label>
                            </TooltipTrigger>
                            <TooltipContent className="w-80 lg:w-fit text-sm text-gray-600 bg-background">
                                Upload files up to 10MB in pdf, doc, docx, txt, xlsx, xls, or csv format.
                                <br />
                                Files will be deleted 3 days after upload.
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <input
                        id="file-upload"
                        type="file"
                        accept=".pdf,.doc,.docx,.txt,.xlsx,.xls,.csv"
                        className="hidden"
                        onChange={handleFileUpload}
                    />
                </div>

                <Button
                    variant="ghost"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent p-0"
                    onClick={handleSend}
                >
                    <SendHorizontal className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </Button>

                <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write Here"
                    className="pl-20 pr-11 py-6 border-gray-200 bg-white rounded-lg focus-visible:ring-gray-300"
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSend()
                        }
                    }}
                />
            </div>
            <Button variant="default" className="bg-black hover:bg-black/90 text-white rounded-lg px-6">
                Prompts
            </Button>
        </div>
    )
}
