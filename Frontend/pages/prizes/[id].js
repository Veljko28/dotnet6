import { Grid } from '@mui/material'
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
    price : 17500,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 5,
    image: "",
    name: "test5",
    price : 17500,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 6,
    image: "",
    name: "test6",
    price : 17500,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 7,
    image: "",
    name: "test7",
    price : 17500,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 8,
    image: "",
    name: "test8",
    price : 17500,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 9,
    image: "",
    name: "test9",
    price : 17500,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
  {
    id: 10,
    image: "",
    name: "test10",
    price : 17500,
    desc: "This is a test product. It has a really long doescription just for testin purposes."
  },
]

export default function Prizes() {
  const router = useRouter();
  const id = router.query['id'];
  
  return (
    <Grid style={{backgroundColor: '#0cafe5', padding: 20, textAlign: "center"}}>
      <TitleChange title="Prizes"/>
      <h1 style={{color: 'white'}}>Products</h1>
      {product.map(x => <ProductCard key={x.id} {...x}/>)}
      <Pages pageId={id} numOfPages={5} pageType={"prizes"}/>
    </Grid>
  )
}
