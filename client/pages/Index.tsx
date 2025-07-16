import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import {
  ArrowRight,
  Star,
  Truck,
  Shield,
  Headphones,
  Zap,
  Heart,
  ShoppingCart,
  Clock,
  Flame,
  Target,
  ChevronLeft,
  ChevronRight,
  Percent,
  Gift,
  ShoppingBag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Index() {
  const { addToCart, isInCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [currentDealIndex, setCurrentDealIndex] = useState(0);

  const dealsCarousel = [
    {
      id: 1,
      title: "Flash Sale Alert!",
      subtitle: "Up to 70% Off Electronics",
      description:
        "Limited time offer on premium headphones, smartwatches, and more tech essentials.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
      badge: "70% OFF",
      badgeColor: "bg-red-500",
      bgGradient: "from-red-500/20 to-pink-500/20",
      dealUrl: "/deals?category=electronics",
      timeLeft: "2:45:30",
      icon: Zap,
    },
    {
      id: 2,
      title: "Weekend Special",
      subtitle: "Buy 2 Get 1 Free Fashion",
      description:
        "Mix and match your favorite clothing items. Third item automatically discounted.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      badge: "B2G1 FREE",
      badgeColor: "bg-purple-500",
      bgGradient: "from-purple-500/20 to-blue-500/20",
      dealUrl: "/deals?category=fashion",
      timeLeft: "1:12:15",
      icon: ShoppingBag,
    },
    {
      id: 3,
      title: "New Customer Bonus",
      subtitle: "25% Off First Order",
      description:
        "Welcome bonus for new shoppers. Use code WELCOME25 at checkout for instant savings.",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop",
      badge: "25% OFF",
      badgeColor: "bg-green-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      dealUrl: "/deals?type=new-customer",
      timeLeft: "23:55:42",
      icon: Gift,
    },
    {
      id: 4,
      title: "Clearance Blowout",
      subtitle: "Up to 80% Off Home Goods",
      description:
        "Last chance to grab premium home and kitchen items at unbeatable prices.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      badge: "80% OFF",
      badgeColor: "bg-orange-500",
      bgGradient: "from-orange-500/20 to-yellow-500/20",
      dealUrl: "/deals?category=home",
      timeLeft: "4:33:18",
      icon: Percent,
    },
  ];

  // Auto-rotate deals every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDealIndex((prev) => (prev + 1) % dealsCarousel.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [dealsCarousel.length]);

  const goToPreviousDeal = () => {
    setCurrentDealIndex((prev) =>
      prev === 0 ? dealsCarousel.length - 1 : prev - 1,
    );
  };

  const goToNextDeal = () => {
    setCurrentDealIndex((prev) => (prev + 1) % dealsCarousel.length);
  };

  const currentDeal = dealsCarousel[currentDealIndex];

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      inStock: true,
      category: "Electronics",
      brand: "TechPro",
    });
  };

  const handleToggleFavorite = (product: any) => {
    toggleFavorite({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      rating: product.rating,
      reviews: product.reviews,
      category: "Electronics",
      brand: "TechPro",
      inStock: true,
    });
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones Pro",
      price: 199.99,
      originalPrice: 249.99,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 245,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      price: 299.99,
      originalPrice: 399.99,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 189,
      badge: "New",
    },
    {
      id: 3,
      name: "Gaming Laptop Ultra",
      price: 1299.99,
      originalPrice: 1599.99,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 98,
      badge: "Limited",
    },
    {
      id: 4,
      name: "4K Webcam",
      price: 89.99,
      originalPrice: 129.99,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 156,
      badge: "Sale",
    },
  ];

  const categories = [
    {
      name: "Electronics",
      image: "/placeholder.svg",
      itemCount: "2,500+",
      link: "/categories/electronics",
    },
    {
      name: "Fashion",
      image: "/placeholder.svg",
      itemCount: "5,200+",
      link: "/categories/fashion",
    },
    {
      name: "Home & Garden",
      image: "/placeholder.svg",
      itemCount: "1,800+",
      link: "/categories/home",
    },
    {
      name: "Sports",
      image: "/placeholder.svg",
      itemCount: "950+",
      link: "/categories/sports",
    },
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $50",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% protected",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated support",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Same day available",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="w-fit mx-auto">
                  <Zap className="w-3 h-3 mr-1" />
                  New Collection 2024
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Discover Amazing
                  <span className="text-primary block">Products</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Shop the latest trends with unbeatable prices and premium
                  quality. Free shipping on orders over $50.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/products">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/deals">View Deals</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deals Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">🔥 Hot Deals Alert</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on these incredible limited-time offers. Save big
              on your favorite products!
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Main Deal Card */}
            <Card className="overflow-hidden bg-gradient-to-r from-background to-muted/50 border-2">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Deal Content */}
                  <div
                    className={cn(
                      "p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br",
                      currentDeal.bgGradient,
                    )}
                  >
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <Badge
                        className={cn(
                          "text-white font-bold px-3 py-1.5 text-sm",
                          currentDeal.badgeColor,
                        )}
                      >
                        {currentDeal.badge}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="font-mono font-medium">
                          {currentDeal.timeLeft}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-2">
                        <currentDeal.icon className="h-6 w-6 text-primary" />
                        <h3 className="text-2xl lg:text-3xl font-bold">
                          {currentDeal.title}
                        </h3>
                      </div>
                      <h4 className="text-xl lg:text-2xl text-primary font-semibold">
                        {currentDeal.subtitle}
                      </h4>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {currentDeal.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild size="lg" className="flex-1">
                        <Link to={currentDeal.dealUrl}>
                          Learn More & Shop Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link to="/deals">View All Deals</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Deal Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={currentDeal.image}
                      alt={currentDeal.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button
                variant="outline"
                size="icon"
                className="-ml-6 bg-background/90 backdrop-blur hover:bg-background shadow-lg"
                onClick={goToPreviousDeal}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button
                variant="outline"
                size="icon"
                className="-mr-6 bg-background/90 backdrop-blur hover:bg-background shadow-lg"
                onClick={goToNextDeal}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {dealsCarousel.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentDealIndex === index
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                  )}
                  onClick={() => setCurrentDealIndex(index)}
                />
              ))}
            </div>

            {/* Mini Deal Previews */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {dealsCarousel.map((deal, index) => {
                const Icon = deal.icon;
                return (
                  <Card
                    key={deal.id}
                    className={cn(
                      "cursor-pointer transition-all duration-300 hover:shadow-md",
                      currentDealIndex === index
                        ? "ring-2 ring-primary bg-primary/5"
                        : "hover:bg-muted/50",
                    )}
                    onClick={() => setCurrentDealIndex(index)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold",
                            deal.badgeColor,
                          )}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm truncate">
                            {deal.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {deal.badge}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deals Preview */}
      <section className="py-20 bg-gradient-to-r from-destructive/10 via-destructive/5 to-destructive/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Flame className="w-8 h-8 text-destructive animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold">Hot Deals</h2>
              <Flame className="w-8 h-8 text-destructive animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Limited time offers with incredible savings
            </p>
            <div className="flex justify-center items-center gap-4 text-lg font-mono mb-8">
              <div className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg shadow-lg">
                <span className="block text-xs text-destructive-foreground/80">
                  Hours
                </span>
                12
              </div>
              <span className="text-destructive animate-pulse">:</span>
              <div className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg shadow-lg">
                <span className="block text-xs text-destructive-foreground/80">
                  Min
                </span>
                34
              </div>
              <span className="text-destructive animate-pulse">:</span>
              <div className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg shadow-lg">
                <span className="block text-xs text-destructive-foreground/80">
                  Sec
                </span>
                56
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Deal 1 - Smart Watch */}
            <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-destructive/20">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F64c6e6170dfb41c997c833f5332eee03"
                    alt="Smart Watch Pro"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <Badge className="bg-destructive font-bold animate-pulse">
                      <Flame className="w-3 h-3 mr-1" />
                      Flash Sale
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-destructive font-bold"
                    >
                      50% OFF
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge
                      variant="destructive"
                      className="w-full justify-center animate-pulse"
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      Ends in 12h 34m
                    </Badge>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg">
                    Smart Watch Pro Series
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-destructive">
                        $149.99
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        $299.99
                      </span>
                    </div>
                    <div className="text-sm text-success font-medium">
                      You save $150.00
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < 4
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(245)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Deal 2 - Wireless Headphones */}
            <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-destructive/20">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F44d3d9f05b0140bdbbb6589c07d6d85d"
                    alt="Wireless Headphones"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <Badge className="bg-warning font-bold">
                      <Target className="w-3 h-3 mr-1" />
                      Limited
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-destructive font-bold"
                    >
                      50% OFF
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge
                      variant="destructive"
                      className="w-full justify-center"
                    >
                      <Flame className="w-3 h-3 mr-1" />
                      Only 8 left!
                    </Badge>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg">
                    Wireless Headphones Pro
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-destructive">
                        $99.99
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        $199.99
                      </span>
                    </div>
                    <div className="text-sm text-success font-medium">
                      You save $100.00
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < 4
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(189)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Deal 3 - Gaming Laptop */}
            <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-destructive/20">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2Fbd44033fd7f048c990dbef1d7f0c23bb"
                    alt="Gaming Laptop"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <Badge className="bg-info font-bold">
                      <Zap className="w-3 h-3 mr-1" />
                      Combo Deal
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-destructive font-bold"
                    >
                      31% OFF
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge
                      variant="destructive"
                      className="w-full justify-center"
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      Ends in 1d 12h
                    </Badge>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg">
                    Gaming Laptop Bundle
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-destructive">
                        $899.99
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        $1299.99
                      </span>
                    </div>
                    <div className="text-sm text-success font-medium">
                      You save $400.00
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < 4
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(98)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-destructive hover:bg-destructive/90 text-lg px-8 py-6"
              asChild
            >
              <Link to="/deals">
                <Flame className="w-5 h-5 mr-2" />
                View All Hot Deals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium products
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3">
                      {product.badge}
                    </Badge>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8"
                        onClick={() => handleToggleFavorite(product)}
                      >
                        <Heart
                          className={cn(
                            "h-4 w-4",
                            isFavorite(product.id)
                              ? "fill-current text-red-500"
                              : "",
                          )}
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                    <h3 className="font-semibold line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold">
                            ${product.price}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-muted-foreground">
              Find exactly what you're looking for
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={category.link}>
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-8 h-8"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.itemCount} items
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-primary/80 border-0">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Ready to Start Shopping?
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Join thousands of satisfied customers and discover amazing
                products at unbeatable prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/products">Start Shopping</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link to="/deals">View Deals</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
