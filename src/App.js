import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet'




function App() {
  return (
    <div>
      <h1>My Map App</h1>
      <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
      </MapContainer>
    </div>
  )
}

export default App
