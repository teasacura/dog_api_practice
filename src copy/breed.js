class Breed {
  static htmlOptionTemplate(array) {
    let allTemplates = ""
    for(const el of array){
      allTemplates += `
      <option value="${el}" selected="true">${el}</option>
      `
    }
    return allTemplates
  }

  static htmlImageTemplate(array) {
    let newDiv = `<div class="column">`
    for(const el of array) {
        newDiv += `<img src="${el}" style="width:100%">`
      }
      let completeDiv = newDiv + `</div>`
      return completeDiv
      console.log(array)
      console.log(completeDiv)
    }

  static completeHTMLImage(array) {
    let allTemplates = ""
    for(let i=0; i < 15; i++){
      let newArray = array.splice(0,7)
      allTemplates += Breed.htmlImageTemplate(newArray)
    }
    return allTemplates
  }
}
