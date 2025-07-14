import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/categories/:category"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Category Page</h1>
                    <p className="text-muted-foreground">Coming soon...</p>
                  </div>
                </div>
              }
            />
            <Route
              path="/deals"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Deals Page</h1>
                    <p className="text-muted-foreground">Coming soon...</p>
                  </div>
                </div>
              }
            />
            <Route
              path="/cart"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
                    <p className="text-muted-foreground">Coming soon...</p>
                  </div>
                </div>
              }
            />
            <Route
              path="/wishlist"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
                    <p className="text-muted-foreground">Coming soon...</p>
                  </div>
                </div>
              }
            />
            <Route
              path="/account"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">My Account</h1>
                    <p className="text-muted-foreground">Coming soon...</p>
                  </div>
                </div>
              }
            />
            <Route
              path="/orders"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Order History</h1>
                    <p className="text-muted-foreground">Coming soon...</p>
                  </div>
                </div>
              }
            />
            <Route
              path="/account/settings"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">
                      Account Settings
                    </h1>
                    <p className="text-muted-foreground">Coming soon...</p>
                  </div>
                </div>
              }
            />
            <Route
              path="/auth/login"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Sign In</h1>
                    <p className="text-muted-foreground">Coming soon...</p>
                  </div>
                </div>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
