import * as React from 'react';
import {Text, StyleSheet, FlatList, Image} from 'react-native';
import {ResultsShowScreenRouteProps} from '../RootStackPrams';
import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

const ResultsShowScreen: React.FC = () => {
  const [result, setResult] = useState<{
    name: string,
    photos: [],
  } | null>(null);
  const route = useRoute<ResultsShowScreenRouteProps>();
  const {id} = route.params;

  const getResult = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }

  useEffect(() => {
    getResult(id);
  }, [])

  if (!result) return null
  return (
    <>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}}/>
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
  }
});

export default ResultsShowScreen;
