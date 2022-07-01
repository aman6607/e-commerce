
import { Typography,Box,styled } from "@mui/material";
import {Link} from 'react-router-dom';

const Component=styled(Box)(({theme})=>({
height:'65vh',
width:'80%',
background:'#fff',
margin:'80px 140px',
[theme.breakpoints.down('md')]:{
    margin:'80px 50px',
}
}));

const LowerText=styled(Link)`
text-decoration:underline;
color:inherit;
font-weight:600;
`;

const Container=styled(Box)`
text-align:center;
padding-top:70px;
`;
const EmptyCart=()=>{

    const imgurl='https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png';

    return(
        <Component>
            <Container>
                <img src={imgurl} alt="EmptyCart" style={{width:'30%'}}/>
                <Typography>Your Cart is Empty!</Typography>
                <LowerText to="/">Add items now</LowerText>
            </Container>
        </Component>
    )
}

export default EmptyCart;