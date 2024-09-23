import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const GreekFlag = ({ ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 256 256"
    {...props}
  >
    <defs></defs>
    <g
      stroke="none"
      strokeWidth={0}
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit={10}
      fillRule="nonzero"
      opacity={1}
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    >
      <circle
        cx="45"
        cy="45"
        r="45"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fillRule="nonzero"
        opacity={1}
        fill={"rgb(13,94,175)"}
        transform="  matrix(1 0 0 1 0 0) "
      />
      <rect
        x="-10"
        y="-20"
        rx="0"
        ry="0"
        width="130"
        height="110"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fillRule="nonzero"
        opacity={1}
        fill={"none"}
        transform=" matrix(1 0 0 1 0 0) "
      />
      <path
        d="M 87.429 30 H 50 v 10 h 39.717 C 89.333 36.532 88.555 33.185 87.429 30 z"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fillRule="nonzero"
        opacity={1}
        fill={"rgb(243,244,245)"}
        transform=" matrix(1 0 0 1 0 0) "
      />
      <path
        d="M 50 20 h 32.417 c -2.529 -3.778 -5.618 -7.148 -9.144 -10 H 50 V 20 z"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fillRule="nonzero"
        opacity={1}
        fill={"rgb(243,244,245)"}
        transform=" matrix(1 0 0 1 0 0) "
      />
      <path
        d="M 0.283 50 c 0.384 3.468 1.162 6.815 2.288 10 h 84.859 c 1.126 -3.185 1.904 -6.532 2.288 -10 H 30 V 30 h 20 V 20 H 30 V 2.571 c -3.56 1.259 -6.915 2.947 -10 5.012 V 20 H 7.583 c -2.065 3.085 -3.754 6.44 -5.012 10 H 20 v 20 H 0.283 z"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fillRule="nonzero"
        opacity={1}
        fill={"rgb(243,244,245)"}
        transform=" matrix(1 0 0 1 0 0) "
      />
      <path
        d="M 7.583 70 c 2.529 3.778 5.618 7.148 9.144 10 h 56.546 c 3.526 -2.852 6.615 -6.222 9.144 -10 H 7.583 z"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        fillRule="nonzero"
        opacity={1}
        fill={"rgb(243,244,245)"}
        transform=" matrix(1 0 0 1 0 0) "
      />
    </g>
  </svg>
);
export default GreekFlag;
