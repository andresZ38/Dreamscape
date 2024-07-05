import * as React from "react";
import Svg, { Path } from "react-native-svg";
import ThemeContext from "../../../theme/ThemeContext";
const UserIcon = (props) => {
  const theme = React.useContext(ThemeContext);
  return (
    <Svg
      width={16}
      height={21}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.875 13.8326C12.1451 13.8326 15.75 14.5722 15.75 17.4286C15.75 20.285 12.122 21 7.875 21C3.60486 21 0 20.2593 0 17.404C0 14.5475 3.62694 13.8326 7.875 13.8326ZM7.875 0C10.7673 0 13.0858 2.47206 13.0858 5.55598C13.0858 8.6399 10.7673 11.112 7.875 11.112C4.9827 11.112 2.66424 8.6399 2.66424 5.55598C2.66424 2.47206 4.9827 0 7.875 0Z"
        fill={theme.color}
      />
    </Svg>
  );
};
export default UserIcon;
