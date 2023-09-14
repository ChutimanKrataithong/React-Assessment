import User from "./User";
import Admin from "./Admin";
import { Link } from "react-router-dom";

const buttonClick = ()=> {
    return (
        <div>
            {/* <a href= {"/user"}><button> User Home Sector</button></a>
            <a href= {"/admin"}><button> Admin Home Sector</button></a> */}
            <Link to='/user'><button>User Home Sector</button></Link>
            <Link to='/admin'><button>Admin Home Sector</button></Link>
            
        </div>
    )
}
export default buttonClick;
