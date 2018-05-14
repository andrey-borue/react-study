'use strict';

function Stars({count}) {
    if (typeof count !== 'number' || count > 5 || count < 1) {
      return null;
    }

    const list = [];
    for (let i = 1; i<=count; i++) {
      list.push(<li key={i}><Star /></li>);
    }

    return <ul className="card-body-stars u-clearfix">{ list }</ul>;
}

Stars.defaultProps = {
  count: 0
};