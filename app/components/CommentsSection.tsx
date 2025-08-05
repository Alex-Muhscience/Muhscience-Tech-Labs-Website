'use client';

import React, { useState } from 'react';
import useComments from '../../hooks/useComments';

const CommentsSection: React.FC = () => {
  const { comments, addComment } = useComments();
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (author && content) {
      addComment(author, content);
      setAuthor('');
      setContent('');
    }
  };

  return (
    <div className="comments-section">
      <h3 className="text-xl font-bold mb-4">Comments</h3>

      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <textarea
          placeholder="Write your comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
      </form>

      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="mb-4 p-4 border rounded">
            <p className="text-sm text-gray-600">{comment.author} - {new Date(comment.timestamp).toLocaleDateString()}</p>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;

