import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const handleClick =()=>{
        navigate("/destination/moon")
    }

    return (
        <div className="home-container">
            <div className="home-text">
                <p className="home-text-1"> SO, YOU WANT TO TRAVEL TO</p>
                <h1 className="home-title">SPACE</h1>
                <p className="home-text-2">
                    Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>
                <button type="button" className="home-button" onClick={handleClick}>EXPLORE</button>
        </div>

    )
}

export default Home;
