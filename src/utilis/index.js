export function getClass(i) {
    if (i % 5 === 0) {
        return 'big';
    }
    else if (i % 6 === 0) {
        return 'wide'
    }
}

// export function toggle (state,id)  {
//  const filterId = state.find(each => (each.id ===id ))

//   const filterState = state.filter(each => (each.id !== filterId))
//   return[...filterState,{...filterId,IsFavourited:!IsFavourited}]
// }

