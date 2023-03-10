import * as React from "react"
import Svg, { Mask, Path } from "react-native-svg"

const UserDefault = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask id="a" fill="#fff">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.997 7.5a3.3 3.3 0 1 1 6.6 0 3.3 3.3 0 0 1-6.6 0Zm3.3-5.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM5.7 20.7A3.3 3.3 0 0 1 9 17.4h6.6a3.3 3.3 0 0 1 3.3 3.3 1.1 1.1 0 0 1-1.1 1.1h-11a1.1 1.1 0 0 1-1.1-1.1ZM9 15.2a5.5 5.5 0 0 0-5.5 5.5A3.3 3.3 0 0 0 6.8 24h11a3.3 3.3 0 0 0 3.3-3.3 5.5 5.5 0 0 0-5.5-5.5H9Z"
      />
    </Mask>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.997 7.5a3.3 3.3 0 1 1 6.6 0 3.3 3.3 0 0 1-6.6 0Zm3.3-5.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM5.7 20.7A3.3 3.3 0 0 1 9 17.4h6.6a3.3 3.3 0 0 1 3.3 3.3 1.1 1.1 0 0 1-1.1 1.1h-11a1.1 1.1 0 0 1-1.1-1.1ZM9 15.2a5.5 5.5 0 0 0-5.5 5.5A3.3 3.3 0 0 0 6.8 24h11a3.3 3.3 0 0 0 3.3-3.3 5.5 5.5 0 0 0-5.5-5.5H9Z"
      fill="#818391"
    />
    <Path
      d="M12.297 3.9a3.6 3.6 0 0 0-3.6 3.6h.6a3 3 0 0 1 3-3v-.6Zm3.6 3.6a3.6 3.6 0 0 0-3.6-3.6v.6a3 3 0 0 1 3 3h.6Zm-3.6 3.6a3.6 3.6 0 0 0 3.6-3.6h-.6a3 3 0 0 1-3 3v.6Zm-3.6-3.6a3.6 3.6 0 0 0 3.6 3.6v-.6a3 3 0 0 1-3-3h-.6Zm-1.6 0a5.2 5.2 0 0 1 5.2-5.2v-.6a5.8 5.8 0 0 0-5.8 5.8h.6Zm5.2 5.2a5.2 5.2 0 0 1-5.2-5.2h-.6a5.8 5.8 0 0 0 5.8 5.8v-.6Zm5.2-5.2a5.2 5.2 0 0 1-5.2 5.2v.6a5.8 5.8 0 0 0 5.8-5.8h-.6Zm-5.2-5.2a5.2 5.2 0 0 1 5.2 5.2h.6a5.8 5.8 0 0 0-5.8-5.8v.6ZM9 17.1a3.6 3.6 0 0 0-3.6 3.6H6a3 3 0 0 1 3-3v-.6Zm6.6 0H9v.6h6.6v-.6Zm3.6 3.6a3.6 3.6 0 0 0-3.6-3.6v.6a3 3 0 0 1 3 3h.6Zm-1.4 1.4a1.4 1.4 0 0 0 1.4-1.4h-.6a.8.8 0 0 1-.8.8v.6Zm-11 0h11v-.6h-11v.6Zm-1.4-1.4a1.4 1.4 0 0 0 1.4 1.4v-.6a.8.8 0 0 1-.8-.8h-.6Zm-1.6 0A5.2 5.2 0 0 1 9 15.5v-.6a5.8 5.8 0 0 0-5.8 5.8h.6Zm3 3a3 3 0 0 1-3-3h-.6a3.6 3.6 0 0 0 3.6 3.6v-.6Zm11 0h-11v.6h11v-.6Zm3-3a3 3 0 0 1-3 3v.6a3.6 3.6 0 0 0 3.6-3.6h-.6Zm-5.2-5.2a5.2 5.2 0 0 1 5.2 5.2h.6a5.8 5.8 0 0 0-5.8-5.8v.6Zm-6.6 0h6.6v-.6H9v.6Z"
      fill="#fff"
      mask="url(#a)"
    />
  </Svg>
)

export default UserDefault