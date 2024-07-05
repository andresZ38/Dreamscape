import * as React from "react";
import { useContext } from "react";
import Svg, { Path } from "react-native-svg";
import ThemeContext from "../../../theme/ThemeContext";
const BookmarkIcon = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <Svg
      width={18}
      height={20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.191 -3.05176e-05C16.28 -3.05176e-05 18 1.77997 18 4.82997V15.16C18 18.26 16.28 20 13.191 20H4.81C1.77 20 0 18.26 0 15.16V4.82997C0 1.77997 1.77 -3.05176e-05 4.81 -3.05176e-05H13.191ZM5.08 13.74C4.78 13.71 4.49 13.85 4.33 14.11C4.17 14.36 4.17 14.69 4.33 14.95C4.49 15.2 4.78 15.35 5.08 15.31H12.92C13.319 15.27 13.62 14.929 13.62 14.53C13.62 14.12 13.319 13.78 12.92 13.74H5.08ZM12.92 9.17897H5.08C4.649 9.17897 4.3 9.52997 4.3 9.95997C4.3 10.39 4.649 10.74 5.08 10.74H12.92C13.35 10.74 13.7 10.39 13.7 9.95997C13.7 9.52997 13.35 9.17897 12.92 9.17897ZM8.069 4.64997H5.08V4.65997C4.649 4.65997 4.3 5.00997 4.3 5.43997C4.3 5.86997 4.649 6.21997 5.08 6.21997H8.069C8.5 6.21997 8.85 5.86997 8.85 5.42897C8.85 4.99997 8.5 4.64997 8.069 4.64997Z"
        fill={theme.color}
      />
    </Svg>
  );
};
export default BookmarkIcon;
