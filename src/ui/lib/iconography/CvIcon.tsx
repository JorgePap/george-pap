import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CvIcon = ({ ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 6C6.5 6 6 6 5.5 6.3C4.9 6.6 4.5 7 4.3 7.5C4 8 4 8.5 4 10C4 11.5 4 12 4.3 12.5C4.5 13 4.9 13.4 5.5 13.7C6 14 6.5 14 8 14M11 6L14 14L17 6"
      stroke="white"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default CvIcon;
