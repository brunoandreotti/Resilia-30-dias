
const imageDownload = document.querySelectorAll('div.download img')

for (const image of imageDownload) {
  image.addEventListener('mouseover', moveUp)
  image.addEventListener('mouseout', moveDown)

  
}


function moveUp() {
  this.style.transform = "translateY(-5px)"
}

function  moveDown() {
  this.style.transform = "translateY(0px)"
}
