import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import the useParams hook
import { supabase } from "@/client";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import bugImage from "@/assets/pokemon-types/bug.png";
import darkImage from "@/assets/pokemon-types/dark.png";
import dragonImage from "@/assets/pokemon-types/dragon.png";
import electricImage from "@/assets/pokemon-types/electric.png";
import fairyImage from "@/assets/pokemon-types/fairy.png";
import fightingImage from "@/assets/pokemon-types/fighting.png";
import fireImage from "@/assets/pokemon-types/fire.png";
import flyingImage from "@/assets/pokemon-types/flying.png";
import ghostImage from "@/assets/pokemon-types/ghost.png";
import grassImage from "@/assets/pokemon-types/grass.png";
import groundImage from "@/assets/pokemon-types/ground.png";
import iceImage from "@/assets/pokemon-types/ice.png";
import normalImage from "@/assets/pokemon-types/normal.png";
import poisonImage from "@/assets/pokemon-types/poison.png";
import psychicImage from "@/assets/pokemon-types/psychic.png";
import rockImage from "@/assets/pokemon-types/rock.png";
import steelImage from "@/assets/pokemon-types/steel.png";
import waterImage from "@/assets/pokemon-types/water.png";

const DetailView = () => {
  const { id } = useParams(); // Get the id from the URL parameters
  const [pokemon, setPokemon] = useState(null);

  const typeToImageMap = {
    Bug: bugImage,
    Dark: darkImage,
    Dragon: dragonImage,
    Electric: electricImage,
    Fairy: fairyImage,
    Fighting: fightingImage,
    Fire: fireImage,
    Flying: flyingImage,
    Ghost: ghostImage,
    Grass: grassImage,
    Ground: groundImage,
    Ice: iceImage,
    Normal: normalImage,
    Poison: poisonImage,
    Psychic: psychicImage,
    Rock: rockImage,
    Steel: steelImage,
    Water: waterImage,
  };

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

  return (
    <div>
      {pokemon ? (
        <div className="flex flex-col">
          <h2 className="text-3xl mt-5 font-bold">Pokemon's Name: {pokemon.name}</h2>
          <div className="flex justify-center my-10">
            <img className="w-[300px]" src={typeToImageMap[pokemon.type]} />
          </div>

          <div className="flex justify-center mb-5">
            <div className="border-gray-500 border-2 flex p-3 rounded-3xl justify-evenly w-[700px]">
              <h2 className="text-xl font-bold">Pokemon's Type: {pokemon.type}</h2>
              <h2 className="text-xl font-bold">Pokemon's Health: {pokemon.hp} hp</h2>
            </div>
          </div>

          <h2 className="text-lg font-bold mb-10">{pokemon.hp > 100 ? "WOW A BUFF ONE! This one's strong." : "Ehh.. this one seems fragile."}</h2>
          <Link to={`/edit/${pokemon.id}`}><Button className="text-lg p-7">Wanna edit {pokemon.name}?</Button></Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailView;
