import { useState,useEffect } from 'react';

import { InputBase ,Box, List,ListItem, styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { useSelector,useDispatch } from 'react-redux';
import { getProducts } from "../../redux/actions/productActions";

import {Link} from 'react-router-dom';

const Searchbar= styled(Box)`
background-color: white;
border-radius: 4px;
display:flex;
font-size:unset;
`;

const Inputsearchbase=styled(InputBase)`
height: 35px;
width: 400px;  
margin-top: auto;
padding-left: 5px; 
display:flex;
`;

const Searchiconwrapper=styled(Box)`
color:#5aa13a;
margin-top: auto; 
margin-right:4px;

`; 

const Listwrapper=styled(List)`
position:absolute;
background:#FFFFFF;
color:#000;
margin-top:36px;
`;

const Search=()=>{

    const [text,setText]=useState('');

    const {products}=useSelector(state=>state.getProducts);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    const getText=(text)=>{
        setText(text);
    }

    return (
    <Searchbar>
        <Inputsearchbase placeholder="Search for products and more" onChange={(e)=>getText(e.target.value)} value={text}/>
        <Searchiconwrapper>
            <SearchIcon/>
        </Searchiconwrapper>
        {
            text && 
                <Listwrapper>
                    {
                        products.filter(product=> product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                            <ListItem>
                                <Link to={`/product/${product.id}`} onClick={()=>setText('')} style={{textDecoration:'none',color:'inherit'}}>
                                {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </Listwrapper>
        }
    </Searchbar> 
    )
    
}

export default Search;