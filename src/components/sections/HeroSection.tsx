import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Radio } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gem-hex-pattern opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm">
              <span className="text-primary font-medium">Next-Gen Security Operations</span>
            </div>
            
            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Precision-Engineered</span>
                <br />
                <span className="text-primary">Cyber Defense</span>
                <span className="text-foreground"> for</span>
                <br />
                <span className="text-foreground">Global Enterprises.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                We provide high-fidelity monitoring, offensive assessment frameworks, and resilient asset recovery systems
                trusted by leading institutions in finance, real estate, and technology.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/services">
                <Button variant="hero" size="xl" className="w-full sm:w-auto gap-2">
                  <Shield className="w-5 h-5" />
                  Secure Your Perimeter
                </Button>
              </Link>
              <Link to="/portal">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto gap-2">
                  <Radio className="w-5 h-5" />
                  Live Monitor
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Visual - GEM Logo Area */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Logo Container */}
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
                
                {/* Shield icon with branding */}
                <div className="relative flex flex-col items-center gap-4">
                  <div className="relative">
                    <Shield className="w-32 h-32 text-primary/30" strokeWidth={0.5} />
                    <Shield className="absolute inset-0 w-32 h-32 text-primary" strokeWidth={1} />
                  </div>
                  <div className="text-center">
                    <h2 className="text-4xl font-bold tracking-wider">
                      <span className="text-primary">GEM</span>
                    </h2>
                    <p className="text-sm tracking-[0.3em] text-muted-foreground mt-1">
                      CYBER SECURITY
                    </p>
                    <p className="text-xs tracking-[0.2em] text-muted-foreground/60">
                      MONITORING ASSIST
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}