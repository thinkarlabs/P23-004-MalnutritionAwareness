import ChildDetails from "../../../../assets/svg/childDetails";
import WarningDetails from "../../../../assets/svg/warningDetailSVG";
import WhatBabyDoIllustration from "../../../../assets/svg/whatBabyDoSVG";
import WhatShouldIDoIllustration from "../../../../assets/svg/whatShouldIDoSVG";
import { CARD_BACKGROUND, CARD_BLUE, CARD_RED, LIGHT_YELLOW } from "../colors";
import { CREATE_ACCOUNT, HOMESCREEN } from "../constants";
import {createAccountStyles} from '../../../modules/createAccount/styles';
import { WHAT_MOST_BABIES_DO } from "./childConstants";

export const PREGNANTWOMEN_CARD = [
    {
        CONTENT: HOMESCREEN.CARD_CONTENT1,
        BACKGROUND: CARD_BLUE,
        IMAGE: <WhatBabyDoIllustration />,
        BOX_TEXT: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
        ONPRESS: ('card', {
            cardName: WHAT_MOST_BABIES_DO,
          })
    },
    {
        CONTENT: HOMESCREEN.CARD_CONTENT2,
        BACKGROUND: LIGHT_YELLOW,
        IMAGE: <WhatShouldIDoIllustration />,
        BOX_TEXT: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
        STYLE: createAccountStyles.rowReverse
    },
    {
        CONTENT: HOMESCREEN.CARD_CONTENT3,
        BACKGROUND: CARD_RED,
        IMAGE: <WarningDetails />,
        BOX_TEXT: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    },
    {
        CONTENT: HOMESCREEN.CARD_CONTENT4,
        BACKGROUND: CARD_BACKGROUND,
        IMAGE: <ChildDetails />,
        BOX_TEXT: 'Add your child detail',
    },
]