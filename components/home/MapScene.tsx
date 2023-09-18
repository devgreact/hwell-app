import React from 'react';
import Map from './Map';
import useMap from '@/hooks/useMap';
import { NaverMap } from '@/types/map';
import Markers from './Markers';

const MapScene = () => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    console.log('로드 완료~');
    // 5.1. swr 을 이용하여 전역으로 map 을 관리할 수 있도록 한다.
    initializeMap(map);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      {/* 9.1. */}
      <Markers />
    </>
  );
};

export default MapScene;
