import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {

    const navigate = useNavigate();

    useEffect(() =>{
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"appllication/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res) =>{
            sessionStorage.removeItem("user");
            navigate('/login');
        }).catch( (err) =>{
            console.log(err);
        })
    });
  return (
    <>
        <h1>Logout Page</h1>
    </>
  )
}

export default Logout