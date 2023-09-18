import React from 'react';
import useSWR from 'swr';
import { MAP_KEY } from '../../hooks/useMap';
import { INFO_KEY } from '../../hooks/useInfo';
import type { NaverMap } from '../../types/map';
import type { Info } from '../../types/info';
import Marker from './Marker';

const Markers = () => {
  // 7.1. 지금 까지 저장해 둔 전역상태들을 이용
  // 7.2. swr 에서 useSWR 을 사용하고 인자로 키를 전달하면
  //      전역상태로 관리되고 있는 map data 를 얻을 수 있다.
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  // 7.3. swr 에서 useSWR 을 사용하고 인자로 키를 전달하면
  //      전역상태로 관리되고 있는 정보 data 를 얻을 수 있다.
  const { data: infos } = useSWR<Info[]>(INFO_KEY);

  //7.4 둘 중 하나라도 없으면 null 을 리턴하고
  if (!map || !infos) return null;

  // 7.5. 있다면 Marker 컴포넌트를 렌더링 한다.
  return (
    <>
      {infos.map((item, idx) => {
        // 7.6 Marker 는 마커를 그릴 위치 즉 위경도,
        return <Marker map={map} cordinates={item.cordinates} key={idx} />;
      })}
    </>
  );
};
export default Markers;
