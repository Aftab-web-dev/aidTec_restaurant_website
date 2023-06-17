import { Link } from 'react-router-dom'
import { IoRestaurantSharp} from "@react-icons/all-files/io5/IoRestaurantSharp";
import "./home.css";
import home from '../assets/home.png'
import { GiHamburgerMenu} from '@react-icons/all-files/gi/GiHamburgerMenu'
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Card from './Card';
import Menu from './Menu';
import Location from './Location';
import Contact from './Contact';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


const Home = ({img , name}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  // booking  modal code 
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');


  // firebase  code
  const firebaseConfig = {
    apiKey: "AIzaSyADLGDt8BDSajQxyNtEbVZb1CCFV_J6j88",
    authDomain: "onlinebooking-d6165.firebaseapp.com",
    projectId: "onlinebooking-d6165",
    storageBucket: "onlinebooking-d6165.appspot.com",
    messagingSenderId: "875122278664",
    appId: "1:875122278664:web:590b4feb2cf713c2746cbd",
    measurementId: "G-EBPJVEH6L8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const [data, setData] = useState([]);
  
  useEffect(() => {
    const database = firebase.database();
    const dataRef = database.ref('users');

    // Retrieve initial data from the database
    dataRef.on('value', (snapshot) => {
      const userEntries = snapshot.val();
      const userArray = userEntries ? Object.values(userEntries) : [];
      setData(userArray);
    });

    // Clean up the listener when component unmounts
    return () => {
      dataRef.off('value');
    };
  }, []);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user input in Realtime Database
    const database = firebase.database();
    const userRef = database.ref('users').push();
    userRef.set({
      username,
      email,
      bookingDate
    });

    // Reset form fields
    setName('');
    setEmail('');
    setBookingDate('');
    console.log('Name:', username);
    console.log('Email:', email);
    console.log('Booking Date:', bookingDate);

    console.log('User data stored in Firebase:', { name, email , bookingDate });
  };
  return (
    <> 
    {/* Navbar  */}
        <div className='navbar'>
        <div className='respnav' >
        <div className='logopart'>
        <IoRestaurantSharp  size={40}  />
        <h1>Epic</h1>
        </div>
        {showMenu && (
          <div className="respinnernavbar">
          <AiOutlineClose className='hamburger' onClick={toggleMenu} size={30} /> 
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/location">Location</Link>
            <Link to="/contact">Contact us</Link>
          </div>
        )}
        </div>
       
        
        {/* responsive code */}
        <div  >
       { setShowMenu && (

        <GiHamburgerMenu className='hamburger' onClick={toggleMenu} size={30} />
       ) 

       }
          

        </div>


          <div className="innernavbar">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/location">Location</Link>
            <Link to="/contact">Contact us</Link>
          </div>
      
        </div>
     {/* header */}
        <div className='header' >
        <div className='headerinner' >
        <h1>We believe taste with historic ingredients</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, iste iusto soluta nostrum eligendi minima asperiores saepe similique perferendis praesentium nulla, ullam, tempore sit officiis fugiat accusamus odit ab. Optio!</p>
        <div className='btndiv'>
        <button onClick={onOpenModal} >Book Now</button>
        </div>
        </div>

        <div className='headerimg' >
        <img src={home} alt="" />
        
        </div>

        {/* booking modal */}
        <Modal open={open} onClose={onCloseModal} center>
        <div>
        <div className="booking-container">
      <h1>Booking Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={username}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="booking-date">Booking Date:</label>
        <input
          type="date"
          id="booking-date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          required
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
        </div>
      </Modal>
        </div>

        <Menu/>
        <Location/>
        <Contact/>

        
        <div className='cardcomp' >
        <Card img={"https://img.freepik.com/free-vector/professional-critic-concept-journalist-making-review-ranking-food-specialist-making-opinion-creative-works-flat-vector-illustration_613284-1817.jpg?w=900&t=st=1686906878~exp=1686907478~hmac=344e2ea87d91cda4a61a59569064f1d44c5f9471620be318665a9b9fc7f91270"} name={"Quality Food"}/>
        <Card img={"https://img.freepik.com/free-vector/delivery-concept-illustration_114360-130.jpg?w=900&t=st=1686907442~exp=1686908042~hmac=b8f9f76319f46e6f9bbc6e7fda8be1e00d718e891b7e3f9801a7679d957563cc"} name={"Door-Step Delivery"} />
        <Card img={"https://img.freepik.com/free-vector/man-paying-online-receiving-cashback-wallet_88138-692.jpg?w=900&t=st=1686906236~exp=1686906836~hmac=9c64605976b61197384bc3000b9466b629532df79c45a91c9e185f72a9b6bd37"} name={"Refundable"}/>
        </div>

        <Footer/>
    </>
  )
}

export default Home