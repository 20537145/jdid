import React from 'react'
import cards from './Players'
import Player from './Player'
function PlayersList() {
    
  return (
    <div>
        {cards.map((e)=><Player e={e}/>)}
    </div>
  )
}

export default PlayersList