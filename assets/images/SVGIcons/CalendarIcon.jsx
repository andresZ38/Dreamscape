import * as React from "react";
import { useContext } from "react";
import Svg, { Path } from "react-native-svg";
import ThemeContext from "../../../theme/ThemeContext";
const CalendarIcon = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <Svg
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.5 7.16H5.5C5.08579 7.16 4.75 7.49579 4.75 7.91C4.75 8.32421 5.08579 8.66 5.5 8.66H14.5C14.9142 8.66 15.25 8.32421 15.25 7.91C15.25 7.49579 14.9142 7.16 14.5 7.16Z"
        fill={theme.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.89 2.57H15C17.7614 2.57 20 4.80858 20 7.57V16.57C20 19.3314 17.7614 21.57 15 21.57H5C3.67392 21.57 2.40215 21.0432 1.46447 20.1055C0.526784 19.1679 0 17.8961 0 16.57V7.57C0 4.80858 2.23858 2.57 5 2.57H5.09V0.75C5.09 0.335786 5.42579 0 5.84 0C6.25421 0 6.59 0.335786 6.59 0.75V2.57H13.39V0.75C13.39 0.335786 13.7258 0 14.14 0C14.5542 0 14.89 0.335786 14.89 0.75V2.57ZM15 20.07C16.933 20.07 18.5 18.503 18.5 16.57V7.57C18.5 5.637 16.933 4.07 15 4.07H5C3.067 4.07 1.5 5.637 1.5 7.57V16.57C1.5 18.503 3.067 20.07 5 20.07H15Z"
        fill={theme.color}
      />
    </Svg>
  );
};
export default CalendarIcon;
