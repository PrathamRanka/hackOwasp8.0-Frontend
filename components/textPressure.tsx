
import TextPressure from './ui/textpressure';

export default function TextPressureSection() {
  return (
    <div style={{ position: 'relative', height: '56vh', minHeight: '200px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Static pre-rendered heading for mobile / touch — no JS interaction needed */}
      <h1
        className="md:hidden text-center font-black uppercase tracking-tight text-white"
        style={{
          fontSize: 'clamp(2.4rem, 11vw, 4.5rem)',
          WebkitTextStroke: '1px #5227FF',
          margin: 0,
          lineHeight: 1.1,
        }}
      >
        HackOwasp8.0
      </h1>

      {/* Interactive variable-font effect for tablet / desktop */}
      <div className="hidden md:block" style={{ width: 'min(72vw, 900px)', height: '100%' }}>
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