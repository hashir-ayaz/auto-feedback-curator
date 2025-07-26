import { FeedbackForm } from "@/components/feedback-form";
import {
  Heart,
  MessageCircle,
  Star,
  Users,
  Coffee,
  Sparkles,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Feedback Hub
                </h1>
                <p className="text-sm text-muted-foreground">
                  Your voice matters to us
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Powered by</p>
                <p className="font-semibold text-foreground">N8N Workflows</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Share Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Honest Thoughts
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We believe in the power of honest feedback. Whether it&apos;s
              praise, suggestions, or concerns - every piece of feedback helps
              us grow and serve you better.
              <span className="text-primary font-medium">
                {" "}
                Your voice shapes our future.
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">Be Honest</span>
              </div>
              <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span className="text-sm font-medium">We Care</span>
              </div>
              <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium">Make Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Community Driven
              </h3>
              <p className="text-muted-foreground">
                Your feedback directly influences our product decisions and
                improvements.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Open Communication
              </h3>
              <p className="text-muted-foreground">
                We read every piece of feedback and respond to your concerns
                personally.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Comfortable Experience
              </h3>
              <p className="text-muted-foreground">
                Share your thoughts in a relaxed, judgment-free environment
                designed for you.
              </p>
            </div>
          </div>

          {/* Feedback Form Section */}
          <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Share Your Thoughts?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take a moment to tell us what&apos;s on your mind. Your feedback
                is the compass that guides our journey forward.
              </p>
            </div>

            <div className="flex justify-center">
              <FeedbackForm />
            </div>
          </div>

          {/* Encouragement Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <h4 className="text-2xl font-semibold text-foreground mb-4">
                💝 Thank You for Being Part of Our Journey
              </h4>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Every piece of feedback, whether positive or constructive, helps
                us create something better. Your honesty and openness make our
                community stronger and our product more valuable.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-5 h-5 text-red-500 fill-current" />
              <span className="text-sm text-muted-foreground">
                Built with love for honest feedback
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Feedback Hub. Every voice matters.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
