import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TrackActive = (props) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.692 6.4h4.219c.329 0 .7.34.7.88 0 .538-.371.879-.7.879H8.692c-1.416 0-2.425 1.315-2.425 2.752 0 1.488 1.053 2.752 2.425 2.752h6.617c2.034 0 3.791 1.95 3.791 4.469S17.343 22.6 15.31 22.6h-4.011c-.329 0-.701-.34-.701-.879 0-.538.372-.879.7-.879h4.012c1.416 0 2.425-1.315 2.425-2.752 0-1.488-1.053-2.752-2.425-2.752H8.692c-2.034 0-3.792-1.95-3.792-4.469C4.9 8.35 6.658 6.4 8.692 6.4ZM18 4.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm-12 14a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"
      fill="#705EEB"
    />
  </Svg>
)

export default TrackActive
