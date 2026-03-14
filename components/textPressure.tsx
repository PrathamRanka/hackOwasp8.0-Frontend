
import TextPressure from './ui/textpressure';

export default function TextPressureSection() {
  return (
    <div style={{ position: 'relative', height: '56vh', minHeight: '200px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 'min(72vw, 900px)', height: '100%' }}>
        <TextPressure
          text="HackOwasp8.0"
          flex={false}
          alpha
          stroke
          width
          weight
          italic
          textColor="#ffffff"
          strokeColor="#5227FF"
          minFontSize={58}
        />
      </div>
    </div>
  );
}