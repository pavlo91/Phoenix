import { useContext, useEffect } from 'react';
import L, { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import 'leaflet.tilelayer.colorfilter';
import 'leaflet/dist/leaflet.css';
import '@changey/react-leaflet-markercluster/dist/styles.min.css';
import { MapMarkerPoints } from 'data/mapMarkerPoints';
import { AppContext } from 'providers/AppProvider';

const LayerComponent = ({ data }: { data: MapMarkerPoints[] }) => {
  const mapMarker = L.icon({
    iconUrl: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAACXBIWXMAAAFgAAABYAEg2RPaAAADpElEQVRYCZ1XS1LbQBBtybIdiMEJKSpUqihgEW/xDdARyAnirOIl3MBH8NK7mBvkBpFv4Gy9IRSpFIQiRPyNfqkeZkY9HwmFt7Lm06+7p/vN2MmyDIrQ6QebALAHAD4AbFuWfQeAAACGs5H/w5jlsJJw4wMA+GhMFuMA99jIDJJOP+ihZwDQFmNuowWO1wS3viDXpdEdZPEc0odruj0EgN5s5H8tJOEEX8R3rbkMtcU34NTqhe5nSQTJ7Tkk80s6/Gk28scGiULguFBffgdufdEwWoQ0uoXo8hdAlooVH0REjISfwZSlyHGh0V5n6aHAtKTxXI5g6nQnMH0P4bEgwtR18Yw8Pj8QZ4ARUAI0Hl+fQZZGisGEBVwHr7XKzox57DXZ/ij8Cdwe2u057z9/wygOxRl4S2vSUHx1oucaMQGAHTrgtdag9mK5aN+Wx/uAAQ9Zenp/SRce4TpaNbQK4+sTcGqeTB/aIXv3XN5oj2VKqii++U0JunpZ8urxee4hvjqVc2hHpBDXuKKT9XMgVYJ1/1fPGSeaikzgmWWkMIi9bVf8UhotXxzORn5gWFchI8QyttlzjS0qpsaIGY2MMsujV/AUSdcY0dDpB6/EiOPYzclR1CI5mOez3ekHvrFLxa7cR5pTscfrXjk0Vhm5V2PqLUWnH3R5GbPGpMVD7E1ckXesKBQ7AS/vmQ1c0+kHuxpBj98lTCm8pbc5QRJRdZ6qHb/wGryXq3Lxszv+5gySuwvxueXySwYvHEjuQ9ofTGKYlrmK1EsCHMd5SoD7mZ1HHFCBHLNbMEshvrugqWLn01hpVVJhFgVGkDvK7hR6n2B+d9C7xsqWsbkqHv4cCsWezEb+o2SR+SFweUBxfA5wH7kShjKt2vWL57Px3GhIFEezkb8pxvUWHYhotAfCk2AtkEcxoOttrxUWDR5svb1emSQKj0WXK1HYIgFREbiBqmoZcB2RkbE+byMZiosorVgAZF1ID7yQhEs38wa7nUqNDezdlavC2HbBGSQkGgZ8uJVBmzeiKCRRpEa9ilWghORVeGB7BxeSKF5xqbFBkxBrFKUk/JHA7ppENQaCnCjthK+3opCEYyANztXmZN858cDYWSUSHk3A311GAZDvo6deNKUk1EsqnJoQlkYBNlmxQZeaMgmxoUokICoHDce351RCCiuKoirJWEgNOYvQplM2VCLhUqF7jf94rW9kHVUjQeheV4riv0i4ZOzzz/2y/+0KAOAfr4EE4HpCFhwAAAAASUVORK5CYII=`
  });
  const map = useMap();
  const { config } = useContext(AppContext);

  const { theme } = config;
  const filter =
    theme === 'dark'
      ? [
          'invert:98%',
          'grayscale:69%',
          'bright:89%',
          'contrast:111%',
          'hue:205deg',
          'saturate:1000%'
        ]
      : ['bright:101%', 'contrast:101%', 'hue:23deg', 'saturate:225%'];

  useEffect(() => {
    map.invalidateSize();
  }, [config]);

  useEffect(() => {
    if (map) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (L.tileLayer as any)
        .colorFilter(
          'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
          {
            attribution: null,
            transparent: true,
            filter: filter
          }
        )
        .addTo(map);
    }
  }, [theme]);

  return (
    <>
      <TileLayer
        url={'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'}
      />
      <MarkerClusterGroup chunkedLoading={true} spiderfyOnMaxZoom={false}>
        {data.map(marker => (
          <Marker
            key={marker.id}
            position={[marker.lat, marker.lng]}
            icon={mapMarker}
          >
            <Popup>
              <h6 className="mb-1">{marker.name}</h6>
              <p className="m-0 text-500">
                {marker.street} {marker.location}
              </p>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </>
  );
};

const EcomTopRegionsMap = ({ data, ...rest }: { data: MapMarkerPoints[] }) => {
  const position: LatLngExpression = [10.737, 0];
  const {
    config: { isRTL }
  } = useContext(AppContext);

  return (
    <MapContainer
      zoom={isRTL ? 1.8 : 1.5}
      minZoom={isRTL ? 1.8 : 1.3}
      zoomSnap={0.5}
      center={position}
      {...rest}
      className="h-100 bg-white"
    >
      <LayerComponent data={data} />
    </MapContainer>
  );
};

export default EcomTopRegionsMap;
