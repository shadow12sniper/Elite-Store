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
  Smartphone,
  Laptop,
  Home,
  Shirt,
  Baby,
  Gamepad2,
  Car,
  Gift,
  ChevronRight,
  Package,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Index() {
  const { addToCart, isInCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { name: "Appliances", icon: Home, link: "/categories/appliances" },
    { name: "Phones & Tablets", icon: Smartphone, link: "/categories/phones" },
    { name: "Health & Beauty", icon: Heart, link: "/categories/beauty" },
    { name: "Home & Office", icon: Home, link: "/categories/home" },
    { name: "Electronics", icon: Laptop, link: "/categories/electronics" },
    { name: "Fashion", icon: Shirt, link: "/categories/fashion" },
    { name: "Computing", icon: Laptop, link: "/categories/computing" },
    { name: "Baby Products", icon: Baby, link: "/categories/baby" },
    { name: "Gaming", icon: Gamepad2, link: "/categories/gaming" },
    { name: "Sporting Goods", icon: Car, link: "/categories/sports" },
  ];

  const heroSlides = [
    {
      id: 1,
      title: "Aweeof the Month",
      subtitle: "July",
      mainProduct: {
        name: "Dr Teals Body Wash",
        price: "₦7,500",
        originalPrice: "₦10,500",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
      },
      sideProduct: {
        name: "Adidas Sneakers",
        price: "₦31,990",
        tag: "EXCLUSIVE",
        image:
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
      },
      bottomProduct: {
        name: "Pop Socket",
        price: "₦109,999",
        originalPrice: "₦140,335",
        image:
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
      },
    },
  ];

  const promoBanners = [
    {
      title: "Aweeof the Month",
      subtitle: "Up to 80% Off",
      bgColor: "bg-red-500",
      textColor: "text-white",
      link: "/deals/month",
    },
    {
      title: "★ FREE DELIVERY",
      subtitle: "FREE Delivery",
      bgColor: "bg-green-600",
      textColor: "text-white",
      link: "/shipping",
    },
    {
      title: "BUY 2 PAY 1",
      subtitle: "Select Items",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      link: "/deals/buy2pay1",
    },
    {
      title: "BUY 2 ITEMS",
      subtitle: "GET ₦950 OFF",
      bgColor: "bg-orange-500",
      textColor: "text-white",
      link: "/deals/discount",
    },
    {
      title: "JUMIA FORCE",
      subtitle: "JOIN NOW",
      bgColor: "bg-orange-600",
      textColor: "text-white",
      link: "/force",
    },
    {
      title: "Earn While You Sell",
      subtitle: "Start Selling",
      bgColor: "bg-gray-700",
      textColor: "text-white",
      link: "/sell",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 14 Pro Max",
      price: "₦580,000",
      originalPrice: "₦650,000",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      discount: "11%",
      rating: 4.5,
      reviews: 234,
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: "₦420,000",
      originalPrice: "₦480,000",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",
      discount: "13%",
      rating: 4.3,
      reviews: 189,
    },
    {
      id: 3,
      name: "MacBook Air M2",
      price: "₦750,000",
      originalPrice: "₦850,000",
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
      discount: "12%",
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 4,
      name: "Sony WH-1000XM4",
      price: "₦85,000",
      originalPrice: "₦105,000",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      discount: "19%",
      rating: 4.6,
      reviews: 298,
    },
  ];

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace(/[₦,]/g, "")),
      originalPrice: product.originalPrice
        ? parseFloat(product.originalPrice.replace(/[₦,]/g, ""))
        : undefined,
      image: product.image,
      inStock: true,
      category: "Electronics",
      brand: "EliteStore",
    });
  };

  const handleToggleFavorite = (product: any) => {
    toggleFavorite({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace(/[₦,]/g, "")),
      originalPrice: product.originalPrice
        ? parseFloat(product.originalPrice.replace(/[₦,]/g, ""))
        : undefined,
      image: product.image,
      rating: product.rating || 4.5,
      reviews: product.reviews || 100,
      category: "Electronics",
      brand: "EliteStore",
      inStock: true,
    });
  };

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Sidebar Categories */}
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-0">
                <div className="py-3 px-4 bg-orange-500 text-white font-semibold">
                  Categories
                </div>
                <div className="divide-y">
                  {categories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <Link
                        key={index}
                        to={category.link}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors group"
                      >
                        <Icon className="h-4 w-4 text-gray-500 group-hover:text-orange-500" />
                        <span className="text-sm text-gray-700 group-hover:text-orange-600">
                          {category.name}
                        </span>
                        <ChevronRight className="h-3 w-3 text-gray-400 ml-auto" />
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Hero Section */}
          <div className="lg:col-span-4">
            {/* Hero Banner */}
            <Card className="mb-6 overflow-hidden bg-gradient-to-r from-orange-400 to-orange-600">
              <CardContent className="p-0">
                <div className="relative h-80 bg-gradient-to-r from-orange-500 to-red-500">
                  <div className="absolute inset-0 flex items-center justify-between p-8">
                    {/* Left Content */}
                    <div className="text-white">
                      <h1 className="text-4xl font-bold mb-2">
                        Aweeof the Month
                      </h1>
                      <h2 className="text-6xl font-bold mb-4">July</h2>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <Truck className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-sm">Pay on</div>
                          <div className="font-semibold">Delivery</div>
                        </div>
                      </div>
                      <p className="text-sm opacity-90 mb-6">
                        *T&Cs Apply| Free Delivery
                      </p>
                      <Button
                        className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-6"
                        asChild
                      >
                        <Link to="/deals">SHOP NOW</Link>
                      </Button>
                    </div>

                    {/* Right Products */}
                    <div className="flex gap-4">
                      {/* Product 1 */}
                      <div className="bg-white rounded-xl p-4 shadow-lg">
                        <img
                          src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=120&h=120&fit=crop"
                          alt="Dr Teals"
                          className="w-20 h-20 object-cover rounded-lg mb-2"
                        />
                        <div className="text-xs text-gray-600 mb-1">
                          Dr Teals Body Wash
                        </div>
                        <div className="text-sm font-bold text-red-600">
                          ₦7,500
                        </div>
                        <div className="text-xs text-gray-500 line-through">
                          ₦10,500
                        </div>
                      </div>

                      {/* Product 2 - Featured */}
                      <div className="bg-white rounded-xl p-4 shadow-lg relative">
                        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">
                          EXCLUSIVE
                        </Badge>
                        <img
                          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=120&h=120&fit=crop"
                          alt="Adidas"
                          className="w-20 h-20 object-cover rounded-lg mb-2"
                        />
                        <div className="text-lg font-bold text-orange-600">
                          ₦31,990
                        </div>
                      </div>

                      {/* Product 3 */}
                      <div className="bg-white rounded-xl p-4 shadow-lg">
                        <div className="bg-orange-100 rounded-lg p-2 mb-2 text-center">
                          <div className="text-xs font-semibold">POP 9</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-1">
                          Pop Socket
                        </div>
                        <div className="text-sm font-bold text-green-600">
                          ₦109,999
                        </div>
                        <div className="text-xs text-gray-500 line-through">
                          ₦140,335
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Promo Banners Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
              {promoBanners.map((banner, index) => (
                <Link key={index} to={banner.link}>
                  <Card
                    className={cn(
                      "overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105",
                      banner.bgColor,
                    )}
                  >
                    <CardContent
                      className={cn("p-4 text-center", banner.textColor)}
                    >
                      <div className="font-bold text-sm mb-1">
                        {banner.title}
                      </div>
                      <div className="text-xs opacity-90">
                        {banner.subtitle}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Top Deals</h2>
            <Button variant="outline" asChild>
              <Link to="/products">
                See All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.discount && (
                      <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">
                        -{product.discount}
                      </Badge>
                    )}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleFavorite(product);
                        }}
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

                  <div className="p-3 space-y-2">
                    <h3 className="font-medium text-sm line-clamp-2 text-gray-800">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-lg font-bold text-orange-600">
                        {product.price}
                      </div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </div>
                      )}
                    </div>

                    <Button
                      size="sm"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {isInCart(product.id) ? "Added" : "Add to Cart"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mt-16 py-12 bg-white rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">FREE DELIVERY</h3>
                <p className="text-sm text-gray-600">Orders over ₦10,000</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <RotateCcw className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">EASY RETURNS</h3>
                <p className="text-sm text-gray-600">7-day return policy</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">SECURE PAYMENT</h3>
                <p className="text-sm text-gray-600">100% protected</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Headphones className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">24/7 SUPPORT</h3>
                <p className="text-sm text-gray-600">Always here to help</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
