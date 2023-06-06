import YoutubePlayer from 'react-native-youtube-iframe';
import React, {useCallback, useState} from 'react';
import {View, Alert} from 'react-native';
import {appVideoPlayerStyles} from './styles';

export const AppVideoPlayer = ({videoId}) => {
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
        height={185}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
        webViewStyle={appVideoPlayerStyles.viewStyle}
        webViewProps={{
          renderToHardwareTextureAndroid: true,
          androidLayerType:
            Platform.OS === 'android' && Platform.Version <= 22
              ? 'hardware'
              : 'none',
        }}
      />
    </View>
  );
};
