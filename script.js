// Valentine's Week Messages
const messages = {
    "02-07": "Just as a rose takes weeks to bloom, our endearment has blossomed beautifully over time. Every day, like a petal unfurling, my affection for you has grown deeper, vibrant and more beautiful. Happy Rose Day!🌹",
    "02-08": "We may be apart physically but my love for you knows no boundaries. I can’t wait to spend the rest of my life with you. Will you be mine, forever and always? Happy Propose Day!🫴💍 ",
    "02-09": "Like chocolate, you add sweetness to my life. Your love is the perfect treat, I can never get enough of. Thank you for being my sweetest sweet. Happy Chocolate Day!🍫 ",
    "02-10": "You are my comfort, my teddy bear in human form. Happy Teddy Day!🐻❤️ ",
    "02-11": "I'll be there for you, like I've been there before. I’ll be there for you, cause you're there for me too. Happy Promise Day!🤞🤝 ",
    "02-12": "Every night, I wish I could fall asleep in your arms, feeling your heartbeat next to mine. Until that day comes, know that my heart is hugging you tight, always and forever. Happy Hug Day!🤗 ",
    "02-13": "I feel your kiss in my heart every time I think of you. I can't wait to hold you close and steal that kiss when we meet again. Happy Kiss Day!😘 ",
    "02-14": "Happy Valentine's Day!❤️ I find comfort in knowing that our association is strong enough to break any barrier and bridge any gap. It’s the kind of love that transcends time and space. I’ll be eternally grateful that our paths crossed. I can't wait for the day when distance is just a memory and I can finally celebrate this day with you in my arms. Until then, know that you are deeply loved, missed and cherished. I love you, my forever Valentine. ❤️🫶👫 "
};

// Check password
function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const correctPassword = "batbae"; // Replace with a secure password
    
    if (password === correctPassword) {
        showMessage();
    } else {
        document.getElementById('error-message').innerText = "Incorrect password. Please try again.";
    }
}

// Show Valentine's message for the day
function showMessage() {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Format month as MM
    const day = String(today.getDate()).padStart(2, "0"); // Format day as DD
    const todayKey = `${month}-${day}`; // Format: MM-DD

    console.log("Today's Date: ", todayKey); // Add debug log to check if the date is correct

    const message = messages[todayKey] || "💖 Stay tuned for the special message! 💖";

    document.getElementById('message').innerHTML = `<p>${message}</p>`;

    // Hide login and show message container
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('messageContainer').style.display = 'block';
}

// Ensure login form is visible initially
window.onload = () => {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('messageContainer').style.display = 'none';
};
