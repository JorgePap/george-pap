import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ThreeJsIcon = ({ ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 512 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={10}
    {...props}
  >
    <g transform="matrix(2.25096,0,0,2.25096,256.253,256.48)">
      <g id="Three.js_Icon.svg" transform="matrix(1,0,0,1,-113.385,-113.385)">
        <g transform="matrix(1,0,0,1,8.964,4.2527)">
          <path
            d="M63.02,200.61L19.807,25.67L193.037,75.544L63.02,200.61Z"
            stroke="black"
            strokeWidth="4px"
          />
          <path
            d="M106.39,50.612L127.981,138.108L41.414,113.163L106.39,50.612Z"
            stroke="black"
            strokeWidth="4px"
          />
          <path
            d="M84.91,125.03L74.186,81.565L117.194,93.911L84.91,125.03Z"
            stroke="black"
            strokeWidth="4px"
          />
          <path
            d="M63.458,38.153L74.182,81.618L31.174,69.272L63.458,38.153Z"
            stroke="black"
            strokeWidth="4px"
          />
          <path
            d="M149.47,62.93L160.194,106.395L117.186,94.049L149.47,62.93Z"
            stroke="black"
            strokeWidth="4px"
          />
          <path
            d="M84.915,125.06L95.639,168.525L52.631,156.179L84.915,125.06Z"
            stroke="black"
            strokeWidth="4px"
          />
        </g>
      </g>
    </g>
  </svg>
);
export default ThreeJsIcon;
