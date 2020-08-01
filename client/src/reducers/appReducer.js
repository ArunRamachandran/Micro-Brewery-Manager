
const initialStata = {
    products: []
};

export const breweryData = (state = initialStata, action) => {
    const { type, payload } = action;

    switch (type) {
        
        default:
            return state;
    }
}