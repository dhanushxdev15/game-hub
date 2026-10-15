
import { Badge } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import { HStack, Text } from '@chakra-ui/react'
interface Props{
    rating:number;    
}
const GameRating = ({rating}:Props) => {
  let color = rating > 4 ? "gold.500" : rating > 3 ? "green.500" :  rating> 2 ? "red.500" : "white.500";
  return (
   <HStack spacing={1} padding={2} borderRadius={'5px'} color={color} backgroundColor={color + ".100"}>
      <FaStar color="orange" />
      <Text fontWeight="bold">{rating.toFixed(1)}</Text>
      <Text color="gray.500">/ 5</Text>
    </HStack>
  )
}

export default GameRating