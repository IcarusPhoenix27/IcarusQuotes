const localQuotes = [
  {
    text: 'I would rather be exposed to the inconveniences attending too much liberty than those attending too small a degree of it.',
    author: 'Thomas Jefferson',
  },
  {
  text:'Foreign aid goes from poor people in rich countries to rich people in poor countries.',
    author:'Rand Paul',
  },
  {
  text:'War is peace. Freedom is slavery. Ignorance is strength.',
    author:'George Orwell',
  },
  {
  text:'The most basic question is not what is best, but who shall decide what is best.',
    author:'Thomas Sowell',
  },
  {
  text:'The smallest minority on earth is the individual. Those who deny individual rights cannot claim to be defenders of minorities.',
    author:'Ayn Rand',
  },
  {
  text:'I ask, sir, what is the militia? It is the whole people except for a few public officials.',
    author:'George Mason',
  },
  {
  text:'The urge to save humanity is almost always a false front for the urge to rule.',
    author:'H.L Mencken',
  },
  {
  text:'The United States is a nation of laws: badly written and randomly enforced.',
    author:'Frank Zappa',
  },
  {
  text:'Things in our country run in spite of government, not by aid of it.',
    author:'Will Rogers',
  },
  {
  text:'Freedom is essentially a condition of inequality, not equality. It recognizes as a fact of nature the structural differences inherent in man - in temperament, character, and capacity - and it respects those differences. We are not alike and no law can make us so.',
    author:'Frank Chodorov',
  },
  {
  text:'After a shooting spree, they always want to take the guns away from the people who didnt do it.',
    author:'William S. Burroughs',
  },
  {
  text:'Never forget that everything Hitler did in Germany was legal.',
    author:'Martin Luther King Jr.',
  },
  {
  text:'Well, if crime fighters fight crime and fire fighters fight fire, what do freedom fighters fight?',
    author:'George Carlin',
  },
  {
  text:'There is small choice in rotten apples.',
    author:'William Shakespeare',
  },
  {
  text:'Left-wing politicians take away your liberty in the name of children and of fighting poverty, while right-wing politicians do it in the name of family values and fighting drugs. Either way, government gets bigger and you become less free.',
    author:'Harry Browne',
  },
  {
  text:'What the government is good at is collecting taxes, taking away your freedoms and killing people. It is not good at much else.',
    author:'Tom Clancy',
  },
  {
  text:'Extremism in the defense of liberty is no vice. And moderation in the pursuit of justice is no virtue.',
    author:'Barry Goldwater',
  },
  {
  text:'Sometimes people do not want to hear the truth because they do not want their illusions destroyed.',
    author:'Friedrich Nietzsche',
  },
  {
  text:'I mean, `I have always been a libertarian. Leave everybody alone. Let everybody else do what they want. Just stay out of everybody elses hair.',
    author:'Clint Eastwood',
  },
  {
    text: 'You can observe a lot just by watching.',
    author: 'Yogi Berra',
  },
  {
    text: 'Difficulties increase the nearer we get to the goal.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'Fate is in your hands and no one elses',
    author: 'Byron Pulsifer',
  },
  {
    text: 'Be the chief but never the lord.',
    author: 'Lao Tzu',
  },
  {
    text: 'Nothing happens unless first we dream.',
    author: 'Carl Sandburg',
  },
  {
    text: 'Well begun is half done.',
    author: 'Aristotle',
  },
  {
    text: 'Life is a learning experience, only if you learn.',
    author: 'Yogi Berra',
  },
  {
    text: 'Self-complacency is fatal to progress.',
    author: 'Margaret Sangster',
  },
  {
    text: 'Peace comes from within. Do not seek it without.',
    author: 'Buddha',
  },
  {
    text: 'Life is change. Growth is optional. Choose wisely.',
    author: 'Karen Clark',
  },
  {
    text: "You'll see it when you believe it.",
    author: 'Wayne Dyer',
  },
  {
    text: 'Today is the tomorrow we worried about yesterday.',
    author: 'unknown',
  },
  {
    text: "It's easier to see the mistakes on someone else's paper.",
    author: 'unknown',
  },
  {
    text: 'Every man dies. Not every man really lives.',
    author: 'unknown',
  },
  {
    text: 'To lead people walk behind them.',
    author: 'Lao Tzu',
  },
  {
    text: 'Having nothing, nothing can he lose.',
    author: 'William Shakespeare',
  },
  {
    text: 'Trouble is only opportunity in work clothes.',
    author: 'Henry J. Kaiser',
  },
  {
    text: 'A rolling stone gathers no moss.',
    author: 'Publilius Syrus',
  },
  {
    text: 'Ideas are the beginning points of all fortunes.',
    author: 'Napoleon Hill',
  },
  {
    text: 'Everything in life is luck.',
    author: 'Donald Trump',
  },
  {
    text: 'Doing nothing is better than being busy doing nothing.',
    author: 'Lao Tzu',
  },
  {
    text: 'Trust yourself. You know more than you think you do.',
    author: 'Benjamin Spock',
  },
  {
    text: 'Study the past, if you would divine the future.',
    author: 'Confucius',
  },
  {
    text: 'The day is already blessed, find peace within it.',
    author: 'unknown',
  },
  {
    text: 'From error to error one discovers the entire truth.',
    author: 'Sigmund Freud',
  },
  {
    text: 'Bite off more than you can chew, then chew it.',
    author: 'Ella Williams',
  },
  {
    text: 'Work out your own salvation. Do not depend on others.',
    author: 'Buddha',
  },
  {
    text: 'One today is worth two tomorrows.',
    author: 'Benjamin Franklin',
  },
  {
    text: 'Once you choose hope, anythings possible.',
    author: 'Christopher Reeve',
  },
  {
    text: 'God always takes the simplest way.',
    author: 'Albert Einstein',
  },
  {
    text: 'One fails forward toward success.',
    author: 'Charles Kettering',
  },
  {
    text: 'From small beginnings come great things.',
    author: 'unknown',
  },
  {
    text: 'Learning is a treasure that will follow its owner everywhere',
    author: 'Chinese proverb',
  },
  {
    text: 'Be as you wish to seem.',
    author: 'Socrates',
  },
  {
    text: 'The world is always in movement.',
    author: 'V. Naipaul',
  },
  {
    text: 'Never mistake activity for achievement.',
    author: 'John Wooden',
  },
  {
    text: 'What worries you masters you.',
    author: 'Haddon Robinson',
  },
  {
    text: 'One faces the future with ones past.',
    author: 'Pearl Buck',
  },
  {
    text: 'Goals are the fuel in the furnace of achievement.',
    author: 'Brian Tracy',
  },
  {
    text: 'Who sows virtue reaps honour.',
    author: 'Leonardo da Vinci',
  },
  {
    text: "Talk doesn't cook rice.",
    author: 'Chinese proverb',
  },
  {
    text: 'He is able who thinks he is able.',
    author: 'Buddha',
  },
  {
    text: 'A goal without a plan is just a wish.',
    author: 'Larry Elder',
  },
  {
    text: 'To succeed, we must first believe that we can.',
    author: 'Michael Korda',
  },
  {
    text: 'Learn from yesterday, live for today, hope for tomorrow.',
    author: 'Albert Einstein',
  },
  {
    text: 'A weed is no more than a flower in disguise.',
    author: 'James Lowell',
  },
  {
    text: 'Do, or do not. There is no try.',
    author: 'Yoda',
  },
  {
    text: 'All serious daring starts from within.',
    author: 'Harriet Beecher Stowe',
  },
  {
    text: 'The best teacher is experience learned from failures.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'Think how hard physics would be if particles could think.',
    author: 'Murray Gell-Mann',
  },
  {
    text: "Don't wait. The time will never be just right.",
    author: 'Napoleon Hill',
  },
  {
    text: 'Time is the wisest counsellor of all.',
    author: 'Pericles',
  },
  {
    text: 'Wisdom begins in wonder.',
    author: 'Socrates',
  },
  {
    text: 'Without courage, wisdom bears no fruit.',
    author: 'Baltasar Gracian',
  },
  {
    text: 'What you fear is that which requires action to overcome.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'When performance exceeds ambition, the overlap is called success.',
    author: 'Cullen Hightower',
  },

  {
    text: 'Real magic in relationships means an absence of judgement of others.',
    author: 'Wayne Dyer',
  },
  {
    text: 'I never think of the future. It comes soon enough.',
    author: 'Albert Einstein',
  },
  {
    text: 'Skill to do comes of doing.',
    author: 'Ralph Emerson',
  },
  {
    text: 'Wisdom is the supreme part of happiness.',
    author: 'Sophocles',
  },
  {
    text: 'I believe that every person is born with talent.',
    author: 'Maya Angelou',
  },
  {
    text: 'Important principles may, and must, be inflexible.',
    author: 'Abraham Lincoln',
  },
  {
    text: 'The undertaking of a new action brings new strength.',
    author: 'Richard Evans',
  },
  {
    text: 'The years teach much which the days never know.',
    author: 'Ralph Emerson',
  },
  {
    text: 'Our distrust is very expensive.',
    author: 'Ralph Emerson',
  },
  {
    text: 'All know the way; few actually walk it.',
    author: 'Bodhidharma',
  },
  {
    text: 'Great talent finds happiness in execution.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'Faith in oneself is the best and safest course.',
    author: 'Michelangelo',
  },
  {
    text: 'Courage is going from failure to failure without losing enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    text: 'The two most powerful warriors are patience and time.',
    author: 'Leo Tolstoy',
  },
  {
    text: 'Anticipate the difficult by managing the easy.',
    author: 'Lao Tzu',
  },
  {
    text: 'Those who are free of resentful thoughts surely find peace.',
    author: 'Buddha',
  },
  {
    text: 'A short saying often contains much wisdom.',
    author: 'Sophocles',
  },
  {
    text: 'It takes both sunshine and rain to make a rainbow.',
    author: 'unknown',
  },
  {
    text: 'A beautiful thing is never perfect.',
    author: 'unknown',
  },
  {
    text: 'Only do what your heart tells you.',
    author: 'Princess Diana',
  },
  {
    text: 'Life is movement-we breathe, we eat, we walk, we move!',
    author: 'John Pierrakos',
  },
  {
    text: 'No one can make you feel inferior without your consent.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'Argue for your limitations, and sure enough they are yours.',
    author: 'Richard Bach',
  },
  {
    text: 'Luck is what happens when preparation meets opportunity.',
    author: 'Seneca',
  },
  {
    text: 'Victory belongs to the most persevering.',
    author: 'Napoleon Bonaparte',
  },
  {
    text: 'Love all, trust a few, do wrong to none.',
    author: 'William Shakespeare',
  },
  {
    text: 'In order to win, you must expect to win.',
    author: 'Richard Bach',
  },
  {
    text: 'A goal is a dream with a deadline.',
    author: 'Napoleon Hill',
  },
  {
    text: 'You can do it if you believe you can!',
    author: 'Napoleon Hill',
  },
  {
    text: "Set your goals high, and don't stop till you get there.",
    author: 'Bo Jackson',
  },
  {
    text: 'Every new day is another chance to change your life.',
    author: 'unknown',
  },
  {
    text: 'Smile, breathe, and go slowly.',
    author: 'Thich Nhat Hanh',
  },
  {
    text: 'Nobody will believe in you unless you believe in yourself.',
    author: 'Liberace',
  },
  {
    text: 'Do more than dream: work.',
    author: 'William Arthur Ward',
  },
  {
    text: 'No man was ever wise by chance.',
    author: 'Seneca',
  },
  {
    text: 'Some pursue happiness, others create it.',
    author: 'unknown',
  },
  {
    text: 'He that is giddy thinks the world turns round.',
    author: 'William Shakespeare',
  },
  {
    text: "Don't ruin the present with the ruined past.",
    author: 'Ellen Gilchrist',
  },
  {
    text: 'Do something wonderful, people may imitate it.',
    author: 'Albert Schweitzer',
  },
  {
    text: 'We do what we do because we believe.',
    author: 'unknown',
  },
  {
    text: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'If you cannot be silent be brilliant and thoughtful.',
    author: 'Byron Pulsifer',
  },
  {
    text: 'Who looks outside, dreams; who looks inside, awakes.',
    author: 'Carl Jung',
  },
  {
    text: 'What we think, we become.',
    author: 'Buddha',
  },
  {
    text: 'All our knowledge has its origins in our perceptions.',
    author: 'Leonardo da Vinci',
  },
  {
    text: 'The harder you fall, the higher you bounce.',
    author: 'unknown',
  },
  {
    text: 'Trusting our intuition often saves us from disaster.',
    author: 'Anne Wilson Schaef',
  },
  {
    text: 'Truth is powerful and it prevails.',
    author: 'Sojourner Truth',
  },
  {
    text: 'Light tomorrow with today!',
    author: 'Elizabeth Browning',
  },
  {
    text: 'Silence is a fence around wisdom.',
    author: 'German proverb',
  },
  {
    text: 'Society develops wit, but its contemplation alone forms genius.',
    author: 'Madame de Stael',
  },
 
  {
    text: 'Everyone smiles in the same language.',
    author: 'unknown',
  },
  {
    text: 'Yesterday I dared to struggle. Today I dare to win.',
    author: 'Bernadette Devlin',
  },
  {
    text: 'No alibi will save you from accepting the responsibility.',
    author: 'Napoleon Hill',
  },
  {
    text: 'If you can dream it, you can do it.',
    author: 'Walt Disney',
  },
  {
    text: 'It is better to travel well than to arrive.',
    author: 'Buddha',
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: 'Anais Nin',
  },
  {
    text: 'You have to believe in yourself.',
    author: 'Sun Tzu',
  },
  {
    text: 'Our intention creates our reality.',
    author: 'Wayne Dyer',
  },
  {
    text: 'Silence is a true friend who never betrays.',
    author: 'Confucius',
  },
  {
    text: 'Character develops itself in the stream of life.',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    text: 'From little acorns mighty oaks do grow.',
    author: 'American proverb',
  },
  {
    text: "You can't stop the waves, but you can learn to surf.",
    author: 'Jon Kabat-Zinn',
  },
  {
    text: 'Reality does not conform to the ideal, but confirms it.',
    author: 'Gustave Flaubert',
  },
 
  {
    text: 'A really great talent finds its happiness in execution.',
    author: 'Johann Wolfgang von Goethe',
  },
 
  {
    text: 'The greatest remedy for anger is delay.',
    author: 'Seneca',
  },
  {
    text: 'Growth itself contains the germ of happiness.',
    author: 'Pearl Buck',
  },
  {
    text: "You can do what's reasonable or you can decide what's possible.",
    author: 'unknown',
  },
  {
    text: 'I must break you.',
    author: 'Ivan Drago'
  }
];
