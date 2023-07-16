import { getFirestore, collection, doc, updateDoc } from "@firebase/firestore";
import { useDocument } from "vuefire";

export const examStore = defineStore("exam", {
  state: () => ({
    step: 0,
    config: [
      [
        {
          question: "1. 내가 롤할 때 어디 포지션을 갈까?",
          examples: ["탑", "정글", "미드", "서포터"],
          answer: 0,
          choice: -1,
        },
        {
          question: "2. 내가 지금 살고 있는 위치는?",
          examples: [
            "서울시 관악구",
            "서울시 강서구",
            "인천광역시 남구",
            "서울시 구로구",
          ],
          answer: 0,
          choice: -1,
        },
        {
          question: "3. 나의 생일은?",
          examples: [
            "2001년 6월 7일",
            "2001년 11월 5일",
            "2001년 11월 9일",
            "2001년 9월 11일",
          ],
          answer: 2,
          choice: -1,
        },
        {
          question: "4. 내 가족 구성원은?",
          examples: [
            "아버지, 어머니, 동생, 아리",
            "어머니, 아리",
            "어머니, 형, 동생, 아리",
            "어머니, 형, 아리",
          ],
          answer: 3,
          choice: -1,
        },
      ],
      [
        {
          question:
            "5. 대학교 3학년 때 start-up 프로젝트에서 내가 사용한 기술이 아닌 것은?",
          examples: [
            "React",
            "현위치 가져오기",
            "React Native",
            "QR 코드 인식",
            "MySQL",
          ],
          answer: 1,
          choice: -1,
        },
        {
          question: "6. 내가 졸업한 고등학교는?",
          examples: [
            "충북반도체고등학교",
            "청주공업고등학교",
            "충주고등학교",
            "충북공업고등학교",
          ],
          answer: 3,
          choice: -1,
        },
        {
          question: "7. 이원진의 현재 롤 티어는?",
          examples: ["플레 4", "플레 3", "골드 1", "플레 5"],
          answer: 0,
          choice: -1,
        },
        // {
        //   question: "7. 내가 지금까지 가장 인상 깊게 읽은 책은?",
        //   examples: [
        //     "스코치 트라이얼",
        //     "톰 소여의 모험",
        //     "로빈슨 크루소",
        //     "메이즈러너",
        //   ],
        //   answer: 0,
        //   choice: -1,
        // },
        {
          question: "8. 공부할 때 내가 듣는 음악 스타일은?",
          examples: ["힙합", "K-POP", "발라드", "클래식"],
          answer: 0,
          choice: -1,
        },
      ],
      [
        {
          question: "9. 우리 아리가 할 수 있는 것은?",
          examples: ["돌아", "빵야", "앉아", "앉아 + 돌아"],
          answer: 2,
          choice: -1,
        },
        // {
        //   question: "9. 현재 내가 사용하고 있는 키보드의 축은?",
        //   examples: ["청축", "갈축", "펜타그래프", "흑축"],
        //   answer: 2,
        //   choice: -1,
        // },
        {
          question: "10. 졸업할 때 내가 입었던 옷은?",
          examples: [
            "검정색 슬랙스",
            "자주색 후드티",
            "검정색 후드티",
            "회색 후드티",
          ],
          answer: 1,
          choice: -1,
        },
        // {
        //   question: "10. 다음생에 태어난다면 난 뭐로 태어나고 싶어할까?",
        //   examples: ["인간", "갈매기", "호랑이", "고양이"],
        //   answer: 1,
        //   choice: -1,
        // },
        {
          question: "11. 주설네 집에서 안 본 영화는?",
          examples: [
            "주",
            "그레이의 50가지 그림자",
            "365일",
            "토르: 러브 앤 썬더",
          ],
          answer: 3,
          choice: -1,
        },
        {
          question: "12. 내가 마지막으로 본 영화는?",
          examples: [
            "귀공자",
            "범죄도시3",
            "엘리멘탈",
            "가디언즈 오브 갤럭시 3",
          ],
          answer: 2,
          choice: -1,
        },
      ],
    ],
    score: -1,
    db: null,
    docs: null,
    data: null,
  }),
  getters: {
    getStep: (state) => state.step,
    getConfig: (state) => state.config,
  },
  actions: {
    setStep(step) {
      this.step = step;
    },
    setAnswer(step, order, choice) {
      this.config[step][order].choice = choice;
    },
    setExam() {
      this.db = getFirestore();
      this.docs = doc(collection(this.db, "exam"), "cM3en4qB8GywrJbY0Nrf");
      this.data = useDocument(this.docs);
    },
    async updateDB(key, value) {
      await updateDoc(this.docs, { [key]: value });
    },
  },
});
