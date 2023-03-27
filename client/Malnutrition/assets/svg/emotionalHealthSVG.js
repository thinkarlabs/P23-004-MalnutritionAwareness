import * as React from "react"
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const EmotionalHealthImage = (props) => (
  <Svg
    width={107}
    height={134}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Circle opacity={0.5} cx={48.023} cy={54.191} r={48.5} fill="#fff" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.83 57.387c.105-.348.218-.742.341-1.174 1.763-6.165 5.713-19.977 21.251-14.444 12.97 4.618 6.678 19.02 3.791 25.628-.22.502-.419.96-.589 1.363-.913 2.17-.928 4.493-.946 7.149-.029 4.355-.064 9.607-4.07 16.556-6.448 11.188-24.293 12.468-30.966-4.186-4.828-12.051 2.348-20.057 7.292-25.574 1.889-2.107 3.452-3.851 3.896-5.318Zm20.905 35.728c-3.474 6.027-10.018 9.388-16.603 8.996-6.648-.396-13.19-4.597-16.696-13.348-3.55-8.857-.964-15.714 2.625-20.922 1.584-2.3 3.381-4.304 4.905-6.003l.53-.592c.823-.924 1.529-1.734 2.076-2.468.556-.745.878-1.321 1.014-1.768.098-.324.205-.701.324-1.12.81-2.843 2.177-7.644 5.06-11.325 1.686-2.15 3.93-3.984 6.93-4.849 2.999-.864 6.61-.72 10.959.829 3.76 1.338 6.143 3.497 7.456 6.157 1.293 2.622 1.474 5.584 1.136 8.431-.577 4.86-2.732 9.784-4.06 12.819-.215.49-.407.93-.569 1.313-.517 1.23-.717 2.556-.793 4.106a59.089 59.089 0 0 0-.05 2.466v.086a83.492 83.492 0 0 1-.049 2.692c-.152 3.963-.839 8.677-4.195 14.5Z"
        fill="#111112"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.422 40.769c-16.627-5.92-19.984 10.308-21.592 15.617-1.607 5.31-17.86 14.238-11.188 30.893 6.673 16.653 24.518 15.374 30.966 4.186 6.45-11.187 2.607-17.977 5.016-23.705 2.41-5.728 10.753-22.023-3.202-26.991Z"
        fill="#995C56"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.476 57.178c-10.767 1.863-9.416 9.896-14.323 13.798a.099.099 0 0 1-.133-.01.084.084 0 0 1 .011-.124c4.854-3.844 3.547-11.955 14.411-13.838.052-.008.1.023.11.071.01.048-.025.094-.076.103ZM39.493 44.147c-8.304 1.519-7.249 8.148-11.029 11.36a.073.073 0 0 1-.093-.112c3.738-3.163 2.716-9.856 11.096-11.392.04-.007.078.02.085.06a.073.073 0 0 1-.059.084ZM33.493 62.147c-8.304 1.519-7.249 8.148-11.029 11.36a.073.073 0 0 1-.093-.112c3.738-3.163 2.716-9.856 11.096-11.392.04-.007.078.02.085.06a.073.073 0 0 1-.059.084Z"
        fill="#280C14"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76.543 56.248c-3.555-2.107-9.878-3.688-9.878-3.688s-6.453 0-6.848.264c-.395.263-5.005 3.82-5.005 3.82l-2.764 2.106a.02.02 0 0 1-.001-.002c-4.404 2.35-8.474 16.946-8.474 16.946l5.642 6.689c-.504 3.896-.991 7.435-1.383 9.82-.676 4.116-1.982 8.977-3.237 13.647-1.435 5.343-2.804 10.436-3.085 13.88 12.38 8.033 33.585 4.215 33.585 4.215s7.112-16.727 7.243-18.44c.048-.622.253-4.067.5-8.23.433-7.285.997-16.77 1.08-17.188.133-.659-7.375-23.839-7.375-23.839Z"
        fill="#FFFFFE"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m68.788 52.56.12.03-.243.97v-1h.123ZM78.5 57.5l.5 1h1l-.5-1.5-.325-.193c-1.878-1.113-4.557-2.481-6.595-3.144a65.599 65.599 0 0 0-3.595-1.053l-.056-.014-.015-.004-.006-.002-.243.97v-1h-.074l-.207.001a184.314 184.314 0 0 0-3.015.033c-.835.016-1.693.041-2.371.08-.338.018-.646.041-.89.07-.12.014-.244.032-.354.055l-.007.001c-.067.014-.287.06-.485.192-.234.156-1.528 1.144-2.704 2.047-.602.461-1.191.914-1.63 1.252l-.726.56L54 57.5s-.336.103-.473.103c-.16.168-.505.23-.527.168h-1.207l-.217.095c-1.364.727-2.561 2.296-3.573 4.013-1.038 1.762-1.981 3.86-2.774 5.853a84.62 84.62 0 0 0-1.904 5.34 83.771 83.771 0 0 0-.666 2.181l-.036.126-.01.034-.003.011.963.27-.963-.269-.142.51 7.108 8.427.759-.592-.615-.788.615.788.004-.004.012-.009.043-.033a33.008 33.008 0 0 0 .356-.287c-.334 3.856-.611 7.415-.746 9.955-.76 4.578-2.645 10.239-4.433 15.598l-.03.092c-1.556 4.662-3.047 9.132-3.53 12.266l-.098.639.542.352c6.435 4.175 15.197 5.288 22.22 5.396a82.486 82.486 0 0 0 8.928-.36 68.97 68.97 0 0 0 3.393-.403l.192-.03.05-.008.014-.002.004-.001h.001l-.162-.986.162.986.556-.092.21-.522-.928-.372.928.372.001-.003.08-.197.225-.567a813.689 813.689 0 0 0 3.27-8.322c.9-2.326 1.804-4.71 2.493-6.624.344-.956.637-1.802.85-2.468.106-.332.195-.628.26-.874.06-.227.117-.474.133-.68M43 121.5c12.38 8.034 34.095 4.445 34.095 4.445s7.112-17.727 7.243-19.44c.048-.622.253-4.067.5-8.23v-.002c.433-7.284.997-16.768 1.08-17.186C86.05 80.428 78.5 57.5 78.5 57.5c-3.556-2.107-9.835-3.94-9.835-3.94s-6.453 0-6.848.264c-.395.263-5.317 3.676-5.317 3.676l-2.149.748s-.562.27-.753.248c-.016-.245 0 .005 0 .007l-.001.001c-.093.07-.746.244-.746.244s-.342.08-.474 0c-.18-.334-.283.059-.377.252-.208-.515.047-.252.047-.252a4.534 4.534 0 0 0-.846.6c-4.066 3.57-7.628 16.346-7.628 16.346l6.147 7.288s.511-.4 1.153-.949c.346-.296.73-.635 1.092-.978-.045.492-.088.983-.131 1.47-.375 4.262-.69 8.233-.834 10.975-.77 4.683-2.694 10.452-4.48 15.806-1.58 4.734-3.051 9.144-3.52 12.194Z"
        fill="#111112"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.758 50.584s1.185 4.215 1.053 6.059c0 0 8.56-.66 11.853-4.083 0 0-3.95-5.795-5.005-7.112-1.052-1.318-7.901 5.136-7.901 5.136Z"
        fill="#FAE6C9"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m53.072 49.857.685.728s.847 3.011 1.03 5.057c.033.374.044.716.024 1.002l.077.997-1.157.089-.231-.099.258-.286.055-.773c.054-.756-.172-2.133-.456-3.437a45.447 45.447 0 0 0-.55-2.236l-.01-.034-.002-.01-.164-.583.44-.415Zm2.746 6.68c-.629.077-1.007.107-1.007.107l.077.997h.003l.006-.001.021-.002.079-.007.29-.028a37.225 37.225 0 0 0 4.442-.743c2.562-.595 5.788-1.664 7.656-3.606l.563-.585-.458-.672-.172-.252a635.129 635.129 0 0 0-1.94-2.816c-1.11-1.6-2.384-3.413-2.938-4.105-.474-.592-1.173-.592-1.595-.518-.443.078-.907.28-1.334.506-.87.463-1.882 1.191-2.815 1.924a62.28 62.28 0 0 0-3.543 3.044l-.06.057-.015.014-.006.006.685.728s6.85-6.454 7.902-5.136c1.054 1.317 5.005 7.112 5.005 7.112-2.6 2.704-8.486 3.683-10.846 3.975Z"
        fill="#111112"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M74.897 119.703s-.647 1.015-3.44 3.378c-2.793 2.363-3.044 3.203-2.462 3.86.58.657 3.05-1.198 3.05-1.198s-.76 1.732-2.37 3.49c-1.608 1.758-.686 2.42.284 2.468 0 0 .636 1.692 1.995 1.129 0 0 .655.99 1.839.03 0 0 1.043.38 2.19-.746 1.148-1.126 4.24-6.87 3.959-10.909-.282-4.038-5.044-1.502-5.044-1.502Z"
        fill="#FAE6C9"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m74.428 118.821.47.883s-.648 1.015-3.441 3.377c-2.793 2.364-3.044 3.204-2.462 3.861.228.258.748.128 1.295-.125.845-.39 1.755-1.073 1.755-1.073s-.35.795-1.074 1.854a14.818 14.818 0 0 1-1.296 1.636c-1.608 1.757-.686 2.42.284 2.467 0 0 .636 1.693 1.995 1.13 0 0 .655.989 1.839.03 0 0 1.043.38 2.19-.746l.7.714c-.734.721-1.49 1.004-2.112 1.075a2.865 2.865 0 0 1-.542.011c-.699.42-1.388.458-1.978.216a2.004 2.004 0 0 1-.375-.201c-.315.037-.621.007-.91-.085a2.468 2.468 0 0 1-1.05-.686 3.401 3.401 0 0 1-.414-.549 2.449 2.449 0 0 1-.46-.168 1.816 1.816 0 0 1-.925-.973c-.191-.497-.13-1.017.06-1.488.185-.461.513-.934.96-1.422.147-.16.285-.319.416-.477-.052 0-.105-.003-.159-.008-.299-.03-.665-.149-.948-.47a1.906 1.906 0 0 1-.502-1.14c-.034-.475.122-.917.35-1.312.436-.755 1.323-1.654 2.717-2.834 1.372-1.161 2.203-1.978 2.682-2.492.239-.257.39-.438.475-.546a3.32 3.32 0 0 0 .092-.122l.136-.213.232-.124Zm5.514 2.385c-.282-4.038-5.044-1.502-5.044-1.502l-.47-.883.003-.002.005-.002.015-.008.05-.026a10.082 10.082 0 0 1 .784-.345c.492-.19 1.188-.414 1.924-.492.72-.076 1.621-.026 2.388.495.81.55 1.257 1.477 1.342 2.696.157 2.256-.62 4.878-1.52 7.006a24.947 24.947 0 0 1-1.432 2.867c-.455.774-.918 1.44-1.303 1.819l-.7-.714c1.147-1.126 4.239-6.87 3.958-10.909Z"
        fill="#111112"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M74.457 68.25c0 .5 3.623 16.225 4.018 19.518.396 3.292-6.058 27.921-6.453 30.16-.395 2.239 8.034 5.663 9.22 4.873 1.185-.79 9.219-24.629 10.009-31.346.79-6.717-3.488-23.497-5.005-27.922C84.666 58.924 76.5 55.5 76.5 55.5l-2.043 12.75Z"
        fill="#D9D9D9"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80.233 122.301c-1.185.79-9.615-2.634-9.22-4.873.104-.588.626-2.723 1.333-5.61 1.981-8.099 5.412-22.123 5.12-24.55-.25-2.084-1.792-9.144-2.89-14.176-.639-2.921-1.128-5.158-1.128-5.342L75.491 55s.439.184 1.132.523c2.298 1.127 7.4 3.97 8.614 7.51 1.517 4.425 5.795 21.205 5.005 27.922-.79 6.717-8.824 30.556-10.01 31.346Zm3.87-58.879c-.312-.908-.978-1.832-1.895-2.732-.91-.892-2.005-1.702-3.083-2.39a31.016 31.016 0 0 0-2.701-1.535l-1.762 10.994.007.037c.024.132.062.32.111.559.099.478.24 1.14.413 1.938l.555 2.546c.229 1.046.477 2.18.734 3.368.948 4.37 1.97 9.2 2.176 10.917m-4.017-19.49Zm9.461-4.212c.737 2.15 2.174 7.399 3.328 12.957.576 2.774 1.077 5.604 1.386 8.146.31 2.563.415 4.757.234 6.29-.378 3.217-2.54 10.737-4.805 17.663-1.124 3.437-2.257 6.682-3.18 9.11a55.181 55.181 0 0 1-1.188 2.92c-.135.3-.249.533-.34.703a5.943 5.943 0 0 1-1.001-.185c-.866-.223-1.947-.619-2.995-1.111-1.055-.496-2.01-1.06-2.655-1.594-.325-.269-.524-.492-.626-.653a.7.7 0 0 1-.053-.095c.113-.59.565-2.447 1.203-5.054l.102-.416c.637-2.606 1.426-5.83 2.193-9.085.807-3.428 1.593-6.902 2.153-9.73.28-1.414.506-2.68.65-3.704.136-.976.22-1.87.15-2.46m.736 34.329c-.01.015-.01.012.001-.002v.002Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.703 71.828c1.635-1.386 3.742-3.174 9.797-2.827 0 0 1.648 3.824 2 4 .03.014.105.073.22.163 1.205.942 6.847 5.355 12.748.336.07.057.138.116.203.177 3.293 3.073 5.927 6.672 6.015 7.111.043.215-.099 2.441-.244 4.734-.152 2.4-.309 4.874-.264 5.188.03.206-.847 3.016-2.04 6.84-2.364 7.576-5.97 19.131-6.233 22.311-.164 1.992-2.61 2.877-4.56 3.314C21.064 126.824 9.5 113.5 9.5 113.5c2.782-3.989 4.154-6.866 4.808-8.535-.95-1.068-1.815-2.147-2.517-3.194-4.077-6.078-1.959-11.092-.513-14.514.178-.422.345-.818.49-1.19.051-.197.116-.377.196-.537.211-.422.463-.932.745-1.503 1.946-3.94 5.334-10.8 6.791-12.027l.203-.172Z"
        fill="#94C776"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.135 98.226c-.584-.17-1.045.124-1.6.247a3.842 3.842 0 0 1-1.43.021c-1.081-.174-2.032-.725-2.912-1.352-1.005-.715-1.91-1.564-2.921-2.272-1.033-.724-2.107-.943-3.353-.713-1.085.2-2.064.59-3.183.557a6.758 6.758 0 0 1-2.647-.64c-1.77-.832-3.094-2.231-3.886-4.01-.313-.703-1.356-.187-1.197.505.765 3.332 3.96 5.586 7.245 5.939.826.089 1.663.03 2.475-.145 1.091-.237 2.172-.771 3.223-.14 1.75 1.051 3.082 2.67 4.964 3.533.975.447 2.056.726 3.134.673.905-.045 2.368-.272 2.572-1.35.07-.373-.1-.74-.484-.853Z"
        fill="#7EAB58"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.101 64.947s-.878 2.415-1.844 3.117c-.965.703-3.82.308-3.82.308s.791 6.234 6.234 7.375C41.115 76.889 44.5 74 44.5 74s-.75-1.414-2.068-2.775c-1.317-1.36-.044-5.4-.175-5.356-.132.044-7.156-.922-7.156-.922Z"
        fill="#FAE6C9"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m35.237 63.957-.136.99s-.878 2.415-1.844 3.117c-.965.703-3.318 1.619-3.318 1.619l-.577.257-.039-.94.514-.312h.004l.015-.002.064-.007.251-.033c.215-.031.681-.442 1.001-.51.695-.146 1.204-.667 1.497-.88v-.001c.101-.073.26-.242.453-.531.185-.275.363-.6.522-.923a13.858 13.858 0 0 0 .51-1.176l.006-.016.001-.003.276-.76.8.11Zm-5.157 6.717a8.232 8.232 0 0 1-.096-.55 5.125 5.125 0 0 1-.045-.441c-.999.04-.577.258-.577.258v.011l.001.02a3.978 3.978 0 0 0 .024.279c.02.18.725.671.784.974.118.603.32.634.734 1.5.837 1.754 1.67 3.626 4.766 4.275 2.94.617 5.137-.128 6.811-.763a10.967 10.967 0 0 0 1.936-.957 8.161 8.161 0 0 0 .667-.467l.042-.034.014-.011.005-.004.002-.002s.001-.001-.648-.762l.65.76.61-.52-.377-.709-.883.47.883-.47-.001-.003-.003-.005-.01-.017a13.908 13.908 0 0 0-.58-.941 14.985 14.985 0 0 0-1.638-2.035c-.108-.112-.233-.362-.29-.84-.055-.46-.032-1.003.032-1.553.064-.544.163-1.054.242-1.44l.027-.136c.028-.134.054-.26.07-.352.01-.055.026-.147.032-.237v-.003c.002-.03.011-.163-.024-.318a1.013 1.013 0 0 0-.298-.514.993.993 0 0 0-.703-.267h-.005a57.3 57.3 0 0 1-1.027-.118c-.673-.084-1.56-.2-2.445-.318a874.799 874.799 0 0 1-3.223-.436l-.302-.041-.136.99s7.024.966 7.156.922c.007-.002.01.008.01.03-.002.061-.035.22-.082.448a36.1 36.1 0 0 0-.101.507l-.002.01c-.244 1.276-.544 3.437.35 4.361A13.749 13.749 0 0 1 44.5 74s-3.385 3.946-8.829 2.804c-4.003-.84-5.246-4.467-5.591-6.13Zm11.86-5.753c.065-.022.135-.037.208-.045l-.013.001a.982.982 0 0 0-.194.044Z"
        fill="#111112"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.257 65.87c-.132.043-7.156-.923-7.156-.923s-.183.502-.473 1.114c1.047 1.87 3.19 3.13 5.241 3.623.677.163 1.347.19 1.998.11-.199-1.707.488-3.957.39-3.925Z"
        fill="#EA9B88"
        fillOpacity={0.7}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.984 57.346s1.912.893 1.132 3.284c-.779 2.39-2.616 1.87-2.616 1.87s-4.197 6.848-11.07 4.449c-6.874-2.398-5.54-11.466-5.54-11.466s-1.673-1.335-.814-3.192c.86-1.857 2.406-1.256 2.406-1.256s7.25-.168 11.903-4.549c0 0 .415 7.179 4.6 10.86Z"
        fill="#FAE6C9"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m50.736 58.178-.108-.093c-2.568-2.208-3.93-5.41-4.657-7.962a25.71 25.71 0 0 1-.627-2.805c-2.497 1.804-5.333 2.803-7.644 3.359a28.203 28.203 0 0 1-3.497.61 22.469 22.469 0 0 1-1.408.11h-.031l-.024-1s7.235-.163 12.443-4.208c.318-.247.629-.509.93-.786 0 0 .027.46.134 1.212.337 2.369 1.466 7.645 5.033 10.712 0 0 2.148.981 1.272 3.606-.876 2.624-3.393 1.567-3.393 1.567s-4.261 8.005-11.984 5.371c-7.723-2.632-6.224-12.59-6.224-12.59s-1.879-1.465-.913-3.504c.964-2.04 2.702-1.38 2.702-1.38l.023 1-.195.005-.169-.064a1.172 1.172 0 0 0-.489-.028c-.228.037-.626.172-.969.895-.307.65-.174 1.177.063 1.6a2.694 2.694 0 0 0 .533.663l.032.028.002.001.456.356-.087.576v.002l-.003.016a9.772 9.772 0 0 0-.04.361c-.024.256-.05.631-.06 1.091-.019.924.033 2.171.309 3.485.551 2.63 1.953 5.382 5.352 6.54 3.438 1.173 6.078.002 7.93-1.522a12.768 12.768 0 0 0 2.813-3.308l.018-.032.012-.021.005-.01v-.002l.429-.804.835.35.003.002.045.016c.045.015.116.037.205.057.183.043.415.075.648.054.227-.02.433-.085.61-.218.173-.13.387-.375.552-.87.33-.99.08-1.551-.16-1.873a1.892 1.892 0 0 0-.588-.51l-.12-.055Z"
        fill="#111112"
      />
      <G filter="url(#b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.5 60a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
          fill="#EA6A6A"
        />
      </G>
      <G filter="url(#c)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.5 64a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
          fill="#EA6A6A"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m61.896 48.057-.424-.906.445.896-.01.005-.01.005Zm-12.508 1.382c-5.638-.108-6.91-2.387-8.798-5.772a49.907 49.907 0 0 0-1.448-2.476c-2.984-4.707-3.494-10.775-.792-14.086 1.143-1.402 1.49-2.375 1.826-3.319.459-1.285.898-2.518 3.305-4.712 4.176-3.804 10.868-1.212 10.868-1.212 5.202-2.038 8.697 3.708 11.17 7.776.629 1.033 1.191 1.958 1.7 2.62 2.507 3.265 2.401 4.183 1.62 9.9-.783 5.718-7.367 8.993-7.367 8.993s-5.16 2.42-12.084 2.288ZM54.343 16.8c1.757-.591 3.379-.423 4.831.239 1.512.688 2.796 1.89 3.885 3.198 1.093 1.314 2.043 2.804 2.86 4.136.163.265.32.522.47.77.626 1.028 1.151 1.891 1.623 2.506 1.278 1.664 2.013 2.882 2.24 4.5.211 1.508-.035 3.31-.41 6.06l-.012.084c-.439 3.205-2.487 5.655-4.308 7.257a19.647 19.647 0 0 1-3.28 2.324 11.478 11.478 0 0 1-.296.158l-.02.01-.005.003-.002.001s-.002 0-.447-.895l.424.906-.002.001-.005.002-.015.007-.053.024-.192.084c-.166.07-.407.17-.717.287-.618.235-1.51.544-2.622.847-2.223.607-5.341 1.198-8.921 1.13-3.655-.07-5.765-1.022-7.322-2.736-.74-.816-1.324-1.77-1.888-2.761-.152-.266-.301-.535-.453-.806-.427-.766-.87-1.56-1.409-2.41M54.343 16.8a16.719 16.719 0 0 0-3.783-.756c-2.32-.181-5.37.12-7.752 2.291-2.195 2-2.898 3.31-3.38 4.586-.071.186-.135.364-.197.54-.33.922-.625 1.748-1.656 3.012-1.56 1.91-2.133 4.533-1.96 7.216.175 2.694 1.105 5.549 2.682 8.038"
        fill="#111112"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.472 47.152s6.584-3.276 7.367-8.994c.781-5.717.887-6.634-1.62-9.9-2.508-3.266-6.346-12.952-12.87-10.396 0 0-6.692-2.592-10.868 1.213-4.175 3.804-2.43 4.72-5.131 8.03-2.702 3.31-2.192 9.379.792 14.086 2.983 4.707 3.322 8.116 10.246 8.248 6.924.132 12.084-2.287 12.084-2.287Z"
        fill="#995C56"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.048 18.082c2.587 4.99 6.077 9.79 8.19 14.286 1.057 2.247 1.77 4.42 1.847 6.505.078 2.084-.481 4.077-1.96 5.954-.025.031-.074.034-.11.006-.036-.029-.046-.078-.02-.11 1.46-1.854 2.008-3.81 1.932-5.864-.115-3.08-1.642-6.385-3.632-9.858-1.99-3.472-4.44-7.11-6.386-10.865-.02-.04-.006-.084.032-.099.04-.015.087.005.107.045ZM51.275 21.037c-8.304 1.52-7.248 8.149-11.028 11.36a.073.073 0 1 1-.094-.111c3.739-3.163 2.717-9.857 11.096-11.392.04-.007.078.02.085.059a.073.073 0 0 1-.059.084ZM55.493 23.147c-8.304 1.519-7.249 8.148-11.029 11.36a.073.073 0 0 1-.093-.112c3.738-3.163 2.716-9.856 11.096-11.392.04-.007.078.02.085.06a.073.073 0 0 1-.059.084Z"
        fill="#280C14"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.826 52.534a1.764 1.764 0 0 0-.198-.416.626.626 0 0 0-.16-.162c-.059-.043-.127-.056-.186-.098-.046-.033-.09.029-.07.07.025.055.017.123.025.183.01.063.022.126.04.186.037.119.054.218.059.332a2.107 2.107 0 0 1-.009.27c-.003.019-.005.036-.01.053-.005.03-.015.06-.022.087a.59.59 0 0 0-.34-.113c-.384.012-.675.443-.55.806.122.349.516.511.86.413.319-.09.515-.382.593-.69a1.674 1.674 0 0 0-.032-.92ZM50.406 59.237c-.069-.158-.263-.237-.428-.245a.813.813 0 0 0-.494.161c-.284.203-.467.506-.616.816-.089.184-.166.379-.164.587a.77.77 0 0 0 .218.538c.143.146.35.23.554.203a.54.54 0 0 0 .458-.371c.103-.323-.105-.705-.425-.76.022-.047.043-.093.067-.138a1.874 1.874 0 0 1 .143-.235l.05-.058c.025-.026.05-.05.077-.073-.057.051.021-.014.036-.023.05-.03.1-.056.151-.082-.08.042.107-.045.088-.035a.373.373 0 0 1 .03-.017l.011-.003c.053-.008.13-.045.16-.058.09-.038.124-.115.084-.207Z"
        fill="#EA9B88"
        fillOpacity={0.7}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.5 110.491s0-.991.154-1.522c.48.051 1.048.1 1.715.141 3.108.191 3.707.637 3.645 1.381-.063.744-2.692.735-2.692.735s1.4.795 3.393 1.176c1.992.381 1.7 1.303 1.062 1.828 0 0 .427 1.478-.787 1.786 0 0 .057 1.009-1.24.956 0 0-.518.791-1.874.606-1.01-.138-4.062-1.475-6.323-3.348-.773-.64.422.509-.053-.23 1.816-.922 3-3.509 3-3.509Z"
        fill="#FAE6C9"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.61 110.698c.084-.403.234-1.054.423-1.618.15.016.274.067.394.132.053.028.106.06.16.091.11.066.226.135.363.189.128.05.274.088.451.099 3.109.191 3.707.637 3.645 1.381-.02.239-.306.401-.685.51-.798.229-2.007.225-2.007.225s.765.434 1.968.814c.425.135.905.262 1.425.362 1.993.381 1.7 1.303 1.062 1.828 0 0 .427 1.478-.786 1.786 0 0 .057 1.009-1.24.956 0 0-.519.791-1.874.606-.741-.101-3.823-1.387-5.218-2.301l-.07-.047-.072-.049a3.347 3.347 0 0 1-.308-.239c-.207-.185-.294-.339-.209-.442 0 .019.006.021.015.012a.125.125 0 0 0 .01-.012c.013-.019.031-.053.052-.09.045-.081.1-.18.132-.18.154-.154.3-.314.44-.479.121-.143.237-.29.347-.437a12.37 12.37 0 0 0 1.448-2.572c.038-.092.057-.143.057-.143s.027-.149.076-.382Zm-1.021-.004c.025-.124.06-.298.107-.5.09-.403.224-.94.389-1.432l.255-.762.8.086c.45.048.807.265.966.362l.046.028c.15.087.21.111.31.117 1.552.095 2.638.258 3.346.563.373.16.733.398.973.773.25.389.29.795.261 1.126a1.35 1.35 0 0 1-.351.796l.244.05c.563.107 1.047.267 1.43.501.39.238.728.589.863 1.071.134.481.02.921-.147 1.244a2.19 2.19 0 0 1-.208.326c.012.162.014.352-.008.555a2.25 2.25 0 0 1-.395 1.073 1.97 1.97 0 0 1-.576.535c-.037.098-.085.2-.148.304-.3.5-.818.842-1.526.925-.1.084-.22.171-.362.254-.49.286-1.182.484-2.084.361m-4.185-8.356h-.043l.039.022-.017.087a11.907 11.907 0 0 1-.5 1.058c-.209.39-.47.827-.78 1.252l-.683.82-.003.003a1.3 1.3 0 0 0-.315.378l-.022.026c-.261.313-.308.692-.232 1.007.063.264.204.458.297.571.194.233.461.438.704.603.51.348 1.219.727 1.936 1.073.726.35 1.5.684 2.161.942.618.241 1.253.461 1.643.514"
        fill="#111112"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.488 113.958c-.047-.017-.096.021-.106.066a.69.69 0 0 1-.29.001l-.04-.005c-.158-.02-.317-.041-.475-.064a13.37 13.37 0 0 1-1.033-.183 6.894 6.894 0 0 1-.952-.297c-.126-.049-.248-.109-.37-.169a3.299 3.299 0 0 0-.537-.225c-.074-.022-.13.061-.096.125.19.365.623.611.986.771a6.8 6.8 0 0 0 1.25.397c.43.096.878.169 1.318.212.217.022.465-.038.544-.268.058-.167-.049-.302-.2-.361Zm-.743 1.885-.007-.005a1.456 1.456 0 0 0-.4-.213 4.758 4.758 0 0 0-.309-.077l-.17-.04a9.46 9.46 0 0 1-.975-.296c-.3-.111-.587-.248-.875-.386l-.033-.016a2.856 2.856 0 0 1-.167-.089c-.206-.117-.457-.259-.658-.192-.012.004-.022.015-.021.028.013.246.304.419.518.545l.09.055c.304.189.637.336.967.473.324.133.656.248.996.333.17.044.34.084.516.103.184.02.335-.018.51-.076a.081.081 0 0 0 .018-.147Zm-2.141.538a4.4 4.4 0 0 1 .727.278c.053.027.03.096-.015.115-.446.18-.925.054-1.348-.133a2.825 2.825 0 0 1-.599-.351 1.438 1.438 0 0 1-.249-.227.877.877 0 0 1-.11-.191c-.015-.031-.03-.063-.047-.095-.022-.043.022-.079.061-.062.049.021.099.036.149.051.059.018.118.036.175.063.054.025.106.055.158.085l.124.068.045.022c.166.084.33.167.504.234.14.053.283.098.425.143ZM57.62 52.428c1.911-.327 3.818-1.326 5.425-2.375.438-.286.862-.592 1.254-.927-1.048-1.506-2.153-3.07-2.639-3.678-1.053-1.318-7.902 5.136-7.902 5.136s.224.8.467 1.853c.295.033.598.12.872.147.845.082 1.694-.015 2.524-.156Z"
        fill="#EA9B88"
        fillOpacity={0.7}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.516 28.33c.755.771 2.037 1.798 3.64 1.994 1.805.22 3.024 2.214 3.61 3.438.265.557.4.955.4.955s.356-.313.866-.542c.827-.371 2.06-.522 2.857 1.231 1.289 2.837-1.944 4.668-1.944 4.668s.752 8.901-7.688 11.62c-8.441 2.72-13.355-9.685-14.03-13.272 0 0 1.232-3.327 5.007-4.761 3.224-1.225 5.131-3.07 6.109-5.132l.03-.064a8.439 8.439 0 0 0 .33-.82.108.108 0 0 1 .185-.03l.102.129a8.568 8.568 0 0 0 .526.587Zm3.76 1.002c-.868-.107-1.658-.533-2.308-1.04a7.64 7.64 0 0 1-1.29-1.29c-.535-.69-1.636-.517-1.922.32-.715 2.09-2.435 4.097-5.877 5.404a9.936 9.936 0 0 0-4.356 3.242 9.875 9.875 0 0 0-.93 1.449 7.56 7.56 0 0 0-.295.635l-.005.014-.002.005v.002h-.001c0 .001 0 .002.937.349l-.938-.347-.096.26.052.271c.362 1.927 1.814 6.068 4.28 9.41 2.456 3.33 6.193 6.191 11.038 4.63 4.59-1.478 6.707-4.67 7.65-7.461a14.549 14.549 0 0 0 .749-4.59l.074-.056a6.588 6.588 0 0 0 1.146-1.112c.79-.992 1.47-2.558.618-4.434-.391-.86-.927-1.467-1.601-1.792-.672-.324-1.346-.304-1.885-.176a3.872 3.872 0 0 0-.682.233 11.556 11.556 0 0 0-.643-1.154c-.703-1.103-1.923-2.554-3.712-2.772"
        fill="#111112"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.167 34.717s2.434-2.148 3.723.69c1.288 2.836-1.945 4.667-1.945 4.667s.752 8.901-7.688 11.62c-8.441 2.72-13.355-9.686-14.03-13.272 0 0 1.232-3.327 5.008-4.761 3.678-1.398 5.642-3.604 6.467-6.016a.108.108 0 0 1 .186-.03c.44.568 2.045 2.437 4.267 2.71 2.627.32 4.012 4.392 4.012 4.392Z"
        fill="#FAE6C9"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64.013 36.284a.812.812 0 0 0-.805-.185.77.77 0 0 0-.302.197 1.426 1.426 0 0 1-.012-.256l.006-.09v-.008l.005-.033c.013-.069.03-.137.051-.203l.023-.061.035-.072c.032-.06.072-.113.111-.169.019-.025.04-.052.057-.08l.017-.037c.006-.011.06-.121.029-.061a.28.28 0 0 0-.312-.406c-.487.12-.688.715-.74 1.16-.058.484.066 1.062.424 1.412.441.431 1.257.43 1.542-.18.14-.3.12-.689-.13-.928Z"
        fill="#EA9B88"
        fillOpacity={0.7}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 73.284c.118 2.78 2.939 5.362 3.527 5.716.587.354.893.279 1.039-.86 0 0 1.266 1.012 1.628-.96 0 0 1.266.86 1.718-1.367 0 0 1.944.557 2.08-1.466.135-2.024-1.854-5.008-3.12-6.425-1.266-1.416-2.26-.454-2.667.151-.408.608-1.394.178-1.945 1.468-.55 1.29-.904.455-1.22 1.315-.317.86-1.085 1.366-1.04 2.428Z"
        fill="#111112"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.14 73.367c.103 2.17 2.566 4.185 3.079 4.46.513.277.78.218.907-.67 0 0 1.106.79 1.421-.75 0 0 1.106.671 1.5-1.066 0 0 1.698.435 1.817-1.145.119-1.579-1.619-3.907-2.724-5.013-1.105-1.106-1.974-.355-2.33.118-.355.474-1.216.138-1.697 1.145-.48 1.006-.79.355-1.066 1.026-.276.672-.947 1.066-.908 1.895Z"
        fill="#FAE6C9"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.056 73.001c.255.477.527.944.826 1.394a.88.88 0 0 1 .176.598c0 .11 0 .239.03.419.008.047-.032.11-.088.088-.306-.125-.338-.237-.386-.407a1.282 1.282 0 0 0-.17-.388 13.236 13.236 0 0 1-.823-1.449 15.588 15.588 0 0 1-.65-1.55l-.02-.056c-.169-.474-.355-.994-.327-1.498a.081.081 0 0 1 .15-.041c.195.303.32.652.442.998.052.148.104.294.161.437.2.498.427.983.68 1.455Zm-.471 3.165a1.275 1.275 0 0 1-.251-.33c-.03-.049-.059-.097-.089-.141a5.247 5.247 0 0 1-.308-.501c-.148-.283-.28-.575-.411-.867-.071-.157-.142-.314-.215-.47l-.162-.343-.508-1.076a7.726 7.726 0 0 1-.117-.267c-.154-.361-.322-.757-.633-.964-.035-.023-.07.009-.075.043-.05.377.15.789.329 1.159.05.102.097.2.137.295l.526 1.215.158.366.107.252c.156.366.312.736.513 1.078.1.17.221.339.378.459.158.12.31.153.491.19l.063.014c.06.013.122-.066.067-.112Zm-1.635.297-.009-.007a4.307 4.307 0 0 1-.37-.37c-.217-.255-.394-.543-.568-.828l-.073-.119c-.12-.195-.238-.391-.356-.587l-.327-.54a49.71 49.71 0 0 1-.35-.58l-.044-.074c-.1-.171-.204-.349-.351-.478-.112-.099-.252 0-.233.135.028.2.126.388.219.568l.034.067a26.464 26.464 0 0 0 1.063 1.91c.202.336.41.672.67.968.206.236.568.597.91.423.04-.02.052-.068.045-.109-.03-.158-.146-.274-.26-.379ZM73.498 126.526a.44.44 0 0 0-.158-.043c-.108-.011-.213.067-.267.154-.085.135-.14.29-.193.443-.024.067-.047.134-.073.199a11.959 11.959 0 0 1-.963 1.885c-.246.392-.509.776-.794 1.142-.087.112-.179.222-.27.331-.058.068-.115.137-.17.206l-.03.035a5.83 5.83 0 0 0-.166.212c-.06.081-.099.159-.14.24-.017.034-.035.069-.055.105-.078.143.077.292.22.218l.086-.043c.077-.038.148-.073.223-.13.095-.071.183-.148.268-.23a7.49 7.49 0 0 0 .494-.542 11.17 11.17 0 0 0 1.61-2.5l.088-.181c.19-.389.398-.817.443-1.234a.297.297 0 0 0-.153-.267Zm1.917 1.126c-.036-.091-.122-.157-.225-.127-.209.059-.326.262-.425.444-.066.12-.13.241-.193.363l-.148.279a31.593 31.593 0 0 1-1.48 2.455c-.126.189-.255.375-.385.562l-.026.037a3.61 3.61 0 0 0-.145.235c-.06.103-.12.206-.192.299-.057.073-.051.16.028.215.323.224.665-.273.853-.546a2.47 2.47 0 0 1 .066-.093 25.191 25.191 0 0 0 1.73-2.704l.004-.008c.123-.221.247-.444.36-.671l.033-.067c.103-.204.23-.456.145-.673Zm.781 1.108c.083-.03.148-.026.208.042.207.233.083.539-.023.799a9.026 9.026 0 0 1-.936 1.851c-.182.27-.376.531-.583.781-.098.119-.211.242-.34.33a.768.768 0 0 1-.17.095c-.034.012-.063.012-.092.012-.023 0-.046 0-.072.006-.02.004-.048-.01-.045-.035.003-.027 0-.052-.002-.078-.003-.035-.007-.07.004-.112.02-.073.056-.151.093-.217.064-.119.144-.23.223-.341l.08-.112c.202-.291.383-.596.556-.906.164-.291.316-.587.451-.893.074-.167.135-.338.197-.509.046-.128.092-.255.142-.38.067-.164.139-.27.31-.333Z"
        fill="#EA9B88"
        fillOpacity={0.7}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.563 53.413c.011.04.01.085.005.131v.004a.49.49 0 0 0-.002.031.218.218 0 0 1-.012.074c-.068.19-.23.308-.433.284-.208-.026-.322-.194-.342-.389l-.008-.062a2.523 2.523 0 0 1-.007-.063l-.002-.008a1.407 1.407 0 0 0-.087-.31 1.515 1.515 0 0 0-.092-.165 1.053 1.053 0 0 0-.466-.397 1.164 1.164 0 0 0-.674-.063 1.773 1.773 0 0 0-.283.096c-.166.066-.33.132-.517.1-.143-.023-.224-.23-.14-.346.441-.62 1.319-.72 1.986-.43.574.248 1.048.873 1.074 1.514Zm6.431 2.729c.074.156.136.318.168.488.04.212.08.472-.06.657-.091.12-.196.203-.355.203a.422.422 0 0 1-.355-.203.67.67 0 0 1-.097-.336 1.59 1.59 0 0 0-.004-.038l-.006-.054v-.011l-.003-.013c-.012-.06-.023-.12-.04-.178l-.006-.016c-.005-.018-.01-.036-.017-.054a.979.979 0 0 0-.017-.038.244.244 0 0 1-.01-.026l-.01-.02a1.377 1.377 0 0 0-.107-.184 1.351 1.351 0 0 0-.13-.144l-.051-.048-.014-.012a.386.386 0 0 0-.024-.018l-.027-.019c-.036-.024-.072-.048-.11-.07a2.134 2.134 0 0 0-.092-.053l-.007-.003a1.41 1.41 0 0 1-.034-.017l-.056-.023a1.613 1.613 0 0 0-.086-.027c-.045-.013-.09-.022-.137-.032l-.036-.007h-.001l-.001-.001h-.017l-.032-.003a2.41 2.41 0 0 0-.293-.005h-.001l-.044.001a1.12 1.12 0 0 1-.4-.037c-.178-.057-.289-.319-.12-.457l.008-.007a.774.774 0 0 1 .275-.165c.08-.026.163-.05.245-.067.165-.034.336-.052.504-.037.33.03.665.124.938.315.278.195.517.45.662.758Zm-7.135-.14c-.018-.099-.143-.197-.246-.186-.169.017-.28.058-.446.153l-.006.004a1.002 1.002 0 0 1-.337.143 1.16 1.16 0 0 1-.676-.058c-.587-.275-.822-.914-.873-1.518-.016-.187-.185-.365-.39-.297l-.096.03c-.268.077-.827.24-.671.525.09.165.328.159.553.119.072.745.46 1.53 1.14 1.85.384.18.815.231 1.228.13.422-.102.91-.398.82-.894Zm6.498 2.637c.1.2.22.38.342.566.121.184.266.529.011.677-.255.15-.525-.103-.666-.294a.572.572 0 0 1-.04-.065l-.03-.053c-.461.368-1.118.491-1.676.274-.76-.294-1.326-1.191-1.132-2.01.062-.26.512-.286.554 0 .042.285.088.568.24.818.128.21.331.398.535.477.44.17.978.014 1.207-.39.135-.236.527-.257.655 0ZM41.47 62.636c.21.259.186.627-.055.823-.463.376-.931.584-1.402.628a2.062 2.062 0 0 1-1.268-.306c-.695-.42-1.14-1.16-1.348-1.679-.123-.308.016-.641.311-.745.295-.104.635.062.758.37.154.384.455.836.818 1.055.167.1.344.152.543.133.206-.019.482-.116.825-.394.241-.196.607-.145.818.114Z"
        fill="#111112"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.38 45.89a.066.066 0 0 0-.017.009h.003l.013-.008Z"
        fill="#E8826C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.433 25.674c1.283-1.808 4.285-2.052 6.122-1.114 2.21 1.127 2.896 3.342 2.691 5.652-.218 2.47-1.43 5.166-2.51 7.573-.208.46-.41.91-.6 1.346-1.114 2.563-2.657 4.76-5.738 4.903-2.87.134-5.765-2.102-7.85-3.88-2.113-1.803-3.78-3.8-4.112-6.604-.197-1.653 1.424-3.408 3.082-3.375 2.221.044 3.954 1.043 5.714 2.057l.143.082c.127-.353.255-.707.38-1.06.734-2.064 1.405-3.785 2.678-5.58ZM17.06 50.643c.067-.155.134-.31.204-.463.853-1.863 3.753-4.323 4.762-1.134.87 2.743-1.67 7.449-4.683 7.715-2.703.24-4.234-1.897-5.615-3.825-.165-.23-.328-.456-.49-.676-.605-.818-.011-1.837.796-2.164 1.383-.56 2.76-.111 3.817.87l.053.049c.2.184.423.391.585.6l.081.073c.072-.136.142-.272.206-.41.1-.21.192-.423.284-.635Z"
        fill="#111112"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.262 25.518c1.162-1.637 3.882-1.858 5.546-1.009 2.002 1.021 2.623 3.028 2.438 5.12-.198 2.238-1.296 4.68-2.275 6.86-.187.418-.37.826-.542 1.22-1.01 2.322-2.408 4.313-5.198 4.442-2.601.122-5.223-1.904-7.113-3.515-1.913-1.633-3.423-3.443-3.724-5.982-.178-1.498 1.29-3.087 2.792-3.058 2.012.04 3.582.945 5.176 1.864l.13.074.344-.96c.665-1.87 1.272-3.43 2.426-5.056Zm-5.773 23.525c.06-.14.121-.28.185-.42.773-1.687 3.4-3.915 4.314-1.026.787 2.484-1.512 6.747-4.242 6.988-2.45.217-3.836-1.718-5.088-3.465-.149-.208-.296-.413-.443-.612-.548-.741-.01-1.664.721-1.96 1.253-.508 2.5-.101 3.458.788l.048.044c.18.167.383.354.53.544l.073.066c.065-.123.13-.247.186-.372.091-.19.175-.383.258-.575Z"
        fill="#FC9A92"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.574 35.464a.5.5 0 1 1-.778.628c-.106-.13-.194-.165-.257-.175a.584.584 0 0 0-.321.063c-.291.13-.59.411-.775.646a.5.5 0 0 1-.787-.616c.238-.304.658-.723 1.156-.944a1.57 1.57 0 0 1 .884-.136c.336.053.636.234.878.534ZM55.65 44.5a.65.65 0 1 0-1.3 0c0 .51-.107.83-.23 1.028a.943.943 0 0 1-.48.39c-.429.166-1.01.107-1.435-.035a.65.65 0 0 0-.41 1.233c.574.192 1.493.332 2.314.015a2.242 2.242 0 0 0 1.114-.916c.283-.454.427-1.027.427-1.715Zm-9.147-5.57a.5.5 0 0 0-.043-.705c-.289-.255-.614-.384-.955-.38a1.57 1.57 0 0 0-.849.281c-.453.301-.798.784-.982 1.123a.5.5 0 0 0 .879.477c.142-.262.39-.59.656-.766a.582.582 0 0 1 .306-.116c.064 0 .157.019.283.13a.5.5 0 0 0 .705-.044Zm1.489 2.125a.5.5 0 1 0-1-.028c-.005.183-.058.281-.11.34a.592.592 0 0 1-.29.166c-.296.086-.688.057-.963-.017a.5.5 0 0 0-.258.966c.386.104.974.164 1.5.011.27-.078.55-.22.766-.469.222-.255.344-.583.355-.969Zm6.914-3.558a.5.5 0 0 1 .485.514c-.01.375-.126.696-.343.945a1.492 1.492 0 0 1-.748.448c-.507.137-1.069.064-1.43-.035a.5.5 0 1 1 .265-.965c.265.073.632.108.904.034a.5.5 0 0 0 .255-.14c.043-.049.093-.137.098-.315a.5.5 0 0 1 .514-.486Zm-1.908 4.545a.5.5 0 0 0-1-.013.225.225 0 0 1-.033.049.93.93 0 0 1-.242.189 1.605 1.605 0 0 1-.723.217.5.5 0 0 0 0 1c.4 0 .86-.142 1.222-.35a1.91 1.91 0 0 0 .509-.413c.14-.167.267-.399.267-.68ZM52.15 66a.65.65 0 1 0-1.3 0v14.64a36.86 36.86 0 0 0-.959-1.237 46.796 46.796 0 0 0-4.334-4.677 5.05 5.05 0 0 0-.273-.237l-.838-.677-.82.698c-2.59 2.201-5.026 2.3-6.968 1.799-2.02-.522-3.55-1.71-4.137-2.169l-.007-.005a21.301 21.301 0 0 0-.105-.082 7.74 7.74 0 0 1-.205-.408 36.299 36.299 0 0 1-.667-1.527 94.742 94.742 0 0 1-.814-2.032l-.054-.14-.019-.047-.3-.784-.84-.048c-3.251-.186-5.474.088-7.148.655-1.7.577-2.735 1.425-3.596 2.15-.499.42-1.003 1.164-1.46 1.917a47.287 47.287 0 0 0-1.582 2.884c-1.103 2.156-2.296 4.71-3.29 6.836l-.005.012-.235.503-.8 1.28-.658.803c-.16.468-.384 1-.656 1.644l-.021.05c-.715 1.692-1.674 3.961-1.892 6.61-.224 2.727.337 5.794 2.544 9.084a29.98 29.98 0 0 0 2.14 2.78c-.813 1.422-2.319 3.882-4.918 7.609l-.574.823.651.763.99-.843-.99.844.005.005.01.011.03.036.116.13c.1.111.246.27.435.469.378.397.931.954 1.646 1.609a39.977 39.977 0 0 0 6.113 4.604c5.21 3.179 12.64 5.968 21.252 4.098 1.025-.223 2.286-.587 3.343-1.218 1.061-.633 2.11-1.665 2.24-3.247.056-.677.305-1.9.718-3.554.407-1.626.95-3.588 1.563-5.698 1.226-4.218 2.715-8.989 3.897-12.779l.002-.004v-.004c.596-1.906 1.114-3.568 1.48-4.78.183-.605.331-1.108.433-1.477.05-.182.093-.346.123-.48.014-.065.03-.14.041-.214l.001-.004c.005-.033.033-.201.013-.4l-.001-.075c0-.083.003-.2.008-.35.01-.3.03-.703.056-1.18.052-.95.129-2.163.205-3.365V87.6c.073-1.143.145-2.276.193-3.151.024-.438.043-.819.053-1.107.005-.143.008-.274.008-.381v-.01a2.209 2.209 0 0 0-.047-.478.648.648 0 0 0 .204-.472V66ZM9 114.627c3.188-4.572 4.76-7.273 5.433-8.521-1-1.114-1.91-2.242-2.643-3.335-4.077-6.078-1.958-11.092-.512-14.514l.047-.112c.125-.296.244-.58.353-.851a18.557 18.557 0 0 0 .288-.766s.534-.528.463-.421a89.242 89.242 0 0 0 .385-.803l.327-.692c.104-.221.16-.234.218-.248.061-.014.125-.029.248-.293 1.994-4.267 4.74-10.147 5.996-11.204 1.668-1.405 3.524-2.863 9.834-2.503 0 0 1.711 4.46 2.063 4.636.03.015.105.074.22.164 1.205.942 6.846 5.354 12.748.336.07.057.137.115.203.176 3.292 3.074 5.926 6.673 6.014 7.112.043.215-.098 2.441-.243 4.734-.153 2.4-.31 4.874-.264 5.188.03.206-.848 3.016-2.04 6.84-2.365 7.575-5.97 19.131-6.233 22.311-.165 1.992-2.611 2.877-4.564 3.301C21 128.711 9 114.627 9 114.627Z"
        fill="#111112"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.82 77.993a.6.6 0 0 1 .188.827c-1.4 2.225-3.301 5.758-4.453 9.113-.576 1.68-.953 3.282-1 4.637-.048 1.365.24 2.376.87 3.006 2.648 2.649 6.133 7.033 8.312 9.902.866 1.14 1.574 2.574 1.412 4.151-.11 1.065-.43 2.282-1.164 3.192-.767.952-1.94 1.506-3.57 1.273-1.9-.271-3.501-1.218-4.92-2.379-1.062-.869-2.058-1.891-3.009-2.865-.308-.316-.611-.626-.91-.925a.6.6 0 0 1 .849-.849c.322.323.64.649.957.973.94.963 1.868 1.915 2.873 2.737 1.332 1.089 2.731 1.892 4.33 2.12 1.224.175 1.973-.226 2.466-.838.527-.653.805-1.606.904-2.562.117-1.139-.389-2.269-1.173-3.302-2.178-2.867-5.62-7.194-8.206-9.78-.97-.97-1.274-2.383-1.22-3.896.053-1.523.47-3.252 1.064-4.985 1.19-3.47 3.14-7.087 4.573-9.362a.6.6 0 0 1 .827-.188ZM41 59.95a.5.5 0 0 1-.165.687 1.06 1.06 0 0 1-.72.128 1.911 1.911 0 0 1-.616-.219c-.367-.199-.728-.517-.938-.858a.5.5 0 1 1 .853-.523c.102.166.32.371.562.503a.928.928 0 0 0 .288.108c.033.005.051.004.059.003a.5.5 0 0 1 .677.17Z"
        fill="#111112"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h107v134H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default EmotionalHealthImage