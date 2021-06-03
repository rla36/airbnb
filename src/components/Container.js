import { useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "./header/Header";
import { useHeaderDispatch, useHeaderState } from "./HeaderProvider";

const Container = () => {
  const targetRef = useRef();
  const isFirst = useRef(true);
  const { showCorona } = useHeaderState();
  const headerDispatch = useHeaderDispatch();
  const onIntersect = ([{ intersectionRatio }]) => {
    if (intersectionRatio === 0) {
      isFirst.current = false;
      headerDispatch({ type: "INTERSECT_DOWN" });
    } else {
      if (isFirst.current) return;
      headerDispatch({ type: "INTERSECT_UP" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      threshold: 1.0,
    });
    if (!targetRef) {
      return;
    }
    observer.observe(targetRef.current);
    return () => {
      observer.unobserve(targetRef.current);
    };
  }, [targetRef]);
  return (
    <>
      {showCorona && (
        <Corona>
          에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
        </Corona>
      )}
      <ContainerWrapper>
        <div ref={targetRef}></div>
        <Header />
      </ContainerWrapper>
    </>
  );
};

const ContainerWrapper = styled.div`
  position: relative;
`;
const Corona = styled.div`
  background: #292833;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default Container;
