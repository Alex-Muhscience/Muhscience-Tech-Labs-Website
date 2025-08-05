'use client';

import { useState } from 'react';

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

// Mock comments list
const initialComments: Comment[] = [
  { id: 1, author: 'Alice', content: 'Great article!', timestamp: '2025-08-01T10:30:00' },
  { id: 2, author: 'Bob', content: 'Really insightful, thanks!', timestamp: '2025-08-02T11:00:00' },
];

function useComments() {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  function addComment(author: string, content: string) {
    const newComment: Comment = {
      id: comments.length + 1,
      author,
      content,
      timestamp: new Date().toISOString(),
    };
    setComments([...comments, newComment]);
  }

  return {
    comments,
    addComment,
  };
}

export default useComments;
export type { Comment };

