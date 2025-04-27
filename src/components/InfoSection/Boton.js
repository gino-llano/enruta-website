import React from 'react';

function DownloadButton(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: 'white',
        color: 'black',
        fontWeight: '600',
        borderRadius: '8px',
        textDecoration: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
        marginBottom: "10px",
        marginRight: "10px"
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#FFD800')}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
    >
      <img
        src={props.imageSrc}
        alt="store logo"
        style={{
          width: '24px',
          height: '24px',
          marginRight: '8px',
        }}
      />
      <span>{props.text}</span>
    </a>
  );
}

export default DownloadButton;
