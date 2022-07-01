import { Box,Typography,Grid,styled,Button } from "@mui/material";
import { useSelector } from "react-redux";

//components
import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";
import EmptyCart from "./EmptyCart";

import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const Container=styled(Grid)(({theme})=>({
padding:'30px 135px',
[theme.breakpoints.down('md')]:{
    padding:'15px 0'
}
}));

const Header=styled(Box)`
padding:15px 22px;
background:#fff;

`;

const Buttonwrapper=styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0/10%);
border-top:1px solid rgb(237, 246, 237);
`;

const Buttonstyle=styled(Button)`
display:flex;
margin-left:auto;
width:10%;
height:37px;
color: white;
background-color: #5aa13a;
border-radius: 2px;
font-weight: 600;
font-size:13px;
&:hover {
    background-color: #477e2e;
  }
`;

const LeftComponent=styled(Grid)(({theme})=>({
paddingRight:15,
[theme.breakpoints.down('md')]:{
    marginBottom:15
}
}))

const Cart=()=>{
    const {cartItems}= useSelector(state=>state.cart);

    const buyNow=async ()=>{
        let response=await payUsingPaytm({amount:500,email:'dalmiaaman01@gmail.com'});
        let information={
            action:'https://securegw-stage.paytm.in/order/process',
            params:response
        }
        post(information);
    }

    return(
        <>
        {
            cartItems.length ?
            <Container container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}> 
                    <Header>
                        <Typography style={{fontWeight:600,color:'#5aa13a'}}>SHOPPING CART({cartItems.length})</Typography>
                    </Header>
                    {
                        cartItems.map(item=>(
                            <CartItem item={item}/>
                        ))
                    }
                    <Buttonwrapper>
                        <Buttonstyle onClick={()=>buyNow()}>Buy</Buttonstyle>
                    </Buttonwrapper>
                </LeftComponent>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalBalance cartItems={cartItems}/>
                </Grid>
            </Container>
            :
            <EmptyCart/>
        }
        </>
    )
}

export default Cart;