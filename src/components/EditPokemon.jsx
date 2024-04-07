import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropDown } from "./DropDown";
import { supabase } from '../client'
import { useParams } from "react-router-dom"; 
import image from "@/assets/create-pokemon.png";

const EditPokemon = () => {
  const [pokemon, setPokemon] = useState({ name: "", type: "", hp: "" });
  const [pokemonType, setPokemonType] = useState("");
  const {id} = useParams();

  useEffect(() => {
    const fetchPokemon = async () => {
      const { data } = await supabase
        .from("pokemon")
        .select()
        .eq("id", id) // Filter by the id retrieved from the URL
        .single(); // Get a single row
      setPokemon(data);
    };
    fetchPokemon();
  }, [id]); // Re-run the effect when the id changes

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPokemon((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handlePokemonTypeChange = (type) => {
    setPokemonType(type);
    setPokemon((prev) => ({
      ...prev,
      type: type,
    }));
  };

  const editPokemon = async (event) => {
    event.preventDefault();

    await supabase
      .from("pokemon")
      .update({ name: pokemon.name, type: pokemon.type, hp: pokemon.hp })
      .eq("id", id);
  
      window.location = "/gallery";
  };

  const deletePokemon = async (event) => {
    event.preventDefault();

    await supabase
      .from("pokemon")
      .delete()
      .eq("id", id);
  
      window.location = "/gallery";
  };

  return (
    <>
      <h1 className="font-bold text-3xl my-10">Edit the Pokemon</h1>
      
      <div className="flex flex-col justify-center gap-10 mb-10">
        <div className="flex justify-center">
            <img src={image} className="w-[350px] h-[400px]"/>
        </div>
        
        <div className="flex justify-center gap-20">
            <div className="border p-10 h-[200px] w-[300px] rounded-lg">
            <h3 className="font-bold text-xl mb-2">Name:</h3>
            <Input 
                placeholder="Enter the pokemon's name" 
                type="text" 
                id="name" 
                name="name" 
                onChange={handleChange} 
                value={pokemon.name}
            />
            </div>
            <div className="border p-10 h-[200px] w-[300px] rounded-lg">
            <h3 className="font-bold text-xl mb-2">Type:</h3>
            <DropDown 
                pokemonType={pokemon.type} 
                setPokemonType={handlePokemonTypeChange} 
            />
            </div>
            <div className="border p-10 h-[200px] w-[300px] rounded-lg">
            <h3 className="font-bold text-xl mb-2">Health (hp):</h3>
            <Input
                type="number"
                min="0"
                id="hp"
                name="hp"
                onChange={handleChange}
                placeholder="Enter the pokemon's health"
                value={pokemon.hp}
              />
        </div>

        </div>
      </div>
      <Button className="mr-5" type="submit" value="Submit" onClick={editPokemon}>Edit Pokemon</Button>
      <Button variant="destructive" type="submit" value="Submit" onClick={deletePokemon}>Delete Pokemon</Button>
    </>
  );
};

export default EditPokemon;
