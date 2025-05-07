interface Props {
  showPassword: boolean;
}
export default function Eye({ showPassword }: Props) {
  return (
    <svg
      className="scale-150"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="EyeSlash">
        <path
          className="transition-all duration-300"
          id="line"
          d="M6.375 5.3125L27.625 28.6875"
          stroke="#878787"
          strokeWidth="2"
          strokeDasharray="32"
          strokeDashoffset={showPassword ? "32" : "0"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="transition-opacity duration-300"
          id="pupil-right"
          strokeDasharray="20"
          d="M20.5745 20.9313C19.5319 21.8792 18.1554 22.3741 16.7479 22.3071C15.3404 22.2401 14.0171 21.6167 13.0693 20.5741C12.1214 19.5314 11.6265 18.155 11.6935 16.7475C11.7605 15.34 12.3839 14.0167 13.4265 13.0688"
          stroke="#878787"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="transition-opacity duration-300"
          id="pupil-left"
          d={
            showPassword
              ? "M20 12.5C16.8 10.9 14.2844 12.2125 13.4265 13.0688C12.3839 14.0167 11.7605 15.3399 11.6935 16.7474C11.6265 18.1549 12.1214 19.5314 13.0693 20.5741C14.0171 21.6167 15.3404 22.2401 16.7479 22.3071C18.1554 22.3741 19.5319 21.8792 20.5745 20.9313C21.383 20.2875 22.8 18.2 22 15"
              : "M18.0039 11.7822C19.1333 11.9985 20.1621 12.5754 20.9357 13.4263C21.7092 14.2772 22.1858 15.3562 22.2938 16.5011"
          }
          stroke="#878787"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="transition-opacity duration-300"
          id="eye-right"
          d="M27.7026 22.4586C30.5979 19.8661 31.8716 17 31.8716 17C31.8716 17 27.6216 7.43752 16.9966 7.43752C16.0765 7.43626 15.1578 7.51089 14.25 7.66064"
          stroke="#878787"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="transition-opacity duration-300"
          id="eye-left"
          d={
            showPassword
              ? "M18 7.50031C14.8 7.10031 11.2188 8.40754 9.82812 9.11115C4.41336 11.8524 2.125 17.0002 2.125 17.0002C2.125 17.0002 6.375 26.5627 17 26.5627C19.4896 26.5822 21.948 26.0086 24.1719 24.8893C25.4479 24.2595 28.4 22.4 30 20"
              : "M9.82812 9.11084C4.41336 11.8521 2.125 16.9999 2.125 16.9999C2.125 16.9999 6.375 26.5624 17 26.5624C19.4896 26.5819 21.948 26.0083 24.1719 24.889"
          }
          stroke="#878787"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

{
  /* <svg
  width="34"
  height="34"
  viewBox="0 0 34 34"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="EyeSlash">
    <path
      id="pupil-left"
      d="M20 12.5C16.8 10.9 14.2844 12.2125 13.4265 13.0688C12.3839 14.0167 11.7605 15.3399 11.6935 16.7474C11.6265 18.1549 12.1214 19.5314 13.0693 20.5741C14.0171 21.6167 15.3404 22.2401 16.7479 22.3071C18.1554 22.3741 19.5319 21.8792 20.5745 20.9313C21.383 20.2875 22.8 18.2 22 15"
      stroke="#878787"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      id="pupil-right"
      d="M18.0039 11.7822C19.1333 11.9985 20.1621 12.5754 20.9357 13.4263C21.7092 14.2772 22.1858 15.3562 22.2938 16.5011"
      stroke="#878787"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      id="eye-right"
      d="M27.7026 22.4586C30.5979 19.8661 31.8716 17 31.8716 17C31.8716 17 27.6216 7.43752 16.9966 7.43752C16.0765 7.43626 15.1578 7.51089 14.25 7.66064"
      stroke="#878787"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      id="eye-left"
      d="M18 7.50031C14.8 7.10031 11.2188 8.40754 9.82812 9.11115C4.41336 11.8524 2.125 17.0002 2.125 17.0002C2.125 17.0002 6.375 26.5627 17 26.5627C19.4896 26.5822 21.948 26.0086 24.1719 24.8893C25.4479 24.2595 28.4 22.4 30 20"
      stroke="#878787"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
</svg>; */
}
