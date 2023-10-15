import { Link } from "react-router-dom";

const Destination = ({ name, image, description, distance, travel }) => {

    return (
        <>
            <div className="destination-container">
                <div className="title-container">

                    <h2 className="title-number">01 </h2><h2 className="title">PICK YOUR DESTINATION</h2>
                </div>
                <img className="illustration" src={image} />
                <nav className="navigation">
                    <Link to="/destination/moon">MOON</Link>
                    <Link to="/destination/mars">MARS</Link>
                    <Link to="/destination/europa">EUROPA</Link>
                    <Link to="/destination/titan">TITAN</Link>
                </nav>
                < div className="description-container">
                    <h1>{name}</h1>
                    <p>{description}</p>

                    </div>            
                    <div className="bordure"/>    
                    <div className="information-container">
                       <div>
                            <h3>DISTANCE</h3>
                            <p className="infos">{distance}</p>
                       </div>
                       
                       <div>
                            <h3>EST TRAVEL TIME</h3>
                            <p className="infos">{travel}</p>
                       </div>
                       
                    </div>
                </div>

            </>
            )
}

            export default Destination;
