import React from 'react';

const Alert = ({ type, text }) => {
  return (
    <div role="alert" className="absolute z-10 top-15 right-0 left-0 flex justify-center items-center">
      <div
        className={`${type === 'danger' ? 'bg-red-800' : 'bg-blue-800'}
      p-2 text-white leading-none rounded-lg lg:rounded-full flex lg:inline-flex items-center `}
        role="alert"
      >
        <p
          className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} 
          flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {type === 'danger' ? 'Failed' : 'Success'}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;