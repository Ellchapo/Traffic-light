import React, { useState ,useEffect} from "react";
import "./styles.css";

export default function App() {
  const [index, setIndex] = useState();
  const [bl, setb] = useState(0);
  const lightDurations = [3000, 2000, 1000];
  
  useEffect(()=>{
   setTimeout(()=>{
     setb((p)=>(p+1)%3)
   },lightDurations[bl])
  })

  return (
    <div className="traffic-light" >
    <div className="light"
    style={{backgroundColor:'red' ,opacity:bl===0?1:0.4}}
    ></div>
     <div className="light"
    style={{backgroundColor:'yellow' ,opacity:bl===1?1:0.2}}
    ></div>
     <div className="light"
    style={{backgroundColor:'green' ,opacity:bl===2?4:0.2}}
    ></div>
    </div>
  
  );
}
