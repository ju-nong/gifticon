export const examStore = defineStore("exam", {
    state: () => ({
        step: 0,
        config: [
            [
                {
                    question: "1. 이준용의 출생지는 어디인가요?",
                    examples: [
                        "서울시 강남구",
                        "대전광역시 유성구",
                        "부산광역시 해운대구",
                        "인천광역시 남동구",
                    ],
                    answer: 3,
                    choice: -1,
                },
                {
                    question: "2. 이준용이 현재 거주하는 지역은 어디인가요?",
                    examples: [
                        "경기도 성남시 분당구",
                        "서울시 강서구",
                        "부산광역시 사상구",
                        "대구광역시 중구",
                    ],
                    answer: 2,
                    choice: -1,
                },
                {
                    question: "3. 이준용의 생년월일은 언제인가요?",
                    examples: [
                        "1999년 3월 10일",
                        "2002년 9월 22일",
                        "1997년 7월 8일",
                        "2005년 1월 1일",
                    ],
                    answer: 3,
                    choice: -1,
                },
                {
                    question: "4. 이준용의 가족 구성원에는 누가 있나요?",
                    examples: [
                        "아버지, 어머니, 여동생",
                        "아버지, 어머니, 형",
                        "어머니, 할머니, 삼촌",
                        "아버지, 쌍둥이 동생",
                    ],
                    answer: 2,
                    choice: -1,
                },
            ],
            [
                {
                    question:
                        "5. 이준용이 현재 다니는 학교 또는 소속된 기관은 무엇인가요?",
                    examples: [
                        "고려대학교",
                        "서강대학교",
                        "한양대학교",
                        "성균관대학교",
                    ],
                    answer: 2,
                    choice: -1,
                },
                {
                    question: "6. 이준용이 가장 좋아하는 취미는 무엇인가요?",
                    examples: ["요리하기", "영화 감상", "운동", "음악 감상"],
                    answer: 1,
                    choice: -1,
                },
                {
                    question:
                        "7. 이준용이 지금까지 가장 인상 깊게 읽은 책은 무엇인가요?",
                    examples: [
                        "1984 - 조지 오웰",
                        "군주론 - 니콜로 마키아벨리",
                        "죽음을 노래하는 박쥐 - 산 드미게르",
                        "제인 에어 - 시암 본테",
                    ],
                    answer: 1,
                    choice: -1,
                },
                {
                    question:
                        "8. 이준용이 가장 좋아하는 음악 장르는 무엇인가요?",
                    examples: ["팝", "클래식", "힙합", "록"],
                    answer: 4,
                    choice: -1,
                },
            ],
            [
                {
                    question: "9. 이준용의 꿈은 무엇인가요?",
                    examples: ["대통령", "의사", "프로게이머", "배우"],
                    answer: 3,
                    choice: -1,
                },
                {
                    question: "10. 이준용이 가장 좋아하는 동물은 무엇인가요?",
                    examples: ["개", "고양이", "토끼", "다람쥐"],
                    answer: 1,
                    choice: -1,
                },
                {
                    question:
                        "11. 이준용이 방학 때 가장 좋아하는 활동은 무엇인가요?",
                    examples: [
                        "해외여행",
                        "쇼핑",
                        "영화 관람",
                        "친구들과 모여 게임하기",
                    ],
                    answer: 3,
                    choice: -1,
                },
                {
                    question: "12. 이준용이 마지막으로 본 영화는 무엇인가요?",
                    examples: ["인셉션", "라라랜드", "조커", "미나리"],
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
