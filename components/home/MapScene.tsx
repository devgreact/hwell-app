import React from 'react';
import Map from './Map';
import useMap from '@/hooks/useMap';
import { NaverMap } from '@/types/map';

const MapScene = () => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    console.log('로드 완료~');
    initializeMap(map);
  };

  return <Map onLoad={onLoadMap} />;
};

export default MapScene;
