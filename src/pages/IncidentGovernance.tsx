import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Clock,
  Phone,
  FileText,
  Users,
  Target,
  Zap,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import { NetworkAnimation } from "@/components/effects/NetworkAnimation";

const lifecycleSteps = [
  {
    step: "01",
    title: "Detection",
    description: "Automated threat detection through continuous monitoring and behavioral analytics.",
    icon: Target
  },
  {
    step: "02",
    title: "Triage",
    description: "Rapid classification and prioritization based on severity and business impact.",
    icon: AlertTriangle
  },
  {
    step: "03",
    title: "Containment",
    description: "Immediate isolation and containment to prevent lateral movement and data loss.",
    icon: Shield
  },
  {
    step: "04",
    title: "Eradication",
    description: "Complete removal of threat actors and malicious artifacts from affected systems.",
    icon: Zap
  },
  {
    step: "05",
    title: "Recovery",
    description: "Systematic restoration of systems and services with enhanced monitoring.",
    icon: CheckCircle
  },
  {
    step: "06",
    title: "Post-Incident",
    description: "Comprehensive analysis, lessons learned, and control improvements.",
    icon: FileText
  }
];

const capabilities = [
  {
    icon: Clock,
    title: "24/7 Incident Response",
    description: "Round-the-clock monitoring and response by our expert SOC team."
  },
  {
    icon: Users,
    title: "Dedicated Response Team",
    description: "Named incident commanders and technical specialists for your account."
  },
  {
    icon: BarChart3,
    title: "Executive Reporting",
    description: "Real-time status updates and comprehensive post-incident reports."
  },
  {
    icon: FileText,
    title: "Regulatory Coordination",
    description: "Support for breach notification and regulatory reporting requirements."
  }
];

export default function IncidentGovernance() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">Incident Response</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Incident Governance
              <span className="block text-primary">& Response</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Structured incident management with clear escalation paths, 
              rapid response capabilities, and comprehensive governance oversight.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get Response Plan
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portal">
                <Button variant="hero-outline" size="xl">
                  View Threat Monitor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Incident Lifecycle */}
      <section className="py-24 relative">
        <div className="absolute inset-0 gem-hex-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Incident Lifecycle Management
            </h2>
            <p className="text-muted-foreground text-lg">
              A structured, repeatable process for handling security incidents from detection through resolution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {lifecycleSteps.map((step, index) => (
              <div 
                key={index}
                className="gem-card p-6 rounded-xl group hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-lg font-bold text-primary font-mono">{step.step}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="w-4 h-4 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Capabilities */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Response Capabilities
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive incident response services backed by expert teams and proven methodologies.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="gem-card p-6 rounded-xl text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <capability.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {capability.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Emergency CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="gem-card border-2 border-destructive/30 p-8 md:p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 via-transparent to-destructive/5" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6">
                  <Phone className="w-8 h-8 text-destructive animate-pulse" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Experiencing a Security Incident?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                  Our emergency response team is available 24/7. Don't wait—immediate action can significantly reduce impact.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+14017022460">
                    <Button size="xl" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground gap-2">
                      <Phone className="w-5 h-5" />
                      Emergency Hotline: +1 (401) 702-2460
                    </Button>
                  </a>
                </div>
                
                <p className="text-sm text-muted-foreground mt-6">
                  Average response time: &lt;15 minutes for critical incidents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Regular CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto gem-card gem-border-glow p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Be Prepared Before Incidents Occur
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Develop a comprehensive incident response plan tailored to your organization's unique risks and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request IR Assessment
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
      
      <Footer />
    </div>
  );
}
