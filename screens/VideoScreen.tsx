import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import YoutubePlayer from "react-native-youtube-iframe";
import { useCallback, useState } from 'react';


export default function VideoScreen( { navigation }: RootTabScreenProps<'Video'>) {
    const [playing, setPlaying] = useState(false);

  return (
    <ScrollView>
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"0TsicWGho7c"}
       
      />
    </View>

    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"ZcNgj0KPYuA"}
       
      />
    </View>
    
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"7tnrATiclg4"}
       
      />
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
