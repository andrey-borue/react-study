'use strict';


const FeedbackForm = ({data, onSubmit}) => {
  const Fragment = React.Fragment;
  let form;

  const Salutation = () => {
    const salutationList = ['Мистер', 'Мисис', 'Мис'].map((el, index) => {
      const id = "salutation-" + index;

      return (
        <Fragment>
          <input className="contact-form__input contact-form__input--radio" id={id} name="salutation" type="radio" value={el} defaultChecked={el === data.salutation} onChange={el => el.currentTarget.checked ? data.salutation = el.currentTarget.value : true}/>
          <label className="contact-form__label contact-form__label--radio" htmlFor={id}>{el}</label>
        </Fragment>
      );
    });

    return (<div className="contact-form__input-group" defaultValue={data.salutation}>
        {salutationList}
      </div>
    );
  };

  const name = (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="name">Имя</label>
      <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={data.name} onChange={(e) => data.name = e.currentTarget.value} />
    </div>
  );

  const email = (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
      <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email} onChange={(e) => data.email = e.currentTarget.value} />
    </div>
  );

  const help = (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
      <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject}  onChange={(e) => data.subject = e.currentTarget.value} >
        <option>У меня проблема</option>
        <option>У меня важный вопрос</option>
      </select>
    </div>
  );

  const message = (
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
      <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={data.message} onChange={(e) => data.message = e.currentTarget.value} />
    </div>

  );

  const saveSnak = (e) => {
    const item = e.currentTarget.value;
    if (e.currentTarget.checked) {
      data.snacks.push(item);
    } else {
      data.snacks.splice(data.snacks.indexOf(item), 1);
    }
  };

  const Snak = () => {
    const list = [{val: "пицца", el: "Пиццу"}, {val: "пирог", el: "Пирог"}].map((el, key) => {
      return (
        <Fragment>
          <input className="contact-form__input contact-form__input--checkbox" id={"snacks-" + key} name="snacks" type="checkbox" onChange={saveSnak} value={el.val} defaultChecked={data.snacks.indexOf(el.val) !== -1}/>
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

  const sendButton = (
    <button className="contact-form__button" type="submit">Отправить сообщение!</button>
  );

  const funcOnSubmit = (event) => {
    event.preventDefault();

    console.log(data);
    console.log(JSON.stringify(data));
    onSubmit(JSON.stringify(data));
  };

  return (
    <form className="content__form contact-form" onSubmit={funcOnSubmit} ref={element => form = element}>
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <Salutation />
      {name}
      {email}
      {help}
      {message}
      <Snak />
      {sendButton}
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