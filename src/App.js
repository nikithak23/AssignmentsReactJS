import React,{useState,createContext} from "react";
import axios from "axios";
import "./App.css";
import UserDisplay from './components/UserDisplay';

const baseURL = "https://randomuser.me/api/?results=10";
export const UserContext=createContext(null);

function App() {
  const [gender, setGender]=useState('all');
  const [Users, setUser]= useState([]);
  const [location,setLocation]=useState('all');


  React.useEffect(()=> {
    const usersApi = async () => {
      try {
        const response = await axios.get(baseURL);
        //console.log(response.data);
        setUser(response.data);
        return response;
      } catch (e) {
        console.log(e);
      }
    };
    usersApi();
  },[])
const usersData = Users?.results;
//console.log('UsersData in App.js',usersData)


  return (
    // <UserContext.Provider value={usersData}> 
    <UserContext.Provider value={{usersData,gender,location}}> 
    {/* all the children components within this function(in this case <UserDisply>) can use these data(userData,gender,location) using useContext in the resp components file */}
    <div className="mainContainer">
      <div className="radioContainer" onChange={(e)=>{setGender(e.target.value)}}>
        <div className="gender"><input type="radio" value="male" name="gender" /> Male</div>
        <div className="gender"><input type="radio" value="female" name="gender" /> Female</div>
        <div className="gender"><input type="radio" value="all" name="gender" defaultChecked/> All</div>
      </div>
      {/* {console.log(gender)} */}


      <div className="dropDownContainer" onChange={(e)=>{setLocation(e.target.value)}}>
        <div className="dropDownHeader">Select Nationality:</div>
        <select className="dropDown" value={location}>
          {usersData?.map(item => {
              return (<option key={item.nat} value={item.nat} defaultChecked={'All'}>{item.nat}</option>);
              })}
              <option key='all' value='all'>All</option>
        </select>
      </div>

      <UserDisplay/>
      
    </div>
    </UserContext.Provider>
  )}

export default App;