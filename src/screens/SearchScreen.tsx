import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBarArea from '../components/SearchBar';
import {useState} from 'react';
import yelp from '../api/yelp';


const SearchScreen: React.FC = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([])

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'san jose'
      }
    });
    setResults(response.data.businesses);
  }
  return <View>
    <SearchBarArea
      term={term}
      onTermChange={setTerm}
      onTermSubmit={searchApi}
    />
    <Text>Search Screen</Text>
    <Text>We have found {results.length} results</Text>
  </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;
