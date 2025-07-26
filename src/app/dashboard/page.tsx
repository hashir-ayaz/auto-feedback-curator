import { FeedbackForm } from "@/components/feedback-form";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Feedback Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Collect and manage product feedback
              </p>
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Welcome to Your Feedback Collection System
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This dashboard allows users to submit feedback about your product.
              All feedback is automatically processed through N8N workflows for
              efficient collection and analysis.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">
                Feedback Collected
              </div>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Availability</div>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">⚡</div>
              <div className="text-sm text-muted-foreground">
                Real-time Processing
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="flex justify-center">
            <FeedbackForm />
          </div>

          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Automated Workflow
              </h3>
              <p className="text-muted-foreground">
                Feedback is automatically processed through N8N workflows,
                ensuring efficient collection and routing to the right teams.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Instant Response
              </h3>
              <p className="text-muted-foreground">
                Users receive immediate confirmation when their feedback is
                submitted, providing a smooth user experience.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Feedback Dashboard. Built with Next.js and N8N.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
