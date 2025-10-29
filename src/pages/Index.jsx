import Hero from '../Components/Hero'
import Brands from '../Components/Brands'
import Services from '../Components/Services'
import ViewPackages from '../Components/ViewPackages'
import Holiday from '../Components/Holiday'
import Banner from '../Components/Banner'
import Fast from '../Components/Fast'
import Trending from '../Components/Trending'
import Testimonials from '../Components/Testimonials'
import Views from '../Components/Views'
import { Helmet } from 'react-helmet'


const Index = () => {
  return (
    <>
     <Helmet>
        <title>Home | YourSite</title>
        <meta name="description" content="Explore the best Europe sightseeing tours and holiday packages." />
        <meta property="og:title" content="Home | YourSite" />
        <meta property="og:description" content="Explore the best Europe sightseeing tours and holiday packages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoursite.com/" />
        <meta property="og:image" content="https://yoursite.com/assets/home/preview.jpg" />
      </Helmet>
    <Hero/>
    <Brands/>
    <Services/>
    <ViewPackages/>
    <Fast/>
    <Holiday/>
    <Views/>
    <Banner/>
    <Trending/>
   <Testimonials/> 
  
    
    </>
  )
}

export default Index