import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { fetchData } from "../../redux/action";
import CanvasJSReact from "../CanvasJs/canvasjs.react";
import "./Chart.scss"
import { withRouter } from "react-router-dom";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = (props) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [Deaths,    setDeaths   ] = useState(0)
  const [Confrimed, setConfrimed] = useState(0)
  const [Recovered, setRecovered] = useState(0)
  const [cID, setcID] = useState("")

  useEffect(() => {
    

   dispatch(fetchData());
   if (state.fetchFinish) {
    const selectedCountry= state.payload.features.filter(item=>item.attributes.Country_Region.toUpperCase()===state.countryName.toUpperCase())
    console.log(selectedCountry[0],"ss26326")
    setDeaths(selectedCountry[0].attributes.Deaths)  
    setConfrimed(selectedCountry[0].attributes.Confirmed)
    setRecovered(selectedCountry[0].attributes.Recovered)
   }

   
   
  }, [state.payload])
  
  const onFetchHandler=()=>{
    const selectedCountry= state.payload.features.filter(item=>item.attributes.Country_Region.toUpperCase()===state.countryName.toUpperCase())
    console.log(selectedCountry[0],"ss26326")
    setDeaths(selectedCountry[0].attributes.Deaths)  
    setConfrimed(selectedCountry[0].attributes.Confirmed)
    setRecovered(selectedCountry[0].attributes.Recovered)
    setcID(selectedCountry[0].attributes.Recovered)
  
  }


  

  return (
    <div className="ChartContainer">
      {!state.fetchFinish?<h1>loading</h1>:<h1>state in {state.countryName}</h1>}
      <h1>Confrimed: {Confrimed}</h1>
      <h1>Deaths: {Deaths}</h1>
      <h1>Recovered: {Recovered}</h1>
      <button onClick={()=>props.history.push("/")}>Go to first page</button>
    </div>
  );
};



export default withRouter(Chart);
