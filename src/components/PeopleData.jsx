import { Arrow } from './Arrow'

export const PeopleData = () => {
  return (
    <div className="dataContainer">
      <div className="backHome">
        <Arrow />
        <p>Back home</p>
      </div>

      <div className="peopleData">
        <div className="peopleData-header">
          <h1>Tomas Ferreras</h1>
          <p>Frontend developer (PD: estoy quemado por el sol)</p>
        </div>

        <div className="peopleData-body">
          <p>
            Convierto diseños en aplicaciones o sitios web pixel-perfect. Me
            entusiasmada todo el espectro de desarrollo, así que con frecuencia
            participo en el desarrollo backend.
          </p>
          <p>
            Disfruto de trabajar y resolver desafios de software complejos para
            ayudar a las personas a conseguir sus objetivos a traves de la
            tecnologia.
          </p>
          <p>
            Soy una persona tranquila, un amante de los tragos y me gusta jugar
            futbol, soy el mejor arquero que puedas tener.
          </p>
        </div>
      </div>
    </div>
  )
}
