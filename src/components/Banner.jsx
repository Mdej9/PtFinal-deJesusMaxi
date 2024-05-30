import { Link } from "react-router-dom";
import bannerAbrigo from "../assets/images/banner-abrigo.webp";
import bannerSweater from "../assets/images/banner-swat.webp";
import bannerPantalon from "../assets/images/banner-pantalon.webp";

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerAbrigo})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginRight:20}}>
                    <Link to={"/category/abrigo"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Abrigos</span>
                    </Link>
                </div>
                
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerSweater})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320}}>
                    <Link to={"/category/sweater"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Sweaters</span>
                    </Link>
                </div>

                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerPantalon})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginLeft:20}}>
                    <Link to={"/category/pantalon"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Pantalones</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;