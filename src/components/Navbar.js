import { Box } from "@mui/material"
import { NavLink } from "react-router-dom"
import '../App.css'
export const Navbar=()=>{

    return(
        <Box>
           <NavLink to="/" 
           className={({isActive})=>(
            isActive?'red':'black'
           )}
           >home</NavLink>
           <NavLink to="/login" 
           className={({isActive})=>(
            isActive?'red':'black'
           )}
           >login</NavLink>
        </Box>
    )
}