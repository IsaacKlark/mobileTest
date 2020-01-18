export const setSmallPhotos = smallPhoto => ({
    type: "SMALL_PHOTO",
    smallPhoto
});

const showSmallPhoto = (smallPhoto = [3], action) => {
    switch (action.type) {
        case "SMALL_PHOTO":
            return action.smallPhoto;
        default: 
            return smallPhoto;
    }
}

export default showSmallPhoto;