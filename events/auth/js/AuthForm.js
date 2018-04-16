'use strict';

const AuthForm = ({onAuth}) => {
  let form;

  const onSubmit = event => {
    event.preventDefault();
    const data ={
      name: form.elements['name'].value,
      password: form.elements['password'].value,
      email: form.elements['email'].value
    };

    typeof onAuth === 'function' ? onAuth(data) : console.error('onAuth не является функцией');
  };

  const checkPassword = event => {
    event.currentTarget.value = event.currentTarget.value.replace(/[^a-zA-Z0-9_]/, '');
  };

  const checkEmail = event => {
    event.currentTarget.value = event.currentTarget.value.replace(/[^a-zA-Z0-9_@\.\-]/, '');
  };

  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={onSubmit} ref={el => form = el} >
      <div className="Input">
        <input required type="text" placeholder="Имя" name="name" />
        <label/>
      </div>

      <div className="Input">
        <input type="email" placeholder="Электронная почта" name="email" onChange={checkEmail} />
        <label />
      </div>

      <div className="Input">
        <input required type="password" placeholder="Пароль"  name="password" onChange={checkPassword} />
        <label />
      </div>

      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right" />
      </button>
    </form>
  )
};
