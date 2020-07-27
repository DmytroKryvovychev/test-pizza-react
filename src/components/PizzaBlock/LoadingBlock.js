import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="132" cy="132" r="132" />
      <rect x="0" y="277" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="316" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="412" rx="6" ry="6" width="91" height="31" />
      <rect x="133" y="404" rx="25" ry="25" width="140" height="46" />
    </ContentLoader>
  );
}

export default LoadingBlock;
