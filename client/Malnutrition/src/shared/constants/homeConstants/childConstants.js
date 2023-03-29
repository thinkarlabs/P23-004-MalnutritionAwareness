import React from 'react';
import ChildIcon from '../../../../assets/svg/icons/childIcon';
import ChildDetails from '../../../../assets/svg/childDetails';
import WarningDetails from '../../../../assets/svg/warningDetailSVG';
import WhatBabyDoIllustration from '../../../../assets/svg/whatBabyDoSVG';
import {CARD_BACKGROUND, CARD_BLUE, CARD_RED, LIGHT_YELLOW} from '../colors';
import {CREATE_ACCOUNT, HOMESCREEN} from '../constants';
import {createAccountStyles} from '../../../modules/createAccount/styles';
import WhatShouldIDoIllustration from '../../../../assets/svg/whatShouldIDoSVG';
import {CHILD_CARD_CONTENT, HOME_CARD, TRACK} from '../navigatorConstants';

export const WHAT_MOST_BABIES_DO_TITLE = `What most babies do at${'\n'}this age? Look at this video`;
export const WHAT_PARENT_DO_TITLE = `What you should do for your${'\n'}baby? Watch this video to${'\n'}know more.`;

export const WHAT_MOST_BABIES_DO = [
  {
    content: 'Begin to smile at people',
    image: <ChildIcon />,
  },
  {
    content: 'Startle or erupt into cry at loud noise',
    image: <ChildIcon />,
  },
  {
    content: 'Coo make gurgling sounds when happy or after feeding',
    image: <ChildIcon />,
  },
  {
    content: 'Can hold head up and begin to push up when lying on tummy',
    image: <ChildIcon />,
  },
  {
    content: 'Make smooth moments with arms and legs',
    image: <ChildIcon />,
  },
  {
    content: 'Keep hands relaxed and take swipes at dangling objects',
    image: <ChildIcon />,
  },
  {
    content: 'Begin to babble',
    image: <ChildIcon />,
  },
];

export const WHAT_PARENT_DO = [
  {
    content: 'Cuddle, talk and play with your baby during feeding, dressing and bathing',
    image: <ChildIcon />,
  },
  {
    content: 'Attend to cries immediately and hold the baby close to make her feel secure',
    image: <ChildIcon />,
  },
  {
    content: 'Help your baby learn to calm her or himself. Its ok for her to suck on her fingers',
    image: <ChildIcon />,
  },
  {
    content: 'Act excited and smile when your baby makes sounds',
    image: <ChildIcon />,
  },
  {
    content: "Pay attention to your baby's different cries so that you learn to know what she wants",
    image: <ChildIcon />,
  },
  {
    content: 'Talk, read and sing to your baby',
    image: <ChildIcon />,
  },
  {
    content: 'Lay your baby on his tummy when she/he is awake and keep toys near her swipes at dangling objects',
    image: <ChildIcon />,
  },
  {
    content: 'Begin to babble',
    image: <ChildIcon />,
  },
];

export const WARNINGSCREEN_CARD = {
  title: 'Your baby can do any unwanted action to be harmed',
  content:
    'Contact ANM/AWW/ Health care provider if you see any of these “Warnings”',
};

export const CHILDSCREEN_CARD = [
  {
    title: WHAT_MOST_BABIES_DO_TITLE,
    content: HOMESCREEN.CARD_CONTENT1,
    background: CARD_BLUE,
    image: <WhatBabyDoIllustration />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    data: WHAT_MOST_BABIES_DO,
    onPress: CHILD_CARD_CONTENT,
  },
  {
    title: WHAT_PARENT_DO_TITLE,
    content: HOMESCREEN.CARD_CONTENT2,
    background: LIGHT_YELLOW,
    image: <WhatShouldIDoIllustration />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    style: createAccountStyles.rowReverse,
    data: WHAT_PARENT_DO,
    onPress: CHILD_CARD_CONTENT,
  },
  {
    content1: HOMESCREEN.CARD_CONTENT31,
    content2: HOMESCREEN.CARD_CONTENT32,
    content3: HOMESCREEN.CARD_CONTENT33,
    background: CARD_RED,
    image: <WarningDetails />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    onPress: HOME_CARD.WARNING_CARD,
  },
  {
    content: HOMESCREEN.CARD_CONTENT4,
    background: CARD_BACKGROUND,
    image: <ChildDetails />,
    boxText: CREATE_ACCOUNT.ADD_CHILD_DETAILS,
    onPress: TRACK,
  },
];
