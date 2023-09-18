# 국민건강증진센터 위치 안내 서비스

1. index.tsx

2. SWR
   yarn add swr 로 설치

3. hooks 폴더 아래 useInfo.tsx

4. index.tsx

5. MapScene.tsx

Marker 를 그리기 위해서는 마커가 네이버 map 객체에 접근할 수있어야 한다.
Map.tsx 에서 만든 map 객체를 전역상태로 공유하여 마커에서도 접근할 수 있게 만들어야 한다.

6. useMap.tsx

7. Markers.tsx 생성

8. Marker.tsx 생성

9. MapScene.tsx 에 배치하여 마무리 출력
