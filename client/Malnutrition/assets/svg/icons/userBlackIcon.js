import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UserBlackIcon = (props) => (
  <Svg
    width={12}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 3.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM6 0a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 6 0ZM1.5 11.75A2.25 2.25 0 0 1 3.75 9.5h4.5a2.25 2.25 0 0 1 2.25 2.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75ZM3.75 8A3.75 3.75 0 0 0 0 11.75 2.25 2.25 0 0 0 2.25 14h7.5A2.25 2.25 0 0 0 12 11.75 3.75 3.75 0 0 0 8.25 8h-4.5Z"
      fill="#111112"
    />
  </Svg>
)

export default UserBlackIcon
