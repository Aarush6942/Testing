import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CreditCard, Heart, Calendar } from "lucide-react";

const donationAmounts = [25, 50, 100, 250, 500];
const membershipPlans = [
  {
    name: "Monthly Supporter",
    amount: 10,
    description: "Support our mission with a monthly contribution",
    period: "month"
  },
  {
    name: "Annual Champion",
    amount: 100,
    description: "Make a bigger impact with yearly support",
    period: "year"
  }
];

export default function Donate() {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(donationAmounts[1]);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Support Our 
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Mission</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your donation helps us continue our work in the community. Choose a donation type below.
        </p>
      </div>

      <Tabs defaultValue="once" className="max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="once">One-time Donation</TabsTrigger>
          <TabsTrigger value="recurring">Become a Member</TabsTrigger>
        </TabsList>

        {/* One-time Donation */}
        <TabsContent value="once">
          <Card>
            <CardHeader>
              <CardTitle>Make a One-time Donation</CardTitle>
              <CardDescription>
                Choose an amount to donate or enter a custom amount
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup
                value={selectedAmount.toString()}
                onValueChange={(value) => setSelectedAmount(value === "custom" ? "custom" : Number(value))}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {donationAmounts.map((amount) => (
                  <Label
                    key={amount}
                    className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors ${
                      selectedAmount === amount ? "border-primary bg-primary/5" : ""
                    }`}
                  >
                    <RadioGroupItem value={amount.toString()} className="sr-only" />
                    ${amount}
                  </Label>
                ))}
                <Label
                  className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors ${
                    selectedAmount === "custom" ? "border-primary bg-primary/5" : ""
                  }`}
                >
                  <RadioGroupItem value="custom" className="sr-only" />
                  Custom
                </Label>
              </RadioGroup>

              {selectedAmount === "custom" && (
                <div className="flex items-center">
                  <span className="text-2xl mr-2">$</span>
                  <Input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="text-lg"
                  />
                </div>
              )}

              <Button className="w-full" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Recurring Membership */}
        <TabsContent value="recurring">
          <div className="grid gap-4 sm:grid-cols-2">
            {membershipPlans.map((plan) => (
              <Card key={plan.name}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${plan.amount}</span>
                    <span className="text-muted-foreground ml-1">/{plan.period}</span>
                  </div>
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Payment Security Notice */}
      <div className="max-w-3xl mx-auto text-center space-y-2 pt-8">
        <div className="flex justify-center items-center gap-2 text-muted-foreground">
          <CreditCard className="h-5 w-5" />
          <span>Secure payment processing</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Your donation is secure and encrypted. We never store your payment information.
        </p>
      </div>
    </div>
  );
}
