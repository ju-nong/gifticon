# Birthday Gift Generator.

여기서 전반적인 프로젝트의 문서나 순서를 볼 수 있어요 [Notion](https://iiiuooyoo.notion.site/Gifticon-45a9ed525db8496db4f8ddcdd1409ab5)

### Firebase Storage CORS 해결

Storage 이미지를 fetch를 사용해서 받을 때, CORS 에러를 맞이할 것이다.
그걸 해결하는 방법이다.

1. [Google Cloud Platfrom](https://console.cloud.google.com/) 콘솔에 접속한다.
2. 상단에 있는 콘솔 아이콘 클릭
3. 콘솔에 접속 후, 편집기 열기 클릭
4. 현재 경로에서 새파일을 만들고 파일명은 cors.json으로 (다른 것도 됨)

```json
// cors.json
[
    {
        "origin": ["*"],
        "method": ["GET"],
        "maxAgeSeconds": 3600
    }
]
```

5. 파일을 저장한 다음 편집기 상단에 터미널 열기 클릭해서, 터미널로 돌아감
6. Firebase Console > Storage에서 상단 gs://주소를 확인한 후, 아래 명령어 입력

```
gsutil cors set cors.json gs://내 프로젝트 버켓 주소
```

참조 : [Link](https://stove99.github.io/etc/2021/06/09/firebase-storage-cors-setting/)
