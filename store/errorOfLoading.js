export const errorOfLoading = error => ({
    type: "ERROR",
    error,
});

const getError = (error = false, action) => {
    switch (action.type) {
        case "ERROR":
            return action.error;
        default:
            return error;
    }
}

export default getError;