import React from 'react';

const Card=(props)=>{
    //map all robots to this card 
    const cards=props.characters.map((el,i)=>{
        return(
            <div>
                <p>{el}</p>
            </div>
        )
    })

  return(
      <div>
          {cards}
      </div>
  )
}

export default Card;