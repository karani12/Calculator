import React from 'react';
import { View, StyleSheet } from 'react-native';
const Row = (props) => {
  return (
    <View style={styles.row}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default Row;