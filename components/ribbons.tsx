import Ribbons from '../components/ui/Ribbons';

<div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
  <Ribbons
    baseThickness={7}
    colors={["#5227FF","#06fcdb","#bc7cc1"]}
    speedMultiplier={0.5}
    maxAge={500}
    enableFade={false}
    enableShaderEffect
  />
</div>