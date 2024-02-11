import { useRef, useEffect } from "react";
import MainPageComp from "./MainPageStyle";

const MainScrollAni = () => {
  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          target.style.opacity = 1; // 화면에 나오면 효과 나오게
        } else {
          target.style.opacity = 0; // 화면에 안 나올 시 효과 안 나오게
        }
      });
    })
  );

  useEffect(() => {
    const divs = document.querySelectorAll(".container > div");
    divs.forEach((div) => observer.current.observe(div));

    return () => {
      divs.forEach((div) => observer.current.unobserve(div));
    };
  }, []);

  return (
    <MainPageComp>
      <div className="container">
        <div>
          <h1>
            아래를 스크롤 하세요.
            <br />
            V
            <br />V
          </h1>
        </div>
        <div>
          <h1>2번째 페이지</h1>
        </div>
        <div>
          <h1>3번째 페이지</h1>
        </div>
        <div>
          <h1>4번째 페이지</h1>
        </div>
      </div>
    </MainPageComp>
  );
};

export default MainScrollAni;
