
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
Ты — виртуальный ассистент ЕЦПО (Европейский центр протезирования и ортопедии), эксперт в области классического и современного протезирования конечностей. 
Твоя задача: помогать пользователям понять технологии, отвечать на вопросы о школе ходьбы, 
подборе протезов (руки, ноги) и давать психологическую поддержку. 
Общайся профессионально, но тепло и эмпатично. 
Если вопрос касается медицины, всегда напоминай о необходимости консультации с врачом. 
Используй русский язык.
`;

export async function getGeminiResponse(history: Message[], userInput: string): Promise<string> {
  // Always use process.env.API_KEY directly when initializing the client
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // Using gemini-3-pro-preview for complex reasoning and medical/STEM-related tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [
        // Map history to the required format. 
        // Note: We filter to ensure the history starts with a user message if needed, 
        // though the systemInstruction often handles context.
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        {
          role: 'user',
          parts: [{ text: userInput }]
        }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    // Access the text property directly (it is a getter, not a method)
    return response.text || "Извините, я не смог обработать ваш запрос. Пожалуйста, попробуйте позже.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Произошла ошибка при связи с ИИ-ассистентом. Проверьте подключение к сети.";
  }
}
