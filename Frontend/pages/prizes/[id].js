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

  let mapProducts = product;
  const [sortOpt, changeSortOpt] = React.useState(1);
  React.useEffect(() => {
    console.log(sortOpt)
    switch (sortOpt){
      case 1:
          mapProducts = product;
          break;
        case 10:
          mapProducts.sort((a,b) => a.price - b.price);
          break;
        case 20:
          mapProducts.sort((a,b) => b.price - a.price);
          break;
        default: 
          break;
      }
  },[sortOpt])  
  return (
    <div style={{backgroundColor: '#0cafe5'}}>
      <TitleChange title="Prizes"/>
      <div style={{display: "flex", justifyContent: "space-between", padding: 10}}>
          <div> </div>
          <h1 style={{color: 'white', textAlign: 'center'}}>Products</h1>
          <div>
            <span style={{color: "white", fontWeight: "bold"}}>Sorting: </span>
            <Select
                value={sortOpt}
                onChange={(e) => changeSortOpt(e.target.value)}
                style={{backgroundColor: "white", width: 150, height: 40}}
              >
              <MenuItem value={1} disabled>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Points Asc</MenuItem>
              <MenuItem value={20}>Points Desc</MenuItem>
            </Select>
          </div>
      </div>
      <div style={{ padding: 20, textAlign: "center"}} >
        {product.map(x => <ProductCard key={x.id} {...x}/>)}
        <Pages pageId={id} numOfPages={5} pageType={"prizes"}/>
      </div>
    </div>
  )
}
