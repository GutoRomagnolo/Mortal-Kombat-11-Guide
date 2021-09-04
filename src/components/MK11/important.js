/* export default class CharCard extends Component {
  state = {
    selectedChar: null,
  };

  render() {
  const charNames = [];
    _.forEach(collection, (char) => {
      const charName = _.keys(char);
      charNames.push(...charName);
      return char;
    }); 

    console.log(this.state.selectedChar);

    return (
      this.state.selectedChar ? <div>oi</div> : <div>
        {_.map(collection, (char, index) => {
          const charName = charNames[index];
          return (
            <button
              onClick={() => this.setState({ selectedChar: char })}
              className="col-md-3 col-sm-6 mb-5"
            >
              <div className="card">
                <div className="card-header">
                  <h1>{charName}</h1>
                </div>
              </div>
            </button>
          );
        })}
      </div> */