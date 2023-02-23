import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const BackArrowWithCircle = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={22} height={22} rx={11} fill="#fff" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.665 5.58a.75.75 0 0 1 1.06 0l4.89 4.889a.75.75 0 0 1 0 1.06l-4.89 4.89a.75.75 0 1 1-1.06-1.061l4.359-4.359-4.359-4.358a.75.75 0 0 1 0-1.061Z"
      fill="#111112"
    />
  </Svg>
)

export default BackArrowWithCircle;
