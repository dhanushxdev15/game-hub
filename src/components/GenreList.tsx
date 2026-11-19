import useGenres from "../hooks/useGenres";
import { List, ListItem, HStack, Image,Button } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: string| null;
}
const GenreList = ({ onSelectGenre ,selectedGenre}: Props) => {
   const {genres,isLoading,error
   }=  useGenres();
   if (isLoading) return <Spinner/>;
   if (error) return null;
  return (
   <List>
    {genres.map((genre) => (  
<ListItem
  key={genre.id}
  onClick={() => onSelectGenre(genre)}
  cursor="pointer"
>
      <HStack>
     <Image boxSize="32px" borderRadius={8} />
      <Button fontWeight={genre.name === selectedGenre ? "bold" : "normal"} onClick={()=>console.log(genre.id)} variant="link" fontSize="lg">
        {genre.name}
      </Button>
      </HStack>
      </ListItem>
      ))}
   </List>
  )
};

export default GenreList;