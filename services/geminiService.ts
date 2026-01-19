
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
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "Извините, я не смог обработать ваш запрос. Пожалуйста, попробуйте позже.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Произошла ошибка при связи с ИИ-ассистентом. Проверьте подключение к сети.";
  }
}
