import './Measurements.css'
import {Weight , Height,Button} from './index'
import img from '../imges/weightAndHeight.jpg'



const Measurements = () => {
 
  return (
    <div className="report container">
        <img src={img} alt="" />
        <div className="inputs">
          <form action="">
            <Weight />
            <Height />
            <Button onClick/>
            <div className="yourbmi"></div>
          </form>
       
        </div>
    </div>
  )
}
export default Measurements