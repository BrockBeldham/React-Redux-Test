import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGithub } from '../actions';

import RepoItem from '../components/repo-item';

import './app.scss';

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

  updateUsername (e) {
    e.persist();
    if (e.target.value !== '') {
      this.setState({ username: e.target.value });
      this.props.fetchGithub(e.target.value);
    }
  };

  renderRepos (github) {
    return github.map((repo, index) => {
      return <RepoItem repo={repo} key={index} />;
    });
  };

  render () {
    let { github } = this.props;

    if (!github.github) {
      return <div>Loading...</div>;
    }

    return (
      <div className='app-wpr container-fluid col-md-8 col-md-offset-2'>
        <input type='text' placeholder='Enter a Github Username' onChange={(e) => { this.updateUsername(e); }} />
        <h1>Starred repos for {this.state.username}</h1>
        {this.renderRepos(github.github)}
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
