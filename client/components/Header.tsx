import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Menu,
  Zap,
  Loader2,
} from "lucide-react";

export function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const { getItemCount } = useCart();
  const { getFavoriteCount } = useFavorites();
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const navigate = useNavigate();

  const cartCount = getItemCount();
  const wishlistCount = getFavoriteCount();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setShowMobileSearch(false);
    }
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const AuthDialog = ({ onClose }: { onClose: () => void }) => {
    const { login, register, isLoading } = useAuth();
    const [activeTab, setActiveTab] = useState("signin");
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");

      try {
        let success = false;
        if (activeTab === "signin") {
          success = await login(formData.email, formData.password);
        } else {
          success = await register(
            formData.name,
            formData.email,
            formData.password,
          );
        }

        if (success) {
          onClose();
          setFormData({ name: "", email: "", password: "" });
        } else {
          setError("Invalid credentials. Please try again.");
        }
      } catch (err) {
        setError("An error occurred. Please try again.");
      }
    };

    return (
      <>
        <DialogHeader>
          <DialogTitle>Welcome to EliteStore</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin" className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
            <div className="text-xs text-muted-foreground text-center">
              Demo: Use admin@elitestore.com / admin123 or any valid
              email/password
            </div>
          </TabsContent>
          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="signup-name">Full Name</Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="Create a password (min 6 characters)"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  minLength={6}
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </>
    );
  };

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
                <Link to="/" className="text-lg font-medium hover:text-primary">
                  Home
                </Link>
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
              to="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
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
                  <Link to="/categories">All Categories</Link>
                </DropdownMenuItem>
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
                className="pl-10 pr-12 bg-muted/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearchKeyPress}
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 px-3"
                onClick={handleSearch}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile search */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            >
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
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-6 w-6 rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-5 w-5" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link to="/account">My Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/orders">Order History</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/account/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <AuthDialog onClose={() => setShowAuthDialog(false)} />
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showMobileSearch && (
          <div className="lg:hidden border-t bg-background p-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 pr-12 bg-muted/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearchKeyPress}
                autoFocus
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 px-3"
                onClick={handleSearch}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
