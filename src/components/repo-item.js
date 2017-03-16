import React from 'react';

import './repo-item.scss';

const repotItem = ({ repo }) => {
  return (
    <div className='repo-item'>
      <h2><a href={repo.html_url} target='_blank'><i className='glyphicon glyphicon-star' />{repo.full_name}</a></h2>
      <p>{repo.description}</p>
      <div className='counters'>
        <span className='stars'>
          <a href={repo.stargazers_url} target='_blank'>{repo.stargazers_count}</a>
        </span>
        <span className='forks'>
          <a href={repo.forks_url} target='_blank'>{repo.forks_count}</a>
        </span>
      </div>
    </div>
  );
};

repotItem.propTypes = {
  repo: React.PropTypes.object
};

export default repotItem;
