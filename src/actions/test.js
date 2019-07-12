import axios from 'axios'

export function getTestData(dropVal1){
  console.log("DROP VAL", dropVal1)
    return (dispatch) => {
        axios.get("http://localhost:3050/GetSearch/"+dropVal1)
          .then(res => {
            dispatch({ type: 'GET_TEST', payload: res.data })
          })
          .catch(err => {
            dispatch({ type: 'GET_TEST_ERROR', payload: err.message })
          })
      }
} 