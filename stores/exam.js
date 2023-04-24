export const examStore = defineStore("exam", {
    state: () => ({
        step: 0,
        config: [
            [
                {
                    question: "1. 나는 어디서 태어났을까?",
                    examples: [
                        "대전광역시 유성구",
                        "충청북도 청주시",
                        "충청남도 공주시",
                        "충청북도 충주시",
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
                    question: "5. 내가 다니는 회사는?",
                    examples: ["테슬라", "지뉴소프트", "엔비디아", "누아"],
                    answer: 1,
                    choice: -1,
                },
                {
                    question: "6. 내가 가장 좋아하는 취미는?",
                    examples: ["영화 감상", "코딩", "낮잠", "아리 만지기"],
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
                    examples: ["빠른 템포", "클래식", "발라드", "재즈"],
                    answer: 0,
                    choice: -1,
                },
            ],
            [
                {
                    question: "9. 내 꿈은?",
                    examples: ["대통령", "CEO", "돈 많은 백수", "영어강사"],
                    answer: 2,
                    choice: -1,
                },
                {
                    question: "10. 내가 가장 좋아하는 동물은?",
                    examples: ["강아지", "갈매기", "고양이", "앵무새"],
                    answer: 1,
                    choice: -1,
                },
                {
                    question: "11. 내가 쉬는 날에 가장 많이하는 활동은?",
                    examples: ["여행", "쇼핑", "영화 관람", "게임"],
                    answer: 3,
                    choice: -1,
                },
                {
                    question: "12. 내가 마지막으로 본 영화는?",
                    examples: [
                        "존 윅 4",
                        "스즈메의 문단속",
                        "인셉션",
                        "가디언즈 오브 갤럭시 2",
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
