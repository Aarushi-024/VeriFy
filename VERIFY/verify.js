function checkLink() {
    const urlInput = document.getElementById("urlInput").value.trim();
    const resultDiv = document.getElementById("result");

    // Predefined unsafe keywords
    const unsafeKeywords = ["malware", "phishing", "scam", "virus" , "unsafe","hack"];
    
    if (urlInput === "") {
        resultDiv.innerHTML = "<span style='color: red;'>Please enter a URL.</span>";
        return;
    }

    // Check if the URL contains unsafe keywords
    const isUnsafe = unsafeKeywords.some(keyword => urlInput.toLowerCase().includes(keyword));

    if (isUnsafe) {
        resultDiv.innerHTML = "<span style='color: red;'>This link is unsafe!</span>";
    } else {
        resultDiv.innerHTML = "<span style='color: green;'>This link is safe.</span>";
    }
}