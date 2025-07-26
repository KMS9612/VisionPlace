## 프로젝트 정보

프로젝트명: VisionPlace
프로젝트 설명: LandingPage 프리랜서 개발을 위한 VisionPlace라는 이름의 랜딩페이지
프로젝트 용도: 고객 확보 및 고객데이터 적립(Google Analytics / GoogleSheet)
주 사용 스택 : Next.js(15.3.4) / Shadcn / TailwindCSS / Motion
Design Pattern : Atomic

## Commit Rule

Commit Rule을 적용하지 않으려고 했지만 규칙이 있는게 추후 로그 확인과 작업 진행에 이점이 있을 것 같아 도입을 결정했습니다.
CommitMessage는 최대한 (Reason) + (How) + (Result)의 조합이 이뤄지도록 합니다.
(EX) "Fix: VisitedTracker API가 페이지 로드마다 작동하여 과도한 Transaction이 일어나고 있습니다. 클라이언트의 API 호출부분을 주석처리 하여 해당 기능이 작동하지 않도록 했습니다."

Feat: 새로운 기능,UI 등 새롭게 코드를 작성하는 부분이 있으면 Feat를 CommitMessage앞에 작성합니다
(EX) "Feat: Commit Mesaage"

Fix: 기존에 있던 기능,UI,코드구조의 수정을 할 때 진행합니다.
(EX) "Fix: VisitedTracker API가 페이지 로드마다 작동하여 과도한 Transaction이 일어나고 있습니다. 클라이언트의 API 호출부분을 주석처리 하여 해당 기능이 작동하지 않도록 했습니다."
