import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem('news')) || [];

    const updatedNews = [...existing, { ...formData, id: crypto.randomUUID(), date: new Date().toISOString() }];

    localStorage.setItem('news', JSON.stringify(updatedNews));
    setTimeout(() => {
      alert('Article created successfully!');
      navigate('/list');
    }, 1000);
  };

  return (
    <section>
      
      <form onSubmit={handleSubmit}>
        <h2>Create your own article!</h2>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>

        <label>
          Author:
          <input type="text" name="author" value={formData.author} onChange={handleChange} required />
        </label>

        <label>
          Category:
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
        </label>

        <label>
          Content:
          <textarea name="content" value={formData.content} onChange={handleChange} required />
        </label>

        <button className="button" type="submit">Publish</button>
      </form>
    </section>
  );
}

export default Form;