import { useState,useContext } from 'react';


import {Box, Button,styled,Typography,Badge} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { DataContext } from '../../context/DataProvider';

//components
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';

const Wrapper=styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))

const Buttonbox=styled(Button)`
background: white;
color: #5aa13a;
text-transform:none;
font-weight:600;
align-items:center;
box-shadow:none;
border-radius: 2px;
margin-left:0px;
height: 35px;
width: 90px;  
&:hover {
    background-color: white;
  }

`;

const Container=styled(Link)(({theme})=>({
    display:'flex',
    textDecoration:'none',
    color:'inherit',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))

const Cartsize=styled(Typography)`
font-size:16px;
margin-Left:8px;
`;

const Custombuttons=()=>{

    const [open,setOpen]=useState(false);

    const {account,setAccount}= useContext(DataContext);

    const {cartItems}=useSelector(state=>state.cart);

    const OpenDialog=()=>{
        setOpen(true);
    }

    return[
        <Wrapper>
            {
                account? <Profile account={account} setAccount={setAccount}/>:
                <Buttonbox variant="contained" onClick={()=> OpenDialog() }>Sign-In</Buttonbox>
            }
        <Container to="/cart" style={{marginLeft:60, marginTop:0}}>
        <Badge badgeContent={cartItems?.length} color="secondary">
        <ShoppingCart/>
        </Badge>
        <Cartsize>Cart</Cartsize>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper> 
    ]
 
}

export default Custombuttons