import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const [first, setfirst] = useState()
const navigate = useNavigate()
function go(){
navigate(`/vedio/${first}`)
}
  return (
    <>
<input type="text" placeholder='Enter room id' value={first} onChange={(e)=> setfirst(e.target.value)} />
<button onClick={go}>Start a call</button>
</>
  )
}

export default Home