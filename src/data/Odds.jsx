import React from 'react';
import Error from '../components/Error';
import TableShell from '../components/TableShell';

class Odds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      odds: [],
      error: false,
    };
  }


  componentDidMount() {
    const DTNow = Date.toString();
    const date = DTNow;
    const url = `api.sportradar.us/oddscomparison-rowt1/en/us/sports/sr:sport:16/${date}/schedule.json?api_key=k3d35q5cb9ezmmvxh8bjfxxd`;
    console.log(url);
    fetch(url)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({
          odds: data.properties,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.odds.map((data) => (
        <TableShell key={data.properties} item={data} />
      ));
    } else {
      return <Error />;
    }
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
};

export default Odds;
