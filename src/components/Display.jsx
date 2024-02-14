import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
const Display = ({ value, string }) => {
    return (
        <View style={styles.container}>
            <View>

                <Text variant="headlineSmall">{string}</Text>
            </View>
            <View style={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    paddingRight: 20,
                }
            }>
                <Text variant="headlineSmall">{value}</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '20%',
        paddingHorizontal: 20
    },
});

export default Display;