import React from 'react';
import Infinite from '@srph/react-infinite-scroll';


class Infi extends React.Component {
  state = {
    items: ["test","test1","test2","test4","test","test","test1","test2","test4","test","test","test1","test2","test4","test","fsdf","fsdf","fsfds","fsdf"],
    loading: false
  };

  componentDidMount() {
    this.request();
  }

  render() {
    return (
      <div>
        
          <Infinite callback={this.request} disabled={this.state.loading}>
            {this.state.items.map((item, i) =>
              <div className="card spacer" key={i}>
                <h1 className="card-quote">{item}</h1>
              </div>
            )}
          </Infinite>
          
        </div>
      
    );
  }

  request = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({
        loading: false,
        items: this.state.items.concat(this.state.items)
      });
    }, 500);
  }
}
 


export default Infi;