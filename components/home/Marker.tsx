import { useEffect } from 'react';
import type { Marker } from '../../types/map';

// 8.1. Marker 는 맵과 위경도를 필수 값으로 갖는다.
const Marker = ({ map, cordinates }: Marker): null => {
  // 8.2 Mount 가 되었을 때
  useEffect(() => {
    // 8.3  map 이 있다면
    let marker: naver.maps.Marker | null = null;

    if (map) {
      // 네이버 api 활용
      /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Marker.html */
      marker = new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(...cordinates),
      });
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default Marker;
