const htmlLectures = [
  {
    id: "html-01-1",
    category: "1. 글자 관련 태그",
    title: "1-1. 제목 태그 (Heading)",
    theory: `
      <p>가장 기본이 되는 글자 표현 태그들을 실습합니다.</p>
      <h3>제목 태그 (Heading)</h3>
      <ul>
        <li><code>&lt;h1&gt; ~ &lt;h6&gt;</code>: 숫자가 작을수록 글자가 큽니다.</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>1-1. 제목 태그</title>
</head>
<body>
    <h1>h1 태그입니다.</h1>
    <h2>h2 태그입니다.</h2>
    <h3>h3 태그입니다.</h3>
    <h4>h4 태그입니다.</h4>
    <h5>h5 태그입니다.</h5>
    <h6>h6 태그입니다.</h6>
    <h5>h5         태그입니다.</h5>
    <h5>h5 &nbsp;&nbsp;&nbsp;태그입니다.</h5>
    <h7>h7 태그입니다.</h7>
    test <br> 2222
</body>
</html>`
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
</html>`
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
</html>`
  },
  {
    id: "html-01-4",
    category: "1. 글자 관련 태그",
    title: "1-4. 글자 관련 태그 응용",
    theory: `
      <div class="mission-box">
        <h3>🎯 태그 중첩 훈련</h3>
        <p>에디터의 코드처럼, <code>&lt;p&gt;</code> 태그 안에 <code>&lt;strong&gt;</code> 등 다양한 효과 태그를 겹쳐서 직접 사용해 보세요!</p>
      </div>
    `,
    initialCode: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>1-4. 글자 관련 태그 응용</title>
</head>
<body>
    <h3>글자 관련 태그 응용</h3>
    <p>태그들은 해당 태그 내에서 중첩으로 사용 가능하다.<br>
        <strong>굵은</strong>글자를 사용할 수도 있고,
        <em>기울이거나</em>, <s>취소선</s>을 넣는 등 다양하게
        사용할 수 있다.
    </p>
</body>
</html>`
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
</html>`
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
</html>`
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
</html>`
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
</html>`
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
</html>`
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
</html>`
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
</html>`
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
</html>`
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
</body>
</html>`
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
</html>`
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
</html>`
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
</html>`
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
</html>`
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
</html>`
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
</html>`
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

// 4. 특정 강의(데이터)를 화면에 로드하는 함수
function loadLecture(lectureId) {
  // 아이디로 강의 찾기
  const lecture = htmlLectures.find(lec => lec.id === lectureId);
  if (!lecture) return;

  // 1) 이론 설명 영역 업데이트
  document.getElementById('theoryTitle').innerText = lecture.title;
  document.getElementById('theoryContent').innerHTML = lecture.theory;

  // 2) 에디터 초기 코드 설정
  editor.setValue(lecture.initialCode);

  // 3) 사이드바 활성화 (Active) UI 변경
  const listItems = document.querySelectorAll('.lesson-list li');
  listItems.forEach(li => li.classList.remove('active'));
  document.getElementById('nav-' + lecture.id).classList.add('active');

  // 변경 후 즉시 미리보기 렌더링
  updatePreview();
}

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
