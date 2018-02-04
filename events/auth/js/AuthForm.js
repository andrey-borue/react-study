'use strict';

const AuthForm = ({onAuth}) => {
  let nameInput, passwordInput, emailInput;

  const onSubmit = event => {
    event.preventDefault();
    const data ={
      name: nameInput.value,
      password: passwordInput.value,
      email: emailInput.value
    };


    typeof onAuth === 'function' ? onAuth(data) : console.error('onAuth не является функцией');
  };

  const name = (
      <div className="Input">
        <input required type="text" placeholder="Имя" ref={el => nameInput = el} />
        <label/>
      </div>
  );

  const password =  (
      <div className="Input">
        <input required type="password" placeholder="Пароль" ref={el => passwordInput = el} onChange={event => {event.currentTarget.value = event.currentTarget.value.replace(/[^a-zA-Z0-9_]/, '')}} />
        <label />
      </div>
  );

  const email = (
    <div className="Input">
      <input type="email" placeholder="Электронная почта" ref={el => emailInput = el} onChange={event => {event.currentTarget.value = event.currentTarget.value.replace(/[^a-zA-Z0-9_@\.\-]/, '')}} />
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
