
import { Box, styled, Typography,Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';

const Namestyle=styled(Typography)`
margin-top: 3px;
margin-left:40px;
cursor: pointer;
`;


const Component=styled(Menu)`
margin-top:5px;
`

const Logout=styled(Typography)`
font-size:14px;
margin-left:10px;
`

const Profile=({account,setAccount})=>{

    const [open,setOpen]=useState(false);

    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }

    const handleClose=()=>{
        setOpen(false);
    }

    const logoutuser=()=>{
        setAccount('');
    }
    return <>
    <Box onClick={handleClick} ><Namestyle>{account}</Namestyle></Box>
        <Component
            anchorEl={open}
            open={Boolean (open)}
            onClose={handleClose}
        >
            <MenuItem onClick={()=>{handleClose(); logoutuser();}}>
            <LogoutIcon fontSize="small"/>
                <Logout>Sign Out</Logout>
            </MenuItem>
        </Component>
        </>
}

export default Profile;