import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
  FileCheck, 
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Eye,
  Server,
  Key,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import { NetworkAnimation } from "@/components/effects/NetworkAnimation";
import { ComplianceBadge } from "@/components/cyber/ComplianceBadge";

const zeroTrustPrinciples = [
  {
    icon: Key,
    title: "Verify Explicitly",
    description: "Authenticate and authorize based on all available data points including user identity, location, device health, and data classification."
  },
  {
    icon: Lock,
    title: "Least Privilege Access",
    description: "Limit user access with just-in-time and just-enough-access policies, risk-based adaptive policies, and data protection."
  },
  {
    icon: AlertTriangle,
    title: "Assume Breach",
    description: "Minimize blast radius and segment access. Verify end-to-end encryption and use analytics to drive threat detection."
  }
];

const complianceFrameworks = [
  { name: "SOC 2 Type II", status: "certified" as const, description: "Security, Availability, Confidentiality" },
  { name: "ISO 27001", status: "certified" as const, description: "Information Security Management" },
  { name: "GDPR", status: "compliant" as const, description: "EU Data Protection Regulation" },
  { name: "HIPAA", status: "compliant" as const, description: "Healthcare Data Privacy" },
  { name: "PCI DSS", status: "certified" as const, description: "Payment Card Security" },
  { name: "NIST CSF", status: "compliant" as const, description: "Cybersecurity Framework" },
  { name: "CCPA", status: "compliant" as const, description: "California Consumer Privacy" },
  { name: "FedRAMP", status: "in-progress" as const, description: "Federal Cloud Security" }
];

const auditCapabilities = [
  "Automated evidence collection and organization",
  "Real-time compliance monitoring dashboards",
  "Policy-to-control mapping documentation",
  "Continuous control testing and validation",
  "Audit-ready report generation",
  "Gap analysis and remediation tracking"
];

export default function SecurityCompliance() {
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
              <FileCheck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Security & Compliance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Zero-Trust Security
              <span className="block text-primary">Compliance Ready</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Enterprise-grade security posture with comprehensive compliance coverage. 
              Always audit-ready with continuous monitoring and automated evidence collection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get Compliance Assessment
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/trust-center">
                <Button variant="hero-outline" size="xl">
                  Visit Trust Center
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Zero Trust Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Zero-Trust Security Posture
            </h2>
            <p className="text-muted-foreground text-lg">
              Our platform is built on zero-trust principles, ensuring every access request is fully authenticated, 
              authorized, and encrypted before granting access.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {zeroTrustPrinciples.map((principle, index) => (
              <div 
                key={index}
                className="gem-card p-8 rounded-2xl text-center group hover:bg-card/80 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <principle.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Compliance Coverage */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="absolute inset-0 gem-hex-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compliance Coverage
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive coverage across major regulatory frameworks and industry standards.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {complianceFrameworks.map((framework, index) => (
              <div 
                key={index}
                className="gem-card p-6 rounded-xl"
              >
                <div className="mb-4">
                  <ComplianceBadge name={framework.name} status={framework.status} />
                </div>
                <p className="text-sm text-muted-foreground">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Audit Readiness */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Eye className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Always Ready</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Audit Readiness
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Eliminate audit scrambles with continuous compliance monitoring and automated evidence collection. 
                  Be prepared for any audit, any time.
                </p>
                
                <ul className="space-y-4">
                  {auditCapabilities.map((capability, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="gem-card gem-border-glow p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">Compliance Status</h3>
                    <span className="flex items-center gap-2 text-sm text-success">
                      <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                      All Systems Green
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: "SOC 2 Controls", progress: 100 },
                      { name: "ISO 27001 Controls", progress: 100 },
                      { name: "GDPR Requirements", progress: 98 },
                      { name: "PCI DSS Controls", progress: 100 }
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-foreground">{item.name}</span>
                          <span className="text-primary font-mono">{item.progress}%</span>
                        </div>
                        <div className="h-2 bg-background rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto gem-card gem-border-glow p-12 rounded-2xl text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simplify Your Compliance Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let our experts help you achieve and maintain compliance across all your regulatory requirements.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start Compliance Assessment
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
