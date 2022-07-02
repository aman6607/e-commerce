import { Box,Typography,styled,Button } from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Component=styled(Box)`
border-top: 1px solid #5aa13a;
display:flex;
background:#fff;
`;

const LeftComponent=styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
`;

const Styledbutton=styled(Button)`
margin-top:10px;
width:100px;
height:37px;
color: white;
background-color: red;
border-radius: 2px;
font-weight: 600;
font-size:13px;
&:hover {
    background-color: rgb(215, 30, 30);
  }
`;

const CartItem=({item})=>{

    const dispatch=useDispatch();

    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id));
    }

    return(
        <Component>
            <LeftComponent>
                <img src={item.url} alt="product" style={{height:140,width:120}}/>
            </LeftComponent>
            <Box style={{margin:20}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <Typography style={{margin:'20px 0'}}>
                    <Box component="span" style={{ fontWeight: 600,fontSize:18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#388E3C' }}>{item.price.discount} off</Box>
                </Typography>
                <Styledbutton variant="contained" onClick={()=>removeItemFromCart(item.id)}>Remove</Styledbutton>
            </Box>
        </Component>
    )
}

export default CartItem;