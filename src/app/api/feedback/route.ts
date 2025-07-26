import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, feedback } = body;

    // Validate the input
    if (!name || !feedback) {
      return NextResponse.json(
        { error: "Name and feedback are required" },
        { status: 400 }
      );
    }

    // Call n8n workflow
    // Replace this URL with your actual n8n webhook URL
    const n8nWebhookUrl =
      process.env.N8n_PROD_WEBHOOK_URL ||
      "https://n8n.block20.dev/webhook/aa17c520-3929-484b-967b-0e8ce6e7198d";

    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        feedback,
        timestamp: new Date().toISOString(),
        source: "feedback-dashboard",
      }),
    });

    if (!n8nResponse.ok) {
      console.error("N8N workflow failed:", await n8nResponse.text());
      return NextResponse.json(
        { error: "Failed to process feedback" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Feedback submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting feedback:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
