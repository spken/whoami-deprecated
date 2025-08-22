import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const isClickable = !!(target.tagName === 'BUTTON' || 
                         target.tagName === 'A' || 
                         target.classList.contains('nav-link') ||
                         target.classList.contains('contact-link') ||
                         target.classList.contains('github-link') ||
                         target.classList.contains('hero-cta') ||
                         target.classList.contains('skill-card') ||
                         target.style.cursor === 'pointer' ||
                         window.getComputedStyle(target).cursor === 'pointer' ||
                         target.closest('button') ||
                         target.closest('a') ||
                         target.closest('.nav-link') ||
                         target.closest('.contact-link') ||
                         target.closest('.github-link') ||
                         target.closest('.hero-cta') ||
                         target.closest('.skill-card'));
      
      setIsHovering(isClickable);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 300);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    document.addEventListener('mousemove', updateCursorPosition, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, .nav-link, .contact-link, .github-link, .hero-cta, .skill-card, [role="button"], input, textarea'
      );
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
