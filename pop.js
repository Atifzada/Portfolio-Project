const data = [
  {
    projectTitle: 'Tonic',
    imageURL: './Assets/desktop-imgs/work1-img.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby'],
    seeLive: 'https://atifzada.github.io/Portfolio-Project/',
    sourceCode: 'https://github.com/atifzada/Portfolio-Project',
  },
  {
    projectTitle: 'Multi-Post Stories',
    imageURL: './Assets/desktop-imgs/work2-img.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby'],
    seeLive: 'https://atifzada.github.io/Portfolio-Project/',
    sourceCode: 'https://github.com/atifzada/Portfolio-Project',
  },
  {
    projectTitle: 'Facebook 360',
    imageURL: './Assets/desktop-imgs/work3-img.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby'],
    seeLive: 'https://atifzada.github.io/Portfolio-Project/',
    sourceCode: 'https://github.com/atifzada/Portfolio-Project',
  },
  {
    projectTitle: 'Uber Navigation',
    imageURL: './Assets/desktop-imgs/work4-img.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    technologies: ['HTML', 'CSS', 'JS', 'Ruby'],
    seeLive: 'https://atifzada.github.io/Portfolio-Project/',
    sourceCode: 'https://github.com/atifzada/Portfolio-Project',
  },
];
document.querySelectorAll('.btn').forEach((occurence) => {
  const id = occurence.getAttribute('id');
  const popupCard = `
  <div class="project1" id="project1">
        <div class="popupTop">
            <div class="projectPopupTitle">
              <div class="titlePopup">
                <h3 class="comp-title">${data[id].projectTitle}</h3>
                <img
                id="popupClose${id}"
                class="popupClose"
                src="./Assets/Icon-Cancel.svg"
                alt="closeBtn"
                />
              </div>
              <ul class="work-title">
                    <li class="client">CANOPY</li>
                    <li><img src="assets/works img/Counter.svg" alt="dot" /></li>
                    <li class="dim">Back End Dev</li>
                    <li><img src="assets/works img/Counter.svg" alt="dot" /></li>
                    <li class="dim">2015</li>
                </ul>
            </div>
            <img class="projectImage" src=${data[id].imageURL} alt="projectImage">
          <div class="popupDown">
          <div class="project-desc popupDesc">${data[id].description}</div>
            <div class="popupBtns">
              <ul class="tags">
                <li class="tag">${data[id].technologies[0]}</li>
                <li class="tag">${data[id].technologies[1]}</li>
                <li class="tag">${data[id].technologies[2]}</li>
                <li class="tag">${data[id].technologies[3]}</li>
              </ul>
              <hr>
              <div class="actionBtnPopup">
               <a class="btn btnPopup" href=${data[id].seeLive} target='blank'>
               See Live <img class="seeAll" src='./Assets/Icon.svg' alt="seeLive"></a>
              <a class="btn btnPopup" href=${data[id].sourceCode} target='blank'>
              See Source <img class="seeAll" src='./Assets/Vector.svg' alt="githubCode"></a>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>`;
  occurence.addEventListener('click', () => {
    const body = document.getElementById('body');
    const section = document.createElement('section');
    section.innerHTML = popupCard;
    section.classList.add('hide');
    body.appendChild(section);
    section.classList.add('projectPopup');
    if (section.classList.contains('hide')) { section.classList.remove('hide'); }
    const hidePopup = document.getElementById(`popupClose${id}`);
    hidePopup.addEventListener('click', () => {
      body.removeChild(section);
    });
  });
});