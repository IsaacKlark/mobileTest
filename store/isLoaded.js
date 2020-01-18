export const setIsLoaded = isLoaded => ({
    type: "IS_LOADED",
    isLoaded,
});

 const getIsLoaded = (isLoaded = false, action) => {
    switch (action.type) {
        case "IS_LOADED":
            return action.isLoaded;
        default :
            return isLoaded;
    }
}

export default getIsLoaded;