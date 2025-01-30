import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { userData } from "@/lib/data"

export default function Account() {
    return (
        <div className="space-y-8 max-w-xl">
            <div>
                <h2 className="text-2xl font-semibold mb-2">Account</h2>
                <p className="text-muted-foreground mb-4">Login or log out your account</p>
                <Card>
                    <CardContent className="p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-muted-foreground">Logged in as:</p>
                            <p className="font-medium">{userData.email}</p>
                        </div>
                        <Button variant="outline">Logout</Button>
                    </CardContent>
                </Card>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                <p className="text-muted-foreground mb-4">Based on the plan you have, these are your usage limits</p>
                <Card>
                    <CardContent className="p-4 space-y-4">
                        <h3 className="font-semibold text-sm">MONTHLY USAGE</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <p className="text-muted-foreground">Advanced:</p>
                            <p className="text-right">{userData.usage.advanced}</p>
                            <p className="text-muted-foreground">Reset Date:</p>
                            <p className="text-right">{userData.usage.resetDate}</p>
                            <p className="text-muted-foreground">End Date:</p>
                            <p className="text-right">{userData.usage.endDate}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-2">Subscription</h2>
                <p className="text-muted-foreground mb-4">Upgrade or cancel your current subscription</p>
                <Button variant="outline">Manage Subscription</Button>
            </div>
        </div>
    )
}

