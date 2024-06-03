import React from 'react'
import { useState } from 'react';


const P1 = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
      });
      

  return (
    <div>
      <h2>Sample Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>


    </div>
  )
}

export default P1
