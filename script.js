const htmlLectures = [
  {
    id: "html-01-1",
    category: "1. 글자 관련 태그",
    title: "1-1. 제목 태그 (Heading)",
    theory: `
      <p>웹 문서의 제목이나 소제목을 나타낼 때 사용합니다.</p>
      <h3>제목 태그 (Heading)</h3>
      <ul>
        <li><code>&lt;h1&gt;</code>부터 <code>&lt;h6&gt;</code>까지 사용 가능합니다.</li>
        <li>숫자가 작을수록 폰트 크기가 큽니다. (h1이 가장 큼)</li>
        <li>검색 엔진이 문서의 구조를 파악할 때 중요한 역할을 합니다. 보통 한 페이지에 <code>&lt;h1&gt;</code>은 한 번만 쓰는 것을 권장합니다.</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>1-1. 제목 태그</title>
</head>
<body>
    <h1>h1태그입니다.</h1>
    <h2>h2태그입니다.</h2>
    <h3>h3태그입니다.</h3>
    <h4>h4태그입니다.</h4>
    <h5>h5태그입니다.</h5>
    <h6>h6태그입니다.</h6>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 가장 큰 제목 만들기</h3>
            <p>문서에 가장 크고 중요한 제목을 작성해 보세요.</p>
            <ul>
              <li><code>&lt;h1&gt;</code> 태그를 사용하여 "나의 첫 웹페이지" 라고 적어보세요.</li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 1 정답</title>
</head>
<body>
    <h1>나의 첫 웹페이지</h1>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<h1>나의 첫 웹페이지</h1>')) return { success: true, message: "아주 좋습니다! 가장 큰 제목이 생겼네요." };
          return { success: false, message: "<h1>나의 첫 웹페이지</h1> 형식으로 작성되어 있는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 소제목 추가하기</h3>
            <p>방금 만든 제목 밑에 조금 더 작은 소제목을 달아주세요.</p>
            <ul>
              <li><code>&lt;h1&gt;나의 첫 웹페이지&lt;/h1&gt;</code>를 유지하세요.</li>
              <li>그 바로 밑에 <code>&lt;h2&gt;</code> 태그를 사용하여 "내가 좋아하는 것들" 이라고 적어보세요.</li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 2 정답</title>
</head>
<body>
    <h1>나의 첫 웹페이지</h1>
    <h2>내가 좋아하는 것들</h2>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<h1>나의 첫 웹페이지</h1>') && code.includes('<h2>내가 좋아하는 것들</h2>')) return { success: true, message: "훌륭합니다! h1과 h2의 쌍이 잘 어울리네요." };
          return { success: false, message: "h1 태그와 h2 태그가 모두 정확한 텍스트로 적혔는지 점검하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 세 번째 단락 제목</h3>
            <p>h3 태그도 마저 사용해 보겠습니다.</p>
            <ul>
              <li>기존 코드를 유지하고, 그 아래에 <code>&lt;h3&gt;</code> 태그로 "과일" 이라고 적어주세요.</li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 3 정답</title>
</head>
<body>
    <h1>나의 첫 웹페이지</h1>
    <h2>내가 좋아하는 것들</h2>
    <h3>과일</h3>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<h3>과일</h3>')) return { success: true, message: "딩동댕! h3까지 잘 작성하셨습니다." };
          return { success: false, message: "코드 어딘가에 <h3>과일</h3> 문구가 들어있어야 합니다." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: h4 ~ h6 태그</h3>
            <p>더 작은 제목들도 한 번씩 만들어봅시다.</p>
            <ul>
              <li>에디터를 모두 지우고 새롭게 작성합니다.</li>
              <li><code>&lt;h4&gt;사과&lt;/h4&gt;</code></li>
              <li><code>&lt;h5&gt;바나나&lt;/h5&gt;</code></li>
              <li><code>&lt;h6&gt;딸기&lt;/h6&gt;</code></li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 4 정답</title>
</head>
<body>
    <h4>사과</h4>
    <h5>바나나</h5>
    <h6>딸기</h6>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<h4>사과</h4>') && code.includes('<h5>바나나</h5>') && code.includes('<h6>딸기</h6>')) return { success: true, message: "가장 작은 폰트 3가지까지 사용해보셨습니다." };
          return { success: false, message: "h4(사과), h5(바나나), h6(딸기) 가 누락된 것이 없는지 살피세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 종합 실습</h3>
            <p>지금까지 배운 것을 총동원해 자유롭게 구조를 짭니다.</p>
            <ul>
              <li><code>h1</code> 태그로 메인 제목을 자유롭게 하나 적으세요.</li>
              <li>바로 밑에 <code>h3</code> 태그로 부제목을 자유롭게 적어보세요. (h1과 h3 둘 다 존재해야 성공!)</li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 5 종합 정답</title>
</head>
<body>
    <h1>제가 좋아하는 노래</h1>
    <h3>아이유 - 좋은 날</h3>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<h1') && code.includes('<h3')) return { success: true, message: "대단합니다! 제목 태그의 기본기를 완벽하게 다졌습니다. 🎯" };
          return { success: false, message: "화면에 최소한 1개의 h1 태그와 1개의 h3 태그가 보여야 합니다!" };
        }
      }
    ]
  },
  {
    id: "html-01-2",
    category: "1. 글자 관련 태그",
    title: "1-2. 문단 관련 태그",
    theory: `
      <h3>문단 관련 태그</h3>
      <ul>
        <li><code>&lt;br&gt;</code>: 줄바꿈 처리를 합니다.</li>
        <li><code>&lt;hr&gt;</code>: 수평선을 긋습니다.</li>
        <li><code>&lt;p&gt;</code>: 문단을 나눕니다. 소스 상의 줄바꿈과 여러 개의 띄어쓰기는 한 칸으로만 인식합니다.</li>
        <li><code>&lt;pre&gt;</code>: 소스의 띄어쓰기, 줄바꿈을 완벽히 그대로 화면에 출력합니다.</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>1-2. 문단 관련 태그</title>
</head>
<body>
    <h3>문단을 나누는 태그</h3>
    <p>문단 영역을 나누는 태그로는 p태그와 pre태그가 있다.
        p태그는 문단영역을 나누는 태그이지만 한 개의 공백만 표시하며 줄 바꿈 입력을 별도의
        태그로 지정해 주며 pre태그는 여러 칸 띄우기 혹은 줄 바꿈 등을 포함하여 내용 그대로 표현하는
        태그이다.</p>
    <hr>
    <pre>문단 영역을 나누는 태그로는 p태그와 pre태그가 있다.
    p태그는 문단영역을 나누는 태그이지만 한 개의 공백만 표시하며 줄 바꿈 입력을 별도의
    태그로 지정해 주며 pre태그는 여러 칸 띄우기 혹은 줄 바꿈 등을 포함하여 내용 그대로 표현하는
    태그이다.</pre>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 문단 만들기</h3>
            <p>에디터 코드를 지우고, 간단한 문단을 작성해 보세요.</p>
            <ul>
              <li><code>&lt;p&gt;</code> 태그를 사용하여 "안녕하세요, 제 소개를 시작하겠습니다." 라고 적어보세요.</li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 1 정답</title>
</head>
<body>
    <p>안녕하세요, 제 소개를 시작하겠습니다.</p>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<p>안녕하세요, 제 소개를 시작하겠습니다.</p>')) return { success: true, message: "좋습니다! p 태그로 첫 문단을 멋지게 시작하셨습니다." };
          return { success: false, message: "<p>안녕하세요, 제 소개를 시작하겠습니다.</p> 라고 정확히 입력되었는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 줄바꿈 하기</h3>
            <p>p 태그 안에서 줄을 바꿔볼 차례입니다. HTML은 소스코드의 엔터를 무시합니다.</p>
            <ul>
              <li>기존 문장 뒤에 이어서 작성합니다.</li>
              <li><code>&lt;br&gt;</code> 태그를 한 번 넣어 줄을 바꿉니다.</li>
              <li>줄을 바꾼 뒤 "저는 웹 개발을 공부하고 있습니다." 라고 적어주세요.</li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 2 정답</title>
</head>
<body>
    <p>안녕하세요, 제 소개를 시작하겠습니다.<br>저는 웹 개발을 공부하고 있습니다.</p>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<br>') && code.includes('저는 웹 개발을 공부하고 있습니다.')) return { success: true, message: "br 태그의 역할을 확인하셨네요! 줄이 잘 바뀌었습니다." };
          return { success: false, message: "br 태그를 사용해 줄을 바꾸고 제시된 문장을 올바르게 덧붙이세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 수평선 그리기</h3>
            <p>내용을 시각적으로 분리하기 위해 선을 하나 그어봅시다.</p>
            <ul>
              <li>기존 <code>&lt;p&gt;</code> 태그 바깥, 바로 아랫줄에 작성합니다.</li>
              <li><code>&lt;hr&gt;</code> 태그를 사용하여 수평선을 그어주세요.</li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 3 정답</title>
</head>
<body>
    <p>안녕하세요, 제 소개를 시작하겠습니다.<br>저는 웹 개발을 공부하고 있습니다.</p>
    <hr>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<p>') && code.includes('<hr>')) return { success: true, message: "완벽합니다! 구역을 나누는 hr 태그가 잘 들어갔습니다." };
          return { success: false, message: "p 태그 영역 아래에 <hr> 태그를 추가했는지 확인해보세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 있는 그대로 출력하기</h3>
            <p>띄어쓰기나 엔터를 소스코드 그대로 보여주고 싶을 때가 있습니다.</p>
            <ul>
              <li><code>&lt;hr&gt;</code> 태그 바로 밑에 새롭게 작성합니다.</li>
              <li><code>&lt;pre&gt;</code> 태그를 만드세요.</li>
              <li>태그 내부에 자유롭게 여러 줄을 엔터키를 쳐서 띄우고 "이곳은       자유로운 공간입니다." 라고 띄어쓰기를 많이 해서 적어보세요. (텍스트 조건: '이곳은' 과 '자유로운')</li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 4 정답</title>
</head>
<body>
    <p>안녕하세요, 제 소개를 시작하겠습니다.<br>저는 웹 개발을 공부하고 있습니다.</p>
    <hr>
    <pre>
이곳은       자유로운
공간입니다.
    </pre>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<pre>') && code.includes('이곳은') && code.includes('자유로운')) return { success: true, message: "pre 태그 안에서는 에디터의 공백이 그대로 나타나는 것을 보셨나요?" };
          return { success: false, message: "pre 태그를 사용하고, 그 안에 '이곳은' 과 '자유로운' 이라는 단어가 들어가게 작성하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 자기소개 글 쓰기 종합</h3>
            <p>다시 에디터를 비우고, 배운 것들을 합쳐 나만의 프로필을 만들어 보세요!</p>
            <ul>
              <li>1. 첫 번째 <code>&lt;p&gt;</code> 태그: 이름 (예: 홍길동입니다.)</li>
              <li>2. 수평선(<code>&lt;hr&gt;</code>) 그리기</li>
              <li>3. 두 번째 <code>&lt;p&gt;</code> 태그: 아무 내용이나 엔터 없이 길게 적고, 중간에 <code>&lt;br&gt;</code>을 하나 넣어보세요.</li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 5 정답</title>
</head>
<body>
    <p>홍길동입니다.</p>
    <hr>
    <p>HTML 기초를 배우는 중입니다.<br>생각보다 재미있네요!</p>
</body>
</html>`,
        validation: function(code) {
          if ((code.match(/<p>/g) || []).length >= 2 && code.includes('<hr>') && code.includes('<br>')) return { success: true, message: "대단합니다! p, br, hr 태그를 마스터하셨습니다. 🎯" };
          return { success: false, message: "최소 2개의 p 태그, 1개의 hr 태그, 1개의 br 태그가 사용되어야 합니다." };
        }
      }
    ]
  },
  {
    id: "html-01-3",
    category: "1. 글자 관련 태그",
    title: "1-3. 텍스트 꾸미기 태그",
    theory: `
      <h3>텍스트 꾸미기 태그</h3>
      <ul>
        <li><code>&lt;strong&gt;, &lt;b&gt;</code>: 글자를 굵게 (strong은 강조 의미까지 포함)</li>
        <li><code>&lt;em&gt;, &lt;i&gt;</code>: 글자를 기울임꼴로</li>
        <li><code>&lt;mark&gt;</code>: 형광펜(하이라이트) 효과</li>
        <li><code>&lt;u&gt;, &lt;s&gt;</code>: 각각 밑줄, 취소선 효과</li>
        <li><code>&lt;sub&gt;, &lt;sup&gt;</code>: 아래첨자 / 위첨자 표시</li>
        <li><code>&lt;blockquote cite="..."&gt;</code>: 인용구를 구분하여 나타냄</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>1-3. 텍스트 꾸미기 태그</title>
</head>
<body>
    <h3>그 밖에 텍스트를 다루는 태그들 </h3>
    일반글꼴<br>
    <strong>글자를 굵게 표시하는 태그</strong><br>
    <b>글자를 굵게 표시하는 태그</b><br>
    <em>글자를 기울이는 태그</em><br>
    <i>글자를 기울이는 태그</i><br>
    <mark>형광펜 효과를 나타내는 태그</mark><br>
    <u>글자에 밑줄을 긋는 태그</u><br>
    <s>글자에 취소선을 넣는 태그이다.</s><br>
    <small>글자를 작게 표시하는 태그</small><br>
    기본 글자에 <sub>아래첨자</sub>를 나타내는 태그와 <sup>윗첨자</sup>를 나타내는 태그이다.<br>
    <hr>
    <abbr title="Internet of Things">IoT</abbr>란 각종 사물에 센서와
    통신 기능을 내장해 인터넷에 연결하는 기술이다.
    <br>
    <blockquote cite="http://www.naver.com">인용 문구를 나타내는 태그</blockquote>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 굵은 글씨로 강조하기</h3>
            <p>다양한 방식으로 텍스트를 꾸며볼 차례입니다. 문장을 적고 특징을 부각시켜보세요.</p>
            <ul>
              <li>1. 아무 태그 없이 "중요한 사실 하나 알려드릴게요!" 라고 적습니다.</li>
              <li>2. "중요한" 이라는 단어를 <code>&lt;strong&gt;</code> 태그로 감싸서 아주 굵게 만듭니다.</li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 1 정답</title>
</head>
<body>
    <strong>중요한</strong> 사실 하나 알려드릴게요!
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<strong>중요한</strong>') || code.includes('<strong>중요한') && code.includes('</strong>')) return { success: true, message: "완벽해요! strong은 시각적인 굵기뿐 아니라 컴퓨터에게도 이 단어가 중요하다고 알려줍니다." };
          return { success: false, message: "단어 '중요한'이 strong 태그로 정확히 감싸져 있는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 형광펜(하이라이트) 칠하기</h3>
            <p>책에 밑줄을 긋는 것처럼 눈에 확 띄게 만들어봅시다.</p>
            <ul>
              <li>이전 코드를 모두 지우세요.</li>
              <li>"핵심 키워드는 형광펜으로" 라고 쭉 이어 적습니다.</li>
              <li>"형광펜" 단어를 <code>&lt;mark&gt;</code> 태그로 감싸주세요. 노란 배경색이 생길 것입니다.</li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 2 정답</title>
</head>
<body>
    핵심 키워드는 <mark>형광펜</mark>으로
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<mark>형광펜</mark>')) return { success: true, message: "훌륭합니다! mark 태그로 예쁘게 하이라이트가 처리되었습니다." };
          return { success: false, message: "mark 태그를 사용해 '형광펜' 단어를 강조했는지 다시 한번 확인해 주세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 이탤릭체(기울임) 적용하기</h3>
            <p>특정 문구를 비스듬히 눕히고 싶을 때 사용하는 태그입니다.</p>
            <ul>
              <li>이전 코드를 모두 지웁니다.</li>
              <li>"기울어진 생각들" 이라고 글을 적습니다.</li>
              <li>"기울어진" 이라는 단어를 <code>&lt;em&gt;</code> 태그로 감싸주세요.</li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 3 정답</title>
</head>
<body>
    <em>기울어진</em> 생각들
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<em>기울어진</em>')) return { success: true, message: "맞았습니다! em 태그(Emphasis)는 기울임과 함께 가벼운 강조의 의미를 지닙니다." };
          return { success: false, message: "em 태그 안에 '기울어진' 단어가 잘 들어갔는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 취소선과 밑줄 사용하기</h3>
            <p>온라인 쇼핑몰에서 정가와 할인가를 쓸 때 자주 볼 수 있습니다.</p>
            <ul>
              <li>코드를 비우고, "정가 10000원, 할인가 8000원"이라고 적어봅니다.</li>
              <li>'10000원'을 <code>&lt;s&gt;</code> 태그로 묶어서 가운뎃줄(취소선)을 그어주세요.</li>
              <li>'8000원'을 <code>&lt;u&gt;</code> 태그로 묶어서 밑줄을 그어주세요.</li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 4 정답</title>
</head>
<body>
    정가 <s>10000원</s>, 할인가 <u>8000원</u>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<s>10000원</s>') && code.includes('<u>8000원</u>')) return { success: true, message: "쇼핑몰 UI를 직접 만들어보셨군요! 취소선과 밑줄 태그를 제대로 쓰셨습니다." };
          return { success: false, message: "s 태그 안에 10000원, u 태그 안에 8000원을 정확히 삽입하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 인용구(Blockquote) 추가하기</h3>
            <p>다른 사람의 유명한 말거리나 글을 인용할 때 구별해 주는 태그입니다.</p>
            <ul>
              <li>에디터를 모두 지웁니다.</li>
              <li><code>&lt;blockquote cite="출처URL"&gt;</code> 태그를 작성합니다.</li>
              <li>cite 속성에 <code>https://example.com</code> 이라고 적습니다.</li>
              <li>태그 사이에는 명언 "배움에는 끝이 없다" 라고 적습니다.</li>
            </ul>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 5 종합 정답</title>
</head>
<body>
    <blockquote cite="https://example.com">배움에는 끝이 없다</blockquote>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<blockquote') && code.includes('cite="https://example.com"') && code.includes('배움에는 끝이 없다')) return { success: true, message: "대단합니다! 들여쓰기도 자연스럽게 적용되는 blockquote 태그 사용법을 숙지하셨습니다. 🎯" };
          return { success: false, message: "blockquote 태그에 cite 속성과 정해진 문구가 잘 들어갔는지 살펴주세요." };
        }
      }
    ]
  },
  {
    id: "html-01-4",
    category: "1. 글자 관련 태그",
    title: "1-4. 글자 관련 태그 응용",
    theory: `
      <div class="mission-box">
        <h3>🎯 태그 중첩 훈련</h3>
        <p>하나의 텍스트에 여러 가지 태그의 효과를 동시에 적용하고 싶다면 <b>태그를 중첩</b>해서 사용할 수 있습니다.</p>
        <p>예시: <code>&lt;b&gt;&lt;i&gt;굵고 기울임&lt;/i&gt;&lt;/b&gt;</code></p>
        <p>주의: 나중에 열린 태그가 먼저 닫혀야 합니다. (교차 금지)</p>
      </div>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>1-4. 글자 관련 태그 응용</title>
</head>
<body>
    <h1>글자 관련 태그 응용</h1>
    <p>태그들은 <b><i>중첩해서</i></b> <u>사용이</u> <s>가능합니다.</s></p>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 굵고 강조하기</h3>
            <p>태그를 중첩해서 "중요하고 강조된 문구"라는 텍스트에 굵게(<code>strong</code>)와 기울임(<code>em</code>) 효과를 동시에 줘보세요.</p>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 1 정답</title>
</head>
<body>
    <strong><em>중요하고 강조된 문구</em></strong>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<strong><em>') && code.includes('중요하고 강조된 문구') || code.includes('<em><strong>')) return { success: true, message: "태그 중첩은 언제나 즐겁죠!" };
          return { success: false, message: "strong과 em 태그가 모두 문구를 감싸고 있는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 밑줄과 형광펜</h3>
            <p>"밑줄 친 강조 키워드"라는 글자에 밑줄(<code>u</code>)과 형광펜(<code>mark</code>) 효과를 중첩하세요.</p>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 2 정답</title>
</head>
<body>
    <u><mark>밑줄 친 강조 키워드</mark></u>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<u><mark>') || code.includes('<mark><u>')) return { success: true, message: "시각적으로 아주 눈에 띄게 변했네요!" };
          return { success: false, message: "u와 mark 태그를 정확히 중첩했는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 작아진 취소선</h3>
            <p>"작아진 취소 문구"라는 텍스트에 취소선(<code>s</code>)과 작게(<code>small</code>) 효과를 적용하세요.</p>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 3 정답</title>
</head>
<body>
    <s><small>작아진 취소 문구</small></s>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<s><small>') || code.includes('<small><s>')) return { success: true, message: "성공입니다! 작고 소중한(?) 취소선이 생겼습니다." };
          return { success: false, message: "s와 small 태그가 모두 사용되었는지 확인하십시오." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 문단 안의 중첩</h3>
            <p>문단 태그(<code>p</code>) 안에 "절대 포기하지 마세요!"라는 문장을 쓰고 "포기하지 마세요!" 부분만 굵게(<code>strong</code>)와 밑줄(<code>u</code>)을 중첩하세요.</p>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 4 정답</title>
</head>
<body>
    <p>절대 <strong><u>포기하지 마세요!</u></strong></p>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<p>') && code.includes('<strong><u>')) return { success: true, message: "문단 안에서도 중첩은 아주 잘 동작합니다." };
          return { success: false, message: "p 태그 안에 strong과 u가 정확히 들어갔는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 제목 강조</h3>
            <p>제목 태그(<code>h3</code>)로 "마지막 제목 강조"를 만들고 그 전체를 형광펜(<code>mark</code>)으로 칠해보세요.</p>
          </div>
        `,
        solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>미션 5 정답</title>
</head>
<body>
    <h3><mark>마지막 제목 강조</mark></h3>
</body>
</html>`,
        validation: function(code) {
          if (code.includes('<h3><mark>') || code.includes('<mark><h3>')) return { success: true, message: "제목에도 효과를 줄 수 있다는 점, 잊지 마세요! 🎯" };
          return { success: false, message: "h3와 mark 태그가 정확히 중첩되었는지 점검하세요." };
        }
      }
    ]
  },
  {
    id: "html-02-1",
    category: "2. 목록 관련 태그",
    title: "2-1. 순서 없는 목록 (Unordered List)",
    theory: `
      <p>항목들을 나열할 때 사용하는 태그입니다.</p>
      <h3>순서 없는 목록 (Unordered List)</h3>
      <ul>
        <li><code>&lt;ul&gt;</code>: 순서 기호 없이 기호(● 등)로 나열되는 목록 덩어리를 만듭니다.</li>
        <li><code>&lt;li&gt;</code>: <code>&lt;ul&gt;</code> 안에 들어가는 각각의 항목입니다.</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>2-1. 순서 없는 목록</title>
</head>
<body>
    <h1>순서 없는 목록 태그</h1>
    <h3>화면 구현 수업 내용</h3>
    <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>JQuery</li>
    </ul>

    <h3>중첩된 순서 없는 목록</h3>
    <ul>
        <li>테스트
            <ul>
                <li>test</li>
            </ul>
        </li>
    </ul>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 간단한 메뉴 목록</h3>
            <p>순서 없는 목록(<code>ul</code>)을 사용하여 '치킨'과 '피자'를 항목으로 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<ul>
    <li>치킨</li>
    <li>피자</li>
</ul>`,
        validation: function(code) {
          if (code.includes('<ul>') && code.includes('<li>치킨</li>') && code.includes('<li>피자</li>')) return { success: true, message: "목록 만들기의 기초 성공!" };
          return { success: false, message: "ul과 li 태그를 사용했는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 운동 목록 만들기</h3>
            <p>항목을 3개로 늘려봅시다. '축구', '야구', '농구'를 목록으로 만드세요.</p>
          </div>
        `,
        solutionCode: `<ul>
    <li>축구</li>
    <li>야구</li>
    <li>농구</li>
</ul>`,
        validation: function(code) {
          if ((code.match(/<li>/g) || []).length >= 3) return { success: true, message: "항목이 늘어나도 문제없네요!" };
          return { success: false, message: "li 태그를 3개 이상 사용하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 목록 중첩하기</h3>
            <p>목록 안에 또 다른 목록을 넣을 수 있습니다. '과일' 항목 안에 '사과'를 서브 항목으로 넣어보세요.</p>
          </div>
        `,
        solutionCode: `<ul>
    <li>과일
        <ul>
            <li>사과</li>
        </ul>
    </li>
</ul>`,
        validation: function(code) {
          if ((code.match(/<ul>/g) || []).length >= 2) return { success: true, message: "중첩된 목록 구조를 완성하셨습니다!" };
          return { success: false, message: "ul 태그 안에 또 다른 ul 태그가 들어있는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 문단과 목록의 조합</h3>
            <p>문단 태그(<code>p</code>)로 "나의 계획" 이라고 쓰고, 그 밑에 <code>ul</code>목록으로 "공부하기"를 적으세요.</p>
          </div>
        `,
        solutionCode: `<p>나의 계획</p>
<ul>
    <li>공부하기</li>
</ul>`,
        validation: function(code) {
          if (code.includes('<p>') && code.includes('<ul>')) return { success: true, message: "문단과 목록을 잘 배치하셨습니다." };
          return { success: false, message: "p 태그와 ul 태그가 모두 필요합니다." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 강조된 목록</h3>
            <p>목록 항목(<code>li</code>) 중 "중요 항목"이라는 글자 부분만 굵게(<code>strong</code>) 표시해 보세요.</p>
          </div>
        `,
        solutionCode: `<ul>
    <li>일반 항목</li>
    <li><strong>중요 항목</strong></li>
</ul>`,
        validation: function(code) {
          if (code.includes('<li><strong>중요 항목</strong></li>')) return { success: true, message: "목록 안의 글자도 예쁘게 꾸밀 수 있습니다! 🎯" };
          return { success: false, message: "li 태그 안에 strong 태그를 사용했는지 확인하세요." };
        }
      }
    ]
  },
  {
    id: "html-02-2",
    category: "2. 목록 관련 태그",
    title: "2-2. 순서 있는 목록 (Ordered List)",
    theory: `
      <h3>순서 있는 목록 (Ordered List)</h3>
      <ul>
        <li><code>&lt;ol&gt;</code>: 숫자나 알파벳 등 순서 기호가 붙는 목록입니다.</li>
        <li><code>type="A"</code>: 대문자 알파벳 순서 (a, I, i 등 지정 가능)</li>
        <li><code>start="5"</code>: 시작 번호를 지정합니다 (5번부터 시작).</li>
        <li><code>reversed="reversed"</code>: 항목 번호를 역순으로 매깁니다.</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>2-2. 순서 있는 목록</title>
</head>
<body>
    <h1>순서 있는 목록 태그</h1>
    
    <h3>기본 숫자 표기 (1, 2, 3...)</h3>
    <ol>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>JQuery</li>
    </ol>
    
    <hr>
    <h2>속성 변경 연습</h2>
    
    <h3>영문 소문자로 표기 (type="a")</h3>
    <ol type="a">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>JQuery</li>
    </ol>
    
    <h3>영문 대문자로 표기 (type="A")</h3>
    <ol type="A">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>JQuery</li>
    </ol>
    
    <h3>로마 소문자로 표기 (type="i")</h3>
    <ol type="i">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>JQuery</li>
    </ol>
    
    <h3>로마 대문자로 표기 (type="I")</h3>
    <ol type="I">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>JQuery</li>
    </ol>
    
    <h3>시작 값 변경하기 (start="5")</h3>
    <ol type="1" start="5">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>JQuery</li>
    </ol>
    
    <h3>역순으로 항목 표시하기 (reversed="reversed")</h3>
    <ol reversed="reversed">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>JQuery</li>
    </ol>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 단계별 절차 목록</h3>
            <p>순서 있는 목록(<code>ol</code>)을 사용하여 '1단계'와 '2단계'를 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<ol>
    <li>1단계</li>
    <li>2단계</li>
</ol>`,
        validation: function(code) {
          if (code.includes('<ol>') && (code.match(/<li>/g) || []).length >= 2) return { success: true, message: "숫자가 자동으로 붙는 것을 확인하셨나요?" };
          return { success: false, message: "ol 태그를 사용했는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 알파벳 순서 목록</h3>
            <p>속성을 바꿔봅시다. 대문자 알파벳(<code>type="A"</code>) 순서로 'A등급', 'B등급'을 만드세요.</p>
          </div>
        `,
        solutionCode: `<ol type="A">
    <li>A등급</li>
    <li>B등급</li>
</ol>`,
        validation: function(code) {
          if (code.includes('type="A"') || code.includes("type='A'")) return { success: true, message: "다양한 순서 기호를 사용할 수 있습니다." };
          return { success: false, message: "ol 태그에 type=\"A\" 속성을 추가하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 시작 번호 지정</h3>
            <p>시작 번호를 10번(<code>start="10"</code>)으로 지정하여 '10번', '11번'을 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<ol start="10">
    <li>10번</li>
    <li>11번</li>
</ol>`,
        validation: function(code) {
          if (code.includes('start="10"')) return { success: true, message: "원하는 번호부터 시작할 수 있습니다." };
          return { success: false, message: "ol 태그에 start=\"10\" 속성을 추가하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 역순 목록</h3>
            <p>번호를 거꾸로 매겨볼까요? (<code>reversed</code>) '3', '2', '1'이 나오게 해보세요.</p>
          </div>
        `,
        solutionCode: `<ol reversed>
    <li>3</li>
    <li>2</li>
    <li>1</li>
</ol>`,
        validation: function(code) {
          if (code.includes('reversed')) return { success: true, message: "카운트다운 같은 목록에 유용하겠네요!" };
          return { success: false, message: "ol 태그에 reversed 속성을 추가하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 평일 목록 만들기</h3>
            <p>종합 실습입니다. '월'부터 '금'까지 5개의 항목을 <code>ol</code> 태그로 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<ol>
    <li>월</li>
    <li>화</li>
    <li>수</li>
    <li>목</li>
    <li>금</li>
</ol>`,
        validation: function(code) {
          if ((code.match(/<li>/g) || []).length >= 5) return { success: true, message: "순서 있는 목록 마스터! 🎯" };
          return { success: false, message: "li 태그를 5개 이상 사용하세요." };
        }
      }
    ]
  },
  {
    id: "html-02-3",
    category: "2. 목록 관련 태그",
    title: "2-3. 설명 목록 태그",
    theory: `
      <h3>설명 목록 태그</h3>
      <ul>
        <li><code>&lt;dl&gt;</code>: 용어와 그 정의를 나열할 때 씁니다. (Definition List)</li>
        <li><code>&lt;dt&gt;</code>: 용어의 제목이나 핵심 단어</li>
        <li><code>&lt;dd&gt;</code>: 해당 용어에 대한 상세한 설명 (들여쓰기 됨)</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>2-3. 설명 목록 태그</title>
</head>
<body>
    <h1>설명 목록 태그</h1>
    <dl>
        <dt>이곳은 목록의 제목을 적는 곳입니다.</dt>
        <dd>이곳은 목록에 대한 설명을 하는 곳입니다.</dd>
        <dd>또 다른 줄을 작성할 수도 있습니다</dd>
        <dt>다른 제목을 적어 새로운 목록을 만들 수 있습니다.</dt>
        <dd>역시 여러 줄을 작성할 수도 있습니다.</dd>
        <dd>목록 별로 설명에 필요한 행을 다르게 할 수도 있습니다.</dd>
    </dl>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 간단한 용어 사전</h3>
            <p>설명 목록(<code>dl</code>)을 사용하여 '사과'라는 용어(<code>dt</code>)와 '빨간 과일'이라는 설명(<code>dd</code>)을 작성해 보세요.</p>
          </div>
        `,
        solutionCode: `<dl>
    <dt>사과</dt>
    <dd>빨간 과일</dd>
</dl>`,
        validation: function(code) {
          if (code.includes('<dl>') && code.includes('<dt>사과</dt>') && code.includes('<dd>빨간 과일</dd>')) return { success: true, message: "용어 사전의 첫 단추를 잘 꿰셨습니다!" };
          return { success: false, message: "dl, dt, dd 태그를 모두 사용했는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 여러 개의 용어 등록</h3>
            <p>'바나나 - 노란 과일', '포도 - 보라 과일' 이렇게 두 세트의 용어와 설명을 추가해 보세요.</p>
          </div>
        `,
        solutionCode: `<dl>
    <dt>바나나</dt>
    <dd>노란 과일</dd>
    <dt>포도</dt>
    <dd>보라 과일</dd>
</dl>`,
        validation: function(code) {
          if ((code.match(/<dt>/g) || []).length >= 2) return { success: true, message: "목록이 늘어나도 구조는 동일합니다!" };
          return { success: false, message: "dt 태그가 최소 2개 필요합니다." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 한 용어에 여러 설명</h3>
            <p>하나의 용어(<code>dt</code>)에 두 개의 설명(<code>dd</code>)을 달 수도 있습니다. 'HTML'에 대해 '웹의 구조'와 '마크업 언어'라는 두 가지 설명을 달아보세요.</p>
          </div>
        `,
        solutionCode: `<dl>
    <dt>HTML</dt>
    <dd>웹의 구조</dd>
    <dd>마크업 언어</dd>
</dl>`,
        validation: function(code) {
          if ((code.match(/<dd>/g) || []).length >= 2) return { success: true, message: "상세한 설명이 일품이네요!" };
          return { success: false, message: "dd 태그가 2개 이상 필요합니다." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 강조된 용어 제목</h3>
            <p>용어 제목(<code>dt</code>)에만 굵게(<code>strong</code>) 효과를 주어 더욱 돋보이게 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<dl>
    <dt><strong>중요 용어</strong></dt>
    <dd>이 용어는 매우 중요합니다.</dd>
</dl>`,
        validation: function(code) {
          if (code.includes('<dt><strong>')) return { success: true, message: "가독성이 훨씬 좋아졌습니다!" };
          return { success: false, message: "dt 태그 안에 strong 태그를 중첩하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 나의 취미 사전</h3>
            <p>마지막 종합 실습! 내가 좋아하는 취미 1가지를 정해서 <code>dl</code> 구조로 완성해 보세요.</p>
          </div>
        `,
        solutionCode: `<dl>
    <dt>독서</dt>
    <dd>조용한 곳에서 책을 읽는 활동</dd>
</dl>`,
        validation: function(code) {
          if (code.includes('<dl>') && code.includes('<dt>') && code.includes('<dd>')) return { success: true, message: "설명 목록 마스터 완성! 🎯" };
          return { success: false, message: "dl, dt, dd 구조를 지켜서 작성하세요." };
        }
      }
    ]
  },
  {
    id: "html-03-1",
    category: "3. 표 관련 태그",
    title: "3-1. 기본적인 표 만들기",
    theory: `
      <p>엑셀처럼 행과 열로 이루어진 표(Table)를 만듭니다.</p>
      <h3>기본적인 표 만들기</h3>
      <ul>
        <li><code>&lt;table&gt;</code>: 표 전체를 감싸는 태그</li>
        <li><code>&lt;tr&gt;</code>: 표의 행(가로줄)을 만듭니다.</li>
        <li><code>&lt;th&gt;</code>: 표의 제목 셀 (가운데 정렬, 굵게)</li>
        <li><code>&lt;td&gt;</code>: 표의 일반 데이터 셀</li>
        <li><code>&lt;caption&gt;</code>: 표의 상단에 제목을 표시합니다.</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>3-1. 기본적인 표 만들기</title>
</head>
<body>
    <h1>기본적인 표 만들기</h1>
    <table border="1">
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
        </tr>
        <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
        </tr>
    </table>
    <hr>
    
    <h2>웹 브라우저의 종류 표 실습</h2>
    <table border="1">
        <caption>
            <b>웹 브라우저의 종류</b>
        </caption>
        <tr>
            <th>브라우저명</th>
            <th>제조사</th>
            <th>홈페이지</th>
        </tr>
        <tr>
            <td>익스플로러</td>
            <td>MS</td>
            <td>https://www.microsoft.com</td>
        </tr>
        <tr>
            <td>크롬</td>
            <td>google</td>
            <td>https://www.google.com</td>
        </tr>
        <tr>
            <td>사파리</td>
            <td>apple</td>
            <td>https://www.apple.com</td>
        </tr>
        <tr>
            <td>파이어폭스</td>
            <td>Mozillas</td>
            <td>https://www.mozilla.org</td>
        </tr>
    </table>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 1행 2열 표</h3>
            <p>표(<code>table</code>)를 만들고 한 개의 행(<code>tr</code>) 안에 두 개의 셀(<code>td</code>)을 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<table border="1">
    <tr>
        <td>1번 칸</td>
        <td>2번 칸</td>
    </tr>
</table>`,
        validation: function(code) {
          if (code.includes('<table>') && code.includes('<tr>') && (code.match(/<td>/g) || []).length >= 2) return { success: true, message: "표의 가장 기본 구조를 잡으셨습니다." };
          return { success: false, message: "table, tr, td 태그를 계층에 맞게 사용하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 제목 셀 추가하기</h3>
            <p>데이터 셀(<code>td</code>) 대신 제목 셀(<code>th</code>)을 사용하여 첫 번째 행을 '이름', '나이'로 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<table border="1">
    <tr>
        <th>이름</th>
        <th>나이</th>
    </tr>
</table>`,
        validation: function(code) {
          if (code.includes('<th>이름</th>') && code.includes('<th>나이</th>')) return { success: true, message: "th 태그는 자동으로 굵게 강조됩니다." };
          return { success: false, message: "th 태그를 사용하여 제목 셀을 만드세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 표 제목(Caption)</h3>
            <p>표의 제목을 표시하는 <code>caption</code> 태그를 사용하여 '식단표'라는 제목을 표 상단에 달아보세요.</p>
          </div>
        `,
        solutionCode: `<table border="1">
    <caption>식단표</caption>
    <tr>
        <td>오늘의 메뉴</td>
    </tr>
</table>`,
        validation: function(code) {
          if (code.includes('<caption>식단표</caption>')) return { success: true, message: "표 전체의 제목이 깔끔하게 들어갔네요!" };
          return { success: false, message: "caption 태그를 사용하여 '식단표'를 작성하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 테두리 두께 지정</h3>
            <p>표에 선이 없으면 알아보기 힘들죠? <code>table</code> 태그에 <code>border="1"</code> 속성을 추가해 보세요.</p>
          </div>
        `,
        solutionCode: `<table border="1">
    <tr>
        <td>테두리 확인</td>
    </tr>
</table>`,
        validation: function(code) {
          if (code.includes('border="1"')) return { success: true, message: "선명이 그어지니 진짜 표 같네요!" };
          return { success: false, message: "table 태그에 border 속성을 지정하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 3x3 표 완성하기</h3>
            <p>종합 연습! 3행 3열짜리 숫자 표(1부터 9까지)를 테두리와 함께 완성해 보세요.</p>
          </div>
        `,
        solutionCode: `<table border="1">
    <tr><td>1</td><td>2</td><td>3</td></tr>
    <tr><td>4</td><td>5</td><td>6</td></tr>
    <tr><td>7</td><td>8</td><td>9</td></tr>
</table>`,
        validation: function(code) {
          if ((code.match(/<tr>/g) || []).length >= 3 && (code.match(/<td>/g) || []).length >= 9) return { success: true, message: "3x3 표 만들기 성공! 고생하셨습니다. 🎯" };
          return { success: false, message: "tr 태그 3개와 td 태그 9개를 사용하세요." };
        }
      }
    ]
  },
  {
    id: "html-03-2",
    category: "3. 표 관련 태그",
    title: "3-2. 표의 행과 열 합치기 & 구조적 테마",
    theory: `
      <h3>행과 열 합치기 (병합)</h3>
      <ul>
        <li><code>colspan="숫자"</code>: 열(가로 칸)을 지정한 숫자만큼 합칩니다.</li>
        <li><code>rowspan="숫자"</code>: 행(세로 칸)을 지정한 숫자만큼 합칩니다.</li>
      </ul>

      <h3>표의 구조적 영역 지정</h3>
      <ul>
        <li><code>&lt;thead&gt;</code>: 표의 머리말 영역 (주로 <code>th</code> 포함)</li>
        <li><code>&lt;tbody&gt;</code>: 표의 본문 영역</li>
        <li><code>&lt;tfoot&gt;</code>: 표의 꼬리말 영역 (주로 합계, 통계 등)</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>3-2. 표의 행과 열 합치기</title>
    <style>
        /* head 내에서 css를 이용해 영역별 배경색 부여 테스트 */
        thead { background-color: aqua; }
        tbody { background-color: burlywood; }
        tfoot { background-color: hotpink; }
    </style>
</head>
<body>
    <h1>표의 행과 열합치기 & 구조화</h1>
    <h3>회원 정보</h3>
    <table border="1">
        <thead>
            <tr>
                <th colspan="4">회원 카드 상세항목</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2" rowspan="2">사진</td>
                <td width="80px">이름</td>
                <td width="200px"></td>
            </tr>
            <tr>
                <td>연락처</td>
                <td></td>
            </tr>
            <tr>
                <td width="70px">주소</td>
                <td colspan="3"></td>
            </tr>
            <tr>
                <td height="200px">자기소개</td>
                <td colspan="3"></td>
            </tr>
        </tbody>
        <tfoot>
            <tr><td colspan="4">표 연습 완료</td></tr>
        </tfoot>
    </table>
</body>
</html>`,
      missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 가로 합치기 (Colspan)</h3>
            <p>두 칸을 가로로 합쳐 '제목' 칸을 만들어 보세요. <code>&lt;td colspan="2"&gt;제목&lt;/td&gt;</code> 처럼 사용합니다.</p>
          </div>
        `,
        solutionCode: `<table border="1">
    <tr>
        <td colspan="2">제목</td>
    </tr>
    <tr>
        <td>1번</td>
        <td>2번</td>
    </tr>
</table>`,
        validation: function(code) {
          if (code.includes('colspan="2"')) return { success: true, message: "가로 병합 성공!" };
          return { success: false, message: "colspan 속성을 사용하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 세로 합치기 (Rowspan)</h3>
            <p>두 칸을 세로로 합쳐보세요. <code>&lt;td rowspan="2"&gt;합침&lt;/td&gt;</code> 처럼 사용합니다.</p>
          </div>
        `,
        solutionCode: `<table border="1">
    <tr>
        <td rowspan="2">합침</td>
        <td>1번</td>
    </tr>
    <tr>
        <td>2번</td>
    </tr>
</table>`,
        validation: function(code) {
          if (code.includes('rowspan="2"')) return { success: true, message: "세로 병합도 문제없군요!" };
          return { success: false, message: "rowspan 속성을 사용하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 표의 머리글 (Thead)</h3>
            <p>표를 구조적으로 만들기 위해 <code>thead</code> 태그로 머리글 행을 감싸보세요.</p>
          </div>
        `,
        solutionCode: `<table border="1">
    <thead>
        <tr><th>번호</th><th>내용</th></tr>
    </thead>
    <tbody>
        <tr><td>1</td><td>본문</td></tr>
    </tbody>
</table>`,
        validation: function(code) {
          if (code.includes('<thead>') && code.includes('<tbody>')) return { success: true, message: "구조적인 표 구성의 첫걸음입니다." };
          return { success: false, message: "thead와 tbody 태그를 사용하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 표의 바닥글 (Tfoot)</h3>
            <p>표의 마지막에 합계를 나타내는 <code>tfoot</code> 영역을 추가하고 '합계' 칸을 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<table border="1">
    <tbody>
        <tr><td>500원</td></tr>
    </tbody>
    <tfoot>
        <tr><td>합계: 500원</td></tr>
    </tfoot>
</table>`,
        validation: function(code) {
          if (code.includes('<tfoot>')) return { success: true, message: "정보를 요약할 때 tfoot은 아주 유용합니다." };
          return { success: false, message: "tfoot 태그를 추가하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 병합 종합 실습</h3>
            <p>2x2 크기의 영역을 하나로 합친(<code>rowspan="2" colspan="2"</code>) '사진' 칸을 만들어 포함시켜 보세요.</p>
          </div>
        `,
        solutionCode: `<table border="1">
    <tr>
        <td rowspan="2" colspan="2">사진 영역</td>
        <td>이름</td>
    </tr>
    <tr>
        <td>홍길동</td>
    </tr>
</table>`,
        validation: function(code) {
          if (code.includes('rowspan="2"') && code.includes('colspan="2"')) return { success: true, message: "복잡한 표 구조도 완벽하게 이해하셨네요! 🎯" };
          return { success: false, message: "rowspan과 colspan을 동시에 사용하여 칸을 합쳐보세요." };
        }
      }
    ]
  },
  {
    id: "html-04-1",
    category: "4. 영역 관련 태그",
    title: "4-1. div 태그 (Block 요소)",
    theory: `
      <p>웹 문서에서 구역을 나눌 때 사용하는 가장 중요한 태그들입니다.</p>
      <h3>&lt;div&gt; 태그 (Block 요소)</h3>
      <ul>
        <li>줄 바꿈이 항상 적용되어 이전/이후 요소와 나뉩니다.</li>
        <li>기본적으로 너비(width) 속성이 100%를 차지하므로 한 줄 전체를 단독으로 씁니다.</li>
        <li>주로 웹 페이지의 큰 '구역'이나 '레이아웃 박스'를 만들 때 사용합니다.</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>4-1. div 태그</title>
</head>
<body>
    <h1>영역 관련 태그</h1>
    <h3>div태그 (블럭 요소)</h3>
    <p>줄 바꿈이 적용되어 다음 줄에 영역이 설정됨</p>
    
    <!-- inline style을 적용해 영역 크기 확인 -->
    <div style="border:1px solid black;background:red;width:100px;height:100px;">첫 번째 영역</div>
    <div style="border:1px solid black;background:yellow;width:100px;height:100px;">두 번째 영역</div>
    <div style="border:1px solid black;background:green;width:100px;height:100px;">세 번째 영역</div>
    
    <hr>
    <b>div영역의 너비 확인</b>
    <div style="background: yellow;">
        width 100%를 차지하며 안쪽 데이터만큼의 높이를 가집니다.
    </div>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 구역 만들기</h3>
            <p><code>div</code> 태그를 사용하여 '첫 번째 구역'이라는 텍스트가 들어있는 영역을 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<div>첫 번째 구역</div>`,
        validation: function(code) {
          if (code.includes('<div>첫 번째 구역</div>')) return { success: true, message: "가장 기본적인 블록 요소를 만드셨습니다." };
          return { success: false, message: "div 태그를 사용했는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 상하 레이아웃</h3>
            <p><code>div</code> 태그 2개를 사용하여 '위쪽'과 '아래쪽' 구역을 나눠보세요. 자동으로 줄 바꿈이 되는 것을 확인해 보세요.</p>
          </div>
        `,
        solutionCode: `<div>위쪽</div>
<div>아래쪽</div>`,
        validation: function(code) {
          if ((code.match(/<div>/g) || []).length >= 2) return { success: true, message: "상하로 영역이 잘 나뉘었네요!" };
          return { success: false, message: "div 태그 2개가 필요합니다." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 배경색이 있는 박스</h3>
            <p><code>div</code> 태그에 인라인 스타일(<code>style="background: tomato;"</code>)을 주어 토마토색 박스를 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<div style="background: tomato;">토마토 박스</div>`,
        validation: function(code) {
          if (code.includes('style="background: tomato;"') || code.includes("style='background: tomato;'")) return { success: true, message: "색상이 입혀지니 영역이 더 뚜렷해 보이죠?" };
          return { success: false, message: "div 태그에 style 속성을 추가하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 박스 안의 문단</h3>
            <p><code>div</code> 태그 안에 <code>p</code> 태그를 넣어 "박스 안의 글" 이라고 적어보세요.</p>
          </div>
        `,
        solutionCode: `<div>
    <p>박스 안의 글</p>
</div>`,
        validation: function(code) {
          if (code.includes('<div>') && code.includes('<p>')) return { success: true, message: "태그 안에 태그! 레이아웃의 기본입니다." };
          return { success: false, message: "div 안에 p 태그가 들어있는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 중첩 레이아웃</h3>
            <p>하나의 큰 <code>div</code> (부모) 안에 두 개의 작은 <code>div</code> (자식)를 만들어 구역 속의 구역을 완성해 보세요.</p>
          </div>
        `,
        solutionCode: `<div>
    <div>자식 1</div>
    <div>자식 2</div>
</div>`,
        validation: function(code) {
          if ((code.match(/<div/g) || []).length >= 3) return { success: true, message: "복잡한 웹 페이지 구조도 이처럼 div의 중첩으로 이루어집니다. 🎯" };
          return { success: false, message: "div 태그가 3개 이상 필요합니다." };
        }
      }
    ]
  },
  {
    id: "html-04-2",
    category: "4. 영역 관련 태그",
    title: "4-2. span 태그 (Inline 요소)",
    theory: `
      <h3>&lt;span&gt; 태그 (Inline 요소)</h3>
      <ul>
        <li>줄 바꿈이 적용되지 않아 이전/이후 요소 바로 옆에 붙어서 나열됩니다.</li>
        <li>태그 안에 들어있는 내용(텍스트 등)의 크기만큼만 영역을 차지합니다.</li>
        <li>강제로 높이나 너비를 지정해도 기본적으로는 적용되지 않습니다.</li>
        <li>동일한 줄 안에서 특정 글자만 다른 색이나 효과를 주고 싶을 때 많이 사용합니다.</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>4-2. span 태그</title>
</head>
<body>
    <h3>span태그 (인라인 요소)</h3>
    <p>줄 바꿈이 적용되지 않아 옆으로 영역이 붙음</p>
    
    <!-- inline 요소는 width/height 속성이 곧바로 먹히지 않음 현상 확인 -->
    <span style="border: 1px solid black;background: red; width: 100px; height: 100px">첫번째 영역</span>
    <span style="border: 1px solid black;background: yellow; width: 100px; height: 100px">두번째 영역</span>
    <span style="border: 1px solid black;background: green; width: 100px; height: 100px">세번째 영역</span>

    <hr>
    <b>span영역의 너비 확인</b><br>
    <span style="background: cyan;">
        inline 요소는 본인이 감싼 텍스트나 내용물의 크기만큼만 영역을 차지합니다.
    </span>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 줄 바꿈 없는 강조</h3>
            <p><code>span</code> 태그를 사용하여 '강조 단어'라는 텍스트를 감싸보세요. 줄 바꿈이 생기지 않는 것을 확인하세요.</p>
          </div>
        `,
        solutionCode: `<span>강조 단어</span>`,
        validation: function(code) {
          if (code.includes('<span>강조 단어</span>')) return { success: true, message: "인라인 요소인 span을 잘 사용하셨습니다." };
          return { success: false, message: "span 태그를 사용했는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 특정 단어 색상 바꾸기</h3>
            <p>"오늘은 즐거운 코딩 공부 날" 문장에서 '코딩' 단어만 <code>span</code>으로 감싸고 파란색(<code>style="color: blue;"</code>)으로 바꿔보세요.</p>
          </div>
        `,
        solutionCode: `오늘은 즐거운 <span style="color: blue;">코딩</span> 공부 날`,
        validation: function(code) {
          if (code.includes('style="color: blue;"') || code.includes("style='color: blue;'")) return { success: true, message: "콕 집어서 꾸미기! span의 주용도입니다." };
          return { success: false, message: "코딩 단어를 span으로 감싸고 파란색 속성을 주었는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 여러 개의 꾸밈</h3>
            <p>한 문장 안에서 '사과'는 빨간색, '바나나'는 노란색으로 각각 <code>span</code>을 사용하여 꾸며보세요.</p>
          </div>
        `,
        solutionCode: `<span style="color: red;">사과</span>는 빨갛고, <span style="color: yellow;">바나나</span>는 노랗다.`,
        validation: function(code) {
          if ((code.match(/<span/g) || []).length >= 2) return { success: true, message: "여러 군데를 동시에 유동적으로 꾸밀 수 있습니다." };
          return { success: false, message: "span 태그 2개가 필요합니다." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: span과 strong의 결합</h3>
            <p><code>span</code>으로 감싼 글자 중 일부를 <code>strong</code>으로 더 굵게 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<span>이것은 <strong>강력한</strong> 문장입니다.</span>`,
        validation: function(code) {
          if (code.includes('<span>') && code.includes('<strong>')) return { success: true, message: "태그들의 조화가 훌륭합니다." };
          return { success: false, message: "span과 strong 태그가 모두 쓰였는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 텍스트 꾸미기 종합</h3>
            <p>문단(<code>p</code>)을 하나 만들고 그 안에서 <code>span</code>을 이용해 가장 좋아하는 색상 이름을 적고 그 색으로 글자색을 입혀보세요.</p>
          </div>
        `,
        solutionCode: `<p>내가 좋아하는 색은 <span style="color: green;">초록색</span>입니다.</p>`,
        validation: function(code) {
          if (code.includes('<p>') && code.includes('<span') && code.includes('style=')) return { success: true, message: "영역 관련 태그 중 span 활용 마스터! 🎯" };
          return { success: false, message: "p 태그와 style이 적용된 span 태그가 필요합니다." };
        }
      }
    ]
  },
  {
    id: "html-05-1",
    category: "5. 이미지 관련 태그",
    title: "5-1. 기본 이미지 삽입 및 크기 조절",
    theory: `
      <p>웹 페이지에 사진이나 그래픽 이미지를 삽입할 때 사용합니다.</p>
      
      <h3>기본 이미지 삽입 &lt;img&gt;</h3>
      <ul>
        <li><code>src="경로"</code>: 불러올 이미지 파일의 위치(경로)를 지정합니다.</li>
        <li><code>alt="대체텍스트"</code>: 이미지가 깨졌을 때 혹은 시각 장애인용 화면낭독기가 읽어줄 글자입니다.</li>
        <li><b>크기 조절</b> (<code>width</code>, <code>height</code>):
          <ul>
            <li>고정 크기 (<code>px</code>): 브라우저 크기가 변해도 사진 크기는 고정.</li>
            <li>가변 크기 (<code>%</code>): 화면/부모 요소 사이즈에 비례하여 크기가 변함.</li>
          </ul>
        </li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>5-1. 기본 이미지 삽입</title>
</head>
<body>
    <h1>이미지 관련 태그</h1>
    <img src="./sample/image/river2.PNG">
    <p>src속성에 경로를 설정하여 이미지 파일을 불러온다.</p>

    <hr>
    <h2>자주 사용하는 속성들</h2>
    <h3>alt 속성</h3>
    <p>
        화면낭독기는 이미지를 읽을 수 없기 때문에 대체되는 텍스트가 필요하다.<br>
        혹은 사진의 경로가 잘못되거나 이미지를 제대로 표현할 수 없는 경우 대체 텍스트의 용도로 사용 가능하다.
    </p>
    <img src="./sample/image/river1" alt="두물머리 사진">
    
    <br>
    <h1>width와 height속성</h1>
    <p>
        사진의 높이와 너비를 지정할 수 있다.<br>
        고정된 단위의 크기로도 지정가능하며<br>
        가변 크기 단위의 크기로도 지정 가능하다.
    </p>
    <h4>고정 크기 단위 : 화면 사이즈가 줄어도 크기가 변하지 않는다.</h4>
    <!-- 경로에 주의하세요. 실제 로컬/서버 경로에 이미지가 있어야 보입니다. -->
    <img src="sample/image/flower1.PNG" alt="꽃1" width="200px" height="150px">
    <img src="sample/image/flower2.PNG" alt="꽃2" width="200px" height="150px">

    <h4>가변 크기 단위 : 화면 사이즈 혹은 기준 사이즈에 따라 크기가 변경된다.</h4>
    <img src="sample/image/flower1.PNG" alt="꽃1" width="15%" height="150px">
    <img src="sample/image/flower2.PNG" alt="꽃2" width="15%" height="150px">
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 인터넷 사진 띄우기</h3>
            <p><code>img</code> 태그와 <code>src="https://placedog.net/300/200"</code> 를 사용하여 귀여운 강아지 사진을 띄워보세요.</p>
          </div>
        `,
        solutionCode: `<img src="https://placedog.net/300/200">`,
        validation: function(code) {
          if (code.includes('<img') && code.includes('src="https://placedog.net/300/200"')) return { success: true, message: "사진이 잘 나오나요? 성공입니다!" };
          return { success: false, message: "img 태그와 src 속성을 정확히 입력하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 대체 텍스트(alt) 추가</h3>
            <p>이미지가 보이지 않을 때를 대비해 <code>alt="강아지 사진"</code> 속성을 추가해 보세요.</p>
          </div>
        `,
        solutionCode: `<img src="https://placedog.net/300/200" alt="강아지 사진">`,
        validation: function(code) {
          if (code.includes('alt="강아지 사진"') || code.includes("alt='강아지 사진'")) return { success: true, message: "웹 접근성을 위한 좋은 습관입니다!" };
          return { success: false, message: "alt 속성을 추가하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 너비 조절하기</h3>
            <p>사진이 너무 크거나 작을 때, <code>width="200"</code> 속성을 써서 너비를 고정해 보세요.</p>
          </div>
        `,
        solutionCode: `<img src="https://placedog.net/300/200" width="200">`,
        validation: function(code) {
          if (code.includes('width="200"') || code.includes("width='200'")) return { success: true, message: "크기 조절의 기초를 배우셨습니다." };
          return { success: false, message: "width 속성을 지정하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 높이 조절하기</h3>
            <p>이번에는 <code>height="150"</code> 속성을 써서 높이를 명시적으로 지정해 보세요.</p>
          </div>
        `,
        solutionCode: `<img src="https://placedog.net/300/200" height="150">`,
        validation: function(code) {
          if (code.includes('height="150"') || code.includes("height='150'")) return { success: true, message: "너비와 높이를 동시에 맞출 수 있습니다." };
          return { success: false, message: "height 속성을 지정하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 화면에 꽉 찬 이미지</h3>
            <p>가변 크기 단위인 <code>width="100%"</code>를 사용하여 미리보기 화면 너비에 꽉 차는 이미지를 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<img src="https://placedog.net/300/200" width="100%">`,
        validation: function(code) {
          if (code.includes('width="100%"')) return { success: true, message: "반응형 웹의 기초! 이미지 마스터 완성! 🎯" };
          return { success: false, message: "width 속성에 100%를 입력하세요." };
        }
      }
    ]
  },
  {
    id: "html-05-2",
    category: "5. 이미지 관련 태그",
    title: "5-2. 이미지 맵핑",
    theory: `
      <h3>이미지 맵핑 &lt;map&gt;</h3>
      <ul>
        <li>하나의 이미지 안에서 구역을 여럿으로 나누어 각기 다른 링크를 걸 때 사용합니다.</li>
        <li><code>&lt;img usemap="#맵이름"&gt;</code> 와 <code>&lt;map name="맵이름"&gt;</code>이 짝을 이룹니다.</li>
        <li><code>&lt;area coords="..."&gt;</code>: 클릭 가능한 세부 좌표와 링크 목적지를 정합니다.</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>5-2. 이미지 맵핑</title>
</head>
<body>
    <h1>이미지 맵핑</h1>
    <h4>이미지 구역을 2개로 나누어 각각 링크 설정</h4>
    <!-- usemap 속성을 지정해 image map 과 연결 -->
    <img src="sample/image/flower1.PNG" alt="맵적용 꽃" width="600px" height="500px" usemap="#map">
    
    <map name="map"> <!-- coords = 좌, 상, 우, 하 -->
        <area shape="rect" coords="0, 0, 300, 500" href="http://www.naver.com" target="_self">
        <area shape="rect" coords="300, 0, 600, 500" href="http://www.google.com" target="_blank">
    </map>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 맵 태그 기본</h3>
            <p><code>&lt;map name="mymap"&gt;</code> 태그를 작성하여 이미지 맵의 기초를 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<map name="mymap"></map>`,
        validation: function(code) {
          if (code.includes('<map name="mymap">')) return { success: true, message: "맵의 이름을 잘 정하셨습니다." };
          return { success: false, message: "map 태그와 name 속성을 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 네모 클릭 영역</h3>
            <p><code>map</code> 태그 안에 <code>shape="rect"</code> 인 <code>area</code> 태그를 추가해 보세요.</p>
          </div>
        `,
        solutionCode: `<map name="mymap">
    <area shape="rect" coords="0,0,100,100" href="#">
</map>`,
        validation: function(code) {
          if (code.includes('shape="rect"')) return { success: true, message: "직사각형 영역 설정 완료!" };
          return { success: false, message: "area 태그와 shape=\"rect\" 속성을 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 원형 클릭 영역</h3>
            <p>이번에는 <code>shape="circle"</code> 인 <code>area</code> 태그를 추가해 보세요.</p>
          </div>
        `,
        solutionCode: `<map name="mymap">
    <area shape="circle" coords="50,50,30" href="#">
</map>`,
        validation: function(code) {
          if (code.includes('shape="circle"')) return { success: true, message: "원형 영역 설정 완료!" };
          return { success: false, message: "shape=\"circle\" 속성을 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 다각형 클릭 영역</h3>
            <p>복잡한 모양을 위한 <code>shape="poly"</code> 속성을 사용하여 <code>area</code>를 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<map name="mymap">
    <area shape="poly" coords="10,10,50,50,10,90" href="#">
</map>`,
        validation: function(code) {
          if (code.includes('shape="poly"')) return { success: true, message: "다각형 영역까지! 대단합니다." };
          return { success: false, message: "shape=\"poly\" 속성을 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 이미지와 맵 결합</h3>
            <p><code>img</code> 태그에 <code>usemap="#mymap"</code> 속성을 추가하여 위에서 만든 맵과 연결해 보세요.</p>
          </div>
        `,
        solutionCode: `<img src="sample.jpg" usemap="#mymap">
<map name="mymap">
    <area shape="rect" coords="0,0,50,50" href="#">
</map>`,
        validation: function(code) {
          if (code.includes('usemap="#mymap"')) return { success: true, message: "이미지 맵핑 마스터! 🎯" };
          return { success: false, message: "img 태그에 usemap 속성을 추가하세요 (샵# 기호 주의)." };
        }
      }
    ]
  },
  {
    id: "html-05-3",
    category: "5. 이미지 관련 태그",
    title: "5-3. 이미지 설명 시맨틱 태그",
    theory: `
      <h3>이미지 설명 시맨틱 태그</h3>
      <ul>
        <li><code>&lt;figure&gt;</code>: 이미지와 그에 대한 설명을 하나로 묶어주는 덩어리 태그입니다.</li>
        <li><code>&lt;figcaption&gt;</code>: 이미지에 대한 캡션(설명글)을 달아줍니다. 약간 들여쓰기 효과가 있습니다.</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>5-3. 이미지 설명 시맨틱 태그</title>
</head>
<body>
    <h1>이미지 설명 시맨틱 태그</h1>
    <!-- image 태그의 설명은 figure태그와 figcaption태그를 활용하게 된다. -->
    <figure>
        <img src="sample/image/tower1.PNG" width="600px" height="300px" alt="타워">
        <figcaption>멋진 타워 사진이다. (figure 안쪽은 자동 들여쓰기가 될 수 있음)</figcaption>
    </figure>
    
    <img src="sample/image/tower1.PNG" width="600px" height="300px" alt="타워">
    <p>이쁜 사진이다. (일반 p 태그 사용)</p>
    <figure>
        <img src="sample/image/flower3.PNG" width="300px" height="200px">
        <figcaption>예쁜 꽃 사진</figcaption>
    </figure>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 사진 묶기</h3>
            <p><code>figure</code> 태그를 사용하여 이미지(<code>img</code>) 하나를 감싸보세요.</p>
          </div>
        `,
        solutionCode: `<figure>
    <img src="https://placedog.net/200/200">
</figure>`,
        validation: function(code) {
          if (code.includes('<figure>') && code.includes('<img')) return { success: true, message: "시맨틱한 구성을 시작하셨군요!" };
          return { success: false, message: "figure와 img 태그를 사용하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 설명글 달기</h3>
            <p>이미지 밑에 <code>figcaption</code> 태그를 사용하여 '귀여운 강아지'라고 설명을 달아보세요.</p>
          </div>
        `,
        solutionCode: `<figure>
    <img src="https://placedog.net/200/200">
    <figcaption>귀여운 강아지</figcaption>
</figure>`,
        validation: function(code) {
          if (code.includes('<figcaption>귀여운 강아지</figcaption>')) return { success: true, message: "설명이 붙으니 훨씬 보기 좋네요!" };
          return { success: false, message: "figcaption 태그를 사용했는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 여러 개의 사진</h3>
            <p><code>figure</code> 세트를 2개 만들어 각각 다른 설명을 달아보세요.</p>
          </div>
        `,
        solutionCode: `<figure>
    <img src="dog.jpg">
    <figcaption>강아지</figcaption>
</figure>
<figure>
    <img src="cat.jpg">
    <figcaption>고양이</figcaption>
</figure>`,
        validation: function(code) {
          if ((code.match(/<figure/g) || []).length >= 2) return { success: true, message: "독립된 미디어 덩어리들을 잘 만드셨습니다." };
          return { success: false, message: "figure 태그 2개가 필요합니다." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 설명 강조하기</h3>
            <p><code>figcaption</code> 안의 텍스트 중 일부를 <code>strong</code>으로 강조해 보세요.</p>
          </div>
        `,
        solutionCode: `<figure>
    <img src="sky.jpg">
    <figcaption><strong>푸른</strong> 하늘 사진</figcaption>
</figure>`,
        validation: function(code) {
          if (code.includes('<figcaption>') && code.includes('<strong>')) return { success: true, message: "설명문도 예쁘게 꾸밀 수 있습니다." };
          return { success: false, message: "figcaption 안에 strong 태그를 사용하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 캡션 위치</h3>
            <p><code>figcaption</code> 태그를 <code>img</code> 태그 **위쪽**에 배치하여 제목처럼 사용해 보세요.</p>
          </div>
        `,
        solutionCode: `<figure>
    <figcaption>이달의 베스트 샷</figcaption>
    <img src="best.jpg">
</figure>`,
        validation: function(code) {
          if (code.indexOf('<figcaption>') < code.indexOf('<img')) return { success: true, message: "figcaption은 위아래 어디든 올 수 있답니다! 🎯" };
          return { success: false, message: "figcaption을 img보다 먼저 작성하세요." };
        }
      }
    ]
  },
  {
    id: "html-06-1",
    category: "6. 미디어 관련 태그",
    title: "6-1. 오디오와 비디오 태그",
    theory: `
      <p>HTML5부터는 별도의 플러그인(Flash 등) 설치 없이 곧바로 웹 브라우저에서 오디오와 비디오 재생이 가능해졌습니다.</p>
      
      <h3>미디어 태그 및 주요 속성</h3>
      <ul>
        <li><code>&lt;audio&gt;</code>: 배경 음악, 음향 효과 등을 재생 (<code>src</code>, <code>controls</code>, <code>loop</code> 속성 사용)</li>
        <li><code>&lt;video&gt;</code>: 동영상 파일을 재생 (속성 사용법은 audio와 동일)</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>6-1. 미디어 관련 태그</title>
</head>
<body>
    <!-- HTML5부터는 플러그인을 사용하지 않고 미디어(비디오, 오디오)를 직접 html문서에서 실행시킬 수 있는 태그를 제공한다. -->
    <h1>미디어 관련 태그</h1>
    
    <h2>오디오 관련 태그</h2>
    <audio src="sample/audio/xmas.mp3" controls="controls" loop="loop"></audio>
    <br>
    
    <h3>비디오 관련 태그</h3>
    <video src="sample/video/beach.mp4" controls></video>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 배경 음악 들려주기</h3>
            <p><code>audio</code> 태그와 <code>src="sample/audio/xmas.mp3"</code>, 그리고 <code>controls</code> 속성을 사용하여 플레이어를 만드세요.</p>
          </div>
        `,
        solutionCode: `<audio src="sample/audio/xmas.mp3" controls></audio>`,
        validation: function(code) {
          if (code.includes('<audio') && code.includes('controls')) return { success: true, message: "음악이 준비되었습니다!" };
          return { success: false, message: "audio 태그와 controls 속성을 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 무한 반복 재생</h3>
            <p>음악이 끝나지 않도록 <code>loop</code> 속성을 추가해 보세요.</p>
          </div>
        `,
        solutionCode: `<audio src="sample/audio/xmas.mp3" controls loop></audio>`,
        validation: function(code) {
          if (code.includes('loop')) return { success: true, message: "이제 끊김 없이 음악을 즐길 수 있습니다." };
          return { success: false, message: "loop 속성을 추가하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 자동 재생 설정</h3>
            <p>페이지가 열리자마자 재생되도록 <code>autoplay</code> 속성을 추가해 보세요. (브라우저 정책상 소리가 바로 안 날 수도 있습니다)</p>
          </div>
        `,
        solutionCode: `<audio src="sample/audio/xmas.mp3" controls autoplay></audio>`,
        validation: function(code) {
          if (code.includes('autoplay')) return { success: true, message: "자동 재생 설정 완료!" };
          return { success: false, message: "autoplay 속성을 추가하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 동영상 띄우기</h3>
            <p><code>video</code> 태그와 <code>src="sample/video/beach.mp4"</code>, 그리고 <code>controls</code> 속성을 사용해 비디오 플레이어를 만드세요.</p>
          </div>
        `,
        solutionCode: `<video src="sample/video/beach.mp4" controls></video>`,
        validation: function(code) {
          if (code.includes('<video') && code.includes('controls')) return { success: true, message: "멋진 해변 영상이 보이네요!" };
          return { success: false, message: "video 태그와 controls 속성을 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 비디오 크기 조절</h3>
            <p>비디오 화면이 너무 크다면 <code>width="400"</code> 속성을 주어 크기를 조절해 보세요.</p>
          </div>
        `,
        solutionCode: `<video src="sample/video/beach.mp4" controls width="400"></video>`,
        validation: function(code) {
          if (code.includes('width="400"')) return { success: true, message: "미디어 태그 마스터 완성! 🎯" };
          return { success: false, message: "width 속성을 추가하세요." };
        }
      }
    ]
  },
  {
    id: "html-07-1",
    category: "7. 하이퍼링크 관련 태그",
    title: "7-1. a 태그와 이미지 링크",
    theory: `
      <p>연결된 다른 곳으로 이동하여 웹 문서 간의 핵심적인 기능(링크)을 제공합니다.</p>
      
      <h3>&lt;a&gt; (Anchor) 태그</h3>
      <ul>
        <li><code>href="..."</code>: 클릭했을 때 이동할 목적지(페이지 링크, URL 등)를 지정합니다.</li>
        <li><code>target="..."</code>: 문서 열기 방식을 지정합니다.
          <ul>
            <li><code>_self</code>: 현재 탭(창)에서 엽니다. (기본값)</li>
            <li><code>_blank</code>: 새로운 탭(창)에서 엽니다.</li>
          </ul>
        </li>
      </ul>

      <h3>이미지 링크</h3>
      <p><code>&lt;a&gt;</code> 태그 사이의 텍스트 대신 <code>&lt;img&gt;</code> 태그를 넣으면 이미지를 클릭했을 때 링크가 이동합니다.</p>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>7-1. 하이퍼링크 태그</title>
</head>
<body>
    <h1>하이퍼링크 관련 태그</h1>
    
    <h3>a태그(anchor 태그)를 이용한 하이퍼링크 테스트</h3>
    <ul>
        <li><a href="1_글자관련태그.html">글자관련태그</a></li>
        <li><a href="2_목록관련태그.html">목록관련태그</a></li>
        <li><a href="3_표관련태그.html">표관련태그</a></li>
    </ul>
    <hr>
    
    <h3>네트워크가 연결된 외부 웹페이지 링크</h3>
    <ul>
        <li><a href="https://www.naver.com" target="_self">네이버 (현재 창)</a></li>
        <li><a href="https://www.google.com" target="_blank">구글 (새 창)</a></li>
    </ul>

    <hr>
    <h3>이미지에 링크 걸기</h3>
    <!-- img태그를 이용해서 링크를 걸 수 있다. -->
    <a href="https://www.w3schools.com/" target="_blank">
        <img src="sample/image/flower3.PNG" width="150px" height="150px" alt="꽃이미지">
    </a>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 외부 사이트 연결</h3>
            <p><code>a</code> 태그와 <code>href="https://www.naver.com"</code>를 사용하여 '네이버로 이동' 링크를 만드세요.</p>
          </div>
        `,
        solutionCode: `<a href="https://www.naver.com">네이버로 이동</a>`,
        validation: function(code) {
          if (code.includes('href="https://www.naver.com"') && code.includes('네이버로 이동')) return { success: true, message: "링크가 잘 생성되었습니다!" };
          return { success: false, message: "a 태그와 href 속성을 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 새 창에서 열기</h3>
            <p>링크를 클릭했을 때 새 탭에서 열리도록 <code>target="_blank"</code> 속성을 추가해 보세요.</p>
          </div>
        `,
        solutionCode: `<a href="https://www.google.com" target="_blank">구글 새창열기</a>`,
        validation: function(code) {
          if (code.includes('target="_blank"')) return { success: true, message: "사용자 편의를 위한 새 창 열기 성공!" };
          return { success: false, message: "target=\"_blank\" 속성을 추가하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 이미지에 링크 걸기</h3>
            <p><code>a</code> 태그 안에 <code>img</code> 태그를 넣어, 이미지를 클릭하면 이동하도록 만드세요.</p>
          </div>
        `,
        solutionCode: `<a href="index.html">
    <img src="https://placedog.net/100/100">
</a>`,
        validation: function(code) {
          if (code.includes('<a') && code.includes('<img')) return { success: true, message: "배너 광고나 버튼처럼 활용할 수 있습니다." };
          return { success: false, message: "a 태그가 img 태그를 감싸고 있는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 링크 색상 바꾸기</h3>
            <p>기본 파란색이 지겹다면, <code>style="color: green;"</code> 속성을 주어 초록색 링크를 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<a href="#" style="color: green;">초록색 링크</a>`,
        validation: function(code) {
          if (code.includes('style="color: green;"') || code.includes("style='color: green;'")) return { success: true, message: "디자인 감각이 돋보입니다!" };
          return { success: false, message: "style 속성으로 글자색을 바꾸세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 여러 개의 링크 나열</h3>
            <p>두 개의 <code>a</code> 태그를 나란히 써서 '네이버'와 '구글' 링크를 각각 만들어 보세요. 한 줄에 나란히 나오는지 확인하세요.</p>
          </div>
        `,
        solutionCode: `<a href="https://naver.com">네이버</a>
<a href="https://google.com">구글</a>`,
        validation: function(code) {
          if ((code.match(/<a/g) || []).length >= 2) return { success: true, message: "링크 태그 마스터! 🎯" };
          return { success: false, message: "a 태그 2개가 필요합니다." };
        }
      }
    ]
  },
  {
    id: "html-07-2",
    category: "7. 하이퍼링크 관련 태그",
    title: "7-2. 한 페이지 내에서 점프 (앵커)",
    theory: `
      <h3>한 페이지 내에서 점프 (앵커)</h3>
      <p>문서 내용이 길 때, <code>href="#아이디명"</code>으로 링크를 걸고, 목적지 태그에 <code>id="아이디명"</code>을 부여하면 클릭 시 해당 위치로 스크롤이 점프합니다.</p>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>7-2. 앵커 점프</title>
</head>
<body>
    <h3 id="menu" class="menu">한 페이지내에서 점프하는 앵커 만들기</h3>
    <ul>
        <li><a href="#content1">본문내용1 로 점프</a></li>
        <li><a href="#content2">본문내용2 로 점프</a></li>
        <li><a href="#content3">본문내용3 으로 점프</a></li>
    </ul>

    <!-- 스크롤 테스트를 위한 여백 및 가짜 본문 -->
    <br><br><br><br><br><br><br><br><br><br>

    <h4 id="content1">본문내용1</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... (본문 내용 생략)</p>
    <br><br><br><br><br><br><br><br><br><br>

    <h4 id="content2">본문내용2</h4>
    <p>Curabitur non ante eget felis sodales aliquam... (본문 내용 생략)</p>
    <br><br><br><br><br><br><br><br><br><br>

    <h4 id="content3">본문내용3</h4>
    <p>Morbi sed dignissim est. Nulla elementum ipsum metus... (본문 내용 생략)</p>
    <br><br><br><br><br><br><br><br><br><br>

    <a href="#menu">위쪽 메뉴로 돌아가기</a>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 목적지 만들기</h3>
            <p>문서 맨 위쪽 요소에 <code>id="top"</code> 속성을 추가하여 점프할 곳을 정하세요.</p>
          </div>
        `,
        solutionCode: `<h1 id="top">페이지 제목</h1>`,
        validation: function(code) {
          if (code.includes('id="top"')) return { success: true, message: "목적지가 생성되었습니다." };
          return { success: false, message: "id=\"top\" 속성을 사용하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 위로 가기 버튼</h3>
            <p><code>a</code> 태그를 만들고 <code>href="#top"</code> 이라고 적어 위로 점프하게 만드세요.</p>
          </div>
        `,
        solutionCode: `<a href="#top">맨 위로 가기</a>`,
        validation: function(code) {
          if (code.includes('href="#top"')) return { success: true, message: "슈웅~ 점프 테스트를 해보세요!" };
          return { success: false, message: "href 속성에 # 기호를 포함했는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 중간 지점 앵커</h3>
            <p>문서 중간 지점(여백을 많이 준 뒤)에 <code>id="mid"</code>를 만들고 그리로 이동하는 링크를 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<a href="#mid">중간으로 가기</a>
<div style="height: 1000px;">여백</div>
<h2 id="mid">중간 지점</h2>`,
        validation: function(code) {
          if (code.includes('href="#mid"') && code.includes('id="mid"')) return { success: true, message: "긴 문서도 이제 두렵지 않겠네요." };
          return { success: false, message: "id와 href가 서로 매칭되는지 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 앵커와 여백</h3>
            <p>앵커가 작동하는지 확인하기 위해 <code>&lt;br&gt;</code> 태그를 10번 이상 써서 스크롤을 길게 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<id="start">시작</h1>
<br><br><br><br><br><br><br><br><br><br>
<a href="#start">위로</a>`,
        validation: function(code) {
          if ((code.match(/<br/g) || []).length >= 10) return { success: true, message: "스크롤이 생겼습니다!" };
          return { success: false, message: "br 태그를 많이 써보세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 간단한 목차</h3>
            <p>1번 내용으로 가는 링크와 2번 내용으로 가는 링크 2개를 상단에 나란히 배치해 보세요.</p>
          </div>
        `,
        solutionCode: `<a href="#p1">1번 가기</a> | <a href="#p2">2번 가기</a>
<h2 id="p1">1번 내용</h2>
<p>...</p>
<h2 id="p2">2번 내용</h2>
<p>...</p>`,
        validation: function(code) {
          if ((code.match(/href="#/g) || []).length >= 2) return { success: true, message: "페이지 내 탐색 도구 완성! 🎯" };
          return { success: false, message: "최소 2개의 앵커 링크가 필요합니다." };
        }
      }
    ]
  },
  {
    id: "html-08-1",
    category: "8. 폼(사용자 입력) 관련 태그",
    title: "8-1. 폼 전송 방식 및 기본 구조",
    theory: `
      <p>회원가입, 로그인, 검색 등 사용자가 입력한 정보를 서버로 전달할 때 사용하는 핵심적인 양식 태그들입니다.</p>
      
      <h3>&lt;form&gt; 구조 태그</h3>
      <ul>
        <li><code>action="..."</code>: 폼 데이터가 전송될 서버(또는 페이지) 경로.</li>
        <li><code>method="..."</code>: 전송 방식(<code>GET</code>/<code>POST</code> 등). GET은 주소창에 노출되고, POST는 내부로 숨겨서 전달됩니다.</li>
        <li><code>&lt;fieldset&gt;</code> & <code>&lt;legend&gt;</code>: 폼 내부의 입력 요소들을 그룹지어 테두리를 치고 제목을 달아줍니다.</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>8-1. 폼 전송 방식 및 기본 구조</title>
</head>
<body>
    <h1>폼 관련 태그</h1>
    <p>
        * action 속성: 폼의 입력된 값들을 전송받을 목적지를 입력한다.<br>
        * method 속성: get / post 방식으로 전송 방식을 지정한다.
    </p>

    <form action="search" method="get">
        <label>검색할 내용: </label><input type="text" name="search" required>&nbsp;
        <input type="submit" value="검색">
        <!-- 태그를 이용한 버튼. type을 안적으면 submit과 같음 -->
        <button type="submit">검색버튼</button>
    </form>
    
    <hr>
    <form>
        <fieldset>
            <legend>필드셋 제목구역 (회원정보)</legend>
            <label>입력1: </label><input type="text" value="사과"><br>
            <label>입력2: </label><input type="text" placeholder="과일명을 입력해주세요"><br>
        </fieldset>
    </form>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 폼의 시작</h3>
            <p>전송 목적지(<code>action="#"</code>)를 가진 <code>form</code> 태그를 만들어 보세요.</p>
          </div>
        `,
        solutionCode: `<form action="#"></form>`,
        validation: function(code) {
          if (code.includes('<form') && code.includes('action=')) return { success: true, message: "데이터 전송을 위한 그릇을 준비하셨습니다." };
          return { success: false, message: "form 태그와 action 속성을 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 그룹 묶기 (Fieldset)</h3>
            <p><code>fieldset</code> 태그로 입력 영역을 감싸보세요. 테두리가 생기는 것을 확인하세요.</p>
          </div>
        `,
        solutionCode: `<form>
    <fieldset></fieldset>
</form>`,
        validation: function(code) {
          if (code.includes('<fieldset>')) return { success: true, message: "영역이 분리되어 보기 좋아졌습니다." };
          return { success: false, message: "fieldset 태그를 사용하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 그룹 제목 (Legend)</h3>
            <p><code>fieldset</code> 안에 <code>legend</code> 태그를 써서 '로그인' 이라는 제목을 달아보세요.</p>
          </div>
        `,
        solutionCode: `<fieldset>
    <legend>로그인</legend>
</fieldset>`,
        validation: function(code) {
          if (code.includes('<legend>로그인</legend>')) return { success: true, message: "제목이 달린 폼 그룹 완성!" };
          return { success: false, message: "legend 태그를 사용하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 진짜 전송 버튼</h3>
            <p>사용자 입력을 전송할 <code>&lt;input type="submit"&gt;</code> 버튼을 만드세요.</p>
          </div>
        `,
        solutionCode: `<input type="submit" value="전송하기">`,
        validation: function(code) {
          if (code.includes('type="submit"')) return { success: true, message: "전송 준비 끝!" };
          return { success: false, message: "type=\"submit\" 인 input 태그를 만드세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 폼 종합 뼈대</h3>
            <p><code>form</code> 안에 <code>fieldset</code>과 <code>legend</code>를 넣고, 마지막에 <code>button</code> 태그를 써서 '제출하기' 버튼을 만드세요.</p>
          </div>
        `,
        solutionCode: `<form action="#">
    <fieldset>
        <legend>연락처</legend>
        <button type="submit">제출하기</button>
    </fieldset>
</form>`,
        validation: function(code) {
          if (code.includes('<form') && code.includes('<button')) return { success: true, message: "폼의 정석 구조를 완성하셨습니다! 🎯" };
          return { success: false, message: "form, fieldset, legend, button 태그가 모두 필요합니다." };
        }
      }
    ]
  },
  {
    id: "html-08-2",
    category: "8. 폼(사용자 입력) 관련 태그",
    title: "8-2. 텍스트 관련 입력 양식",
    theory: `
      <h3>&lt;input&gt; 주요 텍스트 type</h3>
      <ul>
        <li><b>문자 입력:</b> <code>text</code>, <code>password</code>, <code>search</code>, <code>email</code>, <code>tel</code>, <code>url</code> 등 (특정 형식에 맞춰 모바일 키보드 등이 변함)</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>8-2. 텍스트 관련 입력 양식</title>
</head>
<body>
    <form action="#" method="post">
        <h2>text와 관련된 input 태그</h2>
        
        <h3>type="text", "password"</h3>
        <label for="userId">아이디: </label>
        <input id="userId" type="text" name="userId" placeholder="아이디" value="user01" autofocus><br>
        
        <label>비밀번호: </label>
        <input type="password" name="userPwd" required><br>

        <h3>type="search", "url", "email", "tel"</h3>
        <label>검색: </label><input type="search" name="searchtext"><br>
        <label>홈페이지: </label><input type="url" name="homepage" value="https://"><br>
        <label>이메일: </label><input type="email" name="email"><br>
        <label>전화번호: </label><input type="tel" name="phone"><br>
        
        <input type="submit" value="전송">&nbsp;
        <input type="reset" value="취소">
    </form>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 아이디 입력창</h3>
            <p><code>input type="text"</code> 를 사용하여 한 줄 텍스트 입력창을 만드세요.</p>
          </div>
        `,
        solutionCode: `<input type="text">`,
        validation: function(code) {
          if (code.includes('type="text"')) return { success: true, message: "가장 기본적인 입력 양식입니다." };
          return { success: false, message: "type=\"text\" 속성을 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 비밀번호 숨기기</h3>
            <p>타이핑해도 글자가 보이지 않도록 <code>type="password"</code> 입력창을 만드세요.</p>
          </div>
        `,
        solutionCode: `<input type="password">`,
        validation: function(code) {
          if (code.includes('type="password"')) return { success: true, message: "비밀은 안전하게 보호되어야 하니까요!" };
          return { success: false, message: "type=\"password\" 속성을 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 예시 문구(Placeholder)</h3>
            <p><code>placeholder="여기에 입력"</code> 속성을 추가하여 빈 칸일 때의 가이드를 주어 보세요.</p>
          </div>
        `,
        solutionCode: `<input type="text" placeholder="아이디를 적으세요">`,
        validation: function(code) {
          if (code.includes('placeholder=')) return { success: true, message: "사용자가 무엇을 적어야 할지 알기 쉬워졌습니다." };
          return { success: false, message: "placeholder 속성을 추가하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 필수 입력(Required)</h3>
            <p>비워두면 제출이 안 되도록 <code>required</code> 속성을 입력창에 추가하세요.</p>
          </div>
        `,
        solutionCode: `<input type="text" required>`,
        validation: function(code) {
          if (code.includes('required')) return { success: true, message: "이제 이 칸을 비울 수 없습니다!" };
          return { success: false, message: "required 속성을 추가하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 이메일 전용 타입</h3>
            <p><code>type="email"</code> 을 사용하여 이메일 형식을 체크하는 입력창을 만드세요.</p>
          </div>
        `,
        solutionCode: `<input type="email">`,
        validation: function(code) {
          if (code.includes('type="email"')) return { success: true, message: "텍스트 입력 양식 마스터! 🎯" };
          return { success: false, message: "type=\"email\" 속성을 확인하세요." };
        }
      }
    ]
  },
  {
    id: "html-08-3",
    category: "8. 폼(사용자 입력) 관련 태그",
    title: "8-3. 다양한 선택 및 입력 양식",
    theory: `
      <h3>다양한 input 및 선택 태그</h3>
      <ul>
        <li><b>숫자 입력:</b> <code>number</code>(스핀박스), <code>range</code>(슬라이더)</li>
        <li><b>날짜/시간:</b> <code>date</code>, <code>month</code>, <code>time</code></li>
        <li><b>선택 버튼:</b> <code>radio</code> (단일 선택, 동일 name 지정), <code>checkbox</code> (다중 선택)</li>
        <li><code>&lt;select&gt;</code> & <code>&lt;option&gt;</code>: 드롭다운 목록(콤보박스)</li>
        <li><code>&lt;textarea&gt;</code>: 여러 줄의 웹 텍스트 박스</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>8-3. 다양한 선택 및 입력 양식</title>
</head>
<body>
    <form action="#" method="get">
        <h2>숫자와 시간 관련된 input 태그</h2>
        <label>수량(number): </label>
        <input type="number" name="amount" min="0" max="100" value="0" step="5"><br>
        
        <label>점수(range): </label>
        <input type="range" name="point" min="0" max="100" value="50" step="10"><br>

        <label>날짜(date): </label><input type="date" name="date"><br>
        <label>시간(time): </label><input type="time" name="time"><br>
    </form>
    
    <hr>
    <form action="#">
        <h2>라디오(단일) & 체크박스(다중) 버튼</h2>
        <!-- 동일 name으로 묶여야 라디오 버튼이 1개만 선택됩니다. -->
        <h3>성별 (radio)</h3>
        <input id="male" type="radio" name="gender" value="M" checked>
        <label for="male">남자</label>
        <input id="female" type="radio" name="gender" value="F">
        <label for="female">여자</label>

        <h3>취미 (checkbox)</h3>
        <input type="checkbox" id="baseball" name="hobby" value="야구" checked>
        <label for="baseball">야구</label>
        <input type="checkbox" id="football" name="hobby" value="축구">
        <label for="football">축구</label>
    </form>
    
    <hr>
    <form action="#" method="get">
        <h2>드롭다운 및 여러 줄 텍스트</h2>
        <label>국적: </label>
        <select name="nation">
            <option value="ko">한국</option>
            <option value="ch">중국</option>
            <option value="jp" selected>일본</option>
        </select>
        <br><br>

        <!-- 크기 자동조절 옵션인 resize 속성이 CSS에 있습니다. -->
        <label>작성 내용:</label><br>
        <textarea name="contents" cols="30" rows="5" style="resize:none">내용을 입력하세요</textarea>
        <br>
        <button type="submit">최종 완료</button>
    </form>
</body>
</html>`,
    missions: [
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 1/5: 다중 선택 (Checkbox)</h3>
            <p><code>type="checkbox"</code> 를 사용하여 '사과'를 선택할 수 있게 만드세요.</p>
          </div>
        `,
        solutionCode: `<input type="checkbox"> 사과`,
        validation: function(code) {
          if (code.includes('type="checkbox"')) return { success: true, message: "체크박스는 여러 개 선택할 수 있습니다." };
          return { success: false, message: "checkbox 타입을 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 2/5: 단일 선택 (Radio)</h3>
            <p><code>type="radio"</code> 를 사용하고 <code>name="fruit"</code> 을 주어 하나만 고를 수 있게 하세요.</p>
          </div>
        `,
        solutionCode: `<input type="radio" name="fruit"> 사과
<input type="radio" name="fruit"> 포도`,
        validation: function(code) {
          if (code.includes('type="radio"') && code.includes('name="')) return { success: true, message: "name이 같아야 하나만 선택된다는 점을 잊지 마세요!" };
          return { success: false, message: "radio 타입과 name 속성을 확인하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 3/5: 목록 선택 (Select)</h3>
            <p><code>select</code> 태그 안에 <code>option</code> 태그 3개를 넣어 국가 선택 목록을 만드세요.</p>
          </div>
        `,
        solutionCode: `<select>
    <option>한국</option>
    <option>미국</option>
    <option>중국</option>
</select>`,
        validation: function(code) {
          if (code.includes('<select') && (code.match(/<option/g) || []).length >= 2) return { success: true, message: "깔끔한 드롭다운 목록이네요." };
          return { success: false, message: "select와 option 태그를 사용하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 4/5: 여러 줄 입력 (Textarea)</h3>
            <p>긴 내용을 입력받을 수 있는 <code>textarea</code> 태그를 만드세요.</p>
          </div>
        `,
        solutionCode: `<textarea cols="30" rows="5"></textarea>`,
        validation: function(code) {
          if (code.includes('<textarea')) return { success: true, message: "자기소개나 의견을 듣기에 안성맞춤입니다." };
          return { success: false, message: "textarea 태그를 사용하세요." };
        }
      },
      {
        practiceTheory: `
          <div class="mission-box">
            <h3>🚀 미션 5/5: 설문 양식 완성</h3>
            <p><code>textarea</code>와 <code>input type="checkbox"</code> ('개인정보 수집 동의')를 포함한 설문 양식을 완성해 보세요.</p>
          </div>
        `,
        solutionCode: `<textarea></textarea><br>
<input type="checkbox"> 개인정보 수집에 동의합니다.`,
        validation: function(code) {
          if (code.includes('<textarea') && code.includes('checkbox')) return { success: true, message: "HTML 실습 대장정 완료! 이제 무엇이든 만드실 수 있습니다! 🎓🎯" };
          return { success: false, message: "textarea와 checkbox가 모두 필요합니다." };
        }
      }
    ]
  }
];

// 2. CodeMirror 에디터 초기화
const editorTextArea = document.getElementById('htmlEditor');
const editor = CodeMirror.fromTextArea(editorTextArea, {
  mode: 'xml',
  theme: 'dracula',
  lineNumbers: true,
  autoCloseTags: true,
  indentUnit: 4,
  tabSize: 4
});

// 3. Iframe 미리보기 렌더링 함수
function updatePreview() {
  const previewFrame = document.getElementById('previewIframe');
  const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
  const userCode = editor.getValue();

  previewDoc.open();
  previewDoc.write(userCode);
  previewDoc.close();
}

// 4. 전역 상태 및 특정 강의(데이터) 로드 함수
let isPracticeMode = false;
let currentLectureId = "html-01-1"; // 현재 강의 기억
let currentMissionIndex = 0;        // 다중 미션 진행 상태를 위한 인덱스

const missionNav = document.getElementById('missionNav');
const prevMissionBtn = document.getElementById('prevMissionBtn');
const nextMissionBtn = document.getElementById('nextMissionBtn');
const missionProgress = document.getElementById('missionProgress');

// 강의 로드 함수
function loadLecture(lectureId, missionIdx = 0) {
  currentLectureId = lectureId;
  currentMissionIndex = missionIdx;
  const lecture = htmlLectures.find(lec => lec.id === lectureId);
  if (!lecture) return;

  // 1) 이론/실습 영역 업데이트
  document.getElementById('theoryTitle').innerText = isPracticeMode ? '미션 가이드' : '이론 설명';
  
  if (isPracticeMode) {
    // 다중 미션 배열 구조를 가지고 있는지 확인
    const hasMultipleMissions = Array.isArray(lecture.missions) && lecture.missions.length > 0;
    
    let missionData;
    if (hasMultipleMissions) {
      missionData = lecture.missions[currentMissionIndex];
      // 미션 네비게이션 제어
      missionNav.style.display = 'flex';
      missionProgress.innerText = `${currentMissionIndex + 1} / ${lecture.missions.length}`;
      prevMissionBtn.disabled = currentMissionIndex === 0;
      nextMissionBtn.disabled = currentMissionIndex === (lecture.missions.length - 1);
    } else {
      // 레거시 단일 미션 (배열 형태가 아닌 경우)
      missionData = {
        practiceTheory: lecture.practiceTheory,
        solutionCode: lecture.solutionCode,
        validation: lecture.validation
      };
      missionNav.style.display = 'none'; // 미션이 1개면 버튼 숨김
    }

    document.getElementById('theoryContent').innerHTML = missionData.practiceTheory || '<p>현재 강의는 실습 미션이 아직 등록되지 않았습니다.</p>';
    
    // 이전에 사용자가 치던 코드를 보존하려면 getValue를 쓰지만, 새로 강의/문제를 열 땐 빈 코드가 좋음
    editor.setValue('<!DOCTYPE html>\n<html lang="ko">\n<head>\n    <meta charset="UTF-8">\n    <title>실습</title>\n</head>\n<body>\n    <!-- 여기에 코드를 작성하세요 -->\n    \n</body>\n</html>');
  } else {
    // 이론(학습) 모드
    missionNav.style.display = 'none';
    document.getElementById('theoryContent').innerHTML = lecture.theory;
    editor.setValue(lecture.initialCode);
  }

  // 2) 사이드바 활성화 (Active) UI 변경
  const listItems = document.querySelectorAll('.lesson-list li.sub-item');
  listItems.forEach(li => li.classList.remove('active'));
  const activeLi = document.getElementById('nav-' + lecture.id);
  if(activeLi) activeLi.classList.add('active');

  // 변경 후 즉시 미리보기 렌더링
  updatePreview();
}

// 4-0. 다중 미션 이전 / 다음 버튼 제어기
prevMissionBtn.addEventListener('click', () => {
  if (currentMissionIndex > 0) {
    loadLecture(currentLectureId, currentMissionIndex - 1);
  }
});

nextMissionBtn.addEventListener('click', () => {
  const lecture = htmlLectures.find(lec => lec.id === currentLectureId);
  if (lecture && lecture.missions && currentMissionIndex < lecture.missions.length - 1) {
    loadLecture(currentLectureId, currentMissionIndex + 1);
  }
});

// 4-1. 모드 전환 (이론 <-> 실습) 이벤트
const modeToggleBtn = document.getElementById('modeToggleBtn');
const labelTheory = document.getElementById('modeLabelTheory');
const labelPractice = document.getElementById('modeLabelPractice');
const checkAnswerBtn = document.getElementById('checkAnswerBtn');
const showAnswerBtn = document.getElementById('showAnswerBtn');

modeToggleBtn.addEventListener('change', (e) => {
  isPracticeMode = e.target.checked;
  if (isPracticeMode) {
    labelPractice.classList.add('active');
    labelTheory.classList.remove('active');
    checkAnswerBtn.style.display = 'inline-block';
    showAnswerBtn.style.display = 'inline-block';
  } else {
    labelTheory.classList.add('active');
    labelPractice.classList.remove('active');
    checkAnswerBtn.style.display = 'none';
    showAnswerBtn.style.display = 'none';
  }
  // 모드 변경 시 현재 열려있던 강의를 해당 모드로 다시 로드
  loadLecture(currentLectureId);
});

// 4-2. 정답 보기 버튼 클릭 이벤트
showAnswerBtn.addEventListener('click', () => {
  const lecture = htmlLectures.find(lec => lec.id === currentLectureId);
  let missionData = lecture;
  if (lecture && Array.isArray(lecture.missions)) {
    missionData = lecture.missions[currentMissionIndex];
  }

  if (!missionData || !missionData.solutionCode) {
    alert("이 강의에는 아직 정답 코드가 등록되지 않았습니다.");
    return;
  }
  if(confirm("정답 코드를 에디터에 불러오시겠습니까? 작성 중인 코드는 사라집니다.")) {
    editor.setValue(missionData.solutionCode);
  }
});

// 4-3. 정답 제출 버튼 클릭 이벤트
checkAnswerBtn.addEventListener('click', () => {
  const lecture = htmlLectures.find(lec => lec.id === currentLectureId);
  let missionData = lecture;
  if (lecture && Array.isArray(lecture.missions)) {
    missionData = lecture.missions[currentMissionIndex];
  }

  if (!missionData || !missionData.validation) {
    alert("이 강의에는 아직 채점 로직이 등록되지 않았습니다.");
    return;
  }
  
  const userCode = editor.getValue();
  const result = missionData.validation(userCode);
  
  if (result.success) {
    // 폭죽 이펙트
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    // 다중 미션일 경우 자동 다음 단계 안내 문구 추가
    let msg = "🎉 정답입니다!\n" + result.message;
    if (lecture.missions && currentMissionIndex < lecture.missions.length - 1) {
        msg += "\n\n다음 미션으로 넘어갑니다!";
        setTimeout(() => {
          alert(msg);
          loadLecture(currentLectureId, currentMissionIndex + 1); // 자동 다음 미션
        }, 300);
    } else {
        setTimeout(() => alert(msg), 300);
    }
  } else {
    alert("오답입니다. ❌\n" + result.message);
  }
});

// 5. 사이드바(목차) 렌더링 함수 (카테고리별 그룹화 및 아코디언 기능 적용)
function renderSidebar() {
  const ul = document.getElementById('lessonList');
  ul.innerHTML = ''; // 초기화

  let currentCategory = "";
  let currentGroupUl = null; // 현재 하위 항목들을 담을 ul 기억

  htmlLectures.forEach(lecture => {
    // 새로운 카테고리 등장 시 1뎁스 헤더 및 하위 그룹 ul 생성
    if (lecture.category !== currentCategory) {
      currentCategory = lecture.category;

      // 카테고리 타이틀 생성
      const categoryLi = document.createElement('li');
      categoryLi.className = 'category-title';
      categoryLi.innerText = currentCategory;
      ul.appendChild(categoryLi);

      // 하위 항목들을 담을 ul 컨테이너 생성 (초기 상태: 접혀있음)
      currentGroupUl = document.createElement('ul');
      currentGroupUl.style.display = 'none'; 
      ul.appendChild(currentGroupUl);

      // ★ 버그 수정: 이벤트 핸들러가 각각 자신의 ul을 기억하도록 상수로 별도 캡처
      const targetUl = currentGroupUl;

      // 카테고리 클릭 시 하위 항목 펼치기/접기 (토글)
      categoryLi.addEventListener('click', () => {
        if (targetUl.style.display === 'none') {
          targetUl.style.display = 'block';
        } else {
          targetUl.style.display = 'none';
        }
      });
    }

    // 2뎁스 실제 클릭 가능한 강의 노드 생성 (생성된 하위 그룹 ul에 붙임)
    const li = document.createElement('li');
    li.id = 'nav-' + lecture.id;
    li.className = 'sub-item'; // 하위 아이템으로 스타일링 하기 위한 클래스
    li.innerText = lecture.title;
    
    // 클릭 시 해당 강의 로드
    li.addEventListener('click', () => loadLecture(lecture.id));
    currentGroupUl.appendChild(li); // ROOT가 아닌 하위 폴더 역할을 하는 ul에 append
  });
}

// === 초기 실행 영역 ===
editor.on('change', updatePreview);

// 목차 열기/닫기 (Push 방식) 기능
const sidebar = document.getElementById('sidebar');
const menuOpenBtn = document.getElementById('menuOpenBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');

function toggleSidebar() {
  sidebar.classList.toggle('open');
}

function closeSidebar() {
  sidebar.classList.remove('open');
}

menuOpenBtn.addEventListener('click', toggleSidebar);
menuCloseBtn.addEventListener('click', closeSidebar);

// 코드 복사 기능 (클립보드 API)
document.getElementById('copyCodeBtn').addEventListener('click', () => {
  const code = editor.getValue();
  navigator.clipboard.writeText(code).then(() => {
    alert('에디터 코드가 클립보드에 복사되었습니다!');
  }).catch(err => {
    console.error('클립보드 복사 실패:', err);
    alert('복사에 실패했습니다.');
  });
});

// 웹 페이지가 준비되면 목차를 그리고, 첫 번째 강의를 기본으로 불러옵니다!
window.onload = () => {
  renderSidebar();
  loadLecture(htmlLectures[0].id);
};
