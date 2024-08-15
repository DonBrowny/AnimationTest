import {StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SortableList from './SortableList';

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaProvider>
          <SafeAreaView style={{flex: 1}}>
            <SortableList />
          </SafeAreaView>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </>
  );
}
