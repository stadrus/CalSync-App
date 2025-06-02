import { useNavigate } from "react-router";
import EventTable from "./event components/EventTable";

const Dashboard = () => {

    const navigate = useNavigate();
    const handleLogoutClick = () => {
    navigate ('../Home');
    };
    
    return(
        <div className="dashboard">
            <header className="dasboard-header">
                <button type='button' id="Logout" name="Logout" onClick={handleLogoutClick}>Logout</button>
            </header>
            <EventTable />
        </div>
    )
};

export default Dashboard; 