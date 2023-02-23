import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BackArrow = (props) => (
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
      d="M19 13.025a1 1 0 1 0 0-2H6.422l4.333-4.316a1 1 0 1 0-1.41-1.418l-6.038 6.013a.997.997 0 0 0-.013 1.43l6.05 6.024a1 1 0 0 0 1.411-1.418l-4.334-4.315H19Z"
      fill="#111112"
    />
  </Svg>
)

export default BackArrow;
