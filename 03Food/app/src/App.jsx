import Header from './components/Header'
import FoodList from './components/FoodList'
import { useEffect, useState } from 'react'
import Main from './components/Main'

const BASE_URL  = "http://localhost:9000"


function App() {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)


  
  
  useEffect(() => {
    const fetchFoodItems = async () =>{
      setLoading(true)
      try{
        const foodItems = await fetch(BASE_URL);
        const json = await foodItems.json()
        setData(json)
        console.log( data );
      }catch(error){
        setError("unable to fetch DATA");
      }finally{
        setLoading(false);
      }
  }
    fetchFoodItems();
  }, []);
 
  if(error) return  <h1>{error}</h1> 
  if(loading) return <h1>"loading... please wait "</h1>

  return (
    <>
    <div className='h-screen w-screen bg-cover bg-center  bg-[url("/bkcg_img.png")]'>
     <Header/>
     <Main data={data}/> 
    </div>
    
    </>
  )
}

export default App
