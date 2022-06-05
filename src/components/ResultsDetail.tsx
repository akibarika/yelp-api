import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from '@rneui/themed';


type ResultsDetailComponentProps = {
  result: {
    name: string
    image_url: string
    rating: string
    review_count: string
  };
};
const ResultsDetail: React.FC<ResultsDetailComponentProps> = (props: ResultsDetailComponentProps) => {
  const {result} = props;
  return <View style={styles.container}>
    <Image source={{uri: result.image_url}} style={styles.image}/>
    <Text style={styles.name}>{result.name}</Text>
    <Text>
      {result.rating} Stars, {result.review_count} Reviews
    </Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  }
});

export default ResultsDetail;
