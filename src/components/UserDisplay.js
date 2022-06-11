import "./UserDisplay.css";
import React,{useState,useContext} from "react";
import { UserContext } from "../App"; //userdata objecct from the api has been sent via createContext/useContext


export default function UserDisplay(){

var {UsersData,gender,location}=useContext(UserContext);
var usersData=UsersData.userList;
console.log(usersData,'state in UserDisplay');

const [displayList,setDisplayList]=useState(usersData);

React.useEffect(()=> {
  var Data;
  if(gender!=='all'&&location==='all'){
    Data=usersData.filter((e)=>e.gender===gender);
    setDisplayList(Data);
  }
  else if(gender!=='all'&&location!=='all'){
    Data=usersData.filter((e)=>e.gender===gender&&e.nat===location);
    setDisplayList(Data);
  }
  else if(gender==='all'&&location!=='all'){
    Data=usersData.filter((e)=>e.nat===location);
    setDisplayList(Data);
  }
  else{
    setDisplayList(usersData);
  }
},[gender,location,usersData])



return (
  <div className="listContainer">
    {displayList?(
      displayList?.map((user) =>{
      return(
        <>
        <div className="list">
          <div className="listLeft">
            <img className="userImg" alt="" src={user.picture.medium}/>
            <div className="userName">{user.name.title} {user.name.first} {user.name.last} ({user.nat})</div>
          </div>
          <div className="userEmail">Email: {user.email}</div>
        </div>
        </>
        )})
    ):(
      usersData?.map((user) =>{
        return(
          <>
          <div className="list">
            <div className="listLeft">
              <img className="userImg" alt="" src={user.picture.medium}/>
              <span className="userName">{user.name.title} {user.name.first} {user.name.last} ({user.nat})</span>
            </div>
            <span className="userEmail">Email: {user.email}</span>
          </div>
          </>
          )})
      )
    }
 </div>
);
}
