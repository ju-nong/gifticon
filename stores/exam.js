export const examStore = defineStore("exam", {
    state: () => ({
        step: 0,
        config: [
            [
                {
                    question: "1. 나는 어디서 태어났을까?",
                    examples: [
                        "충청북도 청주시 서원구",
                        "충청북도 청주시 흥덕구",
                        "충청남도 청주시 상당구 ",
                        "충청북도 청주시 청원구",
                    ],
                    answer: 1,
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
                    question: "5. 내가 가장 좋아하는 고기는?",
                    examples: ["닭", "돼지", "소", "양"],
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
                    question: "7. 내가 지금까지 가장 인상 깊게 읽은 책은?",
                    examples: [
                        "스코치 트라이얼",
                        "톰 소여의 모험",
                        "로빈슨 크루소",
                        "메이즈러너",
                    ],
                    answer: 0,
                    choice: -1,
                },
                {
                    question: "8. 공부할 때 내가 듣는 음악 스타일은?",
                    examples: ["힙합", "K-POP", "발라드", "클래식"],
                    answer: 0,
                    choice: -1,
                },
            ],
            [
                {
                    question: "9. 현재 내가 사용하고 있는 키보드의 축은?",
                    examples: ["청축", "갈축", "펜타그래프", "흑축"],
                    answer: 2,
                    choice: -1,
                },
                {
                    question:
                        "10. 다음생에 태어난다면 난 뭐로 태어나고 싶어할까?",
                    examples: ["인간", "갈매기", "호랑이", "고양이"],
                    answer: 1,
                    choice: -1,
                },
                {
                    question: "11. 내 생에 최대의 몸무게는?",
                    examples: ["111kg", "117kg", "122kg", "127kg"],
                    answer: 3,
                    choice: -1,
                },
                {
                    question: "12. 내가 마지막으로 본 영화는?",
                    examples: [
                        "존 윅 4",
                        "슈퍼 마리오 브라더스",
                        "범죄도시3",
                        "가디언즈 오브 갤럭시 3",
                    ],
                    answer: 2,
                    choice: -1,
                },
            ],
        ],
        score: -1,
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
    },
});
