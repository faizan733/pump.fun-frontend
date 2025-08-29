import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ChatCard() {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-4">
        <div className="text-sm text-neutral-300">TARIFF CHAT</div>
        <Button>Join Chat</Button>
      </CardContent>
    </Card>
  );
}
