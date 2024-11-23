import { LocationInformation } from '../model/map';
import { SectionTitle } from './SectionTitle';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Marker from '@/assets/Marker.svg';
import { Spacing } from '@/components/common/Spacing';

export function Location({ location }: { location: LocationInformation }) {
    return (
        <div className="flex flex-col justify-start items-start">
            <SectionTitle>위치</SectionTitle>
            <Spacing direction="vertical" size={20} />
            <Map
                className="rounded-lg"
                center={{ lat: location?.latitude, lng: location?.longitude }}
                style={{ width: '100%', height: '242px' }}
                level={9}
            >
                <MapMarker
                    position={{ lat: location?.latitude, lng: location?.longitude }}
                    image={{
                        src: Marker,
                        size: {
                            width: 34,
                            height: 39,
                        },
                        options: {
                            offset: {
                                x: 10,
                                y: 39,
                            },
                        },
                    }}
                />
            </Map>
        </div>
    );
}
