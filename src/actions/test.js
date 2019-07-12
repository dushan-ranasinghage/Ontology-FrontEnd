import axios from 'axios'

export function getTestData(dropVal1, dropVal2, dropVal3, dropVal4){
  console.log("DROP VAL", dropVal1, dropVal2, dropVal3, dropVal4)
    return (dispatch) => {
        axios.get("http://localhost:3050/GetSearch/"+dropVal1+"/"+dropVal2+"/"+dropVal3+"/"+dropVal4)
          .then(res => {
            dispatch({ type: 'GET_TEST', payload: res.data })
          })
          .catch(err => {
            dispatch({ type: 'GET_TEST_ERROR', payload: err.message })
          })
      }
} 