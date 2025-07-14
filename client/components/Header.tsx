import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, ShoppingCart, User, Heart, Menu, Zap } from "lucide-react";

export function Header() {
  const [cartCount] = useState(3); // Mock cart count
  const [wishlistCount] = useState(5); // Mock wishlist count

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      {/* Top bar with promo */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <p className="text-center text-sm font-medium">
            <Zap className="inline-block w-4 h-4 mr-1" />
            Free shipping on orders over $50! Limited time offer.
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <nav className="flex flex-col space-y-4 mt-4">
                <Link
                  to="/products"
                  className="text-lg font-medium hover:text-primary"
                >
                  Shop All
                </Link>
                <Link
                  to="/categories/electronics"
                  className="text-lg font-medium hover:text-primary"
                >
                  Electronics
                </Link>
                <Link
                  to="/categories/fashion"
                  className="text-lg font-medium hover:text-primary"
                >
                  Fashion
                </Link>
                <Link
                  to="/categories/home"
                  className="text-lg font-medium hover:text-primary"
                >
                  Home & Garden
                </Link>
                <Link
                  to="/categories/sports"
                  className="text-lg font-medium hover:text-primary"
                >
                  Sports
                </Link>
                <Link
                  to="/deals"
                  className="text-lg font-medium hover:text-primary text-primary"
                >
                  Deals
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">EliteStore</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/products"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Shop All
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium hover:text-primary transition-colors">
                Categories
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/categories/electronics">Electronics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/categories/fashion">Fashion</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/categories/home">Home & Garden</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/categories/sports">Sports</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to="/deals"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Deals
            </Link>
          </nav>

          {/* Search bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-muted/50"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile search */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {wishlistCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/account">My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/orders">Order History</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/account/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/auth/login">Sign In</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
