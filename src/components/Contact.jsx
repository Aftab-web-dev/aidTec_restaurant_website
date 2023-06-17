import { useEffect , useState} from 'react'
import './contact.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const Contact = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message , setMessage] = useState('');
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
    const dataRef = database.ref('Message');

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
      message
    });

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
   
    alert("Submitted");
  };

  return (
    <>
        <div className='contact' >
        <h1>Contact us</h1>
        <div className='contactinner' >
            <div className='contactimg' >
                <img src="https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?w=900&t=st=1686917484~exp=1686918084~hmac=abc917e4ee71a527a9dd63a00c055e6c0009c14002ded06e7982f579d6c5b8a3" alt="img not found" />
            </div>

            <form  className='form'>
                <input type="text" placeholder='Name' value={username}  onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Email' value={email}  onChange={(e) => setEmail(e.target.value)} />
                <textarea placeholder='Message'rows="5" cols={37} value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>
                <button onClick={handleSubmit} >Send now</button>
            </form>
        </div>
        </div>
    </>
  )
}

export default Contact