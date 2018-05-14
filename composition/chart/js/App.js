function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

class App extends React.Component {
  componentWillMount() {
    this.setState({
      data: [],
      series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
      labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
      colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
    })
  }

  componentDidMount() {
    this.populateArray();
    setInterval(this.populateArray, 2000);
  }

  populateArray = () => {
    const  series = 5;
    const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(() => getRandomInt(0, 20)));

    this.setState({ data });
  };

  render() {
    const { data, colors, labels, series } = this.state;
    const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

    return (
      <section>
        <Charts data={data} colors={colors} max={max} labels={labels} chartHeight='250' divider={max}  isHeight />
        <Charts data={data} colors={colors} max={max} labels={labels} chartHeight='250' type='stacked' isHeight />
        <Charts data={data} colors={colors} max={max} labels={labels} chartHeight='250' divider={max} type='layered' isHeight isRight />
        <Charts data={data} colors={colors} max={max} labels={series} chartHeight='auto' divider={max} extraClassName='horizontal' isWidth  />
        <Legend labels={labels} colors={colors} />
      </section>
    );
  }
}

const Legend = ({labels, colors}) => {
  return (
    <div className="Legend">
      { labels.map((label, labelIndex) => {
        return (
          <div>
            <span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
            <span className="Legend--label">{ label }</span>
          </div>
        );
      }) }
    </div>
  );
};

const Charts = ({data, extraClassName, colors, max, chartHeight, isWidth, isHeight, type, divider, isRight, labels}) => {
  return (
    <div className={"Charts " + extraClassName}>
      { data.map((serie, serieIndex) => {
        let sortedSerie = serie.slice(0);
        let sum;

        sum = serie.reduce((carry, current) => carry + current, 0);
        sortedSerie.sort(compareNumbers);

        return (
          <Chart index={serieIndex} blockLabel={labels[serieIndex]} type={type} height={chartHeight}>
            { serie.map((item, itemIndex) => {
              const color = colors[itemIndex];
              const size = item / (divider ? divider : sum) * 100;
              let style;

              style = {
                backgroundColor: color,
                opacity: item/max + .05,
                zIndex: item,
                width: isWidth ? size + '%' : null,
                height: isHeight ? size + '%' : null,
                right: isRight ? (((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%') : null
              };

              return (
                <div className={"Charts--item " + type} style={ style } key={ itemIndex }>
                  <b style={{ color: color }}>{ item }</b>
                </div>
              );
             })
            }
          </Chart>
        );
      }) }
    </div>
  );
};

Charts.defaultProps = {
  extraClassName: '',
  type: '',
  divider: false,
  isWidth: false,
  isHeight: false,
  isRight: false

};

const Chart = ({type, index, height, children, blockLabel}) => {
  return (
    <div className={"Charts--serie " + type} key={ index } style={{ height: height }}>
      <label>{ blockLabel }</label>
      { children }
    </div>
  )
};