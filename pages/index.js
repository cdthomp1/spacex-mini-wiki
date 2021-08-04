import Card from "../components/Card"
import { getAstronauts, getDragons, getLaunches, getRockets,  } from "../utils/utils"

const Home = ({ rockets, launches, astronauts, dragons }) => {
  return (
    <>
      <h1 className="text-center text-white text-8xl p-5 font-barcode">SpaceX MiniWiki</h1>
      <div className="w-11/12 mx-auto">
        <h2 className="text-center font-goldman text-white text-4xl p-5">Rockets</h2>
        <div className="flex flex-wrap gap-x-4">
          {rockets.map((rocket, index) => (<Card key={index} document={rocket} />))}
        </div>
        <h2 className="text-center font-goldman text-white text-4xl p-5">Astronauts</h2>
        <div className="flex flex-wrap gap-x-4">
          {astronauts.map((astro, index) => (<Card key={index} document={astro} />))}
        </div>
        <h2 className="text-center font-goldman text-white text-4xl p-5">Launches</h2>
        <div className="flex flex-wrap gap-x-4">
          {launches.map((launch, index) => (<Card key={index} document={launch} />))}
        </div>
        <h2 className="text-center font-goldman text-white text-4xl p-5">Dragons</h2>
        <div className="flex flex-wrap gap-x-4">
          {dragons.map((dragon, index) => (<Card key={index}document={dragon} />))}
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
