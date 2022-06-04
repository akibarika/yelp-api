import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SearchBar} from '@rneui/themed';

type SearchBarComponentProps = {
  term: string;
  onTermChange: (term: string) => void;
  onTermSubmit: () => void
};

const SearchBarArea: React.FC<SearchBarComponentProps> = (props: SearchBarComponentProps) => {
  const {term, onTermChange, onTermSubmit} = props;
  return (<View>
    <SearchBar
      platform='ios'
      placeholder="Search"
      value={term}
      onChangeText={onTermChange}
      autoCapitalize='none'
      autoCorrect={false}
      onEndEditing={onTermSubmit}
    />
  </View>)
}

const styles = StyleSheet.create({});

export default SearchBarArea;
