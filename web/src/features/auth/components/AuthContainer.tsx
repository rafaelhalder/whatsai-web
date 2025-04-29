import React from 'react';

function AuthContainer({ children } :{ children: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-hidden">
      {children}
    </div>
  );
}

export default AuthContainer;