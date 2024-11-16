import type { SVGProps } from "react";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const ScrollDown = ({ ...props }: SVGProps<SVGSVGElement> & SVGRProps) => {
  const keyframes = `
    @keyframes slide-2 {
      to {
        transform: translateY(2px);
      }
    }
  `;

  return (
    <svg
      viewBox="0 0 24 24" // Keeping the original viewBox, it determines the SVG scaling
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <style>{keyframes}</style>
      <path
        d="M17.358 12.632a.714.714 0 01-.092 1.006l-4.276 3.564a.712.712 0 01-.933 0L7.78 13.638a.714.714 0 11.915-1.097l3.078 2.565V7.375a.75.75 0 011.5 0v7.73l3.079-2.564a.714.714 0 011.006.091z"
        className="animate-scroll-down"
      />
    </svg>
  );
};

export default ScrollDown;
