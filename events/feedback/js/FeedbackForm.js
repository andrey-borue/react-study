'use strict';
const FeedbackForm = ({data, onSubmit}) => {
  const Fragment = React.Fragment;
  let form;

  const Salutation = () => {
    const salutationList = ['Мистер', 'Мисис', 'Мис'].map((el, index) => {
      const id = "salutation-" + index;
      return (
        <Fragment>
          <input
            className="contact-form__input contact-form__input--radio"
            name="salutation"
            type="radio"
            id={id}
            value={el}
            defaultChecked={el === data.salutation}
          />
          <label className="contact-form__label contact-form__label--radio" htmlFor={id}>{el}</label>
        </Fragment>
      );
    });

    return (<div className="contact-form__input-group" defaultValue={data.salutation}>
        {salutationList}
      </div>
    );
  };

  const Snak = () => {
    const list = [{val: "пицца", el: "Пиццу"}, {val: "пирог", el: "Пирог"}].map((el, key) => {
      return (
        <Fragment>
          <input
            className="contact-form__input contact-form__input--checkbox"
            id={"snacks-" + key}
            name="snacks"
            type="checkbox"
            value={el.val}
            defaultChecked={data.snacks.indexOf(el.val) !== -1}
          />
          <label className="contact-form__label contact-form__label--checkbox" htmlFor={"snacks-" + key}>{el.el}</label>
        </Fragment>
      );
    });

    return (
      <div className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        {list}
      </div>
    );
  };

  const funcOnSubmit = (event) => {
    event.preventDefault();

    const snaks = [];
    form.elements['snacks'].forEach(el => el.checked && snaks.push(el.value));


    const data = {
      salutation: form.elements['salutation'].value,
      name: form.elements['name'].value,
      subject: form.elements['subject'].value,
      message: form.elements['message'].value,
      email: form.elements['email'].value,
      snacks: snaks
    };

    onSubmit(JSON.stringify(data));
  };

  return (
    <form
      className="content__form contact-form"
      onSubmit={funcOnSubmit}
      ref={element => form = element}
    >
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <Salutation />
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name">Имя</label>
        <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={data.name} />
      </div>

      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email} />
      </div>

      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject}>
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>

      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={data.message} />
      </div>

      <Snak />
      <button className="contact-form__button" type="submit">Отправить сообщение!</button>
      <output id="result" />
    </form>
  )
};

FeedbackForm.defaultProps = {
  data: {
    salutation: '',
    name: '',
    subject: '',
    message: '',
    email: '',
    snacks: []
  },
  onSubmit: () => {}
};