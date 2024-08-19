import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowDown = ({ ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="m12 14.293 5.646-5.647.707.708L12 15.707 5.646 9.354l.708-.708L12 14.293Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrowDown;
