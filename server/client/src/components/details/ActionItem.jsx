import { useState } from "react";

import { Box, Button,styled } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/actions/cartActions";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const Leftsection=styled(Box)(({theme})=>({
    minWidth:'40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding:'20px 40px'
    }
}))

const Image=styled('img')({
    width:'95%',
    padding:'15px'
})

const Styledbutton=styled(Button)`
width:47%;
height:50px;
color: white;
background-color: #5aa13a;
border-radius: 2px;
font-weight: 600;
font-size:13px;
&:hover {
    background-color: #477e2e;
  }
`;

const ActionItem=({product})=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const [quantity,setQuantity]=useState(1);

    const {id}=product;

    const addItemToCart=()=>{
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }

    const buyNow=async ()=>{
        let response=await payUsingPaytm({amount:500,email:'dalmiaaman01@gmail.com'});
        let information={
            action:'https://securegw-stage.paytm.in/order/process',
            params:response
        }
        post(information);
    }


    return[
        <Leftsection>
            <Box style={{ padding:'15px 20px', border:'1px solid #f0f0f0',width:'90%'}}>
            <Image src={product.detailUrl} alt='Productimage' />
            </Box>
            <Styledbutton variant="contained" style={{marginRight:10}} onClick={()=>addItemToCart()}>Add to Cart</Styledbutton>
            <Styledbutton variant="contained" onClick={()=>buyNow()}>Buy Now</Styledbutton>
        </Leftsection>
    ]
}

export default ActionItem;