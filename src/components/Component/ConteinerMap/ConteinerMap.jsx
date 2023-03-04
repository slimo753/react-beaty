import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import './ConteinerMap.css'

function ConteinerMap() {

    const defaultState = {
        center: [54.782812, 56.031877],
        zoom: 16,
    };

    return(
        <YMaps>
            <Map defaultState={defaultState}>
                <Placemark geometry={[55.684758, 37.738521]}/>
            </Map>
        </YMaps>            
    )
}

export default ConteinerMap