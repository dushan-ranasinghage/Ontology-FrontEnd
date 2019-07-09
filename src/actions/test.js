import axios from 'axios'

export function getTestData(dropVal){
  console.log("DROP VAL", dropVal)
    return (dispatch) => {
        axios.get("http://localhost:3030/Instances?classname="+dropVal)
          .then(res => {
            dispatch({ type: 'GET_TEST', payload: res.data })
          })
          .catch(err => {
            // Mock Data Test Start
            // let mockData=[
            //   {"name": "Apple X"},
            //   {"name": "Samsung Galaxy S7"}
            // ]
            // dispatch({ type: 'GET_TEST', payload: mockData })
            //Mock Data Test END

            dispatch({ type: 'GET_TEST_ERROR', payload: err.message })
          })
      }
} 