import { useRef, useEffect, useState } from "react";
import MainPageComp from "./MainPageStyle";

const MainScrollAni = () => {
  // 반짝이는 효과
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

  // 타이핑 효과
  const txt = `신입 프론트 개발자 포트폴리오`;
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
      setCount(Count + 1); // 개수 만큼 체크
    }, 100);
    if (Count === txt.length) {
      // Count를 따로 두지 않고 Text.length 체크도 가능
      clearInterval(interval); // 문자열 체크를 통해 setInterval 해제
      // 로딩이 끝나면 페이지 아래로 스크롤
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight, // 현재 보이는 화면의 높이만큼 스크롤합니다.
          behavior: "smooth", // 부드러운 스크롤 효과 적용
        });
      }, 5000); // 5초 후에 스크롤 이동합니다.
    }
    return () => clearInterval(interval); // 언마운트시 setInterval 해제
  });

  useEffect(() => {}, []);

  return (
    <MainPageComp>
      <div className="container">
        <div className="text">
          <h2>{Text}</h2>
        </div>
        <div className="text2">
          <h3>황선영's 포트폴리오 소개 사이트에 오신걸 환영합니다 :)</h3>
          <p>제가 궁금하시면 아래로 스크롤 해보세요!</p>
          <span>⇣</span>
          <div className="loadingBar"></div>
        </div>
      </div>
    </MainPageComp>
  );
};

export default MainScrollAni;
