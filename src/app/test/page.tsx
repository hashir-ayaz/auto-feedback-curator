export default function TestPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Styling Test Page
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">
              Card Test
            </h2>
            <p className="text-muted-foreground">
              This is a test card with your theme colors.
            </p>
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Primary Button Test</h2>
            <p>This uses your primary color scheme.</p>
          </div>
        </div>

        <div className="bg-secondary text-secondary-foreground rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Secondary Test</h2>
          <p>This uses your secondary color scheme.</p>
        </div>

        <div className="bg-accent text-accent-foreground rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Accent Test</h2>
          <p>This uses your accent color scheme.</p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Test input"
            className="w-full p-3 border border-input bg-background text-foreground rounded-md"
          />
          <textarea
            placeholder="Test textarea"
            className="w-full p-3 border border-input bg-background text-foreground rounded-md h-32"
          />
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90">
            Test Button
          </button>
        </div>
      </div>
    </div>
  );
}
