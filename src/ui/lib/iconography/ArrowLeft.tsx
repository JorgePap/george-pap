import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowLeft = ({ ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="m9.707 12 5.147-5.146-.708-.708L8.293 12l5.853 5.854.708-.708L9.707 12Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrowLeft;
