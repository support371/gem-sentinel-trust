import { Button } from "@/components/ui/button";
import { ThreatShield } from "@/components/cyber/ThreatShield";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gem-cyber-grid opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-medium">Sentinel-X™ Active Protection</span>
            </div>
            
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Enterprise</span>
                <br />
                <span className="text-gradient-primary">Cybersecurity</span>
                <br />
                <span className="text-foreground">Operations</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Continuous threat monitoring, risk posture scoring, and incident response 
                powered by our proprietary Sentinel-X™ framework.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Get Protected
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/sentinel-x">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  <Play className="w-5 h-5" />
                  Explore Sentinel-X
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">99.9%</span>
                <span className="text-sm text-muted-foreground">Uptime SLA</span>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">24/7</span>
                <span className="text-sm text-muted-foreground">SOC Coverage</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">&lt;15m</span>
                <span className="text-sm text-muted-foreground">Response Time</span>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <ThreatShield />
          </div>
        </div>
      </div>
    </section>
  );
}
