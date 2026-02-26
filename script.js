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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 자기소개 글 쓰기</h3>
        <p>에디터 코드를 지우고, 다음 조건에 맞게 작성해 보세요.</p>
        <ul>
          <li>1. 본인의 이름을 <code>&lt;p&gt;</code> 태그로 감싸서 작성하세요. (예: &lt;p&gt;홍길동입니다.&lt;/p&gt;)</li>
          <li>2. 이름 아래에 <code>&lt;br&gt;</code> 태그를 한 번 써서 줄을 바꾼 후 "반갑습니다" 라고 작성하세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>1-2. 문단 관련 태그 정답</title>
</head>
<body>
    <p>홍길동입니다.</p>
    <br>반갑습니다
</body>
</html>`,
    validation: function(code) {
      if (code.includes('<p>') && code.includes('<br>')) {
        return { success: true, message: "문단 태그와 줄바꿈 태그를 잘 쓰셨습니다!" };
      }
      return { success: false, message: "p 태그와 br 태그가 모두 사용되었는지 확인하세요!" };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 중요 단어 강조하기</h3>
        <p>에디터 코드를 지우고 아래 문장을 만든 뒤 특정 단어를 꾸며보세요.</p>
        <ul>
          <li>1. "이 문장은 매우 중요합니다" 라고 텍스트를 적으세요.</li>
          <li>2. 그 중 "매우" 라는 단어 앞뒤에 태그를 감싸 굵게(<code>&lt;strong&gt;</code>) 만드세요.</li>
          <li>3. "중요합니다" 라는 단어를 형광펜(<code>&lt;mark&gt;</code>) 칠해보세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>1-3. 꾸미기 태그 정답</title>
</head>
<body>
    이 문장은 <strong>매우</strong> <mark>중요합니다</mark>
</body>
</html>`,
    validation: function(code) {
      if (code.includes('<strong>매우</strong>') && code.includes('<mark>중요합니다</mark>')) {
        return { success: true, message: "훌륭합니다! 텍스트를 꾸미는 법을 완벽히 이해하셨네요." };
      }
      return { success: false, message: "'매우' 단어는 strong 태그로, '중요합니다' 단어는 mark 태그로 감싸주세요." };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 이중 태그 적용하기</h3>
        <p>에디터 코드를 비운 뒤 아래 조건에 맞게 코딩해 보세요.</p>
        <ul>
          <li>1. 문단 태그 <code>&lt;p&gt;</code> 안에 "절대 포기하지 마세요!"라는 문장을 쓰세요.</li>
          <li>2. "포기하지 마세요!" 부분만 <b>굵은 글씨(Strong)</b>로 만드세요.</li>
          <li>3. 굵게 만든 부분에 <b>밑줄(U)</b>도 그어지게끔 태그를 하나 더 중첩해 보세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>1-4. 응용 정답</title>
</head>
<body>
    <p>절대 <strong><u>포기하지 마세요!</u></strong></p>
</body>
</html>`,
    validation: function(code) {
      // 대소문자 무시, 공백 무시 등 유연한 검사
      const stripped = code.replace(/\s+/g, '');
      if (stripped.includes('<strong><u>포기하지마세요!</u></strong>') || stripped.includes('<u><strong>포기하지마세요!</strong></u>')) {
        return { success: true, message: "태그 중첩 규칙(나중에 열린 게 먼저 닫힘)을 잘 지키셨네요!" };
      }
      return { success: false, message: "strong 태그와 u 태그가 중첩되어 '포기하지 마세요!'를 감싸고 있는지 다시 확인하세요." };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 장바구니 목록 만들기</h3>
        <p>에디터 코드를 지우고 아래 아이템들을 "순서 없는 목록" 태그로 만들어 보세요.</p>
        <ul>
          <li>1. 전체를 감싸는 <code>&lt;ul&gt;</code> 태그를 작성하세요.</li>
          <li>2. 그 안에 <code>&lt;li&gt;</code> 태그를 3개 만들어서 각각 '사과', '바나나', '포도'를 적으세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>2-1. 장바구니 정답</title>
</head>
<body>
    <ul>
        <li>사과</li>
        <li>바나나</li>
        <li>포도</li>
    </ul>
</body>
</html>`,
    validation: function(code) {
      if (code.includes('<ul>') && code.includes('<li>사과</li>') && code.includes('<li>바나나</li>') && code.includes('<li>포도</li>')) {
        return { success: true, message: "완벽합니다! ul 태그와 li 태그의 관계를 잘 이해하셨네요." };
      }
      return { success: false, message: "ul 태그 안에 li 태그 3개가 정확히 들어갔는지, 과일 이름에 오타가 없는지 확인하세요." };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 좋아하는 영화 TOP 3</h3>
        <p>에디터 코드를 지우고 "순서 있는 목록" 태그로 순위를 매겨 보세요.</p>
        <ul>
          <li>1. 전체를 감싸는 <code>&lt;ol&gt;</code> 태그를 작성하세요.</li>
          <li>2. 그 안에 <code>&lt;li&gt;</code> 태그를 사용하여 영화 3가지를 1위부터 3위 순서대로 적어보세요. (예: 어벤져스, 아바타, 타이타닉)</li>
          <li>3. <b>[도전]</b> 1번부터가 아니라 <b>5위부터(start="5")</b> 시작하도록 <code>&lt;ol&gt;</code> 태그의 속성을 바꿔보세요!</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>2-2. 순위 목록 정답</title>
</head>
<body>
    <ol start="5">
        <li>어벤져스</li>
        <li>아바타</li>
        <li>타이타닉</li>
    </ol>
</body>
</html>`,
    validation: function(code) {
      if (code.includes('<ol start="5">') && (code.match(/<li>/g) || []).length >= 3) {
        return { success: true, message: "start 속성까지 완벽하게 적용하셨습니다! 대단해요." };
      } else if (code.includes('<ol>') && (code.match(/<li>/g) || []).length >= 3) {
        return { success: true, message: "순서 있는 목록을 잘 작성하셨습니다! 다음에는 start 속성 변경에도 도전해 보세요." };
      }
      return { success: false, message: "ol 태그가 있는지, li 태그가 3개 이상 쓰였는지 점검해 보세요." };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 과일 사전 만들기</h3>
        <p>사전처럼 과일 이름과 그 설명을 설명 목록(dl, dt, dd) 태그로 정리해 보세요.</p>
        <ul>
          <li>1. <code>&lt;dl&gt;</code> 태그로 전체를 감싸세요.</li>
          <li>2. <code>&lt;dt&gt;</code> 용어 태그로 '사과' 를 적으세요.</li>
          <li>3. <code>&lt;dd&gt;</code> 설명 태그로 '가을에 붉게 익는 달콤한 과일' 이라고 적으세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>2-3. 설명 목록 정답</title>
</head>
<body>
    <dl>
        <dt>사과</dt>
        <dd>가을에 붉게 익는 달콤한 과일</dd>
    </dl>
</body>
</html>`,
    validation: function(code) {
      const stripped = code.replace(/\s+/g, '');
      if (stripped.includes('<dt>사과</dt>') && stripped.includes('<dd>가을에붉게익는달콤한과일</dd>')) {
        return { success: true, message: "용어와 설명 태그를 완벽하게 짝지어 주셨습니다!" };
      }
      return { success: false, message: "dt 태그(사과)와 dd 태그(가을에 붉게 익는 달콤한 과일)를 정확히 사용했는지, 오타가 없는지 확인하세요." };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 나의 시간표 만들기</h3>
        <p>에디터 코드를 지우고 2행 2열 짜리 간단한 시간표(표)를 만들어 보세요.</p>
        <ul>
          <li>1. 전체를 감싸는 <code>&lt;table border="1"&gt;</code> 태그를 작성하세요.</li>
          <li>2. 첫 번째 줄(<code>&lt;tr&gt;</code>)에는 제목 셀(<code>&lt;th&gt;</code>) 2개를 사용해 각각 '월요일', '화요일' 이라고 적으세요.</li>
          <li>3. 두 번째 줄(<code>&lt;tr&gt;</code>)에는 데이터 셀(<code>&lt;td&gt;</code>) 2개를 사용해 각각 '수학', '영어' 라고 적으세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>3-1. 시간표 정답</title>
</head>
<body>
    <table border="1">
        <tr>
            <th>월요일</th>
            <th>화요일</th>
        </tr>
        <tr>
            <td>수학</td>
            <td>영어</td>
        </tr>
    </table>
</body>
</html>`,
    validation: function(code) {
      if (code.includes('<th>월요일</th>') && code.includes('<th>화요일</th>') && code.includes('<td>수학</td>') && code.includes('<td>영어</td>')) {
        return { success: true, message: "훌륭합니다! 테이블의 기본적인 행과 열, 제목과 데이터의 구분을 명확히 하셨습니다." };
      }
      return { success: false, message: "tr 태그 안에 th나 td 태그가 알맞게 들어갔는지, 텍스트에 오타가 없는지 확인해 보세요." };
    }
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
            <tr>
                <td colspan="3">총인원</td>
                <td align="center">3명</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>`
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 블록 구역 나누기</h3>
        <p>에디터의 모든 내용을 지우고 div 태그를 이용하여 두 개의 큰 구역을 나눠보세요.</p>
        <ul>
          <li>1. 상단 구역(<code>&lt;div&gt;</code>)에는 <b>'헤더 영역'</b>이라고 텍스트를 적으세요.</li>
          <li>2. 그 바로 아래의 하단 구역(<code>&lt;div&gt;</code>)에는 <b>'본문 영역'</b>이라고 텍스트를 적으세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>4-1. div 태그 정답</title>
</head>
<body>
    <div>헤더 영역</div>
    <div>본문 영역</div>
</body>
</html>`,
    validation: function(code) {
      if ((code.match(/<div/g) || []).length >= 2 && code.includes('헤더 영역') && code.includes('본문 영역')) {
        return { success: true, message: "div 태그를 2번 사용하여 화면을 상하로 훌륭하게 분할하셨습니다!" };
      }
      return { success: false, message: "화면에 div 태그가 2개 이상 쓰였는지, '헤더 영역'과 '본문 영역' 글자가 모두 있는지 점검하세요." };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 특정 글자만 콕 찍어 꾸미기</h3>
        <p>에디터 코드를 비우고 아래 지시사항을 따라해 보세요.</p>
        <ul>
          <li>1. "이 문장에서 코딩 단어만 중요해!" 라고 문장을 적으세요. (p 태그로 감싸도 좋습니다)</li>
          <li>2. <b>코딩</b> 이라는 단어만 <code>&lt;span&gt;</code> 태그로 감싸세요.</li>
          <li>3. span 태그 안에 인라인 스타일(<code>style="color: red;"</code>)을 줘서 <b>코딩</b> 단어를 빨간색으로 만들어 보세요!</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>4-2. span 태그 정답</title>
</head>
<body>
    <p>이 문장에서 <span style="color: red;">코딩</span> 단어만 중요해!</p>
</body>
</html>`,
    validation: function(code) {
      const stripped = code.replace(/\s+/g, '').replace(/'/g, '"');
      if (stripped.includes('<spanstyle="color:red;"') || stripped.includes('<spanstyle="color:red"')) {
        return { success: true, message: "span 태그와 style 속성의 결합을 통해 완벽하게 특정 단어만 꾸미셨습니다!" };
      }
      return { success: false, message: "span 태그 안에 style=\"color: red;\" 속성이 쓰였는지 확인해 보세요. (띄어쓰기 주의!)" };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 내 강아지 사진 띄우기</h3>
        <p>에디터 코드를 지우고 이미지 태그를 실습해 보세요.</p>
        <ul>
          <li>1. <code>&lt;img&gt;</code> 태그를 작성하세요.</li>
          <li>2. <b>src</b> 속성 값으로 강아지 인터넷 사진 주소인 <code>https://placedog.net/300/300</code> 를 넣으세요.</li>
          <li>3. <b>alt</b> 속성 값으로 <code>우리집 강아지</code> 라고 적어주세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>5-1. 기본 이미지 실습 정답</title>
</head>
<body>
    <img src="https://placedog.net/300/300" alt="우리집 강아지">
</body>
</html>`,
    validation: function(code) {
      if (code.includes('<img') && code.includes('src="https://placedog.net/300/300"') && code.includes('alt="우리집 강아지"')) {
        return { success: true, message: "완벽합니다! 외부 이미지 주소와 대체 텍스트(alt) 속성을 잘 적용하셨습니다." };
      }
      return { success: false, message: "img 태그 안에 src 속성과 alt 속성이 정확한 값으로 들어갔는지 따옴표와 띄어쓰기를 확인하세요." };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 투명한 클릭 영역 만들기</h3>
        <p>이미지 위에 특정 좌표별로 클릭 구역을 설정하는 맵 태그를 완성해 보세요.</p>
        <ul>
          <li>1. 전체를 감싸는 <code>&lt;map name="test"&gt;</code> 태그를 작성하세요.</li>
          <li>2. 그 안에 <code>&lt;area&gt;</code> 태그를 작성하고, 속성으로 <code>shape="rect"</code>를 주세요.</li>
          <li>3. 이동할 목적지로 <code>href="https://google.com"</code> 속성을 주세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>5-2. 맵 태그 실습 정답</title>
</head>
<body>
    <map name="test">
        <area shape="rect" href="https://google.com">
    </map>
</body>
</html>`,
    validation: function(code) {
      if (code.includes('<map name="test">') && code.includes('shape="rect"') && code.includes('href="https://google.com"')) {
        return { success: true, message: "훌륭합니다! map과 area 태그의 쓰임새를 잘 익히셨네요." };
      }
      return { success: false, message: "map 태그의 name 속성, area 태그의 shape와 href 속성을 빠짐없이 작성했는지 확인하세요." };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 폴라로이드 사진처럼 꾸미기</h3>
        <p>에디터 코드를 지우고, 사진 아래에 예쁜 설명글이 붙는 형태로 코딩해 보세요.</p>
        <ul>
          <li>1. 전체를 감싸는 <code>&lt;figure&gt;</code> 태그를 만드세요.</li>
          <li>2. 그 안에 사진(<code>&lt;img src=""&gt;</code>) 태그를 하나 넣어주세요.</li>
          <li>3. 이미지 태그 바로 밑에 <code>&lt;figcaption&gt;내 첫 번째 폴라로이드&lt;/figcaption&gt;</code> 라고 캡션을 추가하세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>5-3. 시맨틱 태그 실습 정답</title>
</head>
<body>
    <figure>
        <img src="">
        <figcaption>내 첫 번째 폴라로이드</figcaption>
    </figure>
</body>
</html>`,
    validation: function(code) {
      if (code.includes('<figure>') && code.includes('<img') && code.includes('<figcaption>내 첫 번째 폴라로이드</figcaption>')) {
        return { success: true, message: "완벽합니다! figure와 figcaption을 활용하면 이미지를 한 덩어리로 관리하기 정말 편해진답니다." };
      }
      return { success: false, message: "figure 태그 안에 img와 figcaption(정해진 문구) 태그가 들었는지 오타를 점검하세요!" };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 뮤직 플레이어 만들기</h3>
        <p>에디터 코드를 비우고 오디오 태그를 사용하여 재생바를 띄워보세요.</p>
        <ul>
          <li>1. <code>&lt;audio&gt;</code> 태그를 작성하세요.</li>
          <li>2. 재생할 파일의 경로로 <code>src="sample/audio/xmas.mp3"</code>를 주세요.</li>
          <li>3. 화면에 재생바가 나타나도록 <code>controls</code> 속성을 추가하세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>6-1. 오디오 태그 실습 정답</title>
</head>
<body>
    <audio src="sample/audio/xmas.mp3" controls></audio>
</body>
</html>`,
    validation: function(code) {
      if (code.includes('<audio') && code.includes('src="sample/audio/xmas.mp3"') && code.includes('controls')) {
        return { success: true, message: "훌륭합니다! controls 속성을 적어야 사용자 눈에 재생 버튼이 보인다는 점을 기억하세요." };
      }
      return { success: false, message: "audio 태그 안에 src 곡 경로와 controls 속성을 모두 적었는지 확인하세요." };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 구글 새 창으로 띄우기</h3>
        <p>글자를 클릭했을 때 다른 사이트로 이동하는 하이퍼링크를 만들어 보겠습니다.</p>
        <ul>
          <li>1. '구글로 이동' 이라는 텍스트를 적어주세요.</li>
          <li>2. 해당 텍스트를 <code>&lt;a&gt;</code> 태그로 감싸고, <code>href="https://google.com"</code> 목적지를 주세요.</li>
          <li>3. 클릭 시 새 창(새 탭)에서 열리도록 <code>target="_blank"</code> 속성을 추가하세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>7-1. 링크 태그 실습 정답</title>
</head>
<body>
    <a href="https://google.com" target="_blank">구글로 이동</a>
</body>
</html>`,
    validation: function(code) {
      if (code.includes('<a') && code.includes('href="https://google.com"') && code.includes('target="_blank"') && code.includes('구글로 이동')) {
        return { success: true, message: "완벽합니다! a 태그의 href와 target 속성을 자유자재로 다루시네요." };
      }
      return { success: false, message: "a 태그 안에 href 속성과 target 속성이 제대로 들어갔는지 꼭 점검해 보세요." };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 최상단으로 이동하는 링크 버튼</h3>
        <p>에디터 코드 맨 밑에 '위로 가기' 앵커 버튼을 만들어 보겠습니다.</p>
        <ul>
          <li>1. 먼저, 문서 맨 위에 있는 특정 태그나 여백에 <code>id="top"</code>이라는 식별자를 주세요.</li>
          <li>2. 문서 맨 아래(빈 공간)에 <code>&lt;a&gt;</code> 태그를 만들고 <code>href="#top"</code> 이라고 적으세요.</li>
          <li>3. 링크 텍스트로는 '맨 위로 조준!' 이라고 지어주세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>7-2. 앵커 실습 정답</title>
</head>
<body>
    <br id="top">
    <!-- 스크롤을 길게 만들어 테스트하기 위함 -->
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <a href="#top">맨 위로 조준!</a>
</body>
</html>`,
    validation: function(code) {
      if (code.includes('id="top"') && code.includes('href="#top"') && code.includes('맨 위로 조준!')) {
        return { success: true, message: "아주 잘하셨습니다! 한 페이지 안에서 id를 이용한 앵커 이동 기법입니다." };
      }
      return { success: false, message: "아무 태그 안에나 id=\"top\" 속성이 들어있고, a 태그 안에 href=\"#top\"이 잘 들어갔는지 점검하세요." };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 구글 검색 연동 폼</h3>
        <p>간단한 폼 태그 뼈대를 만들어 검색 기능을 연동해 볼까요?</p>
        <ul>
          <li>1. 전체를 감싸는 <code>&lt;form&gt;</code> 태그를 작성하세요.</li>
          <li>2. 속성으로 <code>action="https://google.com/search"</code>, <code>method="get"</code>을 부여하세요. (구글 검색 엔진이 get 방식을 받습니다)</li>
          <li>3. 내부에 아무 텍스트나 타입의 <code>&lt;input&gt;</code> 태그를 일단 하나 추가해 두세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>8-1. 폼 기본 구조 실습 정답</title>
</head>
<body>
    <form action="https://google.com/search" method="get">
        <input type="text">
    </form>
</body>
</html>`,
    validation: function(code) {
      if (code.includes('<form') && code.includes('action="https://google.com/search"') && code.includes('method="get"') && code.includes('<input')) {
        return { success: true, message: "정확합니다! 서버로 데이터를 보낼 폼 뼈대가 완벽히 구성되었습니다." };
      }
      return { success: false, message: "form 태그 안에 action, method 속성이 조건대로 잘 적혀있는지 꼭 확인해 보세요." };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 로그인 인풋 만들기</h3>
        <p>에디터 코드를 지우고 로그인에 필요한 두 가지 입력 양식을 만들어 봅니다.</p>
        <ul>
          <li>1. '아이디' 용도로 <code>&lt;input type="text"&gt;</code> 를 만드세요.</li>
          <li>2. 아무것도 안 적혀 있을 때 옅게 보이는 글씨인 <code>placeholder="아이디 입력"</code> 속성을 위 인풋에 넣어주세요.</li>
          <li>3. 그 밑에 '비밀번호' 용도로, 타이핑하면 까만 점으로 가려지는 <code>type="password"</code> 입력 양식을 만드세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>8-2. 로그인 폼 정답</title>
</head>
<body>
    <input type="text" placeholder="아이디 입력"><br>
    <input type="password">
</body>
</html>`,
    validation: function(code) {
      if (code.includes('type="text"') && code.includes('placeholder="아이디 입력"') && code.includes('type="password"')) {
        return { success: true, message: "훌륭합니다! text는 눈에 보이고 password는 눈에 안 보이는 텍스트 양식입니다." };
      }
      return { success: false, message: "type=\"text\"와 placeholder 속성, type=\"password\"가 정확히 들어갔는지 살펴보세요." };
    }
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
    practiceTheory: `
      <div class="mission-box">
        <h3>🚀 실습 미션: 여러가지 옵션 제공하기</h3>
        <p>드롭다운 항목과 체크박스 형태의 추가 양식을 자유롭게 실습해 보세요.</p>
        <ul>
          <li>1. <code>&lt;select&gt;</code> 태그를 열고, 안에 <code>&lt;option&gt;</code> 태그 2개를 만듭니다. 값(텍스트)은 '치킨', '피자'로 하세요.</li>
          <li>2. 그 아래에 <code>&lt;input type="checkbox"&gt;</code> 태그를 만들어서 '동의합니다'라는 텍스트와 함께 작성해 보세요.</li>
        </ul>
      </div>
    `,
    solutionCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>8-3. 옵션 폼 정답</title>
</head>
<body>
    <select>
        <option>치킨</option>
        <option>피자</option>
    </select>
    <br>
    <input type="checkbox"> 동의합니다
</body>
</html>`,
    validation: function(code) {
      if (code.includes('<select') && code.includes('치킨') && code.includes('피자') && code.includes('type="checkbox"')) {
        return { success: true, message: "완성입니다! 옵션 목록과 체크박스가 폼에서 어떻게 동작하는지 완벽히 숙지하셨습니다." };
      }
      return { success: false, message: "select 및 option 태그의 포함 유무, checkbox 태그 입력 유무를 확인하세요." };
    }
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
