import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { aiModelsData } from "@/lib/data";

export default function AIModels() {
  const categories = ["chat", "code", "image"];

  return (
    <div className="space-y-8 max-w-5xl">
      {categories.map((category) => {
        const models = aiModelsData.filter((model) => model.category === category);
        return (
          <div key={category} className="space-y-4">
            <h2 className="text-xl font-semibold capitalize">{category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {models.map((model) => (
                <Card key={model.id} className="overflow-hidden">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium">{model.name}</h3>
                      <p className="text-sm text-muted-foreground">{model.provider}</p>
                    </div>
                    <Switch
                      checked={model.enabled} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
