<template>
    <div class="app-container">
        <div class="centered-container">
            <h1 class="logo">
                Utveksling
                <span class="typed-text">{{ typeValue }}</span>
                <span class="blinking-cursor">|</span>
                <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
            </h1>
        </div>
    </div>
</template>



<script>

export default {
name: 'UtvekslingLogo',
components: {
},
data: () => {
    return {
    typeValue: "",
    typeStatus: false,
    displayTextArray: [
    "exchange",
    "intercambio",
    "交流",
    "تبادل",
    "अदला-बदली",
    "আদান-প্রদান",
    "intercâmbio",
    "обмен",
    "交換",
    "ਅਦਲਾ ਬਦਲੀ",
    "Austausch",
    "tukar guling",
    "交換",
    "교환",
    "échange",
    "అద్దె",
    "एक्सचेंज",
    "பரிவர்த்தனை",
    "ایکسچینج",
    "değiş tokuş",
    "scambio",
    "trao đổi",
    "交流",
    "shirya",
    "แลกเปลี่ยน",
    "એક્સચેંજ",
    "ವಿನಿಮಯ",
    "обмін",
    "palitan",
    "အရေးချိုးစနစ်",
    "اشتراک",
    ],
    typingSpeed: 100,
    erasingSpeed: 100,
    newTextDelay: 2000,
    displayTextArrayIndex: 0,
    charIndex: 0,
    };
},
methods: {
    typeText() {
    if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
        this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
    } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
    }
    },
    eraseText() {
    if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
        0,
        this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
    } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
        this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
    }
    },
},
created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
},
}
</script>

<style scoped>
.logo {
  align-items: center;
}

.app-container {
display: flex;
flex-direction: column;
align-items: center; /* Center the content horizontally */
}


#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>

<style lang="scss" scoped>
.container {
width: 100%;
display: flex;
justify-content: left;
align-items: left;
}
h1 {
font-size: min(3rem, 8vw);
font-weight: normal;
span.typed-text {
    color: #008fbb;
}
}

// Cursor blinking CSS Starts...
.blinking-cursor {
font-size: 3rem;
color: #2c3e50;
-webkit-animation: 1s blink step-end infinite;
-moz-animation: 1s blink step-end infinite;
-ms-animation: 1s blink step-end infinite;
-o-animation: 1s blink step-end infinite;
animation: 1s blink step-end infinite;
}
@keyframes blink {
from,
to {
    color: transparent;
}
50% {
    color: #2c3e50;
}
}
@-moz-keyframes blink {
from,
to {
    color: transparent;
}
50% {
    color: #2c3e50;
}
}
@-webkit-keyframes blink {
from,
to {
    color: transparent;
}
50% {
    color: #2c3e50;
}
}
@-ms-keyframes blink {
from,
to {
    color: transparent;
}
50% {
    color: #2c3e50;
}
}
@-o-keyframes blink {
from,
to {
    color: transparent;
}
50% {
    color: #2c3e50;
}
}
// Cursor blinking CSS Ends...
</style>