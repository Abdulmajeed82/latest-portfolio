"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function GithubRedirectCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-xl border-2 hover:border-primary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="pt-8 flex flex-col items-center text-center">
        <div className={cn(
          "p-4 rounded-full mb-4 transition-colors duration-300",
          isHovered ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
        )}>
          <Github className="w-10 h-10" />
        </div>
        
        <h3 className="text-2xl font-bold tracking-tight mb-2">GitHub Profile</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Explore my open-source projects, contributions, and the source code for this portfolio.
        </p>

        <div className="flex items-center gap-2 text-xs text-primary font-medium animate-pulse">
          <Heart className="w-3 h-3 fill-current" />
          Open to Collaboration
        </div>
      </CardContent>

      <CardFooter className="pb-8">
        <Link
          href="https://github.com/Abdulmajeed82"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full gap-2 py-6 text-lg transition-transform active:scale-95",
            isHovered && "bg-primary/90 shadow-md"
          )}
        >
          Follow @Abdulmajeed82 <ExternalLink className="w-5 h-5" />
        </Link>
      </CardFooter>
    </Card>
  );
}