import React,{useState,createContext,useReducer} from "react";
import axios from "axios";
import "./App.css";
import UserDisplay from './components/UserDisplay';
import RadioButtons from "./components/RadioButtons";
import DropDown from "./components/DropDown";

const baseURL = "https://randomuser.me/api/?results=10";
export const UserContext=createContext(null);

const initialState = {
  e: "",
  userList: []
};

const reducer = ( state:object, action:any) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        e: "",
        userList: action.payload?.results
      };
    case "FAILURE":
      return {
        ...state,
        e: "Something went wrong",
        userList: []
      };
    default:
      return state;
  }
};


function App() {
  const [gender, setGender]=useState('all');
  const [location,setLocation]=useState('all');
  const [UsersData, dispatch] = useReducer(reducer, initialState);

  
  React.useEffect(()=> {
    const usersApi = async () => {
      try {
        const response = await axios.get(baseURL);
        //console.log(response.data);
        dispatch({
          type: "SUCCESS",
          payload: response.data
        });
        return response;
      } catch (e) {
        dispatch({ type: "FAILURE" });
        console.log(e);
      }
    };
    usersApi();
  },[])

  interface context {
    UserData: object
    gender: any
    location: any
  }


  return (
    <UserContext.Provider  value:context ={{UsersData,gender,location}}> 
    <div className="mainContainer">
      <RadioButtons onChange={(e:any)=>{setGender(e.target.value)}}/>
      <DropDown onChange={(e:any)=>{setLocation(e.target.value)}} value={location}/> 
      <UserDisplay/>
    </div>
    </UserContext.Provider>
  )}

export default App;