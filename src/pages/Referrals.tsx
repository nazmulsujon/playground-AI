import { Copy } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import toast from 'react-hot-toast';

export default function Referrals() {
    const [email, setEmail] = useState("")
    const referralLink = "https://www.chatplayground.ai/?referralCode=cm68pt2m0003y4c9kmg"
    const referralCredits = 0

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink)
        toast.success("Copied to clipboard")
    }

    const handleSendInvite = (e: React.FormEvent) => {
        e.preventDefault()
        setEmail("")
    }

    return (
        <div className="">
            <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4 text-lg font-semibold">
                Referral Center
            </header>
            <div className="w-full p-4 h-[calc(100vh-4rem)] overflow-y-auto">
                <div className="max-w-2xl space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Referral Credits</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                You have <Badge className="font-medium" variant="secondary">{referralCredits}</Badge> referral credits left. Earn 15 credits for
                                every referral.
                            </p>
                        </CardHeader>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Your referral link</CardTitle>
                        </CardHeader>
                        <CardContent className="flex gap-2">
                            <Input value={referralLink} readOnly className="font-mono text-sm" />
                            <Button variant="outline" size="icon" onClick={copyToClipboard}>
                                <Copy className="h-4 w-4" />
                                <span className="sr-only">Copy referral link</span>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Email an invite</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSendInvite} className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="nazmul@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Button type="submit">Send</Button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="pt-6">
                            <Tabs defaultValue="accepted">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="accepted">Accepted Invites</TabsTrigger>
                                    <TabsTrigger value="pending">Pending Invites</TabsTrigger>
                                </TabsList>
                                <TabsContent value="accepted" className="mt-4">
                                    <div className="text-center py-8 text-sm text-muted-foreground">You have no accepted invites</div>
                                </TabsContent>
                                <TabsContent value="pending" className="mt-4">
                                    <div className="text-center py-8 text-sm text-muted-foreground">You have no pending invites</div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

