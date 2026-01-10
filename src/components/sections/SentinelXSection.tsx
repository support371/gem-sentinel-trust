import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Shield, BarChart3, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Detection",
    description: "Machine learning algorithms analyze patterns to identify sophisticated threats before they strike."
  },
  {
    icon: BarChart3,
    title: "Risk Scoring Engine",
    description: "Continuous assessment of your security posture with actionable risk metrics and trending."
  },
  {
    icon: Layers,
    title: "Multi-Layer Defense",
    description: "Coordinated protection across network, endpoint, identity, and application layers."
  },
  {
    icon: Shield,
    title: "Zero Trust Architecture",
    description: "Verify every access request with context-aware policies and least-privilege enforcement."
  }
];

export function SentinelXSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-4">
                GEM PROPRIETARY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sentinel-X™
                <span className="block text-gradient-primary">Cyber Defense Framework</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Our proprietary cybersecurity platform combines advanced AI threat detection 
                with human expertise to deliver unparalleled protection for your digital assets.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/30 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <Link to="/sentinel-x">
              <Button variant="hero" size="lg">
                Explore Sentinel-X
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="gem-card gem-border-glow p-8 rounded-2xl">
              {/* Mock Dashboard */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground font-mono">SENTINEL-X DASHBOARD</p>
                    <p className="text-sm text-primary font-medium">Live Threat Analysis</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="text-xs text-success">Active</span>
                  </div>
                </div>
                
                {/* Risk Score */}
                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Security Score</span>
                    <span className="text-2xl font-bold font-mono text-success">94</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[94%] bg-gradient-to-r from-primary to-success rounded-full" />
                  </div>
                </div>
                
                {/* Threat Feed */}
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-mono">RECENT EVENTS</p>
                  {[
                    { type: "blocked", message: "Suspicious login attempt blocked", time: "2m ago" },
                    { type: "info", message: "Firewall rules updated", time: "15m ago" },
                    { type: "success", message: "Vulnerability scan completed", time: "1h ago" },
                  ].map((event, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded bg-background/30 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        event.type === "blocked" ? "bg-destructive" :
                        event.type === "info" ? "bg-primary" : "bg-success"
                      }`} />
                      <span className="text-muted-foreground flex-1 truncate">{event.message}</span>
                      <span className="text-xs text-muted-foreground font-mono">{event.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
