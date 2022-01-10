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
      화학나노전공: "http://my.ewha.ac.kr/chem",
      생명과학전공: "http://my.ewha.ac.kr/biology",
    },
  },
  엘텍공과대학: {
    url: "http://eng.ewha.ac.kr",
    major: {
      컴퓨터공학전공: "http://cse.ewha.ac.kr/",
      사이버보안전공: "http://security.ewha.ac.kr/",
      전자전기공학전공: "http://ee.ewha.ac.kr/",
      식품공학전공: "http://my.ewha.ac.kr/foodsnt/",
      화학신소재공학전공: "https://chems.ewha.ac.kr:6075/web/home.php",
      건축학전공: "http://ea.ewha.ac.kr/",
      건축도시시스템공학전공: "http://home.ewha.ac.kr/~ewharchi/",
      환경공학전공: "http://home.ewha.ac.kr/~envse/",
      기후에너지시스템공학전공: "http://cese.ewha.ac.kr/",
      휴먼기계바이오공학부: "http://mbe.ewha.ac.kr/",
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
      유아고육과: "http://my.ewha.ac.kr/eece2624/",
      초등교육과: "http://my.ewha.ac.kr/eee/",
      교육공학과: "http://my.ewha.ac.kr/et/",
      특수교육과: "http://my.ewha.ac.kr/sped/",
      영어교육과: "http://home.ewha.ac.kr/~edueng/",
      사회과교육과: "http://my.ewha.ac.kr/dsse/",
      국어교육과: "http://my.ewha.ac.kr/kle/",
      과학교육과: "http://myhome.ewha.ac.kr/user/sciedu/index.action",
      수학교육과: "http://my.ewha.ac.kr/mathed/",
    },
  },
  경영대학: {
    url: "http://biz.ewha.ac.kr",
    major: {
      경영학부: "http://biz.ewha.ac.kr/",
    },
  },
  신산업융합대학: {
    url: "http://my.ewha.ac.kr/convergence/",
    major: {
      융합콘텐츠학과: "http://cc.ewha.ac.kr/",
      의류산업학과: "http://my.ewha.ac.kr/fashion/",
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
    url: "http://my.ewha.ac.kr/pharm21",
    major: {
      약학과: "http://my.ewha.ac.kr/pharm21/",
    },
  },
  스크랜튼대학: {
    url: "http://www.ewha.ac.kr/ewha/academics/scranton.do",
    major: {
      스크랜튼학부: "http://scrantoncollege.ewha.ac.kr/shp/",
      뇌인지과학전공: "http://scrantoncollege.ewha.ac.kr/bcs/",
      국제학부: "http://scrantoncollege.ewha.ac.kr/dis/",
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
    : localStorage.getItem("college");

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

// 단과대 이동 버튼 이벤트 리스너 등록
const move = document.getElementById("college-button");
move.addEventListener("click", () => {
  window.open(cl[currentCollege]);
});

// 학과 드롭다운 관련 코드
const majorSelect = document.getElementById("major");
let majorArray = Object.keys(cl[currentCollege].major);

// 단과대에 따른 학과 드롭다운 옵션 등록
collegeSelect.onchange = () => {
  currentCollege = collegeSelect.value;
  majorArray = Object.keys(cl[currentCollege].major);
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

// 학과 드롭다운 및 이동 버튼 이벤트 리스너 등록
majorSelect.addEventListener("change", () => {
  currentMajor = majorSelect.value;
  localStorage.setItem("major", currentMajor);
});

const majorMove = document.getElementById("major-button");
majorMove.addEventListener("click", () => {
  window.open(cl[currentCollege].major[currentMajor]);
});

function savedInfo() {
  whale.storage.local.set({});
}
// 바로가기 이벤트 리스너 등록
const scArray = Object.keys(sc);
scArray.forEach((link) => {
  elements[link].addEventListener("click", () => {
    window.open(sc[link]);
  });
});
