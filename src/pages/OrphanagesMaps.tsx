import React from 'react';
import logoImg from '../images/map-marque.svg';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map,TileLayer} from 'react-leaflet';

import '../styles/pages/orphanagesmaps.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMaps(){
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={logoImg} alt="happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Patos de Minas</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>
      <Map
        center={[-18.6036847,-46.5102767]}
        zoom={15}
        style={{width:'100%', height:'100%'}}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
      </Map>
      <Link to="#" className="create-orphanege">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  )
}
export default OrphanagesMaps;