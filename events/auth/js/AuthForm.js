'use strict';

const AuthForm = ({onAuth}) => {
  const user = [];

  const onSubmit = event => {
    event.preventDefault();
    typeof onAuth === 'function' ? onAuth(user) : console.error('onAuth не является функцией');
  };

  const name = (
      <div className="Input">
        <input required type="text" placeholder="Имя" onChange={event => user.name = event.currentTarget.value}/>
        <label/>
      </div>
  );

  const password =  (
      <div className="Input">
        <input required type="password" placeholder="Пароль" onChange={event => {user.password = event.currentTarget.value = event.currentTarget.value.replace(/[^a-zA-Z0-9_]/, '')}} />
        <label />
      </div>
  );

  const email = (
    <div className="Input">
      <input type="email" placeholder="Электронная почта" onChange={event => {user.email = event.currentTarget.value = event.currentTarget.value.replace(/[^a-zA-Z0-9_@\.\-]/, '')}} />
        <label />
    </div>
  );
  
  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={onSubmit}>
      {name}
      {email}
      {password}
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right" />
      </button>
    </form>
  )
};
