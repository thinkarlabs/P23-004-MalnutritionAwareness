import YoutubePlayer from 'react-native-youtube-iframe';
import React, {useCallback, useState} from 'react';
import {View, Alert} from 'react-native';
import {appVideoPlayerStyles} from './styles';

export const AppVideoPlayer = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  return (
    <View style={appVideoPlayerStyles.container}>
      <YoutubePlayer
        height={196}
        play={playing}
        videoId={'iee2TATGMyI'}
        onChangeState={onStateChange}
        webViewStyle={appVideoPlayerStyles.viewStyle}
      />
    </View>
  );
};
