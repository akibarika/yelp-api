import * as React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

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
  return <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({item}) => {
        return <ResultsDetail result={item}/>
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
