import React from 'react'
import FoodList from './FoodList'

const FoodCard = (food) => {

console.log(food);
    return(
        <>
        <div>
           
            
        </div>
        </>
    )
}


const Main = ({data}) => {
    
  return (
    
      <div>
        {
            data?.map((food)=>{
                <FoodCard 
                key={food.name}
                food={food}/>
            }) 
        }
      </div>
    
  )
}

export default Main
