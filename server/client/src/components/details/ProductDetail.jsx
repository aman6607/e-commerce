
import { Typography, Box, Table,TableBody,TableRow,TableCell, styled } from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';

const Smalltext=styled(Box)`
vertical-align:baseline;
&>p{
    font-size:14px;
    margin-top:10px;
}
`;

const Badgestyle=styled(Badge)`
color:#5aa13a;
margin-right:10px;
font-size:15px;
`;

const ColumnText=styled(TableRow)`
vertical-align:baseline;
&>td{
    font-size:14px;
    margin-top:10px;
    border:none;
}
`;

const ProductDetail = ({ product }) => {
    const date=new Date(new Date().getTime()+ (5*24*60*60*1000))
    return [
        <Box style={{backgroundColor:'#ffffff'}}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }} >170 ratings</Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount} off</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <Smalltext>
                <Typography><Badgestyle/>No Cost EMI: Avail No Cost EMI on select cards for orders above ₹3000</Typography>
                <Typography><Badgestyle/>Bank Offer: 5% Instant Discount on HSBC Cashback Card Transactions</Typography>
                <Typography><Badgestyle/>Partner Offers: Get GST invoice and save up to 28% on business purchases.</Typography>
            </Smalltext>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color:'#5aa13a'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | FREE</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#5aa13a'}}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#5aa13a'}}>About this Item</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </Box>
    ]
};

export default ProductDetail;