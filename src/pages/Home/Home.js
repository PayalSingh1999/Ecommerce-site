import Trending from '../../Molecules/Trending/Trending'
import { HomeWrapper } from './Home.styled'
import NewLaunch from '../../Molecules/NewLaunch/NewLaunch'
import HeroBanner from '../../Molecules/HeroBanner/HeroBanner'

const Home = () => {
  return (
    <HomeWrapper>
      <HeroBanner />
      <div className='home__banner' style={{ backgroundImage: "url(images/banner2.jpg)" }}>
      </div>
      <Trending />
      <div className='home__cover-image' style={{ backgroundImage: "url(images/banner1.png)" }}>
      </div>
      <NewLaunch />
    </HomeWrapper>
  )
}

export default Home