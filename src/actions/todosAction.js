import axios from 'axios';
import {GET_TODOS} from './types';

export const getTodos = () => async (dispatch) => {
    
        const data = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(data);
        dispatch({
            type: GET_TODOS,
            payload: data.data
        })
    
}