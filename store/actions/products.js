export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';
import Product from "../../models/product"

export const fetchProducts = () => {

    return async dispatch => {
        // any async code you want!
        try {
            const response = await fetch(
                'https://test-13de2.firebaseio.com/products.json'
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            console.log(resData);
            const loadedProducts = [];
            for (const key in resData) {
                loadedProducts.push(
                    new Product(
                        key,
                        'u1',
                        resData[key].title,
                        resData[key].imageUrl,
                        resData[key].description,
                        resData[key].price
                    )
                );
            }
            dispatch({ type: SET_PRODUCTS, products: loadedProducts });
        } catch (err) {
            // Send to custom analytics server
            throw err;
        }

    };
};
export const deleteProduct = productId => {
    return {
        type: DELETE_PRODUCT,
        pid: productId
    };
};


export const createProduct = (title, description, imageUrl, price) => {
    //If it returns a function, then this is a function which has to receive an argument, the dispatch function
    //which will be passed in automatically by redux thunk, so redux thunk will in the end call this function
    return async dispatch => {
        // any async code you want!
        const response = await fetch('https://test-13de2.firebaseio.com/products.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                imageUrl,
                price
            })
        });

        const resData = await response.json();

        console.log(resData);

        dispatch({
            type: CREATE_PRODUCT,
            productData: {
                id: resData.name,
                title,
                description,
                imageUrl,
                price
            }
        });
    }
};

export const updateProduct = (id, title, description, imageUrl) => {
    return {
        type: UPDATE_PRODUCT,
        pid: id,
        productData: {
            title,
            description,
            imageUrl,
        }
    };
};
