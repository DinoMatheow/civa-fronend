import { useState } from "react";
import { Mountain } from "lucide-react";

interface HomePhotoProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const HomePhoto = ({ src, alt, className = "", priority = false }: HomePhotoProps) => {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  return (
    <div className={`overflow-hidden bg-gradient-to-br from-[#3b2359] via-[#654179] to-[#b35d87] ${className}`}>
      {failedSrc === src ? (
        <div role="img" aria-label={`Fotografía no disponible. ${alt}`} className="flex h-full w-full items-center justify-center">
          <Mountain aria-hidden="true" className="h-24 w-24 text-white/25" strokeWidth={1} />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={priority ? 1920 : 1280}
          height={priority ? 1440 : 960}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onError={() => setFailedSrc(src)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
};
