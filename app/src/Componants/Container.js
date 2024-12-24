import React,{useState} from 'react'

const pattern = [
    [0,1,2],
    [2,5,8],
    [6,7,8],
    [2,4,6],
    [0,4,8],
    [3,4,5],
    [1,4,7]
]



const Container = () => {
    const [player,setPlayer] = useState(0);
    const [p1,setP1] = useState([]);
    const [p2,setP2] = useState([]);
   

   
    const handleClick = (index) =>{
        if(player == 0){
        setP1([...p1,index])
        document.getElementById(index).innerHTML='X'
        setPlayer(1)
        }
        else{
            setP2([...p2,index])
            document.getElementById(index).innerHTML='O'
            setPlayer(0)
        }
    }
  return (
    <div className='container'>
        <h1 className='text-white text-center text-3xl py-5'>TIC-TAC-TOE</h1>
        <div className='w-[400px] h-[400px] p-5 bg-slate-600 rounded-lg grid grid-cols-3 gap-2 mx-auto'>
      {
        ([...Array(9)]).map((_,index)=>{
            return <div onClick={()=>handleClick(index)} id={index} key={index} className='p-4 bg-slate-800 h-28 text-2xl font-bold flex items-center justify-center text-white rounded-lg hover:scale-[1.03] duration-200'></div>
        })
      }
    </div>
    </div>
    
  )
}

export default Container
