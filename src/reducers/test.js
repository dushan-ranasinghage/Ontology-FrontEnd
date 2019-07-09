export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_TEST':
            return { ...state, testlist: action.payload };
        default:
            return state;
    }
}