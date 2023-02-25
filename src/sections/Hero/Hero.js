import './Hero.css'
const Hero = (props) => {
  return (
    <div className="hero container">
        <div className="image">
            <img src={props.src} alt="" />
        </div>
        <div className="text">
            <h2>{props.title}</h2>
            <p>{props.pragraph}</p>
        </div>
    </div>
  )
}

export default Hero