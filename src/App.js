import React from 'react-native';
import { StyleSheet, TextInput, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import store_data from './store_data.json';

import StoreCard from './components/Store'

export default function App() {

  renderData = ({item}) => <StoreCard product = {item} />

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          placeholder="Ara"
          keyboardType="text"
        />
        <FlatList 
          keyExtractor={(item) => item.id.toString()}
          data = {store_data}
          renderItem={renderData}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

