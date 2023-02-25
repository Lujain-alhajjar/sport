import Info from '../Informations'
import { Hero, Title} from '../index'


const Home = () => {
    const Heros=Info.map(card=>{
        return(<Hero key={card.id} title={card.title} src={card.src} pragraph={card.pragraph}/>)
      })
  return (
    <>
        <Title>The Benefits Of Sports Are Many, Including The Following</Title>
        {Heros}
    </>
  )
}

export default Home