import React from 'react';
import { Text, View, Image, StyleSheet, Button, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import { useSelector } from 'react-redux';

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state =>
        state.products.availableProducts.find(prod => prod.id === productId)
    );
    return (
        <View>
            <Text>{selectedProduct.title}</Text>
        </View>
    );
};

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }
};

export default ProductDetailScreen;
