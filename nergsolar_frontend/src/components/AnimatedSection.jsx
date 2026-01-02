import { useEffect, useRef } from 'react';

const useScrollAnimation = (threshold = 0.1) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return elementRef;
};

export default function AnimatedSection({ 
  children, 
  delay = 0, 
  className = '',
  threshold = 0.1 
}) {
  const ref = useScrollAnimation(threshold);
  
  return (
    <div
      ref={ref}
      className={`scroll-animate ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}