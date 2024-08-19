import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowRight = ({ ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M14.293 12 9.146 6.854l.708-.708L15.707 12l-5.853 5.854-.708-.708L14.293 12Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrowRight;
