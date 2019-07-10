import axios from 'axios'

export function getTestData(dropVal1,dropval2,dropval3){
  console.log("DROP VAL", dropVal)
    return (dispatch) => {
        axios.get("http://localhost:3050/"+dae+"?classname="+dropVal)
          .then(res => {
            dispatch({ type: 'GET_TEST', payload: res.data })
          })
          .catch(err => {
            dispatch({ type: 'GET_TEST_ERROR', payload: err.message })
          })
      }
} 