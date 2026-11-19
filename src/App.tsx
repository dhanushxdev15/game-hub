// import {Grid,GridItem,Show} from "@chakra-ui/react"
// import NavBar from "./components/ui/NavBar"
// import GameGrid from "./components/GameGrid"
// import GenreList from "./components/GenreList"

// function App() {
//   return <Grid templateAreas={{base: `"nav" "main"`,
//     lg: `"nav nav" "aside main"`
//   }}>  
//   templateColumns={}
//     <GridItem area='nav'><NavBar /></GridItem>
//     <Show above='lg'>
//     <GridItem area='aside' padding={5}><GenreList /></GridItem>
//     </Show> 
//     <GridItem area='main'><GameGrid /></GridItem>
   
//   </Grid>
// }
// export default App



// // http://localhost:5173/




import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre.name)}
              selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;