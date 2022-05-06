/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import Character from '../screens/Character';
import Chat from '../screens/Chat';
import CreateAccount from '../screens/CreateAccount';
import CreateCharacter from '../screens/CreateCharacter';
import Login from '../screens/Login';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/MainScreen';
import TabTwoScreen from '../screens/Lore';
import VideoScreen from '../screens/VideoScreen';
//import Login from '../screens/Login';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import MainScreen from '../screens/MainScreen';
import Lore from '../screens/Lore';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Chat" component={Chat} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
        <BottomTab.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: 'MainScreen',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Lore"
        component={Lore}
        options={{
          title: 'Lore',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          title: 'Video',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      

<BottomTab.Screen
        name="Character"
        component={Character}
        options={{
          title: 'Character',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
<BottomTab.Screen
        name="CreateCharacter"
        component={CreateCharacter}
        options={{
          title: 'Character Create',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />

<BottomTab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
    
    
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
