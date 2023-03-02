import * as React from "react"
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg"

const ChildIcon = (props) => (
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
        d="M19.341 17.194a1.97 1.97 0 0 1-1.057-1.284l-.213-.824a3.044 3.044 0 0 0 1.494-.212 3.059 3.059 0 0 0 1.886-2.823A3.054 3.054 0 0 0 18.401 9c-1.512 0-2.77 1.912-3.01 3.52-.027.182-.041.36-.041.53 0 .005.002.01.006.014l.017.017c.023.02.045.042-.02.038-.194.074-.47.042-.846-.068a8.971 8.971 0 0 1-.589-.2l-.063-.024c-.253-.095-.536-.207-.852-.332-.355-.14-.75-.297-1.192-.464a.356.356 0 0 0-.053-.016c-.063-.012-1.54-.29-2.69.58-.74.56-1.164 1.454-1.26 2.656a3.31 3.31 0 0 0-.008.46c.02.37.106.723.254 1.053l-1.506.363a1.422 1.422 0 0 0-.893.658 1.434 1.434 0 0 0 1.23 2.168h4.694a1.716 1.716 0 0 0 1.623-1.122h.405c.286 0 .351-.042.477-.122l.07-.044c.053-.031.117-.067.205-.107l1.155-.527.085.19a2.925 2.925 0 0 0 2.668 1.731h1.96a1.108 1.108 0 0 0 .478-2.104l-1.364-.654Zm2.012-.699-.847-.406a4.558 4.558 0 0 0 2.445-4.038c0-2.51-2.04-4.55-4.55-4.551-1.564 0-2.721 1.069-3.392 2.044a6.881 6.881 0 0 0-.874 1.785 74.948 74.948 0 0 1-.537-.212c-.349-.138-.755-.3-1.255-.489l-.01-.004a1.852 1.852 0 0 0-.281-.08 5.272 5.272 0 0 0-1.34-.066c-.694.05-1.665.252-2.549.921-1.176.89-1.73 2.237-1.85 3.73a4.85 4.85 0 0 0-.016.516l-.101.024a2.923 2.923 0 0 0-1.829 1.346 2.934 2.934 0 0 0 2.517 4.438h4.695c.974 0 1.87-.426 2.478-1.154a1.987 1.987 0 0 0 .807-.309c.018-.01.028-.017.035-.022l.024-.015.017-.01a4.426 4.426 0 0 0 3.327 1.51h1.96a2.608 2.608 0 0 0 1.127-4.957c-.001 0 0 0 0 0Z"
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

export default ChildIcon;