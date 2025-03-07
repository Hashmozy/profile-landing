import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BackgroundShapes } from "../background-shapes";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b pt-16">
      <div className="container px-4 py-16 flex flex-col items-center text-center relative">
        <BackgroundShapes />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Hi, I'm <span className="text-primary">Asheri Musa</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium  mb-8">
          Software Developer
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mb-10">
          Building high-performance web and mobile apps with React, React
          Native, and seamless API integrations. Crafting intuitive and scalable
          digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="gap-2">
            View My Work <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
