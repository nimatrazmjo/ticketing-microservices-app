import { useRouter } from 'next/router';
import { useState } from 'react';

import useRequest from '../../hooks/use-request';
export default () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');
  const {doRequest, errors} = useRequest({
    url:'/api/users/signin',
    method: 'post',
    body: {email, password},
    onSuccess: () => router.push('/')
  });
  const submitForm = async (e) => {
    e.preventDefault(0);
    doRequest();
  }


  return (
    <form onSubmit={submitForm}>
      <h1>Sign In</h1>
      <div className="formGroup">
        <label>Email</label>
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" />
      </div>
      <div className="formGroup">
        <label>Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" />
      </div>
      {errors}
      <button className="btn btn-primary"> Sign In </button>
    </form>
  )
}