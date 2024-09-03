import { useSpring, animated } from '@react-spring/web';
import coinImage from '../assets/imgs/coin.gif';

const FallingCoin = ({ left, top, onRest, size }) => {
  const [styles] = useSpring(() => ({
    from: { top: 0 },
    to: { top },
    config: { tension: 80, friction: 20 },
    onRest: onRest,
  }));

  return (
    <animated.img
      src={coinImage}
      alt="coin"
      style={{
        ...styles,
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}px`,
      }}
    />
  );
};

export default FallingCoin;
