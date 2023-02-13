// 선언된 상태를 기반으로 렌더링한다.
let state = {
  headline: '웹브라우저 환경에서 React 라이브러리 시작하기',
  description:
    'React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.',
  subjects: [
    'React 및 ReactDOM API 활용',
    '가상(Virtual) 노드 vs. 실제(Actual) DOM 노드',
  ],
};

const rootElement = document.getElementById('root');

function reset() {
  rootElement.innerHTML = '';
}

function render(state) {
  reset();

  const container = document.createElement('div');
  container.classList.add('container', 'container--md');

  const headline = document.createElement('h1');
  headline.textContent = state.headline;

  const description = document.createElement('p');
  description.textContent = state.description;

  const subjectList = document.createElement('ul');

  state.subjects.forEach((subject) => {
    const subjectItem = document.createElement('li');
    subjectItem.textContent = subject;
    subjectList.append(subjectItem);
  });

  container.append(headline, description, subjectList);
  rootElement.append(container);
}

render(state);

function update(newState) {

  if (typeof newState.subjects === 'string') {
    let newSubject = newState.subjects;
    newState.subjects = [newSubject];
  }

  state = {
    ...state,
    ...newState,
    subjects: [
      ...state.subjects,
      ...(newState.subjects ? newState.subjects : [])
    ]
  };

  render(state);
}

globalThis.update = update;