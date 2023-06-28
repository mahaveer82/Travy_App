import "./heroStyles.css";
import '../routes/Home';
import Navbar from "./navbar";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
      <Navbar/>
        <img src={props.heroImg} alt="heroimg"/>
         <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnclass}>{props.buttonText}</a>
         </div>
      </div>
    </>
  );
}

export default Hero;
