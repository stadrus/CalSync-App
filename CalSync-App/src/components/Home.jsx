import { useNavigate } from "react-router";
import appInfo from "../video/appInfo.mp4";

const Home = () =>{
    const navigate = useNavigate();
    const handleClick1 = () => {
        navigate ('/Login');
    }
    const handleClick2 = () => {
        navigate('/Register');
    }

    return (
        <div className="home">
            <h1>Welcome to CalSync!</h1>
            <video width={620} height={540} autoPlay>
                <source src={appInfo} type="video/mp4"></source>
            </video>
            <button type="button" onClick={handleClick1}>Login</button>
            <button type="button" onClick={handleClick2}>Register Account</button>
        </div>
    );
};

export default Home;