import Navbar from '../components/navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/night.jpg';
import Footer from '../components/Footer';
import Trip from '../components/Trip';

function Service (){
    return(
        <>
        <Navbar/>
            <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="Service"
            btnclass="hide"
            />  
            <Trip/> 
            <Footer/>
        </>
    )
}

export default Service;