
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const GeoGameHeader = () => {
  return (
    <header className="flex items-center justify-between w-full p-4 bg-geo-header text-white">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">GeoGame</h1>
        <MapPin size={20} className="text-teal-400" />
      </div>
      
      <div className="flex items-center gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link" className="text-white hover:text-blue-300">¿Cómo jugar?</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>¿Cómo jugar?</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <p>1. Observa la bandera mostrada en la pantalla.</p>
              <p>2. Haz clic en el país al que pertenece esta bandera en el mapa.</p>
              <p>3. Si aciertas, ganarás un punto. Si fallas, perderás una vida.</p>
              <p>4. El juego termina cuando pierdas todas tus vidas.</p>
              <p>5. Puedes cambiar la dificultad usando el selector debajo del mapa.</p>
            </div>
          </DialogContent>
        </Dialog>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="link" className="text-white hover:text-blue-300">Más Juegos...</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <span>GeoCapitales</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>GeoMontañas</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>GeoRíos</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default GeoGameHeader;
