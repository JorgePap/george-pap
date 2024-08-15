import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const MenuIcon = ({ ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Menu">
      <path id="Vector 14" d="M2 7H22" />
      <path id="Vector 15" d="M6 12H18" />
      <path id="Vector 16" d="M2 17H22" />
    </g>
  </svg>
);
export default MenuIcon;
