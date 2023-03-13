import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const TrackDefault = (props) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.692 6.2h4.218c.467 0 .902.459.902 1.08 0 .62-.435 1.078-.902 1.078H8.692c-1.277 0-2.225 1.194-2.225 2.552 0 1.405.988 2.552 2.225 2.552h6.616c2.172 0 3.992 2.069 3.992 4.67 0 2.6-1.82 4.668-3.992 4.668h-4.01c-.467 0-.902-.459-.902-1.08 0-.62.435-1.078.901-1.078h4.011c1.277 0 2.225-1.194 2.225-2.552 0-1.404-.988-2.552-2.225-2.552H8.692c-2.172 0-3.992-2.069-3.992-4.67 0-2.6 1.82-4.668 3.992-4.668Z"
      fill="#818391"
      stroke="#fff"
      strokeWidth={0.4}
    />
    <Circle cx={18} cy={7.5} r={2.5} stroke="#818391" strokeWidth={1.5} />
    <Circle cx={6} cy={21.5} r={2.5} stroke="#818391" strokeWidth={1.5} />
  </Svg>
)

export default TrackDefault
