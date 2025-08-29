"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Info } from "lucide-react";

export default function FileRulesCard() {
  return (
    <Card className="bg-[#101417]/80 border-white/10">
      <CardHeader className="flex-row items-center gap-2">
        <Info className="h-4 w-4 text-white/70" />
        <CardTitle className="text-white/90">File size and type</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-white/70 space-y-3">
        <div className="flex items-start gap-2">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            <strong>Image:</strong> max <b>15MB</b>. <code>.jpg</code>,{" "}
            <code>.jpeg</code>, <code>.gif</code>, <code>.png</code>{" "}
            recommended.
          </p>
        </div>
        <div className="flex items-start gap-2">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            <strong>Video:</strong> max <b>30MB</b>. <code>.mp4</code>{" "}
            recommended.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
