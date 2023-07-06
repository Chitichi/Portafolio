import { useSpring, animated } from 'react-spring';

const AnimatedTitle = ({ text }) => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  return (
    <animated.h1 style={styles}>
      {text}
    </animated.h1>
  );
};

export default AnimatedTitle;
