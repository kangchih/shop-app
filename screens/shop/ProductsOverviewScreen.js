import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// import { CATEGORIES } from '../data/dummy-data';


const ProductsOverviewScreen = props => {

    return (
        <FlatList />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21
            ? 'hidden'
            : 'visible',
        // : 'visible',
        elevation: 5,

    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default ProductsOverviewScreen;