import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box,Typography,Divider, styled } from '@mui/material';
import {Link} from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Image=styled('img')({
    width:'auto',
    height:150
})

const Text=styled(Typography)`
font-size:15px;
margin-top:5px;
`;

const Component=styled(Box)`
margin-top: 10px;
background-color: white;

`;

const Dealtext=styled(Typography)`
font-size: 19px;
font-weight: 600;
line-height: 30px;
`;

const Deal=styled(Box)`
padding: 10px 15px;
display:flex;
`;


const Slide = ({ products }) => {

    return [
        <Component>
            <Deal>
                <Dealtext>Buy at Best Prices</Dealtext>
            </Deal>
            <Divider/>
        <Carousel responsive={responsive} swipeable={false} draggable={false} infinite={true} autoPlay={true} autoPlaySpeed={5000} keyBoardControl={true} centerMode={true} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px" containerClass="carousel-container">
            {
                products.map(product => (
                    <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                    <Box textAlign="center" style={{padding:'20px 15px'}}>
                    <Image src={product.url} alt="product" />
                    <Text style={{fontWeight:600, color:'#212121'}}>{product.title.shortTitle}</Text>
                    <Text style={{color:'green'}}>{product.discount}</Text>
                    </Box>
                    </Link>
                ))
            }
        </Carousel>
        </Component>
    ]
}

export default Slide;