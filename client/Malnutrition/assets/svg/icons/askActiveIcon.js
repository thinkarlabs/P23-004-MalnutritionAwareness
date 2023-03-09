import * as React from "react"
import Svg, { Path } from "react-native-svg"

const AskActiveIcon = (props) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 11.817Zm-12.051 7.796c-.091.082-.178.19-.475.587l-.024.032c-.675.9-1.205 1.607-1.637 2.116-.413.486-.838.922-1.321 1.121a3.033 3.033 0 0 1-3.768-1.256c-.266-.449-.345-1.053-.384-1.69-.04-.665-.04-1.549-.04-2.674v-5.675c0-1.208 0-2.166.063-2.937.065-.791.2-1.459.51-2.068a5.256 5.256 0 0 1 2.296-2.296c.61-.31 1.277-.445 2.068-.51.771-.063 1.729-.063 2.937-.063h4.087c1.006 0 1.802 0 2.448.044.66.045 1.222.139 1.746.356A5.256 5.256 0 0 1 22.3 7.544c.217.524.311 1.085.356 1.746.044.646.044 1.442.044 2.448v.079c0 1.006 0 1.802-.044 2.447-.045.661-.139 1.223-.356 1.747a5.255 5.255 0 0 1-2.844 2.844c-.524.217-1.085.31-1.746.356-.646.044-1.442.044-2.448.044h-2.896c-.496 0-.635.004-.755.028a1.41 1.41 0 0 0-.661.33Z"
      fill="#705EEB"
    />
    <Path
      d="M9 12a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z"
      fill="#fff"
    />
  </Svg>
)

export default AskActiveIcon
