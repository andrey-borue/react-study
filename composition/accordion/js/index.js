'use strict';

class Accordion extends React.Component {

  render() {
    return (
      <main className="main">
        <h2 className="title">React</h2>
        <AccordionSection title='Компоненты'>
          Каждый компонент являются <strong>законченной</strong> частью пользовательского интерфейса и <strong>сам управляет своим состоянием</strong>, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.
        </AccordionSection>
        <AccordionSection title='Выучил раз, используй везде!' open>
          После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.
        </AccordionSection>

        <AccordionSection title='Использование JSX'>
          JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.
        </AccordionSection>
      </main>
    )
  }
}


class AccordionSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.open
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <section className={"section " + (this.state.isOpen ? "open" : "")}>
        <button>toggle</button>
        <h3 className="sectionhead" onClick={this.toggle}>{this.props.title}</h3>
        <div className="articlewrap">
          <div className="article">
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}
