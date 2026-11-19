// import { SimpleGrid, Text } from "@chakra-ui/react";
// import useGames from "../hooks/useGames";
// import GameCard from "./GameCard";
// import GameCardSkeleton from "./GameCardSkeleton";
// import GameCardContainer from "./GameCardContainer";

// const GameGrid = () => {
//   const { data, error, isLoading } = useGames();

//   const skeletons = [1, 2, 3, 4, 5, 6];

//   return (
//     <>
//       {error && <Text color="red">{error}</Text>}

//       <SimpleGrid
//         columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
//         padding="10px"
//         spacing={3}
//       >
//         {isLoading
//           ? skeletons.map((skeleton) => ( <GameCardContainer>
//               <GameCardSkeleton key={skeleton} />
//               </GameCardContainer>
//             ))
//           : data.map((game) => (<GameCardContainer>
//               <GameCard key={game.id} game={game} /></GameCardContainer>
//             ))}
//       </SimpleGrid>
//     </>
//   );
// };

// export default GameGrid;



import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

interface Props {
  selectedGenre: string | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames();

  const filteredGames = selectedGenre
    ? data.filter((game) => game.genre === selectedGenre)
    : data;

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color="red">{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : filteredGames.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
