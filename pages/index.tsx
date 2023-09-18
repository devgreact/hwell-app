import Header from '@/components/common/Header';
import MapScene from '@/components/home/MapScene';
import useInfos from '@/hooks/useInfo';
import { Info } from '@/types/info';
import { useEffect } from 'react';
interface IProps {
  infos: Info[];
}
export default function Home({ infos }: IProps) {
  // 2. 매장 데이터 출력
  // 3. SWR 설치
  // 4. useInfos 함수를 가지고 옮
  const { initializeInfos } = useInfos();
  useEffect(() => {
    // 4.1 새로운 매장 데이터가 들어왔을 때마다 그 매장 데이터로 전역 데이터를 갱신함.
    console.log(infos);
    initializeInfos(infos);
  }, [initializeInfos, infos]);
  return (
    <>
      <Header />
      <MapScene />
    </>
  );
}
// 1. pre-rendering 하여서 SSG 생성
export async function getStaticProps() {
  // public 에 있는 info.json 가져오기
  // prop 으로 넘겨줌.
  const infos = (await import('@/public/info.json')).default;

  return {
    props: { infos },
    revalidate: 3600,
  };
}
