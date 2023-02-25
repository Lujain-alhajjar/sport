import './Title.css'

const Title = (props) => {
  return (
    <h1 className="firstTitle">{props.children}</h1>
  )
}

export default Title