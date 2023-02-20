import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CalenderIcon = (props) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.915 1.708a.75.75 0 0 0-1.5 0v.68H5.198v-.68a.75.75 0 1 0-1.5 0v.68H2.304A2.18 2.18 0 0 0 .125 4.567v10.006a2.18 2.18 0 0 0 2.18 2.18H12.31a2.18 2.18 0 0 0 2.18-2.18V4.567a2.18 2.18 0 0 0-2.18-2.18h-1.395v-.679Zm2.075 4.968V4.567a.68.68 0 0 0-.68-.68h-1.395v.68a.75.75 0 0 1-1.5 0v-.68H5.198v.68a.75.75 0 1 1-1.5 0v-.68H2.304a.68.68 0 0 0-.679.68v2.109h11.364Zm-11.365 1.5h11.364v6.397a.68.68 0 0 1-.679.68H2.304a.68.68 0 0 1-.679-.68V8.176Z"
      fill="#616568"
    />
  </Svg>
)

export default CalenderIcon;
