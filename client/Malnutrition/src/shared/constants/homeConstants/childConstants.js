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

export const WHAT_MOST_BABIES_DO = {
  zeroToThree: {
    carouselItems: [
      {
        content:
          'Begin to recognize the faces of the people at 8-12 inches away',
        image: require('../../../../assets/images/2-3/Image1.png'),
      },
      {
        content: 'Can hold head up and begin to push up when lying on tummy',
        image: require('../../../../assets/images/2-3/Image2.png'),
      },
      {
        content: 'Make smooth movements with arms and legs',
        image: require('../../../../assets/images/2-3/Image3.png'),
      },
    ],
    actionList: [
      {
        content: 'Startle or erupt into cry at loud noise',
        image: <ChildIcon />,
      },
      {
        content: 'Coo make gurgling sounds when happy or after feeding',
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
    ],
  },
  fourToSix: {
    carouselItems: [
      {
        content:
          'Copy some movements and facial expressions, like smiling or frowning',
        image: require('../../../../assets/images/4-6/Image1.png'),
      },
      {
        content:
          'Attempt to reach and grasp a toy, using both hands and eyes together',
        image: require('../../../../assets/images/4-6/Image2.png'),
      },
      {
        content:
          'Like to look at self in a mirror & Reach for toy with one hand',
        image: require('../../../../assets/images/4-6/Image3.png'),
      },
    ],
    actionList: [
      {
        content: 'Can hold a toy and shake it & Bring hands to mouth',
        image: <ChildIcon />,
      },
      {
        content:
          'Begin to babble ("ah", ee, oo, other than when crying), laughs aloud or makes squealing sounds',
        image: <ChildIcon />,
      },
      {
        content: 'Like to play with familiar people',
        image: <ChildIcon />,
      },
      {
        content: 'Respond to affection and let you know if she is happy or sad',
        image: <ChildIcon />,
      },
      {
        content: 'Push up to elbows, when lying on tummy',
        image: <ChildIcon />,
      },
      {
        content: 'Follow moving things with eyes from side to side',
        image: <ChildIcon />,
      },
      {
        content: 'Smile spontaneously, especially at known people',
        image: <ChildIcon />,
      },
    ],
  },
  sevenToNine: {
    carouselItems: [
      {
        content: 'Roll over or turn over in both directions',
        image: require('../../../../assets/images/7-9/Image1.png'),
      },
      {
        content: 'Grasp a toy by using all fingers',
        image: require('../../../../assets/images/7-9/Image2.png'),
      },
      {
        content: 'Looks for toys that have been hidden in front of them',
        image: require('../../../../assets/images/7-9/Image3.png'),
      },
    ],
    actionList: [
      {
        content: 'Locate source of sound',
        image: <ChildIcon />,
      },
      {
        content:
          'Utter consonants sounds like p, b. Start babbling like mamama ',
        image: <ChildIcon />,
      },
      {
        content: 'Respond to name being called',
        image: <ChildIcon />,
      },
      {
        content: 'Stretch arms to be picked up',
        image: <ChildIcon />,
      },
      {
        content: 'Put things in mouth',
        image: <ChildIcon />,
      },
      {
        content: 'Move things smoothly from one hand to the other',
        image: <ChildIcon />,
      },
      {
        content: 'May be afraid of strangers',
        image: <ChildIcon />,
      },
    ],
  },
  tenToTwelve: {
    carouselItems: [
      {
        content: 'Sit without support and reach for toys without falling',
        image: require('../../../../assets/images/10-12/Image1.png'),
      },
      {
        content: 'Crawl to get desired toys without bumping into any objects',
        image: require('../../../../assets/images/10-12/Image2.png'),
      },
      {
        content: 'Respond to simple requests like “no”, “come here” etc.',
        image: require('../../../../assets/images/10-12/Image3.png'),
      },
    ],
    actionList: [
      {
        content: 'Say “mama” and “dada” and exclamations like “uh-oh!”',
        image: <ChildIcon />,
      },
      {
        content: 'Raise arms to be picked up',
        image: <ChildIcon />,
      },
      {
        content: 'Use one or two common words in mother tongue',
        image: <ChildIcon />,
      },
      {
        content: 'Cry when mom or dad leaves',
        image: <ChildIcon />,
      },
      {
        content: 'Use simple gestures, like shaking head or waving “bye-bye”',
        image: <ChildIcon />,
      },
      {
        content: 'Show or hand you a book when she wants to hear a story',
        image: <ChildIcon />,
      },
      {
        content: 'Find hidden things easily',
        image: <ChildIcon />,
      },
    ],
  },
  thirteenToEighteen: {
    carouselItems: [
      {
        content: 'Can take several independent steps. Can walk alone.',
        image: require('../../../../assets/images/13-18/Image1.png'),
      },
      {
        content: 'Put pebbles/small objects in a container',
        image: require('../../../../assets/images/13-18/Image2.png'),
      },
      {
        content:
          'Name and identify common objects and their pictures in a book',
        image: require('../../../../assets/images/13-18/Image3.png'),
      },
    ],
    actionList: [
      {
        content: 'Show interest in a stuffed animal toy by pretending to feed',
        image: <ChildIcon />,
      },
      {
        content: 'Point to show someone what they want',
        image: <ChildIcon />,
      },
      {
        content:
          'Can follow 1-step verbal commands without any gestures; for example, sit when you say “sit down”',
        image: <ChildIcon />,
      },
      {
        content: 'Know what ordinary things. for example: soap, glass spoon',
        image: <ChildIcon />,
      },
      {
        content: 'Scribble on her own, spontaneously',
        image: <ChildIcon />,
      },
      {
        content: 'Drink from a cup or small glass',
        image: <ChildIcon />,
      },
      {
        content: 'Eat with a spoon or own hands, though it may spill',
        image: <ChildIcon />,
      },
    ],
  },
  EighteenToTwtFour: {
    carouselItems: [
      {
        content: 'Walk steadily even while pulling the toy',
        image: require('../../../../assets/images/19-24/Image1.png'),
      },
      {
        content: 'Imitate household chores / tasks.',
        image: require('../../../../assets/images/19-24/Image2.png'),
      },
      {
        content:
          'Correctly point out and name one or more body parts in person or in books.',
        image: require('../../../../assets/images/19-24/Image3.png'),
      },
    ],
    actionList: [
      {
        content: 'Can walk alone, run and kick a ball',
        image: <ChildIcon />,
      },
      {
        content:
          'Correctly point out and name one or more body parts in person ',
        image: <ChildIcon />,
      },
      {
        content: 'Show defiant behavior (doing what he has been told not to)',
        image: <ChildIcon />,
      },
      {
        content:
          'Play near or close to other children, but not with each other',
        image: <ChildIcon />,
      },
      {
        content: 'Point to things or pictures. such as dog, cat and birds',
        image: <ChildIcon />,
      },
      {
        content: 'Say sentences like mama- dudhu (milk); mama-mam (water) etc.',
        image: <ChildIcon />,
      },
      {
        content: 'Copy action and words',
        image: <ChildIcon />,
      },
    ],
  },
};

const WHAT_PARENT_DO = {
  zeroToThree: {
    carouselItems: [
      {
        content:
          'Cuddle, talk, and play with your baby during feeding, dressing, and bathing',
        image: require('../../../../assets/images/2-3/Image4.png'),
      },
      {
        content:
          'Attend to cries immediately and hold the baby close to make her feel secure',
        image: require('../../../../assets/images/2-3/Image5.png'),
      },
      {
        content:
          'Lay your baby on his tummy when she/he is awake and keep toys near her.',
        image: require('../../../../assets/images/2-3/Image6.png'),
      },
    ],
    actionList: [
      {
        content:
          'Attend to cries immediately and hold the baby close to make her feel secure',
        image: <ChildIcon />,
      },
      {
        content:
          'Help your baby learn to calm her or himself. Its ok for her to suck on her fingers',
        image: <ChildIcon />,
      },
      {
        content: 'Act excited and smile when your baby makes sounds',
        image: <ChildIcon />,
      },
      {
        content:
          "Pay attention to your baby's different cries so that you learn to know what she wants",
        image: <ChildIcon />,
      },
      {
        content: 'Talk, read and sing to your baby',
        image: <ChildIcon />,
      },
      {
        content:
          'Lay your baby on his tummy when she/he is awake and keep toys near her swipes at dangling objects',
        image: <ChildIcon />,
      },
      {
        content: 'Begin to babble',
        image: <ChildIcon />,
      },
    ],
  },
  fourToSix: {
    carouselItems: [
      {
        content:
          'Hold and talk to your baby. Smile and be cheerful while you do',
        image: require('../../../../assets/images/4-6/Image4.png'),
      },
      {
        content:
          'Put interesting and safe things on the floor for the baby to reach out and explore.',
        image: require('../../../../assets/images/4-6/Image5.png'),
      },
      {
        content:
          'Take children outdoors and introduce them to the outside world',
        image: require('../../../../assets/images/4-6/Image6.png'),
      },
    ],
    actionList: [
      {
        content: 'Set steady routines for sleeping and feeding',
        image: <ChildIcon />,
      },
      {
        content: 'Play games such as peek-a-boo',
        image: <ChildIcon />,
      },
      {
        content: 'Show her the pictures and name the objects ',
        image: <ChildIcon />,
      },
      {
        content:
          'Put interesting and safe things on the floor for the baby to reach out and explore.',
        image: <ChildIcon />,
      },

      {
        content:
          'Children suck on their fingers and thumb for comfort. It is not a cause for concern. Do not stop at this early age.',
        image: <ChildIcon />,
      },
      {
        content:
          'Communicate with baby. Imitate baby sounds and praise her when she imitates yours',
        image: <ChildIcon />,
      },
    ],
  },
  sevenToNine: {
    carouselItems: [
      {
        content: 'Let children drop, bang and throw things repeatedly',
        image: require('../../../../assets/images/7-9/Image4.png'),
      },
      {
        content: 'Give your child clean, safe utensils to play and explore',
        image: require('../../../../assets/images/7-9/Image5.png'),
      },
      {
        content: 'Play games like peek-a-boo and hide-and-seek',
        image: require('../../../../assets/images/7-9/Image6.png'),
      },
    ],
    actionList: [
      {
        content:
          'Respond to the noise that the child makes in a gentle and patient manner',
        image: <ChildIcon />,
      },

      {
        content:
          'Hide a child’s favorite toy under a cloth or box. See if the child can find it',
        image: <ChildIcon />,
      },

      {
        content:
          'Teach cause-and-effect by rolling balls back and forth, pushing toy cars and trucks and putting blocks in and out of a container.',
        image: <ChildIcon />,
      },
      {
        content: 'Read and talk to your baby',
        image: <ChildIcon />,
      },
    ],
  },
  tenToTwelve: {
    carouselItems: [
      {
        content:
          'Place a toy slightly out of reach to encourage standing and walking while using support',
        image: require('../../../../assets/images/10-12/Image4.png'),
      },
      {
        content:
          'While exploring, babies might hurt others. Show them how to touch gently. Do not shout at them.',
        image: require('../../../../assets/images/10-12/Image5.png'),
      },
      {
        content:
          'Babies learn by watching what their parents do and then trying to copy the same. This is how they learn.',
        image: require('../../../../assets/images/10-12/Image6.png'),
      },
    ],
    actionList: [
      {
        content: 'Tell your baby stories and read picture books aloud.',
        image: <ChildIcon />,
      },
      {
        content:
          'Babies are curious about everything. They are learning to choose what to want to play with. Help them in their exploration but ensure their safety.',
        image: <ChildIcon />,
      },

      {
        content:
          'Babies drop bang and throw objects to see what happens next. Parents should remain patient and turn this into exploratory play.',
        image: <ChildIcon />,
      },
      {
        content: 'Show and name things in their environment',
        image: <ChildIcon />,
      },
    ],
  },
  thirteenToEighteen: {
    carouselItems: [
      {
        content: 'Provide push toy for babies to learn walking',
        image: require('../../../../assets/images/13-18/Image4.png'),
      },
      {
        content:
          'Give some fruits or toys to children. Ask them to identify the objects, put them in the containers',
        image: require('../../../../assets/images/13-18/Image5.png'),
      },
      {
        content: 'Ask your child simple questions. Encourage them to talk.',
        image: require('../../../../assets/images/13-18/Image6.png'),
      },
    ],
    actionList: [
      {
        content:
          'Provide a safe, loving environment. It’s important to be consistent and predictable.',
        image: <ChildIcon />,
      },
      {
        content: 'Praise good behaviors more than you punish bad behaviors.',
        image: <ChildIcon />,
      },
      {
        content:
          'Encourage empathy. For example, when the baby sees a sad, encourage her to hug or pat the other child.',
        image: <ChildIcon />,
      },
      {
        content: 'Read books and talk about the pictures using simple words.',
        image: <ChildIcon />,
      },
      {
        content:
          'Encourage her to drink from a cup and use a spoon, no matter how messy',
        image: <ChildIcon />,
      },
      {
        content: 'Blow bubbles and let your child pop them.',
        image: <ChildIcon />,
      },
    ],
  },
  EighteenToTwtFour: {
    carouselItems: [
      {
        content:
          'Provide opportunity for children to walk, run and climb safely',
        image: require('../../../../assets/images/19-24/Image4.png'),
      },
      {
        content:
          'Allow children to imitate you and help them by providing opportunity to practice their skills.',
        image: require('../../../../assets/images/19-24/Image5.png'),
      },
      {
        content:
          'Encourage children to follow a daily routine, such as sleeping and waking up, at a fixed time.',
        image: require('../../../../assets/images/19-24/Image6.png'),
      },
    ],
    actionList: [
      {
        content: 'Be patient with them even if they make a mess.',
        image: <ChildIcon />,
      },
      {
        content: 'Provide a copy and paper for the child to scribble.',
        image: <ChildIcon />,
      },
      {
        content:
          'Encourage your child to help with simple chores at home, like sweeping and making dinner. Praise your child for being a good helper',
        image: <ChildIcon />,
      },
      {
        content:
          'At this age, children still play next to (not with) each other and don’t share well. Give thechildren lots of toys to play with. Watch the children closely and step in if they fight or argue.',
        image: <ChildIcon />,
      },
      {
        content: 'Read aloud stories to your child often repeating them.',
        image: <ChildIcon />,
      },
      {
        content:
          'Give your child attention and praise when he follows your instructions. Limit attention for defiant behavior. Spend a lot more time praising good behaviors than punishing for bad ones.',
        image: <ChildIcon />,
      },
      {
        content: 'Hide toys around the room and let the child find them.',
        image: <ChildIcon />,
      },
    ],
  },
};

export const WARNINGSCREEN_CARD = {
  title: 'Your baby can do any unwanted action to be harmed',
  content:
    'Contact ANM/AWW/ Health care provider if you see any of these “Warnings”',
};

const WARNING_CAROUSEL_DATA = {
  zeroToThree: [
    {
      content: 'No social smile',
      image: require('../../../../assets/images/2-3/Image7.png'),
    },
    {
      content:
        'Does not make any eye contact when being fed, cuddled or spoken to',
      image: require('../../../../assets/images/2-3/Image8.png'),
    },
    {
      content: 'Persistent squinting after 2 months',
      image: require('../../../../assets/images/2-3/Image9.png'),
    },
    {
      content:
        'Does not startle / wake up/ cry in response to sudden loud sound',
      image: require('../../../../assets/images/2-3/Image10.png'),
    },
    {
      content: 'Head pushed back, with stiff arms and legs',
      image: require('../../../../assets/images/2-3/Image11.png'),
    },
    {
      content:
        'Hands are kept fisted or open with thumbs held persistently inside the palm',
      image: require('../../../../assets/images/2-3/Image12.png'),
    },
  ],
  fourToSix: [
    {
      content: 'Lacks head control',
      image: require('../../../../assets/images/4-6/Image7.png'),
    },
    {
      content: 'Cannot sit up even with help',
      image: require('../../../../assets/images/4-6/Image8.png'),
    },
    {
      content: 'Does not grasp things within reach',
      image: require('../../../../assets/images/4-6/Image9.png'),
    },
    {
      content:
        'Does not vocalize by making different sounds, such as "ah","ee", "oo"',
      image: require('../../../../assets/images/4-6/Image10.png'),
    },
    {
      content: 'Head and eyes do not move or track a moving object',
      image: require('../../../../assets/images/4-6/Image11.png'),
    },
    {
      content: 'Unable to raise head when on tummy',
      image: require('../../../../assets/images/4-6/Image12.png'),
    },
  ],
  sevenToNine: [
    {
      content: 'Cannot roll over',
      image: require('../../../../assets/images/7-9/Image7.png'),
    },
    {
      content: 'Needs support to sit',
      image: require('../../../../assets/images/7-9/Image8.png'),
    },
    {
      content: 'Does not turn towards a sound (out of sight)',
      image: require('../../../../assets/images/7-9/Image9.png'),
    },
    {
      content: 'Does not utter pa..pa..pa, ma..ma,ba..ba, etc',
      image: require('../../../../assets/images/7-9/Image10.png'),
    },
    {
      content: 'Tilts head to one side each time when looking at objects',
      image: require('../../../../assets/images/7-9/Image11.png'),
    },
  ],
  tenToTwelve: [
    {
      content: 'Cannot pick small objects with finger and thumb',
      image: require('../../../../assets/images/10-12/Image7.png'),
    },
    {
      content: 'Does not stretch hands to be picked up',
      image: require('../../../../assets/images/10-12/Image8.png'),
    },
    {
      content: 'Does not respond to own name)',
      image: require('../../../../assets/images/10-12/Image9.png'),
    },
    {
      content:
        'Does not search for half hidden toys that the child sees you hide',
      image: require('../../../../assets/images/10-12/Image10.png'),
    },
    {
      content:
        'Does not play social games like peek-a-boo (jhalak/aankhmichauli)',
      image: require('../../../../assets/images/10-12/Image11.png'),
    },
  ],
  thirteenToEighteen: [
    {
      content: 'Cannot stand on her own without support',
      image: require('../../../../assets/images/13-18/Image7.png'),
    },
    {
      content: 'Cannot put small objects in container',
      image: require('../../../../assets/images/13-18/Image8.png'),
    },
    {
      content: 'Does not point finger at an object when named',
      image: require('../../../../assets/images/13-18/Image9.png'),
    },
    {
      content:
        'Does not respond to mother’sgestures and seems to be in her own world',
      image: require('../../../../assets/images/13-18/Image10.png'),
    },
    {
      content:
        'Does not use both hands for everyday activities (shows preference for one hand)',
      image: require('../../../../assets/images/13-18/Image11.png'),
    },
    {
      content: 'Does not say single words like “mama” or “dada”',
      image: require('../../../../assets/images/13-18/Image12.png'),
    },
  ],
  EighteenToTwtFour: [
    {
      content: 'Does not walk steadily while pulling a toy',
      image: require('../../../../assets/images/19-24/Image7.png'),
    },
    {
      content: 'Cannot scribble',
      image: require('../../../../assets/images/19-24/Image8.png'),
    },
    {
      content: 'Does not use two word phrases such as “give milk”',
      image: require('../../../../assets/images/19-24/Image9.png'),
    },
    {
      content:
        'Does not make appropriate response to gestures such as responding to bye-bye/Namaste',
      image: require('../../../../assets/images/19-24/Image10.png'),
    },
    {
      content: 'Does not point to body parts',
      image: require('../../../../assets/images/19-24/Image11.png'),
    },
    {
      content: 'Does not seem to understand and follow simple instructions”',
      image: require('../../../../assets/images/19-24/Image12.png'),
    },
  ],
};

const getAgeGroup = age => {
  switch (true) {
    case age >= 0 && age <= 3:
      return 'zeroToThree';
    case age > 3 && age <= 6:
      return 'fourToSix';
    case age > 6 && age <= 9:
      return 'sevenToNine';
    case age > 9 && age <= 12:
      return 'tenToTwelve';
    case age > 12 && age <= 18:
      return 'thirteenToEighteen';
    case age > 18 && age <= 24:
      return 'EighteenToTwtFour';
    default:
      return 'age not specified';
  }
};
export const getChildScreenCards = age => {
  const ageGroup = getAgeGroup(age);
  return [
    {
      title: WHAT_MOST_BABIES_DO_TITLE,
      content: HOMESCREEN.CARD_CONTENT1,
      background: CARD_BLUE,
      image: <WhatBabyDoIllustration />,
      boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
      data: WHAT_MOST_BABIES_DO[ageGroup],
      onPress: CHILD_CARD_CONTENT,
    },
    {
      title: WHAT_PARENT_DO_TITLE,
      content: HOMESCREEN.CARD_CONTENT2,
      isParentScreen: true,
      background: LIGHT_YELLOW,
      image: <WhatShouldIDoIllustration />,
      boxText: CREATE_ACCOUNT.MOVE_FORWARD_TEXT,
      style: createAccountStyles.rowReverse,
      data: WHAT_PARENT_DO[ageGroup],
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
      data: WARNING_CAROUSEL_DATA[ageGroup],
    },
    {
      content: HOMESCREEN.CARD_CONTENT4,
      background: CARD_BACKGROUND,
      image: <ChildDetails />,
      boxText: CREATE_ACCOUNT.ADD_CHILD_DETAILS,
      onPress: TRACK,
    },
  ];
};
