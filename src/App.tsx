import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Menu, X } from "lucide-react";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { CursorEffect } from "./components/CursorEffect";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Enhanced smooth scroll with offset for fixed navbar
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 56; // 14 * 4 = 56px (h-14)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      // Smooth scroll with custom easing
      smoothScrollTo(offsetPosition, 800);
    }
  };

  // Custom smooth scroll function with easing
  const smoothScrollTo = (targetPosition: number, duration: number) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function (easeInOutCubic)
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background transition-colors duration-300 relative">
        {/* Custom Cursor Effect - Behind all content */}
        <CursorEffect />
        
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-md border-b shadow-sm' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14">
              <div className="shrink-0">
                <a href="#home" className="text-lg font-medium tracking-tight hover:text-primary transition-colors">
                  Bayu segara
                </a>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-2">
                <div className="flex items-baseline space-x-1">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm rounded-md hover:bg-accent/50 transition-all"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <ThemeToggle />
              </div>

              {/* Mobile menu section */}
              <div className="md:hidden flex items-center space-x-2">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="h-9 w-9"
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-background/95 backdrop-blur-md border-t">
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base hover:bg-accent/50 transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="relative z-10">
          <div id="home">
            <Hero />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-secondary/10 py-12 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="mb-4">John Developer</h3>
            <p className="text-muted-foreground mb-6">
              Senior Software Engineer | Full-Stack Developer | DevOps Enthusiast
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 John Developer. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}