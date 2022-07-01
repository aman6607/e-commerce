import { useState } from 'react';
import {AppBar, Toolbar, Box,IconButton,Drawer, List,ListItem, styled} from '@mui/material';
import {Link} from 'react-router-dom';

import {Menu}  from '@mui/icons-material';

//components
import Search from './search';
import Custombuttons from './Custombuttons';

const StyleHeader=styled(AppBar)`
background: #5aa13a;
height: 70px;
`;

const Component=styled(Link)`
margin-left:2%;
line-height:0;
`;

const CustomButtonWrappers=styled(Box)(({theme})=>({
    margin:'0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}));

const Menubutton=styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))


const Header = ()=> {
    const logo = require('./logo.png');

    const [open,setOpen]=useState(false);

    const handleOpen=()=>{
        setOpen(true);
    }

    const handleClose=()=>{
        setOpen(false);
    }

    const Sidelist=()=>(
        <Box style={{width:150}} >
        <List>
            <ListItem button>
                <Custombuttons/>
            </ListItem>
        </List>
        </Box>
    )

    return <StyleHeader>
        <Toolbar>
            <Menubutton color="inherit" onClick={handleOpen}>
            <Menu/>
            </Menubutton>

            <Drawer open={open} onClose={handleClose}>
                {Sidelist()}
            </Drawer>

            <Component to='/'>
                <img src={logo} alt="Logo" style={{height:70, width:370}}/>
            </Component>
            <Search/>
            <CustomButtonWrappers>
                <Custombuttons/>
            </CustomButtonWrappers>
        </Toolbar>
        </StyleHeader>
}

export default Header