import {} from 'react'
import './card.css'
const Card = (props) => {
  return (
    <>
        <div className='card' >
        <div className='cardinner'>
        <img src={props.img}  className='cardicon' />
        </div>
        <div className='ptag' >
        <h1>{props.name}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam natus est, earum at error sequi, voluptates voluptatem, nulla perferendis ducimus modi doloribus magnam amet corrupti cum autem eligendi nesciunt quas!</p>
        <div className='btn' >
        <h1>{props.price}</h1>
        <h1 className='btnname' >{props.button}</h1>
        </div>
        </div>
        </div>
    </>
  )
}

export default Card