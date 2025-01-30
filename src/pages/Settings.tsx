"use client"

import Account from "@/components/Accounts"
import AIModels from "@/components/AIModels"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Settings() {
    return (
        <div>
            <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4 text-lg font-semibold">
                Account Settings
            </header>
            <div className="w-full h-[calc(100vh-4rem)] p-4 overflow-y-auto" >
                <Tabs defaultValue="ai-models" className="w-full">
                    <TabsList className="grid w-full lg:w-[31.25rem] grid-cols-2">
                        <TabsTrigger value="ai-models">
                            AI Models
                        </TabsTrigger>
                        <TabsTrigger value="account">
                            Account
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="ai-models" className="mt-6">
                        <AIModels />
                    </TabsContent>

                    <TabsContent value="account" className="mt-6">
                        <Account />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

