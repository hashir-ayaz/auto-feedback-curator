"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Send, User, MessageSquare } from "lucide-react";

interface FeedbackData {
  name: string;
  feedback: string;
}

export function FeedbackForm() {
  const [formData, setFormData] = useState<FeedbackData>({
    name: "",
    feedback: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Call n8n workflow - replace with your actual n8n webhook URL
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      setIsSubmitted(true);
      setFormData({ name: "", feedback: "" });
    } catch (err) {
      setError("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FeedbackData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-green-50 to-green-100 border-green-200">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white fill-current" />
          </div>
          <CardTitle className="text-green-800 text-2xl">Thank You!</CardTitle>
          <CardDescription className="text-green-700 text-lg">
            Your feedback has been received with gratitude. We&apos;re excited
            to hear your thoughts and will use them to make our product even
            better for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-green-300 text-green-700 hover:bg-green-50"
          >
            Share More Feedback
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 border-primary/10 shadow-2xl">
      <CardHeader className="text-center pb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageSquare className="w-6 h-6 text-primary-foreground" />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground">
          Share Your Voice
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base">
          We&apos;re all ears! Tell us what you think - the good, the bad, and
          everything in between.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-sm font-medium text-foreground flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Your Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="How should we call you?"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              className="border-2 border-input/50 focus:border-primary/50 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="feedback"
              className="text-sm font-medium text-foreground flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Your Feedback
            </Label>
            <Textarea
              id="feedback"
              placeholder="Share your thoughts, suggestions, or experiences with us. Don't hold back - we want to hear it all!"
              value={formData.feedback}
              onChange={(e) => handleInputChange("feedback", e.target.value)}
              required
              rows={5}
              className="border-2 border-input/50 focus:border-primary/50 transition-colors resize-none"
            />
            <p className="text-xs text-muted-foreground">
              💡 Tip: Be as detailed as you&apos;d like. Every word helps us
              understand you better.
            </p>
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="font-medium">Oops! Something went wrong.</p>
              <p>{error}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-3 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending Your Thoughts...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Send Feedback
              </div>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            💝 Your feedback is precious to us. Thank you for taking the time to
            share your thoughts.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
