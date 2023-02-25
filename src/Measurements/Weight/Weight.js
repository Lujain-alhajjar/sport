import './Weight.css'




const Weight = () => {
  return (
    <div className='weight'>
      <input type="number" name = "weight" defaultValue={60} placeholder="Enter Your Weight In Kg (Between 30 And 150)" min={30} max={150} required />
    </div>
  )
}
export default Weight