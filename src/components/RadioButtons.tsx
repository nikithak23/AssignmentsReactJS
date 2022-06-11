import React from "react";
import "./RadioButtons.css";

export default function RadioButtons({onChange}){

return(
    
    <div data-testid="genderTest" className="radioContainer" onChange={onChange}>
         <label className="gender"><input type="radio" value="male" name="gender" /> Male</label>
        <label className="gender"><input type="radio" value="female" name="gender" /> Female</label>
        <label className="gender"><input type="radio" value="all" name="gender" defaultChecked/> All</label>
    </div>
    )
}