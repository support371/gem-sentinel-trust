import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  BarChart3,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Activity,
  FileText,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import { NetworkAnimation } from "@/components/effects/NetworkAnimation";
import { StatCard } from "@/components/cyber/StatCard";

const metrics = [
  {
    icon: Shield,
    value: "94",
    label: "Trust Score",
    trend: { value: "2.3%", isPositive: true },
    suffix: "/100"
  },
  {
    icon: AlertTriangle,
    value: "3",
    label: "Active Incidents",
    trend: { value: "40%", isPositive: true },
    description: "Down from last week"
  },
  {
    icon: CheckCircle,
    value: "98.2%",
    label: "Compliance Status",
    trend: { value: "0.5%", isPositive: true }
  },
  {
    icon: Clock,
    value: "12m",
    label: "Avg Response Time",
    trend: { value: "18%", isPositive: true }
  }
];

const recentActivity = [
  { type: "success", message: "SOC 2 audit completed successfully", time: "2h ago" },
  { type: "warning", message: "Unusual login pattern detected - resolved", time: "4h ago" },
  { type: "info", message: "Weekly vulnerability scan completed", time: "6h ago" },
  { type: "success", message: "Firewall rules updated across all regions", time: "8h ago" },
  { type: "blocked", message: "Brute force attempt blocked (142 attempts)", time: "12h ago" }
];

const riskTrends = [
  { category: "Network Security", score: 92, change: 3 },
  { category: "Application Security", score: 88, change: -2 },
  { category: "Data Protection", score: 95, change: 5 },
  { category: "Access Management", score: 90, change: 1 },
  { category: "Endpoint Security", score: 87, change: 4 }
];

export default function InsightsDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <NetworkAnimation 
            className="absolute inset-0 opacity-20" 
            particleCount={30}
            connectionDistance={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Security Insights</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Executive Dashboard
              <span className="block text-primary">Preview</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Real-time visibility into your security posture, compliance status, and risk trends.
            </p>
          </div>
        </div>
      </section>
      
      {/* Dashboard Preview */}
      <section className="pb-24 relative">
        <div className="container mx-auto px-4">
          {/* Key Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <StatCard
                key={index}
                icon={metric.icon}
                value={metric.value + (metric.suffix || "")}
                label={metric.label}
                trend={metric.trend}
              />
            ))}
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Trust Score Gauge */}
            <div className="gem-card gem-border-glow p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Trust Score</h3>
                <span className="text-xs text-muted-foreground">Updated 5m ago</span>
              </div>
              
              <div className="relative flex items-center justify-center py-8">
                <div className="relative w-48 h-48">
                  {/* Outer ring */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="hsl(var(--secondary))"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${94 * 2.83} ${100 * 2.83}`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-foreground">94</span>
                    <span className="text-sm text-muted-foreground">/ 100</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="text-success">+2.3 points</span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </div>
            
            {/* Risk Trends */}
            <div className="gem-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Risk Trends</h3>
                <Activity className="w-5 h-5 text-primary" />
              </div>
              
              <div className="space-y-4">
                {riskTrends.map((trend, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground">{trend.category}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-primary">{trend.score}</span>
                        {trend.change > 0 ? (
                          <span className="flex items-center text-success text-xs">
                            <TrendingUp className="w-3 h-3" />
                            +{trend.change}
                          </span>
                        ) : (
                          <span className="flex items-center text-destructive text-xs">
                            <TrendingDown className="w-3 h-3" />
                            {trend.change}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          trend.score >= 90 ? 'bg-success' : 
                          trend.score >= 80 ? 'bg-primary' : 'bg-warning'
                        }`}
                        style={{ width: `${trend.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Activity Feed */}
            <div className="gem-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
                <FileText className="w-5 h-5 text-primary" />
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-background/50"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      activity.type === "blocked" ? "bg-destructive" :
                      activity.type === "warning" ? "bg-warning" :
                      activity.type === "success" ? "bg-success" : "bg-primary"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground truncate">{activity.message}</p>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto gem-card gem-border-glow p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Full Access to Your Dashboard
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              This is a preview. Sign up to access your personalized security dashboard with real-time data and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request Full Access
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portal">
                <Button variant="hero-outline" size="xl">
                  Explore Threat Monitor
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
