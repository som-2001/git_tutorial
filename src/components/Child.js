import { Box, Button } from "@mui/material"
import { memo } from "react";


export const Child=memo(({count,setCount,increase})=>{

   console.log('rendering');

    return(
        <Box>
            {count}
        <Button onClick={(e)=>setCount(count+1)} >increase using setCount</Button>
        <Button onClick={increase} >increase using function</Button>
        </Box>
    )
})