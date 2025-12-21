import React from "react";
import styled from "styled-components";

const GlitchButton = () => {
  return (
    <Wrapper>
      <button
        className="glitch-btn"
        type="button"
        onClick={() =>
          document
            .getElementById("company-logos")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore Euphoria
      </button>
    </Wrapper>
  );
};

export default GlitchButton;

const Wrapper = styled.div`
  .glitch-btn,
  .glitch-btn::after {
    width: 300px;
    height: 64px;
    font-size: 19px;
    text-align: center;
    font-family: "Blender Pro", sans-serif;
    font-weight: 100;
    background: linear-gradient(45deg, transparent 5%, #fd3649 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    box-shadow: 6px 0 0 #00e6f6;
    position: relative;
    cursor: pointer;
  }

  .glitch-btn::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);

    content: "Explore Euphoria";
    display: block;
    position: absolute;
    inset: 0;

    background: linear-gradient(
      45deg,
      transparent 3%,
      #00e6f6 3%,
      #00e6f6 5%,
      #fd3649 5%
    );

    text-shadow:
      -3px -3px 0 #f8f005,
       3px  3px 0 #00e6f6;

    clip-path: var(--slice-0);

    animation: glitch 1.2s steps(2, end) infinite;
  }

  @keyframes glitch {
    0%   { clip-path: var(--slice-1); transform: translate(-20px, -10px); }
    10%  { clip-path: var(--slice-3); transform: translate(10px, 10px); }
    20%  { clip-path: var(--slice-1); transform: translate(-10px, 10px); }
    30%  { clip-path: var(--slice-3); transform: translate(0, 5px); }
    40%  { clip-path: var(--slice-2); transform: translate(-5px, 0); }
    50%  { clip-path: var(--slice-3); transform: translate(5px, 0); }
    60%  { clip-path: var(--slice-4); transform: translate(5px, 10px); }
    70%  { clip-path: var(--slice-2); transform: translate(-10px, 10px); }
    80%  { clip-path: var(--slice-5); transform: translate(20px, -10px); }
    90%  { clip-path: var(--slice-1); transform: translate(-10px, 0); }
    100% { clip-path: var(--slice-1); transform: translate(0); }
  }
`;
