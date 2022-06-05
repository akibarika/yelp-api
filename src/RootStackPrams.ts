import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RouteProp} from '@react-navigation/native';


export type RootStackParamList = {
  Search: undefined;
  ResultsShow: {
    id: string,
    name: string,
  };
};

export type SearchScreenProps =
  NativeStackNavigationProp<RootStackParamList, 'Search'>;
export type ResultsShowScreenRouteProps =
  RouteProp<RootStackParamList, 'ResultsShow'>;
