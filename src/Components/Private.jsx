import {Navigate} from "react-router-dom";

const Private = ({element}) =>{
    const auth = sessionStorage.getItem("user");
    return auth ? element: <Navigate to="/login"/> ;
}

export default Private;