function emailInfo(sender, recipient, subject, booleanCheck, date, message){
    this.sender = sender,
    this.recipient = recipient,
    this.subject = subject,
    this.booleanCheck = booleanCheck,
    this.date = date;
    this.message = message;
}

var d = new Date(2020, 00, 02);
var selectorDate; //beginning of date range
var endDate; //end of date range 
var idArray = []; //this array adds the sender text.
var selectMultipleInput; //Displays the content inside a button

var emails = [
    new emailInfo("aaa@example.com", ["zzz@example.com"], "[ HR-888 ] Notice of official announcement.", false, new Date(2020, 0, 3, 0, 22), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat. Consectetur adipiscing elit duis tristique sollicitudin nibh. Gravida rutrum quisque non tellus orci ac auctor. Neque viverra justo nec ultrices dui sapien eget mi. Netus et malesuada fames ac. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Urna et pharetra pharetra massa massa ultricies. "),
    new emailInfo("bbb.bbb@example.com", ["yyy@example.com"], "[Web:333]\"Web Contact\"", false, new Date(2020, 0, 3, 0, 10) ," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat. Consectetur adipiscing elit duis tristique sollicitudin nibh. Gravida rutrum quisque non tellus orci ac auctor. Neque viverra justo nec ultrices dui sapien eget mi. Netus et malesuada fames ac. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Urna et pharetra pharetra massa massa ultricies. "),
    new emailInfo("ccc@example.com", ["xxx.xxx@example.com", "xwz.xyz@example.com"], "Happy New Year! Greetings for the New Year", true, new Date(2020, 0, 3, 0, 0), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat. Consectetur adipiscing elit duis tristique sollicitudin nibh. Gravida rutrum quisque non tellus orci ac auctor. Neque viverra justo nec ultrices dui sapien eget mi. Netus et malesuada fames ac. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Urna et pharetra pharetra massa massa ultricies. "),
    new emailInfo("ddd.ddd@example.com", ["vvv.vvv@example.com", "vzz.vzz@example.com"], "[HR-887(Revised: Office Expansion Project Team)] Notice of offer to be received by the president of the Company on December 23, 2020", false, new Date("January 1, 2020"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat. Consectetur adipiscing elit duis tristique sollicitudin nibh. Gravida rutrum quisque non tellus orci ac auctor. Neque viverra justo nec ultrices dui sapien eget mi. Netus et malesuada fames ac. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Urna et pharetra pharetra massa massa ultricies. "),
    new emailInfo("eee@example.com", ["sss@example.com", "rrr.rrr@example.com", "ttt.ttt@example.com"], "[Github] Logout page", false, new Date("January 1, 2020"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat. Consectetur adipiscing elit duis tristique sollicitudin nibh. Gravida rutrum quisque non tellus orci ac auctor. Neque viverra justo nec ultrices dui sapien eget mi. Netus et malesuada fames ac. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Urna et pharetra pharetra massa massa ultricies. "),
    new emailInfo("fff.ffff@example.com", ["qqq.qqq@example.com"], "[dev］ Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5", false, new Date("January 1, 2020"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat. Consectetur adipiscing elit duis tristique sollicitudin nibh. Gravida rutrum quisque non tellus orci ac auctor. Neque viverra justo nec ultrices dui sapien eget mi. Netus et malesuada fames ac. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Urna et pharetra pharetra massa massa ultricies. "),
    new emailInfo("ggg@example.com", ["ppp.qqq@example.com"], "Re: [Github] Brush-up on loading animation", false, new Date("January 1, 2020"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat. Consectetur adipiscing elit duis tristique sollicitudin nibh. Gravida rutrum quisque non tellus orci ac auctor. Neque viverra justo nec ultrices dui sapien eget mi. Netus et malesuada fames ac. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Urna et pharetra pharetra massa massa ultricies. "),
    new emailInfo("hhh.hhh@example.com ", ["ooo.ooo@example.com"], "Workplace Summary for sample, Inc.: Jun 2 - Jun 9", true, new Date("January 1, 2020"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat. Consectetur adipiscing elit duis tristique sollicitudin nibh. Gravida rutrum quisque non tellus orci ac auctor. Neque viverra justo nec ultrices dui sapien eget mi. Netus et malesuada fames ac. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Urna et pharetra pharetra massa massa ultricies. "),
    new emailInfo("iii@example.com", ["nnn@example.com"], "I love you", true, new Date("December 31, 2019"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat. Consectetur adipiscing elit duis tristique sollicitudin nibh. Gravida rutrum quisque non tellus orci ac auctor. Neque viverra justo nec ultrices dui sapien eget mi. Netus et malesuada fames ac. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Urna et pharetra pharetra massa massa ultricies. "),
    new emailInfo("Pablo-Diego@example.com", ["Pablo-Diego-Jose-Francisco@example.com"], "[info:888] ABC EQUIPMENT COMPANY", false, new Date("December 31, 2019"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat. Consectetur adipiscing elit duis tristique sollicitudin nibh. Gravida rutrum quisque non tellus orci ac auctor. Neque viverra justo nec ultrices dui sapien eget mi. Netus et malesuada fames ac. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Urna et pharetra pharetra massa massa ultricies. "),
    ];


//this funciton goes through the email object ot see if the selected dates match any of the dates in the emails array object. 
function checkMail(){


    var chosenDate = document.getElementById('chosenDate');
 
    var split1 = chosenDate.value.split("-"); //get the dates specified and split them to the start and end date.
    
    selectorDate = new Date(split1[0]);
    endDate = new Date(split1[1]);


    endDate.setHours(endDate.getHours() + 23);
    endDate.setMinutes(endDate.getMinutes() + 59);
    endDate.setSeconds(endDate.getSeconds() + 59);


    var main_logo = document.getElementById('main_logo')
    main_logo.setAttribute('style', 'display:none;');
    var resultsFiltered = document.getElementById('filterType'); //get the id to show the filtering options.

    var emailList = document.getElementById('emails'); //get the id to show the found emails
    var modalPopup = document.getElementById('modalPopUp'); //the id for the modal which shows the emails selected for reading. 

    //variables set which will hold strings of content.
    var stringlead;
    var arrayOfRecipients = "";
    var emailFilters = "";

    //button used to read selected emails.
    var buttonContent = document.getElementById('readThem');
    var emailChosen = "";

    //if the user selects to have the older emails show up first the boolean will be set to false.
    var dateBoolean = true;
    emailCount = document.getElementById('numberOfEmails');
    emailCounter = 0; //counter for emails that showed up on the list.

  

    
    stringlead = "";
    selectMultipleInput = "";
    for(i =0; i < emails.length; i++){
        if(emails[i].date >= selectorDate && emails[i].date <= endDate){

            emailCounter++;
            var littyMoves = emails[i].date;
            emailChosen += 'emailChosen' + (emailCounter -1); //assign a unique id to all the rows of emails.
            stringlead+= '<div id = "' + emailChosen + '"class = \'col-xs-12 contents1\'><svg class = \'spMail\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 11.35144 26.35693\'><defs><style>.a{fill:#666;}</style></defs><title>icon_mail_sp</title><path class=\'a\' d=\'M0,0V7.20007H11.35144V0ZM9.90466.80005,5.67542,4.34863,1.44617.80005ZM.80005,6.4V1.30225L5.41858,5.17773a.39868.39868,0,0,0,.51367,0l4.61914-3.876V6.4Z\'/><path class=\'a\' d=\'M3.54952,13.76637a.36946.36946,0,0,0,0,.52093l2.13177,2.14285L7.82044,14.291a.36945.36945,0,0,0-.52093-.52093L6.05075,15.01513v-2.7963a.36946.36946,0,0,0-.73892,0v2.80738L4.06307,13.77745A.36946.36946,0,0,0,3.54952,13.76637Z\'/><path class=\'a\' d=\'M5.67566,22.35693a1.5,1.5,0,1,1-1.5,1.5,1.50164,1.50164,0,0,1,1.5-1.5m0-1a2.5,2.5,0,1,0,2.5,2.5,2.5,2.5,0,0,0-2.5-2.5Z\'/></svg>';
            
            stringlead+= "<p class = \'svgSenderMatch\'>" + emails[i].sender + "</p>";

            //if there is more than one recipient. go through them all and add them to a string.
            if(emails[i].recipient.length > 1){
                for(k = 0; k < emails[i].recipient.length; k++){
                    if(k == (emails[i].recipient.length - 1)){
                        arrayOfRecipients+=emails[i].recipient[k];
                    }
                    else{
                    arrayOfRecipients+= emails[i].recipient[k] + ","; 
                    }
                }
                stringlead+= "<div class = \'svgRecipientMatchDiv\'><p class = \'svgRecipientMatch\'>" + arrayOfRecipients + "</p><p class = \'recipientCounter\'> +" + (emails[i].recipient.length -1) + "</p></div>";
                arrayOfRecipients = "";
            }
            else{
                
                stringlead+= "<div class = \'svgRecipientMatchDiv\'><p class = \'svgRecipientMatch\'>" + emails[i].recipient + "</p></div>";
            }

            //add subject to stringlead if an icon clip is included. If the boolean value is true in the email object. Than include a clip in the email list. 
            if(emails[i].booleanCheck){
                stringlead+= "<div class = \'subjectLine\'><p class = \'subject\'>" + emails[i].subject + "</p><svg class = \'iconClip\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 13.93083 15\'><defs><style>.a{fill:#666;}</style></defs><title>icon_clip</title><path class=\'a\' d=\'M6.799,3.6254A2.30522,2.30522,0,1,0,3.56718,6.85622l4.304,4.304a.5222.5222,0,0,0,.7385-.7385l-4.304-4.304c-.53586-.53586-.87743-1.33808-.23084-1.98466.64553-.64659,1.4488-.304,1.98466.23189L11.032,9.3364c1.90632,1.90841,2.38159,2.78793,1.24615,3.92441-1.149,1.148-2.367.86385-4.20121-.96935L2.367,6.57941C1.1741,5.38653.33845,3.43842,1.90633,1.87159c1.86141-1.86141,3.98708-.03134,4.59293.57555l5.11038,5.11142a.5222.5222,0,0,0,.7385-.7385L7.23776,1.70864C5.18625-.34288,2.86-.56223,1.16678,1.13308c-1.711,1.71-1.5261,4.196.4617,6.18484l5.711,5.711C7.96726,13.6567,9.31161,15,10.85756,15a3.01214,3.01214,0,0,0,2.16014-1.00173c2.07554-2.07658.15564-3.99857-1.24616-5.40141Z\'/></svg></div>";
            }
            else{
                stringlead+= "<div class = \'subjectLine\'><p class = \'subject\'>" + emails[i].subject + "</p></div>";                    
            }

            //if statement that decides the outputed format depending on the date that is in the email object array.
            if(littyMoves.getFullYear() == '2019'){
                stringlead+= "<p class = \'time\'>" + littyMoves.getFullYear() + "/" +(littyMoves.getMonth() + 1) + "/" + littyMoves.getDate() + "</p>";
            }
            else if(littyMoves.getFullYear() > '2019' && littyMoves < d){
                
                stringlead+= "<p class = \'time\'>Jan " + littyMoves.getDate() + "</p>";
            }
            else{
                stringlead+= "<p class = \'time\'>" + littyMoves.getHours() + ":" + littyMoves.getMinutes() + "</p>";

            }
            stringlead +="<svg class = \'sideArrow\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 2.9882 6\'><defs><style>.a{fill:#666;}</style></defs><title>icon_arrow02</title><path class=\'a\' d=\'M2.9882,3.00782a.29009.29009,0,0,1-.07319.19286L.51262,5.90234a.29054.29054,0,0,1-.43456-.38577l2.23114-2.509L.07806.48856A.29045.29045,0,0,1,.50284.09233l.00978.011L2.91512,2.8152A.28942.28942,0,0,1,2.9882,3.00782Z\'/></svg></div>";
            emailChosen = "";
        }

        //reset content back so that it can display a new batch if desired.
        else{
            stringlead+="";
        }
        
        
    }

    //if string lead has some content, add the filtering on top. display the button. and reset the email counter to 0.
    if(stringlead != ""){
        resultsFiltered.className = "searchActive";
        emailFilters+= "<p class = \'from\'>&nbsp;From<svg id = \'adjustFrom\' class = \'iconArrowFrom\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 5\'><defs><style>.a{fill:#333;}</style></defs><title>icon_arrow01</title><polygon class=\'a\' points=\'8 5 3.993 0 0 5 8 5\'/></svg></span>&nbsp;</p>";
        emailFilters += "<p class = \'toPerson\'>&nbspto&nbsp</p>";
        emailFilters += "<p class = \'subjectMessage\'>&nbspSubject&nbsp</p>";
        emailFilters +="<span class = \'dateOfMessage\'>&nbspDate&nbsp<svg id = \'adjustDate\' class = \'iconArrowDate\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 5\'><defs><style>.a{fill:#333;}</style></defs><title>icon_arrow01</title><polygon class=\'a\' points=\'8 5 3.993 0 0 5 8 5\'/></svg></span>";
        resultsFiltered.innerHTML = emailFilters;
        emailCount.innerHTML = emailCounter;
        selectMultipleInput = "Read Selected Emails";
        buttonContent.setAttribute('style', 'display: unset');
        buttonContent.innerHTML = selectMultipleInput;
        emailCounter = 0;    
    }
    //else, if no content, show the main logo. hide the button. 
    else{
        main_logo.setAttribute('style', 'display:flex;');
        resultsFiltered.className = "searchResults";
        emailCount.innerHTML = 0;
        buttonContent.setAttribute('style', 'display: none');
        // emailList.setAttribute('style', 'display: none;');
        selectMultipleInput = "";
    }

    //in the end, Show whatever has been done. 
    emailList.innerHTML = stringlead;


    //this function sorts the date and name if desired.
    function sortDate(){

        dateBoolean = !dateBoolean;

        //if the boolean value is true, show the email list how it originally was. 
        // logic is the same as above.
        if(dateBoolean){
            stringlead = "";
            for(i =0; i < emails.length; i++){
                if(emails[i].date >= selectorDate && emails[i].date <= endDate){
                    emailCounter++;
                    var littyMoves = emails[i].date;
                    emailChosen += 'emailChosen' + (emailCounter -1);
                    stringlead+= '<div id = "' + emailChosen + '"class = \'col-xs-12 contents1\'><svg class = \'spMail\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 11.35144 26.35693\'><defs><style>.a{fill:#666;}</style></defs><title>icon_mail_sp</title><path class=\'a\' d=\'M0,0V7.20007H11.35144V0ZM9.90466.80005,5.67542,4.34863,1.44617.80005ZM.80005,6.4V1.30225L5.41858,5.17773a.39868.39868,0,0,0,.51367,0l4.61914-3.876V6.4Z\'/><path class=\'a\' d=\'M3.54952,13.76637a.36946.36946,0,0,0,0,.52093l2.13177,2.14285L7.82044,14.291a.36945.36945,0,0,0-.52093-.52093L6.05075,15.01513v-2.7963a.36946.36946,0,0,0-.73892,0v2.80738L4.06307,13.77745A.36946.36946,0,0,0,3.54952,13.76637Z\'/><path class=\'a\' d=\'M5.67566,22.35693a1.5,1.5,0,1,1-1.5,1.5,1.50164,1.50164,0,0,1,1.5-1.5m0-1a2.5,2.5,0,1,0,2.5,2.5,2.5,2.5,0,0,0-2.5-2.5Z\'/></svg>';
                    
                    stringlead+= "<p class = \'svgSenderMatch\'>" + emails[i].sender + "</p>";
                    if(emails[i].recipient.length > 1){
                        for(k = 0; k < emails[i].recipient.length; k++){
                            if(k == (emails[i].recipient.length - 1)){
                                arrayOfRecipients+=emails[i].recipient[k];
                            }
                            else{
                            arrayOfRecipients+= emails[i].recipient[k] + ","; 
                            }
                        }
                        stringlead+= "<div class = \'svgRecipientMatchDiv\'><p class = \'svgRecipientMatch\'>" + arrayOfRecipients + "</p><p class = \'recipientCounter\'> +" + (emails[i].recipient.length -1) + "</p></div>";
                        arrayOfRecipients = "";
                    }
                    else{
                        
                        stringlead+= "<div class = \'svgRecipientMatchDiv\'><p class = \'svgRecipientMatch\'>" + emails[i].recipient + "</p></div>";
                    }
    
                    if(emails[i].booleanCheck){
                        stringlead+= "<div class = \'subjectLine\'><p class = \'subject\'>" + emails[i].subject + "</p><svg class = \'iconClip\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 13.93083 15\'><defs><style>.a{fill:#666;}</style></defs><title>icon_clip</title><path class=\'a\' d=\'M6.799,3.6254A2.30522,2.30522,0,1,0,3.56718,6.85622l4.304,4.304a.5222.5222,0,0,0,.7385-.7385l-4.304-4.304c-.53586-.53586-.87743-1.33808-.23084-1.98466.64553-.64659,1.4488-.304,1.98466.23189L11.032,9.3364c1.90632,1.90841,2.38159,2.78793,1.24615,3.92441-1.149,1.148-2.367.86385-4.20121-.96935L2.367,6.57941C1.1741,5.38653.33845,3.43842,1.90633,1.87159c1.86141-1.86141,3.98708-.03134,4.59293.57555l5.11038,5.11142a.5222.5222,0,0,0,.7385-.7385L7.23776,1.70864C5.18625-.34288,2.86-.56223,1.16678,1.13308c-1.711,1.71-1.5261,4.196.4617,6.18484l5.711,5.711C7.96726,13.6567,9.31161,15,10.85756,15a3.01214,3.01214,0,0,0,2.16014-1.00173c2.07554-2.07658.15564-3.99857-1.24616-5.40141Z\'/></svg></div>";
                    }
                    else{
                        stringlead+= "<div class = \'subjectLine\'><p class = \'subject\'>" + emails[i].subject + "</p></div>";                    
                    }
                    if(littyMoves.getFullYear() == '2019'){
                        stringlead+= "<p class = \'time\'>" + littyMoves.getFullYear() + "/" +(littyMoves.getMonth() + 1) + "/" + littyMoves.getDate() + "</p>";
                    }
                    else if(littyMoves.getFullYear() > '2019' && littyMoves < d){
                        
                        stringlead+= "<p class = \'time\'>Jan " + littyMoves.getDate() + "</p>";
                    }
                    else{
                        stringlead+= "<p class = \'time\'>" + littyMoves.getHours() + ":" + littyMoves.getMinutes() + "</p>";
    
                    }
                    stringlead +="<svg class = \'sideArrow\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 2.9882 6\'><defs><style>.a{fill:#666;}</style></defs><title>icon_arrow02</title><path class=\'a\' d=\'M2.9882,3.00782a.29009.29009,0,0,1-.07319.19286L.51262,5.90234a.29054.29054,0,0,1-.43456-.38577l2.23114-2.509L.07806.48856A.29045.29045,0,0,1,.50284.09233l.00978.011L2.91512,2.8152A.28942.28942,0,0,1,2.9882,3.00782Z\'/></svg></div>";
                    emailChosen = "";
                }
                else{
                    stringlead+="";
                }
                
            }
    
            emailList.innerHTML = stringlead;
            emailCounter = 0;
        }

        //else excute this else statement.
        //LOGIC IS THE Same but will ouput a different result. 
        else{
            stringlead = "";
    
            for(i = 9; i >= 0; i--){
                if(emails[i].date >= selectorDate && emails[i].date <= endDate){
                    emailCounter++;
                    var littyMoves = emails[i].date;
                    emailChosen += 'emailChosen' + (emailCounter -1);
                    stringlead+= '<div id = "' + emailChosen + '"class = \'col-xs-12 contents1\'><svg class = \'spMail\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 11.35144 26.35693\'><defs><style>.a{fill:#666;}</style></defs><title>icon_mail_sp</title><path class=\'a\' d=\'M0,0V7.20007H11.35144V0ZM9.90466.80005,5.67542,4.34863,1.44617.80005ZM.80005,6.4V1.30225L5.41858,5.17773a.39868.39868,0,0,0,.51367,0l4.61914-3.876V6.4Z\'/><path class=\'a\' d=\'M3.54952,13.76637a.36946.36946,0,0,0,0,.52093l2.13177,2.14285L7.82044,14.291a.36945.36945,0,0,0-.52093-.52093L6.05075,15.01513v-2.7963a.36946.36946,0,0,0-.73892,0v2.80738L4.06307,13.77745A.36946.36946,0,0,0,3.54952,13.76637Z\'/><path class=\'a\' d=\'M5.67566,22.35693a1.5,1.5,0,1,1-1.5,1.5,1.50164,1.50164,0,0,1,1.5-1.5m0-1a2.5,2.5,0,1,0,2.5,2.5,2.5,2.5,0,0,0-2.5-2.5Z\'/></svg>';
                    
                    stringlead+= "<p class = \'svgSenderMatch\'>" + emails[i].sender + "</p>";
                    if(emails[i].recipient.length > 1){
                        for(k = 0; k < emails[i].recipient.length; k++){
                            if(k == (emails[i].recipient.length - 1)){
                                arrayOfRecipients+=emails[i].recipient[k];
                            }
                            else{
                            arrayOfRecipients+= emails[i].recipient[k] + ","; 
                            }
                        }
                        stringlead+= "<div class = \'svgRecipientMatchDiv\'><p class = \'svgRecipientMatch\'>" + arrayOfRecipients + "</p><p class = \'recipientCounter\'> +" + (emails[i].recipient.length -1) + "</p></div>";
                        arrayOfRecipients = "";
                    }
                    else{
                        
                        stringlead+= "<div class = \'svgRecipientMatchDiv\'><p class = \'svgRecipientMatch\'>" + emails[i].recipient + "</p></div>";
                    }
    
                    if(emails[i].booleanCheck){
                        stringlead+= "<div class = \'subjectLine\'><p class = \'subject\'>" + emails[i].subject + "</p><svg class = \'iconClip\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 13.93083 15\'><defs><style>.a{fill:#666;}</style></defs><title>icon_clip</title><path class=\'a\' d=\'M6.799,3.6254A2.30522,2.30522,0,1,0,3.56718,6.85622l4.304,4.304a.5222.5222,0,0,0,.7385-.7385l-4.304-4.304c-.53586-.53586-.87743-1.33808-.23084-1.98466.64553-.64659,1.4488-.304,1.98466.23189L11.032,9.3364c1.90632,1.90841,2.38159,2.78793,1.24615,3.92441-1.149,1.148-2.367.86385-4.20121-.96935L2.367,6.57941C1.1741,5.38653.33845,3.43842,1.90633,1.87159c1.86141-1.86141,3.98708-.03134,4.59293.57555l5.11038,5.11142a.5222.5222,0,0,0,.7385-.7385L7.23776,1.70864C5.18625-.34288,2.86-.56223,1.16678,1.13308c-1.711,1.71-1.5261,4.196.4617,6.18484l5.711,5.711C7.96726,13.6567,9.31161,15,10.85756,15a3.01214,3.01214,0,0,0,2.16014-1.00173c2.07554-2.07658.15564-3.99857-1.24616-5.40141Z\'/></svg></div>";
                    }
                    else{
                        stringlead+= "<div class = \'subjectLine\'><p class = \'subject\'>" + emails[i].subject + "</p></div>";                    
                    }
                    if(littyMoves.getFullYear() == '2019'){
                        
                        stringlead+= "<p class = \'time\'>" + littyMoves.getFullYear() + "/" +(littyMoves.getMonth() + 1) + "/" + littyMoves.getDate() + "</p>";
                    }
                    else if(littyMoves.getFullYear() > '2019' && littyMoves < d){
                        
                        stringlead+= "<p class = \'time\'>Jan " + littyMoves.getDate() + "</p>";
                    }
                    else{
                        stringlead+= "<p class = \'time\'>" + littyMoves.getHours() + ":" + littyMoves.getMinutes() + "</p>";
    
                    }
                    stringlead +="<svg class = \'sideArrow\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 2.9882 6\'><defs><style>.a{fill:#666;}</style></defs><title>icon_arrow02</title><path class=\'a\' d=\'M2.9882,3.00782a.29009.29009,0,0,1-.07319.19286L.51262,5.90234a.29054.29054,0,0,1-.43456-.38577l2.23114-2.509L.07806.48856A.29045.29045,0,0,1,.50284.09233l.00978.011L2.91512,2.8152A.28942.28942,0,0,1,2.9882,3.00782Z\'/></svg></div>";
                    emailChosen = "";
                }
                else{
                    stringlead+="";
                }
                
                
            }
        
            emailList.innerHTML = stringlead;
            emailCounter =0;
        }


        //In order to click on a certain email and view it later. We need to get the id of the email row. 
        var emailContentLength = document.getElementsByClassName('contents1');
        //as the output is being created when a user submits dates, as each row is being created, the main div is assigned an id. The id is later assinged a click listener.
        for(i = 0; i < emailContentLength.length; i++){
            document.getElementById('emailChosen'+i).addEventListener('click', selectMultipleMail, false);
        }

        document.getElementById('readThem').addEventListener('click', displayMail, false);

        function selectMultipleMail(){

            //get the id of row clicked.
            var char = document.getElementById(this.id);
            

            //when we get the id. We want to reach out to the 2nd child value. This is the sender of the email.
            char2 = char.children[1];
            if(idArray.length > 0){
                
                //if the user already clicked on an email, it will be deselected and removed from the array.
                if(idArray.includes(char2.innerHTML)){
                    for(i = 0 ;i < idArray.length; i++){
                        if(idArray[i] == char2.innerHTML){
                            idArray.splice(i, 1);
                            char.setAttribute('style', 'background-color: #f3f3f3');
                        }
                    }
                    
                }
                //if the sender info is not in the array, add it. 
                else{
                    char.setAttribute('style', 'background-color: lightgray');
                    idArray.push(char2.innerHTML);
            
                }
            
                
            }
            //initially if the array is empty (meaning there is no emails selected at first or all have been deselected), once an email is selected, add it. Highlight it so that it shows its been selected.
            else{
                char.setAttribute('style', 'background-color: lightgray');  
                idArray.push(char2.innerHTML);
            } 
            
            
        }

        //Once the array has been filled (at least 1 email selected), go through the emails object and find the same sender.
        function displayMail(){
            if(idArray.length > 0){
                modalPopup.setAttribute('style', 'display: block;');
                var emailComplete = "";
                emailComplete+= "<p class = \'closeButton\' id = \'closer\'>CLOSE X</p>";
                //as each sender is being looped in the idArray, check to see where it is in the objects array. 
                for(i = 0; i < emails.length; i++){
                    for(k = 0; k < idArray.length; k++){
                        
                        //once there is a match, get all the email object property values and assign them to a variable. 
                        if(idArray[k] == emails[i].sender){
                            var sender = emails[i].sender;
                            var subject = emails[i].subject;
                            var date = emails[i].date;
                            var message = emails[i].message;
                            
                            //check to see if there are more than 2 recipients.
                            var recipientString = "";
                            if(emails[i].recipient.length > 1){
                                for(j = 0; j < emails[i].recipient.length; j++){
                                    if(j == (emails[i].recipient.length - 1)){
                                        recipientString += emails[i].recipient[j];
                                        break;
                                    }
                                    recipientString += emails[i].recipient[j] + ", ";
                                }
                            }
                            else{
                                recipientString = emails[i].recipient
                            }
                            
                            //display the content to the main div.
                            emailComplete+= "<div class = \'selectedBody\'>";
                            emailComplete += "<h3>" + subject + "</h3>";
                            emailComplete += "<p class = \'senderInfo\'>From: " + sender + "</p>";
                            emailComplete += "<p>To: " + recipientString + "</p>";
                            emailComplete += "<p>Date: " + date + "</p><hr>";
                            emailComplete += "<p class = \'emailMessage\'>" + message + "</p></div>";

                            
                            
                        }
                    }
                }
                modalPopup.innerHTML = emailComplete;
            }   
        
            //function that is used to close the modal that contains the emails selected.
            function closeEmails(){
                
                var main = document.getElementById('modalPopUp');
                main.innerHTML = '';
                main.setAttribute('style', 'display: none');
                
                //jQueyr was used here as its a faster way to reset all the background colors back to 'deselected'.
                $(function(){
                    $('.contents1').css('background-color', '#f3f3f3');
                });

                //cleanout the array.
                idArray = [];

            }


            document.getElementById('closer').addEventListener('click', closeEmails, false);
        
        
        }
        
        
    }//end of sort date function


    //add event listeners so when the user clicks on a arrow, it sorts the emails. 
    var dateSort = document.getElementById('adjustDate');
    var fromSort = document.getElementById('adjustFrom');
    dateSort.addEventListener('click', sortDate, false);
    fromSort.addEventListener('click', sortDate, false);


    //This is the same logic as explained before on line 288. This one is executed first as the one starting in line 288 is only executed if the emails are sorted.
    var emailContentLength = document.getElementsByClassName('contents1');
    for(i = 0; i < emailContentLength.length; i++){
        document.getElementById('emailChosen'+i).addEventListener('click', selectMultipleMail, false);
    }

    document.getElementById('readThem').addEventListener('click', displayMail, false);

    function selectMultipleMail(){
        var char = document.getElementById(this.id);
        
        char2 = char.children[1];
        if(idArray.length > 0){
            
            
            if(idArray.includes(char2.innerHTML)){
                for(i = 0 ;i < idArray.length; i++){
                    if(idArray[i] == char2.innerHTML){
                        idArray.splice(i, 1);
                        char.setAttribute('style', 'background-color: #f3f3f3');
                    }
                }
                
            }
            else{
                char.setAttribute('style', 'background-color: lightgray');
                idArray.push(char2.innerHTML);
        
            }
        
             
        }
        else{
            char.setAttribute('style', 'background-color: lightgray');  
            idArray.push(char2.innerHTML);
        } 
        
        
    }

    function displayMail(){
        if(idArray.length > 0){
            modalPopup.setAttribute('style', 'display: block;');
            var emailComplete = "";
            emailComplete+= "<p class = \'closeButton\' id = \'closer\'>CLOSE X</p>";
            for(i = 0; i < emails.length; i++){
                for(k = 0; k < idArray.length; k++){
                    
                    if(idArray[k] == emails[i].sender){
                        var sender = emails[i].sender;
                        var subject = emails[i].subject;
                        var date = emails[i].date;
                        var message = emails[i].message;
                        

                        var recipientString = "";
                        if(emails[i].recipient.length > 1){
                            for(j = 0; j < emails[i].recipient.length; j++){
                                if(j == (emails[i].recipient.length - 1)){
                                    recipientString += emails[i].recipient[j];
                                    break;
                                }
                                recipientString += emails[i].recipient[j] + ", ";
                            }
                        }
                        else{
                            recipientString = emails[i].recipient
                        }
                        
                        emailComplete+= "<div class = \'selectedBody\'>";
                        emailComplete += "<h3>" + subject + "</h3>";
                        emailComplete += "<p class = \'senderInfo\'>From: " + sender + "</p>";
                        emailComplete += "<p>To: " + recipientString + "</p>";
                        emailComplete += "<p>Date: " + date + "</p><hr>";
                        emailComplete += "<p class = \'emailMessage\'>" + message + "</p></div>";

                        
                        
                    }
                }
            }
            modalPopup.innerHTML = emailComplete;
        }   
    
    function closeEmails(){
        
        var main = document.getElementById('modalPopUp');
        main.innerHTML = '';
        main.setAttribute('style', 'display: none');
        
        $(function(){
            $('.contents1').css('background-color', '#f3f3f3');
        });

        idArray = [];

    }


    document.getElementById('closer').addEventListener('click', closeEmails, false);
    
    
    }


};


//qQuery is used to get the date range picker.
$(function(){
    $('.form-control').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('.form-control[name="dateChosen"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('.form-control[name="dateChosen"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
});


var form = document.getElementById('submitButton');
form.addEventListener('click', checkMail, false);




// document.body.innerHTML=window.innerWidth;