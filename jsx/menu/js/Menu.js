const Menu = function ({opened, items}) {
    const list = items.map((item, index) => <li key={index}><a href={ item.href }>{item.title}</a></li>);

    return (
       <div className="menu menu-open">
         <div className="menu-toggle"><span /></div>
         { opened && (
           <nav>
             <ul>
               { list }
             </ul>
           </nav>
         )}
       </div>
   )
};