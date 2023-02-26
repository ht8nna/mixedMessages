// console.log('testing messages.js');

const majorArcana = [
    {   
        'number': ' 0',
        'name': 'The Fool',
        'meaning': 'embracing all that lies ahead of you without worry.'
    },
    {   
        'number': ' 1',
        'name': 'The Magician',
        'meaning': 'knowing that you already hold everything you need to move forward.'
    },
    {   
        'number': ' 2',
        'name': 'The High Priestess',
        'meaning': 'listening to your inner voice and following your instincts.'
    },
    {   
        'number': ' 3',
        'name': 'The Empresss',
        'meaning': 'absorbing the energy of the natural world around you and being more compassionate.'
    },
    {   
        'number': ' 4',
        'name': 'The Emperor',
        'meaning': 'understanding that you are in control of your own life and what happens to it.'
    },
    {   
        'number': ' 5',
        'name': 'The Hierophant',
        'meaning': 'following the rules and finding a spiritual perspective on your current situation.'
    },
    {   
        'number': ' 6',
        'name': 'The Lovers',
        'meaning': 'considering all the possible consequences of your choices when at a crossroads.'
    },
    {   
        'number': ' 7',
        'name': 'The Chariot',
        'meaning': 'combining the knowledge of your mind with that of your heart and spirit to connect to your natural drive and determination.'
    },
    {   
        'number': ' 8',
        'name': 'Strength',
        'meaning': 'recalling that you are strong enough to handle whatever you are facing.'
    },
    {   
        'number': ' 9',
        'name': 'The Hermit',
        'meaning': 'withdrawing from the noise of the world and finding the answers within.'
    },
    {   
        'number': '10',
        'name': 'Wheel of Fortune',
        'meaning': 'remembering that nothing is permanent and cherishing the lessons brought to you by this moment.'
    },
    {   
        'number': '11',
        'name': 'Justice',
        'meaning': 'making sure that you are acting fairly in all your interactions with others.'
    },
    {   
        'number': '12',
        'name': 'The Hanged Man',
        'meaning': 'detaching from the outcome of your situation to help you release yourself.'
    },
    {   
        'number': '13',
        'name': 'Death',
        'meaning': 'understanding that hanging on to situations from the past will hinder you from allowing new, better things to enter your life.'
    },
    {   
        'number': '14',
        'name': 'Temperance',
        'meaning': 'taking things as they come, and remaining flexible enough to change with the changes.'
    },
    {   
        'number': '15',
        'name': 'The Devil',
        'meaning': 'understanding that you hold the keys to your own freedom, but it is up to you to open the lock.'
    },
    {   
        'number': '16',
        'name': 'The Tower',
        'meaning': 'tearing down the weakest parts of your life in order to build something strong and sturdy in their place.'
    },
    {   
        'number': '17',
        'name': 'The Star',
        'meaning': 'knowing that the universe is working in your favour and having faith in where you are being taken.'
    },
    {   
        'number': '18',
        'name': 'The Moon',
        'meaning': 'drawing your feelings to the surface, and addressing them in order to rid yourself of worry.'
    },
    {   
        'number': '19',
        'name': 'The Sun',
        'meaning': 'lifting your head and realizing all the good situations and people surrounding you now and always.'
    },
    {   
        'number': '20',
        'name': 'Judgement',
        'meaning': 'reviewing your decisions and actions until now, to ensure they are inline with where you ultimately want to go.'
    },
    {   
        'number': '21',
        'name': 'The World',
        'meaning': 'kowing that you are exactly where you are meant to be and you are ready for the next phase of your journey.'
    }
        
];

const getRandomNum = () => {
    return Math.floor(Math.random() * 23);
};


const firstCard = () => {
    return majorArcana[getRandomNum()];
}
const yesterday = firstCard();

const secondCard = () => {
    let randomCard = majorArcana[getRandomNum()];
    while(randomCard === yesterday) {
        randomCard = majorArcana[getRandomNum()];
    };
    return randomCard;
}
const today = secondCard();

const thirdCard = () => {
    let randomCard = majorArcana[getRandomNum()];
    while(randomCard === yesterday || randomCard === today) {
        randomCard = majorArcana[getRandomNum()];
    };
    return randomCard;
}
const tomorrow = thirdCard();

// console.log(`${yesterday.name}, ${today.name} and ${tomorrow.name}`)

const reading = () => {
    return `

    Your 3 cards Tarot (Major Arcana only) Reading:

        Yesterday - (${yesterday.number}) - ${yesterday.name}
        Today     - (${today.number}) - ${today.name}
        Tomorrow  - (${tomorrow.number}) - ${tomorrow.name}
    
    Yesterday was about ${yesterday.meaning}
    Today is about ${today.meaning}
    Tomorrow advises ${tomorrow.meaning}
    
    `
};

console.log(reading());