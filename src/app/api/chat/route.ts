import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const systemInstruction = `You are the 'PLV Assistant', an AI chatbot exclusively for PLV Ltd.
You ONLY know about these 3 projects:
- Project A: AI CRM
- Project B: Fintech Cloud
- Project C: SaaS Platform

CRITICAL CONSTRAINT: You are NOT a general-purpose AI or a personal assistant like ChatGPT. You exist SOLELY for company welfare and information explicitly related to PLV Ltd. and the 3 projects above.
If a user asks about any other project, or if they ask about personal help (e.g., "write an essay", "help with my homework", "give me advice"), or general world knowledge (like 'who is PM of India?'), you MUST politely but firmly deny the request. 
You must reply exactly or with variation of: "I am sorry, but I am solely dedicated to PLV Ltd. and cannot assist with personal requests or general knowledge. We specialize in AI Automation and Cloud Solutions. Would you like to know about our work on Project A, B, or C?"
`;

export async function POST(req: Request) {
  try {
    const { history, message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction,
    });

    const formattedHistory = history ? history.map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    })) : [];

    const chat = model.startChat({
      history: formattedHistory,
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response." },
      { status: 500 }
    );
  }
}
