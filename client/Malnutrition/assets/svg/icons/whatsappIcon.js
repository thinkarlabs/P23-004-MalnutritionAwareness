import * as React from "react"
import Svg, { Circle, Path, Rect } from "react-native-svg"

const WhatsappIcon = (props) => (
  <Svg
    width={40}
    height={41}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={24.948}
      cy={22.922}
      r={12.424}
      fill="#CEECF4"
      fillOpacity={0.8}
    />
    <Path
      opacity={0.4}
      d="M34.196 31.044h-.772a.424.424 0 0 1 0-.848h.772v-.772a.424.424 0 1 1 .848 0v.772h.78a.424.424 0 1 1 0 .848h-.78v.78a.424.424 0 1 1-.848 0v-.78Z"
      fill="#616568"
    />
    <Path
      d="M31.89 3.044h-.773a.424.424 0 0 1 0-.848h.772v-.772a.424.424 0 1 1 .848 0v.772h.78a.424.424 0 1 1 0 .848h-.78v.78a.424.424 0 1 1-.848 0v-.78Z"
      fill="#B9E4F1"
    />
    <Circle opacity={0.4} cx={5.218} cy={3.218} r={1.218} fill="#616568" />
    <Circle cx={3.812} cy={23.812} r={0.812} fill="#B9E4F1" />
    <Rect
      opacity={0.4}
      x={36}
      y={14.605}
      width={2.436}
      height={2.436}
      rx={1}
      transform="rotate(-41.215 36 14.605)"
      fill="#616568"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 34.623a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm8.75 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm6.25 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      fill="#E9EAF3"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.875 35.68A4.502 4.502 0 0 1 5 34.624a4.5 4.5 0 0 1 8.875-1.058 4.502 4.502 0 0 1 8.75 0 4.502 4.502 0 0 1 8.875 1.058 4.5 4.5 0 0 1-8.875 1.058 4.502 4.502 0 0 1-8.75 0ZM9.5 37.124a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm8.75 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm11.25-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      fill="#fff"
    />
    <Path
      d="M13.95 6.924c-.418 0-1.015.155-1.506.684-.294.317-1.522 1.513-1.522 3.616 0 2.192 1.52 4.084 1.704 4.327h.002v.001a20.641 20.641 0 0 0 1.96 2.402c1.175 1.24 2.829 2.67 4.881 3.546.945.402 1.691.645 2.256.823 1.047.328 2 .278 2.717.173.536-.08 1.126-.337 1.71-.706.583-.37 1.155-.828 1.407-1.526.18-.5.272-.962.306-1.342.016-.19.018-.358.006-.514-.012-.155 0-.274-.144-.512-.304-.498-.647-.511-1.006-.689-.2-.099-.767-.376-1.336-.647-.569-.271-1.061-.511-1.365-.62-.191-.068-.425-.167-.763-.129-.337.038-.67.282-.865.57-.183.272-.924 1.146-1.15 1.403-.003-.002.017.007-.072-.037-.28-.138-.621-.256-1.126-.522a9.316 9.316 0 0 1-1.83-1.27v-.001c-1.029-.907-1.75-2.045-1.978-2.427.016-.018-.002.004.03-.028l.002-.001c.233-.23.439-.503.613-.703.247-.285.356-.536.474-.77.235-.466.104-.98-.032-1.25v-.002c.01.019-.074-.164-.163-.376-.09-.212-.204-.486-.326-.78-.244-.585-.517-1.242-.68-1.627v-.001c-.19-.454-.449-.78-.786-.938-.338-.157-.637-.113-.649-.113h-.001a17.089 17.089 0 0 0-.768-.014Zm0 1.304c.251 0 .5.003.707.013.213.01.2.011.16-.008-.043-.02.014-.026.135.263.16.377.433 1.036.678 1.624.122.294.237.57.329.786.091.216.14.337.198.452v.001l.002.001c.056.112.051.04.032.08-.138.273-.157.34-.296.5-.212.244-.428.517-.543.63-.1.098-.28.25-.393.55-.113.301-.06.713.12 1.021.242.41 1.037 1.704 2.273 2.792.778.686 1.503 1.14 2.083 1.446.579.305 1.05.484 1.156.536.251.124.525.22.844.182.318-.038.593-.231.768-.429l.001-.001c.233-.264.924-1.054 1.256-1.54.014.005.01 0 .12.04v.002c.051.018.682.3 1.244.568.562.268 1.133.546 1.318.638.268.133.395.219.427.22.002.057.005.119-.004.213a4.153 4.153 0 0 1-.233 1.013c-.068.19-.426.582-.877.867-.451.286-1 .488-1.204.517-.612.09-1.338.123-2.135-.127a21.78 21.78 0 0 1-2.135-.778c-1.81-.772-3.349-2.086-4.448-3.243-.55-.579-.99-1.117-1.303-1.525-.313-.407-.45-.618-.563-.768l-.001-.001c-.202-.268-1.44-1.989-1.44-3.539 0-1.64.762-2.284 1.175-2.728a.773.773 0 0 1 .549-.268Z"
      fill="#111112"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m7.02 22.181-1.872 6.685 6.948-1.721.339.18C14.405 28.379 16.63 29 19 29c7.724 0 14-6.276 14-14S26.724 1 19 1 5 7.276 5 15c0 2.474.678 4.79 1.818 6.82l.203.361Zm-2.996 6.991 1.922-6.862C4.73 20.143 4 17.66 4 15 4 6.724 10.724 0 19 0s15 6.724 15 15-6.724 15-15 15c-2.548 0-4.934-.67-7.036-1.792L4.809 29.98a.652.652 0 0 1-.785-.809Z"
      fill="#111112"
    />
  </Svg>
)

export default WhatsappIcon;