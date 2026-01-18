window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
    ( typeof window.performance != "undefined" && 
    window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      // Handle page restore.
      console.log('pageshow');
    }
});
/* URL Test/Dev Variables */
var windowHref = window.location.href;
//console.log('windowHref ' + windowHref);
if(windowHref.indexOf('develop.myrugiet.club') > -1){
    urlTarget = 'https://develop.myrugiet.club';
    questionTargetFirst = 1;
    questionTargetSecond = 7;
    questionTargetLast = 75;
    var qsArray = [
        {"question": 1,"step": 9,"tracker": 1},
        {"question": 7,"step": 10,"tracker": 2},
        {"question": 8,"step": 11,"tracker": 3},
        {"question": 9,"step": 12,"tracker": 4},
        {"question": 10,"step": 13,"tracker": 5},
        {"question": 11,"step": 14,"tracker": 6},
        {"question": 12,"step": 15,"tracker": 7},
        {"question": 13,"step": 16,"tracker": 8},
        {"question": 14,"step": 17,"tracker": 9},
        {"question": 15,"step": 18,"tracker": 10},
        {"question": 16,"step": 19,"tracker": 11},
        {"question": 17,"step": 20,"tracker": 12},
        {"question": 18,"step": 21,"tracker": 13},
        {"question": 19,"step": 22,"tracker": 14},
        {"question": 75,"step": 23,"tracker": 15}
    ];
}
else if(windowHref.indexOf('members.rugiet.com') > -1){
    urlTarget = 'https://members.rugiet.com';
    questionTargetFirst = 3;
    questionTargetSecond = 18;
    questionTargetLast = 54;
    var qsArray = [
        {"question": 3,"step": 9,"tracker": 1},
        {"question": 18,"step": 10,"tracker": 2},
        {"question": 20,"step": 11,"tracker": 3},
        {"question": 25,"step": 12,"tracker": 4},
        {"question": 28,"step": 13,"tracker": 5},
        {"question": 30,"step": 14,"tracker": 6},
        {"question": 33,"step": 15,"tracker": 7},
        {"question": 35,"step": 16,"tracker": 8},
        {"question": 39,"step": 17,"tracker": 9},
        {"question": 43,"step": 18,"tracker": 10},
        {"question": 45,"step": 19,"tracker": 11},
        {"question": 49,"step": 20,"tracker": 12},
        {"question": 50,"step": 21,"tracker": 13},
        {"question": 54,"step": 22,"tracker": 14}
    ];
    
}
var url = location.href;
urlCheck(url);
history.pushState = (function(f) {
    return function pushState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("pushstate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.pushState);
history.replaceState = (function(f) {
    return function replaceState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event("replacestate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
    };
})(history.replaceState);
window.addEventListener("popstate", function() {
    window.dispatchEvent(new Event("locationchange"));
});
window.addEventListener("locationchange", function() {
    url = location.href;
    urlCheck(url);
});
/* If form is not loaded, reload page. */
window.addEventListener('load', function () {
    setTimeout(function(){
        //window.scrollTo({top: 0});
    }, 1500);
});
function urlCheck(url) {
    //console.log('window.location.pathname: '+window.location.href);
    var allMemberPages = urlTarget;
    if (window.location.href.indexOf(allMemberPages) > -1 && window.location.href !== urlTarget+'/users/sign_in') { // Add " / " to run on all urls
        allMemberPages = window.location.href;
     
        if (isSameUrl(url, allMemberPages, true)) {
            createTest2003();
        }
    }
}
function isSameUrl(currentUrl, specifiedUrl, includeQueryParams) {
    currentUrl = currentUrl.includes("#") ?
        currentUrl.slice(0, currentUrl.indexOf("#")) :
        currentUrl;
    specifiedUrl = specifiedUrl.includes("#") ?
        specifiedUrl.slice(0, specifiedUrl.indexOf("#")) :
        specifiedUrl;
    if (!includeQueryParams)
        currentUrl = currentUrl.includes("?") ?
        currentUrl.slice(0, currentUrl.indexOf("?")) :
        currentUrl;
    if (currentUrl === specifiedUrl || currentUrl === specifiedUrl + "/")
        return true;
    return false;
}
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
function createTest2003(){
    var bodyInterval = setInterval(function () {
        var bodyEle = document.querySelector('body');
        if (!bodyEle.classList.contains('spz_rugiet_2003')) {
            clearInterval(bodyInterval);
            bodyEle.classList.add('spz_rugiet_2003');
            let pathname = window.location.pathname;
            var variantpageexist = 0;
            //console.log('pathname: '+pathname);
            if(pathname.indexOf('/products/28/user_questionnaires/') > -1){
                pathname = '/products/28/user_questionnaires/';
                variantpageexist = 1;
            }
            else if(pathname.indexOf('/carts/') > -1){
                pathname = '/carts/';
                variantpageexist = 1;
            }
            else if(pathname.indexOf('/checkout/') > -1){
                pathname = '/checkout/';
                variantpageexist = 1;
            }


            var getStorage = localStorage.getItem("pageTracking");
            //console.log('getStorage: '+getStorage);
            if(!getStorage && getStorage == null && variantpageexist == 1){
                window.location.href = urlTarget+'/user_demographic/new';
                //console.log('variantpageexist: ' + variantpageexist);
            }
            switch (pathname) {
                case "/users/sign_up":
                    userSignupStep1();
                    break;
                case "/user_demographic/new":
                    userDemographicStep2();
                    break;
                case "/products/28/user_questionnaires/":
                    userQuestionnairesStep2Process();
                    break;
                case "/products/28":
                    productListStep3();
                    break;
                case "/carts/":
                    cartStep4Process();
                    break
                case "/checkout/":
                    checkoutStep7();
                    break
                case "/user_verifications":
                    thankyouStep8Process();
                    break
              default:
                text = "No value found";
            }
            var getStorage = localStorage.getItem("pageTracking");
            //console.log('getStorage: '+getStorage);
        }
    });
}
function userSignupStep1(){
    //console.log('userSignupPage1');
    localStorage.setItem("pageTracking", 1);
}
function userDemographicStep2(){
    //console.log('userDemographicPage2');
    var bodyEle = document.querySelector('body');
    bodyEle.classList.add('spzStep2');
    localStorage.setItem("pageTracking", 2);
}
function enableLoader(){
    var bodyEle = document.querySelector('body');
    var loaderhtml = `
    <div class="spz_rugiet_2003_loader">
        <span class="loader"></span>
    </div>
    `;
    bodyEle.insertAdjacentHTML('beforebegin',loaderhtml);
}
function userQuestionnairesStep2Process(){
    //alert('userQuestionnairesStep2Process');
    //console.log('userQuestionnairesPage3');
    /* URL Splitter to get Questionnaires ID */
    var urlPathnameFull = window.location.pathname;
    var urlPathnameSplit0 = urlPathnameFull.split('/products/28/user_questionnaires/');
    var urlPathnameSplit1 = urlPathnameSplit0[1].split('/questions/');
    var questionnairesID = urlPathnameSplit1[0];
    //console.log('urlPathname0: '+urlPathnameSplit0[1]);
    //console.log('urlPathname1: '+urlPathnameSplit1[0]);
    var matchURL3 = '/products/28/user_questionnaires/'+questionnairesID+'/questions/'+questionTargetFirst;
    var matchURL18 = '/products/28/user_questionnaires/'+questionnairesID+'/questions/'+questionTargetSecond;
    var matchURL54 = '/products/28/user_questionnaires/'+questionnairesID+'/questions/'+questionTargetLast;
    var getStorage = localStorage.getItem("pageTracking");
    localStorage.setItem("questionnairesID", questionnairesID);
    /* Override Steps */
    //localStorage.setItem("pageTracking", 2);
    //console.log('window.location.pathname: '+ window.location.pathname);
    var questionStepLast = 22;
    if(questionTargetLast == 75){
        questionStepLast = 23;
    }
    if(getStorage == 2 || getStorage == 3){
        // process qutionanaire loader
        enableLoader();
        //console.log('window.location.pathname: '+ window.location.pathname);
        //console.log('matchURL3: '+ matchURL3);
        //console.log('matchURL54: '+ matchURL54);

        if(matchURL3 === window.location.pathname){
            //console.log('matchURL3: '+ matchURL3);
            window.location.href = '/products/28/user_questionnaires/'+questionnairesID+'/questions/'+questionTargetLast;
        }
        if(matchURL54 === window.location.pathname){
            //console.log('inside 54 if statement');

            localStorage.setItem("pageTracking", 3);
            //console.log('questionnairesID: '+ questionnairesID);
            //console.log('matchURL54: '+ matchURL54);
            
            window.addEventListener("load", (event) => {
                var questionanaire54 = document.querySelector('#user_answer_form #radiogroup_store_questionnaires_question_'+questionTargetLast+' li:nth-child(2) label'); 
                questionanaire54.click();
                document.querySelector('.submit-button').click();
            });

            //questionanaire54.classList.add('clickedviabot');
    
            //document.querySelector('.submit-button').classList.add('clickedviabot');
        }
    }
    else if(getStorage == 8 || getStorage == 9 || getStorage == 10 && matchURL3 === window.location.pathname){
        // continue qutionanaire 3
        if(matchURL3 === window.location.pathname){
            //console.log('spzStep9 detected');
            localStorage.setItem("pageTracking", 9);
            document.body.classList.add('spzStep9');
    
            var arrowsLeft = document.querySelector('.questionnaire-content .arrows .left-arrow-default');
            arrowsLeft.setAttribute("href",urlTarget+"/user_verifications");
        }
        else if(getStorage == 9 && matchURL18 === window.location.pathname){
            //console.log('spzStep10 detected');
            localStorage.setItem("pageTracking", 10);
            document.body.classList.add('spzStep10');
        }
    }
    else if(getStorage >= 9 && getStorage <= questionStepLast){
        /* Questionnaire Steps 10 - 22 Flow */
        var urlPathnameFull = window.location.pathname;
        var urlPathnameSplit0 = urlPathnameFull.split('/questions/');
        var questionnaireNumber = urlPathnameSplit0[1].replace("#", "");
        
        let getStep = qsArray.find(qsArray => qsArray.question === parseInt(questionnaireNumber));
        //console.log('questionnaireNumber: '+ questionnaireNumber);
        //console.log(getStep);
        let stepNumber = getStep.step;
        let trackerNumber = getStep.tracker;
        var windowWidth = window.innerWidth;
        //console.log('windowWidth: '+ windowWidth);
        var trackerSize = 102;
        if(windowWidth < 767){
            trackerSize = 26;
        }
        else if(windowWidth < 1024){
            trackerSize = 55;
        }
        let trackerPixel = trackerSize * trackerNumber;
        //console.log('spzStep'+stepNumber+' detected');
        //console.log('getStep.tracker: '+getStep.tracker);
        //console.log('trackerPixel: '+trackerPixel);
        localStorage.setItem("pageTracking", stepNumber);
        document.body.classList.add('spzStep'+stepNumber);
        var trackerStyleHTML = `
        <style id="progressTrackerStyle">
        .spz_rugiet_2003.spzStep${stepNumber} .checkout-progress__bar{
            width:${trackerPixel}px !important;
        }
        </style>`;
        document.head.insertAdjacentHTML("beforeend", trackerStyleHTML);
        if(stepNumber == questionStepLast){
            // continue qutionanaire 54
            
            var answerCheckInterval = setInterval(function () {
                var qC2Item = document.querySelector('#user_answer_form #radiogroup_store_questionnaires_question_'+questionTargetLast+' li:nth-child(2)'); 
                var preCheckLastQuestion = localStorage.getItem("allQuestionsDone");
                //console.log('allQuestionsDone: ' + preCheckLastQuestion);
                if(qC2Item.classList.contains('!bg-rugietmustard') && !preCheckLastQuestion){
                    clearInterval(answerCheckInterval);
                    qC2Item.classList.remove('!bg-rugietmustard');
                    var qC2Input = document.querySelector('#user_answer_form #radiogroup_store_questionnaires_question_'+questionTargetLast+' li:nth-child(2) input'); 
                    qC2Input.removeAttribute('checked');
                    qC2Input.checked = false;
                 
                    var submitbtnImg = document.querySelector('.submit-button img');
                    submitbtnImg.setAttribute('src','/assets/survey/right-arrow-inactive-4e4909405720887d32b1023a9ec638026202d5d5f01b3af1755aaaddbe921dcd.svg');
                } 
                else if(preCheckLastQuestion){
                    clearInterval(answerCheckInterval);
                }
            });
        }
    }
}
function productListStep3(){
    //console.log('productListStep3');
    var getStorage = localStorage.getItem("pageTracking");
    document.body.classList.add('remove_getstarted');
    if(getStorage >= 3 && getStorage <= 6 && window.location.pathname == '/products/28'){
        localStorage.setItem("pageTracking", 3);
        document.body.classList.add('spzStep3');
        var targetPrevArrow = document.querySelector('form .arrows .arrow');
        targetPrevArrow.setAttribute("href",urlTarget+"/user_demographic/new");
        //href="urlTarget"
    }
    else if(getStorage == 22 || getStorage == 23){
        localStorage.setItem("pageTracking", 23);
        document.body.classList.add('spzStep23');
        enableLoader();
        window.location.href = urlTarget+'/user_verifications';
    }
}
function cartStep4Process(){
    var getStorage = localStorage.getItem("pageTracking");
    /* URL Splitter to get Questionnaires ID */
    var urlPathnameFull = window.location.pathname;
    var urlPathnameSplit0 = urlPathnameFull.split('/carts/');
    var urlPathnameSplit1 = urlPathnameSplit0[1].split('/edit');
    var urlPathnameSplit2 = urlPathnameSplit1[0].split('/summary');
    var cartID = urlPathnameSplit2[0];
    var matchURL4 = '/carts/'+cartID+'/edit';
    var matchURL5 = '/carts/'+cartID+'/summary';
    localStorage.setItem("cartID", cartID);
    //console.log('cartID: '+cartID);
    //console.log('window.location.pathname : '+window.location.pathname );
    //console.log('matchURL4: '+matchURL4);
    if(window.location.pathname == matchURL4){
        //console.log('spzStep4 detected');
        localStorage.setItem("pageTracking", 4);
        document.body.classList.add('spzStep4');
        var titleHeading = document.querySelector('.spz_rugiet_2003.spzStep4 [data-step="quantity_selection"] > .relative > .font-termina.font-bold');
        titleHeading.textContent = 'How many doses do you want?';
        /* Labels Update */
        var quantity2 = document.querySelector('.spz_rugiet_2003.spzStep4 [data-step="quantity_selection"] label[for="store_order_line_items_attributes_quantity_2"]');
        var labelText2 = quantity2.querySelector('input ~ .items-start .text-base');
        labelText2.textContent = '12 doses per month';
        labelText2.classList.add('spz_font');
        var labelMonthParent2 = quantity2.querySelector('.frequency-card > .flex .items-end:nth-child(2) > .items-end .per-month-label:nth-child(1)');
        labelMonthParent2.textContent = '2 Packs';
        var quantity3 = document.querySelector('.spz_rugiet_2003.spzStep4 [data-step="quantity_selection"] label[for="store_order_line_items_attributes_quantity_3"]');
        var labelText3 = quantity3.querySelector('input ~ .items-start .text-base');
        labelText3.textContent = '18 doses per month';
        labelText3.classList.add('spz_font');
        var labelMonthParent3 = quantity3.querySelector('.frequency-card > .flex .items-end:nth-child(2) > .items-end .per-month-label:nth-child(1)');
        labelMonthParent3.textContent = '3 Packs';
        var quantity4 = document.querySelector('.spz_rugiet_2003.spzStep4 [data-step="quantity_selection"] label[for="store_order_line_items_attributes_quantity_4"]');
        var labelText4 = quantity4.querySelector('input ~ .items-start .text-base');
        labelText4.textContent = '24 doses per month';
        labelText4.classList.add('spz_font');
        var labelMonthParent4 = quantity4.querySelector('.frequency-card > .flex .items-end:nth-child(2) > .items-end .per-month-label:nth-child(1)');
        labelMonthParent4.textContent = '4 Packs';
        var quantity1 = document.querySelector('.spz_rugiet_2003.spzStep4 [data-step="quantity_selection"] label[for="store_order_line_items_attributes_quantity_1"]');
        var labelText1 = quantity1.querySelector('input ~ .items-start .text-base');
        labelText1.textContent = '6 doses per month';
        labelText1.classList.add('spz_font');
        var labelMonthParent1 = quantity1.querySelector('.frequency-card > .flex .items-end:nth-child(2) > .items-end .per-month-label:nth-child(1)');
        labelMonthParent1.textContent = '1 Pack';
        
    }
    else if(window.location.pathname == matchURL5){
        //('spzStep5 detected');
        localStorage.setItem("pageTracking", 5);
        document.body.classList.add('spzStep5');
        run1004Test();
    /*
        step5ContentUpdate();
        var allInputLabels = document.querySelectorAll('.spz_rugiet_2003 #cart-container label');
        allInputLabels.forEach(function(inputLabel){
            inputLabel.addEventListener('click', function(){
                inputLabel.addEventListener('click', function(){
                    var spinnerInterval = setInterval(function () {
                        var spinner = document.querySelector('.spz_rugiet_2003 .spinner');
                        if(spinner.classList.contains('invisible')){
                            //step5ContentUpdate();
                        }
                    });
                    setTimeout(() => {
                        clearInterval(spinnerInterval);
                    }, 2000);
                });
            });
        });
    */
    }
}
function step5ContentUpdate(){
    //console.log('step5ContentUpdate');
    var titleHeadingInterval = setInterval(function () {
        var titleHeading = document.querySelector('.spz_rugiet_2003 #cart-container h1');
        if(titleHeading.textContent != 'Cart'){
            titleHeading.textContent = 'Cart';
            titleHeading.classList.add('spz_cart_title');
            
            var descriptionText = document.querySelector('.spz_rugiet_2003.spzStep5 [data-controller="store--cart--summary"] .relative > .flex > .leading-normal:nth-child(10)');
            descriptionText.textContent = 'Your information will be reviewed by a doctor to make sure Rugiet is medically appropriate for you.  You will only be charged if a prescription is written and the product ships.  Until then, a temporary hold will be placed on your card.';
            descriptionText.classList.add('spz_cart_description');
        }
    });
    setTimeout(() => {
        clearInterval(titleHeadingInterval);
    }, 5000);
}
function checkoutStep7(){
    /* URL Splitter to get Questionnaires ID */
    var urlPathnameFull = window.location.pathname;
    var urlPathnameSplit0 = urlPathnameFull.split('/checkout/');
    var checkoutID = urlPathnameSplit0[1];
    var matchURL7 = '/checkout/'+checkoutID+'';
    //('matchURL7: ' + matchURL7);
    if(window.location.pathname == matchURL7){
        //console.log('spzStep7 detected');
        localStorage.setItem("pageTracking", 7);
        document.body.classList.add('spzStep7');
    }
}
function thankyouStep8Process(){
    /* URL Splitter to get Questionnaires ID */
    var getStorage = localStorage.getItem("pageTracking");
    if(parseInt(getStorage) !== 23){
        //localStorage.setItem("pageTracking", 7); 
    }
    var matchURL8 = '/user_verifications';
    //console.log('thankyouStep8Process matchURL7: ' + matchURL8);
    //console.log('thankyouStep8Process getStorage: ' + getStorage);
    /* if left off between question, restart from that question */
    var questionnairesID = localStorage.getItem("questionnairesID");
    if(getStorage >= 9 && getStorage <= 22){
        document.body.style.opacity = 0;
        let getqsArray = qsArray.find(qsArray => qsArray.step === parseInt(getStorage));
        //console.log('getqsArray: ' + getqsArray);
        //console.log('getstep: ' + getqsArray.step);
        //console.log('getquestion: ' , getqsArray.question);
        //console.log('gettracker: ' , getqsArray.tracker);
        window.location.href = '/products/28/user_questionnaires/'+questionnairesID+'/questions/'+getqsArray.question;
    }
     
    
    /* if left off between question, restart from that question */
    if(window.location.pathname == matchURL8){
        if( getStorage == 3 || 
            getStorage == 7 || 
            getStorage == 8 || 
            getStorage == 9
        ){
            //console.log('spzStep8 detected');
            setTimeout(() => {
                localStorage.setItem("pageTracking", 8);
            }, 1000);
            document.body.classList.add('spzStep8');    
            dev_variable = `
            [data-controller="id-verification store--cart--clear-checkout-address"] 
            data-id-verification-persona-environment="sandbox"
            `;
            var titleHeading = document.querySelector('.spz_rugiet_2003.spzStep8 [data-controller="id-verification store--cart--clear-checkout-address"] > .relative > .font-termina.font-bold');
            titleHeading.textContent = 'Thank you!';
    
            var appendTarget = document.querySelector('.spz_rugiet_2003.spzStep8 [data-controller="id-verification store--cart--clear-checkout-address"] > .relative');
    
            var questionnairesID = localStorage.getItem("questionnairesID");
            //console.log('questionnairesID: '+ questionnairesID);
            if(!questionnairesID && questionnairesID === null){
                window.location.href = urlTarget+'/user_demographic/new';
            }
            var createQuestionnair3Link = '/products/28/user_questionnaires/'+questionnairesID+'/questions/'+questionTargetFirst;
            var questionnaireCTAHTML = `
            <div class="questionnaireContentWrapper">
                <div class="importantTitle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <path d="M6.85953 2.57347L1.21286 12.0001C1.09644 12.2018 1.03484 12.4303 1.03418 12.6631C1.03353 12.896 1.09385 13.1249 1.20914 13.3272C1.32443 13.5294 1.49068 13.698 1.69133 13.816C1.89199 13.9341 2.12006 13.9976 2.35286 14.0001H13.6462C13.879 13.9976 14.1071 13.9341 14.3077 13.816C14.5084 13.698 14.6746 13.5294 14.7899 13.3272C14.9052 13.1249 14.9655 12.896 14.9649 12.6631C14.9642 12.4303 14.9026 12.2018 14.7862 12.0001L9.13953 2.57347C9.02068 2.37754 8.85334 2.21555 8.65366 2.10313C8.45397 1.9907 8.22868 1.93164 7.99953 1.93164C7.77037 1.93164 7.54508 1.9907 7.3454 2.10313C7.14571 2.21555 6.97837 2.37754 6.85953 2.57347Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 6V8.66667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 11.333H8.00667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
                    IMPORTANT!
                </div>
                <div class="importantText">
                    In order to approve your prescription,<br>
                    we'll need a few medical details.
                </div>
            </div>
            <div class="questionnaireCTAWrapper">
                <a href="${createQuestionnair3Link}" class="questionnaireCTA">
                    Begin Questionnaire
                </a>
            </div>
            `;
    
            appendTarget.insertAdjacentHTML('afterend',questionnaireCTAHTML);
            var global_alert = document.querySelector('.global_alert');
            global_alert.style.display = 'none';
        }
        else if(getStorage == 23){
            //console.log('spzStep23 detected');
            localStorage.setItem("pageTracking", 23);
            document.body.classList.add('spzStep23');
            document.body.classList.add('verify_page');
            var titleHeadin23 = document.querySelector('.spz_rugiet_2003.spzStep23 [data-controller="id-verification store--cart--clear-checkout-address"] > .relative > .font-termina.font-bold');
            titleHeadin23.textContent = 'Last step: Verify your ID';
            
            localStorage.setItem("allQuestionsDone", 'true');
        }
    } 
}
/* 1004 Start */
var propCardHTML = '';
function run1004Test(){
    var jQuerySlickInterval = setInterval(function() {
        if (typeof jQuery != 'undefined') {
            clearInterval(jQuerySlickInterval);

            waitForElm('body').then(function () {
                var bodyEle = document.querySelector('body');
                if (!bodyEle.classList.contains('rugiet_1004')) {
                    waitForElm('#cart-container').then(function(){
                        bodyEle.classList.add('rugiet_1004');
                        variantChanges1004();
                        getData();
                        
                        jQuery('input[type=radio][name=subscription_type_id]').click(function() {
                            document.querySelector('body').classList.add('lock_labels');
                            setTimeout(() => {
                                document.querySelector('body').classList.remove('lock_labels');
                            }, 2500);
                            var checkStr1 = setInterval(function() {                
                                if(jQuery('.rugiet_1004 .questionnaire-container .spinner.invisible').length > 0) {
                                    clearInterval(checkStr1);
                                    if(jQuery('.bg-rugietmustard input[name="subscription_type_id"]').val() == jQuery('input[name="subscription_type_id"]:checked').val()){
                                        var promo_cta_sec = document.querySelector(".promo_cta_sec");
                                        if(!promo_cta_sec){
                                            variantChanges1004();
                                        }
                                    }
                                    // getData();
                                }
                            });
                        });
                    });
                }
            });
        }
    });

    window.onload = function(e){ 
        variantChanges1009();
        //console.log('load 1009')
    }
}
function variantChanges1004(){
    //console.log('variantChanges1004 runs');
    //console.log('variantChanges1004');
    waitForElm('#cart-container > .relative > .flex >.flex:nth-child(1)').then(function () {
        //console.log('variantChanges1004 wait ended');
        document.querySelector('#cart-container').classList.add('spz_1004_variant');
        setTimeout(() => {
            document.querySelector('body').classList.remove('lock_labels');
        }, 1000);
        // Promo code and form functionality
        var promo_cta_sec = document.querySelector(".promo_cta_sec");
        if(!promo_cta_sec){
            //console.log('promo_cta_sec runs');
            var promo_cta = document.createElement("div");
            promo_cta.innerHTML = '<div class="promo_cta_wrap"><div class="promo_cta">Enter Promo Code</div></div>';
            promo_cta.classList.add('promo_cta_sec');
            var promo_info = document.createElement("div");
            promo_info.innerHTML = '<div class="promo_info_txt">* Max of one promotion per order</div>';
            promo_info.classList.add('promo_info');
            var form_sec = document.querySelector("#financial-summary + div form");
            insertAfter(form_sec, promo_cta);
            var promo_sec = document.querySelector(".rugiet_1004 .promo_cta_sec");
            insertAfter(promo_sec, promo_info);
            document.querySelector('#financial-summary + div form input[type=text]').placeholder = '';
            let org_html = document.querySelector('#financial-summary + div form input[type=text]');
            let new_html = "<div class='input_wrap'>" + org_html.outerHTML + "</div>";
            document.querySelector('#financial-summary + div form input[type=text]').outerHTML = new_html;
            var input_label = document.createElement("label");
            input_label.innerHTML = 'Enter Promo Code';
            input_label.setAttribute('for','promotion[promo_code]');
            var input_wrap = document.querySelector(".input_wrap input");
            insertAfter(input_wrap, input_label);
            jQuery('.promo_cta_wrap').on('click','.promo_cta',function () {
                jQuery('.rugiet_1004 #financial-summary + div form').addClass('show_promo');
                jQuery('.rugiet_1004 .promo_cta').addClass('hidecta');
                jQuery('.rugiet_1004 .promo_info_txt').addClass('info_show');
                jQuery('.rugiet_1004 #financial-summary').addClass('show_promo');
            });
            jQuery('#cart-container > .relative > .flex >.flex:nth-child(1)').addClass('cart_items');
            document.querySelector('#cart-container > .relative > .flex').classList.add('cart-row');
            let colHtml = `<div class="lead-col-left lead-col-50"></div><div class="lead-col-right lead-col-50"></div>`
            document.querySelector('.cart_items .leading-8').insertAdjacentHTML('afterbegin', colHtml);
            document.querySelector('.lead-col-left').prepend(document.querySelectorAll('.cart_items .leading-8 > div')[2])
            document.querySelector('.lead-col-left').prepend(document.querySelector('.cart_items .leading-8 > p'))
            document.querySelector('.lead-col-left p').textContent = 'Combination';
            document.querySelector('.lead-col-right').prepend(document.querySelectorAll('.cart_items .leading-8 > div')[2])
            document.querySelector('.lead-col-right').prepend(document.querySelector('.cart_items .leading-8 > p'))
            document.querySelector('.lead-col-right p').textContent = 'Kit Selection';
            document.querySelector('#cart-container > .relative > .flex > p.font-bold.leading-normal').classList.add('supply-title');
            document.querySelector('.supply-title').textContent = 'Choose Supply';      
            
            // Change Selection Add
            let backHrf = '';
            document.querySelectorAll('.cart-row > .inline-flex > a').forEach(function(lnk){
                if(lnk.textContent.indexOf('Go Back') > -1){
                    backHrf = lnk.href
                }
                if(lnk.textContent.indexOf('Proceed to Payment') > -1){
                    lnk.parentElement.classList.add('proceed-btn-wrapper');
                    document.querySelector('.proceed-btn-wrapper button').setAttribute('tabindex', '-1');
                }
            })
            document.querySelectorAll('input[name="subscription_type_id"]').forEach((function(elem){
                elem.closest('.inline-flex.flex-col.w-full').classList.add('selection-box');
                if(elem.checked){
                    elem.closest('.inline-flex.flex-col.w-full').classList.add('selected-box');
                } else {
                    elem.closest('.inline-flex.flex-col.w-full').classList.remove('selected-box');
                }
            }))
            let dosQty = document.querySelector('.cart_items .leading-8 > p.pt-px').textContent.split('|')[1].split(' ')[1]
            dosQty = parseInt(dosQty)
            document.querySelectorAll('label[for="subscription_type_id_2"] .flex .flex .flex')[2].classList.add('qty-three-info');
            document.querySelector('.qty-three-info').insertAdjacentHTML('afterbegin', `<p class="dose-qty three-qty">${3*dosQty} doses</p>`)
            document.querySelector('.qty-three-info .font-bold.pb-1').textContent = `(${document.querySelectorAll('label[for="subscription_type_id_2"] .flex .flex .flex')[2].querySelector('.font-bold.pb-1').textContent})`
            document.querySelectorAll('label[for="subscription_type_id_1"] .flex .flex .flex')[2].classList.add('qty-one-info');
            document.querySelector('.qty-one-info').insertAdjacentHTML('afterbegin', `<p class="dose-qty one-qty">${dosQty} doses</p>`)
            document.querySelector('.qty-one-info .font-bold.pb-1').textContent = `(${document.querySelectorAll('label[for="subscription_type_id_1"] .flex .flex .flex')[2].querySelector('.font-bold.pb-1').textContent})`
            
            let selHtml = `<div class="selection-row"></div>`;
            document.querySelector('.selection-box').insertAdjacentHTML('beforebegin', selHtml)
            document.querySelector('.selection-row').prepend(document.querySelectorAll('.selection-box')[0])
            document.querySelector('.selection-row').append(document.querySelectorAll('.selection-box')[1])
            document.querySelectorAll('.cart-row > p.leading-normal.text-sm').forEach(function(para){
                if(para.textContent == 'You can skip a month, change your shipping schedule, or cancel your membership at anytime.'){
                    para.classList.add('skip-info')
                }
            })
            document.querySelector('[data-store--cart--summary-target="otpContainer"]').parentElement.classList.add('option-div-wrapper')
            document.querySelector('.cart-row >  .flex.underline').classList.add('try-toggler')
            let stillText =  document.querySelector('.try-toggler span.font-bold').textContent
            stillText = stillText.replace("Packs", "packs");
            document.querySelector('.try-toggler span.font-bold').textContent = stillText
            //document.querySelector('.try-toggler span.font-bold').insertAdjacentHTML('beforeend', `<span class="try-does">(${dosQty} doses)</span>`)
            
            document.querySelector('.try-toggler span.font-bold').insertAdjacentHTML('beforeend', `<span class="try-does">(12 doses)</span>`); /* try dose to statcic */
            
            document.querySelectorAll('.cart-row #financial-summary .flex .flex .leading-normal p').forEach(function(para){
                if(para.textContent.indexOf(':') > -1){
                    para.textContent = para.textContent.replace(":", "");
                }
                if(para.textContent.indexOf('Doses') > -1){
                    var dosesInfo = document.querySelector(".doses-info");
                    if(!dosesInfo){
                        document.querySelector('.lead-col-right').insertAdjacentHTML('beforeend', `<div class="doses-info"><span>${para.textContent.split('|')[1].trim()}</span></div>`)
                        para.textContent = `(${para.textContent.split('|')[1].trim()})`;
                        para.classList.add('total-qty')
                        para.parentElement.classList.add('total-qty-col')
                        para.parentElement.parentElement.classList.add('total-qty-row')
                    }
                }
            })
            let prebBtn = `<div class="change-selection"><a href="${backHrf}">Change kit selection</a></div>`
            document.querySelector('.lead-col-right .doses-info').insertAdjacentHTML('beforeend', prebBtn)
            document.querySelector('.cart-row #financial-summary .total-qty-row').insertAdjacentHTML('beforebegin', '<div class="total-summary-title"><h3>Summary</h3></div>');
            let qtyTtl = document.querySelector('.total-qty-row .leading-8 p').textContent.trim().split('x');           
            let qtymon = qtyTtl[1]?.trim().split(' ')[0];
            let qtyprc = qtyTtl[0]?.trim().split('/');
            let checkMon = qtymon ? `<span class="ttl-qty-month">${qtymon}</span> x` : ``;
            document.querySelector('.total-qty-row .leading-8 p').innerHTML = `${checkMon} <span class="ttl-qty-price">${qtyprc[0]}</span>`;
            let dosePrice = qtyprc[0].split('$')[1]
            let threemdp = (parseInt(dosePrice) * 3) - 70;          
            let threemdps = Math.round(threemdp / (dosQty*3));
            let onemdps = Math.round(parseInt(dosePrice) / dosQty);
            document.querySelector('label[for="subscription_type_id_2"] .flex .flex .flex').insertAdjacentHTML('beforeend', `<div class="dos-per-price three-month"><strong>$${threemdps}</strong><span>per dose</span></div>`)
            document.querySelector('label[for="subscription_type_id_2"] .flex .flex .text-sm ').textContent = 'Every 3 months';
            document.querySelector('label[for="subscription_type_id_1"] .flex .flex .flex').insertAdjacentHTML('beforeend', `<div class="dos-per-price one-month"><strong>$${onemdps}</strong><span>per dose</span></div>`)
            document.querySelector('label[for="subscription_type_id_1"] .flex .flex .text-sm ').textContent = 'Every 1 month';
            document.querySelectorAll('#financial-summary > .flex > p.font-bold').forEach(function(para){               
                if(para.textContent == 'Total'){
                    para.parentElement.classList.add('cart-total-row');
                }
            })
            document.querySelectorAll('.rugiet_1004 .cart-row #financial-summary .flex .flex .flex').forEach(function(col){
                col.querySelectorAll('p').forEach(function(par){
                    if(par.textContent.indexOf(':') > -1){
                        par.textContent = par.textContent.replace(":", "");
                    }
                    if(par.textContent.indexOf('Instant Savings') > -1){
                        col.classList.add('instant-div')
                    }
                })
            })
            let oldPrc = document.querySelector('.instant-div p.text-right').textContent.replace(',','').split('$')[1]
            let initPrc = document.querySelector('.cart-total-row p:last-child').textContent.replace(',','').split('$')[1];
            //let initPrc = document.querySelector('#financial-summary .flex.leading-8 p:nth-child(2)').textContent.split('$')[1].replace(',','')
            //console.log('initPrc: '+ document.querySelector('#financial-summary .flex.leading-8 p:nth-child(2)').textContent.split('$')[1].replace(',',''));
    
            let finlOlPrc = parseInt(initPrc) + parseInt(oldPrc)
    
            if(oldPrc != 0){
                //console.log('initPrc: '+parseInt(initPrc));
                //console.log('oldPrc:'+parseInt(oldPrc));
    
                document.querySelector('.cart-total-row p:last-child').insertAdjacentHTML('afterbegin', `<span class="old-price">$${finlOlPrc}</span>`)
            }
            jQuery('.input_wrap input[type=text]').each(function () {
                let $this = jQuery(this);           
                $this.focus(function () {
                    if($this.closest('.input_wrap').hasClass('focus')){ $this.closest('.input_wrap').removeClass('focus'); }
                    else{ 
                        $this.closest('.input_wrap').addClass('focus'); 
                    }
                    if($this.val() == ''){ $this.closest('.input_wrap').removeClass('active'); }
                    else{ $this.closest('.input_wrap').addClass('active'); }
                }).change(function () {
                    if($this.val() == ''){ $this.closest('.input_wrap').removeClass('active'); }
                    else{ $this.closest('.input_wrap').addClass('active'); $this.closest('.input_wrap').removeClass('focus'); }
                }).blur(function () {
                    if($this.val() == ''){ $this.closest('.input_wrap').removeClass('active'); }
                    else{ $this.closest('.input_wrap').addClass('active'); }
                    $this.closest('.input_wrap').removeClass('focus');
                });
            });
            jQuery('#promo-code-result').on('DOMSubtreeModified', function(){           
                if(jQuery(this).text().length > 0){
                    jQuery('.input_wrap').addClass('error_code');
                }else{
                    jQuery('.input_wrap').removeClass('error_code');
                }
            });
            
            let prodDesc = '';
            var checkLoad = setInterval(function () {
                if (propCardHTML.innerHTML != undefined) {
                    clearInterval(checkLoad)
                    propCardHTML.querySelectorAll('.dose-card').forEach(function(card){
                        
                        if(card.querySelector('label.radio-button').textContent.indexOf('Selected combination') > -1){                          
                            card.querySelectorAll('.dose-card__content > div').forEach(function(elm){
                                if(elm.querySelector('span')){
                                    prodDesc += elm.outerHTML
                                }
                            })
                        }
                    })
                    
                    var prodinfoCheck = document.querySelector('.prod-info');
                    if(!prodinfoCheck){
                        document.querySelector('.lead-col-left').insertAdjacentHTML('beforeend', `<div class="prod-info">${prodDesc}</div>`)
                    }
                    
                }
            }, 100)    
        }
    });
}
function variantChanges1009(){
    if(jQuery('.bg-rugietmustard input[id=subscription_type_id_2]:checked').length > 0){
        jQuery('label[for="subscription_type_id_1"]').click();
        jQuery('input[id=subscription_type_id_1]').click();  
        setTimeout(() => {
            jQuery('input[id=subscription_type_id_1]').click();  
        }, 1000);
        var spinnerCheck = setInterval(function() {
            var checkStr1 = document.querySelector('.spinner');
            //console.log(checkStr1.classList.contains('invisible'));
            if(checkStr1.classList.contains('invisible') == true){
                var spz_1004VariantCheck = document.querySelector('#cart-container').classList.contains('spz_1004_variant');
                //console.log('spz_1004VariantCheck: '+spz_1004VariantCheck);
                if(spz_1004VariantCheck == false){
                    variantChanges1004();
                }
                setTimeout(() => {
                    clearInterval(spinnerCheck);
                }, 2000);
            }
        });
    }
}
async function getData() {
    let pUrl = '';
    let sessionInfo =  sessionStorage.getItem("klaviyoPagesVisitCount");
    let sessionArr = sessionInfo && sessionInfo.split(',')
    if(sessionArr){
    sessionArr.map(function(itm){
        if(itm.indexOf('products') > -1){
            if(itm.split('/')[1]){
                if(itm.split('/')[0] == 'products'){
                    pUrl = `/${itm.split('/')[0]}/${itm.split('/')[1]}`;
                }
            }
            if(itm.split('/')[2]){
                if(itm.split('/')[1] == 'products'){
                    pUrl = `/${itm.split('/')[1]}/${itm.split('/')[2]}`;
                }
            }
        }
    })
}
    let url = urlTarget+'/products/28';
    if(pUrl != ''){
        url = `${urlTarget}/${pUrl.split('"')[0]}` 
    }   
    
    await fetch(url).then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
        // Convert the HTML string into a document object
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        propCardHTML = doc.querySelector('#dose-view');     
        return propCardHTML;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
    setTimeout(() => {
        fetch(window.location.href)
    }, 1000)
}
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) { return resolve(document.querySelector(selector)); }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector)); observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });
}
function insertAfter(referenceNode, newNode) {  
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
