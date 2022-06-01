import Head from 'next/head'
import Image from 'next/image'
import ProductCard from '../components/ProductCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ProductCard id={1} image={""} name="test1" price={10500} 
      desc={"This is a test product. It has a really long descrption just for testing purposes."}/>
    </div>
  )
}
