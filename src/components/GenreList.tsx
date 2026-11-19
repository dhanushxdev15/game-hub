import useGenres from "../hooks/useGenres";
import { List, ListItem, HStack, Image,Button } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
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
      <Button onClick={()=>console.log(genre.id)} variant="link" fontSize="lg">
        {genre.name}
      </Button>
      </HStack>
      </ListItem>
      ))}
   </List>
  )
};

export default GenreList;