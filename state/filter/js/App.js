'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: props.projects,
      selected: 'All'
    }
  }

  handleFilterClick = (filter) => {
    this.setState({
      projects: this.props.projects.filter(el => (filter === 'All') || (el.category ===  filter)),
      selected: filter
    });
  };
  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selected}
          onSelectFilter={this.handleFilterClick} />
        <Portfolio projects={this.state.projects} />
      </div>
    );
  }
}
