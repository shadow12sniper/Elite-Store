import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  Star,
  Heart,
  ShoppingCart,
  Filter,
  SlidersHorizontal,
  Grid3X3,
  List,
  Eye,
  Package,
  Award,
  Zap,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || "",
  );
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Update search query when URL params change
  useEffect(() => {
    const urlSearch = searchParams.get("search");
    if (urlSearch) {
      setSearchQuery(urlSearch);
    }
  }, [searchParams]);

  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 199.99,
      originalPrice: 249.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F38c5e4ef6f8545daa1572c07ead7e14f",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F38c5e4ef6f8545daa1572c07ead7e14f",
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F44d3d9f05b0140bdbbb6589c07d6d85d",
      ],
      rating: 4.8,
      reviews: 245,
      badge: "Best Seller",
      category: "Electronics",
      brand: "TechPro",
      inStock: true,
      stockCount: 25,
      estimatedDelivery: "Dec 22-24",
      description:
        "Premium wireless headphones with active noise cancellation, 30-hour battery, and studio-quality sound. Perfect for music, calls, and travel.",
      features: [
        "Active noise cancellation",
        "30-hour battery life",
        "Quick charge (5 min = 3 hours)",
        "Premium sound quality",
        "Comfortable over-ear design",
        "Voice assistant support",
        "Foldable design",
        "Multi-device connectivity",
      ],
      specifications: {
        "Driver Size": "40mm dynamic drivers",
        "Frequency Response": "20Hz - 20kHz",
        "Battery Life": "30 hours with ANC off, 20 hours with ANC on",
        Charging: "USB-C, 5min quick charge = 3 hours",
        Weight: "290g",
        Connectivity: "Bluetooth 5.2, 3.5mm jack",
        "Noise Cancellation": "Active ANC up to 30dB reduction",
        Microphone: "Dual beamforming mics",
      },
      reviewSummary: {
        totalReviews: 245,
        averageRating: 4.8,
        ratingBreakdown: { 5: 185, 4: 40, 3: 15, 2: 3, 1: 2 },
        topReviews: [
          {
            user: "Alex K.",
            rating: 5,
            comment:
              "Incredible sound quality and the noise cancellation is fantastic for flights.",
            date: "Dec 12, 2024",
            verified: true,
          },
          {
            user: "Emma L.",
            rating: 4,
            comment:
              "Very comfortable for long listening sessions. Great value for the price.",
            date: "Dec 8, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      price: 299.99,
      originalPrice: 399.99,
      image:
        "https://cartzilla.madrasthemes.com/electronics/wp-content/uploads/sites/2/2020/03/7.jpg",
      images: [
        "https://cartzilla.madrasthemes.com/electronics/wp-content/uploads/sites/2/2020/03/7.jpg",
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F64c6e6170dfb41c997c833f5332eee03",
      ],
      rating: 4.9,
      reviews: 189,
      badge: "New",
      category: "Electronics",
      brand: "SmartTech",
      inStock: true,
      stockCount: 15,
      estimatedDelivery: "Dec 24-26",
      description:
        "Advanced smartwatch with health monitoring, GPS tracking, and 7-day battery life. Features include heart rate monitoring, sleep tracking, water resistance up to 50m, and smart notifications.",
      features: [
        "7-day battery life",
        "Heart rate monitoring",
        "GPS tracking",
        "Water resistant (50m)",
        "Sleep tracking",
        "Smart notifications",
        "Fitness tracking",
        "Voice assistant",
      ],
      specifications: {
        Display: '1.4" AMOLED, 454x454 resolution',
        Battery: "7 days typical use",
        Connectivity: "Bluetooth 5.0, WiFi, GPS",
        Sensors: "Heart rate, SpO2, Accelerometer, Gyroscope",
        "Water Resistance": "5ATM (50 meters)",
        Compatibility: "iOS 12+, Android 6+",
        Storage: "4GB internal",
        Weight: "52g",
      },
      reviewSummary: {
        totalReviews: 189,
        averageRating: 4.9,
        ratingBreakdown: { 5: 155, 4: 25, 3: 7, 2: 1, 1: 1 },
        topReviews: [
          {
            user: "Sarah M.",
            rating: 5,
            comment:
              "Amazing battery life and accurate health tracking. Best smartwatch I've owned!",
            date: "Dec 15, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 3,
      name: "Gaming Laptop Ultra",
      price: 1299.99,
      originalPrice: 1599.99,
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      images: [
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      ],
      rating: 4.7,
      reviews: 98,
      badge: "Limited",
      category: "Electronics",
      brand: "GameMax",
      inStock: false,
      stockCount: 0,
      estimatedDelivery: "Jan 2-5",
      description:
        "High-performance gaming laptop with RTX 4080, Intel i7-13th gen, 32GB RAM, and 1TB SSD. Built for the most demanding games and creative work.",
      features: [
        "NVIDIA RTX 4080 GPU",
        "Intel Core i7-13th Gen",
        "32GB DDR5 RAM",
        "1TB NVMe SSD",
        '15.6" 144Hz Display',
        "RGB Mechanical Keyboard",
        "Advanced Cooling System",
        "Wi-Fi 6E & Bluetooth 5.3",
      ],
      specifications: {
        Processor: "Intel Core i7-13700HX",
        Graphics: "NVIDIA GeForce RTX 4080 8GB",
        RAM: "32GB DDR5-4800MHz",
        Storage: "1TB PCIe Gen4 NVMe SSD",
        Display: '15.6" FHD 144Hz IPS',
        Keyboard: "RGB Backlit Mechanical",
        Ports: "USB-C, USB 3.2, HDMI 2.1, Ethernet",
        Weight: "2.3kg",
      },
      reviewSummary: {
        totalReviews: 98,
        averageRating: 4.7,
        ratingBreakdown: { 5: 70, 4: 20, 3: 6, 2: 1, 1: 1 },
        topReviews: [
          {
            user: "Gaming Pro",
            rating: 5,
            comment:
              "Runs every game at max settings flawlessly. The cooling is excellent too.",
            date: "Dec 5, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 4,
      name: "4K Webcam Pro",
      price: 89.99,
      originalPrice: 129.99,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.5jUMMFAQCY47WNPwiwqGBQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      images: [
        "https://tse4.mm.bing.net/th/id/OIP.5jUMMFAQCY47WNPwiwqGBQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      ],
      rating: 4.6,
      reviews: 156,
      badge: "Sale",
      category: "Electronics",
      brand: "VisionTech",
      inStock: true,
      stockCount: 18,
      estimatedDelivery: "Dec 20-22",
      description:
        "Professional 4K webcam with auto-focus, HDR, and AI-powered background blur. Perfect for streaming, video calls, and content creation.",
      features: [
        "4K @ 30fps recording",
        "Auto-focus technology",
        "HDR image processing",
        "AI background blur",
        "Built-in stereo microphones",
        "USB-C connectivity",
        "Privacy shutter",
        "Universal mount",
      ],
      specifications: {
        Resolution: "4K (3840x2160) @ 30fps",
        "Field of View": "90° diagonal",
        Focus: "Auto-focus with face detection",
        Microphone: "Dual stereo with noise reduction",
        Connection: "USB-C 3.0",
        Compatibility: "Windows, Mac, Linux",
        Mount: 'Standard 1/4" tripod thread',
        Dimensions: "95 x 30 x 30mm",
      },
      reviewSummary: {
        totalReviews: 156,
        averageRating: 4.6,
        ratingBreakdown: { 5: 95, 4: 45, 3: 12, 2: 3, 1: 1 },
        topReviews: [
          {
            user: "Streamer Dave",
            rating: 5,
            comment:
              "Crystal clear 4K quality. The auto-focus works perfectly for streaming.",
            date: "Dec 10, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 5,
      name: "Wireless Mouse Precision",
      price: 59.99,
      originalPrice: 79.99,
      image:
        "https://th.bing.com/th/id/R.dc5f48fc2df53891f919d73016eb00f5?rik=D199iowTaFGUuw&pid=ImgRaw&r=0",
      images: [
        "https://th.bing.com/th/id/R.dc5f48fc2df53891f919d73016eb00f5?rik=D199iowTaFGUuw&pid=ImgRaw&r=0",
      ],
      rating: 4.5,
      reviews: 324,
      badge: "",
      category: "Electronics",
      brand: "TechPro",
      inStock: true,
      stockCount: 42,
      estimatedDelivery: "Dec 21-23",
      description:
        "Ergonomic wireless mouse with precision tracking, programmable buttons, and 3-month battery life. Ideal for work and gaming.",
      features: [
        "Precision optical sensor",
        "Programmable buttons",
        "3-month battery life",
        "Ergonomic design",
        "2.4GHz wireless",
        "DPI adjustment",
        "Silent clicking",
        "USB receiver storage",
      ],
      specifications: {
        Sensor: "Optical, up to 1600 DPI",
        Buttons: "6 programmable buttons",
        Battery: "AA battery, 3 months life",
        Connection: "2.4GHz wireless receiver",
        Range: "10 meters",
        Compatibility: "Windows, Mac, Linux",
        Weight: "85g (without battery)",
        Dimensions: "125 x 67 x 40mm",
      },
      reviewSummary: {
        totalReviews: 324,
        averageRating: 4.5,
        ratingBreakdown: { 5: 180, 4: 100, 3: 35, 2: 7, 1: 2 },
        topReviews: [
          {
            user: "Office Worker",
            rating: 5,
            comment:
              "Super comfortable for all-day use. Battery really does last months.",
            date: "Dec 7, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 6,
      name: "USB-C Hub Multi-Port",
      price: 45.99,
      originalPrice: 65.99,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.ymrFwpuQzAqRc3h356uC8AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      images: [
        "https://tse3.mm.bing.net/th/id/OIP.ymrFwpuQzAqRc3h356uC8AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      ],
      rating: 4.4,
      reviews: 267,
      badge: "Sale",
      category: "Electronics",
      brand: "ConnectPro",
      inStock: true,
      stockCount: 30,
      estimatedDelivery: "Dec 19-21",
      description:
        "Compact 7-in-1 USB-C hub with 4K HDMI, USB 3.0 ports, SD card reader, and 100W Power Delivery. Perfect for laptops and tablets.",
      features: [
        "7-in-1 connectivity",
        "4K HDMI output",
        "100W Power Delivery",
        "USB 3.0 ports",
        "SD/microSD reader",
        "Ethernet port",
        "Compact aluminum design",
        "Plug and play",
      ],
      specifications: {
        Ports: "2x USB 3.0, HDMI, USB-C PD, Ethernet, SD/microSD",
        HDMI: "4K @ 60Hz support",
        "Power Delivery": "100W USB-C PD passthrough",
        "Data Transfer": "USB 3.0 up to 5Gbps",
        Ethernet: "Gigabit Ethernet (1000Mbps)",
        Material: "Aluminum alloy housing",
        Compatibility: "USB-C devices (MacBook, iPad, PC)",
        Dimensions: "120 x 45 x 12mm",
      },
      reviewSummary: {
        totalReviews: 267,
        averageRating: 4.4,
        ratingBreakdown: { 5: 140, 4: 85, 3: 30, 2: 8, 1: 4 },
        topReviews: [
          {
            user: "MacBook User",
            rating: 4,
            comment:
              "Great hub, works perfectly with my MacBook. The 4K output is crisp.",
            date: "Dec 9, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 7,
      name: "Smart Watch Pro Series",
      price: 149.99,
      originalPrice: 299.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F64c6e6170dfb41c997c833f5332eee03",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F64c6e6170dfb41c997c833f5332eee03",
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F37580571b6874b36bc60fff960f1e845",
      ],
      rating: 4.8,
      reviews: 245,
      badge: "Flash Sale",
      category: "Electronics",
      brand: "TechPro",
      inStock: true,
      stockCount: 12,
      estimatedDelivery: "Dec 24-26",
      description:
        "Advanced smartwatch with health monitoring, GPS tracking, and 7-day battery life. Flash sale with 50% off for limited time!",
      features: [
        "7-day battery life",
        "Heart rate monitoring",
        "GPS tracking",
        "Water resistant (50m)",
        "Sleep tracking",
        "Smart notifications",
        "Fitness tracking",
        "Voice assistant",
      ],
      specifications: {
        Display: '1.4" AMOLED, 454x454 resolution',
        Battery: "7 days typical use",
        Connectivity: "Bluetooth 5.0, WiFi, GPS",
        Sensors: "Heart rate, SpO2, Accelerometer, Gyroscope",
        "Water Resistance": "5ATM (50 meters)",
        Compatibility: "iOS 12+, Android 6+",
        Storage: "4GB internal",
        Weight: "52g",
      },
      reviewSummary: {
        totalReviews: 245,
        averageRating: 4.8,
        ratingBreakdown: { 5: 185, 4: 40, 3: 15, 2: 3, 1: 2 },
        topReviews: [
          {
            user: "Sarah M.",
            rating: 5,
            comment:
              "Amazing battery life and accurate health tracking. Best smartwatch I've owned!",
            date: "Dec 15, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 8,
      name: "Wireless Headphones Pro",
      price: 99.99,
      originalPrice: 199.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F44d3d9f05b0140bdbbb6589c07d6d85d",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F44d3d9f05b0140bdbbb6589c07d6d85d",
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F38c5e4ef6f8545daa1572c07ead7e14f",
      ],
      rating: 4.7,
      reviews: 189,
      badge: "Limited",
      category: "Electronics",
      brand: "AudioMax",
      inStock: true,
      stockCount: 8,
      estimatedDelivery: "Dec 22-24",
      description:
        "Premium wireless headphones with active noise cancellation. Limited stock - only 8 left! 50% off flash sale.",
      features: [
        "Active noise cancellation",
        "30-hour battery life",
        "Quick charge (5 min = 3 hours)",
        "Premium sound quality",
        "Comfortable over-ear design",
        "Voice assistant support",
        "Foldable design",
        "Multi-device connectivity",
      ],
      specifications: {
        "Driver Size": "40mm dynamic drivers",
        "Frequency Response": "20Hz - 20kHz",
        "Battery Life": "30 hours with ANC off, 20 hours with ANC on",
        Charging: "USB-C, 5min quick charge = 3 hours",
        Weight: "290g",
        Connectivity: "Bluetooth 5.2, 3.5mm jack",
        "Noise Cancellation": "Active ANC up to 30dB reduction",
        Microphone: "Dual beamforming mics",
      },
      reviewSummary: {
        totalReviews: 189,
        averageRating: 4.7,
        ratingBreakdown: { 5: 140, 4: 35, 3: 10, 2: 3, 1: 1 },
        topReviews: [
          {
            user: "Alex K.",
            rating: 5,
            comment:
              "Incredible sound quality and the noise cancellation is fantastic for flights.",
            date: "Dec 12, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 9,
      name: "Gaming Laptop Bundle",
      price: 899.99,
      originalPrice: 1299.99,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2Fbd44033fd7f048c990dbef1d7f0c23bb",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2Fbd44033fd7f048c990dbef1d7f0c23bb",
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2Ff215ae6483b64ba2a66ad39f235b3cd4",
      ],
      rating: 4.7,
      reviews: 98,
      badge: "Combo Deal",
      category: "Electronics",
      brand: "GameMax",
      inStock: true,
      stockCount: 5,
      estimatedDelivery: "Jan 2-5",
      description:
        "High-performance gaming laptop bundle with accessories. Complete gaming setup with 31% savings on combo deal.",
      features: [
        "NVIDIA RTX 4080 GPU",
        "Intel Core i7-13th Gen",
        "32GB DDR5 RAM",
        "1TB NVMe SSD",
        '15.6" 144Hz Display',
        "RGB Mechanical Keyboard",
        "Gaming Mouse Included",
        "Advanced Cooling System",
      ],
      specifications: {
        Processor: "Intel Core i7-13700HX",
        Graphics: "NVIDIA GeForce RTX 4080 8GB",
        RAM: "32GB DDR5-4800MHz",
        Storage: "1TB PCIe Gen4 NVMe SSD",
        Display: '15.6" FHD 144Hz IPS',
        Keyboard: "RGB Backlit Mechanical",
        Ports: "USB-C, USB 3.2, HDMI 2.1, Ethernet",
        Weight: "2.3kg",
      },
      reviewSummary: {
        totalReviews: 98,
        averageRating: 4.7,
        ratingBreakdown: { 5: 70, 4: 20, 3: 6, 2: 1, 1: 1 },
        topReviews: [
          {
            user: "Gaming Pro",
            rating: 5,
            comment:
              "Runs every game at max settings flawlessly. The bundle is amazing value!",
            date: "Dec 5, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 10,
      name: "Premium Smartphone",
      price: 699.99,
      originalPrice: 899.99,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      images: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      ],
      rating: 4.6,
      reviews: 143,
      badge: "Popular",
      category: "Electronics",
      brand: "TechPro",
      inStock: true,
      stockCount: 25,
      estimatedDelivery: "Dec 20-22",
      description:
        "Latest flagship smartphone with advanced camera system and all-day battery life.",
      features: [
        '6.7" OLED Display',
        "Triple Camera System",
        "5G Connectivity",
        "Face ID & Fingerprint",
        "Wireless Charging",
        "Water Resistant",
        "128GB Storage",
        "All-day Battery",
      ],
      specifications: {
        Display: '6.7" Super Retina XDR OLED',
        Processor: "A17 Pro Chip",
        Storage: "128GB",
        Camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
        Battery: "4000mAh with wireless charging",
        OS: "iOS 17",
        "5G": "Sub-6 GHz and mmWave",
        Weight: "206g",
      },
      reviewSummary: {
        totalReviews: 143,
        averageRating: 4.6,
        ratingBreakdown: { 5: 89, 4: 35, 3: 15, 2: 3, 1: 1 },
        topReviews: [
          {
            user: "Tech Expert",
            rating: 5,
            comment:
              "Exceptional performance and camera quality. Best smartphone I've used!",
            date: "Dec 14, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 11,
      name: "Premium Denim Jeans",
      price: 89.99,
      originalPrice: 129.99,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      images: [
        "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      ],
      rating: 4.4,
      reviews: 812,
      badge: "Best Seller",
      category: "Fashion",
      brand: "DenimCo",
      inStock: true,
      stockCount: 45,
      estimatedDelivery: "Dec 21-23",
      description:
        "High-quality premium denim jeans with perfect fit and comfort. Made from sustainable materials.",
      features: [
        "100% Organic Cotton",
        "Stretch Comfort Fit",
        "Reinforced Seams",
        "Classic 5-Pocket Design",
        "Pre-washed",
        "Eco-friendly Dyes",
        "Available in Multiple Sizes",
        "Machine Washable",
      ],
      specifications: {
        Material: "100% Organic Cotton Denim",
        Fit: "Slim Straight",
        Rise: "Mid-rise",
        "Leg Opening": "14.5 inches",
        Inseam: "32 inches",
        Care: "Machine wash cold",
        Origin: "Made in USA",
        Sizes: "28-42 waist",
      },
      reviewSummary: {
        totalReviews: 812,
        averageRating: 4.4,
        ratingBreakdown: { 5: 450, 4: 250, 3: 80, 2: 25, 1: 7 },
        topReviews: [
          {
            user: "Fashion Lover",
            rating: 5,
            comment:
              "Perfect fit and great quality. These jeans are worth every penny!",
            date: "Dec 11, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 12,
      name: "Smart Toaster Pro",
      price: 149.99,
      originalPrice: 199.99,
      image:
        "https://images.unsplash.com/photo-1585515656971-14cb8ac48dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      images: [
        "https://images.unsplash.com/photo-1585515656971-14cb8ac48dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      ],
      rating: 4.5,
      reviews: 294,
      badge: "Smart Home",
      category: "Home",
      brand: "KitchenTech",
      inStock: true,
      stockCount: 18,
      estimatedDelivery: "Dec 19-21",
      description:
        "Revolutionary smart toaster with app control and perfect browning technology. Makes breakfast effortless.",
      features: [
        "App Control",
        "7 Browning Levels",
        "Auto-Lowering",
        "Keep Warm Function",
        "Bagel Mode",
        "Defrost Setting",
        "LED Display",
        "Easy Clean Crumb Tray",
      ],
      specifications: {
        Slots: "2-slice capacity",
        Power: "1400W",
        Connectivity: "WiFi + Bluetooth",
        Display: "LED touch screen",
        Dimensions: '11" x 7" x 8"',
        Material: "Stainless steel",
        Warranty: "3 years",
        Weight: "8.5 lbs",
      },
      reviewSummary: {
        totalReviews: 294,
        averageRating: 4.5,
        ratingBreakdown: { 5: 165, 4: 85, 3: 30, 2: 10, 1: 4 },
        topReviews: [
          {
            user: "Smart Home Fan",
            rating: 5,
            comment:
              "Love being able to start my toast from bed! Perfect browning every time.",
            date: "Dec 13, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 13,
      name: "Mystery Novel Collection",
      price: 24.99,
      originalPrice: 39.99,
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      images: [
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      ],
      rating: 4.7,
      reviews: 605,
      badge: "Book Club Pick",
      category: "Books",
      brand: "Mystery Press",
      inStock: true,
      stockCount: 120,
      estimatedDelivery: "Dec 18-20",
      description:
        "Thrilling collection of bestselling mystery novels. Perfect for mystery lovers and book clubs.",
      features: [
        "5 Bestselling Novels",
        "Award-Winning Authors",
        "Premium Paperback",
        "Book Club Guide Included",
        "Collectible Edition",
        "Gift Box Packaging",
        "Over 1500 Pages",
        "Multiple Genres",
      ],
      specifications: {
        Format: "Paperback Collection",
        Pages: "1500+ total pages",
        Publisher: "Mystery Press International",
        Language: "English",
        Dimensions: '8" x 5.2" x 3"',
        Weight: "2.8 lbs",
        ISBN: "978-0123456789",
        Edition: "Special Collector's Edition",
      },
      reviewSummary: {
        totalReviews: 605,
        averageRating: 4.7,
        ratingBreakdown: { 5: 380, 4: 150, 3: 55, 2: 15, 1: 5 },
        topReviews: [
          {
            user: "Book Lover",
            rating: 5,
            comment:
              "Fantastic collection! Each book kept me on the edge of my seat.",
            date: "Dec 9, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 14,
      name: "Professional Camping Tent",
      price: 199.99,
      originalPrice: 299.99,
      image:
        "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      images: [
        "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      ],
      rating: 4.6,
      reviews: 339,
      badge: "Outdoor Pro",
      category: "Sports",
      brand: "OutdoorGear",
      inStock: true,
      stockCount: 12,
      estimatedDelivery: "Dec 22-24",
      description:
        "Weather-resistant 4-person camping tent with easy setup. Perfect for family adventures and outdoor enthusiasts.",
      features: [
        "4-Person Capacity",
        "Waterproof Design",
        "Easy 10-Min Setup",
        "UV Protection",
        "Multiple Ventilation",
        "Gear Storage Pockets",
        "Carrying Bag Included",
        "All-Season Use",
      ],
      specifications: {
        Capacity: "4 persons",
        Dimensions: "9' x 7' x 4.5'",
        Material: "Ripstop Polyester with PU coating",
        "Waterproof Rating": "3000mm",
        Weight: "8.2 lbs",
        Poles: "Fiberglass with shock cord",
        Ventilation: "2 mesh windows + rainfly vents",
        "Setup Time": "10 minutes",
      },
      reviewSummary: {
        totalReviews: 339,
        averageRating: 4.6,
        ratingBreakdown: { 5: 210, 4: 85, 3: 30, 2: 10, 1: 4 },
        topReviews: [
          {
            user: "Outdoor Explorer",
            rating: 5,
            comment:
              "Survived a weekend storm without any leaks. Great tent for the price!",
            date: "Dec 8, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 15,
      name: "Premium Hair Conditioner",
      price: 32.99,
      originalPrice: 45.99,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      ],
      rating: 4.3,
      reviews: 418,
      badge: "Salon Quality",
      category: "Beauty",
      brand: "LuxeHair",
      inStock: true,
      stockCount: 65,
      estimatedDelivery: "Dec 20-22",
      description:
        "Professional salon-quality conditioner with natural ingredients. Transforms dry hair into silky smooth locks.",
      features: [
        "Sulfate-Free Formula",
        "Argan Oil Infused",
        "Color Safe",
        "Deep Hydration",
        "Frizz Control",
        "Natural Ingredients",
        "Paraben-Free",
        "Suitable for All Hair Types",
      ],
      specifications: {
        Volume: "16 fl oz (473ml)",
        "Hair Type": "All hair types",
        "Key Ingredients": "Argan Oil, Keratin, Vitamins E & B5",
        Formula: "Sulfate & Paraben Free",
        Origin: "Made in USA",
        "Cruelty-Free": "Yes",
        Vegan: "Yes",
        "pH Level": "5.5-6.5",
      },
      reviewSummary: {
        totalReviews: 418,
        averageRating: 4.3,
        ratingBreakdown: { 5: 220, 4: 125, 3: 50, 2: 18, 1: 5 },
        topReviews: [
          {
            user: "Hair Stylist",
            rating: 5,
            comment:
              "My clients love this conditioner! Leaves hair incredibly soft and manageable.",
            date: "Dec 12, 2024",
            verified: true,
          },
        ],
      },
    },
    {
      id: 16,
      name: "Elite Running Shoes",
      price: 129.99,
      originalPrice: 179.99,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      images: [
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      ],
      rating: 4.7,
      reviews: 356,
      badge: "Athlete Choice",
      category: "Footwear",
      brand: "SportMax",
      inStock: true,
      stockCount: 28,
      estimatedDelivery: "Dec 21-23",
      description:
        "Professional running shoes with advanced cushioning and breathable design. Perfect for marathons and daily runs.",
      features: [
        "Advanced Cushioning",
        "Breathable Mesh Upper",
        "Lightweight Design",
        "Shock Absorption",
        "Non-slip Outsole",
        "Arch Support",
        "Moisture-Wicking",
        "Reflective Details",
      ],
      specifications: {
        "Upper Material": "Engineered mesh with synthetic overlays",
        Midsole: "EVA foam with air cushioning",
        Outsole: "Rubber with flex grooves",
        Weight: "10.2 oz (men's size 9)",
        Drop: "10mm heel-to-toe drop",
        Sizes: "US 6-14 (men's), 5-12 (women's)",
        Width: "Medium and Wide available",
        Use: "Road running, training",
      },
      reviewSummary: {
        totalReviews: 356,
        averageRating: 4.7,
        ratingBreakdown: { 5: 230, 4: 85, 3: 30, 2: 8, 1: 3 },
        topReviews: [
          {
            user: "Marathon Runner",
            rating: 5,
            comment:
              "Perfect shoes for long distance running. Comfortable even after 20+ miles!",
            date: "Dec 10, 2024",
            verified: true,
          },
        ],
      },
    },
  ];

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Books",
  ];
  const brands = [
    "TechPro",
    "SmartTech",
    "GameMax",
    "VisionTech",
    "ConnectPro",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    return matchesSearch && matchesPrice && matchesCategory && matchesBrand;
  });

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    }
  };

  const ProductDetailModal = ({ product }: { product: any }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = product.images || [product.image];

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length,
      );
    };

    return (
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Package className="w-6 h-6" />
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg"
              />
              {images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full",
                      index === currentImageIndex
                        ? "bg-primary"
                        : "bg-background/60",
                    )}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((img, index) => (
                  <button
                    key={index}
                    className={cn(
                      "flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden",
                      index === currentImageIndex
                        ? "border-primary"
                        : "border-muted",
                    )}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline">{product.brand}</Badge>
                <Badge variant="secondary">{product.category}</Badge>
                {product.badge && (
                  <Badge className="bg-primary">{product.badge}</Badge>
                )}
              </div>

              <div className="flex items-center gap-2">
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
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                    <Badge className="bg-destructive">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100,
                      )}
                      % OFF
                    </Badge>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2">
                {product.inStock ? (
                  <Badge className="bg-success">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    In Stock ({product.stockCount} available)
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    Out of Stock
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm text-success">
                <Truck className="w-4 h-4" />
                <span>Estimated delivery: {product.estimatedDelivery}</span>
              </div>
            </div>

            <Separator />

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">About this product</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {product.features && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-sm flex items-center gap-2"
                        >
                          <CheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="specs" className="space-y-2">
                {product.specifications && (
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-2 border-b border-muted"
                        >
                          <span className="font-medium text-sm">{key}</span>
                          <span className="text-sm text-muted-foreground text-right">
                            {String(value)}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                {product.reviewSummary && (
                  <>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold">
                            {product.reviewSummary.averageRating}
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i <
                                  Math.floor(
                                    product.reviewSummary.averageRating,
                                  )
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {product.reviewSummary.totalReviews} reviews
                          </div>
                        </div>

                        <div className="flex-1 space-y-1">
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <div
                              key={rating}
                              className="flex items-center gap-2"
                            >
                              <span className="text-sm w-3">{rating}</span>
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <div className="flex-1 bg-muted rounded-full h-2">
                                <div
                                  className="bg-yellow-400 h-2 rounded-full"
                                  style={{
                                    width: `${
                                      ((product.reviewSummary.ratingBreakdown[
                                        rating
                                      ] || 0) /
                                        product.reviewSummary.totalReviews) *
                                      100
                                    }%`,
                                  }}
                                />
                              </div>
                              <span className="text-sm w-8 text-right">
                                {product.reviewSummary.ratingBreakdown[
                                  rating
                                ] || 0}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Top Reviews
                      </h4>
                      {product.reviewSummary.topReviews.map((review, index) => (
                        <div
                          key={index}
                          className="space-y-2 p-3 border rounded-lg"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">
                              {review.user}
                            </span>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                            <span className="text-xs text-muted-foreground ml-auto">
                              {review.date}
                            </span>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {review.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </TabsContent>
            </Tabs>

            <Separator />

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button className="flex-1">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    );
  };

  const FilterSidebar = () => (
    <div className="w-full space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="space-y-3">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={2000}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) =>
                  handleCategoryChange(category, checked as boolean)
                }
              />
              <label htmlFor={category} className="text-sm cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) =>
                  handleBrandChange(brand, checked as boolean)
                }
              />
              <label htmlFor={brand} className="text-sm cursor-pointer">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} />
              <label
                htmlFor={`rating-${rating}`}
                className="text-sm cursor-pointer flex items-center"
              >
                <div className="flex mr-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                & Up
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">All Products</h1>
          <p className="text-muted-foreground">
            Discover our complete collection of premium products
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="mt-6">
                  <FilterSidebar />
                </div>
              </SheetContent>
            </Sheet>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <Card className="p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <SlidersHorizontal className="h-5 w-5" />
                <h2 className="font-semibold">Filters</h2>
              </div>
              <FilterSidebar />
            </Card>
          </div>

          {/* Products Grid/List */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {viewMode === "grid" ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Dialog key={product.id}>
                    <DialogTrigger asChild>
                      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-48 object-cover rounded-t-lg transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-t-lg flex items-center justify-center transition-colors">
                              <Eye className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            {product.badge && (
                              <Badge className="absolute top-3 left-3">
                                {product.badge}
                              </Badge>
                            )}
                            {!product.inStock && (
                              <div className="absolute inset-0 bg-black/50 rounded-t-lg flex items-center justify-center">
                                <Badge variant="secondary">Out of Stock</Badge>
                              </div>
                            )}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                size="icon"
                                variant="secondary"
                                className="h-8 w-8"
                                onClick={(e) => e.stopPropagation()}
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
                                ({product.reviews})
                              </span>
                            </div>
                            <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">
                              {product.name}
                            </h3>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-lg font-bold">
                                    ${product.price}
                                  </span>
                                  {product.originalPrice !== product.price && (
                                    <span className="text-sm text-muted-foreground line-through">
                                      ${product.originalPrice}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <Button
                                size="sm"
                                disabled={!product.inStock}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ShoppingCart className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <ProductDetailModal product={product} />
                  </Dialog>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <Dialog key={product.id}>
                    <DialogTrigger asChild>
                      <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex gap-6">
                            <div className="relative w-32 h-32 flex-shrink-0">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg flex items-center justify-center transition-colors">
                                <Eye className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              {product.badge && (
                                <Badge className="absolute top-2 left-2 text-xs">
                                  {product.badge}
                                </Badge>
                              )}
                            </div>
                            <div className="flex-1 space-y-3">
                              <div>
                                <h3 className="text-lg font-semibold hover:text-primary transition-colors">
                                  {product.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {product.brand} • {product.category}
                                </p>
                              </div>
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
                                  ({product.reviews} reviews)
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="text-xl font-bold">
                                    ${product.price}
                                  </span>
                                  {product.originalPrice !== product.price && (
                                    <span className="text-sm text-muted-foreground line-through">
                                      ${product.originalPrice}
                                    </span>
                                  )}
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    size="icon"
                                    variant="outline"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Heart className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    disabled={!product.inStock}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <ShoppingCart className="h-4 w-4 mr-2" />
                                    {product.inStock
                                      ? "Add to Cart"
                                      : "Out of Stock"}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <ProductDetailModal product={product} />
                  </Dialog>
                ))}
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-lg font-semibold mb-2">
                  No products found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search terms
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
