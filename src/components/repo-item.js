import React from 'react';

import './repo-item.scss';

const repotItem = ({ repo }) => {
  return (
    <div className='repo-item'>
      <h2>
        <a href={repo.html_url} target='_blank'>
          <i className='ico ico-yel'>
            <svg viewBox='0 0 14 16'>
              <path d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z' />
            </svg>
          </i>
          {repo.full_name}
        </a>
      </h2>
      <p>{repo.description}</p>
      <div className='counters'>
        <span className='stars'>
          <a href={repo.stargazers_url} target='_blank'>
            <i className='ico ico-blk'>
              <svg viewBox='0 0 14 16'>
                <path d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z' />
              </svg>
            </i>
            {repo.stargazers_count}
          </a>
        </span>
        <span className='forks'>
          <a href={repo.forks_url} target='_blank'>
            <i className='ico ico-blk'>
              <svg viewBox='0 0 10 16'><path d='M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z' /></svg>
            </i>
            {repo.forks_count}
          </a>
        </span>
      </div>
    </div>
  );
};

repotItem.propTypes = {
  repo: React.PropTypes.object
};

export default repotItem;
