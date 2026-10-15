
import { FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid } from 'react-icons/fa';
import{ MdPhoneIphone}from 'react-icons/md';
import{BsGlobe}from 'react-icons/bs';
import { HStack } from '@chakra-ui/react';

interface Props{
    platform:string;
}
const PlatformIconList = ({platform}:Props) => {
  return (
    <HStack spacing={2} marginY={1}>
   {platform === "PC (Windows)" && <FaWindows color='gray.500' />}
   {platform === "PlayStation" && <FaPlaystation />}
   {platform === "Xbox" && <FaXbox />}
   {platform === "macOS" && <FaApple />}
   {platform === "Linux" && <FaLinux />}
   {platform === "Android" && <FaAndroid />}
   {platform === "iOS" && <MdPhoneIphone />}
   {platform === "Web" && <BsGlobe />}
   </HStack>
  )
}

export default PlatformIconList