import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './AppStyles';


export default function HistoryScreen({ route }) {

    const { data } = route.params;

    return (
        <View>
            <Text style={styles.resultText}>History: </Text>
            <FlatList data={data} renderItem={({ item }) => <Text style={styles.flatListItem}>{item.key}</Text>}
                keyExtractor={(item, index) => index.toString()} />
        </View>
    );
};
