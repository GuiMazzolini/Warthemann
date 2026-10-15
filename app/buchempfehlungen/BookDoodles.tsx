import type { CSSProperties, ReactNode } from 'react';

function OpenBook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 72" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M60 16c-8 6-24 8-48 4v40c24 6 40 4 48-2" />
      <path d="M60 16c8 6 24 8 48 4v40c-24 6-40 4-48-2" />
      <path d="M60 18v38" />
      <path d="M28 28h16M28 36h20M28 44h14" strokeWidth="1.2" />
      <path d="M76 28h16M76 36h18M76 44h12" strokeWidth="1.2" />
    </svg>
  );
}

function ClosedBook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 84" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 10h30c4 0 6 2 6 6v56c0 2-4 4-8 3-6-2-16-2-22 1-4 2-8 1-8-2V14c0-3 1-4 2-4z" />
      <path d="M16 14h28" strokeWidth="1.2" />
      <path d="M22 10v-4h8v6" />
    </svg>
  );
}

function BookStack({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 64" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18h62v12H14z" />
      <path d="M18 30h66v12H18z" />
      <path d="M12 42h60v12H12z" />
      <path d="M22 18v12M70 30v12M24 42v12" strokeWidth="1.2" />
    </svg>
  );
}

function Doodle({
  className,
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div className={`absolute ${className ?? ''}`} style={style}>
      {children}
    </div>
  );
}

function inMargin(place: 'edge' | 'middle' | 'card') {
  if (place === 'edge') return 'max(0.75rem, calc((100% - 56rem) / 2 * 0.06))';
  if (place === 'middle') return 'max(0.75rem, calc((100% - 56rem) / 2 * 0.4))';
  return 'max(0.75rem, calc((100% - 56rem) / 2 - 6rem))';
}

export function BookDoodles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40" aria-hidden="true">
      <Doodle className="top-[5%] -rotate-12" style={{ left: inMargin('edge') }}>
        <OpenBook className="w-20" />
      </Doodle>
      <Doodle className="top-[8%] rotate-6" style={{ right: inMargin('middle') }}>
        <ClosedBook className="w-12" />
      </Doodle>
      <Doodle className="top-[18%] rotate-12" style={{ left: inMargin('card') }}>
        <ClosedBook className="w-11" />
      </Doodle>
      <Doodle className="top-[24%] -rotate-3" style={{ right: inMargin('edge') }}>
        <BookStack className="w-16" />
      </Doodle>
      <Doodle className="top-[34%] rotate-6" style={{ left: inMargin('middle') }}>
        <OpenBook className="w-16" />
      </Doodle>
      <Doodle className="top-[42%] -rotate-6" style={{ right: inMargin('card') }}>
        <ClosedBook className="w-14" />
      </Doodle>
      <Doodle className="top-[52%] -rotate-12" style={{ left: inMargin('edge') }}>
        <BookStack className="w-14" />
      </Doodle>
      <Doodle className="top-[58%] rotate-3" style={{ right: inMargin('middle') }}>
        <OpenBook className="w-20" />
      </Doodle>
      <Doodle className="top-[68%] rotate-12" style={{ left: inMargin('card') }}>
        <ClosedBook className="w-12" />
      </Doodle>
      <Doodle className="top-[74%] rotate-3" style={{ right: inMargin('edge') }}>
        <BookStack className="w-20" />
      </Doodle>
      <Doodle className="top-[84%] -rotate-6" style={{ left: inMargin('middle') }}>
        <OpenBook className="w-24" />
      </Doodle>
      <Doodle className="top-[90%] rotate-6" style={{ right: inMargin('card') }}>
        <ClosedBook className="w-11" />
      </Doodle>
    </div>
  );
}
