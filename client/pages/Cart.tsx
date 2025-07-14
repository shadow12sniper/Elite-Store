import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Heart,
  ArrowLeft,
  Shield,
  Truck,
  Clock,
  CheckCircle,
  AlertTriangle,
  Tag,
  CreditCard,
  Lock,
  Info,
  Star,
  Eye,
  Package,
  Award,
  Zap,
  Smartphone,
  Monitor,
  Headphones,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  quantity: number;
  variant?: {
    size?: string;
    color?: string;
    model?: string;
  };
  inStock: boolean;
  stockCount: number;
  estimatedDelivery: string;
  rating: number;
  reviews: number;
  description?: string;
  features?: string[];
  specifications?: { [key: string]: string };
  category: string;
  brand: string;
  reviewSummary?: {
    totalReviews: number;
    averageRating: number;
    ratingBreakdown: { [key: number]: number };
    topReviews: Array<{
      user: string;
      rating: number;
      comment: string;
      date: string;
      verified: boolean;
    }>;
  };
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Smart Watch Pro Series",
      price: 149.99,
      originalPrice: 299.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F64c6e6170dfb41c997c833f5332eee03",
      quantity: 2,
      variant: { color: "Space Gray", size: "42mm" },
      inStock: true,
      stockCount: 12,
      estimatedDelivery: "Dec 24-26",
      rating: 4.8,
      reviews: 245,
    },
    {
      id: "2",
      name: "Wireless Headphones",
      price: 99.99,
      originalPrice: 199.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F44d3d9f05b0140bdbbb6589c07d6d85d",
      quantity: 1,
      variant: { color: "Midnight Blue" },
      inStock: true,
      stockCount: 8,
      estimatedDelivery: "Dec 22-24",
      rating: 4.7,
      reviews: 189,
    },
    {
      id: "3",
      name: "Gaming Keyboard",
      price: 79.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2Fbd44033fd7f048c990dbef1d7f0c23bb",
      quantity: 1,
      variant: { color: "RGB", model: "Mechanical" },
      inStock: false,
      stockCount: 0,
      estimatedDelivery: "Jan 2-5",
      rating: 4.5,
      reviews: 98,
    },
  ]);

  const [savedItems, setSavedItems] = useState<CartItem[]>([]);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
    type: "percentage" | "fixed";
  } | null>(null);
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [currentStep, setCurrentStep] = useState(1);

  const availableCoupons = [
    {
      code: "SAVE20",
      discount: 20,
      type: "percentage" as const,
      minOrder: 100,
    },
    { code: "FREESHIP", discount: 0, type: "fixed" as const, minOrder: 50 },
    {
      code: "NEWUSER15",
      discount: 15,
      type: "percentage" as const,
      minOrder: 0,
    },
  ];

  const shippingOptions = [
    {
      id: "standard",
      name: "Standard Shipping",
      price: 5.99,
      days: "5-7 business days",
    },
    {
      id: "express",
      name: "Express Shipping",
      price: 12.99,
      days: "2-3 business days",
    },
    {
      id: "overnight",
      name: "Overnight Delivery",
      price: 24.99,
      days: "Next business day",
    },
  ];

  // Calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping =
    shippingMethod === "standard"
      ? 5.99
      : shippingMethod === "express"
        ? 12.99
        : 24.99;
  const freeShippingThreshold = 50;
  const actualShipping = subtotal >= freeShippingThreshold ? 0 : shipping;

  const couponDiscount = appliedCoupon
    ? appliedCoupon.type === "percentage"
      ? subtotal * (appliedCoupon.discount / 100)
      : appliedCoupon.discount
    : 0;

  const tax = (subtotal - couponDiscount) * 0.08; // 8% tax
  const total = subtotal + actualShipping + tax - couponDiscount;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(newQuantity, item.stockCount || 999) }
          : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const moveToSaved = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      setSavedItems([...savedItems, { ...item, quantity: 1 }]);
      setCartItems(cartItems.filter((item) => item.id !== id));
    }
  };

  const moveToCart = (id: string) => {
    const item = savedItems.find((item) => item.id === id);
    if (item) {
      setCartItems([...cartItems, item]);
      setSavedItems(savedItems.filter((item) => item.id !== id));
    }
  };

  const applyCoupon = () => {
    const coupon = availableCoupons.find(
      (c) => c.code === couponCode.toUpperCase(),
    );
    if (coupon && subtotal >= coupon.minOrder) {
      setAppliedCoupon(coupon);
      setCouponCode("");
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const CartItemCard = ({
    item,
    showMoveToCart = false,
  }: {
    item: CartItem;
    showMoveToCart?: boolean;
  }) => (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="relative w-24 h-24 flex-shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-lg"
            />
            {!item.inStock && (
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                <Badge variant="destructive" className="text-xs">
                  Out of Stock
                </Badge>
              </div>
            )}
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(item.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span>({item.reviews})</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">${item.price}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${item.originalPrice}
                    </span>
                  )}
                </div>
                {item.originalPrice && (
                  <Badge variant="outline" className="text-xs">
                    {Math.round(
                      ((item.originalPrice - item.price) / item.originalPrice) *
                        100,
                    )}
                    % OFF
                  </Badge>
                )}
              </div>
            </div>

            {item.variant && (
              <div className="flex gap-4 text-sm text-muted-foreground">
                {item.variant.color && <span>Color: {item.variant.color}</span>}
                {item.variant.size && <span>Size: {item.variant.size}</span>}
                {item.variant.model && <span>Model: {item.variant.model}</span>}
              </div>
            )}

            <div className="flex items-center gap-2 text-sm">
              <Truck className="w-4 h-4 text-success" />
              <span className="text-success">
                Estimated delivery: {item.estimatedDelivery}
              </span>
            </div>

            {item.inStock && item.stockCount < 10 && (
              <div className="flex items-center gap-2 text-sm text-warning">
                <AlertTriangle className="w-4 h-4" />
                <span>Only {item.stockCount} left in stock</span>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              {!showMoveToCart ? (
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={!item.inStock}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    disabled={!item.inStock || item.quantity >= item.stockCount}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => moveToCart(item.id)}
                  className="text-primary"
                >
                  Move to Cart
                </Button>
              )}

              <div className="flex gap-2">
                {!showMoveToCart && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => moveToSaved(item.id)}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Heart className="w-4 h-4 mr-1" />
                    Save for Later
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    showMoveToCart
                      ? setSavedItems(
                          savedItems.filter((i) => i.id !== item.id),
                        )
                      : removeItem(item.id)
                  }
                  className="text-destructive hover:text-destructive/80"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Shopping Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {[
              { step: 1, title: "Cart", icon: ShoppingCart },
              { step: 2, title: "Shipping", icon: Truck },
              { step: 3, title: "Payment", icon: CreditCard },
              { step: 4, title: "Confirmation", icon: CheckCircle },
            ].map(({ step, title, icon: Icon }) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    step === currentStep
                      ? "bg-primary text-primary-foreground"
                      : step < currentStep
                        ? "bg-success text-success-foreground"
                        : "bg-muted text-muted-foreground",
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={cn(
                    "text-sm font-medium hidden md:block",
                    step === currentStep
                      ? "text-primary"
                      : "text-muted-foreground",
                  )}
                >
                  {title}
                </span>
                {step < 4 && (
                  <div className="w-8 md:w-16 h-0.5 bg-muted ml-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <ShoppingCart className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet
            </p>
            <Button size="lg" asChild>
              <Link to="/products">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                  Shopping Cart ({cartItems.length} items)
                </h1>
                <Button variant="outline" asChild>
                  <Link to="/products">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>

              {/* Stock Alerts */}
              {cartItems.some((item) => !item.inStock) && (
                <Alert className="border-warning">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Some items in your cart are out of stock. They'll be saved
                    for later.
                  </AlertDescription>
                </Alert>
              )}

              {/* Free Shipping Progress */}
              {subtotal < freeShippingThreshold && (
                <Alert className="border-info">
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Add ${(freeShippingThreshold - subtotal).toFixed(2)} more to
                    qualify for FREE shipping!
                  </AlertDescription>
                </Alert>
              )}

              {/* Cart Items */}
              <div>
                {cartItems.map((item) => (
                  <CartItemCard key={item.id} item={item} />
                ))}
              </div>

              {/* Saved for Later */}
              {savedItems.length > 0 && (
                <div className="pt-8 border-t">
                  <h2 className="text-xl font-bold mb-4">
                    Saved for Later ({savedItems.length} items)
                  </h2>
                  <div>
                    {savedItems.map((item) => (
                      <CartItemCard
                        key={`saved-${item.id}`}
                        item={item}
                        showMoveToCart
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary - Sticky on Desktop */}
            <div className="lg:sticky lg:top-6 lg:self-start">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Coupon Code */}
                  <div>
                    <div className="flex gap-2 mb-2">
                      <Input
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && applyCoupon()}
                      />
                      <Button onClick={applyCoupon} variant="outline">
                        Apply
                      </Button>
                    </div>
                    {appliedCoupon && (
                      <div className="flex items-center justify-between text-sm text-success">
                        <span>Coupon: {appliedCoupon.code}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={removeCoupon}
                          className="h-auto p-1 text-muted-foreground"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    )}
                  </div>

                  <Separator />

                  {/* Shipping Method */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Shipping Method
                    </label>
                    <Select
                      value={shippingMethod}
                      onValueChange={setShippingMethod}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {shippingOptions.map((option) => (
                          <SelectItem key={option.id} value={option.id}>
                            <div className="flex justify-between w-full">
                              <span>{option.name}</span>
                              <span>${option.price}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground mt-1">
                      {
                        shippingOptions.find((o) => o.id === shippingMethod)
                          ?.days
                      }
                    </p>
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span
                        className={cn(
                          actualShipping === 0 &&
                            subtotal >= freeShippingThreshold &&
                            "text-success",
                        )}
                      >
                        {actualShipping === 0 &&
                        subtotal >= freeShippingThreshold
                          ? "FREE"
                          : `$${actualShipping.toFixed(2)}`}
                      </span>
                    </div>
                    {appliedCoupon && (
                      <div className="flex justify-between text-success">
                        <span>Discount ({appliedCoupon.code})</span>
                        <span>-${couponDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  {/* Security Badge */}
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                    <Shield className="w-4 h-4 text-success" />
                    <Lock className="w-4 h-4 text-success" />
                    <span>Secure checkout powered by SSL</span>
                  </div>

                  {/* Checkout Button */}
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/checkout">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Checkout Securely
                    </Link>
                  </Button>

                  {/* Estimated Delivery */}
                  <div className="text-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Estimated delivery: Dec 22-26
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sticky Checkout (only show when cart has items) */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t lg:hidden z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold">${total.toFixed(2)}</div>
                <div className="text-sm text-muted-foreground">
                  {cartItems.length} items
                </div>
              </div>
              <Button size="lg" asChild>
                <Link to="/checkout">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Checkout
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
