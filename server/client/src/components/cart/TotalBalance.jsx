import { useState,useEffect } from "react";
import { Box,Typography,styled } from "@mui/material";

const Heading=styled(Box)`
padding:15px 24px;
background:#fff;
border-bottom:1px solid #5aa13a;
`;

const Texthead=styled(Typography)`
color:#5aa13a;
font-weight:600;
`;


const Container=styled(Box)`
padding:15px 24px;
background:#fff;
&>p{
    margin:auto;
    font-size:14px;
}
`;

const Price=styled(Box)`
float:right;
`;

const Text=styled(Typography)`
font-weight:600
`;
const TotalBalance=({cartItems})=>{

    const [price,setPrice]=useState(0);
    const [discount,setDiscount]=useState(0);

    useEffect(()=>{
        TotalAmount();
    },[cartItems])

    const TotalAmount=()=>{
        let price=0,discount=0;
        cartItems.map(item=>{
            price+=item.price.mrp;
            discount+=(item.price.mrp-item.price.cost);

        });
        setPrice(price);
        setDiscount(discount);
    }
    return (
        <Box>
            <Heading>
                <Texthead> PRICE DETAIL</Texthead>
            </Heading>
            <Container>
                <Text>SUBTOTAL({cartItems?.length} items)
                <Price component="span"> ₹{price-discount}</Price>
                </Text>
            </Container>
        </Box>
    )
}

export default TotalBalance;