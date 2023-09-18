import { useCallback } from 'react';
import { Info } from '../types/info';
import { mutate } from 'swr';

// 데이터를 저장하고 갱신할 때 사용될 키
export const INFO_KEY = '/infos';

const useInfos = () => {
  const initializeInfos = useCallback((infos: Info[]) => {
    mutate(INFO_KEY, infos);
  }, []);

  return {
    initializeInfos,
  };
};
export default useInfos;
