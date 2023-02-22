
import { useParams, useLocation, useNavigate } from 'react-router-dom';

 

export default function Hooksrev() {

const {myname, lname} = useParams();
const navigate = useNavigate();
const location = useLocation();

console.log(location);

function GoToHome(){
    return(
        navigate("/")
    )
}

    return(
    <>

    <h1>My Name is: {myname+ " " +lname} </h1>
    <h2>My Current Path is: {location.pathname}</h2>
    {location.pathname==="/hooksrev/Mukesh/kumar"? (<button className="btn btn-primary  " type="button" onClick={GoToHome}>GoToHome</button>): null }
   

    </>
)}