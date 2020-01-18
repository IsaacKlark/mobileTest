export const setLoading = loading => ({
    type: "LOADING",
    loading,
});

const getLoading = (loading = false, action) => {
    switch (action.type) {
        case "LOADING": 
            return action.loading;
        default:
            return loading;
    }
}

export default getLoading;