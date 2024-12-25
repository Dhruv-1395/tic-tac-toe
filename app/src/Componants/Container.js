import React, { useState,useEffect, use } from 'react'
import {toast} from 'react-hot-toast'
const pattern = [
  [0, 1, 2],
  [2, 5, 8],
  [6, 7, 8],
  [2, 4, 6],
  [0, 4, 8],
  [3, 4, 5],
  [1, 4, 7]
]




const Container = () => {
  const [player, setPlayer] = useState(0);
  const [p1, setP1] = useState([]);
  const [p2, setP2] = useState([]);
  const [iswin,setIsWin] = useState(false);
  const [deg,setDeg] = useState(0);

  const lineStyle = () =>{
    if(JSON.stringify(pattern[4])==JSON.stringify(p1)){
      setDeg(-45)
    }
    else{
      setDeg(45)
    }
  }

 const Matchpattern = (win) =>{
  win.forEach(e => {
    document.getElementById(e).classList.add('win');
  });
  
 }

  useEffect(()=>{
    setTimeout(()=>{
      if(pattern.find((item)=>JSON.stringify(item) == JSON.stringify(p1))){
        toast.success("player 1 win!🎉");
        Matchpattern(p1);
        setIsWin(true)
        lineStyle();
        return;
      }
      if(pattern.find((item)=>JSON.stringify(item) == JSON.stringify(p2))){
        toast.success("player 2 win!🎉");
        Matchpattern(p2);
        setIsWin(true)
        lineStyle();
        return;
      }
    },100)
  },[p1,p2])
  
  
  
  
  

  const handleClick = (index) => {
   
    if (player === 0) {
      document.getElementById(index).innerHTML = 'X';
      setP1([...p1, index])
      setPlayer(1)
    }
    else {
      
      setP2([...p2, index])
      document.getElementById(index).innerHTML = 'O'
      setPlayer(0)
    }
  }
  return (
    <div className='container'>
      <h1 className='text-white text-center text-3xl py-5'>TIC-TAC-TOE</h1>
      <div className='w-[400px] h-[400px] p-5 bg-slate-600 rounded-lg grid grid-cols-3 gap-2 mx-auto relative'>
        {
          ([...Array(9)]).map((_, index) => {
            return <div onClick={() => handleClick(index)} id={index} key={index} className='p-4 bg-slate-800 h-28 text-3xl font-bold flex items-center justify-center text-white rounded-lg hover:scale-[1.03] duration-200'></div>
          })
        }
        {
          (iswin)?<div 
          className="line h-[400px] w-1 bg-white absolute inset-0 m-auto rounded-lg "
          style={{ transform: `rotate(${deg}deg)` }}
          ></div>
          :
          ""
        }
              

      </div>
    </div>

  )
}

export default Container
