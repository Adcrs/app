import * as React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import LoadScreens from './Screens/LoadScreens';
import MenuScreen from './Screens/MenuScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { NavigationContainer } from '@react-navigation/native';
import OpenAnimeScreen from './Screens/OpenAnimeScreen';
import OpenedMangaScreen from './Screens/OpenedMangaScreen';
import MangaScreen from './Screens/MangaScreen';
import AnimeScreen from './Screens/AnimeScreen';
export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <AppNavigator />
      </View>
    );
  }
}



const TabNavigator = createBottomTabNavigator(
  {
    MangaScreen: MangaScreen,
    AnimeScreen: AnimeScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'AnimeScreen') {
          return (
            <Image
              source={require('./assets/Anime.png')}
              style={{ width: 40, height: 40 }}></Image>
          );
        } else if (routeName === 'MangaScreen') {
          return (
            <Image
              source={require('./assets/MANGA.png')}
              style={{ width: 40, height: 40 }}></Image>
          );
        }
      },
    }),
  }
);

var switchedNavi = createSwitchNavigator({
  LoadScreens: LoadScreens,

  TabNavigator: TabNavigator,

  OpenedMangaScreen: OpenedMangaScreen,
  OpenAnimeScreen:OpenAnimeScreen,
});

const AppNavigator = createAppContainer(switchedNavi);
