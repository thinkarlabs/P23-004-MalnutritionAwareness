import * as React from "react"
import Svg, { Path } from "react-native-svg"

const UserActiveIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.097 7.5a5.2 5.2 0 1 1 10.4 0 5.2 5.2 0 0 1-10.4 0ZM3.8 20.699a5.2 5.2 0 0 1 5.2-5.2h6.6a5.2 5.2 0 0 1 5.2 5.2 3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3Z"
      fill="#705EEB"
    />
  </Svg>
)

export default UserActiveIcon
