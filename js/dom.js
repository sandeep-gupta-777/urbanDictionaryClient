/*this module will perform DOM manipulation*/
const DomModule = (function () {
    /*cache DOM element*/
    let $search, $results, $tagsWrapper, urbanDicUrl ;

    let init = function () {
        $search = document.getElementById('searchT');
        $results = document.getElementById('results-descriptions');
        $tagsWrapper = document.getElementById('results-tags');

        urbanDicUrl = AppVariablesModule.urbanDictionaryUrl;

        bindEvents();
    };

    let bindEvents = function () {
        $search.onkeypress = function ($event) {
            console.log($event);
            let tempKeyword = $search.value;
            if(tempKeyword && tempKeyword!=="" &&$event.keyCode===13){

                performSearch(urbanDicUrl + tempKeyword).then((value)=>{
                    console.log(JSON.parse(value));
                    populateResultsInit(JSON.parse(value));
                });
            }
        };
        $tagsWrapper.addEventListener('click',tagClickedHandler,true);
    };

    let tagClickedHandler = function ($event) {
        console.log($event);
        if($event.target.nodeType===1){
            let tempKeyword = $event.target.textContent;
            $search.value = tempKeyword;
            performSearch(urbanDicUrl + tempKeyword).then((value)=>{
                console.log(JSON.parse(value));
                populateResultsInit(JSON.parse(value));
            });
            $event.stopPropagation();
        }
    };

    let performSearch = function (url) {
        populateDescription($results,HtmlStringModule.createHTMLStringForPlaceholder('Loading...'));
        return ServerModule.getResults(url);
    };

    let populateResultsInit  = function(results){

        let tags = results.tags, tagHTMLString = "", rowHTMLString = "";

        if(results.result_type==="no_results"){
            populateDescription($results,HtmlStringModule.createHTMLStringForPlaceholder('No Search Results'));
            return;
        }

        tagHTMLString = HtmlStringModule.createHTMLStringForTagsListInit(tags);
        rowHTMLString = HtmlStringModule.createHTMLStringForRowInit(results.list);

        populateTags($tagsWrapper, tagHTMLString);
        populateDescription($results,rowHTMLString);
    };
    let populateTags = function ($tags, tagHTMLString) {
        $tags.innerHTML = "";
        $tags.innerHTML += tagHTMLString;
    };

    let populateDescription = function ($results,rowHTMLString) {
        $results.innerHTML = "";
        $results.innerHTML+= rowHTMLString;
    };

    return{
        init,
    }

})();