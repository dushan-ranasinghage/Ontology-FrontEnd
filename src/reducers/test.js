export default function (state = {loading:false}, action) {
    switch (action.type) {
        case 'GET_TEST':
            return { ...state, testlist: action.payload , loading:false};
        default:
            return state;
    }
}