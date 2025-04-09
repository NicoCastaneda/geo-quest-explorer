
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type DifficultyLevel = 'easy' | 'hard' | 'extreme';

interface MapContainerProps {
  recordScore?: number;
}

const MapContainer = ({ recordScore = 9 }: MapContainerProps) => {
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('hard');

  const difficultyLabels = {
    easy: 'Fácil (con nombres)',
    hard: 'Difícil (sin nombres, solo fronteras)',
    extreme: 'Extremo (solo siluetas)',
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-2 text-white">
        <span>Record (Difícil): {recordScore}</span>
      </div>

      <div className="relative bg-gray-200 rounded-md overflow-hidden flex-grow mb-4">
        <div className="absolute left-2 top-2 flex flex-col gap-1 z-10">
          <button className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow-md">
            <span className="font-bold text-xl">+</span>
          </button>
          <button className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow-md">
            <span className="font-bold text-xl">-</span>
          </button>
        </div>
        <img 
          src="/placeholder.svg" 
          alt="World Map" 
          className="w-full h-full object-cover"
          style={{ minHeight: "400px" }}
        />
        <div className="absolute bottom-2 right-2 text-xs text-gray-700">
          © Leaflet
        </div>
      </div>

      <div className="mb-2">
        <Select 
          value={difficulty} 
          onValueChange={(value) => setDifficulty(value as DifficultyLevel)}
        >
          <SelectTrigger className="difficulty-selector w-full">
            <SelectValue placeholder={difficultyLabels[difficulty]} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="easy">{difficultyLabels.easy}</SelectItem>
            <SelectItem value="hard">{difficultyLabels.hard}</SelectItem>
            <SelectItem value="extreme">{difficultyLabels.extreme}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default MapContainer;
