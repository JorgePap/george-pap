import { FC } from "react";

export const Image: FC<{
  imageSrc: string;
  alt?: string;
  className?: string;
}> = ({ imageSrc, alt, className }) => {
  return (
    <div className={`w-[32px] h-[32px] ${className}`}>
      <img alt={alt} src={imageSrc} className="rounded-md" />
    </div>
  );
};

export default Image;
