
import TextPressure from './ui/textpressure';

export default function TextPressureSection() {
  return (
    <div className="relative flex h-[34vh] min-h-45 w-full items-center justify-center md:h-[42vh]">
      {/* Static pre-rendered heading for mobile / touch — no JS interaction needed */}
      <h1
        className="md:hidden text-center font-black uppercase tracking-tight text-white"
        style={{
          fontSize: 'clamp(2.9rem, 13vw, 5.5rem)',
          WebkitTextStroke: '1px #5227FF',
          margin: 0,
          lineHeight: 1.1,
        }}
      >
        HackOwasp8.0
      </h1>

      {/* Interactive variable-font effect for tablet / desktop */}
      <div className="hidden h-full md:block" style={{ width: 'min(82vw, 1050px)' }}>
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
          minFontSize={72}
        />
      </div>
    </div>
  );
}