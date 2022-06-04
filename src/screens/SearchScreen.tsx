import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBarArea from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen: React.FC = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return <View>
    <SearchBarArea
      term={term}
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)}
    />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <Text>We have found {results.length} results</Text>
  </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;
