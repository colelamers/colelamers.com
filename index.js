let listOfQuotes = [
  "If the rule you followed, brought you to this, of what use was the rule?", // Javier Bardem in No Country For Old Men
  "Three may keep a secret if two of them are dead.", // Ben Franklin
  "Beginning is easy; Continuing is hard.",
  "Better to remain silent and be thought a fool than to speak and to remove all doubt.",  // Mark Twain
  "He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.", // Bible
  "There is not a man who does not get senile by the time he reaches sixty. And when one thinks that he will not be senile, he is already so.", 
  "Do not think you will necessarily be aware of your own enlightenment.", // Dogen
  "Encourage and listen well to the words of your subordinates. It is well known that gold lies hidden underground.",
  "The past is passed, the future is now.", // Christopher Walken in Joe Dirt
  "There are only two kinds of programming languages: the ones people complain about and the ones nobody uses.", // Bjarne Stroustrup
  "Careful, Icarus, that you don't fly too close to the sun.",
  "Even the monkeys stood upright at some point.", // David in Alien Covenant
  "It behooves oneself to keep his wits.", // Brad Pitt in Inglorious Basterds
  "We hear a story too good to be true... it ain't.", // Brad Pitt in Inglorious Basterds
  "When one note is off, it eventually destroys the whole symphony.", // Michael Fassebender in Alien Covenant
  "A person is smart. People are dumb, panicky, and dangerous animals.", // Tommy Lee Jones in Men in Black
  "The more you know who you are, and what you want, the less you let things upset you.", // Bill Murray in Lost in Translation
  "It's a double pleasure to deceive the deceiver.", // Niccolo Machiavelli
  "One who deceives will always find those who allow themselves to be deceived.", // Niccolo Machiavelli
  "Men rise from one ambition to another: first, they seek to secure themselves against attack, and then they attack others.", // Niccolo Machiavelli
  "A gentleman is simply a patient wolf.", // Lana Turner
  "I'm sorry darling. This is the game.", // James McAvoy in Atomic Blonde
  "People are liars, snakes, and thieves. You can never know who to trust.",
  "Be water, my friend.", // Bruce Lee
  "It's in my nature.", // Scorpion to the frog
  "Never attribute to malice that which is adequately explained by incompetence.",
  "Same Rules Apply.", // DS Bruce Robertson, Filth
  "Whoever appeals to the law against his fellow man is either a fool or a coward. Whoever cannot take care of himself without that law is both. For a wounded man shall say to his assailant 'If I live, I will kill you; if I die, you are forgiven.' Such is the rule of honor.", // Lamb of God, Omerta
  "If you stare into the abyss, the abyss stares back.", // Nietzsche 
  "The only thing worse than not getting what you want, is getting it.", // Sonya Sones
  "Youth is wasted on the young because they have nothing else to spend.", 
  "If a lie is only printed often enough, it becomes a quasi-truth, and if such a truth is repeated often enough, it becomes an article of belief, a dogma, and men will die for it.", // The Crown of Life
  "Repeat a lie long enough and you'll suddenly forget the truth.",
  "He who has done nothing worthy of criticism, is of no consequence.",
  "Tithes cannot save those from the ostracism they have created.",
  "I forget my past because others will remember it for me.",
  "Find your zero; stay away from it.",
  "First time home buyers always forget to factor in the cost of owning a home.",
  "Life has no purpose. Everything will be forgotten. Nothing you do matters.",
  "Happy wife, happy life; But a single man's got a plan.",
  "All of life is surmised by pretentious vanity, the perception of wealth, and the facade of happiness.",
  "Prayers fall on deaf ears while evil perpetuates.",
  "There are no libertarians in an economic crisis.",
  "Markets can remain irrational longer than you can remain solvent.", // John Maynard Keynes
  "Be wary the fury of a patient man.",
  "Pessimists remind Optimists that they don't live in reality. Optimists remind Pessimists that they live in two different realities.",
  "Only those who were at the bottom know where all the rungs are.",
  "Separate the wheat from the chaff.", // bible
  "The man who runs away, fights again.", // Menander
  "The wise man speaks because he has something to say, the fool because he has to say something.", // Aristotle
  "Those who can, do; Those who can't, teach. And those who can't teach? Well, they end up as your manager.",
  "The road to wisdom is paved with pain.",
  "The path to hell is paved with good intentions.",
  "No good deed goes unpunished.",
  "Enjoy life. No one gets out alive.", // Teresa Mummert
  "God created war so that Americans would learn geography.", // Mark Twain
  "I do not fear death. I had been dead for billions and billions of years before I was born, and had not suffered the slightest inconvenience from it.", // Mark Twain
  "If you pick up a starving dog and make him prosperous he will not bite you. This is the principal difference between a dog and man.", // Mark Twain
  "Heaven goes by favor. If it went by merit, you would stay out and your dog would go in.", // Mark Twain
  "It's easier to fool people than to convince them that they have been fooled.", // Mark Twain
  "I have never met a man so ignorant that I couldn't learn something from him.", // Galileo Galilei 
  "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.", // Galileo Galilei 
  "By denying scientific principles, one may maintain any paradox.", // Galileo Galilei 
  "And, believe me, if I were again beginning my studies, I should follow the advice of Plato and start with mathematics.", // Galileo Galilei 
  "Let us be thankful for the fools. If it were not for them, the rest of us could not succeed. ", // Mark Twain
  "Good judgement is the result of experience and experience the result of bad judgement.", // Mark Twain
  "Travel is fatal to prejudice, bigotry, and narrow-mindedness.", // Mark Twain
  "There is nothing so annoying as having two people talking when you're busy interrupting.", // Mark Twain
  "For business reasons, I must preserve the outward signs of sanity.", // Mark Twain
  "Never be haughty to the humble, never be humble to the haughty.", // Mark Twain
  "She was not quite what you would call refined. She was not quite what you would call unrefined. She was the kind of person that keeps a parrot.", // Mark Twain
  "I think we agree, the past is over.", // George Bush
  "I know the human being and fish can coexist peacefully.", // George Bush
  "I call upon all nations, to do everything they can, to stop these terrorist killers. Thank you...now watch this drive.", // George Bush
  "One of the great things about books is sometimes there are some fantastic pictures.", // George Bush
  "America is the land of petty dictators.",
  "The race is not to the swift, nor the battle to the strong, neither yet bread to the wise, nor yet riches to men of understanding, nor yet favour to men of skill; but time and chance happeneth to them all.", // Bible
  "Many people would rather cling to the idea of their perfect reality than work within the confines of their current one.",
  "Marriage, like any option, has a strike price.",
  "It is wise to differentiate between your personal reality and the one you live in.",
  "The first move is the most vulnerable, but it sets the field.",
  "If your enemy has made the first move, trap him with his own arrogance. For the best lure is baiting with ignorance.",
  "The key to proper malice is hidden beneath a veneer of foolish inquiry and ignorance that nobody risks to antagonize.",
  "There are worse fates than death.",
  "My favorite life lessons are the ones I learn before everyone else.",
  "Age does not equate wisdom.", // My quote; Menander - It is not white hair that engenders wisdom.
  "The birds do not quit singing because they didn't attract a mate.",
  "As a matter of self-preservation, a man needs good friends or ardent enemies, for the former instruct him and the latter take him to task.", // Diogenes
  "The die is cast.", // Julius Caesar 
  "It is possible to commit no mistakes and still lose. That is not a weakness. That is life.", // Jean-Luc Picard
  "It is difficult to free fools from the chains they revere.", // Voltaire
  "If you want me to believe in God, you must make me touch him.", // Denis Diderot
  "It is dangerous to be right in matters on which the established authorities are wrong.", // Voltaire
  "Each player must accept the cards life deals him. Once in hand, he alone must decide how to play them.", // Voltaire
  "The most cost-effective martial art is a new pair of running shoes.",
  "Praise the God of all, drink the wine, and let the world be the world.", // French proverb, popularized by the Tudors show
  "There's no innovation without disobedience.", // French proverb
  "Soft men are needed for strong men to cushion their fall.",
  "Some people die at 25 and aren't buried until 75.", // Benjamin Franklin
  "Religion is what keeps the poor from murdering the rich.", // Napoleon Bonaparte
  "Prayer and meditation does not solve your problems, it just wastes the time that could be used to solve your problems.",
  "The surest way to remain poor is to be an honest man.", // Napoleon Bonaparte
  "Time heals all wounds.",
  "Lead me, follow me, or get the hell out of my way.", // George S. Patton
  "Take calculated risks. That is quite different from being rash.", // George S. Patton
  "A man can be happy with any woman, as long as he does not love her.", // Oscar Wilde
  "To love oneself is the beginning of a lifelong romance.", // Oscar Wilde
  "Either write something worth reading or do something worth writing.", // Benjamin Franklin
  "Luck is when preparation meets opportunity.",
  "Blessed is he that expects nothing, for he shall never be disappointed.", // Benjamin Franklin
  "If a man empties his purse into his head, no one can take it from him.", // Benjamin Franklin
  "Skepticism is the first step on the road to philosophy.", // Dennis Diderot
  "But truly, if I were not Alexander, I wish I were Diogenes.", // Alexander the Great after Diogenes told him to 'stand out of my light'
  "Arrogant men are successful because of hard work, wise men are successful because of sheer luck.",
  "Is God willing to prevent evil, but not able? Then he is not omnipotent. Is he able, but not willing? Then he is malevolent. Is he both able and willing? Then whence cometh evil? Is he neither able nor willing? Then why call him God?", // Epicurus
  "Being alone is a difficult path. If you cannot accept your plight, you will forever be in hell.",
  "If I had seven peasants, I could make seven lords. But if I had seven lords, I could not make ONE Holbein!", // Henry VIII
  "Make it Work, Make it Right, Make it Fast.",
  "You don't reason with intellectuals. You shoot them.", // Napoleon Bonaparte
  "The reason most people fail instead of succeed is they trade what they want most for what they want at the moment.", // Napoleon Bonaparte
  "Nobody ever got fired for choosing IBM.", // cya adage
  "In a Recession, there is no future beyond the current quarter.",
  "Salute the rank, not the man.",
  "Don't vote, it just encourages the bastards.", // PJ O'rourke
  //"Yippee ki-yay motha-fucka.", // Bruce Willis in Die Hard
  "A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyze a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects.", // Robert Heinlein
  "Don't handicap your children by making their lives easy.", // Robert Heinlein
  "Almost any sect, cult, or religion will legislate its creed into law if it acquires the political power to do so.", // Robert Heinlein
  "Being right too soon is socially unacceptable.", // Robert Heinlein
  "Willie hears ya, Willie don't care.", // Willie from the Simpsons
  "If you come for the king, you better not miss.",
  "Sucks to suck.",
  "I know a man who gave up smoking, drinking, sex, and rich food. He was healthy right up to the time he killed himself.", // Johnny Carson
  "Tech enthusiasts get smart/connected everything. Tech professionals keep a gun next to the printer in case it makes any funny noises.",
  "So let it be written. So let it be done.", // Pharaoh to Moses from the ten commandments
  "In time, you will know the tragic extent of my failings.", // Darkest Dungeon
  "One day closer to death!",  // Rufus Sewell in Marvelous Mrs. Maisel
  "You can't min-max life.", 
  "You wasted $150,000 on an education you coulda got for $1.50 in late fees at the public library.", // Matt Damon from Good Will Hunting
  "Ever wonder why affluent people never study hard sciences? Because math is hard.",
  "Every dead body on Mt. Everest was once a highly motivated individual.", // Multiple attributions
  "In a world of liars, all men are assumed to be dishonest, even an honest man. When an honest man's tale does not correspond with others notions, the man is presumed to be a liar. His experiences condition him to become dishonest so that people will finally believe he is not so. Thus is the paradox of trust.",
  "Count the pennies and the pounds count themselves.", // Various 
  "Never underestimate the obstinacy of an individual unwilling to change.",
  "It is no nation we inhabit, but a language. Make no mistake; our native tongue is our true fatherland.", // Emil Cioran
  "To have another language is to possess a second soul.", // Charlemagne
  "Music is the universal language of mankind.", // Henry Wadsworth Longfellow
  "There is no such thing as a new beginning, Roman. With every day we live, we pick up new baggage, baggage that we must carry with us for the rest of our lives. There's no dropping it and pretending we are fresh and clean just because we got off a boat.", // Niko Bellic from GTA4
  "The difference between a wise man and an intelligent man is the wise man knows when being wrong is right.",
  "Remember that you are dust and to dust you shall return.", // Ash Wednesday 
  "All we are is dust in the wind.", // Dust in the Wind by Kansas
  "The only hope you have is to accept the fact that you're already dead. The sooner you accept that, the sooner you'll be able to function as a soldier is supposed to function: without mercy, without compassion, without remorse. All war depends upon it.", // Matthew Settle from Band of Brothers as Ronald Speirs
  "A man of genius is seldom ruined but by himself.", // Samuel Johnson 
  "You know, throughout history, I bet every old man probably said the same thing. And old men die, and the world keeps spinnin'.", // Woody Harrelson from True Detectives
  "What progress we are making. In the Middle Ages they would have burned me. Now they are content with burning my books.", // Sigmund Freud
  "What is hell? I maintain that it is the suffering of being unable to love.", // Fyodor Dostoevsky, The Brothers Karamazov
  "But how could you live and have no story to tell?", // Fyodor Dostoevsky, White Nights
  "The best cure for Christianity is reading the bible.", // Mark Twain
  "The art of American business practice is a firm handshake, a fake smile, and a vacuum in your wallet.",
  "If someone is selling you something, they're lying somewhere.",
  "When life gives you lemons? Don't make lemonade. Make life take the lemons back! Get mad! 'I don't want your damn lemons! What am I supposed to do with these?' Demand to see life's manager! Make life rue the day it thought it could give Cave Johnson lemons! Do you know who I am? I'm the man who's going to burn your house down! With the lemons! I'm going to get my engineers to invent a combustible lemon that burns your house down!", // J.K. Simmons as Cave Johnson in Portal 2
  "Science isn't about WHY. It's about WHY NOT. Why is so much of our science dangerous? Why not marry safe science if you love it so much.", // J.K. Simmons as Cave Johnson in Portal 2
  "To leave behind a thing of beauty, something like this, something that a people will marvel over centuries from now; That's worth living for.", // Rufus Sewell in the TV show Victoria
  "The only way to settle down, is by settling.",
  "When should a man marry? A young man not yet, an elder man not at all.", // Sir Franics Bacon
  "A fool and his money are soon to part.", 
  "Life without an object to pursue is a languid and tiresome thing.", // Sir Francis Bacon
  "If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?", // Albert Einstein
  
];


/**
 * Makes an HTML node and appends it to the DOM with 
 * some extra css.
 * 
 * @param | List<string> | ["item1", "item2"] |
 * List of the quote strings.
 * 
 * @param | string | "titleUsed" |
 * Title used for html.
 */
function AppendToHtml(listOfStrings, title) {
  let index = RandomizeLocalStorageArrayIndexes(listOfStrings, title);
  let quoteTable = document.getElementsByClassName("quotesTable")[0];

  // Quote Row Nodes and Add to DOM
  let appendTdNode = quoteTable.children[0].children[1].children[0];
  appendTdNode.innerText = listOfStrings[index];

  // Count of remaining quotes
  let quotesPickedList = localStorage.getItem(title).split(",").length;
  let quoteCountWithZeroes = AddLeadingZeroes(quotesPickedList);
  let remainingQuotes =  quoteCountWithZeroes + "/" + listOfStrings.length;

  // Quote number from List
  let appendCount = quoteTable.children[0].children[0].children[0];
  let nonZeroIndex = (index + 1);
  let trailingZeroString = "Quote #" + AddLeadingZeroes(nonZeroIndex);

  // Add Quote counting string to DOM
  appendCount.innerText = remainingQuotes + " - " + trailingZeroString;
}

/**
 * Adds leading zeroes to a numerical value.
 * Currently hardcoded for hundreds and tens place.
 * 
 * @param | int | 23, 100, 5 |
 * Any integer value
 * 
 * @returns | string | "023", "100", "005" |
 * Appends zeroes to the front of the integer as a string.
 * 
 * todo 2; make it so it can be leading or trailing, and that the decimal place is an arg
 */
function AddLeadingZeroes(intValue){
  let tempStringValue = "-1";
    // Detect Trailing Zeros
    if (intValue / 100 >= 1){
      tempStringValue = intValue;
    }
    else if (intValue / 10 >= 1){
      tempStringValue = "0" + intValue;
    }
    else{
      tempStringValue = "00" + intValue;
    }

    return tempStringValue;
}

/**
 * This function takes a list of strings and a common 
 * title (for the key) and will check every index 
 * with the Math.Random until every single index has 
 * been selected. Then it will refresh and start over 
 * again, randomly selecting indexes.
 * 
 * @param | List<string> | ["item1", "item2"] |
 * List of the quote strings.
 * 
 * @param | string | "titleUsed" |
 * Title used for html.
 * 
 * @returns | int | 15 |
 * Gives back the found index value to be used from the list.
 */
function RandomizeLocalStorageArrayIndexes(listOfStrings, title) {
  let lsList = localStorage.getItem(title);
  let index = Math.floor((Math.random() * listOfStrings.length));

  // Empty and reset local storage or grab new random index
  if (lsList != null || lsList != undefined) {
    let splitList = lsList.split(",");

    // Empty localstorage if all options have been selected
    if (splitList.length >= listOfStrings.length) {
      // Delete local storage
      localStorage.removeItem(title);

      // Reset with new random index
      localStorage.setItem(title, index);

      // Reset other local vars
      lsList = "";
      splitList = lsList.split(",");
    }

    // Loop through indexes until a new one is found
    while (splitList.indexOf(index.toString()) > -1) {
      index = Math.floor((Math.random() * listOfStrings.length));
    }
  }
  else {
    // Else means localstorage not initialized so we just make it blank
    lsList = "";
  }

  // Add index plus
  lsList += "," + index;

  if (lsList.indexOf(",") === 0) {
    lsList = lsList.replace(",", "");
  }

  localStorage.setItem(title, lsList);

  return index;
}

AppendToHtml(listOfQuotes, "Quote");