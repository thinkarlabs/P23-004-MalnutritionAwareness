import React from 'react';
import ChildDetails from '../../../../assets/svg/childDetails';
import WarningDetails from '../../../../assets/svg/warningDetailSVG';
import WhatBabyDoIllustration from '../../../../assets/svg/whatBabyDoSVG';
import WhatShouldIDoIllustration from '../../../../assets/svg/whatShouldIDoSVG';
import {CARD_BACKGROUND, CARD_BLUE, CARD_RED, LIGHT_YELLOW} from '../colors';
import {CREATE_ACCOUNT, HOMESCREEN} from '../constants';
import {createAccountStyles} from '../../../modules/createAccount/styles';
import {
  WHAT_MOST_BABIES_DO,
  WHAT_MOST_BABIES_DO_TITLE,
  WHAT_PARENT_DO,
  WHAT_PARENT_DO_TITLE,
} from './childConstants';
import {
  PREGNANT_WOMAN_CARD_CONTENT,
  HOME_CARD,
  TRACK,
} from '../navigatorConstants';

export const PREGNANTWOMEN_CARD = [
  {
    title: WHAT_MOST_BABIES_DO_TITLE,
    content: HOMESCREEN.CARD_CONTENT1,
    background: CARD_BLUE,
    image: <WhatBabyDoIllustration />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    onPress: PREGNANT_WOMAN_CARD_CONTENT,
    data: WHAT_MOST_BABIES_DO,
  },
  {
    title: WHAT_PARENT_DO_TITLE,
    content: HOMESCREEN.CARD_CONTENT2,
    background: LIGHT_YELLOW,
    image: <WhatShouldIDoIllustration />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    style: createAccountStyles.rowReverse,
    onPress: PREGNANT_WOMAN_CARD_CONTENT,
    data: WHAT_PARENT_DO,
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
