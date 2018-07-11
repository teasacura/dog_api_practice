document.addEventListener("DOMContentLoaded", init)

const breedListerEl = document.querySelector("#breed-lister")

function init(){
  Adapter.getDogNamesList()
    .then(r => r.message)
    .then(getDogBreedKeys)

  breedListerEl.onchange=changeEventHandler;
}

function getDogBreedKeys(r) {
  let dogBreeds = Object.keys(r)
  createDogBreedOptions(dogBreeds)
}

function createDogBreedOptions(dogBreeds) {
  const breedOptions = Breed.htmlOptionTemplate(dogBreeds)
  breedListerEl.innerHTML = breedOptions
}

function changeEventHandler(event) {
  Adapter.getDogImages(event.target.value)
    .then(r => r.message)
    .then(renderDogImages)
}

function renderDogImages(dogImages) {
  const dogImagesDiv = document.querySelector("#dog-images")
  let allDogImages = Breed.completeHTMLImage(dogImages)
  dogImagesDiv.innerHTML = allDogImages
}
