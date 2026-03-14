import Hyperspeed from './ui/landing-ui';

export default function Demo() {
  return (
    <Hyperspeed
      effectOptions={{
        distortion: 'turbulentDistortion',
        length: 400,
        roadWidth: 9,
        islandWidth: 2,
        lanesPerRoad: 3,
        fov: 90,
        fovSpeedUp: 150,
        speedUp: 2,
        carLightsFade: 0.4,
        totalSideLightSticks: 50,
        lightPairsPerRoadWay: 50,
        shoulderLinesWidthPercentage: 0.05,
        brokenLinesWidthPercentage: 0.1,
        brokenLinesLengthPercentage: 0.5,
        lightStickWidth: [0.12, 0.5],
        lightStickHeight: [1.3, 1.7],
        movingAwaySpeed: [60, 80],
        movingCloserSpeed: [-120, -160],
        carLightsLength: [20, 60],
        carLightsRadius: [0.05, 0.14],
        carWidthPercentage: [0.3, 0.5],
        carShiftX: [-0.2, 0.2],
        carFloorSeparation: [0.05, 1],
        colors: {
          roadColor: 526344,
          islandColor: 657930,
          background: 0,
          shoulderLines: 1250072,
          brokenLines: 1250072,
          leftCars: [14441248, 14459680, 14426144],
          rightCars: [3361783, 15066861, 12568307],
          sticks: 12970219
        }
      }}
    />
  );
}