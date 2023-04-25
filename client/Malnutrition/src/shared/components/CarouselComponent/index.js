import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import {carouselStyles} from './styles';
import Carousel from 'react-native-reanimated-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Dimensions.get('window').width - 40;

const CarouselComponent = ({data}) => {
  const isCarousel = React.useRef(null);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: ITEM_WIDTH - 20,
          flex: 1,
        }}>
        <View style={carouselStyles.container} key={index}>
          <Image source={item.image} style={carouselStyles.image} />
          <Text style={carouselStyles.body}>{item.content}</Text>
        </View>
      </View>
    );
  };
  const baseOptions = {
    vertical: false,
    width: ITEM_WIDTH - 20,
    height: 300,
    marginLeft: 5,
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Carousel
        {...baseOptions}
        loop={false}
        ref={isCarousel}
        style={{width: '100%'}}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CarouselComponent;
