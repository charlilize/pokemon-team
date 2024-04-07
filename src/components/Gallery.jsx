import React, { useState, useEffect } from 'react';

import { supabase } from "../client";

const Gallery = () => {

    const [pokemon, setPokemon] = useState([]);

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
        <div>
            {
                pokemon && pokemon.length > 0 ?
                pokemon.map((pokemon, index) => 
                   <Card key={pokemon.id} id={pokemon.id} name={pokemon.name} type={pokemon.type} hp={pokemon.hp}/>
                ) : <h2>{'No Pokemon Yet 🥲'}</h2>
            }
        </div>  
    )
}

export default Gallery;
