import React from 'react';
import './AllItemImages.css';

const images = [
  'https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=SYbVJeAlDIvH55vuBfNQvUEWkxSXn5XGAc7IKdewwGs=',
  'https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=SYbVJeAlDIvH55vuBfNQvUEWkxSXn5XGAc7IKdewwGs=',
  'https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=SYbVJeAlDIvH55vuBfNQvUEWkxSXn5XGAc7IKdewwGs=',
  'https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=SYbVJeAlDIvH55vuBfNQvUEWkxSXn5XGAc7IKdewwGs=',
  'https://media.istockphoto.com/id/471188329/photo/plain-red-tee-shirt-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=SYbVJeAlDIvH55vuBfNQvUEWkxSXn5XGAc7IKdewwGs=',
];

const AllItemImages = () => {
  return (
    <div className="image-gallery">
      {images.map((src, index) => (
        <div className="image-card" key={index}>
          <img src={src} alt={`Item ${index + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default AllItemImages;
