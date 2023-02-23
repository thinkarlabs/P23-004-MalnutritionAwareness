import * as React from "react"
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg"

const MotherIcon = (props) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Circle cx={14} cy={14} r={14} fill="#E9EAF3" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.373 10.209a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Zm2.625-4.375a4.375 4.375 0 1 0 0 8.75 4.375 4.375 0 0 0 0-8.75ZM8.75 20.707a2.625 2.625 0 0 1 2.625-2.625h5.25a2.625 2.625 0 0 1 2.625 2.625.875.875 0 0 1-.875.875h-8.75a.875.875 0 0 1-.875-.875Zm2.625-4.375A4.375 4.375 0 0 0 7 20.708a2.625 2.625 0 0 0 2.625 2.625h8.75A2.625 2.625 0 0 0 21 20.708a4.375 4.375 0 0 0-4.375-4.375h-5.25Z"
        fill="#616568"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default MotherIcon
