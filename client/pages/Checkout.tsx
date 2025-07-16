import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  ShoppingCart,
  CreditCard,
  Truck,
  CheckCircle,
  ArrowLeft,
  Shield,
  Lock,
  MapPin,
  User,
  Mail,
  Phone,
  Calendar,
  Info,
  Star,
  Edit,
  Trash2,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";

// US States
const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District of Columbia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

// Canadian Provinces
const CA_PROVINCES = [
  { value: "AB", label: "Alberta" },
  { value: "BC", label: "British Columbia" },
  { value: "MB", label: "Manitoba" },
  { value: "NB", label: "New Brunswick" },
  { value: "NL", label: "Newfoundland and Labrador" },
  { value: "NS", label: "Nova Scotia" },
  { value: "ON", label: "Ontario" },
  { value: "PE", label: "Prince Edward Island" },
  { value: "QC", label: "Quebec" },
  { value: "SK", label: "Saskatchewan" },
  { value: "NT", label: "Northwest Territories" },
  { value: "NU", label: "Nunavut" },
  { value: "YT", label: "Yukon" },
];

// World Countries
const COUNTRIES = [
  { value: "AD", label: "Andorra" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "AF", label: "Afghanistan" },
  { value: "AG", label: "Antigua and Barbuda" },
  { value: "AI", label: "Anguilla" },
  { value: "AL", label: "Albania" },
  { value: "AM", label: "Armenia" },
  { value: "AO", label: "Angola" },
  { value: "AQ", label: "Antarctica" },
  { value: "AR", label: "Argentina" },
  { value: "AS", label: "American Samoa" },
  { value: "AT", label: "Austria" },
  { value: "AU", label: "Australia" },
  { value: "AW", label: "Aruba" },
  { value: "AX", label: "Åland Islands" },
  { value: "AZ", label: "Azerbaijan" },
  { value: "BA", label: "Bosnia and Herzegovina" },
  { value: "BB", label: "Barbados" },
  { value: "BD", label: "Bangladesh" },
  { value: "BE", label: "Belgium" },
  { value: "BF", label: "Burkina Faso" },
  { value: "BG", label: "Bulgaria" },
  { value: "BH", label: "Bahrain" },
  { value: "BI", label: "Burundi" },
  { value: "BJ", label: "Benin" },
  { value: "BL", label: "Saint Barthélemy" },
  { value: "BM", label: "Bermuda" },
  { value: "BN", label: "Brunei Darussalam" },
  { value: "BO", label: "Bolivia" },
  { value: "BQ", label: "Bonaire, Sint Eustatius and Saba" },
  { value: "BR", label: "Brazil" },
  { value: "BS", label: "Bahamas" },
  { value: "BT", label: "Bhutan" },
  { value: "BV", label: "Bouvet Island" },
  { value: "BW", label: "Botswana" },
  { value: "BY", label: "Belarus" },
  { value: "BZ", label: "Belize" },
  { value: "CA", label: "Canada" },
  { value: "CC", label: "Cocos (Keeling) Islands" },
  { value: "CD", label: "Congo, Democratic Republic of the" },
  { value: "CF", label: "Central African Republic" },
  { value: "CG", label: "Congo" },
  { value: "CH", label: "Switzerland" },
  { value: "CI", label: "Côte d'Ivoire" },
  { value: "CK", label: "Cook Islands" },
  { value: "CL", label: "Chile" },
  { value: "CM", label: "Cameroon" },
  { value: "CN", label: "China" },
  { value: "CO", label: "Colombia" },
  { value: "CR", label: "Costa Rica" },
  { value: "CU", label: "Cuba" },
  { value: "CV", label: "Cabo Verde" },
  { value: "CW", label: "Curaçao" },
  { value: "CX", label: "Christmas Island" },
  { value: "CY", label: "Cyprus" },
  { value: "CZ", label: "Czech Republic" },
  { value: "DE", label: "Germany" },
  { value: "DJ", label: "Djibouti" },
  { value: "DK", label: "Denmark" },
  { value: "DM", label: "Dominica" },
  { value: "DO", label: "Dominican Republic" },
  { value: "DZ", label: "Algeria" },
  { value: "EC", label: "Ecuador" },
  { value: "EE", label: "Estonia" },
  { value: "EG", label: "Egypt" },
  { value: "EH", label: "Western Sahara" },
  { value: "ER", label: "Eritrea" },
  { value: "ES", label: "Spain" },
  { value: "ET", label: "Ethiopia" },
  { value: "FI", label: "Finland" },
  { value: "FJ", label: "Fiji" },
  { value: "FK", label: "Falkland Islands (Malvinas)" },
  { value: "FM", label: "Micronesia, Federated States of" },
  { value: "FO", label: "Faroe Islands" },
  { value: "FR", label: "France" },
  { value: "GA", label: "Gabon" },
  { value: "GB", label: "United Kingdom" },
  { value: "GD", label: "Grenada" },
  { value: "GE", label: "Georgia" },
  { value: "GF", label: "French Guiana" },
  { value: "GG", label: "Guernsey" },
  { value: "GH", label: "Ghana" },
  { value: "GI", label: "Gibraltar" },
  { value: "GL", label: "Greenland" },
  { value: "GM", label: "Gambia" },
  { value: "GN", label: "Guinea" },
  { value: "GP", label: "Guadeloupe" },
  { value: "GQ", label: "Equatorial Guinea" },
  { value: "GR", label: "Greece" },
  { value: "GS", label: "South Georgia and the South Sandwich Islands" },
  { value: "GT", label: "Guatemala" },
  { value: "GU", label: "Guam" },
  { value: "GW", label: "Guinea-Bissau" },
  { value: "GY", label: "Guyana" },
  { value: "HK", label: "Hong Kong" },
  { value: "HM", label: "Heard Island and McDonald Islands" },
  { value: "HN", label: "Honduras" },
  { value: "HR", label: "Croatia" },
  { value: "HT", label: "Haiti" },
  { value: "HU", label: "Hungary" },
  { value: "ID", label: "Indonesia" },
  { value: "IE", label: "Ireland" },
  { value: "IL", label: "Israel" },
  { value: "IM", label: "Isle of Man" },
  { value: "IN", label: "India" },
  { value: "IO", label: "British Indian Ocean Territory" },
  { value: "IQ", label: "Iraq" },
  { value: "IR", label: "Iran, Islamic Republic of" },
  { value: "IS", label: "Iceland" },
  { value: "IT", label: "Italy" },
  { value: "JE", label: "Jersey" },
  { value: "JM", label: "Jamaica" },
  { value: "JO", label: "Jordan" },
  { value: "JP", label: "Japan" },
  { value: "KE", label: "Kenya" },
  { value: "KG", label: "Kyrgyzstan" },
  { value: "KH", label: "Cambodia" },
  { value: "KI", label: "Kiribati" },
  { value: "KM", label: "Comoros" },
  { value: "KN", label: "Saint Kitts and Nevis" },
  { value: "KP", label: "Korea, Democratic People's Republic of" },
  { value: "KR", label: "Korea, Republic of" },
  { value: "KW", label: "Kuwait" },
  { value: "KY", label: "Cayman Islands" },
  { value: "KZ", label: "Kazakhstan" },
  { value: "LA", label: "Lao People's Democratic Republic" },
  { value: "LB", label: "Lebanon" },
  { value: "LC", label: "Saint Lucia" },
  { value: "LI", label: "Liechtenstein" },
  { value: "LK", label: "Sri Lanka" },
  { value: "LR", label: "Liberia" },
  { value: "LS", label: "Lesotho" },
  { value: "LT", label: "Lithuania" },
  { value: "LU", label: "Luxembourg" },
  { value: "LV", label: "Latvia" },
  { value: "LY", label: "Libya" },
  { value: "MA", label: "Morocco" },
  { value: "MC", label: "Monaco" },
  { value: "MD", label: "Moldova, Republic of" },
  { value: "ME", label: "Montenegro" },
  { value: "MF", label: "Saint Martin (French part)" },
  { value: "MG", label: "Madagascar" },
  { value: "MH", label: "Marshall Islands" },
  { value: "MK", label: "North Macedonia" },
  { value: "ML", label: "Mali" },
  { value: "MM", label: "Myanmar" },
  { value: "MN", label: "Mongolia" },
  { value: "MO", label: "Macao" },
  { value: "MP", label: "Northern Mariana Islands" },
  { value: "MQ", label: "Martinique" },
  { value: "MR", label: "Mauritania" },
  { value: "MS", label: "Montserrat" },
  { value: "MT", label: "Malta" },
  { value: "MU", label: "Mauritius" },
  { value: "MV", label: "Maldives" },
  { value: "MW", label: "Malawi" },
  { value: "MX", label: "Mexico" },
  { value: "MY", label: "Malaysia" },
  { value: "MZ", label: "Mozambique" },
  { value: "NA", label: "Namibia" },
  { value: "NC", label: "New Caledonia" },
  { value: "NE", label: "Niger" },
  { value: "NF", label: "Norfolk Island" },
  { value: "NG", label: "Nigeria" },
  { value: "NI", label: "Nicaragua" },
  { value: "NL", label: "Netherlands" },
  { value: "NO", label: "Norway" },
  { value: "NP", label: "Nepal" },
  { value: "NR", label: "Nauru" },
  { value: "NU", label: "Niue" },
  { value: "NZ", label: "New Zealand" },
  { value: "OM", label: "Oman" },
  { value: "PA", label: "Panama" },
  { value: "PE", label: "Peru" },
  { value: "PF", label: "French Polynesia" },
  { value: "PG", label: "Papua New Guinea" },
  { value: "PH", label: "Philippines" },
  { value: "PK", label: "Pakistan" },
  { value: "PL", label: "Poland" },
  { value: "PM", label: "Saint Pierre and Miquelon" },
  { value: "PN", label: "Pitcairn" },
  { value: "PR", label: "Puerto Rico" },
  { value: "PS", label: "Palestine, State of" },
  { value: "PT", label: "Portugal" },
  { value: "PW", label: "Palau" },
  { value: "PY", label: "Paraguay" },
  { value: "QA", label: "Qatar" },
  { value: "RE", label: "Réunion" },
  { value: "RO", label: "Romania" },
  { value: "RS", label: "Serbia" },
  { value: "RU", label: "Russian Federation" },
  { value: "RW", label: "Rwanda" },
  { value: "SA", label: "Saudi Arabia" },
  { value: "SB", label: "Solomon Islands" },
  { value: "SC", label: "Seychelles" },
  { value: "SD", label: "Sudan" },
  { value: "SE", label: "Sweden" },
  { value: "SG", label: "Singapore" },
  { value: "SH", label: "Saint Helena, Ascension and Tristan da Cunha" },
  { value: "SI", label: "Slovenia" },
  { value: "SJ", label: "Svalbard and Jan Mayen" },
  { value: "SK", label: "Slovakia" },
  { value: "SL", label: "Sierra Leone" },
  { value: "SM", label: "San Marino" },
  { value: "SN", label: "Senegal" },
  { value: "SO", label: "Somalia" },
  { value: "SR", label: "Suriname" },
  { value: "SS", label: "South Sudan" },
  { value: "ST", label: "Sao Tome and Principe" },
  { value: "SV", label: "El Salvador" },
  { value: "SX", label: "Sint Maarten (Dutch part)" },
  { value: "SY", label: "Syrian Arab Republic" },
  { value: "SZ", label: "Eswatini" },
  { value: "TC", label: "Turks and Caicos Islands" },
  { value: "TD", label: "Chad" },
  { value: "TF", label: "French Southern Territories" },
  { value: "TG", label: "Togo" },
  { value: "TH", label: "Thailand" },
  { value: "TJ", label: "Tajikistan" },
  { value: "TK", label: "Tokelau" },
  { value: "TL", label: "Timor-Leste" },
  { value: "TM", label: "Turkmenistan" },
  { value: "TN", label: "Tunisia" },
  { value: "TO", label: "Tonga" },
  { value: "TR", label: "Turkey" },
  { value: "TT", label: "Trinidad and Tobago" },
  { value: "TV", label: "Tuvalu" },
  { value: "TW", label: "Taiwan, Province of China" },
  { value: "TZ", label: "Tanzania, United Republic of" },
  { value: "UA", label: "Ukraine" },
  { value: "UG", label: "Uganda" },
  { value: "UM", label: "United States Minor Outlying Islands" },
  { value: "US", label: "United States" },
  { value: "UY", label: "Uruguay" },
  { value: "UZ", label: "Uzbekistan" },
  { value: "VA", label: "Holy See (Vatican City State)" },
  { value: "VC", label: "Saint Vincent and the Grenadines" },
  { value: "VE", label: "Venezuela" },
  { value: "VG", label: "Virgin Islands, British" },
  { value: "VI", label: "Virgin Islands, U.S." },
  { value: "VN", label: "Viet Nam" },
  { value: "VU", label: "Vanuatu" },
  { value: "WF", label: "Wallis and Futuna" },
  { value: "WS", label: "Samoa" },
  { value: "YE", label: "Yemen" },
  { value: "YT", label: "Mayotte" },
  { value: "ZA", label: "South Africa" },
  { value: "ZM", label: "Zambia" },
  { value: "ZW", label: "Zimbabwe" },
];

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
  });
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
  });
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  // Mock cart items (in real app, this would come from cart state/context)
  const cartItems = [
    {
      id: 1,
      name: "Smart Watch Pro Series",
      price: 149.99,
      originalPrice: 299.99,
      quantity: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F64c6e6170dfb41c997c833f5332eee03",
      variant: { color: "Space Gray", size: "42mm" },
    },
    {
      id: 2,
      name: "Wireless Headphones Pro",
      price: 99.99,
      originalPrice: 199.99,
      quantity: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F4c6409e754274ac6a8c3caf8620ed822%2F44d3d9f05b0140bdbbb6589c07d6d85d",
      variant: { color: "Midnight Blue" },
    },
  ];

  const shippingOptions = [
    {
      id: "standard",
      name: "Standard Shipping",
      price: 5.99,
      description: "5-7 business days",
      estimated: "Dec 28 - Jan 3",
    },
    {
      id: "express",
      name: "Express Shipping",
      price: 12.99,
      description: "2-3 business days",
      estimated: "Dec 24 - 26",
    },
    {
      id: "overnight",
      name: "Overnight Delivery",
      price: 24.99,
      description: "Next business day",
      estimated: "Dec 22",
    },
  ];

  // Get states/provinces based on selected country
  const getStatesForCountry = (countryCode: string) => {
    switch (countryCode) {
      case "US":
        return US_STATES;
      case "CA":
        return CA_PROVINCES;
      default:
        return [];
    }
  };

  // Calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shippingCost =
    shippingOptions.find((s) => s.id === shippingMethod)?.price || 0;
  const tax = subtotal * 0.08; // 8% tax
  const savings = cartItems.reduce(
    (sum, item) =>
      sum + ((item.originalPrice || item.price) - item.price) * item.quantity,
    0,
  );
  const total = subtotal + shippingCost + tax;

  const steps = [
    { number: 1, title: "Shipping", icon: Truck, completed: currentStep > 1 },
    {
      number: 2,
      title: "Payment",
      icon: CreditCard,
      completed: currentStep > 2,
    },
    {
      number: 3,
      title: "Review",
      icon: CheckCircle,
      completed: currentStep > 3,
    },
  ];

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  const handlePlaceOrder = () => {
    // In real app, this would process the payment and create order
    alert("Order placed successfully! Redirecting to confirmation...");
  };

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
              <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Checkout</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = step.completed;

              return (
                <div key={step.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors",
                        isCompleted
                          ? "bg-success border-success text-success-foreground"
                          : isActive
                            ? "bg-primary border-primary text-primary-foreground"
                            : "bg-background border-muted text-muted-foreground",
                      )}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <span
                      className={cn(
                        "text-sm font-medium mt-2",
                        isActive ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-16 md:w-24 h-0.5 bg-muted mx-4" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Back to Cart */}
            <Button variant="ghost" className="mb-4" asChild>
              <Link to="/cart">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Cart
              </Link>
            </Button>

            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleShippingSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          required
                          value={shippingInfo.firstName}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              firstName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          required
                          value={shippingInfo.lastName}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              lastName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={shippingInfo.email}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={shippingInfo.phone}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        required
                        value={shippingInfo.address}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            address: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="apartment">
                        Apartment, Suite, etc. (Optional)
                      </Label>
                      <Input
                        id="apartment"
                        value={shippingInfo.apartment}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            apartment: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          required
                          value={shippingInfo.city}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              city: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Select
                          value={shippingInfo.state}
                          onValueChange={(value) =>
                            setShippingInfo({ ...shippingInfo, state: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            {getStatesForCountry(shippingInfo.country).map(
                              (state) => (
                                <SelectItem
                                  key={state.value}
                                  value={state.value}
                                >
                                  {state.label}
                                </SelectItem>
                              ),
                            )}
                            {getStatesForCountry(shippingInfo.country)
                              .length === 0 && (
                              <SelectItem value="" disabled>
                                No states/provinces available
                              </SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input
                          id="zipCode"
                          required
                          value={shippingInfo.zipCode}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              zipCode: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">Country *</Label>
                        <Select
                          value={shippingInfo.country}
                          onValueChange={(value) =>
                            setShippingInfo({ ...shippingInfo, country: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {COUNTRIES.map((country) => (
                              <SelectItem
                                key={country.value}
                                value={country.value}
                              >
                                {country.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Shipping Method */}
                    <div className="pt-6">
                      <h3 className="text-lg font-semibold mb-4">
                        Shipping Method
                      </h3>
                      <RadioGroup
                        value={shippingMethod}
                        onValueChange={setShippingMethod}
                      >
                        {shippingOptions.map((option) => (
                          <div
                            key={option.id}
                            className="flex items-center space-x-3 border rounded-lg p-4"
                          >
                            <RadioGroupItem value={option.id} id={option.id} />
                            <div className="flex-1">
                              <Label
                                htmlFor={option.id}
                                className="cursor-pointer"
                              >
                                <div className="flex justify-between items-center">
                                  <div>
                                    <div className="font-medium">
                                      {option.name}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                      {option.description} • Estimated:{" "}
                                      {option.estimated}
                                    </div>
                                  </div>
                                  <div className="font-semibold">
                                    ${option.price.toFixed(2)}
                                  </div>
                                </div>
                              </Label>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Continue to Payment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Payment Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                {/* Billing Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Billing Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox
                        id="sameAsShipping"
                        checked={sameAsShipping}
                        onCheckedChange={(checked) =>
                          setSameAsShipping(checked === true)
                        }
                      />
                      <Label htmlFor="sameAsShipping">
                        Same as shipping address
                      </Label>
                    </div>

                    {!sameAsShipping && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="billFirstName">First Name *</Label>
                            <Input
                              id="billFirstName"
                              required
                              value={billingInfo.firstName}
                              onChange={(e) =>
                                setBillingInfo({
                                  ...billingInfo,
                                  firstName: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="billLastName">Last Name *</Label>
                            <Input
                              id="billLastName"
                              required
                              value={billingInfo.lastName}
                              onChange={(e) =>
                                setBillingInfo({
                                  ...billingInfo,
                                  lastName: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="billAddress">Street Address *</Label>
                          <Input
                            id="billAddress"
                            required
                            value={billingInfo.address}
                            onChange={(e) =>
                              setBillingInfo({
                                ...billingInfo,
                                address: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div>
                          <Label htmlFor="billApartment">
                            Apartment, Suite, etc. (Optional)
                          </Label>
                          <Input
                            id="billApartment"
                            value={billingInfo.apartment}
                            onChange={(e) =>
                              setBillingInfo({
                                ...billingInfo,
                                apartment: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="billCity">City *</Label>
                            <Input
                              id="billCity"
                              required
                              value={billingInfo.city}
                              onChange={(e) =>
                                setBillingInfo({
                                  ...billingInfo,
                                  city: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="billState">State *</Label>
                            <Select
                              value={billingInfo.state}
                              onValueChange={(value) =>
                                setBillingInfo({ ...billingInfo, state: value })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                              <SelectContent>
                                {getStatesForCountry(billingInfo.country).map(
                                  (state) => (
                                    <SelectItem
                                      key={state.value}
                                      value={state.value}
                                    >
                                      {state.label}
                                    </SelectItem>
                                  ),
                                )}
                                {getStatesForCountry(billingInfo.country)
                                  .length === 0 && (
                                  <SelectItem value="" disabled>
                                    No states/provinces available
                                  </SelectItem>
                                )}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="billZipCode">ZIP Code *</Label>
                            <Input
                              id="billZipCode"
                              required
                              value={billingInfo.zipCode}
                              onChange={(e) =>
                                setBillingInfo({
                                  ...billingInfo,
                                  zipCode: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="billCountry">Country *</Label>
                            <Select
                              value={billingInfo.country}
                              onValueChange={(value) =>
                                setBillingInfo({
                                  ...billingInfo,
                                  country: value,
                                })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {COUNTRIES.map((country) => (
                                  <SelectItem
                                    key={country.value}
                                    value={country.value}
                                  >
                                    {country.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePaymentSubmit} className="space-y-4">
                      <RadioGroup
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                      >
                        <div className="flex items-center space-x-3 border rounded-lg p-4">
                          <RadioGroupItem value="card" id="card" />
                          <Label
                            htmlFor="card"
                            className="cursor-pointer flex-1"
                          >
                            <div className="flex items-center gap-2">
                              <CreditCard className="w-4 h-4" />
                              Credit/Debit Card
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 border rounded-lg p-4">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="cursor-pointer">
                            PayPal
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 border rounded-lg p-4">
                          <RadioGroupItem value="apple" id="apple" />
                          <Label htmlFor="apple" className="cursor-pointer">
                            Apple Pay
                          </Label>
                        </div>
                      </RadioGroup>

                      {paymentMethod === "card" && (
                        <div className="space-y-4 mt-6">
                          <div>
                            <Label htmlFor="cardNumber">Card Number *</Label>
                            <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              required
                              value={cardInfo.number}
                              onChange={(e) =>
                                setCardInfo({
                                  ...cardInfo,
                                  number: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div>
                            <Label htmlFor="cardName">Cardholder Name *</Label>
                            <Input
                              id="cardName"
                              required
                              value={cardInfo.name}
                              onChange={(e) =>
                                setCardInfo({
                                  ...cardInfo,
                                  name: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Expiry Date *</Label>
                              <Input
                                id="expiry"
                                placeholder="MM/YY"
                                required
                                value={cardInfo.expiry}
                                onChange={(e) =>
                                  setCardInfo({
                                    ...cardInfo,
                                    expiry: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV *</Label>
                              <Input
                                id="cvv"
                                placeholder="123"
                                required
                                value={cardInfo.cvv}
                                onChange={(e) =>
                                  setCardInfo({
                                    ...cardInfo,
                                    cvv: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setCurrentStep(1)}
                          className="flex-1"
                        >
                          Back to Shipping
                        </Button>
                        <Button type="submit" className="flex-1">
                          Review Order
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Step 3: Order Review */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Review Your Order
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Shipping Address Review */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Shipping Address</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCurrentStep(1)}
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>
                        {shippingInfo.firstName} {shippingInfo.lastName}
                      </p>
                      <p>{shippingInfo.address}</p>
                      {shippingInfo.apartment && (
                        <p>{shippingInfo.apartment}</p>
                      )}
                      <p>
                        {shippingInfo.city}, {shippingInfo.state}{" "}
                        {shippingInfo.zipCode}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  {/* Payment Method Review */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Payment Method</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCurrentStep(2)}
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {paymentMethod === "card" ? (
                        <p>Credit Card ending in {cardInfo.number.slice(-4)}</p>
                      ) : paymentMethod === "paypal" ? (
                        <p>PayPal</p>
                      ) : (
                        <p>Apple Pay</p>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Shipping Method Review */}
                  <div>
                    <h3 className="font-semibold mb-2">Shipping Method</h3>
                    <div className="text-sm text-muted-foreground">
                      <p>
                        {
                          shippingOptions.find((s) => s.id === shippingMethod)
                            ?.name
                        }
                      </p>
                      <p>
                        Estimated:{" "}
                        {
                          shippingOptions.find((s) => s.id === shippingMethod)
                            ?.estimated
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(2)}
                      className="flex-1"
                    >
                      Back to Payment
                    </Button>
                    <Button
                      onClick={handlePlaceOrder}
                      className="flex-1"
                      size="lg"
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      Place Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute -top-2 -right-2 bg-muted-foreground text-background rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                          {item.quantity}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium line-clamp-2">
                          {item.name}
                        </h4>
                        {item.variant && (
                          <p className="text-xs text-muted-foreground">
                            {Object.entries(item.variant)
                              .map(([key, value]) => `${key}: ${value}`)
                              .join(", ")}
                          </p>
                        )}
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm font-bold">
                            ${item.price}
                          </span>
                          {item.originalPrice &&
                            item.originalPrice !== item.price && (
                              <span className="text-xs text-muted-foreground line-through">
                                ${item.originalPrice}
                              </span>
                            )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Pricing Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {savings > 0 && (
                    <div className="flex justify-between text-sm text-success">
                      <span>Savings</span>
                      <span>-${savings.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
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
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Your payment information is encrypted and secure
                  </AlertDescription>
                </Alert>

                {/* Estimated Delivery */}
                <div className="text-center text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Estimated delivery:{" "}
                  {shippingOptions.find((s) => s.id === shippingMethod)
                    ?.estimated || "Dec 28 - Jan 3"}
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="mt-6 text-center space-y-2">
              <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4" />
                <span>SSL Encrypted Checkout</span>
              </div>
              <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
