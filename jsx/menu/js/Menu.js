const Menu = function (props) {
  if (props.opened) {
    const list = props.items.map((item, index) => <li key={index}><a href="{item.href}">{item.title}</a></li>);

    return (
       <div className="menu menu-open">
         <div className="menu-toggle"><span></span></div>
         <nav>
           <ul>
             { list }
           </ul>
         </nav>
       </div>
   )
  }

  return (
    <div className="menu">
      <div className="menu-toggle"><span></span></div>
    </div>
  );
}