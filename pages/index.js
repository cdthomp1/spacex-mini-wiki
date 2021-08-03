import Card from "../components/Card"
import { getAstronauts, getDragons, getLaunches, getRockets,  } from "../utils/utils"

const Home = ({ rockets, launches, astronauts, dragons }) => {
  return (
    <>
      <h1 className="text-center text-white text-5xl p-5 font-goldman">SpaceX MiniWiki</h1>
      <div className="w-11/12 mx-auto">
        <h2 className="text-center text-white text-4xl p-5">Rockets</h2>
        <div className="flex">
          {rockets.map(rocket => (<Card document={rocket} />))}
        </div>
        <h2 className="text-center text-white text-4xl p-5">Astronauts</h2>
        <div className="flex">
          {astronauts.map(astro => (<Card document={astro} />))}
        </div>
        <h2 className="text-center text-white text-4xl p-5">Launches</h2>
        <div className="flex">
          {launches.map(launch => (<Card document={launch} />))}
        </div>
        <h2 className="text-center text-white text-4xl p-5">Dragons</h2>
        <div className="flex justify-around">
          {dragons.map(dragon => (<Card document={dragon} />))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {

  
  let rockets = await getRockets();

  let astronauts = await getAstronauts();
  astronauts = astronauts.slice(0, 4);
  
  let dragons = await getDragons();

  let launches = await getLaunches();
  launches = launches.slice(0,4)




  return {
    props: {
      rockets,
      launches,
      astronauts,
      dragons
    },
  }
}

export default Home
