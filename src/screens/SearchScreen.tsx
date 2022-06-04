import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBarArea from '../components/SearchBar';
import {useState} from 'react';


const SearchScreen: React.FC = () => {
  const [term, setTerm] = useState('');
  return <View>
    <SearchBarArea
      term={term}
      onTermChange={newTerm => setTerm(newTerm)}
      onTermSubmit={() => console.log('test')}
    />
    <Text>Search Screen</Text>
    <Text>{term}</Text>
  </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;
