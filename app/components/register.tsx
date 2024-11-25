"use client"
import React, { useState } from 'react';

function RegisterForm  () {
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
        validateField(name, value);
      };
    
      const validateField = (name: string, value: string) => {
        let error = '';
        if (name === 'username' && value.trim() === '') {
          error = 'Campo requerido';
        } else if (name === 'email') {
          if (!value.trim()) {
            error = 'Campo requerido';
          } else if (!/\S+@\S+\.\S+/.test(value)) {
            error = 'Campo invalido';
          }
        } else if (name === 'password') {
          if (!value.trim()) {
            error = 'Campo requerido';
          } else if (value.length < 6) {
            error = 'Este campo debe tener al menos 6 caracteres';
          }
        } else if (name === 'confirmPassword') {
          if (value !== formData.password) {
            error = 'Los campos no coinciden';
          }
        }
    
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error,
        }));
      };
    
      const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const validationErrors = {};
        Object.keys(formData).forEach((field) => {
          validateField(field, formData[field]);
          if (errors[field]) {
            validationErrors[field] = errors[field];
          }
        });

        if (Object.values(validationErrors).some((err) => err)) {
            console.log('Error de validacion', validationErrors);
          } else {
            console.log('Usuario creado: ', formData);
            alert('Usuario creado con exito!');
            setFormData({
              username: '',
              email: '',
              password: '',
              confirmPassword: '',
            });
            setErrors({
              username: '',
              email: '',
              password: '',
              confirmPassword: '',
            });
          }
        };

    return (
        <form onSubmit={handleSubmit} className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-6' style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-700'>Name:</label>
            <input
            className='block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />

        </div>
        <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-700'>Email:</label>
            <input
            className='block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />

        </div>
        <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-700'>Password:</label>
            <input
            className='block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
        
        </div>
        <div className='space-y-2'>
            <label className='block text-sm font-medium text-gray-700'>Confirm Password:</label>
            <input
            className='block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            />

        </div>
        <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm