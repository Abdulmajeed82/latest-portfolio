"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    // This points directly to the file you put in the public folder
    redirect("/resume.pdf");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-lg animate-pulse">Loading Resume...</p>
        <p className="text-sm text-muted-foreground">If it doesn't open, ensure resume.pdf is in the public folder.</p>
      </div>
    </div>
  );
}