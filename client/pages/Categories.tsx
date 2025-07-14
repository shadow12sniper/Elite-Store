import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Smartphone,
  Laptop,
  Headphones,
  Camera,
  Gamepad,
  Watch,
  Shirt,
  ShoppingBag,
  Crown,
  Home,
  Sofa,
  ChefHat,
  Dumbbell,
  Bike,
  Book,
  Palette,
  Baby,
  Search,
  TrendingUp,
  Star,
  Zap,
  ArrowRight,
  Heart,
  ShoppingCart,
  Filter,
  Grid3X3,
  Eye,
  Sparkles,
  Target,
  MapPin,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Categories() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedParentCategory, setSelectedParentCategory] = useState<
    string | null
  >(null);

  const mainCategories = [
    {
      id: "electronics",
      name: "Electronics",
      icon: Smartphone,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F64c6e6170dfb41c997c833f5332eee03",
      productCount: 2847,
      color: "from-blue-500 to-cyan-500",
      dealText: "Up to 60% Off",
      trending: ["Smartphones", "Laptops", "Headphones"],
      subcategories: [
        {
          name: "Mobile & Tablets",
          items: ["Smartphones", "Tablets", "Accessories", "Cases & Covers"],
          count: 892,
        },
        {
          name: "Computers",
          items: ["Laptops", "Desktops", "Components", "Peripherals"],
          count: 654,
        },
        {
          name: "Audio & Video",
          items: ["Headphones", "Speakers", "TV & Home Theater", "Cameras"],
          count: 478,
        },
        {
          name: "Gaming",
          items: ["Consoles", "Games", "Accessories", "PC Gaming"],
          count: 823,
        },
      ],
    },
    {
      id: "fashion",
      name: "Fashion",
      icon: Shirt,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F37580571b6874b36bc60fff960f1e845",
      productCount: 5239,
      color: "from-pink-500 to-purple-500",
      dealText: "New Season Sale",
      trending: ["Dresses", "Sneakers", "Bags"],
      subcategories: [
        {
          name: "Women's Fashion",
          items: ["Dresses", "Tops", "Bottoms", "Shoes", "Accessories"],
          count: 2456,
        },
        {
          name: "Men's Fashion",
          items: ["Shirts", "Pants", "Shoes", "Accessories", "Suits"],
          count: 1892,
        },
        {
          name: "Kids & Baby",
          items: ["Boys", "Girls", "Baby Clothing", "School Uniforms"],
          count: 891,
        },
      ],
    },
    {
      id: "home",
      name: "Home & Kitchen",
      icon: Home,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2Fb86cd9b4d4b8490e8e680289c39fef16",
      productCount: 1876,
      color: "from-green-500 to-emerald-500",
      dealText: "Home Makeover",
      trending: ["Coffee Makers", "Air Fryers", "Smart Home"],
      subcategories: [
        {
          name: "Furniture",
          items: ["Living Room", "Bedroom", "Dining", "Office"],
          count: 567,
        },
        {
          name: "Kitchen",
          items: ["Appliances", "Cookware", "Storage", "Dining"],
          count: 789,
        },
        {
          name: "Decor",
          items: ["Lighting", "Wall Art", "Rugs", "Plants"],
          count: 520,
        },
      ],
    },
    {
      id: "sports",
      name: "Sports & Outdoors",
      icon: Dumbbell,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2Ff215ae6483b64ba2a66ad39f235b3cd4",
      productCount: 967,
      color: "from-orange-500 to-red-500",
      dealText: "Fitness Goals",
      trending: ["Yoga Mats", "Running Shoes", "Protein"],
      subcategories: [
        {
          name: "Fitness",
          items: ["Gym Equipment", "Yoga", "Running", "Cycling"],
          count: 423,
        },
        {
          name: "Outdoor Sports",
          items: ["Camping", "Hiking", "Water Sports", "Winter Sports"],
          count: 344,
        },
        {
          name: "Team Sports",
          items: ["Football", "Basketball", "Soccer", "Baseball"],
          count: 200,
        },
      ],
    },
    {
      id: "books",
      name: "Books & Media",
      icon: Book,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F38c5e4ef6f8545daa1572c07ead7e14f",
      productCount: 1245,
      color: "from-amber-500 to-yellow-500",
      dealText: "Knowledge Sale",
      trending: ["Fiction", "Self-Help", "Tech Books"],
      subcategories: [
        {
          name: "Books",
          items: ["Fiction", "Non-Fiction", "Educational", "Children's"],
          count: 890,
        },
        {
          name: "Digital Media",
          items: ["E-books", "Audiobooks", "Software", "Games"],
          count: 355,
        },
      ],
    },
    {
      id: "beauty",
      name: "Beauty & Health",
      icon: Sparkles,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F44d3d9f05b0140bdbbb6589c07d6d85d",
      productCount: 834,
      color: "from-rose-500 to-pink-500",
      dealText: "Glow Up",
      trending: ["Skincare", "Makeup", "Vitamins"],
      subcategories: [
        {
          name: "Skincare",
          items: ["Face Care", "Body Care", "Sun Protection", "Anti-Aging"],
          count: 456,
        },
        {
          name: "Makeup",
          items: ["Face", "Eyes", "Lips", "Tools"],
          count: 234,
        },
        {
          name: "Health",
          items: ["Vitamins", "Supplements", "Personal Care", "Wellness"],
          count: 144,
        },
      ],
    },
  ];

  const bestSellers = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 999,
      originalPrice: 1199,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F64c6e6170dfb41c997c833f5332eee03",
      category: "Electronics",
      rating: 4.9,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Nike Air Max",
      price: 129,
      originalPrice: 179,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F37580571b6874b36bc60fff960f1e845",
      category: "Fashion",
      rating: 4.8,
      badge: "Trending",
    },
    {
      id: 3,
      name: "Smart Coffee Maker",
      price: 199,
      originalPrice: 299,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2Fb86cd9b4d4b8490e8e680289c39fef16",
      category: "Home",
      rating: 4.7,
      badge: "Deal",
    },
  ];

  const recommendedCategories = [
    {
      id: "near-you",
      title: "Popular Near You",
      icon: MapPin,
      categories: ["Local Stores", "Same-Day Delivery", "Regional Brands"],
      description: "Top picks in your area",
    },
    {
      id: "recently-viewed",
      title: "Based on Your Browsing",
      icon: Eye,
      categories: ["Electronics", "Gadgets", "Tech Accessories"],
      description: "Continue where you left off",
    },
    {
      id: "trending",
      title: "Trending This Week",
      icon: TrendingUp,
      categories: ["Smart Home", "Fitness", "Sustainable Products"],
      description: "What everyone's buying",
    },
  ];

  const filteredCategories = mainCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.subcategories.some(
        (sub) =>
          sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sub.items.some((item) =>
            item.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      ),
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Explore All Categories
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-6">
            Discover thousands of products across all categories
          </p>
          <Badge className="bg-white text-primary font-bold text-lg px-6 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Free Shipping on $50+
          </Badge>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Categories</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Search and Quick Stats */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                <span>15,000+ Products</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Updated Daily</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Categories Grid */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Grid3X3 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Shop by Category</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <Link key={category.id} to={`/categories/${category.id}`}>
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20`}
                    />
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-primary font-bold">
                        {category.dealText}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <category.icon className="w-5 h-5 text-primary" />
                          <h3 className="font-bold text-lg">{category.name}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {category.productCount.toLocaleString()} products
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-1">
                            {category.trending.slice(0, 2).map((item, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs"
                              >
                                {item}
                              </Badge>
                            ))}
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Subcategories Accordion */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Browse Subcategories</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {mainCategories.slice(0, 4).map((category) => (
              <Card key={category.id} className="p-4">
                <Accordion type="single" collapsible>
                  <AccordionItem value={category.id} className="border-none">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}
                        >
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="font-semibold">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {category.productCount.toLocaleString()} products
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 mt-4">
                        {category.subcategories.map((sub, idx) => (
                          <div key={idx} className="border rounded-lg p-3">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium">{sub.name}</h4>
                              <Badge variant="outline">{sub.count}</Badge>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {sub.items.map((item, itemIdx) => (
                                <Link
                                  key={itemIdx}
                                  to={`/categories/${category.id}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                  className="text-xs text-primary hover:underline"
                                >
                                  {item}
                                  {itemIdx < sub.items.length - 1 && " •"}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            ))}
          </div>
        </section>

        {/* Best Sellers Across Categories */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">
              Best Sellers Across Categories
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellers.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-t-lg flex items-center justify-center transition-colors">
                      <Eye className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <Badge className="absolute top-3 left-3 bg-primary">
                      {product.badge}
                    </Badge>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8"
                      >
                        <Heart className="h-4 w-4" />
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
                        {product.rating}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {product.category}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">
                          ${product.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Personalized Recommendations */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Recommended for You</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recommendedCategories.map((rec) => (
              <Card
                key={rec.id}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <rec.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{rec.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {rec.description}
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-2">
                    {rec.categories.map((cat, idx) => (
                      <Link
                        key={idx}
                        to={`/categories/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block p-2 rounded hover:bg-muted transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{cat}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Category Quick Actions */}
        <section className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground">
              Use our advanced search or browse by specific criteria
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <Search className="w-6 h-6" />
              <span>Advanced Search</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <TrendingUp className="w-6 h-6" />
              <span>Trending Now</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <Star className="w-6 h-6" />
              <span>Top Rated</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <Zap className="w-6 h-6" />
              <span>Flash Deals</span>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
