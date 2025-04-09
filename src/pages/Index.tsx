
import React from 'react';
import GeoGameHeader from '@/components/GeoGameHeader';
import MapContainer from '@/components/MapContainer';
import GamePanel from '@/components/GamePanel';

const Index = () => {
  // This would be controlled by game state in a real implementation
  const gameState = {
    score: 5,
    lives: 2,
    maxLives: 3,
    history: [
      { correct: true, country: 'Iran', selected: 'Iran' },
      { correct: false, country: 'Iran', selected: 'Germany' }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-geo-background">
      <GeoGameHeader />
      
      <div className="flex flex-col md:flex-row flex-grow p-4 gap-6">
        <div className="md:w-3/5">
          <MapContainer recordScore={9} />
        </div>
        
        <div className="md:w-2/5">
          <GamePanel 
            score={gameState.score}
            lives={gameState.lives}
            maxLives={gameState.maxLives}
            history={gameState.history}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
