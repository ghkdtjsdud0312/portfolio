import { useRef, useEffect, useState } from "react";
import MainPageComp from "./MainPageStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const MainScrollAni = ({ active }) => {
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
    const observerRef = observer.current;
    const divs = document.querySelectorAll(".container > div");
    divs.forEach((div) => observerRef.observe(div));

    return () => {
      divs.forEach((div) => observerRef.unobserve(div));
    };
  }, []);

  // 타이핑 효과
  const txt = `PORTFOLIO`;
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
    }
    return () => clearInterval(interval); // 언마운트시 setInterval 해제
  });

  useEffect(() => {}, []);

  return (
    <MainPageComp id="main" active={active}>
      <div className="container">
        <div className="mainText">
          <div className="text">
            <h2>{Text}</h2>
          </div>
          <div className="text2">
            <h3>FE 개발자를 꿈꾸는 황선영입니다 :)</h3>
          </div>
          <div className="button">
            <a
              href="https://www.notion.so/0a0a0b1ff67c4b33b18cc2777059b1b9"
              target="_blank"
              rel="noreferrer noopener">
              <button>
                이력서 바로보기{" "}
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ marginLeft: "10px" }}
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </MainPageComp>
  );
};

export default MainScrollAni;
