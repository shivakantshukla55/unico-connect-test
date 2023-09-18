import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

const AnimatedComponent = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const {
    ref: elRef,
    inView,
    entry,
  } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setAnimationComplete(inView);
  }, [inView]);

  //   const startAnimation = () => {
  //     setAnimationComplete(true);
  //   };

  return (
    <div ref={elRef}>
      <AnimatedText>
        {animationComplete ? (
          <h2>
            <span className="mr">The</span>
            <StrikeThrough className="mr">Unique</StrikeThrough>
            <SlidingText className="mr">Unico</SlidingText>
            <span>Approach</span>
          </h2>
        ) : (
          <h2>
            <span className="mr">The</span> <span className="mr">Unique</span>{" "}
            <span className="mr">Approach</span>
          </h2>
        )}
      </AnimatedText>
      {/* <div>
        <button onClick={startAnimation}>Start Animation</button>
      </div> */}
    </div>
  );
};

export default AnimatedComponent;

const strikeThrough = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AnimatedText = styled.div`
  display: inline-block;

  h2 {
    color: #1a8ef7;
    font-size: 30px;
    font-weight: 600;
    line-height: 36px;

    @media only screen and (max-width: 768px) {
      font-size: 18px;
    }
  }

  .mr {
    margin-right: 14px;
  }
`;

const StrikeThrough = styled.div`
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    z-index: 9;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #1a8ef7;
    animation: ${strikeThrough} 0.5s ease-in-out forwards;
  }
`;

const SlidingText = styled.div`
  display: inline-block;
  transform: translateX(-100%);
  opacity: 0;
  animation: ${slideIn} 0.5s ease-in-out 0.5s forwards;
`;
