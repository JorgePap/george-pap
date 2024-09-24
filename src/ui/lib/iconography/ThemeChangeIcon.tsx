import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ThemeChangeIcon = ({ ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 42 42"
    width="24"
    height="24"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.895 33.9514C23.1932 33.8243 23.3838 33.5359 23.3838 33.1986C23.3838 32.959 23.3056 32.7635 23.1541 32.6217C23.1003 32.5777 22.2204 32.1084 21.2035 31.5805C20.1867 31.0525 19.3361 30.6076 19.3165 30.593C19.3019 30.5734 19.561 30.0308 19.8934 29.3855C21.4577 26.3741 21.4235 26.4572 21.228 26.0563C20.9884 25.5577 20.304 25.4648 19.9569 25.8852C19.8738 25.983 19.2774 27.0829 18.6321 28.3344C17.6495 30.2263 17.4491 30.6516 17.4295 30.8569C17.4051 31.1503 17.5078 31.4191 17.7082 31.556C17.7766 31.6049 18.8472 32.1671 20.084 32.8075C22.4257 34.0199 22.5821 34.0834 22.895 33.9514Z"
      stroke="#F8F8F2"
      strokeWidth="0.5"
    />
    <path
      d="M22.848 30.9804C25.7958 29.8511 28.069 27.2064 28.7828 24.0826C28.9245 23.4617 28.9637 23.1146 28.993 22.2738C29.0516 20.597 28.7437 19.1549 28.025 17.703C27.0424 15.7231 25.5465 14.2321 23.5764 13.2592C22.7747 12.8633 22.3836 12.741 22.1245 12.8095C21.8508 12.8828 21.6503 13.0686 21.5477 13.3277C21.4792 13.5134 21.4743 13.577 21.5281 13.7628C21.6112 14.0658 21.8263 14.2516 22.3347 14.4569C22.9605 14.7062 23.2538 14.8676 23.8551 15.2635C24.5884 15.7573 25.5367 16.7008 26.0207 17.4243C26.8322 18.6513 27.2966 20.0006 27.3846 21.3792C27.5362 23.8088 26.7345 25.9451 25.0283 27.6561C24.1679 28.5165 23.3467 29.064 22.2761 29.4893C21.8165 29.6702 21.6063 29.856 21.5281 30.1542C21.4059 30.6479 21.8165 31.1564 22.3347 31.1417C22.3885 31.1417 22.6183 31.0684 22.848 30.9804Z"
      stroke="#F8F8F2"
      strokeWidth="0.5"
    />
    <path
      d="M15.8801 30.627C16.0756 30.5733 16.32 30.3142 16.3885 30.0893C16.4716 29.8351 16.3787 29.5124 16.1831 29.3218C16.0952 29.2387 15.8556 29.1067 15.6454 29.0236C13.778 28.2854 12.1158 26.7308 11.2946 24.9612C10.6884 23.6608 10.4439 22.3409 10.5368 20.9085C10.6542 19.0704 11.451 17.2714 12.7465 15.9319C13.6215 15.0178 14.5357 14.3969 15.6454 13.9569C15.8556 13.8738 16.0952 13.7418 16.1831 13.6587C16.6133 13.2432 16.4031 12.5099 15.8067 12.3486C15.621 12.2997 15.5525 12.3046 15.2739 12.3975C14.8143 12.549 13.9393 12.9743 13.4602 13.2823C11.6416 14.4409 10.2582 16.1324 9.52489 18.0927C8.67427 20.3561 8.71338 22.9324 9.62266 25.1518C10.6297 27.6059 12.6243 29.5662 15.0832 30.5146C15.5232 30.6857 15.6307 30.7004 15.8801 30.627Z"
      stroke="#F8F8F2"
      strokeWidth="0.5"
    />
    <path
      d="M16.9162 17.3253C16.9993 17.2959 17.1362 17.2031 17.2144 17.12C17.2926 17.0369 17.8939 15.9369 18.5441 14.6708C19.6001 12.6273 19.7321 12.3438 19.7565 12.0945C19.7809 11.7669 19.6685 11.5372 19.4094 11.3807C19.3214 11.327 18.2606 10.7697 17.0531 10.1439C14.9461 9.04889 14.8435 9 14.5746 9C14.2666 9 14.1004 9.08799 13.9097 9.36664C13.7191 9.65018 13.7778 10.1244 14.0368 10.359C14.0906 10.4079 14.9803 10.887 16.0118 11.4199C17.0384 11.9527 17.8793 12.4122 17.8695 12.4416C17.8646 12.4709 17.4198 13.3509 16.8771 14.4019C16.2758 15.5654 15.8847 16.3818 15.8701 16.4991C15.8358 16.7484 15.9874 17.076 16.2074 17.2226C16.4029 17.3546 16.706 17.3986 16.9162 17.3253Z"
      stroke="#F8F8F2"
      strokeWidth="0.5"
    />
  </svg>
);
export default ThemeChangeIcon;