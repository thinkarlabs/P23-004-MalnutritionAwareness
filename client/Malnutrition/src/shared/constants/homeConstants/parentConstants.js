import React from 'react';
import WhatBabyDoIllustration from '../../../../assets/svg/whatBabyDoSVG';
import WhatShouldIDoIllustration from '../../../../assets/svg/whatShouldIDoSVG';
import {
  CARD_BLUE,
  CARD_GREEN,
  CARD_PINK,
  CARD_PURPLE,
  LIGHT_YELLOW,
} from '../colors';
import {CREATE_ACCOUNT} from '../constants';
import {createAccountStyles} from '../../../modules/createAccount/styles';
import {PREGNANT_WOMAN_CARD_CONTENT} from '../navigatorConstants';
import ChildIcon from '../../../../assets/svg/icons/childIcon';
import CurrentMonthImage from '../../../../assets/svg/currentMonthSVG';
import EatMealImage from '../../../../assets/svg/eatMealSVG';
import StayActiveImage from '../../../../assets/svg/stayActiveSVG';
import EmotionalHealthImage from '../../../../assets/svg/emotionalHealthSVG';
import MythsIllustration from '../../../../assets/svg/mythsSVG';

//CARD CONTENT
export const WHAT_YOU_NEED_TO_TAKE_CARE = `What you need to take${'\n'}care in the 2nd month?`;
export const HOW_TO_STAY_ACTIVE_OR_HEALTHY = `How to stay active${'\n'}& healthy during${'\n'}pregnancy?`;
export const WHAT_TO_EAT_DURING_PREGNANCY = `What should you eat${'\n'}during pregnancy?`;
export const TAKE_CARE_OF_EMOTIONAL_HEALTH = `How to take care of${'\n'}your emotional health?`;
export const KNOW_ABOUT_MYTHS = `Know about myths${'\n'}around conception and${'\n'}Pregnancy`;

//CARD TITLE
export const EAT_HEALTHY_FOOD = `Eating healthy food fills your${'\n'}body with energy and${'\n'}nutrients.`;

//HEADER TITLE
// export const HEADER_TITLE = {
//   TITLE3: 'Eat healthy food',
// };

export const EAT_HEALTH_FOOD_CONTENT = {
  HEADER_TITLE: 'Eat healthy food',
  CONTENT1: `Food choices can prepare you for a${'\n'}healthy pregnancy. The baby in the womb${'\n'}is dependent physically, mentally and${'\n'}emotionally on the mother.${'\n'}${'\n'}Thus, the nutritional status of the mother,${'\n'}even before becoming pregnant, is${'\n'}critical to the early development of the${'\n'}baby.`,
  CARD_CONTENT: `Prefer using variety of local${'\n'}seasonal foods, vegetables${'\n'}and fruits being grown in and${'\n'}around your area.`,
  CARD_INSTRUCTION: `Make sure mother's diet includes one${'\n'}from each group -`,
};

export const PREGNANTWOMEN_CARD = [
  {
    title: WHAT_YOU_NEED_TO_TAKE_CARE,
    content: WHAT_YOU_NEED_TO_TAKE_CARE,
    background: CARD_PINK,
    image: <CurrentMonthImage />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    onPress: PREGNANT_WOMAN_CARD_CONTENT,
    // data: WHAT_MOST_BABIES_DO,
  },
  {
    title: HOW_TO_STAY_ACTIVE_OR_HEALTHY,
    content: HOW_TO_STAY_ACTIVE_OR_HEALTHY,
    background: CARD_BLUE,
    image: <StayActiveImage />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    onPress: PREGNANT_WOMAN_CARD_CONTENT,
    // data: WHAT_MOST_BABIES_DO,
  },
  {
    title: EAT_HEALTHY_FOOD,
    content: WHAT_TO_EAT_DURING_PREGNANCY,
    background: LIGHT_YELLOW,
    image: <EatMealImage />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    style: createAccountStyles.rowReverse,
    onPress: PREGNANT_WOMAN_CARD_CONTENT,
    data: EAT_HEALTHY_FOOD_CARD,
    headerTitle: EAT_HEALTH_FOOD_CONTENT.HEADER_TITLE,
  },
  {
    title: TAKE_CARE_OF_EMOTIONAL_HEALTH,
    content: TAKE_CARE_OF_EMOTIONAL_HEALTH,
    background: CARD_PURPLE,
    image: <EmotionalHealthImage />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    onPress: PREGNANT_WOMAN_CARD_CONTENT,
    // data: WHAT_MOST_BABIES_DO,
  },
  {
    title: KNOW_ABOUT_MYTHS,
    content: KNOW_ABOUT_MYTHS,
    background: CARD_GREEN,
    image: <MythsIllustration />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    onPress: PREGNANT_WOMAN_CARD_CONTENT,
    // data: WHAT_MOST_BABIES_DO,
  },
];

export const EAT_HEALTHY_FOOD_CARD = [
  {
    // title: `Cereals - `,
    content:
      'Rice, Wheat, Ragi, Bajra, Jowar in form of chapati, halua, idli, dosa, upma, poha etc. Avoid white bread, biscuits and other foods made with refined flour (Maida).',
    image: <ChildIcon />,
  },
  {
    content: 'Attend to cries immediately and hold the baby close to make her feel secure',
    image: <ChildIcon />,
  },
  {
    content:'Help your baby learn to calm her or himself. Its ok for her to suck on her fingers',
    image: <ChildIcon />,
  },
  {
    content: 'Act excited and smile when your baby makes sounds',
    image: <ChildIcon />,
  },
  {
    content:"Pay attention to your baby's different cries so that you learn to know what she wants",
    image: <ChildIcon />,
  },
  {
    content: 'Talk, read and sing to your baby',
    image: <ChildIcon />,
  },
  {
    content:'Lay your baby on his tummy when she/he is awake and keep toys near her swipes at dangling objects',
    image: <ChildIcon />,
  },
  {
    content: 'Begin to babble',
    image: <ChildIcon />,
  },
];
