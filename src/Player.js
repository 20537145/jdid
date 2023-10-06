import React from 'react'
import { Card, Button } from 'react-bootstrap'
function Player({e}) {

  
  return (
       
 <Card style={{ display:'inline-block' ,width: '255px' , background:'#444',fontSize:'10px', margin:'4px'}} key={e.id}>
      <Card.Img variant="top" src={e.imageUrl} style={{height:'200px' }}  />
      <Card.Body>
        <Card.Title style={{color:'#fa0'}}>{e.title  }</Card.Title>
        <Card.Text>
          <div style={{color:'white'}}>
        <h1 >{e.name} </h1>
        <h1>{e.team}</h1>
        <h1>{e.nationality}</h1>
        <h1>jNumber: {e.jerseyNumber}</h1>
        <h1>age: {e.age}</h1></div>
        </Card.Text>
        <Button variant="warning">Click for more info</Button>
      </Card.Body>
    </Card>
    
  )
}

export default Player