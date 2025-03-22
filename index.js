alert("This Website is mainly for pc users ")


// List of random "hacking" words and phrases
const hackingWords = [ 
    '>>> Initializing...', '>>> Bypassing firewall...', '>>> Injecting code...', '>>> Accessing database...',
    '>>> Acessing your details...', '>>> Escalating privileges...', '>>> Executing exploit...', '>>> Port scanning...',
    '>>> Target identified...', '>>> Bypassing authentication...', '>>> Root access granted...', '>>> Reversing shell...',
    '>>> Analyzing network...', '>>> Searching for vulnerabilities...', '>>> Debugging...', '>>> Decrypting data...',
    '>>> Gaining access...', '>>> System compromised...', '>>> Loading payload...', '>>> Sending packet...',
    '>>> Pinging server...', '>>> Exploiting buffer overflow...', '>>> Brute-forcing...', '>>> Stealth mode activated...',
    '>>> amazing web design...', '>>> Data exfiltration...', '>>> Injecting SQL...', '>>> Manipulating cookies...',
    '>>> Taking control...', '>>> Keylogging...', '>>> Cracking encryption...', '>>> dont mess with me...',
    '>>> Manipulating traffic...', '>>> Rootkit installed...', '>>> Exploit triggered...', '>>> System infected...',
    '>>> Dropping malicious files...', '>>> Disabling antivirus...', '>>> Hiding traces...', '>>> Command injection...',
    '>>> Remote code execution...', '>>> Scanning for open ports...', '>>> Spoofing...', '>>> Man-in-the-middle...',
    '>>> Denial of service...', '>>> Uploading malware...', '>>> Scanning for bots...', '>>> Checking for exploits...',
    '>>> Scanning for vulnerabilities...', '>>> Harvesting credentials...', '>>> Data breach...', '>>> Hijacking session...',
    '>>> Redirecting traffic...', '>>> Creating backdoor...', '>>> Removing logs...', '>>> Elevating privileges...'
];

// Function to simulate infinite hacking code output
function simulateHackingOutput() {
    const terminal = document.getElementById('terminal');
    let wordIndex = 0;
    let wordCount = 0;

    function addMessage() {
        // Add a new hacking word or phrase to the terminal
        terminal.innerText += hackingWords[wordIndex] + '\n';
        wordIndex = (wordIndex + 1) % hackingWords.length;  // Loop through the list
        wordCount++;

        // After 50 words, restart the cycle
        if (wordCount >= 50) {
            wordCount = 0;
            terminal.innerText += '\n>>> Cycle restarting...\n';
        }

        terminal.scrollTop = terminal.scrollHeight;  // Keep scrolling to the latest message
    }

    setInterval(addMessage, 1000);  // Update every second
}

simulateHackingOutput();


// start new 


document.addEventListener("DOMContentLoaded", function () {
    const commands = ["whoami", "ls /contacts", "cat disclaimer.txt", "exit"];
    let index = 0;
    const typedSpan = document.getElementById("typed");
    const cursorSpan = document.querySelector(".cursor");
  
    function typeCommand() {
      if (index < commands.length) {
        let cmd = commands[index];
        let i = 0;
        typedSpan.innerHTML = "";
        cursorSpan.style.display = "inline";
  
        let typing = setInterval(() => {
          typedSpan.innerHTML += cmd[i];
          i++;
          if (i === cmd.length) {
            clearInterval(typing);
            setTimeout(() => {
              typedSpan.innerHTML = "";
              index++;
              typeCommand();
            }, 2000);
          }
        }, 100);
      } else {
        cursorSpan.style.display = "none";
      }
    }
  
    typeCommand();
  
    // Fake system data update
    function updateSystemInfo() {
      let uptime = Math.floor(Math.random() * 10) + "d " + Math.floor(Math.random() * 24) + "h " + Math.floor(Math.random() * 60) + "m";
      let ip = "192.168.1." + Math.floor(Math.random() * 255);
      document.getElementById("uptime").innerText = uptime;
      document.getElementById("ip").innerText = ip;
    }
  
    setInterval(updateSystemInfo, 5000);
  });











  // for test
  document.addEventListener("contextmenu", (event) => event.preventDefault()); // Disable right-click
document.addEventListener("keydown", (event) => {
  if (event.key === "F12" || 
      (event.ctrlKey && event.shiftKey && event.key === "I") || 
      (event.ctrlKey && event.shiftKey && event.key === "J") || 
      (event.ctrlKey && event.key === "U")) {
    event.preventDefault();
  }
});


(function() {
    let element = new Image();
    Object.defineProperty(element, "id", {
      get: function() {
        while (true) {} // Infinite loop when DevTools opens
      }
    });
    console.log("%c", element);
  })();
  

  
