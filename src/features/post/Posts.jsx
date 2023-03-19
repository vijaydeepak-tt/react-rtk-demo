import React from 'react';

import { useGetPostByIdQuery } from './postSlice';

export default function Post() {
  const { data, error, isLoading } = useGetPostByIdQuery(1);
  console.log(data);
  return (
    <div>
      <input onChange={(e) => setId(e.target.value)} />
      {isLoading ? (
        <div>Loading.....</div>
      ) : (
        <div>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}
