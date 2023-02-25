import './Template.css'

const Template = (props) => {
  return (
    <div className="template container">
        {props.children}
    </div>
  )
}

export default Template