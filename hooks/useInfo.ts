import { useCallback } from 'react';
import { Info } from '../types/info';
import { mutate } from 'swr';

export const STORE_KEY = '/infos';
// 3.1. 하나의 함수 정의됨 : 새로운 매장 데이터를 인자로 받아 그 데이터를 전역상태로 저장함.

const useInfos = () => {
  const initializeInfos = useCallback((infos: Info[]) => {
    // 3.2. swr 의 함수 임
    // 3.3. key 라는 문자열을 이용해서 매장 데이터를 저장해 두겠다는 뜻
    mutate(STORE_KEY, infos);
  }, []);

  return {
    // 3.4. 반환함.
    initializeInfos,
  };
};
export default useInfos;
