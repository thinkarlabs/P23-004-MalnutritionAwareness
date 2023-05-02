import React from 'react';
import Child6MonthImage from '../../../assets/svg/6MonthChildSVG';
import LactatingMotherImage from '../../../assets/svg/lactatingMotherSVG';
import PregnantWomenImage from '../../../assets/svg/pregnantWomenSVG';
import {createAccountStyles} from '../../modules/createAccount/styles';
import {CARD_BACKGROUND} from './colors';
import {CHILDINFO_SCREEN, PREGNANTWOMAN_SCREEN} from './navigatorConstants';

export const APP_NAME = 'Poshan';
export const HEADING_TWO = 'Journey of your child';
export const ONBOARDSCREEN1_TITLE = `Importance of first${'\n'} 1000 days`;
export const ONBOARDSCREEN1_CONTENT = `The first 1000 days are when a child’s${'\n'} brain begins to grow and develop and${'\n'} when the foundations for their lifelong${'\n'} health are built.`;
export const ONBOARDSCREEN2_TITLE =
  'Nutrition - before, during and after pregnancy';
export const ONBOARDSCREEN2_CONTENT = `It’s a time of rapid physical growth,${'\n'} accelerated mental development and${'\n'} offers a unique opportunity to build${'\n'} lifelong health & intelligence.`;
export const ONBOARDSCREEN3_TITLE = `Important to measure${'\n'} child every month`;
export const ONBOARDSCREEN3_CONTENT = `Measuring child can help to detect${'\n'} overweight and underweight, short${'\n'} stature & faltering growth potential due${'\n'} to underlying medical problem`;
export const SKIP = 'Skip';
export const BACK = 'Back';
export const ENGLISH = 'En';
export const VERIFY_OTP = 'Verify OTP';
export const OTP_VERIFICATION = 'OTP Verification';
export const ENTER_MOBILE_NUMBER = 'Enter the OTP send on';
export const RESEND_OTP = 'Resend OTP';
export const RESEND_OTP_IN = 'Resend OTP in - 00.';
export const RESEND = 'Resend';
export const CONFIRM = 'Confirm';
export const LOGIN_TEXT = 'Login';
export const LOGIN_TITLE = 'Welcome to Poshan!!';
export const LOGIN_CONTENT = `There can be no real growth without${'\n'} healthy population. No sustainable${'\n'} development without tackling disease${'\n'} and malnutrition.`;
export const LOGIN_DETAILS = 'Enter your number to ';
export const LOGIN_BOTTOM = "Don't have an account?";
export const SIGN_UP = 'Sign Up';
export const WELCOME = 'Welcome';

export const CREATE_ACCOUNT = {
  SELECT_CURRENT_STAGE_TEXT: "Select beneficiary's current stage to proceed",
  BUTTON_DESCRIPTION: 'Fill Your Details',
  OTP_BUTTON: 'Send OTP',
  CHECK_BOX_LABEL: `Are you setting up this app ${'\n'}for someone else?`,
  BUTTON_INFO: `By clicking below, you will receive an ${'\n'} OTP on the above phone number`,
  MOVE_FORWARD_TEXT: 'Tap to select',
  BENEFICIARY_INFO_TITLE: 'Tell us more about the Beneficiary',
  TITLE_SCREEN: 'Create an Account',
  ADD_CHILD_DETAILS: 'Add your child detail',
};

export const CREATE_ACCOUNT_CARD = [
  {
    title: 'Pregnant Woman',
    content: 'A grand and beautiful adventure is about to begin.',
    background: CARD_BACKGROUND,
    image: <PregnantWomenImage />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    onPress: PREGNANTWOMAN_SCREEN,
  },
  {
    title: 'Lactating Mother',
    content: 'A mother understands what a child does not say.',
    background: CARD_BACKGROUND,
    image: <LactatingMotherImage />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    onPress: CHILDINFO_SCREEN,
    style: createAccountStyles.rowReverse,
  },
  {
    title: '6-24 Months',
    content: 'A baby is born with a need to be loved and grow with caring.',
    background: CARD_BACKGROUND,
    image: <Child6MonthImage />,
    boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
    onPress: CHILDINFO_SCREEN,
  },
];

export const SET_APP_FOR = [{name: 'An NGO Member', code: 'ngo'}];

export const USER_DETAILS = {
  NAME: 'Name',
  PHONE_NUMBER: 'Phone number',
  MENSTURAL_DATE: 'Last menstural period date',
  CHILD_NAME: 'Child Name',
  CHILD_DOB: 'Child date of birth',
  MOTHER_NAME: 'Mother name',
};

export const TOAST_MESSAGE = {
  UNEXPECTED: 'Some unexpected error occurred.',
  UNKNOWN_ERROR: 'Something went wrong. Please try again.',
  NO_INTERNET: 'No Internet Connection',
  UNAUTHORIZED: 'Invalid email or password.',
  INTERNAL_ERROR: 'Internal server error.',
};
export const PLACEHOLDER_DETAILS = {
  SELECT_YOUR_ROLE: 'Select your role',
  PHONE_NUMBER: 'Phone number',
  GENDER: 'Gender',
  WEIGHT_FOR_AGE: 'Weight for Age',
  HEIGHT_FOR_AGE: 'Height for Age',
  WEIGHT_FOR_HEIGHT: 'Weight for Height',
};

export const DROPDOWN_BOX = {
  A_RELATIVE: 'A Relative',
  AN_NGO_MEMBER: 'An NGO Member',
  AN_ANGANWADI_MEMBER: 'An Anganwadi Member',
};

export const HOMESCREEN = {
  TITLE: 'Welcome to Poshan!!',
  CARD_CONTENT1: 'See what most babies do at this age?',
  CARD_CONTENT2: 'What you should do for your baby?',
  CARD_CONTENT31: 'See what can be the ',
  CARD_CONTENT32: 'Warning ',
  CARD_CONTENT33: 'for you',
  CARD_CONTENT4:
    "Your child measurement can tell you how's your childhealth is.",
  CARASOUL_INSTRUCTION: 'Swipe right to left to see another instruction',
  VIDEO_INSTRUCTION: `Watch the video to know what should be${'\n'}the first step in your pregnancy journey`,
};

export const ERROR_MESSAGE = {
  DROPDOWN: 'Select any one option from the dropdown.',
  PHONE_NUMBER: 'Invalid Phone Number',
};

export const CAREGIVER_ROLE = [
  {label: DROPDOWN_BOX.A_RELATIVE, value: 'RELATIVE'},
  {label: DROPDOWN_BOX.AN_NGO_MEMBER, value: 'NGO_MEMBER'},
  {label: DROPDOWN_BOX.AN_ANGANWADI_MEMBER, value: 'ANGANWADI_MEMBER'},
];

export const GENDER = [
  {label: 'Male', value: 'MALE'},
  {label: 'Female', value: 'FEMALE'},
];

export const WEIGHT_FOR_AGE = [
  {label: 'Moderately Underweight', value: 'MODERATELY_UNDERWEIGHT'},
  {label: 'Severely Underweight', value: 'SEVERELY_UNDERWEIGHT'},
  {label: 'Normal', value: 'NORMAL'},
];

export const HEIGHT_FOR_AGE = [
  {label: 'Severely Stunted', value: 'SEVERELY_STUNTED'},
  {label: 'Moderately Stunted', value: 'MODERATELY_STUNTED'},
  {label: 'Normal', value: 'NORMAL'},
];

export const WEIGHT_FOR_HEIGHT = [
  {label: 'SAM', value: 'SAM'},
  {label: 'MAM', value: 'MAM'},
  {label: 'Normal', value: 'NORMAL'},
];

export const TRACK_HEALTH = {
  TITLE: 'Enter measurements',
  PLACEHOLDER1: 'Week(s)',
  PLACEHOLDER2: 'Weight (KG)',
  PLACEHOLDER3: 'Height (CM)',
  PLACEHOLDER4: 'Head Circumference (CM)',
  PLACEHOLDER5: 'Mid Upper Arm Circumference (CM)',
  BUTTON: 'Submit',
};

export const ASYNC_CONSTANTS = {
  TOKEN: 'TOKEN',
};

export const TAP_TO_CONNECT = 'Tap to Connect';
export const ASK_QUERIES_TEXT =
  'For any kind of your queries or suggestions, please connect with your Anganwadi Centre via Whatsapp';
export const COMING_SOON_HEADING = 'This feature is coming soon!!';
export const COMING_SOON_TEXT =
  'Our team is working to up this feature live soon. Through this feature, you will see  your baby’s monthly timeline';

export const WHATSAPP_MESSAGE = `Please connect with your Anganwadi${'\n'}Centre via Whatsapp by tapping here`;
