import React, { useState } from 'react';
import { Star, X } from 'lucide-react';

// Types for review submission
type ReviewSubmission = {
  rating: number;
  comment: string;
};

// Review Modal Component
const ReviewModal = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  hasExistingReview 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  onSubmit: (review: ReviewSubmission) => void,
  hasExistingReview: boolean 
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0 && comment.trim()) {
      onSubmit({ rating, comment });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96 relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <X />
        </button>
        
        {hasExistingReview ? (
          <p className="text-red-500">You have already submitted a review for this product.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
            
            <div className="flex justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className={`text-3xl ${
                    star <= (hoveredRating || rating) 
                      ? 'text-yellow-500' 
                      : 'text-gray-300'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
            
            <textarea 
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review here..."
              className="w-full p-2 border rounded mt-2"
              rows={4}
            />
            
            <button 
              type="submit" 
              disabled={rating === 0 || !comment.trim()}
              className="w-full bg-black text-white p-2 rounded hover:opacity-80 disabled:opacity-50"
            >
              Submit Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// Review Button Component
export const ReviewButton = ({ 
  productId, 
  hasExistingReview = false 
}: { 
  productId: number, 
  hasExistingReview?: boolean 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReviewSubmit = (review: ReviewSubmission) => {
    // Here you would typically send the review to your backend
    console.log('Review submitted:', review);
    // Example of how you might send a review
    // await fetch('/api/reviews', {
    //   method: 'POST',
    //   body: JSON.stringify({ productId, ...review })
    // });
  };

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-black text-white rounded-full p-3 shadow-lg hover:bg-gray-800 group"
        title="Add Review"
      >
        <Star className="w-6 h-6 group-hover:animate-pulse" />
        <span className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black text-white text-xs px-2 py-1 rounded">
          Add a Review
        </span>
      </button>

      <ReviewModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleReviewSubmit}
        hasExistingReview={hasExistingReview}
      />
    </>
  );
};

export default ReviewButton;