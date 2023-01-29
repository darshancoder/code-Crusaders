import {
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react';
  import { Typography } from '@mui/material';
import { MdCheckCircle, MdOutlineWarningAmber } from "react-icons/md";
  function Call() {
 
  
  
    return (
       <div  >
    <Typography style={{fontWeight:"600",fontSize:"42px", margin:"2rem 0" ,color:"violet"}}>Key Points To Achieve Success</Typography>

<List  fontSize={"1.8rem"}   spacing={5}>

  <ListItem >
    <ListIcon mr={"1rem"}  as={MdCheckCircle} color='green' />
    Goals help to keep you going by
Providing direction      </ListItem>
  <ListItem>
    <ListIcon mr={"1rem"} as={MdCheckCircle} color='green' />
    Reducing your anxiety and increasing your confidence 
     </ListItem>
  <ListItem  mr={"1rem"}>
    <ListIcon as={MdCheckCircle} mr={"1rem"} color='green' />
    Be positive about your ability to succeed
  </ListItem>
  <ListItem >
    <ListIcon as={MdCheckCircle} mr={"1rem"} color='green' />
    Have an inquiring mind: get curious about your subjects!
    </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} mr={"1rem"} color='green' />
    Set a realistic schedule for yourself
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} mr={"1rem"} color='green' />
    Study for 2-3 hours for every hour of class time (eg. if you have 6 hours of class per week, aim to study at least 12-18 hours per week).
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} mr={"1rem"} color='green' />
    Survey chapters before reading; read the chapter summary, look for bold and italicized words to indicate important concepts
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} mr={"1rem"} color='green' />
    Intend to learn something each class you attend
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} mr={"1rem"} color='green' />
    Do assigned readings before class- you'll take better notes
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} mr={"1rem"} color='green' />
    Memorize definitions and formulae - try cue cards
  </ListItem>
</List>
</div>
    )
  }

  export default Call

