import React, { Component } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import YoutubePlayer from 'react-native-yt-player';
import BackButton from '../Components/BackButton';
import SocialAccounts from '../Components/SocialAccounts';
import Theme from '../Utils/Theme';

export default class VideoScreen extends Component {
  onFullScreen = fullScreen => {
    console.log('fullscreen ', fullScreen);
  };

  play = () => {
    this.player.playVideo();
  };
  pause = () => {
    this.player.pauseVideo();
  };

  seekTo = s => {
    this.player.seekTo(s);
  };
  render() {
    const title = this.props.route.params.title;
    const description = this.props.route.params.description;
    const youtubelink = this.props.route.params.youtubelink;

    console.log('youtubelink', youtubelink, this.props.route.params.youtubelink)
    return (
      <SafeAreaView style={styles.container}>
        <YoutubePlayer
          loop
          ref={ref => {
            this.player = ref;
          }}
          topBar={TopBar}
          videoId={youtubelink ? youtubelink : "te7mXWqqjPI"}
          autoPlay
          onFullScreen={this.onFullScreen}
          onStart={() => console.log('onStart')}
          onEnd={() => alert('on End')}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <SocialAccounts />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const TopBar = ({ play, fullScreen }) => (
  <View
    style={{
      alignSelf: 'flex-start',
      position: 'absolute',
      top: 0,
    }}>
    <BackButton />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
  },
  title: {
    color: 'white',
    fontFamily: Theme.boldFont,
    fontSize: 22,
    textAlign: 'center',
    marginLeft: Theme.wp * 0.03,
    marginRight: Theme.wp * 0.03,
    marginTop: Theme.hp * 0.03,
  },
  description: {
    color: 'grey',
    marginLeft: Theme.wp * 0.06,
    marginRight: Theme.wp * 0.05,
    fontSize: 17,
    marginTop: Theme.hp * 0.03,
  },
});
