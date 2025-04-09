
import React from 'react';
import { Heart, HeartCrack } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface GamePanelProps {
  score: number;
  lives: number;
  maxLives: number;
  history: {
    correct: boolean;
    country: string;
    selected: string;
  }[];
}

const GamePanel = ({ 
  score = 5, 
  lives = 2, 
  maxLives = 3,
  history = [
    { correct: true, country: 'Iran', selected: 'Iran' },
    { correct: false, country: 'Iran', selected: 'Germany' }
  ]
}: GamePanelProps) => {
  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-bold text-white">Puntuación: {score}</div>
        <div className="flex gap-2">
          {Array.from({ length: maxLives }).map((_, idx) => (
            idx < lives 
              ? <Heart key={idx} className="text-red-500" fill="#ef4444" size={24} />
              : <HeartCrack key={idx} className="text-red-300" size={24} />
          ))}
          <span className="text-white ml-2">{lives}/{maxLives}</span>
        </div>
      </div>

      <h2 className="text-xl font-medium text-white mb-4">Esta es la bandera de...</h2>
      
      <div className="flagContainer mb-6 rounded-md overflow-hidden">
        <img 
          src="public/lovable-uploads/5344db38-5c93-441f-880c-5522b9fa5f8f.png" 
          alt="Flag of Iran" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <ScrollArea className="h-[200px] rounded-md border bg-gray-900 bg-opacity-40 p-4">
          {history.map((item, idx) => (
            <div 
              key={idx} 
              className={`mb-2 ${item.correct ? 'text-geo-correct' : 'text-geo-incorrect'}`}
            >
              {item.correct 
                ? `¡CORRECTO! Seleccionaste ${item.selected}`
                : `¡INCORRECTO! Seleccionaste ${item.selected}`
              }
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};

export default GamePanel;
