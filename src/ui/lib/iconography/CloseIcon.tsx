import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CloseIcon = ({ ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Menu">
      <path id="Vector 14" d="M6 18L18 6" />
      <path id="Vector 16" d="M6 6L18 18" />
    </g>
  </svg>
);
export default CloseIcon;
