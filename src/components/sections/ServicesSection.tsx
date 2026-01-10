import { ServiceCard } from "@/components/cyber/ServiceCard";
import { Shield, Eye, AlertTriangle, FileCheck, Building, Zap } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Threat Monitoring",
    description: "Continuous 24/7 surveillance of your digital assets with real-time threat detection and alerting.",
    features: [
      "Real-time threat detection",
      "Network traffic analysis",
      "Endpoint monitoring",
      "Behavioral analytics"
    ],
    href: "/services#monitoring"
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Rapid response protocols with dedicated security analysts to contain and remediate threats.",
    features: [
      "15-minute response SLA",
      "Threat containment",
      "Forensic analysis",
      "Recovery support"
    ],
    href: "/services#response"
  },
  {
    icon: FileCheck,
    title: "Compliance Management",
    description: "Achieve and maintain compliance with industry standards and regulatory requirements.",
    features: [
      "SOC 2 readiness",
      "ISO 27001 alignment",
      "GDPR compliance",
      "Audit preparation"
    ],
    href: "/services#compliance"
  },
  {
    icon: Shield,
    title: "Sentinel-X™ Platform",
    description: "Our proprietary cybersecurity framework combining AI-powered detection with expert analysis.",
    features: [
      "AI threat correlation",
      "Risk scoring engine",
      "Behavioral detection",
      "Executive reporting"
    ],
    href: "/sentinel-x"
  },
  {
    icon: Building,
    title: "Real Estate Protection",
    description: "Specialized security services for property management systems and smart building infrastructure.",
    features: [
      "Building system security",
      "Access control audit",
      "IoT device protection",
      "Tenant data security"
    ],
    href: "/real-estate"
  },
  {
    icon: Zap,
    title: "Digital Asset Protection",
    description: "Comprehensive protection for your digital identities, accounts, and intellectual property.",
    features: [
      "Identity monitoring",
      "Account protection",
      "Dark web surveillance",
      "Brand protection"
    ],
    href: "/services#assets"
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Cybersecurity Operations
          </h2>
          <p className="text-muted-foreground text-lg">
            From threat detection to compliance management, we provide end-to-end 
            security services tailored to your enterprise needs.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
