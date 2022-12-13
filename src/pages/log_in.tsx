import React, {useState} from "react";

export const Log_In: React.FC = () => {
  
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault()
    const loginData = new URLSearchParams();
    loginData.append('username', username)
    loginData.append('password', password)
    fetch('http://127.0.0.1:5000/login', {
      method: 'post',
      body: loginData,
    })
    .then(res => {
      if (res.status === 200) {
        console.log('logged in!');
      }
      else {
        console.log('NOT logged in!');
      }
      //res.status === 200 ? undefined : undefined
    }).catch(err => console.error(err))
    }

  return (
    <section className="log in main-layout">
      <form onSubmit={handleSubmit}>
        <label>
          username:
          <input type="text" value={username} onChange={(e): void => {setUsername(_ => e.target.value)}}/>
        </label>
        password:
        <input type="password" value={password} onChange={(e): void => {setPassword(_ => e.target.value)}}/>
        <button type="submit"/>
      </form>
    </section>
  );
};
