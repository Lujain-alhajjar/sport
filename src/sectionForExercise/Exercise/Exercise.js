import { ArmsAndChestAndBack , ForTheStomach , Template , BackAndArms , Forlegs , FullBody, Arms , Waist , BellyAndThighsAndGlutes} from '../index'
import { Title } from '../../sections/index'
const Exercise = () => {
  return (
    <>
    <Title>Here Are Some Exercises</Title>
    <Template>
        <ForTheStomach />
        <BackAndArms />
        <Forlegs />
        <FullBody />
        <Arms />
        <Waist />
        <BellyAndThighsAndGlutes />
        <ArmsAndChestAndBack />
    </Template>
    </>
  )
}

export default Exercise