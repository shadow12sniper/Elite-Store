import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Clock,
  Flame,
  Star,
  Heart,
  ShoppingCart,
  Copy,
  Share2,
  Zap,
  Gift,
  CreditCard,
  Truck,
  Target,
  TrendingUp,
  Calendar,
  Filter,
  Percent,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Deals() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 35,
    seconds: 42,
  });
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("ending-soon");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const featuredDeals = [
    {
      id: 1,
      name: "Smart Watch Pro Series",
      originalPrice: 299.99,
      dealPrice: 149.99,
      discount: 50,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 245,
      stock: 12,
      totalStock: 50,
      category: "Electronics",
      badge: "Flash Sale",
      endsIn: "2h 35m",
      isFeatured: true,
    },
    {
      id: 2,
      name: "Wireless Headphones",
      originalPrice: 199.99,
      dealPrice: 99.99,
      discount: 50,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 189,
      stock: 8,
      totalStock: 30,
      category: "Electronics",
      badge: "Limited",
      endsIn: "5h 20m",
      isFeatured: true,
    },
    {
      id: 3,
      name: "Gaming Laptop Bundle",
      originalPrice: 1299.99,
      dealPrice: 899.99,
      discount: 31,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 98,
      stock: 25,
      totalStock: 25,
      category: "Electronics",
      badge: "Combo Deal",
      endsIn: "1d 12h",
      isFeatured: false,
    },
  ];

  const dailyDeals = [
    {
      id: 4,
      name: "Fashion T-Shirt Bundle",
      originalPrice: 89.99,
      dealPrice: 29.99,
      discount: 67,
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 324,
      stock: 45,
      totalStock: 100,
      category: "Fashion",
      badge: "Buy 2 Get 1 Free",
      isDealOfDay: true,
    },
    {
      id: 5,
      name: "Kitchen Essentials Set",
      originalPrice: 129.99,
      dealPrice: 79.99,
      discount: 38,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 156,
      stock: 20,
      totalStock: 40,
      category: "Home",
      badge: "Clearance",
      isDealOfDay: false,
    },
  ];

  const coupons = [
    {
      code: "SAVE20",
      description: "20% off on all Electronics",
      minOrder: 100,
      expiry: "Dec 31, 2024",
      isStackable: false,
    },
    {
      code: "FREESHIP",
      description: "Free shipping on orders over $50",
      minOrder: 50,
      expiry: "Dec 25, 2024",
      isStackable: true,
    },
    {
      code: "NEWUSER15",
      description: "15% off for new customers",
      minOrder: 0,
      expiry: "Jan 15, 2025",
      isStackable: true,
    },
  ];

  const bankOffers = [
    {
      bank: "Mastercard",
      offer: "10% off up to $25",
      code: "MASTER10",
      icon: CreditCard,
    },
    {
      bank: "PayPal",
      offer: "$5 off on orders over $50",
      code: "PAYPAL5",
      icon: CreditCard,
    },
  ];

  const copyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    setTimeout(() => setCopiedCoupon(null), 2000);
  };

  const CountdownTimer = ({ endsIn }: { endsIn: string }) => (
    <div className="flex items-center gap-2 text-sm">
      <Clock className="w-4 h-4 text-destructive" />
      <span className="font-medium text-destructive">Ends in {endsIn}</span>
    </div>
  );

  const StockProgress = ({
    stock,
    totalStock,
  }: {
    stock: number;
    totalStock: number;
  }) => {
    const percentage = (stock / totalStock) * 100;
    return (
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Stock left</span>
          <span className="font-medium text-destructive">{stock} left!</span>
        </div>
        <Progress value={percentage} className="h-2" />
      </div>
    );
  };

  const DealCard = ({
    deal,
    isLarge = false,
  }: {
    deal: any;
    isLarge?: boolean;
  }) => (
    <Card
      className={cn(
        "group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden",
        isLarge && "md:row-span-2",
      )}
    >
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={deal.image}
            alt={deal.name}
            className={cn("w-full object-cover", isLarge ? "h-64" : "h-48")}
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <Badge
              className={cn(
                "font-bold",
                deal.badge === "Flash Sale" && "bg-destructive",
                deal.badge === "Limited" && "bg-warning",
                deal.badge === "Combo Deal" && "bg-info",
                deal.badge === "Buy 2 Get 1 Free" && "bg-success",
                deal.badge === "Clearance" && "bg-purple-600",
              )}
            >
              {deal.badge}
            </Badge>
            <Badge variant="secondary" className="text-destructive font-bold">
              {deal.discount}% OFF
            </Badge>
          </div>
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="icon" variant="secondary" className="h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          {deal.stock < 15 && (
            <div className="absolute bottom-3 left-3 right-3">
              <Badge
                variant="destructive"
                className="w-full justify-center animate-pulse"
              >
                <Flame className="w-3 h-3 mr-1" />
                Only {deal.stock} left!
              </Badge>
            </div>
          )}
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(deal.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({deal.reviews})
            </span>
          </div>

          <h3 className="font-semibold line-clamp-2">{deal.name}</h3>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-destructive">
                ${deal.dealPrice}
              </span>
              <span className="text-lg text-muted-foreground line-through">
                ${deal.originalPrice}
              </span>
            </div>
            <div className="text-sm text-success font-medium">
              You save ${(deal.originalPrice - deal.dealPrice).toFixed(2)}
            </div>
          </div>

          {deal.endsIn && <CountdownTimer endsIn={deal.endsIn} />}

          <StockProgress stock={deal.stock} totalStock={deal.totalStock} />

          <div className="flex gap-2 pt-2">
            <Button className="flex-1">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-destructive via-destructive/90 to-destructive/80 text-destructive-foreground py-16">
        <div className="container mx-auto px-4 text-center space-y-6">
          <Badge className="bg-white text-destructive font-bold text-lg px-6 py-2">
            <Flame className="w-5 h-5 mr-2" />
            HOT DEALS
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold">Mega Sale Event</h1>
          <p className="text-xl text-destructive-foreground/90 max-w-2xl mx-auto">
            Up to 70% off on selected items. Limited time offers with exclusive
            deals!
          </p>
          <div className="flex justify-center items-center gap-2 md:gap-4 text-xl md:text-2xl font-mono">
            <div className="bg-white text-destructive px-3 md:px-4 py-2 rounded-lg shadow-lg">
              <span className="block text-sm text-muted-foreground">Hours</span>
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <span className="animate-pulse">:</span>
            <div className="bg-white text-destructive px-3 md:px-4 py-2 rounded-lg shadow-lg">
              <span className="block text-sm text-muted-foreground">Min</span>
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <span className="animate-pulse">:</span>
            <div className="bg-white text-destructive px-3 md:px-4 py-2 rounded-lg shadow-lg">
              <span className="block text-sm text-muted-foreground">Sec</span>
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
          </div>
        </div>
      </section>

      {/* Free Shipping Banner */}
      <section className="bg-success text-success-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Truck className="w-5 h-5" />
            <span className="font-semibold">
              Free shipping on all orders over $50! No code needed.
            </span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center space-x-2">
              <Switch
                id="in-stock"
                checked={showInStockOnly}
                onCheckedChange={setShowInStockOnly}
              />
              <label htmlFor="in-stock" className="text-sm font-medium">
                Show only in-stock items
              </label>
            </div>
          </div>

          <div className="flex gap-2 ml-auto">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="fashion">Fashion</SelectItem>
                <SelectItem value="home">Home & Kitchen</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ending-soon">Ending Soon</SelectItem>
                <SelectItem value="discount">% Discount</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="featured" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="featured" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Featured
            </TabsTrigger>
            <TabsTrigger value="daily" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Daily Deals
            </TabsTrigger>
            <TabsTrigger value="flash" className="flex items-center gap-2">
              <Flame className="w-4 h-4" />
              Flash Sales
            </TabsTrigger>
            <TabsTrigger value="combo" className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              Combo Offers
            </TabsTrigger>
            <TabsTrigger value="coupons" className="flex items-center gap-2">
              <Percent className="w-4 h-4" />
              Coupons
            </TabsTrigger>
          </TabsList>

          {/* Featured Deals */}
          <TabsContent value="featured" className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-6 h-6 text-destructive" />
                <h2 className="text-2xl font-bold">Featured Deals</h2>
                <Badge className="bg-destructive">Limited Time</Badge>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredDeals.map((deal, index) => (
                  <DealCard key={deal.id} deal={deal} isLarge={index === 0} />
                ))}
              </div>
            </div>

            {/* Top-Rated Discounted Products */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-success" />
                <h2 className="text-2xl font-bold">Top-Rated Deals</h2>
                <Badge variant="outline">4+ Star Rating</Badge>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredDeals
                  .filter((deal) => deal.rating >= 4.5)
                  .map((deal) => (
                    <DealCard key={`top-${deal.id}`} deal={deal} />
                  ))}
              </div>
            </div>
          </TabsContent>

          {/* Daily Deals */}
          <TabsContent value="daily" className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Deal of the Day</h2>
                <Badge className="bg-primary">Refreshes Daily</Badge>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dailyDeals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Flash Sales */}
          <TabsContent value="flash" className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Flame className="w-6 h-6 text-destructive animate-pulse" />
                <h2 className="text-2xl font-bold">Flash Sales</h2>
                <Badge className="bg-destructive animate-pulse">
                  Hurry Up!
                </Badge>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredDeals
                  .filter((deal) => deal.badge === "Flash Sale")
                  .map((deal) => (
                    <DealCard key={`flash-${deal.id}`} deal={deal} />
                  ))}
              </div>
            </div>
          </TabsContent>

          {/* Combo Offers */}
          <TabsContent value="combo" className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Gift className="w-6 h-6 text-info" />
                <h2 className="text-2xl font-bold">Combo Offers</h2>
                <Badge className="bg-info">Bundle & Save</Badge>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...featuredDeals, ...dailyDeals]
                  .filter(
                    (deal) =>
                      deal.badge?.includes("Combo") ||
                      deal.badge?.includes("Bundle") ||
                      deal.badge?.includes("Free"),
                  )
                  .map((deal) => (
                    <DealCard key={`combo-${deal.id}`} deal={deal} />
                  ))}
              </div>
            </div>
          </TabsContent>

          {/* Coupons */}
          <TabsContent value="coupons" className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Percent className="w-6 h-6 text-success" />
                <h2 className="text-2xl font-bold">Coupon Codes</h2>
                <Badge className="bg-success">Save More</Badge>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {coupons.map((coupon, index) => (
                  <Card
                    key={index}
                    className="border-2 border-dashed border-success"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-success">
                          {coupon.code}
                        </CardTitle>
                        {coupon.isStackable && (
                          <Badge variant="outline" className="text-xs">
                            Stackable
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {coupon.description}
                      </p>
                      <div className="text-xs text-muted-foreground space-y-1">
                        {coupon.minOrder > 0 && (
                          <p>Min order: ${coupon.minOrder}</p>
                        )}
                        <p>Valid till: {coupon.expiry}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => copyCoupon(coupon.code)}
                      >
                        {copiedCoupon === coupon.code ? (
                          <>Copied!</>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy Code
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Bank Offers */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Bank & Payment Offers
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {bankOffers.map((offer, index) => (
                    <Card key={index} className="border-primary/20">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <offer.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{offer.bank}</h4>
                          <p className="text-sm text-muted-foreground">
                            {offer.offer}
                          </p>
                          <p className="text-xs text-primary font-medium">
                            Code: {offer.code}
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          Apply
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Quick Access Button (Mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <Button
          size="lg"
          className="h-14 w-14 rounded-full shadow-lg bg-destructive hover:bg-destructive/90 animate-bounce"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Flame className="h-6 w-6" />
        </Button>
      </div>

      {/* Sticky Deal Notification */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-success to-success/80 text-success-foreground p-4 md:hidden z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            <span className="text-sm font-medium">Free shipping $50+</span>
          </div>
          <Button size="sm" variant="secondary" className="text-xs">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}
