/*The job of this module is to create strings which will be later appended into DOM elements by DOMModule*/

const HtmlStringModule = (function () {

    let createHTMLStringForTagsListInit = function(tags){
        let tagHTMLString = "";
        tags.forEach(function (tag) {
            tagHTMLString += createHTMLStringForTagsList(tag);
        });
        return ` <div class="row">
            <ul id="tags-wrapper">
                ${tagHTMLString}
            </ul>
        </div>`;
    };

    let createHTMLStringForTagsList = function (tag) {
        let tempTagHTMLString = `
                <li class="badge">${tag}</li>
        `;
        return tempTagHTMLString;
    };

    let createHTMLStringForRowInit = function(results){
        let rowHTMLString = "";
        results.forEach(function (result) {
            rowHTMLString += createHTMLStringForRow(result);
        });
        return rowHTMLString;
    };

    let createHTMLStringForRow = function(result){
        let tempResultObjDetails = result;
        let tempRowDivString = `
        <div class="row ">
            <div class="row-heading">
                <h1><a href=${tempResultObjDetails.permalink}>${tempResultObjDetails.word}</a></h1>
            </div>
            <div class="row-meaning">
                <p>${tempResultObjDetails.definition}</p>
            </div>
            <div class="row-example">
               ${tempResultObjDetails.example}
            </div>
            <div class="row__metadata">
                <div class="row__metadata-tags">
                    <div class="row__metadata-votes">
                        <div>
                            <i class="fa fa-arrow-up"></i><span class="row__votes-up-count">${tempResultObjDetails.thumbs_up}</span>
                            <i class="fa fa-arrow-down"></i><span class="row__votes-down-count">${tempResultObjDetails.thumbs_down}</span>
                        </div>
                    </div>
                </div>

                <div class="row__metadata-author">
                    <span class="author-name"> ${tempResultObjDetails.author}</span>
                    <span>|</span>
                    <span class="author-markup">Author</span>
                </div>
            </div>
        </div>`;
        return tempRowDivString;
    };

    let createHTMLStringForPlaceholder = function (placeholderText) {
      return `<h1 class="results-descriptions__placeholder-nosearch">${placeholderText}</h1>`;
    };

    return {
        createHTMLStringForRowInit,
        createHTMLStringForTagsListInit,
        createHTMLStringForPlaceholder
    };

})();