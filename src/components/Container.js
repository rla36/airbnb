import { useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "./header/Header";
import { useHeaderDispatch } from "./HeaderProvider";

const Container = () => {
  const targetRef = useRef();
  const isFirst = useRef(true);
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
    <ContainerWrapper>
      <div ref={targetRef}></div>
      <Header />
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div`
  position: relative;
`;

export default Container;
