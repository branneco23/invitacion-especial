interface BackgroundOverlayProps {
  imageUrl: string;
}

export default function BackgroundOverlay({ imageUrl }: BackgroundOverlayProps) {
  return (
    <>
      <div 
        className="fixed inset-0 z-0 bg-no-repeat bg-cover filter blur-[2px] scale-105 opacity-40 transition-all duration-700"
        style={{ 
          backgroundImage: `url('${imageUrl}')`,
          backgroundPosition: "center 30%"
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-0 pointer-events-none" />
    </>
  );
}