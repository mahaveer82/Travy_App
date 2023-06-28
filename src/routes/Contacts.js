import Navbar from '../components/navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/2.jpg';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contacts (){
    return(
        <>
          <Navbar/>  
          <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="Contact"
            btnclass="hide"
            />  
            <ContactForm />
            <Footer/>
        </>
    )
}

export default Contacts;