import React from 'react';

function Admin() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src={`${window.location.origin}/AdminHome.html`}
        style={{ border: 'none', width: '100%', height: '100%' }}
        title="Admin Home"
      />
    </div>
  );
}

export default Admin;
