import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {

  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch();
  const send = (e)=>{
    dispatch(ADD(e));
  }

  return (
    <div className='container card_block'>
      <h1 className='text-center'>Add to Cart</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element) => {
            return (
              <>
                <Card key={element.id} style={{ width: '22rem' }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>  Price : ₹ {element.price} </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                      <Button variant="primary" color="error"  
                        onClick={()=> send(element)}
                      className='col-lg-12'><b>Add to Cart  +</b></Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards