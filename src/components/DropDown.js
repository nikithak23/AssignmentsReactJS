import React,{useContext} from "react";
import "./DropDown.css";
import { UserContext } from "../App";

export default function DropDown({onChange,value}){
    var {UsersData} =useContext(UserContext);
    var usersData=UsersData.userList;
return(
   <div className="dropDownContainer" onChange={onChange}>
        <div className="dropDownHeader">Select Nationality:</div>
        <select data-testid="locationTest" className="dropDown" value={value}>
          {usersData?.map(item => {
              return (
              <option data-testid="locationTestOption" key={item.nat} value={item.nat} defaultChecked={'All'}>{item.nat}</option>);
              })}
              <option key='all' value='all'>All</option>
        </select>
      </div>
      
)
}