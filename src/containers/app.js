import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGithub } from '../actions';

import RepoItem from '../components/repo-item';
import Loader from '../components/loader';

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
    const val = e.target.parentNode.parentNode.querySelector('input').value;
    this.setState({ username: val });
    this.props.fetchGithub(val);
  };

  renderRepos (github) {
    if (github) {
      return github.map((repo, index) => {
        return <RepoItem repo={repo} key={index} />;
      });
    } else {
      return <Loader />;
    }
  };

  render () {
    let { github } = this.props;

    return (
      <div className='app-wpr container-fluid col-md-8 col-md-offset-2'>
        <div className='input-group input-group-lg'>
          <input type='text' className='form-control' placeholder='Search for a Username...' />
          <span className='input-group-btn'>
            <button className='btn btn-default' type='button' onClick={(e) => { this.updateUsername(e); }}>Boom!</button>
          </span>
        </div>
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
