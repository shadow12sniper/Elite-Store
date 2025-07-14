import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, ShoppingBag, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto text-center">
          <CardContent className="p-12 space-y-8">
            {/* 404 Illustration */}
            <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">404</span>
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Oops! Page Not Found
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                The page you're looking for doesn't exist or has been moved.
                Don't worry, let's get you back on track!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link to="/products">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Now
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                Or try one of these popular sections:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/deals">Hot Deals</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/categories/electronics">Electronics</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/categories/fashion">Fashion</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/categories/home">Home & Garden</Link>
                </Button>
              </div>
            </div>

            {/* Back Button */}
            <div className="pt-4">
              <Button variant="ghost" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
