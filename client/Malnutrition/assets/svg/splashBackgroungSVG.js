import * as React from "react"
import Svg, {
  G,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
import { Dimensions } from "react-native";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const SplashBackgroundSVG = (props) => (
  <Svg
    width={screenWidth}
    height={screenHeight}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path fill="#fff" d="M0 0h375v812H0z" />
      <Path fill="#fff" d="M0 0h360v640H0z" />
      <Path
        opacity={0.8}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-65-187.5a.5.5 0 0 1 1 0v17.5h31v-17.5a.5.5 0 0 1 1 0v17.5h31v-17.5a.5.5 0 0 1 1 0v17.5h31v-17.5a.5.5 0 0 1 1 0v17.5h31v-17.5a.5.5 0 0 1 1 0v17.5h31v-17.5a.5.5 0 0 1 1 0v17.5h31v-17.5a.5.5 0 0 1 1 0v17.5h31v-17.5a.5.5 0 0 1 1 0v17.5h31v-17.5a.5.5 0 0 1 1 0v17.5h31v-17.5a.5.5 0 0 1 1 0v17.5h31v-17.5a.5.5 0 0 1 1 0v17.5h11.5a.5.5 0 0 1 0 1H256v31h11.5a.5.5 0 0 1 0 1H256v31h11.5a.5.5 0 0 1 0 1H256v31h46.5a.5.5 0 0 1 0 1H256v31h18.5a.5.5 0 0 1 0 1H256v31h46.5a.5.5 0 0 1 0 1H256v31h18.5a.5.5 0 0 1 0 1H256v31h46.5a.5.5 0 0 1 0 1H256v31h18.5a.5.5 0 0 1 0 1H256v31h46.5a.5.5 0 0 1 0 1H256v31h18.5a.5.5 0 0 1 0 1H256v52.5a.5.5 0 0 1-1 0V151h-31v12.5a.5.5 0 0 1-1 0V151h-31v52.5a.5.5 0 0 1-1 0V151h-31v12.5a.5.5 0 0 1-1 0V151h-31v52.5a.5.5 0 0 1-1 0V151H96v12.5a.5.5 0 0 1-1 0V151H64v52.5a.5.5 0 0 1-1 0V151H32v12.5a.5.5 0 0 1-1 0V151H0v12.5a.5.5 0 0 1-1 0V151h-31v12.5a.5.5 0 0 1-1 0V151h-31v12.5a.5.5 0 0 1-1 0V151h-18.5a.5.5 0 0 1 0-1H-65v-31h-18.5a.5.5 0 0 1 0-1H-65V87h-18.5a.5.5 0 1 1 0-1H-65V55h-18.5a.5.5 0 1 1 0-1H-65V23h-18.5a.5.5 0 1 1 0-1H-65V-9h-18.5a.5.5 0 0 1 0-1H-65v-31h-18.5a.5.5 0 1 1 0-1H-65v-31h-18.5a.5.5 0 1 1 0-1H-65v-31h-18.5a.5.5 0 0 1 0-1H-65v-31h-18.5a.5.5 0 0 1 0-1H-65v-31h-18.5a.5.5 0 0 1 0-1H-65v-17.5Zm1 18.5v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31H0Zm32 0v31h31v-31H32Zm32 0v31h31v-31H64Zm32 0v31h31v-31H96Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm31 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31V-9Zm0 32h-31v31h31V23Zm0 32h-31v31h31V55Zm0 32h-31v31h31V87Zm0 32h-31v31h31v-31Zm-32 31v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31H96v31h31Zm-32 0v-31H64v31h31Zm-32 0v-31H32v31h31Zm-32 0v-31H0v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-31-32h31V87h-31v31Zm0-32h31V55h-31v31Zm0-32h31V23h-31v31Zm0-32h31V-9h-31v31Zm0-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm32-31v31h31v-31h-31Zm32 0v31h31v-31H0Zm32 0v31h31v-31H32Zm32 0v31h31v-31H64Zm32 0v31h31v-31H96Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm31 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31V-9Zm0 32h-31v31h31V23Zm0 32h-31v31h31V55Zm0 32h-31v31h31V87Zm-32 31V87h-31v31h31Zm-32 0V87h-31v31h31Zm-32 0V87H96v31h31Zm-32 0V87H64v31h31Zm-32 0V87H32v31h31Zm-32 0V87H0v31h31Zm-32 0V87h-31v31h31Zm-31-32h31V55h-31v31Zm0-32h31V23h-31v31Zm0-32h31V-9h-31v31Zm0-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm32-31v31h31v-31H0Zm32 0v31h31v-31H32Zm32 0v31h31v-31H64Zm32 0v31h31v-31H96Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm31 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31V-9Zm0 32h-31v31h31V23Zm0 32h-31v31h31V55Zm-32 31V55h-31v31h31Zm-32 0V55H96v31h31Zm-32 0V55H64v31h31Zm-32 0V55H32v31h31Zm-32 0V55H0v31h31ZM0 54h31V23H0v31Zm0-32h31V-9H0v31Zm0-32h31v-31H0v31Zm0-32h31v-31H0v31Zm32-31v31h31v-31H32Zm32 0v31h31v-31H64Zm32 0v31h31v-31H96Zm32 0v31h31v-31h-31Zm31 32h-31v31h31v-31Zm0 32h-31v31h31V-9Zm0 32h-31v31h31V23Zm-32 31V23H96v31h31Zm-32 0V23H64v31h31Zm-32 0V23H32v31h31ZM32 22h31V-9H32v31Zm0-32h31v-31H32v31Zm32-31v31h31v-31H64Zm32 0v31h31v-31H96Zm31 32H96v31h31V-9ZM95 22V-9H64v31h31ZM413 930.5a.5.5 0 0 1-1 0V913h-31v17.5a.5.5 0 0 1-1 0V913h-31v17.5a.5.5 0 0 1-1 0V913h-31v17.5a.5.5 0 0 1-1 0V913h-31v17.5a.5.5 0 0 1-1 0V913h-31v17.5a.5.5 0 0 1-1 0V913h-31v17.5a.5.5 0 0 1-1 0V913h-31v17.5a.5.5 0 0 1-1 0V913h-31v17.5a.5.5 0 0 1-1 0V913h-31v17.5a.5.5 0 0 1-1 0V913H93v17.5a.5.5 0 0 1-1 0V913H80.5a.5.5 0 0 1 0-1H92v-31H80.5a.5.5 0 0 1 0-1H92v-31H80.5a.5.5 0 0 1 0-1H92v-31H45.5a.5.5 0 0 1 0-1H92v-31H80.5a.5.5 0 0 1 0-1H92v-31H45.5a.5.5 0 0 1 0-1H92v-31H80.5a.5.5 0 0 1 0-1H92v-31H45.5a.5.5 0 0 1 0-1H92v-31H80.5a.5.5 0 0 1 0-1H92v-31H45.5a.5.5 0 0 1 0-1H92v-31H80.5a.5.5 0 0 1 0-1H92v-52.5a.5.5 0 0 1 1 0V592h31v-12.5a.5.5 0 0 1 1 0V592h31v-52.5a.5.5 0 0 1 1 0V592h31v-12.5a.5.5 0 0 1 1 0V592h31v-52.5a.5.5 0 0 1 1 0V592h31v-12.5a.5.5 0 0 1 1 0V592h31v-52.5a.5.5 0 0 1 1 0V592h31v-12.5a.5.5 0 0 1 1 0V592h31v-12.5a.5.5 0 0 1 1 0V592h31v-12.5a.5.5 0 0 1 1 0V592h31v-12.5a.5.5 0 0 1 1 0V592h18.5a.5.5 0 0 1 0 1H413v31h18.5a.5.5 0 0 1 0 1H413v31h18.5a.5.5 0 0 1 0 1H413v31h18.5a.5.5 0 0 1 0 1H413v31h18.5a.5.5 0 0 1 0 1H413v31h18.5a.5.5 0 0 1 0 1H413v31h18.5a.5.5 0 0 1 0 1H413v31h18.5a.5.5 0 0 1 0 1H413v31h18.5a.5.5 0 0 1 0 1H413v31h18.5a.5.5 0 0 1 0 1H413v31h18.5a.5.5 0 0 1 0 1H413v17.5Zm-1-18.5v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31H93v31h31Zm-31-32h31v-31H93v31Zm0-32h31v-31H93v31Zm0-32h31v-31H93v31Zm0-32h31v-31H93v31Zm0-32h31v-31H93v31Zm0-32h31v-31H93v31Zm0-32h31v-31H93v31Zm0-32h31v-31H93v31Zm0-32h31v-31H93v31Zm32-31v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm31 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm-32 31v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-31-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm32-31v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm31 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm-32 31v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-31-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm32-31v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm31 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm-32 31v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-31-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm0-32h31v-31h-31v31Zm32-31v31h31v-31h-31Zm32 0v31h31v-31h-31Zm32 0v31h31v-31h-31Zm31 32h-31v31h31v-31Zm0 32h-31v31h31v-31Zm-32 31v-31h-31v31h31Zm-32 0v-31h-31v31h31Zm-31-32h31v-31h-31v31Zm32-31v31h31v-31h-31Z"
        fill="#DBDDEB"
      />
      <G filter="url(#b)">
        <Path fill="url(#c)" d="M0 103h375v607H0z" />
      </G>
      <Circle cx={346} cy={104} r={11} fill="#F7D2BD" />
      <Circle cx={132} cy={535} r={8} fill="#DBCEF4" />
      <Circle cx={57.5} cy={795.5} r={10.5} fill="#B0D9E4" />
      <Circle cx={303.5} cy={330.5} r={8.5} fill="#CDE8BF" />
      <Circle cx={17} cy={58} r={7} fill="#FFC4E5" />
      <Circle cx={284} cy={737} r={7} fill="#F7D2BD" />
      <Circle cx={94} cy={230} r={6} fill="#F1E99E" />
      <G opacity={0.2}>
        <Path fill="url(#d)" d="M64 23h31v31H64z" />
        <Path fill="url(#e)" d="M64 23h31v31H64z" />
        <Path fill="url(#f)" d="M32-9h31v31H32z" />
        <Path fill="url(#g)" d="M32-9h31v31H32z" />
        <Path fill="url(#h)" d="M96-9h31v31H96z" />
        <Path fill="url(#i)" d="M96-9h31v31H96z" />
        <Path fill="url(#j)" d="M160-9h31v31h-31z" />
        <Path fill="url(#k)" d="M160-9h31v31h-31z" />
        <Path fill="url(#l)" d="M224-9h31v31h-31z" />
        <Path fill="url(#m)" d="M224-9h31v31h-31z" />
        <Path fill="url(#n)" d="M0 23h31v31H0z" />
        <Path fill="url(#o)" d="M0 23h31v31H0z" />
        <Path
          transform="matrix(-1 0 0 1 159 23)"
          fill="url(#p)"
          d="M0 0h31v31H0z"
        />
        <Path
          transform="matrix(-1 0 0 1 159 23)"
          fill="url(#q)"
          d="M0 0h31v31H0z"
        />
        <Path
          transform="matrix(-1 0 0 1 223 23)"
          fill="url(#r)"
          d="M0 0h31v31H0z"
        />
        <Path
          transform="matrix(-1 0 0 1 223 23)"
          fill="url(#s)"
          d="M0 0h31v31H0z"
        />
        <Path
          transform="rotate(180 127 86)"
          fill="url(#t)"
          d="M127 86h31v31h-31z"
        />
        <Path
          transform="rotate(180 127 86)"
          fill="url(#u)"
          d="M127 86h31v31h-31z"
        />
        <Path
          transform="rotate(180 63 86)"
          fill="url(#v)"
          d="M63 86h31v31H63z"
        />
        <Path
          transform="rotate(180 63 86)"
          fill="url(#w)"
          d="M63 86h31v31H63z"
        />
        <Path
          transform="rotate(180 63 150)"
          fill="url(#x)"
          d="M63 150h31v31H63z"
        />
        <Path
          transform="rotate(180 63 150)"
          fill="url(#y)"
          d="M63 150h31v31H63z"
        />
        <Path
          transform="rotate(180 127 150)"
          fill="url(#z)"
          d="M127 150h31v31h-31z"
        />
        <Path
          transform="rotate(180 127 150)"
          fill="url(#A)"
          d="M127 150h31v31h-31z"
        />
        <Path
          transform="rotate(180 191 150)"
          fill="url(#B)"
          d="M191 150h31v31h-31z"
        />
        <Path
          transform="rotate(180 191 150)"
          fill="url(#C)"
          d="M191 150h31v31h-31z"
        />
        <Path
          transform="rotate(180 255 150)"
          fill="url(#D)"
          d="M255 150h31v31h-31z"
        />
        <Path
          transform="rotate(180 255 150)"
          fill="url(#E)"
          d="M255 150h31v31h-31z"
        />
        <Path
          transform="rotate(180 191 86)"
          fill="url(#F)"
          d="M191 86h31v31h-31z"
        />
        <Path
          transform="rotate(180 191 86)"
          fill="url(#G)"
          d="M191 86h31v31h-31z"
        />
        <Path
          transform="rotate(180 255 86)"
          fill="url(#H)"
          d="M255 86h31v31h-31z"
        />
        <Path
          transform="rotate(180 255 86)"
          fill="url(#I)"
          d="M255 86h31v31h-31z"
        />
        <Path
          transform="rotate(180 159 118)"
          fill="url(#J)"
          d="M159 118h31v31h-31z"
        />
        <Path
          transform="rotate(180 159 118)"
          fill="url(#K)"
          d="M159 118h31v31h-31z"
        />
        <Path
          transform="rotate(180 95 118)"
          fill="url(#L)"
          d="M95 118h31v31H95z"
        />
        <Path
          transform="rotate(180 95 118)"
          fill="url(#M)"
          d="M95 118h31v31H95z"
        />
        <Path
          transform="rotate(180 31 118)"
          fill="url(#N)"
          d="M31 118h31v31H31z"
        />
        <Path
          transform="rotate(180 31 118)"
          fill="url(#O)"
          d="M31 118h31v31H31z"
        />
        <Path
          transform="rotate(180 223 118)"
          fill="url(#P)"
          d="M223 118h31v31h-31z"
        />
        <Path
          transform="rotate(180 223 118)"
          fill="url(#Q)"
          d="M223 118h31v31h-31z"
        />
      </G>
      <G opacity={0.2}>
        <Path fill="url(#R)" d="M189 689h31v31h-31z" />
        <Path fill="url(#S)" d="M189 689h31v31h-31z" />
        <Path fill="url(#T)" d="M157 657h31v31h-31z" />
        <Path fill="url(#U)" d="M157 657h31v31h-31z" />
        <Path fill="url(#V)" d="M93 657h31v31H93z" />
        <Path fill="url(#W)" d="M93 657h31v31H93z" />
        <Path fill="url(#X)" d="M93 593h31v31H93z" />
        <Path fill="url(#Y)" d="M93 593h31v31H93z" />
        <Path fill="url(#Z)" d="M157 593h31v31h-31z" />
        <Path fill="url(#aa)" d="M157 593h31v31h-31z" />
        <Path fill="url(#ab)" d="M221 593h31v31h-31z" />
        <Path fill="url(#ac)" d="M221 593h31v31h-31z" />
        <Path fill="url(#ad)" d="M285 593h31v31h-31z" />
        <Path fill="url(#ae)" d="M285 593h31v31h-31z" />
        <Path fill="url(#af)" d="M349 593h31v31h-31z" />
        <Path fill="url(#ag)" d="M349 593h31v31h-31z" />
        <Path fill="url(#ah)" d="M221 657h31v31h-31z" />
        <Path fill="url(#ai)" d="M221 657h31v31h-31z" />
        <Path fill="url(#aj)" d="M285 657h31v31h-31z" />
        <Path fill="url(#ak)" d="M285 657h31v31h-31z" />
        <Path fill="url(#al)" d="M349 657h31v31h-31z" />
        <Path fill="url(#am)" d="M349 657h31v31h-31z" />
        <Path fill="url(#an)" d="M125 689h31v31h-31z" />
        <Path fill="url(#ao)" d="M125 689h31v31h-31z" />
        <Path
          transform="matrix(-1 0 0 1 285 689)"
          fill="url(#ap)"
          d="M0 0h31v31H0z"
        />
        <Path
          transform="matrix(-1 0 0 1 285 689)"
          fill="url(#aq)"
          d="M0 0h31v31H0z"
        />
        <Path
          transform="matrix(-1 0 0 1 349 689)"
          fill="url(#ar)"
          d="M0 0h31v31H0z"
        />
        <Path
          transform="matrix(-1 0 0 1 349 689)"
          fill="url(#as)"
          d="M0 0h31v31H0z"
        />
        <Path
          transform="rotate(180 253 752)"
          fill="url(#at)"
          d="M253 752h31v31h-31z"
        />
        <Path
          transform="rotate(180 253 752)"
          fill="url(#au)"
          d="M253 752h31v31h-31z"
        />
        <Path
          transform="rotate(180 188 752)"
          fill="url(#av)"
          d="M188 752h31v31h-31z"
        />
        <Path
          transform="rotate(180 188 752)"
          fill="url(#aw)"
          d="M188 752h31v31h-31z"
        />
        <Path
          transform="rotate(180 156 656)"
          fill="url(#ax)"
          d="M156 656h31v31h-31z"
        />
        <Path
          transform="rotate(180 156 656)"
          fill="url(#ay)"
          d="M156 656h31v31h-31z"
        />
        <Path
          transform="rotate(180 220 656)"
          fill="url(#az)"
          d="M220 656h31v31h-31z"
        />
        <Path
          transform="rotate(180 220 656)"
          fill="url(#aA)"
          d="M220 656h31v31h-31z"
        />
        <Path
          transform="rotate(180 284 656)"
          fill="url(#aB)"
          d="M284 656h31v31h-31z"
        />
        <Path
          transform="rotate(180 284 656)"
          fill="url(#aC)"
          d="M284 656h31v31h-31z"
        />
        <Path
          transform="rotate(180 348 656)"
          fill="url(#aD)"
          d="M348 656h31v31h-31z"
        />
        <Path
          transform="rotate(180 348 656)"
          fill="url(#aE)"
          d="M348 656h31v31h-31z"
        />
        <Path
          transform="rotate(180 189 816)"
          fill="url(#aF)"
          d="M189 816h31v31h-31z"
        />
        <Path
          transform="rotate(180 189 816)"
          fill="url(#aG)"
          d="M189 816h31v31h-31z"
        />
        <Path
          transform="rotate(180 124 816)"
          fill="url(#aH)"
          d="M124 816h31v31h-31z"
        />
        <Path
          transform="rotate(180 124 816)"
          fill="url(#aI)"
          d="M124 816h31v31h-31z"
        />
        <Path
          transform="rotate(180 252 816)"
          fill="url(#aJ)"
          d="M252 816h31v31h-31z"
        />
        <Path
          transform="rotate(180 252 816)"
          fill="url(#aK)"
          d="M252 816h31v31h-31z"
        />
        <Path
          transform="rotate(180 317 816)"
          fill="url(#aL)"
          d="M317 816h31v31h-31z"
        />
        <Path
          transform="rotate(180 317 816)"
          fill="url(#aM)"
          d="M317 816h31v31h-31z"
        />
        <Path
          transform="rotate(180 380 816)"
          fill="url(#aN)"
          d="M380 816h31v31h-31z"
        />
        <Path
          transform="rotate(180 380 816)"
          fill="url(#aO)"
          d="M380 816h31v31h-31z"
        />
        <Path
          transform="rotate(180 316 752)"
          fill="url(#aP)"
          d="M316 752h31v31h-31z"
        />
        <Path
          transform="rotate(180 316 752)"
          fill="url(#aQ)"
          d="M316 752h31v31h-31z"
        />
        <Path
          transform="rotate(180 380 752)"
          fill="url(#aR)"
          d="M380 752h31v31h-31z"
        />
        <Path
          transform="rotate(180 380 752)"
          fill="url(#aS)"
          d="M380 752h31v31h-31z"
        />
        <Path
          transform="rotate(180 284 784)"
          fill="url(#aT)"
          d="M284 784h31v31h-31z"
        />
        <Path
          transform="rotate(180 284 784)"
          fill="url(#aU)"
          d="M284 784h31v31h-31z"
        />
        <Path
          transform="rotate(180 220 784)"
          fill="url(#aV)"
          d="M220 784h31v31h-31z"
        />
        <Path
          transform="rotate(180 220 784)"
          fill="url(#aW)"
          d="M220 784h31v31h-31z"
        />
        <Path
          transform="rotate(180 156 784)"
          fill="url(#aX)"
          d="M156 784h31v31h-31z"
        />
        <Path
          transform="rotate(180 156 784)"
          fill="url(#aY)"
          d="M156 784h31v31h-31z"
        />
        <Path
          transform="rotate(180 348 784)"
          fill="url(#aZ)"
          d="M348 784h31v31h-31z"
        />
        <Path
          transform="rotate(180 348 784)"
          fill="url(#ba)"
          d="M348 784h31v31h-31z"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={187.5}
        y1={46.878}
        x2={187.5}
        y2={748.399}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.515} stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={67.5}
        y1={25}
        x2={79.5}
        y2={54}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={67.5}
        y1={25}
        x2={79.5}
        y2={54}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={35.5}
        y1={-7}
        x2={47.5}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={35.5}
        y1={-7}
        x2={47.5}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={99.5}
        y1={-7}
        x2={111.5}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={99.5}
        y1={-7}
        x2={111.5}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={163.5}
        y1={-7}
        x2={175.5}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={163.5}
        y1={-7}
        x2={175.5}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={227.5}
        y1={-7}
        x2={239.5}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="m"
        x1={227.5}
        y1={-7}
        x2={239.5}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="n"
        x1={3.5}
        y1={25}
        x2={15.5}
        y2={54}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="o"
        x1={3.5}
        y1={25}
        x2={15.5}
        y2={54}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="p"
        x1={3.5}
        y1={2}
        x2={15.5}
        y2={31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="q"
        x1={3.5}
        y1={2}
        x2={15.5}
        y2={31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="r"
        x1={3.5}
        y1={2}
        x2={15.5}
        y2={31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="s"
        x1={3.5}
        y1={2}
        x2={15.5}
        y2={31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="t"
        x1={130.5}
        y1={88}
        x2={142.5}
        y2={117}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="u"
        x1={130.5}
        y1={88}
        x2={142.5}
        y2={117}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="v"
        x1={66.5}
        y1={88}
        x2={78.5}
        y2={117}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="w"
        x1={66.5}
        y1={88}
        x2={78.5}
        y2={117}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="x"
        x1={66.5}
        y1={152}
        x2={78.5}
        y2={181}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="y"
        x1={66.5}
        y1={152}
        x2={78.5}
        y2={181}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="z"
        x1={130.5}
        y1={152}
        x2={142.5}
        y2={181}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="A"
        x1={130.5}
        y1={152}
        x2={142.5}
        y2={181}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="B"
        x1={194.5}
        y1={152}
        x2={206.5}
        y2={181}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="C"
        x1={194.5}
        y1={152}
        x2={206.5}
        y2={181}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="D"
        x1={258.5}
        y1={152}
        x2={270.5}
        y2={181}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="E"
        x1={258.5}
        y1={152}
        x2={270.5}
        y2={181}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="F"
        x1={194.5}
        y1={88}
        x2={206.5}
        y2={117}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="G"
        x1={194.5}
        y1={88}
        x2={206.5}
        y2={117}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="H"
        x1={258.5}
        y1={88}
        x2={270.5}
        y2={117}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="I"
        x1={258.5}
        y1={88}
        x2={270.5}
        y2={117}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="J"
        x1={162.5}
        y1={120}
        x2={174.5}
        y2={149}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="K"
        x1={162.5}
        y1={120}
        x2={174.5}
        y2={149}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="L"
        x1={98.5}
        y1={120}
        x2={110.5}
        y2={149}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="M"
        x1={98.5}
        y1={120}
        x2={110.5}
        y2={149}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="N"
        x1={34.5}
        y1={120}
        x2={46.5}
        y2={149}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="O"
        x1={34.5}
        y1={120}
        x2={46.5}
        y2={149}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="P"
        x1={226.5}
        y1={120}
        x2={238.5}
        y2={149}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="Q"
        x1={226.5}
        y1={120}
        x2={238.5}
        y2={149}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="R"
        x1={192.5}
        y1={691}
        x2={204.5}
        y2={720}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="S"
        x1={192.5}
        y1={691}
        x2={204.5}
        y2={720}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="T"
        x1={160.5}
        y1={659}
        x2={172.5}
        y2={688}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="U"
        x1={160.5}
        y1={659}
        x2={172.5}
        y2={688}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="V"
        x1={96.5}
        y1={659}
        x2={108.5}
        y2={688}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="W"
        x1={96.5}
        y1={659}
        x2={108.5}
        y2={688}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="X"
        x1={96.5}
        y1={595}
        x2={108.5}
        y2={624}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="Y"
        x1={96.5}
        y1={595}
        x2={108.5}
        y2={624}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="Z"
        x1={160.5}
        y1={595}
        x2={172.5}
        y2={624}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aa"
        x1={160.5}
        y1={595}
        x2={172.5}
        y2={624}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="ab"
        x1={224.5}
        y1={595}
        x2={236.5}
        y2={624}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="ac"
        x1={224.5}
        y1={595}
        x2={236.5}
        y2={624}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="ad"
        x1={288.5}
        y1={595}
        x2={300.5}
        y2={624}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="ae"
        x1={288.5}
        y1={595}
        x2={300.5}
        y2={624}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="af"
        x1={352.5}
        y1={595}
        x2={364.5}
        y2={624}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="ag"
        x1={352.5}
        y1={595}
        x2={364.5}
        y2={624}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="ah"
        x1={224.5}
        y1={659}
        x2={236.5}
        y2={688}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="ai"
        x1={224.5}
        y1={659}
        x2={236.5}
        y2={688}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aj"
        x1={288.5}
        y1={659}
        x2={300.5}
        y2={688}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="ak"
        x1={288.5}
        y1={659}
        x2={300.5}
        y2={688}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="al"
        x1={352.5}
        y1={659}
        x2={364.5}
        y2={688}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="am"
        x1={352.5}
        y1={659}
        x2={364.5}
        y2={688}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="an"
        x1={128.5}
        y1={691}
        x2={140.5}
        y2={720}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="ao"
        x1={128.5}
        y1={691}
        x2={140.5}
        y2={720}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="ap"
        x1={3.5}
        y1={2}
        x2={15.5}
        y2={31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aq"
        x1={3.5}
        y1={2}
        x2={15.5}
        y2={31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="ar"
        x1={3.5}
        y1={2}
        x2={15.5}
        y2={31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="as"
        x1={3.5}
        y1={2}
        x2={15.5}
        y2={31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="at"
        x1={256.5}
        y1={754}
        x2={268.5}
        y2={783}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="au"
        x1={256.5}
        y1={754}
        x2={268.5}
        y2={783}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="av"
        x1={191.5}
        y1={754}
        x2={203.5}
        y2={783}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aw"
        x1={191.5}
        y1={754}
        x2={203.5}
        y2={783}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="ax"
        x1={159.5}
        y1={658}
        x2={171.5}
        y2={687}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="ay"
        x1={159.5}
        y1={658}
        x2={171.5}
        y2={687}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="az"
        x1={223.5}
        y1={658}
        x2={235.5}
        y2={687}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aA"
        x1={223.5}
        y1={658}
        x2={235.5}
        y2={687}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aB"
        x1={287.5}
        y1={658}
        x2={299.5}
        y2={687}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aC"
        x1={287.5}
        y1={658}
        x2={299.5}
        y2={687}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aD"
        x1={351.5}
        y1={658}
        x2={363.5}
        y2={687}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aE"
        x1={351.5}
        y1={658}
        x2={363.5}
        y2={687}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aF"
        x1={192.5}
        y1={818}
        x2={204.5}
        y2={847}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aG"
        x1={192.5}
        y1={818}
        x2={204.5}
        y2={847}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aH"
        x1={127.5}
        y1={818}
        x2={139.5}
        y2={847}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aI"
        x1={127.5}
        y1={818}
        x2={139.5}
        y2={847}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aJ"
        x1={255.5}
        y1={818}
        x2={267.5}
        y2={847}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aK"
        x1={255.5}
        y1={818}
        x2={267.5}
        y2={847}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aL"
        x1={320.5}
        y1={818}
        x2={332.5}
        y2={847}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aM"
        x1={320.5}
        y1={818}
        x2={332.5}
        y2={847}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aN"
        x1={383.5}
        y1={818}
        x2={395.5}
        y2={847}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aO"
        x1={383.5}
        y1={818}
        x2={395.5}
        y2={847}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aP"
        x1={319.5}
        y1={754}
        x2={331.5}
        y2={783}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aQ"
        x1={319.5}
        y1={754}
        x2={331.5}
        y2={783}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aR"
        x1={383.5}
        y1={754}
        x2={395.5}
        y2={783}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aS"
        x1={383.5}
        y1={754}
        x2={395.5}
        y2={783}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aT"
        x1={287.5}
        y1={786}
        x2={299.5}
        y2={815}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aU"
        x1={287.5}
        y1={786}
        x2={299.5}
        y2={815}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aV"
        x1={223.5}
        y1={786}
        x2={235.5}
        y2={815}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aW"
        x1={223.5}
        y1={786}
        x2={235.5}
        y2={815}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aX"
        x1={159.5}
        y1={786}
        x2={171.5}
        y2={815}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aY"
        x1={159.5}
        y1={786}
        x2={171.5}
        y2={815}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="aZ"
        x1={351.5}
        y1={786}
        x2={363.5}
        y2={815}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="ba"
        x1={351.5}
        y1={786}
        x2={363.5}
        y2={815}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DBDDEB" stopOpacity={0.71} />
        <Stop offset={1} stopColor="#DBDDEB" stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h375v812H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SplashBackgroundSVG
