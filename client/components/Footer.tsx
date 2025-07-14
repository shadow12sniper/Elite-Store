import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Zap,
  CreditCard,
  Shield,
  Truck,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30 mt-20">
      {/* Newsletter Section */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">Stay in the Loop</h3>
            <p className="text-primary-foreground/90">
              Subscribe to our newsletter for exclusive deals, new arrivals, and
              insider updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-primary-foreground text-primary border-0"
              />
              <Button
                variant="secondary"
                className="whitespace-nowrap font-semibold"
              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">EliteStore</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your premier destination for quality products at unbeatable
              prices. We're committed to providing exceptional customer service
              and fast, reliable shipping.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                123 Commerce Street, City, State 12345
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                1-800-ELITE-STORE
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                support@elitestore.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                to="/products"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Shop All Products
              </Link>
              <Link
                to="/deals"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Deals & Offers
              </Link>
              <Link
                to="/categories/electronics"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Electronics
              </Link>
              <Link
                to="/categories/fashion"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Fashion
              </Link>
              <Link
                to="/categories/home"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home & Garden
              </Link>
              <Link
                to="/new-arrivals"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                New Arrivals
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold">Customer Service</h4>
            <nav className="space-y-2">
              <Link
                to="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/help"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Help Center
              </Link>
              <Link
                to="/shipping"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Shipping Info
              </Link>
              <Link
                to="/returns"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Returns & Exchanges
              </Link>
              <Link
                to="/size-guide"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Size Guide
              </Link>
              <Link
                to="/track-order"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Track Your Order
              </Link>
            </nav>
          </div>

          {/* Account & Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Account & Legal</h4>
            <nav className="space-y-2">
              <Link
                to="/account"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                My Account
              </Link>
              <Link
                to="/wishlist"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Wishlist
              </Link>
              <Link
                to="/orders"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Order History
              </Link>
              <Link
                to="/privacy"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/affiliate"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Affiliate Program
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <Separator />

      {/* Trust Badges */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Shield className="w-5 h-5" />
            <span>Secure Checkout</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Truck className="w-5 h-5" />
            <span>Free Shipping $50+</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <CreditCard className="w-5 h-5" />
            <span>Multiple Payment Options</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Phone className="w-5 h-5" />
            <span>24/7 Customer Support</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} EliteStore. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Youtube className="h-4 w-4" />
            </Button>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground mr-2">
              We accept:
            </span>
            <div className="flex space-x-1">
              {["Visa", "MC", "Amex", "PayPal"].map((method) => (
                <div
                  key={method}
                  className="w-8 h-5 bg-muted rounded text-xs flex items-center justify-center font-medium"
                >
                  {method === "MC" ? "MC" : method.slice(0, 2)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
