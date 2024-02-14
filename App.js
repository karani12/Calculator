import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider, Appbar } from 'react-native-paper';
import NumberButton from './src/components/NumberButton';
import Display from './src/components/Display';
import Row from './src/components/Row';
import { concat, e, evaluate } from 'mathjs';
// import {evaluate} from 'mathjs';

export default function App() {
  const [displayValue, setDisplayValue] = React.useState(0);
  const [currentString, setCurrentString] = React.useState('');
  const [currentValue, setCurrentValue] = React.useState(0);


  const handlePress = (value) => {
    if (value === 'C') {
      setDisplayValue(0);
      setCurrentValue(0);
      setCurrentString('');
    } else if (value === 'DEL') {
      setCurrentString(currentString.slice(0, -1));

    } else if (value === '=') {
      if (currentString === '') {
        return;
      } else if (currentString[currentString.length - 1] === '+' || currentString[currentString.length - 1] === '-' || currentString[currentString.length - 1] === '*' || currentString[currentString.length - 1] === '÷') {
        return;
      }

      setDisplayValue(evaluate(currentString));
      console.debug(evaluate(currentString));
    } else {
      setCurrentString(currentString + value.toString());
    }




  }
  const theme = {
    colors: {
      primary: '#fca311',
      secondary: '#e5e5e5',
      accent: '#14213d',

    },
  };
  return (
    <PaperProvider theme={theme}>

      <View style={styles.container}>
        <Appbar.Header >
          <Appbar.Content title="Calc" />
        </Appbar.Header>
        <StatusBar style="auto" />
        <Display string={currentString} value={displayValue} />
        <Row>
          <NumberButton number={'C'} onPress={() => handlePress('C')} />
          <NumberButton number={'+/-'} onPress={
            () => handlePress('+/-')
          } />
          <NumberButton number={'%'} onPress={
            () => handlePress('%')
          } />
          <NumberButton number={'DEL'}
            onPress={() => handlePress('DEL')}
            customStyle={{
              backgroundColor: '#fd8c85',

            }} />
        </Row>
        <Row>
          <NumberButton number={1} onPress={
            () => handlePress(1)
          }
          />
          <NumberButton number={2} onPress={
            () => handlePress(2)
          } />
          <NumberButton number={3} onPress={
            () => handlePress(3)
          } />
          <NumberButton number={'x'} onPress={
            () => handlePress('*')
          }
          />
        </Row>
        <Row>
          <NumberButton number={4} onPress={
            () => handlePress(4)
          } />
          <NumberButton number={5} onPress={
            () => handlePress(5)
          } />
          <NumberButton number={6} onPress={
            () => handlePress(6)
          } />
          <NumberButton number={'-'} onPress={
            () => handlePress('-')
          }


          />
        </Row>
        <Row>
          <NumberButton number={7} onPress={
            () => handlePress(7)
          } />
          <NumberButton number={8} onPress={
            () => handlePress(8)
          } />
          <NumberButton number={9} onPress={
            () => handlePress(9)
          } />
          <NumberButton number={'+'} onPress={
            () => handlePress('+')
          }



          />
        </Row>
        <Row>
          <NumberButton number={'.'} onPress={
            () => handlePress('.')
          } />
          <NumberButton number={0} onPress={
            () => handlePress(0)
          } />
          <NumberButton number={'÷'} onPress={
            () => handlePress('÷')
          } />
          <NumberButton number={'='} onPress={
            () => handlePress('=')
          }
            customStyle={{
              backgroundColor: theme.colors.secondary,

            }}

          />
        </Row>
      </View>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    height: '75%',

  },
});
