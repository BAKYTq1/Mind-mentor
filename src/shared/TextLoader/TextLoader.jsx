import React from 'react';
import './LoadingDots.css'; 

const LoadingDots = () => {
  return (
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
      <span style={dotStyle(0)} />
      <span style={dotStyle(0.2)} />
      <span style={dotStyle(0.4)} />
    </div>
  );
};

const dotStyle = (delay) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: '#000',
  animation: `pulse 1.2s infinite`,
  animationDelay: `${delay}s`,
});

export default LoadingDots;

// Добавь этот CSS в глобальные стили или в <style>:

/*
@keyframes pulse {
  0%, 80%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  40% {
    opacity: 1;
    transform: scale(1.3);
  }
}
*/
