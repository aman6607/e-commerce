
import { Box, styled } from "@mui/material";
import { useEffect } from "react";

//components

import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Container=styled(Box)`
padding:10px 10px;
background-color: rgb(218, 239, 218);
`;


const Home=()=>{

    const {products}=useSelector(state=>state.getProducts);
    console.log(products);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    return [
        <>
            <Navbar/>
            <Container>
            <Banner/>
            <Slide products={products}/>
            </Container>
            
        </>

    ]
}

export default Home;