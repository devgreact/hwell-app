import React from 'react';
import useSWR from 'swr';
import { MAP_KEY } from '../../hooks/useMap';
import { INFO_KEY } from '../../hooks/useInfo';
import type { NaverMap } from '../../types/map';
import type { Info } from '../../types/info';
import Marker from './Marker';

const Markers = () => {
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  const { data: infos } = useSWR<Info[]>(INFO_KEY);

  if (!map || !infos) return null;
  return (
    <>
      {infos.map((item, idx) => {
        return <Marker map={map} cordinates={item.cordinates} key={idx} />;
      })}
    </>
  );
};
export default Markers;
