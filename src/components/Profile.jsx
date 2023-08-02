import React from 'react';

export default function Profile() {
  return (
    <div className='profile'>
      <img 
        className='photo'
        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
        alt="avatar" 
      />
      <h1>Alice Lee</h1>
      <p>프론트엔드 개발자</p>
    </div>
  );
}