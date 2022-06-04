import ProductCard from '../components/ProductCard'
import TitleChange from '../constants/TitleChange'


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
  }
]

export default function Prizes() {
  return (
    <div className="container">
      <TitleChange title="Prizes"/>
      <h1 style={{color: '#0cafe5'}}>Products</h1>
      {product.map(x => <ProductCard key={x.id} {...x}/>)}
    </div>
  )
}