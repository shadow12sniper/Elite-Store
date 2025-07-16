import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
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

export default function Cart() {
  const {
    items: cartItems,
    updateQuantity,
    removeFromCart,
    getSubtotal,
    clearCart,
  } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
    type: "percentage" | "fixed";
  } | null>(null);
  const [shippingMethod, setShippingMethod] = useState("standard");

  const coupons = [
    { code: "SAVE20", discount: 20, type: "percentage" as const },
    {
      code: "FREESHIP",
      discount: 0,
      type: "fixed" as const,
      freeShipping: true,
    },
    { code: "NEWUSER15", discount: 15, type: "percentage" as const },
  ];

  const shippingOptions = [
    { id: "standard", name: "Standard Shipping", price: 5.99, days: "5-7" },
    { id: "express", name: "Express Shipping", price: 12.99, days: "2-3" },
    { id: "overnight", name: "Overnight", price: 24.99, days: "1" },
  ];

  const subtotal = getSubtotal();
  const shippingCost =
    appliedCoupon?.code === "FREESHIP"
      ? 0
      : shippingOptions.find((option) => option.id === shippingMethod)?.price ||
        5.99;
  const tax = subtotal * 0.08;
  const discount = appliedCoupon
    ? appliedCoupon.type === "percentage"
      ? subtotal * (appliedCoupon.discount / 100)
      : appliedCoupon.discount
    : 0;
  const total = subtotal - discount + shippingCost + tax;

  const applyCoupon = () => {
    const coupon = coupons.find((c) => c.code === couponCode.toUpperCase());
    if (coupon) {
      setAppliedCoupon(coupon);
      setCouponCode("");
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const moveToFavorites = (item: any) => {
    toggleFavorite({
      id: item.id,
      name: item.name,
      price: item.price,
      originalPrice: item.originalPrice,
      image: item.image,
      rating: 4.5,
      reviews: 100,
      category: item.category,
      brand: item.brand,
      inStock: item.inStock,
    });
    removeFromCart(item.id);
  };

  if (cartItems.length === 0) {
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
                <BreadcrumbPage>Cart</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Empty Cart */}
          <div className="text-center py-20">
            <ShoppingCart className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. Start
              shopping to fill it up!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/products">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/deals">
                  <Zap className="w-4 h-4 mr-2" />
                  Browse Deals
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              <BreadcrumbPage>Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={clearCart}>
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Cart
            </Button>
            <Button asChild>
              <Link to="/products">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg line-clamp-2">
                            {item.name}
                          </h3>
                          {item.variant && (
                            <p className="text-sm text-muted-foreground">
                              {Object.entries(item.variant)
                                .map(([key, value]) => `${key}: ${value}`)
                                .join(", ")}
                            </p>
                          )}
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary">{item.category}</Badge>
                            <Badge variant="outline">{item.brand}</Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">${item.price}</div>
                          {item.originalPrice &&
                            item.originalPrice !== item.price && (
                              <div className="text-sm text-muted-foreground line-through">
                                ${item.originalPrice}
                              </div>
                            )}
                        </div>
                      </div>

                      {/* Stock Status */}
                      <div className="flex items-center gap-2 mb-4">
                        {item.inStock ? (
                          <div className="flex items-center text-sm text-green-600">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            In Stock
                          </div>
                        ) : (
                          <div className="flex items-center text-sm text-red-600">
                            <AlertTriangle className="w-4 h-4 mr-1" />
                            Out of Stock
                          </div>
                        )}
                      </div>

                      {/* Quantity and Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
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
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => moveToFavorites(item)}
                          >
                            <Heart
                              className={cn(
                                "w-4 h-4 mr-1",
                                isFavorite(item.id)
                                  ? "fill-current text-red-500"
                                  : "",
                              )}
                            />
                            Save for Later
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
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
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Coupon Code */}
                <div>
                  <div className="flex gap-2 mb-2">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button onClick={applyCoupon} disabled={!couponCode}>
                      Apply
                    </Button>
                  </div>
                  {appliedCoupon && (
                    <div className="flex items-center justify-between bg-green-50 p-2 rounded text-sm">
                      <span className="text-green-700">
                        {appliedCoupon.code} applied
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={removeCoupon}
                        className="h-auto p-1 text-green-700"
                      >
                        Remove
                      </Button>
                    </div>
                  )}
                  <div className="text-xs text-muted-foreground mt-1">
                    Try: SAVE20, FREESHIP, NEWUSER15
                  </div>
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
                            <span>
                              {option.name} ({option.days} days)
                            </span>
                            <span>${option.price}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedCoupon.code})</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shippingCost === 0
                        ? "FREE"
                        : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
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

                <Button className="w-full" size="lg" asChild>
                  <Link to="/checkout">
                    <Lock className="w-4 h-4 mr-2" />
                    Secure Checkout
                  </Link>
                </Button>

                {/* Security Badge */}
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Your payment information is encrypted and secure
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
