

async function fetchData() {
      try{
        
        const pokemonName = document.getElementById("PokemonNames").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
         

        if(!response.ok){
            throw new Error(error);
        }

        else{
            const data = await response.json()
            console.log(data)
            const pokeSprites = data.sprites.front_default;
            const imgElement = document.getElementById("pokemonSprite");

            const pokename = data.name;
            let displayname = document.getElementById("displayname");

            const elementtype = data.types.map(t => t.type.name).join(",");
            let type = document.getElementById("type");

            displayname.textContent = pokename;
            type.textContent = "Types: " + elementtype;

            imgElement.src = pokeSprites;
            imgElement.style.display = "block"

        }

      }
      catch(error){
        console.error(error);
      }
}