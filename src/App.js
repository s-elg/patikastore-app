import React, { Dimensions } from 'react-native';
import { StyleSheet, TextInput, FlatList, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import store_data from './store_data.json';

import StoreCard from './components/Store'

export default function App() {

  const renderData = ({item}) => <StoreCard product = {item} />

  return (
    <SafeAreaProvider>
      <SafeAreaView style = {styles.container}>
        <Text style = {styles.page_title}>PATIKASTORE</Text>
        <TextInput
          style = {styles.input_area}
          placeholder="Ara..."
          keyboardType="text"
        />
        <FlatList 
          data = {store_data}
          renderItem={renderData}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },

  page_title: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 30,
    color: 'purple',
    fontWeight: 'bold',
  },

  input_area: {
    backgroundColor: 'gainsboro',
    height: 40,
    borderRadius: 10,
    margin: 10,
    paddingLeft: 10,
  },

  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between'
  },
})

