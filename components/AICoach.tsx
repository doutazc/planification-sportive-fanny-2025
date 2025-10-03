import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { MACROCYCLES, WEEKLY_SCHEDULE, PERFORMANCE_REVIEW_DATA, GENERAL_PRINCIPLES } from '../constants';
import { IconSend, IconClose } from '../constants';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

interface AICoachProps {
  isOpen: boolean;
  onClose: () => void;
}

const AICoach: React.FC<AICoachProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !chatRef.current) {
        setIsLoading(true);
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const planContext = `CONTEXTE DE PLANIFICATION POUR FANNY DOUTAZ (2025-2026):\n${JSON.stringify({ MACROCYCLES, WEEKLY_SCHEDULE, PERFORMANCE_REVIEW_DATA, GENERAL_PRINCIPLES }, null, 2)}`;
            
            const initialWelcomeMessage = {
                id: Date.now(),
                text: "Bonjour Fanny ! C'est Coach. J'ai analysé ton plan pour 2025-2026. Comment puis-je t'aider à te préparer aujourd'hui ? Demande-moi n'importe quoi sur ton programme, tes objectifs, ou si tu as besoin de conseils.",
                sender: 'ai' as const
            };

            chatRef.current = ai.chats.create({
              model: 'gemini-2.5-flash',
              config: {
                systemInstruction: "Tu es un coach de tennis de table de classe mondiale pour une athlète d'élite nommée Fanny Doutaz. Ton ton est encourageant, expert et motivant. Tu as accès à son plan de saison 2025-2026 complet. Utilise ce plan pour fournir des conseils spécifiques et actionnables. Garde tes réponses concises et ciblées. Toutes tes réponses DOIVENT être en français. Ne mentionne pas que tu es une IA, agis comme un vrai coach.",
              },
              history: [
                { role: "user", parts: [{ text: planContext }] },
                { role: "model", parts: [{ text: initialWelcomeMessage.text }] }
              ]
            });
            setMessages([initialWelcomeMessage]);
        } catch (error) {
            console.error("Failed to initialize AI Coach:", error);
            setMessages([{ id: Date.now(), text: "Désolé, une erreur est survenue lors de l'initialisation du coach IA.", sender: 'ai'}]);
        } finally {
            setIsLoading(false);
        }
    }
  }, [isOpen]);
  
  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await chatRef.current.sendMessage({ message: input });
      const aiResponse: Message = { id: Date.now() + 1, text: result.text, sender: 'ai' };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = { id: Date.now() + 1, text: "Désolé, je n'ai pas pu traiter votre demande. Veuillez réessayer.", sender: 'ai' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg h-[80vh] max-h-[700px] flex flex-col transform transition-transform duration-300 scale-95 animate-scale-in" onClick={e => e.stopPropagation()}>
        <header className="flex items-center justify-between p-4 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">Coach IA</h2>
          <button onClick={onClose} className="p-1 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500" aria-label="Fermer le chat">
            <IconClose className="w-6 h-6" />
          </button>
        </header>
        
        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-teal-100 text-teal-900' : 'bg-slate-100 text-slate-800'}`}>
                <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="max-w-[80%] p-3 rounded-lg bg-slate-100 text-slate-800">
                <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </main>
        
        <footer className="p-4 border-t border-slate-200">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez une question..."
              className="flex-1 w-full px-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              disabled={isLoading}
              aria-label="Votre message"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 disabled:bg-slate-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
              aria-label="Envoyer le message"
            >
              <IconSend className="w-5 h-5" />
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default AICoach;
