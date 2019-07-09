import axios from 'axios'

export function getTestData(dropVal){
  console.log("DROP VAL", dropVal)
    return (dispatch) => {
        // axios.get("https://jsonplaceholder.typicode.com/posts")
        axios.get("http://localhost:3030/Instances?classname="+dropVal)
          .then(res => {
            dispatch({ type: 'GET_TEST', payload: res.data })
          })
          .catch(err => {
            dispatch({ type: 'GET_TEST_ERROR', payload: err.message })
          })
      }
} 