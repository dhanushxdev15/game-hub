import useGenres from "../hooks/useGenres";
import { List, ListItem, HStack, Image, Text } from "@chakra-ui/react";
const GenreList = () => {
   const {genres}=  useGenres();
  return (
   <List>
    {genres.map((genre) => (  
    <ListItem key={genre.id}>
      <HStack>
     <Image boxSize="32px" borderRadius={8} />
      <Text>{genre.name}</Text>
      </HStack>
      </ListItem>
      ))}
   </List>
  )
};

export default GenreList;