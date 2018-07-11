BASE_URL = "https://dog.ceo/api/breed"

class Adapter {

  static getDogNamesList(){
    let breedsListUrl = BASE_URL + "s/list/all"

    return fetch(breedsListUrl)
      .then(r => r.json())
      .catch(error => console.log(error))
  }

  static getDogImages(breed){
    let specificBreedUrl = BASE_URL + `/${breed}/images`
    return fetch(specificBreedUrl)
      .then(r => r.json())
      .catch(error => console.log(error))
  }

}
