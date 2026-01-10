import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Sentinel-X", href: "/sentinel-x" },
  { name: "Trust Center", href: "/trust-center" },
  { name: "Real Estate Protection", href: "/real-estate" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" />
              <div className="absolute inset-0 h-8 w-8 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-foreground">
                GEM<span className="text-primary">CYBER</span>
              </span>
              <span className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase -mt-1">
                Trust
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href}>
                <Button variant="nav" size="sm">
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/portal">
              <Button variant="cyber-ghost" size="sm">
                Client Portal
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="sm">
                Get Protected
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-2 border-t border-border">
            <Link to="/portal" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">
                Client Portal
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="hero" className="w-full">
                Get Protected
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
