
const initialStata = {
    products: []
};

const appData = (state = initialStata, action) => {
    const { type, payload } = action;

    switch (type) {
        
        default:
            return state;
    }
}

export default appData;