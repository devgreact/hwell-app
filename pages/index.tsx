import Header from '@/components/common/Header';
import MapScene from '@/components/home/MapScene';
import Markers from '@/components/home/Markers';
import useInfos from '@/hooks/useInfo';
import { Info } from '@/types/info';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
interface IProps {
  infos: Info[];
}
export default function Home({ infos }: IProps) {
  const { initializeInfos } = useInfos();
  useEffect(() => {
    console.log(infos);
    initializeInfos(infos);
  }, [initializeInfos, infos]);
  return (
    <>
      <NextSeo
        title="건강증진센터 위치 서비스"
        description="건강증진센터 위치 서비스 입니다."
      />
      <Header />
      <MapScene />
      <Markers />
    </>
  );
}
// pre-rendering 하여서 SSG 생성
export async function getStaticProps() {
  // public 에 있는 info.json 가져오기
  const infos = (await import('@/public/info.json')).default;
  return {
    props: { infos },
    revalidate: 3600,
  };
}
