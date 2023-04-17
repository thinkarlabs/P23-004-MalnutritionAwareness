import React from 'react';
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
import CerealIcon from '../../../../assets/svg/foods/cerealIcon';
import FruitIcon from '../../../../assets/svg/foods/fruitIcon';
import ProteinIcon from '../../../../assets/svg/foods/proteinIcon';
import MilkProductIcon from '../../../../assets/svg/foods/milkProductIcon';
import FatIcon from '../../../../assets/svg/foods/fatIcon';
import WaterIcon from '../../../../assets/svg/foods/waterIcon';
import FruitImage from '../../../../assets/svg/foods/fruitImage';
import ProteinImage from '../../../../assets/svg/foods/proteinImageSVG';
import MilkProductImage from '../../../../assets/svg/foods/milkProductImage';
import WaterTypeImage from '../../../../assets/svg/foods/waterTypeImage';

//CARD CONTENT
export const WHAT_YOU_NEED_TO_TAKE_CARE = `What you need to take${'\n'}care in the 2nd month?`;
export const HOW_TO_STAY_ACTIVE_OR_HEALTHY = `How to stay active${'\n'}& healthy during${'\n'}pregnancy?`;
export const WHAT_TO_EAT_DURING_PREGNANCY = `What should you eat${'\n'}during pregnancy?`;
export const TAKE_CARE_OF_EMOTIONAL_HEALTH = `How to take care of${'\n'}your emotional health?`;
export const KNOW_ABOUT_MYTHS = `Know about myths${'\n'}around conception and${'\n'}Pregnancy`;

//CARD TITLE
export const EAT_HEALTHY_FOOD = `Eating healthy food fills your${'\n'}body with energy and${'\n'}nutrients.`;

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
    content:
      'Cereals – Rice, Wheat, Ragi, Bajra, Jowar in form of chapati, halua, idli, dosa, upma, poha etc. Avoid white bread, biscuits and other foods made with refined flour (Maida).',
    image: <CerealIcon />,
    picture: <FruitImage />
  },
  {
    content:
      'Fruits and vegetables – Eat seasonal fruits and vegetables liberally. Your diet must include 2 katoris green leafy vegetables, 1 katori of starchy vegetables like potato, beet, carrot and 1 katori of other vegetables, like lady’s finger, brinjal, tomato, beans etc. The more colorful the fruit or vegetable, the more nutritious it is.',
    image: <FruitIcon />,
    picture: <FruitImage />
  },
  {
    content:
      'Protein – If you are a non-vegetarian, choose fish, full boiled eggs, and cooked meat. If you are a vegetarian, choose any pulses like moong, masoor, tuvar, rajma, at least 2 katoris a day.',
    image: <ProteinIcon />,
    picture: <ProteinImage />
  },
  {
    content: 'Milk and milk products – You can choose between 2 glasses of milk, or 2 katoris of curd or 60 gm paneer.',
    image: <MilkProductIcon />,
    picture: <MilkProductImage />
  },
  {
    content:
      "Fat – Try to get your fat intake from vegetable sources like mustard oil and rice bran oil. Use a mixture of mustard oil and rice bran oil or mustard oil and groundnut oil, to ensure adequate quantities of Omega 3 and Omega 6 fatty acids in your diet. You can also consume flax seeds (Alsi) to get enough Omega 3 fatty acids in your diet.",
    image: <FatIcon />,
    picture: <FruitImage />
  },
  {
    content: 'Water – Drink at least 10 - 12 glasses of water every day',
    image: <WaterIcon />,
    picture: <WaterTypeImage />
  },
];
