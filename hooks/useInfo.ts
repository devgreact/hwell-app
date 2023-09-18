import { useCallback } from 'react';
import { Info } from '../types/info';
import { mutate } from 'swr';

export const STORE_KEY = '/infos';

const useInfos = () => {
  const initializeInfos = useCallback((infos: Info[]) => {
    mutate(STORE_KEY, infos);
  }, []);

  return {
    initializeInfos,
  };
};
export default useInfos;
