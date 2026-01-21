import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Target,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Globe,
  Building2,
  Cpu
} from "lucide-react";
import { Link } from "react-router-dom";
import { NetworkAnimation } from "@/components/effects/NetworkAnimation";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Every decision we make prioritizes the protection of our clients' digital assets and data."
  },
  {
    icon: Target,
    title: "Precision & Accuracy",
    description: "We deliver actionable intelligence, not noise. Every alert and recommendation is validated."
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work as an extension of your team, aligning our operations with your business objectives."
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description: "Staying ahead of threats requires constant evolution. We invest heavily in R&D and emerging technologies."
  }
];

const ecosystemPartners = [
  { name: "Cloud Providers", description: "AWS, Azure, GCP integrations" },
  { name: "SIEM Platforms", description: "Splunk, Sentinel, QRadar" },
  { name: "Identity Providers", description: "Okta, Azure AD, Ping" },
  { name: "Endpoint Security", description: "CrowdStrike, SentinelOne" }
];

export default function About() {
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
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Securing Digital
              <span className="block text-primary">Enterprises</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              GEM Cybersecurity Assist is dedicated to providing enterprise-grade security operations 
              that protect organizations from evolving cyber threats while enabling business growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  We exist to democratize enterprise-grade cybersecurity, making sophisticated security 
                  operations accessible to organizations of all sizes. Our mission is to be the trusted 
                  security partner that enables businesses to operate confidently in an increasingly 
                  connected world.
                </p>
                <p className="text-muted-foreground text-lg">
                  Through our Sentinel-X™ framework and expert team, we deliver security outcomes 
                  that protect critical assets while maintaining operational efficiency.
                </p>
              </div>
              
              <div className="gem-card gem-border-glow p-8 rounded-2xl">
                <div className="space-y-6">
                  {[
                    { number: "500+", label: "Enterprises Protected" },
                    { number: "50K+", label: "Threats Blocked Daily" },
                    { number: "24/7", label: "Expert Coverage" },
                    { number: "<15min", label: "Average Response Time" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-background/50">
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className="text-2xl font-bold text-primary font-mono">{stat.number}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rationale Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="absolute inset-0 gem-hex-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why We Exist
            </h2>
            <p className="text-muted-foreground text-lg">
              The cybersecurity landscape is complex and constantly evolving. Organizations need more 
              than just tools—they need expertise, governance, and operational excellence.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="gem-card p-6 rounded-xl text-center group hover:bg-card/80 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Ecosystem Alignment */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  {ecosystemPartners.map((partner, i) => (
                    <div key={i} className="gem-card p-5 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <Cpu className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold text-foreground">{partner.name}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{partner.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Ecosystem</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Built for Your Stack
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  We integrate seamlessly with your existing security investments, enhancing rather than 
                  replacing your current tooling. Our platform connects with leading vendors across 
                  cloud, identity, endpoint, and network security.
                </p>
                
                <ul className="space-y-3">
                  {[
                    "200+ pre-built integrations",
                    "Custom API connectivity",
                    "Unified visibility across tools",
                    "Automated data correlation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
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
              Partner With Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let's discuss how GEM Cybersecurity Assist can strengthen your security posture 
              and protect your organization from evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="xl">
                  View Our Services
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
