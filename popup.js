const elements = {
  homepage: document.getElementById("sc-homepage"),
  notice: document.getElementById("sc-notice"),
  cybercampus: document.getElementById("sc-cypercampus"),
  eureka: document.getElementById("sc-eureka"),
  calendar: document.getElementById("sc-calendar"),
  course: document.getElementById("sc-course"),
  library: document.getElementById("sc-library"),
  everytime: document.getElementById("sc-everytime"),
};

const sc = {
  homepage: "http://www.ewha.ac.kr/ewha/index.do",
  notice: "http://www.ewha.ac.kr/ewha/news/notice.do",
  cybercampus: "https://cyber.ewha.ac.kr/",
  eureka: "http://eportal.ewha.ac.kr/",
  calendar: "http://www.ewha.ac.kr/ewha/bachelor/calendar2021.do",
  course: "https://sugang.ewha.ac.kr/",
  library: "https://lib.ewha.ac.kr/",
  everytime: "https://everytime.kr/",
};

const cl = {
  인문과학대학: "http://my.ewha.ac.kr/liberal/",
  사회과학대학: "http://apple.ewha.ac.kr/",
  자연과학대학: "http://nature.ewha.ac.kr",
  엘텍공과대학: "http://eng.ewha.ac.kr",
  음악대학: "http://music.ewha.ac.kr",
  조형예술대학: "http://artndesign.ewha.ac.kr/artewha/index.do",
  사범대학: "http://my.ewha.ac.kr/teachers",
  경영대학: "http://biz.ewha.ac.kr",
  신산업융합대학: "http://my.ewha.ac.kr/convergence/",
  의과대학: "http://www.ewhamed.ac.kr/",
  간호대학: "http://nursing.ewha.ac.kr",
  약학대학: "http://my.ewha.ac.kr/pharm21",
  스크랜튼대학: "http://www.ewha.ac.kr/ewha/academics/scranton.do",
  호크마교양대학: "http://hokma.ewha.ac.kr",
};

// elements.homepage.addEventListener("click");

// 단과대 드롭다운 관련 코드
const collegeSelect = document.getElementById("college");
const collegeArray = Object.keys(cl);

// 단과대 드롭다운 옵션 등록
collegeArray.forEach((college) => {
  console.log(college);
  let opt = document.createElement("option");
  opt.text = college;
  opt.value = college;
  collegeSelect.add(opt, null);
});

// 단과대 드롭다운 및 이동 버튼 이벤트 리스너 등록
let currentCollege = "인문과학대학";
collegeSelect.addEventListener("change", () => {
  currentCollege = collegeSelect.value;
});

const move = document.getElementById("college-button");
move.addEventListener("click", () => {
  window.open(cl[currentCollege]);
});
// 바로가기 이벤트 리스너 등록
const scArray = Object.keys(sc);
scArray.forEach((link) => {
  elements[link].addEventListener("click", () => {
    window.open(sc[link]);
  });
});
