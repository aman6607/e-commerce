
import { Box,styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";

const Navi=styled(Box)(({theme})=>({
display:'flex',
margin:'80px 100px 0 100px',
justifyContent: 'space-between',
overflow:'hidden',
[theme.breakpoints.down('lg')]:{
    margin:0
}
}));

const Container=styled(Box)`
padding:10px 8px;
text-align:center;
`;

const Text=styled(Typography)`
font-size:14px;
font-famly:inherited;
font-weight:600;
`;


const Navbar=()=>{
return [
    <Navi>
        {
            navData.map(data=>(
                <Container>
                    <img src={data.url} alt="Nav"style={{width:65}} />
                    <Text>{data.text}</Text>
                </Container>
            ))
        }
    </Navi>
]
}

export default Navbar;