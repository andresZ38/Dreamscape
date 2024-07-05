import * as React from "react";
import { useContext } from "react";
import Svg, { Path } from "react-native-svg";
import ThemeContext from "../../../theme/ThemeContext";
const HelpIcon = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <Svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.85 10.81H4.46C4.19128 10.8101 3.93385 10.702 3.74573 10.5101C3.55761 10.3182 3.45463 10.0587 3.46 9.79V8.4C3.46 7.84772 3.90772 7.4 4.46 7.4H5.85C6.40229 7.4 6.85 7.84772 6.85 8.4V9.81C6.85 10.3623 6.40229 10.81 5.85 10.81ZM5.37 8.88H4.94V9.31H5.37V8.88Z"
        fill={theme.color}
      />
      <Path
        d="M4.13 13.34H8.56C8.97421 13.34 9.31 13.0042 9.31 12.59C9.31 12.1758 8.97421 11.84 8.56 11.84H4.13C3.71579 11.84 3.38 12.1758 3.38 12.59C3.38 13.0042 3.71579 13.34 4.13 13.34Z"
        fill={theme.color}
      />
      <Path
        d="M10 14.37H4.13C3.71579 14.37 3.38 14.7058 3.38 15.12C3.38 15.5342 3.71579 15.87 4.13 15.87H10C10.4142 15.87 10.75 15.5342 10.75 15.12C10.75 14.7058 10.4142 14.37 10 14.37Z"
        fill={theme.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.53 7.44L8.53 0.44C8.38266 0.313725 8.19401 0.246093 8 0.25H5C2.37665 0.25 0.25 2.37665 0.25 5V15C0.25 17.6234 2.37665 19.75 5 19.75H11C13.6234 19.75 15.75 17.6234 15.75 15V8C15.7534 7.79162 15.6743 7.59034 15.53 7.44ZM8.75 2.79L13.21 7.25H10C9.30964 7.25 8.75 6.69036 8.75 6V2.79ZM1.75 15C1.75549 16.7926 3.20735 18.2445 5 18.25H11C12.7926 18.2445 14.2445 16.7926 14.25 15V8.75H10C8.48122 8.75 7.25 7.51878 7.25 6V1.75H5C3.20735 1.75549 1.75549 3.20735 1.75 5V15Z"
        fill={theme.color}
      />
    </Svg>
  );
};
export default HelpIcon;
