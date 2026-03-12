import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function LeafletMap() {
    return (
        <MapContainer
            center={[0, 0]}
            zoom={1}
            style={{ height: '800px', width: '800px' }}
        >
        <TileLayer
            attribution='© OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </MapContainer>
    )
}

export default LeafletMap