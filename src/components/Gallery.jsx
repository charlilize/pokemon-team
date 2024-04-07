import React, { useState, useEffect } from 'react';
import { supabase } from "../client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 

const Gallery = () => {
    const [pokemon, setPokemon] = useState([]);

    const typeToImageMap = {
        Bug: "src/assets/pokemon-types/bug.png",
        Dark: "src/assets/pokemon-types/dark.png",
        Dragon: "src/assets/pokemon-types/dragon.png",
        Electric: "src/assets/pokemon-types/electric.png",
        Fairy: "src/assets/pokemon-types/fairy.png",
        Fighting: "src/assets/pokemon-types/fighting.png",
        Fire: "src/assets/pokemon-types/fire.png",
        Flying: "src/assets/pokemon-types/flying.png",
        Ghost: "src/assets/pokemon-types/ghost.png",
        Grass: "src/assets/pokemon-types/grass.png",
        Ground: "src/assets/pokemon-types/ground.png",
        Ice: "src/assets/pokemon-types/ice.png",
        Normal: "src/assets/pokemon-types/normal.png",
        Poison: "src/assets/pokemon-types/poison.png",
        Psychic: "src/assets/pokemon-types/psychic.png",
        Rock: "src/assets/pokemon-types/rock.png",
        Steel: "src/assets/pokemon-types/steel.png",
        Water: "src/assets/pokemon-types/water.png",
      };

    useEffect(() => {
        const fetchPokemon = async () => {
          const { data } = await supabase
            .from("pokemon")
            .select()
            .order("created_at", { ascending: true });
            setPokemon(data); 
        };
      
        fetchPokemon(); // Call the function within the useEffect hook
      }, []); // Empty dependency array to run the effect only once on component mount
    
      return (
        <>
            <h1 className="font-bold text-3xl my-10">Your Pokemon Team!</h1>
            <div className="flex flex-wrap gap-10">
            {pokemon && pokemon.length > 0 ? (
                pokemon.map((pokemon) => (
                <Card key={pokemon.id} id={pokemon.id}>
                    <CardHeader>
                    <CardTitle>{pokemon.name}</CardTitle>
                        <img src={typeToImageMap[pokemon.type]} />
                    </CardHeader>
                    <CardContent>
                    <p className="text-xl">Type: {pokemon.type}</p>
                    <p className="text-xl">HP: {pokemon.hp}</p>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button>Edit</Button>
                    </CardFooter>
                </Card>
                ))
            ) : (
                <h2>{"No Pokemon's created yet 😞"}</h2>
            )}
            </div>
        </>
      );
}

export default Gallery;
