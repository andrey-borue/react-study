const Calendar = function (props) {
  const originalDate = props.date;
  console.log(originalDate);
  const materialHeader = (
    <div className="ui-datepicker-material-header">
      <div className="ui-datepicker-material-day">Среда</div>
      <div className="ui-datepicker-material-date">
        <div className="ui-datepicker-material-day-num">{ originalDate.getDate() }</div>
        <div className="ui-datepicker-material-month">{ originalDate.toLocaleString('ru', {month: 'long', day: 'numeric'}).replace(originalDate.getDate(), '') }</div>
        <div className="ui-datepicker-material-year">{ originalDate.getFullYear() }</div>
      </div>
    </div>
  );

  const datePickerHeader = (
    <div className="ui-datepicker-header">
      <div className="ui-datepicker-title">
        <span className="ui-datepicker-month">{ originalDate.toLocaleString('ru', {month: 'long'}) }</span>&nbsp;<span className="ui-datepicker-year">{ originalDate.getFullYear() }</span>
      </div>
    </div>
  );

  const monday = new Date(originalDate.getTime());
  monday.setDate(originalDate.getDate() - originalDate.getDay() + 1);

  const CustomThead = function(props) {
    const list = [];
    const date = new Date(props.monday.getTime());
    for (let i = 0; i < 7; i++) {
      list.push(<th scope="col" title={ date.toLocaleString('ru', {weekday: 'long'}) }>{ date.toLocaleString('ru', {weekday: 'short'}) }</th>);
      date.setDate(date.getDate() + 1);
    }

    return (
      <thead>
        <tr>
          { list }
        </tr>
      </thead>
    )
  };

  const CustomeTr = function(props) {
    const date = new Date(props.date.getTime());
    const currentDate = new Date(originalDate.getTime());
    let list = [];

    for (let i = 0; i < 7; i++) {
      if (date.getDate() === currentDate.getDate()) {
        list.push(<td className="ui-datepicker-today">{ date.getDate() }</td>);
      } else if (date.getMonth() !== currentDate.getMonth()) {
        list.push(<td className="ui-datepicker-other-month">{ date.getDate() }</td>);
      } else {
        list.push(<td>{ date.getDate() }</td>);
      }

      date.setDate(date.getDate() + 1);
    }

    return (
      <tr>
        { list }
      </tr>
    )
  };

  const CustomBody = function(props) {
    const firstDay = new Date(props.originalDate.getTime());
    firstDay.setDate(1);
    firstDay.setDate(firstDay.getDate() - firstDay.getDay() + 1);
    console.log(firstDay);
    const list = [];

    do {
      list.push(CustomeTr({date: firstDay}));
      firstDay.setDate(firstDay.getDate() + 7);
    } while (firstDay.getMonth() === props.originalDate.getMonth());

    return (
      <tbody>
        {list}
      </tbody>

    )
  };

  return (
    <div className="ui-datepicker">
      { materialHeader }
      { datePickerHeader }
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <CustomThead monday={monday} />
        <CustomBody originalDate={originalDate}/>
      </table>
    </div>
  )
};
