const projects = {
 watercolor: {title:'작은 모험을 위한 인터페이스',category:'GAME UI · WATERCOLOR FANTASY',description:'수채화풍 판타지 RPG를 위한 UI 디자인 탐색입니다. 꽃과 잎 장식, 종이 질감, 파스텔 컬러를 HUD·인벤토리·퀘스트·대화창·미니맵에 연결했습니다. ChatGPT를 활용해 생성·수정한 작업입니다.\n\n아래 두 이미지는 텍스트 없는 전체 UI 시트입니다. 투명 배경 버전에는 그림 영역에도 반투명도가 있으며, 두 버전 모두 인벤토리 아이템이 남아 있습니다. 원본은 보정 없이 보존했습니다.',images:[['assets/watercolor/UI_01_Textless_Transparent.png','투명 배경 버전 · 1671 × 941 PNG. 밝은 배경 위에 표시했습니다.'],['assets/watercolor/UI_02_Textless_Black_Background.png','검정 배경 버전 · 1671 × 941 PNG. 이 파일은 불투명합니다.']],links:[['downloads/Watercolor_Fantasy_Portfolio.zip','원본과 작업 자료 ZIP 받기',true],['assets/watercolor/Portfolio_UI_Overview.png','포트폴리오 미리보기 열기',false]]},
 bunny:{title:'토끼 인형 캐릭터',category:'CHARACTER · TURNAROUND',description:'붉은 원피스, 봉제선, 서로 다른 색의 눈동자가 특징인 토끼 인형 캐릭터입니다. 정면·측면·후면을 한 장에 정리한 디자인 시트입니다.',images:[['images/bunny doll charater.png','캐릭터 턴어라운드 · 정면 / 측면 / 후면']]},
 pickaxe:{title:'토끼 문양의 곡괭이',category:'GAME PROP · CONCEPT',description:'토끼 문양이 새겨진 헤드, 천 장식과 나무 손잡이를 조합한 게임 소품 콘셉트입니다. 단단한 금속과 부드러운 패브릭의 대비가 특징입니다.',images:[['images/토끼 문양 장식의 귀여운 곡괭이.png','토끼 모티프 게임 소품']]},
 parody:{title:'캐릭터 드로잉',category:'CHARACTER · DRAWING',description:'기존 포트폴리오에 수록한 패러디 캐릭터 작업입니다. 작은 원본의 해상도를 유지해 표시합니다.',images:[['images/parody charater.jpg','패러디 캐릭터 드로잉 · 기존 원본',true]]}
};
const dialog=document.querySelector('#project-dialog');
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));
 let visible=0;document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&button.dataset.filter!==card.dataset.category;if(!card.hidden)visible++;});
 document.querySelector('#filter-status').textContent=`작품 ${visible}개 표시`;
}));
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
 const project=projects[button.dataset.project];
 document.querySelector('#dialog-title').textContent=project.title;document.querySelector('#dialog-category').textContent=project.category;document.querySelector('#dialog-description').textContent=project.description;
 const images=document.querySelector('#dialog-images');images.replaceChildren();
 project.images.forEach(([src,caption,small])=>{const figure=document.createElement('figure');const img=document.createElement('img');img.src=src;img.alt=caption;if(small)img.className='small-original';const text=document.createElement('figcaption');text.textContent=caption;figure.append(img,text);images.append(figure);});
 const links=document.querySelector('#dialog-links');links.replaceChildren();(project.links||[]).forEach(([href,text,download])=>{const link=document.createElement('a');link.href=href;link.textContent=text;link.className='button';if(download)link.download='';else{link.target='_blank';link.rel='noopener';}links.append(link);});
 dialog.showModal();document.body.classList.add('modal-open');
}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
dialog.addEventListener('click',event=>{const rect=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom))dialog.close();});
