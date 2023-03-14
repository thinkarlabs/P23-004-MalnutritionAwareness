import ChildIcon from '../../../../assets/svg/icons/childIcon';
import ChildDetails from '../../../../assets/svg/childDetails';
import WarningDetails from '../../../../assets/svg/warningDetailSVG';
import WhatBabyDoIllustration from '../../../../assets/svg/whatBabyDoSVG';
import {CARD_BACKGROUND, CARD_BLUE, CARD_RED, LIGHT_YELLOW} from '../colors';
import {CREATE_ACCOUNT, HOMESCREEN} from '../constants';
import {createAccountStyles} from '../../../modules/createAccount/styles';
import WhatShouldIDoIllustration from '../../../../assets/svg/whatShouldIDoSVG';

export const WHAT_MOST_BABIES_DO = [
  {
    TITLE: `What most babies do at${'\n'}this age? Look at this video`,
  },
  {
    CONTENT: 'Begin to smile at people',
    IMAGE: <ChildIcon />,
  },
  {
    CONTENT: `Startle or erupt into cry at loud${'\n'}noise`,
    IMAGE: <ChildIcon />,
  },
  {
    CONTENT: `Coo make gurgling sounds when${'\n'}happy or after feeding`,
    IMAGE: <ChildIcon />,
  },
  {
    CONTENT: `Can hold head up and begin to${'\n'}push up when lying on tummy`,
    IMAGE: <ChildIcon />,
  },
  {
    CONTENT: `Make smooth moments with${'\n'}arms and legs`,
    IMAGE: <ChildIcon />,
  },
  {
    CONTENT: `Keep hands relaxed and take${'\n'}swipes at dangling objects`,
    IMAGE: <ChildIcon />,
  },
  {
    CONTENT: 'Begin to babble',
    IMAGE: <ChildIcon />,
  },
];

export const WHAT_PARENT_DO = [
  {
    TITLE: `What you should do for your${'\n'}baby? Watch this video to${'\n'}know more.`,
  },
  {
    CONTENT: `Cuddle, talk and play with your${'\n'}baby during feeding, dressing and${'\n'}bathing`,
    IMAGE: <ChildIcon />,
  },
  {
    CONTENT: `Attend to cries immediately and${'\n'}hold the baby close to make her${'\n'}feel secure`,
    IMAGE: <ChildIcon />,
  },
  {
    CONTENT: `Help your baby learn to calm her${'\n'}or himself. Its ok for her to suck${'\n'}on her fingers`,
    IMAGE: <ChildIcon />,
  },
  {
    CONTENT: `Act excited and smile when your${'\n'}baby makes sounds`,
    IMAGE: <ChildIcon />,
  },
  {
    CONTENT: `Pay attention to your baby's${'\n'}different cries so that you learn to${'\n'}know what she wants`,
    IMAGE: <ChildIcon />,
  },
  {
    CONTENT: 'Talk, read and sing to your baby',
    IMAGE: <ChildIcon />,
  },
  {
    CONTENT: `Lay your baby on his tummy${'\n'}when she/he is awake and keep${'\n'}toys near her${'\n'}swipes at dangling objects`,
    IMAGE: <ChildIcon />,
  },
  {
    CONTENT: 'Begin to babble',
    IMAGE: <ChildIcon />,
  },
];

export const WARNINGSCREEN_CARD = [
  {
    TITLE: `Your baby can do any${'\n'}unwanted action to be${'\n'}harmed`,
  },
  {
    CONTENT: `Contact ANM/AWW/${'\n'}Health care provider if${'\n'}you see any of these${'\n'}“Warnings”`,
  },
];

export const CHILDSCREEN_CARD = [
  {
    CONTENT: HOMESCREEN.CARD_CONTENT1,
    BACKGROUND: CARD_BLUE,
    IMAGE: <WhatBabyDoIllustration />,
    BOX_TEXT: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    ONPRESS:
      ('card',
      {
        cardName: WHAT_MOST_BABIES_DO,
      }),
  },
  {
    CONTENT: HOMESCREEN.CARD_CONTENT2,
    BACKGROUND: LIGHT_YELLOW,
    IMAGE: <WhatShouldIDoIllustration />,
    BOX_TEXT: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    STYLE: createAccountStyles.rowReverse,
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
];
