import YoutubePlayer from 'react-native-youtube-iframe';
import React, {useCallback, useState} from 'react';
import {View, Button, Alert} from 'react-native';
import { appVideoPlayerStyles } from './styles';

export const AppVideoPlayer = ({link}) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return(
    <View style={appVideoPlayerStyles.container}>
        <YoutubePlayer 
            height={196}
            play={playing}
            // videoId={link}
            onChangeState={onStateChange}
            webViewStyle={{borderRadius: 12}}
            webViewProps={{
              source: {baseUrl: link}
            }}
        />
        {/* <Button title={playing ? 'pause' : 'play' } onPress={togglePlaying} /> */}
    </View>
  )
};
