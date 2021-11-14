
export const galleryReducer = (state , action) => {
switch(action.type) {

case "ADD_FETCH" :
    return[action.payload]

default :
return state
}

}