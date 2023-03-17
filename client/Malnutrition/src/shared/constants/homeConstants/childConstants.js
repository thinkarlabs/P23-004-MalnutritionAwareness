import React from 'react';
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
    title: `What most babies do at${'\n'}this age? Look at this video`,
  },
  {
    content: 'Begin to smile at people',
    image: <ChildIcon />,
  },
  {
    content: `Startle or erupt into cry at loud${'\n'}noise`,
    image: <ChildIcon />,
  },
  {
    content: `Coo make gurgling sounds when${'\n'}happy or after feeding`,
    image: <ChildIcon />,
  },
  {
    content: `Can hold head up and begin to${'\n'}push up when lying on tummy`,
    image: <ChildIcon />,
  },
  {
    content: `Make smooth moments with${'\n'}arms and legs`,
    image: <ChildIcon />,
  },
  {
    content: `Keep hands relaxed and take${'\n'}swipes at dangling objects`,
    image: <ChildIcon />,
  },
  {
    content: 'Begin to babble',
    image: <ChildIcon />,
  },
];

export const WHAT_PARENT_DO = [
  {
    title: `What you should do for your${'\n'}baby? Watch this video to${'\n'}know more.`,
  },
  {
    content: `Cuddle, talk and play with your${'\n'}baby during feeding, dressing and${'\n'}bathing`,
    image: <ChildIcon />,
  },
  {
    content: `Attend to cries immediately and${'\n'}hold the baby close to make her${'\n'}feel secure`,
    image: <ChildIcon />,
  },
  {
    content: `Help your baby learn to calm her${'\n'}or himself. Its ok for her to suck${'\n'}on her fingers`,
    image: <ChildIcon />,
  },
  {
    content: `Act excited and smile when your${'\n'}baby makes sounds`,
    image: <ChildIcon />,
  },
  {
    content: `Pay attention to your baby's${'\n'}different cries so that you learn to${'\n'}know what she wants`,
    image: <ChildIcon />,
  },
  {
    content: 'Talk, read and sing to your baby',
    image: <ChildIcon />,
  },
  {
    content: `Lay your baby on his tummy${'\n'}when she/he is awake and keep${'\n'}toys near her${'\n'}swipes at dangling objects`,
    image: <ChildIcon />,
  },
  {
    content: 'Begin to babble',
    image: <ChildIcon />,
  },
];

export const WARNINGSCREEN_CARD = {
  title: `Your baby can do any${'\n'}unwanted action to be${'\n'}harmed`,
  content: `Contact ANM/AWW/${'\n'}Health care provider if${'\n'}you see any of these${'\n'}“Warnings”`,
};

export const CHILDSCREEN_CARD = [
  {
    content: HOMESCREEN.CARD_CONTENT1,
    background: CARD_BLUE,
    image: <WhatBabyDoIllustration />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    child: WHAT_MOST_BABIES_DO,
    onPress: 'Card',
  },
  {
    content: HOMESCREEN.CARD_CONTENT2,
    background: LIGHT_YELLOW,
    image: <WhatShouldIDoIllustration />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    style: createAccountStyles.rowReverse,
    child: WHAT_PARENT_DO,
  },
  {
    content: HOMESCREEN.CARD_CONTENT3,
    background: CARD_RED,
    image: <WarningDetails />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
  },
  {
    content: HOMESCREEN.CARD_CONTENT4,
    background: CARD_BACKGROUND,
    image: <ChildDetails />,
    boxText: CREATE_ACCOUNT.ADD_CHILD_DETAILS,
  },
];
