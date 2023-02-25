import './Height.css'
const Height = () => {
  return (
    <div className='height'>
      <input type="number" name="height" defaultValue={165} placeholder="Enter Your Height In CM (Between 80 And 230)" min={80} max={230} id="" required />
    </div>
  )
}
export default Height