"use client";
import Link from 'next/link'
import React, { useState } from 'react'

const ClientSupport = () => {
  const [isOpen, setIsOpen] = useState(false) 
  
  const toggleChat = () =>{
    setIsOpen(!isOpen)
  };
  return (
    <div>
    <button
      onClick={toggleChat}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        fontSize: '16px',
        cursor: 'pointer',
      }}
    >
      💬
    </button>

    {isOpen && (
      <div
        style={{position: 'fixed', 
          bottom: '80px', 
          right: '20px', 
          width: '300px', 
          backgroundColor: 'white', 
          border: '1px solid #ddd', 
          borderRadius: '10px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
          padding: '10px', 
          zIndex: 1000,
        }}
      >
        <div
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            borderBottom: '1px solid #ddd', 
            paddingBottom: '8px',
          }}
        >
          <h3 style={{ margin: 0 ,  color: 'black'}}>👋¿en qué podemos ayudarte?</h3>
          <button
            onClick={toggleChat}
            style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '16px', 
              cursor: 'pointer'
            }}
          >
            ➖
          </button>
        </div>
        <div style={{ marginTop: '10px', color: 'black'}}>
          <Link href={'/help'}><p>💡 Cómo usar la aplicación</p></Link>
          <ul>
            <li>
              <input type="text" className='border-black border flex space-between' />
            </li>
          </ul>
          <Link href={'/help'}><p>📞 Contactar con soporte</p></Link>
        </div>
      </div>
    )}
  </div>
  );
}
export default ClientSupport
