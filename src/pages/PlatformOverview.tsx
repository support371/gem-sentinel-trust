import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Eye, 
  FileCheck, 
  Workflow, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Zap,
  Lock,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";
import { NetworkAnimation } from "@/components/effects/NetworkAnimation";

const modules = [
  {
    icon: Eye,
    title: "Trust Monitoring Engine",
    description: "Continuous visibility into security posture across your entire digital ecosystem.",
    features: [
      "Real-time threat detection and alerting",
      "Asset discovery and vulnerability scanning",
      "Behavioral analytics and anomaly detection",
      "Third-party risk monitoring"
    ]
  },
  {
    icon: Lock,
    title: "Policy Enforcement Layer",
    description: "Automated policy enforcement ensuring consistent security controls.",
    features: [
      "Zero-trust access policies",
      "Automated compliance enforcement",
      "Configuration drift detection",
      "Security control validation"
    ]
  },
  {
    icon: Workflow,
    title: "Governance Workflow Engine",
    description: "Streamlined security operations with automated workflows.",
    features: [
      "Incident response automation",
      "Change management integration",
      "Audit trail and evidence collection",
      "Escalation and notification rules"
    ]
  },
  {
    icon: BarChart3,
    title: "Executive Reporting System",
    description: "Board-ready reporting and metrics for strategic decision-making.",
    features: [
      "Risk quantification dashboards",
      "Compliance status reporting",
      "Trend analysis and forecasting",
      "Customizable executive summaries"
    ]
  }
];

export default function PlatformOverview() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <NetworkAnimation 
            className="absolute inset-0 opacity-30" 
            particleCount={40}
            connectionDistance={120}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Enterprise Security Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Unified Security
              <span className="block text-primary">Command Center</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              GEM Sentinel Trust delivers end-to-end security operations through four integrated modules, 
              providing complete visibility, control, and governance across your enterprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="xl">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modules Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 gem-hex-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Platform Modules
            </h2>
            <p className="text-muted-foreground text-lg">
              Four integrated components working together to deliver comprehensive security operations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="gem-card gem-border-glow p-8 rounded-2xl group hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <module.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {module.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {module.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Integration Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Seamless Integration
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Connect with your existing security stack through our extensive integration library. 
                  Support for SIEM, SOAR, IAM, and cloud platforms.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Zap, text: "API-first architecture for rapid integration" },
                    { icon: Settings, text: "Pre-built connectors for 200+ security tools" },
                    { icon: Shield, text: "Custom integration support with dedicated engineers" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="gem-card p-8 rounded-2xl">
                <div className="aspect-video bg-background/50 rounded-lg border border-border flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 gem-cyber-grid opacity-30" />
                  <div className="text-center relative z-10">
                    <Shield className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">Platform Architecture Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto gem-card gem-border-glow p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Security Operations?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              See how GEM Sentinel Trust can provide complete visibility and control over your security posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request a Demo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/sentinel-x">
                <Button variant="hero-outline" size="xl">
                  Learn About Sentinel-X
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
