# Feedback Dashboard Setup

This is a modern feedback collection dashboard built with Next.js and integrated with N8N workflows.

## Features

- ✅ Modern, responsive UI using your custom theme
- ✅ Simple feedback form with name and feedback fields
- ✅ N8N workflow integration
- ✅ Instant thank you message after submission
- ✅ Error handling and loading states
- ✅ Mobile-friendly design

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory with your N8N webhook URL:

```bash
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/feedback
```

### 2. N8N Workflow Setup

1. Create a new workflow in your N8N instance
2. Add a "Webhook" trigger node
3. Configure the webhook to receive POST requests
4. Add processing nodes as needed (e.g., save to database, send notifications)
5. Copy the webhook URL and add it to your `.env.local` file

### 3. Running the Application

```bash
npm run dev
```

The dashboard will be available at `http://localhost:3000/dashboard`

## File Structure

```
src/
├── app/
│   ├── api/feedback/route.ts    # API endpoint for feedback submission
│   ├── dashboard/page.tsx       # Main dashboard page
│   └── page.tsx                 # Redirects to dashboard
├── components/
│   ├── ui/                      # Shadcn-style UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   └── feedback-form.tsx        # Main feedback form component
└── lib/
    └── utils.ts                 # Utility functions
```

## Customization

The dashboard uses your custom theme from `globals.css`. You can customize:

- Colors by modifying CSS variables in `globals.css`
- Layout by editing `dashboard/page.tsx`
- Form fields by modifying `feedback-form.tsx`
- API processing in `api/feedback/route.ts`

## API Endpoint

The feedback form submits to `/api/feedback` which:

1. Validates the input (name and feedback are required)
2. Calls your N8N webhook with the feedback data
3. Returns a success/error response to the frontend

The payload sent to N8N includes:

```json
{
  "name": "User's name",
  "feedback": "User's feedback",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "source": "feedback-dashboard"
}
```
