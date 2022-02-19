import React ,{useState} from 'react'
import Axios from 'axios'
import './dashboard.css'
const Dashboard = () => {
  const[mandi,setMandi] = useState("");

  const getOtherMandi = () =>{
    Axios.get("https://dev.api.krishi.network/mandi?lat=28.44108136&lon=77.0526054&ver=89&lang=en").then((response)=>{
      setMandi(...response.data.data.fav_mandi)
    })
  }
  return (
    <>
      <button className='button' onClick={getOtherMandi} style={{position:'absolute',top:'50%',right:'50%'}}>_Fetch_ </button>
      
      <p> District: <span>{mandi.district}</span><br></br>
          District_Id: <span>{mandi.district_id}</span> <br></br>
          State: <span>{mandi.state}</span><br></br>
          <img src={mandi.image} alt="" srcset=""  style={{height:'50vh',position:'absolute',top:'0%',right:'0%'}}/>
          Mandi_id: <span>{mandi.id}</span><br></br>
          Market: <span>{mandi.market}</span>
      </p>
    </>
  )
}

export default Dashboard