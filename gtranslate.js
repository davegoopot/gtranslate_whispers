function translateFromTo(original_text, original_lang, target_lang) {
    ////////////////////////
    // Note that the following API key is restricted to use by dave@davepotts.software
    // If you want to use for your own projects you will need to set up your own keys 
    // from https://console.cloud.google.com/
    ////////////////////////
    let apikey = "AIzaSyBt8EroMp3daP2hu6q8ecIUy03p6lZSJCg";
    let endpoint = "https://translation.googleapis.com/language/translate/v2?key=" + apikey;
    
    
    let request = new XMLHttpRequest();
    const IS_ASYNC_REQUEST = false;
    request.open("POST", endpoint, IS_ASYNC_REQUEST);
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                              
    let request_data = {
      source: original_lang,
      target: target_lang,
      format: "text",
      q: original_text
    };
    
    request.send(JSON.stringify(request_data));
  
    if (request.status === 200) {
      let translation = JSON.parse(request.responseText).data.translations[0].translatedText;
      return translation;
    } else {
      console.log("Error: " + request.status);
      throw "Error loading resource: " + request.status;
    }
  }