import ProductCard from '../components/ProductCard'
import TitleChange from '../constants/TitleChange'

import IntroBlock from '../components/Home/IntroBlock'
import AboutBlock from '../components/Home/AboutBlock'
import OurPartners from '../components/Home/OurPartners'



export default function Home() {
  return (
    <div>
        <IntroBlock/>
        <AboutBlock/>
        <OurPartners/>
    </div>
  )
}
