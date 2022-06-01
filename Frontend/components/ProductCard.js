import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {Grid, Typography, Button} from '@mui/material';

const ProductCard = (props) => {
  return (
    <Grid container 
    className="cardContainer" style={{width: '250px', border: '1px solid #eee', maxHeight: 350}}>
       <Link href={`/phone/${props.id}`}>
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
               <img src={props.image}  width="150px" height="150px"/>
            </div>

            <div className="card-textarea">
              <Typography variant="h5">
                {props.name}
              </Typography>
              <Typography variant="subtitle2">
                {props.desc}
              </Typography>
              <Typography variant="h6" style={{display: 'inline-block'}}>
                <span style={{fontSize: "15px"}}>{props.price} <Image src="/points.png" width={10} height={15} /></span>
              </Typography>
            </div>
          </div>
        </Link>

        <div className="buttonConainer">
            <Button variant="contained" color="primary">Take !</Button>
        </div>
    </Grid> 
  )
}

export default ProductCard