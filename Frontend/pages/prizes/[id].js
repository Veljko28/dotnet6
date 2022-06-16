import React from 'react'
import { Grid, Select, MenuItem} from '@mui/material'
import { useRouter } from 'next/router'
import ProductCard from '../../components/ProductCard'
import TitleChange from '../../constants/TitleChange'
import Pages from '../../constants/Pages'


const product = [
  {
    id: 1,
    image: "",
    name: "test1",
    price : 10500,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 2,
    image: "",
    name: "test2",
    price : 14500,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 3,
    image: "",
    name: "test3",
    price : 17500,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 4,
    image: "",
    name: "test4",
    price : 9200,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 5,
    image: "",
    name: "test5",
    price : 12400,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 6,
    image: "",
    name: "test6",
    price : 8750,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 7,
    image: "",
    name: "test7",
    price : 6540,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 8,
    image: "",
    name: "test8",
    price : 9150,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 9,
    image: "",
    name: "test9",
    price : 8540,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 10,
    image: "",
    name: "test10",
    price : 11450,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
]

export default function Prizes() {
  const router = useRouter();
  const id = router.query['id'];

  const [sortOpt, changeSortOpt] = React.useState("None");
  
  return (
    <Grid container style={{backgroundColor: '#0cafe5'}}>
      <TitleChange title="Prizes"/>
      <Grid container item xs={12}>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <div></div>
          <h1 style={{color: 'white'}}>Products</h1>
          <Select
              value={sortOpt}
              onChange={(e) => changeSortOpt(e.target.value)}
              displayEmpty
              style={{backgroundColor: "White", marginTop: 20}}
            >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
      </Grid>
      <Grid item style={{ padding: 20, textAlign: "center"}} >
        {product.map(x => <ProductCard key={x.id} {...x}/>)}
        <Pages pageId={id} numOfPages={5} pageType={"prizes"}/>
      </Grid>
    </Grid>
  )
}
