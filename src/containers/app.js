import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGithub } from '../actions';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: 'BrockBeldham'
    };
  };

  componentWillMount () {
    this.props.fetchGithub(this.state.username);
  };

  render () {
    let { github } = this.props;

    if (!github) {
      return <div>Loading...</div>;
    }

    console.log(github);

    return (
      <div className='app-wpr'>
        Sup holmes
      </div>
    );
  }
}

App.propTypes = {
  github: React.PropTypes.object,
  fetchGithub: React.PropTypes.func
};

function mapStateToProps (state) {
  return { github: state.github };
};

export default connect(mapStateToProps, { fetchGithub })(App);
