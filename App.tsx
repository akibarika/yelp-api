import * as React from 'react';
import {ThemeProvider, Button, createTheme} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createNativeStackNavigator();
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
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App;
