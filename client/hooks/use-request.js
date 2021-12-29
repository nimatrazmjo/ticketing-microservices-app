import axios from 'axios';
import {useState} from 'react';

export default ({url, method, body, onSuccess}) => {
  const [errors, setErrors] = useState(null);
  const doRequest = async () => {
    try {
      
      setErrors(null);
      const response = await axios[method](url,body);
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (error) {
      console.log(error, 'errorrrrr');
      setErrors(
      <div className="alert alert-danger">
        <ul >
          {error.response.data.errors.map(error => <li key={error.message}>{error.message}</li>)}
        </ul>
      </div>
      )
    }
  }
  return {doRequest,errors}  
}