import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropDown } from "./DropDown";

const CreatePokemon = () => {
  const [pokemon, setPokemon] = useState({ name: "", type: "", health: "" });
  const [pokemonType, setPokemonType] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPokemon((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  console.log(pokemonType);

  const createPokemon = async (event) => {
    event.preventDefault();

    await supabase
      .from("")
      .insert({
        name: pokemon.name,
        type: pokemon.type,
        health: pokemon.health,
      })
      .select();

    window.location = "/gallery";
  };

  return (
    <>
      <h1 className="font-bold text-3xl my-10">Create a New Pokemon</h1>
      
      <div className="flex flex-col justify-center gap-10 mb-10">
        <div className="flex justify-center">
            <img src="src/assets/create-pokemon.png" className="w-[350px] h-[400px]"/>
        </div>
        
        <div className="flex gap-20">
            <div className="border p-10 h-[200px] w-[300px] rounded-lg">
            <h3 className="font-bold text-xl mb-2">Name:</h3>
            <Input placeholder="Enter the pokemon's name" type="text" id="name" name="name" onChange={handleChange} />
            </div>
            <div className="border p-10 h-[200px] w-[300px] rounded-lg">
            <h3 className="font-bold text-xl mb-2">Type:</h3>
            <DropDown pokemonType={pokemonType} setPokemonType={setPokemonType} />
            </div>
            <div className="border p-10 h-[200px] w-[300px] rounded-lg">
            <h3 className="font-bold text-xl mb-2">Health (hp):</h3>
            <Input
                type="number"
                min="0"
                id="health"
                name="health"
                onChange={handleChange}
                placeholder="Enter the pokemon's health"
                />
        </div>

        </div>
      </div>
      <Button onClick={createPokemon}>Create Pokemon</Button>
    </>
  );
};

export default CreatePokemon;
