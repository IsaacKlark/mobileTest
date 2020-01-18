export const setCurrentPhoto = currentPhoto => ({
    type: "CURRENT_PHOTO",
    currentPhoto,
});

const getCurrentPhoto = (currentPhoto = '', action) => {
    switch (action.type) {
        case "CURRENT_PHOTO":
            return action.currentPhoto;
        default:
            return currentPhoto;
    }
}

export default getCurrentPhoto;