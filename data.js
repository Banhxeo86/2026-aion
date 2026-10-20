/**
 * 2026 AI-ON 교과연구회 제작 자료 데이터
 *
 * 항목 추가 방법: 해당 분류의 items 배열에 아래 형식으로 한 줄 추가
 *   { use: "몇 학년 과목 · 단원/업무", title: "자료명", maker: "제작자", tool: "사용 도구",
 *     desc: "한 줄 설명", link: "주소" }
 *
 * - link를 비워 두면("") 버튼 대신 "GW노트 탑재 예정"으로 표시됩니다.
 * - note: 카드 아래 작은 안내 문구(예: 로그인 필요)
 */

const UPDATED = "2026. 10. 20.";

const CATEGORIES = [
  {
    id: "teach",
    name: "교수·학습 자료",
    items: [
      { use: "6학년 사회 · 세계의 자연환경", title: "지구 탐험대", maker: "고명진", tool: "Claude Code", desc: "세계지도를 탐험하며 기후·지형을 익히는 108문항 성장형 학습 게임", link: "https://jigu-explorer.vercel.app/" },
      { use: "수학 · 연산 연습", title: "마법 고양이 수학 RPG", maker: "고명진", tool: "Cursor·Antigravity·Claude", desc: "연산 문제를 풀며 몬스터와 싸우는 RPG형 수학 연습 게임", link: "https://banhxeo86.github.io/MagicCatMathRPG/" },
      { use: "6학년 수학 · 쌓기나무", title: "뚝딱! 블록 대전", maker: "고명진", tool: "Gemini 캔버스", desc: "쌓기나무 모양을 보고 개수를 맞히는 대결형 수학 게임", link: "https://banhxeo86.github.io/block1/" },
      { use: "수학 · 10 만들기", title: "합이 10! 10 만들기", maker: "고명진", tool: "Gemini 캔버스", desc: "더해서 10이 되는 수를 찾아 연결하는 덧셈 게임", link: "https://banhxeo86.github.io/plus10/" },
      { use: "2학년 수학 · 분류하기", title: "기준에 따라 분류하기 대결", maker: "고명진", tool: "Gemini 캔버스", desc: "전자칠판에서 두 모둠이 겨루는 분류하기 게임", link: "https://banhxeo86.github.io/math2_sorting/" },
      { use: "2학년 수학 · 곱셈구구", title: "구구단 카드배틀", maker: "고명진", tool: "Google AI Studio", desc: "학급 코드로 입장해 친구와 대결하며 구구단을 익히는 카드 게임", link: "https://multiplication-battle-964240085349.asia-south1.run.app", note: "휴대폰은 가로 모드로 사용" },
      { use: "2학년 수학 · 곱셈구구 (교사용)", title: "구구단 카드배틀 교사 화면", maker: "고명진", tool: "Google AI Studio", desc: "카드배틀 방을 만들고 학생 진행 상황을 관리하는 교사용 화면", link: "https://multiplication-battle-964240085349.asia-south1.run.app/teacher" },
      { use: "과학 · 자석의 성질", title: "자기장 탐구실", maker: "고명진", tool: "Cursor·Antigravity·Claude", desc: "자석을 배치하며 자기장 모양을 관찰하는 시뮬레이션", link: "https://banhxeo86.github.io/magnetic-field-lab/" },
      { use: "사회 · 세계 여러 나라", title: "국기 골든벨 (나라 수도 게임)", maker: "고명진", tool: "Gemini 캔버스", desc: "대결하며 여러 나라의 국기와 수도를 익히는 퀴즈 게임", link: "https://banhxeo86.github.io/capital/" },
      { use: "국어 · 문장의 짜임", title: "문장 카드 놀이", maker: "고명진", tool: "Gemini 캔버스", desc: "낱말 카드로 문장을 만들며 문장 성분을 익히는 활동", link: "https://banhxeo86.github.io/sentence-card/" },
      { use: "영어 · 알파벳", title: "알파벳 매칭 게임", maker: "고명진", tool: "Google AI Studio", desc: "카드 뒤집기로 알파벳 대·소문자를 짝짓는 게임", link: "https://alphamatch-alphabet-card-memory-game-69394360653.asia-south1.run.app" },
      { use: "전 교과 · 실시간 반응", title: "실시간 OX 퀴즈 (학생용)", maker: "고명진", tool: "Cursor·Antigravity·Claude", desc: "방 코드로 입장해 O·X를 고르면 교사 화면에 바로 모이는 퀴즈", link: "https://interactive-ox-quiz.onrender.com/student", note: "처음 열 때 30초쯤 걸릴 수 있음" },
      { use: "전 교과 · 실시간 반응 (교사용)", title: "실시간 OX 퀴즈 (교사용)", maker: "고명진", tool: "Cursor·Antigravity·Claude", desc: "문제를 내고 학생 O·X 응답을 실시간으로 보는 교사 화면", link: "https://interactive-ox-quiz.onrender.com/teacher", note: "처음 열 때 30초쯤 걸릴 수 있음" },
      { use: "국어·사회 · 토론과 토의", title: "AI 토론·토의 주제 생성기", maker: "고명진", tool: "Streamlit", desc: "학년과 주제를 넣으면 토론·토의 주제를 만들어 주는 도구", link: "https://debate-aion.streamlit.app/", note: "잠들어 있으면 'Yes, get this app back up!'을 누르고 1분 기다리기" },
      { use: "체육 · 경기 운영", title: "스마트 점수판", maker: "고명진", tool: "Streamlit", desc: "체육 시간 팀 경기 점수를 크게 띄워 관리하는 점수판", link: "https://smart-scoreboard1.streamlit.app/", note: "잠들어 있으면 'Yes, get this app back up!'을 누르고 1분 기다리기" },
      { use: "수학 · 계산 도구", title: "공학용 계산기", maker: "고명진", tool: "Gemini 캔버스", desc: "Gemini 캔버스로 만든 공학용 계산기 예시", link: "https://gemini.google.com/share/13270d6dc0cd" },
      { use: "수업 운영 · 활동 시간 관리", title: "우리반 활동 안내 타이머", maker: "고명진", tool: "Canva 사이트", desc: "활동 내용과 시간을 입력하면 순서대로 진행되는 수업 타이머", link: "https://c-geumsan.my.canva.site/myclasstodo" },
      { use: "국어 · 글쓰기", title: "글쓰기 도우미 젬", maker: "고명진", tool: "Gemini 젬", desc: "초등학생의 글쓰기를 단계별로 도와주는 Gemini 젬", link: "https://gemini.google.com/gem/1NoM_EoTMAxtWRLrsZCrNbQdY1eIPAGx0?usp=sharing", note: "Google 계정 로그인 필요" },
      { use: "생활지도 · 고민 상담", title: "초등 상담가 젬", maker: "고명진", tool: "Gemini 젬", desc: "공감하는 대화로 학생의 고민을 함께 나누는 Gemini 젬", link: "https://gemini.google.com/gem/17JUlJxjEZKoNayxW4oRb5eGEp6VAPUJp?usp=sharing", note: "Google 계정 로그인 필요" },
      { use: "4학년 수학 · 각도", title: "각도 탐구 조작형 웹앱", maker: "김지민", tool: "Antigravity", desc: "각을 직접 움직이며 크기를 어림하고 재어 보는 조작형 학습 도구", link: "" },
      { use: "2학년 · 역사 인물", title: "역사 인물 학습 영상", maker: "설진하", tool: "Grok Video", desc: "AI 영상으로 역사 인물을 만나 보는 학습 영상", link: "" },
      { use: "체육 · 과정중심 평가", title: "에듀보이스", maker: "현상진", tool: "웹앱", desc: "음성으로 관찰 내용을 기록하는 체육 과정중심 평가 도구", link: "" }
    ]
  },
  {
    id: "work",
    name: "업무 활용 자료",
    items: [
      { use: "평가 · 결과 분석", title: "학생 평가 결과 분석기", maker: "고명진", tool: "Claude", desc: "학생 평가 결과를 문항별·학생별로 분석해 보여 주는 도구", link: "https://banhxeo86.github.io/26exam-answer-analyzer/" },
      { use: "현장체험학습 · 사전 안내", title: "현장체험학습 안내 웹앱 (생태환경 캠프)", maker: "고명진", tool: "Cursor", desc: "일정·준비물·안전 수칙·장소를 휴대폰으로 확인하는 안내서", link: "https://banhxeo86.github.io/fieldtrip0623/" },
      { use: "현장체험학습 · 사전 안내", title: "현장체험학습 안내 웹앱 (어린이 문화제)", maker: "고명진", tool: "Cursor", desc: "해외 문화교류 체험학습 일정과 유의사항 안내서", link: "https://banhxeo86.github.io/fieldtrip0821/" },
      { use: "교육행정 · 일정 관리", title: "AI 교육행정 스케줄링", maker: "현상진", tool: "웹앱", desc: "학교 행사·업무 일정을 AI로 정리하는 스케줄링 도구", link: "https://gw1.kr/aischeduler" },
      { use: "학급 운영 · 교실 화면", title: "우리반 바탕화면", maker: "고명진", tool: "Gemini 캔버스", desc: "급식·미세먼지 등 우리 반 정보를 띄우는 교실 대시보드", link: "https://banhxeo86.github.io/batang/" },
      { use: "학급 운영 · 자리 배치", title: "스마트 좌석 배치도", maker: "고명진", tool: "Gemini 캔버스", desc: "학생 자리를 손쉽게 바꾸고 배치도를 만드는 도구", link: "https://banhxeo86.github.io/seat-sellect/" },
      { use: "학급 운영 · 과제 확인", title: "다했어요 체크리스트", maker: "고명진", tool: "Cursor·Antigravity·Claude", desc: "학생별 과제 완료 여부를 한눈에 확인하는 학급 체크리스트", link: "https://purplewinterblue.github.io/checklist/" },
      { use: "학교 행사 · 문항 출제", title: "과학탐구대회 문항 생성기", maker: "고명진", tool: "Apps Script", desc: "탐구 주제를 넣으면 과학탐구대회(토론) 문항을 만들어 주는 도구", link: "https://script.google.com/macros/s/AKfycbwWvSBoxbfo_n_rbjc6Uz9OZQEqQjga9q99mu6GlPg-brHckSE6knQ02bWE4McUij7D/exec", note: "본인 Gemini API 키 입력 필요" },
      { use: "연구회 운영 · 소개", title: "AI-ON 연구회 홈페이지", maker: "고명진", tool: "Antigravity", desc: "연구회 소개와 활동을 모은 공식 홈페이지", link: "https://aionweb-xi.vercel.app/" },
      { use: "가정 연계 · 학부모 안내", title: "학부모 안내 문자 작성 도우미", maker: "김지민", tool: "Gemini 젬", desc: "안내 내용을 넣으면 학부모 문자 초안을 다듬어 주는 젬", link: "" },
      { use: "생활지도 · 상담 기록", title: "학생 정서 점검·상담 기록", maker: "설진하", tool: "SimSpace", desc: "학생 정서 상태를 점검하고 상담 내용을 기록하는 도구", link: "" }
    ]
  },
  {
    id: "train",
    name: "연수·강의 자료",
    items: [
      { use: "강의 예시 · 맞춤형 지도", title: "학생 개별 맞춤형 지도 대화 예시", maker: "고명진", tool: "Gemini", desc: "학생 오답을 분석하고 보충 문제를 만드는 AI 대화 과정 공유", link: "https://share.gemini.google/oF2CF7MKrMjb" },
      { use: "교원 연수 · 주제 선정", title: "41조 연수 주제 생성기", maker: "고명진", tool: "Gemini 캔버스", desc: "교사 자율연수(41조) 주제와 계획을 만들어 주는 도구", link: "https://banhxeo86.github.io/41yeonsu/" },
      { use: "연수 강의 · 디자인 활용", title: "Claude Design 강의 자료", maker: "고명진", tool: "Claude Design", desc: "Claude Design으로 수업 자료를 디자인하는 연수 강의 자료", link: "" }
    ]
  }
];

const COMING_SOON = "김진영 회원 자료는 추후 추가됩니다.";
