class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
    // ref={el => console.log(el)} => null
  }

  isFixed = (offset) =>  {
    return offset > this.topPosition;
  };

  setPosition = (fixed) => {
    this.setState({
      fixed: fixed
    });
  };

  scrollHandler = () => {
    this.setPosition(this.isFixed(window.pageYOffset));
  };

  componentDidMount() {
    this.topPosition = document.querySelector('.search-box').offsetTop;
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }
}
