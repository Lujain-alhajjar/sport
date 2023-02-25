import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { BsFillTelephoneFill,BsSkype,BsYoutube } from "react-icons/bs";
import { SiTelegram } from "react-icons/si";
import img from '../../imges/footer.png'
const Footer = () => {
  return (
    <footer>
        <div className="texts">
          <h4>Contact us and send us your feedback</h4>
        </div>
       <div className="d-flex ic">
          <div className="icons">
              <FaFacebookSquare className="icon facebook"/>
              <BsFillTelephoneFill className="icon telephone"/>
              <BsSkype className="icon skype"/>
              <BsYoutube className="icon youtube"/>
              <SiTelegram className="icon telegram"/>
          </div>
          <div className="img">
            <img src={img} alt="" />
          </div>
       </div>
    </footer>
  )
}

export default Footer