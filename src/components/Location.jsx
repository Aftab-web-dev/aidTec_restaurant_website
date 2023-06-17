import {} from 'react'
import './location.css'
const Location = () => {
  return (
    <>
    <div className='location' >
        <h1>Location</h1>
        <div className='locationupper' >

        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3772.4724313436823!2d72.8141057!3d18.998893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf55a05908e5%3A0xd5bd1b40d76242f6!2sMumbai%20Food%20Hub!5e0!3m2!1sen!2sin!4v1686914396630!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='locationinner' >
            <img src="https://img.freepik.com/free-vector/destination-concept-international-travel-journey-red-pointer-with-grey-world-map-inside_333792-53.jpg?w=826&t=st=1686915060~exp=1686915660~hmac=d52d4f9fe97f3580303e650b261d9dcbf2d567d673a7d2927fc1f01e66eddef0" alt="" srcset="" />
        </div>
        </div>
    </div>

    </>
  )
}

export default Location