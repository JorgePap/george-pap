import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowUp = ({ ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="m12 9.707-5.646 5.647-.708-.707L12 8.293l6.354 6.354-.707.707L12 9.707Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrowUp;
