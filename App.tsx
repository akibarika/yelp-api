import * as React from 'react';
import {ThemeProvider, Button, createTheme} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import {RootStackParamList} from './src/RootStackPrams';

const Stack = createNativeStackNavigator<RootStackParamList>();
const theme = createTheme({
  Button: {
    raised: true,
  },
});
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Search'>
          <Stack.Screen
            name="Search"
            options={{title: 'Business Search'}}
            component={SearchScreen}/>
          <Stack.Screen
            name="ResultsShow"
            component={ResultsShowScreen}
            options={({ route }) => ({ title: route.params.name })}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App;
