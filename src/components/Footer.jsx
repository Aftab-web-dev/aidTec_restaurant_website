import {} from 'react';
import './footer.css';
import { AiFillFacebook , AiFillInstagram , AiOutlineMail} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <p className="footer-text">&#169; epic </p>
      <div className='social'>
      <AiFillFacebook/>
      <AiFillInstagram/>
      <AiOutlineMail/>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
