import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [, setLocation] = useLocation();
  const handleGoHome = () => setLocation("/");

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[var(--agara-cream)] text-[var(--agara-espresso)]">
      <Card className="w-full max-w-lg mx-4 shadow-xl border border-[var(--agara-line)] bg-[var(--agara-cream-deep)]/90 backdrop-blur-sm rounded-2xl">
        <CardContent className="pt-10 pb-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-[rgba(184,101,56,0.12)] flex items-center justify-center text-[var(--agara-copper-dark)]">
              <AlertCircle size={28} strokeWidth={1.75} />
            </div>
          </div>

          <h1
            className="text-5xl font-normal mb-2"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            404
          </h1>

          <h2
            className="text-2xl font-normal text-[var(--agara-espresso)] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Page Not Found
          </h2>

          <p className="text-[#657064] mb-8 leading-relaxed text-sm max-w-xs mx-auto">
            The page you are seeking doesn't exist or has moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-[var(--agara-espresso)] hover:bg-[var(--agara-espresso-soft)] text-[var(--agara-cream)] px-8 py-3 rounded-full transition-all duration-200 uppercase tracking-widest text-xs font-semibold"
            >
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
