import * as React from "react"
import Svg, { Path } from "react-native-svg"

const NotificationIcon = (props) => (
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
      d="M10.998 3a1 1 0 1 1 2 0v1c0 .028-.002.055-.004.082A6.002 6.002 0 0 1 17.998 10v1.957c0 .431.155.847.438 1.172l.645.74c2.087 2.393.386 6.131-2.79 6.131H7.704c-3.176 0-4.877-3.738-2.79-6.132l.645-.74c.283-.324.439-.74.439-1.17V10A6.002 6.002 0 0 1 11 4.082 1.021 1.021 0 0 1 10.998 4V3Zm1 3a4 4 0 0 0-4 4v1.957c0 .914-.331 1.797-.932 2.486l-.644.74C5.463 16.282 6.244 18 7.704 18h8.587c1.46 0 2.241-1.718 1.282-2.818l-.644-.739a3.783 3.783 0 0 1-.931-2.486V10a4 4 0 0 0-4-4ZM12 23c1.105 0 2-1.395 2-2.5h-4c0 1.105.895 2.5 2 2.5Z"
      fill="#797C8B"
    />
  </Svg>
)

export default NotificationIcon
