import * as React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {SearchScreenProps} from '../RootStackPrams';
import {useNavigation} from '@react-navigation/native';

type ResultsListComponentProps = {
  title: string;
  results: {
    id: string
    price: string
    name: string
    image_url: string
    rating: string
    review_count: string
  }[];
};
const ResultsList: React.FC<ResultsListComponentProps> = (props: ResultsListComponentProps) => {
  const {title, results} = props;
  if (results.length === 0) return null;
  const navigation = useNavigation<SearchScreenProps>();
  return <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {
            id: item.id,
            name: item.name,
          })}>
            <ResultsDetail result={item}/>
          </TouchableOpacity>
        )
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  }
});

export default ResultsList;
