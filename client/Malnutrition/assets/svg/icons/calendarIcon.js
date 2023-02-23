import * as React from "react"
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg"

const CalendarIcon = (props) => (
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
        d="M17.916 6.708a.75.75 0 0 0-1.5 0v.68h-4.217v-.68a.75.75 0 0 0-1.5 0v.68H9.304a2.18 2.18 0 0 0-2.179 2.18v10.005a2.18 2.18 0 0 0 2.18 2.18H19.31a2.18 2.18 0 0 0 2.18-2.18V9.567a2.18 2.18 0 0 0-2.18-2.18h-1.394v-.679Zm2.073 4.968V9.567a.68.68 0 0 0-.679-.68h-1.394v.68a.75.75 0 0 1-1.5 0v-.68h-4.217v.68a.75.75 0 0 1-1.5 0v-.68H9.304a.68.68 0 0 0-.679.68v2.109h11.364Zm-11.364 1.5h11.364v6.397a.68.68 0 0 1-.679.68H9.304a.68.68 0 0 1-.679-.68v-6.397Z"
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

export default CalendarIcon;
