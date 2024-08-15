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

// 단과대 및 학과 정보
const cl = {
  인문과학대학: {
    url: "http://my.ewha.ac.kr/liberal/",
    major: {
      국어국문학과: "http://my.ewha.ac.kr/kukewha",
      중어중문학과: "http://my.ewha.ac.kr/zhongwen",
      불어불문학과: "http://france.ewha.ac.kr/",
      독어독문학과: "http://my.ewha.ac.kr/german",
      사학과: "http://history.ewha.ac.kr/",
      철학과: "http://philos.ewha.ac.kr/",
      기독교학과: "http://my.ewha.ac.kr/christa",
      영어영문학부: "http://english.ewha.ac.kr/",
    },
  },
  사회과학대학: {
    url: "http://apple.ewha.ac.kr/",
    major: {
      정치외교학과: "http://my.ewha.ac.kr/politics/",
      경제학과: "http://my.ewha.ac.kr/econ/",
      사회학과: "http://my.ewha.ac.kr/socio30/",
      심리학과: "http://my.ewha.ac.kr/psych/",
      커뮤니케이션미디어학부: "http://masscomm.ewha.ac.kr/",
      행정학과: "http://my.ewha.ac.kr/pubweb/",
      문헌정보학과: "http://my.ewha.ac.kr/elis1959/",
      사회복지학과: "http://my.ewha.ac.kr/sw/",
      소비자학과: "http://my.ewha.ac.kr/consume/",
    },
  },
  자연과학대학: {
    url: "http://nature.ewha.ac.kr",
    major: {
      수학과: "http://math.ewha.ac.kr",
      통계학과: "http://stat.ewha.ac.kr",
      물리학과: "http://physics.ewha.ac.kr",
      화학생명분자과학부: "https://myr.ewha.ac.kr/chem/index.do",
      화학나노전공: "https://myr.ewha.ac.kr/chem/index.do",
      생명과학전공: "https://biology.ewha.ac.kr/",
    },
  },
  공과대학: {
    url: "http://eng.ewha.ac.kr",
    major: {
      융합전자반도체공학부: "https://ee.ewha.ac.kr/ewhaeleca/index.do",
      전자전기공학전공: "http://ee.ewha.ac.kr/",
      지능형반도체공학전공: "https://ee.ewha.ac.kr/ewhaeleca/index.do",
      식품생명공학과: "http://my.ewha.ac.kr/foodsnt/",
      화공신소재공학과: "https://chems.ewha.ac.kr:6075/web/home.php",
      건축학과: "http://ea.ewha.ac.kr/",
      건축도시시스템공학과: "http://home.ewha.ac.kr/~ewharchi/",
      환경공학과: "http://home.ewha.ac.kr/~envse/",
      기후에너지시스템공학과: "http://cese.ewha.ac.kr/",
      휴먼기계바이오공학과: "http://mbe.ewha.ac.kr/",
    },
  },
  음악대학: {
    url: "http://music.ewha.ac.kr",
    major: {
      건반악기과: "http://music.ewha.ac.kr",
      관현악과: "http://music.ewha.ac.kr",
      성악과: "http://music.ewha.ac.kr",
      작곡과: "http://music.ewha.ac.kr",
      한국음악과: "http://music.ewha.ac.kr",
      무용과: "http://cms.ewha.ac.kr/user/dance/",
    },
  },
  조형예술대학: {
    url: "http://artndesign.ewha.ac.kr/artewha/index.do",
    major: {
      동양화전공: "http://artndesign.ewha.ac.kr/artewha/index.do",
      서양화전공: "http://artndesign.ewha.ac.kr/artewha/index.do",
      조소전공: "http://artndesign.ewha.ac.kr/artewha/index.do",
      도자예술전공: "http://artndesign.ewha.ac.kr/artewha/index.do",
      디자인학부: "http://artndesign.ewha.ac.kr/artewha/index.do",
      섬유예술전공: "http://artndesign.ewha.ac.kr/artewha/index.do",
      패션디자인전공: "http://artndesign.ewha.ac.kr/artewha/index.do",
    },
  },
  사범대학: {
    url: "http://my.ewha.ac.kr/teachers",
    major: {
      교육학과: "http://my.ewha.ac.kr/ewhaedu/",
      유아고육과: "https://eece2624.ewha.ac.kr/",
      초등교육과: "https://eee.ewha.ac.kr/",
      교육공학과: "http://my.ewha.ac.kr/et/",
      특수교육과: "https://sped.ewha.ac.kr/",
      영어교육과: "https://engedu.ewha.ac.kr/",
      사회과교육과: "https://dsse.ewha.ac.kr/",
      국어교육과: "https://kle.ewha.ac.kr/",
      과학교육과: "http://myhome.ewha.ac.kr/user/sciedu/index.action",
      수학교육과: "https://mathed.ewha.ac.kr/",
    },
  },
  경영대학: {
    url: "http://biz.ewha.ac.kr",
    major: {
      경영학부: "http://biz.ewha.ac.kr/",
    },
  },
  신산업융합대학: {
    url: "http://convergence.ewha.ac.kr/",
    major: {
      융합콘텐츠학과: "http://cc.ewha.ac.kr/",
      의류산업학과: "https://fashion.ewha.ac.kr/",
      국제사무학과: "http://ioa.ewha.ac.kr/",
      식품영양학과: "http://nsfm.ewha.ac.kr/",
      융합보건학과: "http://publichealth.ewha.ac.kr/",
      체육과학부: "http://hms.ewha.ac.kr/",
    },
  },
  의과대학: {
    url: "http://www.ewhamed.ac.kr/",
    major: {
      의예과: "http://www.ewhamed.ac.kr/",
      의학과: "http://www.ewhamed.ac.kr/",
    },
  },
  간호대학: {
    url: "http://nursing.ewha.ac.kr",
    major: {
      간호학부: "http://nursing.ewha.ac.kr",
    },
  },
  약학대학: {
    url: "https://pharm21.ewha.ac.kr/",
    major: {
      약학과: "https://pharm21.ewha.ac.kr/",
    },
  },
  스크랜튼대학: {
    url: "http://scrantoncollege.ewha.ac.kr",
    major: {
      스크랜튼학부:
        "https://scrantoncollege.ewha.ac.kr/scranton/free-major/faculty-introduction.do",
      뇌인지과학전공:
        "https://scrantoncollege.ewha.ac.kr/scranton/department-brain/brain-major-introduction.do",
      국제학전공:
        "https://scrantoncollege.ewha.ac.kr/scranton/international-studies/international-introduction.do",
      글로벌한국학전공:
        "https://scrantoncollege.ewha.ac.kr/scranton/korean-studies/korean-introduction.do",
    },
  },
  인공지능대학: {
    url: "https://ai.ewha.ac.kr/",
    major: {
      컴퓨터공학과: "https://myr.ewha.ac.kr/cse/index.do",
      사이버보안과: "https://myr.ewha.ac.kr/security/index.do",
      인공지능학과: "https://myr.ewha.ac.kr/deptai/index.do",
      데이터사이언스학과: "https://datascience.ewha.ac.kr/",
    },
  },
  호크마교양대학: {
    url: "http://hokma.ewha.ac.kr",
    major: {
      호크마교양대학: "http://hokma.ewha.ac.kr",
    },
  },
};

// 유저 단과대 및 전공
let currentCollege =
  localStorage.getItem("college") === null
    ? "인문과학대학"
    : localStorage.getItem("college");
let currentMajor =
  localStorage.getItem("major") === null
    ? "국어국문학과"
    : localStorage.getItem("major");

// 단과대 드롭다운 관련 코드
const collegeSelect = document.getElementById("college");
const collegeArray = Object.keys(cl);

// 단과대 드롭다운 옵션 등록
collegeArray.forEach((college) => {
  let opt = document.createElement("option");
  opt.text = college;
  opt.value = college;
  collegeSelect.add(opt, null);
});

const collegeOptions = Array.from(collegeSelect.options);
collegeOptions.forEach((option, i) => {
  if (option.value === currentCollege) collegeSelect.selectedIndex = i;
});

// 단과대 이동 버튼 이벤트 리스너 등록
const move = document.getElementById("college-button");
move.addEventListener("click", () => {
  window.open(cl[currentCollege].url);
});

// 학과 드롭다운 관련 코드
const majorSelect = document.getElementById("major");
let majorArray = Object.keys(cl[currentCollege].major);

// 단과대에 따른 학과 드롭다운 옵션 등록
collegeSelect.onchange = () => {
  currentCollege = collegeSelect.value;
  majorArray = Object.keys(cl[currentCollege].major);
  currentMajor = majorArray[0];
  console.log(currentCollege);
  console.log(majorArray);
  while (majorSelect.firstChild) {
    majorSelect.removeChild(majorSelect.firstChild);
  }
  majorArray.forEach((major) => {
    let opt = document.createElement("option");
    opt.text = major;
    opt.value = major;
    majorSelect.add(opt, null);
  });
  localStorage.setItem("college", currentCollege);
  localStorage.setItem("major", currentMajor);
};

majorArray.forEach((major) => {
  let opt = document.createElement("option");
  opt.text = major;
  opt.value = major;
  majorSelect.add(opt, null);
});

const majorOptions = Array.from(majorSelect.options);
majorOptions.forEach((option, i) => {
  if (option.value === currentMajor) majorSelect.selectedIndex = i;
});

// 학과 드롭다운 및 이동 버튼 이벤트 리스너 등록
majorSelect.addEventListener("change", () => {
  currentMajor = majorSelect.value;
  localStorage.setItem("major", currentMajor);
});

const majorMove = document.getElementById("major-button");
majorMove.addEventListener("click", () => {
  window.open(cl[currentCollege].major[currentMajor]);
});

// 바로가기 이벤트 리스너 등록
const scArray = Object.keys(sc);
scArray.forEach((link) => {
  elements[link].addEventListener("click", () => {
    window.open(sc[link]);
  });
});
