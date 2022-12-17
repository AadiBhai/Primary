const displayJoke = () => {

const collection = [`<p><b>Holy cow!</b><br>A pair of cows were talking in the field. One says, “Have you heard about the mad cow disease that’s going around?”<br>“Yeah,” the other cow says. “Makes me glad I’m a penguin.”</p>`,
`<p><b>Where there’s smoke</b><br>“Once, my father came home and found me in front of a roaring fire. That made my father very mad, as we didn’t have a fireplace.”<br><br>—Victor Borge</p>`,
`<p><b>Identity crisis</b><br>“Your mother has been with us for 20 years,” said John. “Isn’t it time she got a place of her own?”<br><br>“My mother?” replied Helen. “I thought she was your mother.”<br><br>—Joseph Lozanoff</p>`,
`<p><b>Aarrrrgh!</b><br>Why don’t pirates take a shower before they walk the plank?<br><br>They just wash up on shore.</p>`,
`<p><b>With a vengeance</b><br>In Denver, the members of a Sunday­-school class were asked to set down their favorite biblical truths. One youngster laboriously printed: “Do one to others as others do one to you.”<br><br>—Lee Olson, The Denver Post</p>`,
`<p><b>A taxing situation</b><br>According to unofficial sources, a new simplified income-tax form contains only four lines:<br><br>1. What was your income for the year?<br><br>2. What were your expenses?<br><br>3. How much have you left?<br><br>4. Send it in.<br><br>—The Link</p>`,
`<p><b>Taking stock</b><br>One of the oddities of Wall Street is that it is the dealer and not the customer who is called broker.<br><br>—Dallas News</p>`,
`<p><b>Shrink rap</b><br>Two Hollywood stars ran into each other at the door of their psychiatrist’s office.<br><br>“Hello, there,” said one. “Are you coming or going?”<br><br>“If I knew that,” said the other, “I wouldn’t be here.”<br><br>—The American Weekly</p>`,
`<p><b>Just desserts</b><br>At a party, a young wife admonished her husband, “That’s the fourth time you’ve gone back for ice cream and cake. Doesn’t it embarrass you?”<br><br>“Why should it?” answered her spouse. “I keep telling them it’s for you.”<br><br>—Selma Glasser, Good Housekeeping</p>`,
`<p><b>Cheers!</b><br>A grasshopper walks into a bar. The bartender looks at him and says, “Hey, they named a drink after you!”<br><br>“Really?” replies the grasshopper. “There’s a drink named Stan?”</p>`,
`<p><b>Listen up!</b><br>You can’t believe everything you hear—but you can repeat it.</p>`,
`<p><b>This one’s a gem</b><br>A Hollywood hostess, giving instructions to a new maid just before a party, cautioned: “Now remember, Marie, when you serve my guests, don’t wear any jewelry.”<br><br>“I haven’t anything valuable, madam,” answered the maid. “But thanks for the warning just the same.”<br><br>—Peggy McEvoy</p>`,
`<p><b>Boyfriend trouble</b><br>A teenager brings her new boyfriend home to meet her parents. They’re appalled by his haircut, his tattoos, his piercings.<br><br>Later, the girl’s mom says, “Dear, he doesn’t seem to be a very nice boy.”<br><br>“Oh, please, Mom!” says the daughter. “If he wasn’t nice, would he be doing 500 hours of community service?”<br><br>—Maria Salmon</p>`,
`<p><b>The end is near</b><br>Every time a little boy went to a playmate’s house, he found the friend’s grandmother deeply engrossed in her Bible. Finally his curiosity got the better of him.<br><br>“Why do you suppose your grandmother reads the Bible so much?” he asked.<br><br>“I’m not sure,” said his friend, “but I think she’s cramming for her finals.”<br><br>—Carl T. Schuneman</p>`,
`<p><b>Man overboard</b><br>A gawky lad from New England came to New York with his girl, and took her to nearby Playland Amusement Park. They had heard a lot about the Tunnel of Love and were especially anxious to try it out. But when they got home, the kids expressed disappointment.
<br><br>“Shucks,” the boy said, “it was dark and damp and uncomfortable. Besides, we got soaking wet.”<br><br>“How come?” asked a friend. “Did the boat leak?”<br><br>The kid looked amazed. “There’s a boat?”<br><br>—J.D. Theus</p>`,
`<p><b>Kidding around</b>
On a Miami­ to Chicago flight was a lively youngster who nearly drove everyone crazy. He was running up and down the aisle when the flight attendant started serving coffee. He ran smack into her, knocking a cup of coffee out of her hand and onto the floor.<br><br>As he stood by watching her clean up the mess, she glanced up at the boy and said, ‘”Look, why don’t you go and play outside?”
<br><br>—Eugene Carroll</p>`,
`<p><b>Now boarding</b><br>Rushing up to a large airline’s ticket counter, a man gasped, “Miss, please help me. I have to get to Chicago in the worst way!”<br><br>The clerk calmly pointed to her left and said, “Sir, that would be the airline next to us.”<br><br>—Ramona Frankum</p>`,
`<p><b>Library line</b><br>In the public library, a man with his new library card questioned the pretty librarian.<br><br>“Do you mean to say,” he asked, “that with this card I may take out any book I want?”<br><br>“Yes,” she answered.<br><br>“And may I take out record albums, too?”<br><br>“Yes, you may.”<br><br>“May I take you out?” he ventured.<br><br>Drawing herself up to her full height, she replied, “The librarians, sir, are for reference only.”<br><br>—Justine Valenti, Coronet</p>`,
`<p><b>Hunting camp</b><br>Two hunters are out in the woods when one of them collapses. He’s not breathing and his eyes are glazed. The other guy whips out his cell phone and calls 911.<br><br>“I think my friend is dead!” he yells. “What can I do?”<br><br>The operator says, “Calm down. First, let’s make sure he’s dead.”<br><br>There’s a silence, then a shot. Back on the phone, the guy says, “Okay, now what?”<br><br>—Gerald Doka</p>`,
`<p><b>Show and tell</b><br>“Nothing looks good on me anymore,” wailed a customer modeling an outfit in front of the department store’s mirror.<br><br>“Nonsense, ma’am,” soothed the salesclerk. “That dress says it all.”<br><br>“That’s the problem,” the woman replied. “I need a dress that keeps its mouth shut.”<br><br>—Don Wilder and Bill Rechin, North America Syndicate</p>`,
`<p><b>Seafood for thought</b><br>A man went into a seafood restaurant and asked for a lobster tail. The waitress smiled sweetly and said, “Once upon a time there was this handsome lobster…” —Horse & Rider</p>`,
`<p><b>A higher authority</b><br>One day the telephone in the office of the rector of President Roosevelt’s Washington church rang, and an eager voice said, “Tell me, do you expect the President to be in church this Sunday?”<br><br>“That I cannot promise,” the rector explained patiently. “But we expect God to be there, and we fancy that will be incentive enough for a reasonably large attendance.”<br><br>—John T. Watson</p>`,
`<p><b>The devil, you say</b><br>Did you hear they arrested the devil? Yeah, they got him on possession. <br><br>—Gregg Siegel</p>`,
`<p><b>Did you hear the one about…</b><br>…the shepherd who drove his sheep through town and was given a ticket for making a ewe turn?<br><br>…the nurse who was chewed out by the doctor because she was absent without gauze?<br><br>…the crustacean accused of promoting his own shellfish interests?</p>`,
`<p><b>Timing is everything</b><br>Q: How many telemarketers does it take to change a light bulb?<br><br>A: Only one, but he has to do it while you are eating dinner.<br><br>—Eldon Weisheit</p>`,
`<p><b>All bottled up</b><br>“We used to play spin the bottle when I was a kid. A girl would spin the bottle, and if the bottle pointed to you when it stopped, the girl could either kiss you or give you a nickel. By the time I was 14, I owned my own house.”<br><br>—Gene Perret, Classic One-Liners</p>`,
`<p><b>Drink up!</b><br>Restaurant patron: “Waiter, I’d like a bottle of wine.”<br><br>Waiter: “What year, sir?”<br><br>Patron: “Well, I’d like it right now.”<br><br>—Earl Wilson, Field Newspaper Syndicate</p>`,
`<p><b>Overheard</b><br>Muttered over a martini: “I hate golf. The only reason I play is to make it easy for my family to think of something to give me for Christmas.” —Art Petri, San Francisco Chronicle</p>`,
`<p><b>At your service</b><br>Mrs. Smythe was making final arrangements for an elaborate reception. “Nora,” she said to her veteran servant, “for the first half-hour I want you to stand at the drawing-room door and call the guests’ names as they arrive.”<br><br>Nora’s face lit up. “Thank you, ma’am,” she replied. “I’ve been wanting to do that to some of your friends for the last 20 years.”<br><br>—Neal O’Hara, New York Post</p>`,
`<p><b>Just saying</b><br>A bird in the hand is bad table manners.<br><br>—The Literary Digest</p>`,
`<p><b>Beat it</b><br>Two eggs, a bagel, and a sausage walk into a bar. “Bartender, my friends and I would like a cold one,” says one of the eggs.<br><br>“Sorry,” the barman replies. “We don’t serve breakfast.”<br><br>—Susan Maguire</p>`,
`<p><b>Running joke</b><br>Two hikers were walking through the woods when they suddenly confronted a giant bear. Immediately, one of the men took off his boots, pulled out a pair of track shoes, and began putting them on.<br><br>“What are you doing?” cried his companion. “We can’t outrun that bear, even with jogging shoes.”<br><br>“Who cares about the bear?” the first hiker replied. “All I have to worry about is outrunning you.”<br><br>—Jim Whitehead, The Daily Herald</p>`,
`<p><b>Just teasing</b><br>I had applied for several scholarships for the upcoming year and was thrilled to learn that I had won one from my school, the University of Nevada, Las Vegas. Sometimes such awards are named after places. The letter the university sent me said that I had won the Las Vegas Strip Scholarship, named after the street with all the major hotels.<br><br>When I told my mother about the award she paused, then asked, “Just what exactly did you do to win that scholarship?”<br><br>—Diane Lee</p>`,
`<p><b>Forgive us our trespasses</b><br>A small boy, reciting the Lord’s Prayer, ended by asking: “…and deliver us from people, amen.”<br><br>—Katherine Sullivan, Columbus Citizen</p>`,
`<p><b>Going up?</b><br>An American was being shown a big Soviet sign factory. “We turn out about 500 signs a week,” proudly said the Russian, “and when business demands it, we can step it up to 2,000.”<br><br>“Amazing!” said the visitor. “By the way, what do the signs say?”<br><br>“Elevators not running,” was the answer.<br><br>—Walter Winchell</p>`,
`<p><b>No kidding</b><br>NBC’s Moscow correspondent Irving R. Levine heard a Russian greet a friend with: “Have you heard? Pravda is running a contest for the best political joke. The first prize is 20 years.”<br><br>—Leonard Lyons</p>`,
`<p><b>Here comes the bride</b><br>At a Hollywood wedding reception, one woman remarked how lovely the star looked as a bride, and another said sweetly, “Oh, she always does. She’s thrown a bridal bouquet often enough to have pitched a nine-inning game.”<br><br>—Eddie Cantor</p>`,
`<p><b>Pop culture</b><br>Two Hollywood children of oft-divorced parents got into an argument. As it became more heated, one said, “My father can lick your father.<br><br>“Are you kidding?” cried the other. “Your father is my father!”<br><br>—Jack Gilford, Beacon Journal</p>`,
`<p><b>Headlinesmen</b><br>On an article about the Green Bay Packers’ appointment of Dan Devine as coach, in the Springfield, Illinois, State Journal: “PACKERS DECIDE TO GO WITH DEVINE GUIDANCE”<br><br>On a New York Daily News account of a Dallas Cowboy triumph over the Miami Dolphins: “MOAN OVER MIAMI”<br><br>Caption on a photo of New York Jets fullback Matt Snell on crutches after an injury: “SNELL’S PACE”<br><br>Caption on a New York Sunday News photo of the University of Oklahoma’s quarterback getting bowled over by Auburn’s team in New Orleans: “GETTING HIS LUMPS IN SUGAR BOWL”</p>`,
`<p><b>Family matters</b><br>It seems I have spent a lifetime of mouthing mechanically, “Say thank you. Sit up straight. Use your napkin. Close your mouth when you chew. Don’t lean back in your chair.” Just when I finally got my husband squared away, the kids came along.<br><br>—Erma Bombeck, Publishers-Hall Syndicate</p>`,
`<p><b>That chiseled look</b><br>My husband was building shelves in our bedroom and, intending to continue his work the next day, left some tools on my dresser, including a hammer, screwdriver, and chisel.<br><br>The following morning, while I was in front of the dresser combing my hair, my teenage daughter walked in.<br><br>“Hi, Mom,” she said, taking a look at the dresser. “Fixing your face?”<br><br>—Virginia Conroy</p>`,
`<p><b>On the couch</b><br><br>When my brother began his psychiatric practice, his first patient was a particularly good-looking young woman. My brother motioned for her to lie down on the couch, but the woman hesitated until he reassured her that it was part of the therapy procedure. Once on the couch, she smoothed her dress around her legs and began to relax a bit.<br><br>“Now then,” he asked, “how did your trouble begin?”<br><br>“Just like this,” she said.<br><br>—Don Singer, True</p>`,
`<p><b>Keyed up</b><br>On a visit to my doctor, I was pleasantly surprised to find that he had installed taped music in the waiting room. As I sat there enjoying a piano recording, I overheard an elderly lady say to her companion, “Just like these young doctors—a crowded waiting room, and he’s in there playing the piano!” <br><br>—June Iveson</p>`,
`<p><b>Keeping score</b><br>At our weekly alumni meetings, the football coach shows the film of the most recent game and holds a question-and-answer period afterward. One of the alumni, who had played on the football team many years ago and had a son on this year’s squad, posed a question concerning the defensive line. “I’d like to know,” he said, “why our boys are so slow getting into the opposition’s backfield after the ball is snapped.”<br><br>“Gosh, I’m not sure, Fred,” answered the coach. “But it could be hereditary.”<br><br>—E.M. Boswell</p>`,
`<p><b>Shoe-in</b><br>A reporter covering the Iowa State Legislature proceedings wore light summer shoes on a day when it snowed, and the following day—a pleasant, dry one—he wore overshoes. A legislator asked him about it. “It’s the effect of being around government,” he replied. “I am now prepared for yesterday.” <br><br>—James Flansburg, Des Moines Register</p>`,
`<p><b>Slow poke</b><br>One day a man showed up at the office wearing a pair of new shoes made of turtle skin. When a co-worker asked him how he liked them, he replied thoughtfully, “Well, they’re the most comfortable shoes I’ve ever worn but I do have one unusual problem with them. It took me an hour and a half to walk out of the store.”<br><br>—Morris Bender, The Saturday Evening Post</p>`,
`<p><b>Watch out below</b><br>“My son had to give up his career because of fallen arches.”<br><br>“He’s an athlete?”<br><br>“No—an architect.”<br><br>—Orben’s Comedy Fillers</p>`,
`<p><b>Did you hear…</b><br>…about the salamander that went to Hollywood to make newt movies? —Mary L. Sauermann<br>…about the Jets cocktail? Two of them and you forget what your Namath. —Charles McHarry<br><br>…about the cow that ate blue grass and mooed indigo? —Mary Porcellino<br><br>…about the veterinarian who prescribes birth-control pills for dogs? It’s part of an anti-litter campaign.<br><br>—Larry Wolters</p>`,
`<p><b>Spooked</b><br>One day in early fall a class of second-graders was discussing “What I want to be when I grow up.” The teacher received the usual replies—a fireman, a nurse. Then she asked a youngster deep in thought what he would like to be someday. He looked up with a frown and replied, “I don’t even know what I want to be for Halloween yet!”<br><br>—J. Spechalske</p>`,
`<p><b>Nothing like competition</b><br>Newspaper editor Arthur Brisbane was telling his best cartoonist, Winsor McCay, that he was the second-greatest cartoonist in the world. A reporter standing nearby, his curiosity aroused, asked Brisbane who was first. “I don’t know,” replied Brisbane. “But it sure keeps McCay on his toes.”<br><br>—Bits & Pieces</p>`,
`<p><b>In a bind</b><br>A man, shocked by how his buddy is dressed, asks him, “How long have you been wearing that bra?”<br><br>The friend replies, “Ever since my wife found it in the glove compartment.”</p>`,
`<p></b>Tusk, tusk</b><br>“I wish I had enough money to buy an elephant.”<br><br>“What on earth do you need an elephant for?”<br><br>“I don’t. I just need the money.”
<br><br>—Sam Levenson</p>`,
`<p><b>Practicing her backhand</b><br>While I was making farewell visits before moving to a new parish, an elderly member of the congregation paid me the compliment of suggesting that my successor would not be as good as I had been.<br><br>“Nonsense,” I replied, flattered.<br><br>“No, really,” she insisted. “I’ve lived here under five different ministers, and each new one has been worse than the last.”<br><br>—Rev. Eric Davis</p>`,
`<p><b>Birthday boy</b><br>I was administering an achievement test to David, a precocious six-year-old, and I began by asking him when his birthday was.<br><br>“February 20,” was his quick response.<br><br>Next I asked him, “What year, David?”<br><br>He looked at me quizzically at first and then hit upon the obvious answer. “Every year,” he said.<br><br>—Jerry Mintz</p>`,
`<p><b>All the way with LBJ</b><br>“I have learned that only two things are necessary to keep one’s wife happy. First, let her think she’s having her way. Second, let her have it.” —Lyndon B. Johnson, The New York Times</p>`,
`<p><b>Late notice</b><br>Phoning a patient, the doctor says, “I have some bad news and some worse news. The bad news is that you have only 24 hours left to live.”<br><br>“That is bad news,” the patient replies. “What could be worse?”<br><br>The doctor answers, “I’ve been trying to reach you since yesterday.”</p>`,
`<p><b>Dressed to kill</b><br>One mid-October evening, I answered a knock on the door. There in front of me was a boy wearing a Dracula mask.<br><br>“Trick or treat!” he yelled.<br><br>“Nice costume,” I said. “But Halloween’s not for another two weeks.”<br><br>“I know,” he said. “But I’m away then.”<br><br>—Jim Robertson</p>`,
`<p><b>Legal eagle</b><br>A police officer arrives at the scene of an accident to find a car smashed into a tree. The officer rushes over to the vehicle and asks the driver, “Are you seriously hurt?”<br><br>“How should I know?” the driver responds. “I’m not a lawyer!”<br><br>—Michael Knigge</p>`,
`<p><b>Gone fishin’</b><br>Give a man a fish and he will eat for a day. Teach a man to fish and he will sit in a boat and drink beer all day.</p>`,
`<p><b>Ripe rejoinder</b><br>The young father took a seat on the bus next to an elderly man and plopped his one-year-old on his lap, just as the little boy began to cry and fidget.<br><br>“That child is spoiled, isn’t he?” the old man remarked.<br><br>“No,” said the dad. “They all smell this way.”<br><br>—Robert Howe</p>`,
`<p><b>Caught in the web</b><br>I was visiting my son the other night when I asked if I could borrow a newspaper.<br><br>“Dad, this is the 21st century,” he said. “I don’t waste my money on newspapers. But if you like, you can borrow my iPad.”<br><br>I can tell you this: That spider never knew what hit him.<br><br>—Adam Joshua Smargon</p>`,
`<p><b>Last laugh</b><br>“First, the doctor told me the good news. He said that I was going to have a disease named after me.” <br><br>—Steve Martin</p>`,
`</p><b>Holy deduction</b><br>“Hello, Reverend Smith? This is the Internal Revenue Service. Is Samuel Jones a member of your congregation?”<br><br>“He is.”<br><br>“Did he donate $10,000 to the church?”<br><br>“He will.”<br><br>—Hugh Neeld</p>`,
`<p><b>Foregone conclusion</b><br>One Sunday, a minister played hooky from church so he could shoot a round of golf. St. Peter, looking down from Heaven, seethed. “You’re going to let him get away with this, God?”<br><br>The Lord shook his head.<br><br>The minister took his first shot. The ball soared through the air 420 yards and dropped into the cup for a hole in one. St. Peter was outraged. “I thought you were going to punish him!”<br><br>The Lord shrugged. “Who’s he going to tell?”</p>`,
`<p><b>Talk of the town</b><br>I’d offered to drive my mother-in-law to the doctor’s. But when I arrived at her house, I found her gossiping away with a neighbor.<br><br>“Mom, we’ve got to go,” I interjected, but she couldn’t hear me over the chatter. “Mom!” I repeated as I pulled her away.<br><br>“Sorry, but I didn’t know what to do,” she said, getting into the car. “That woman wouldn’t stop listening to me.”<br><br>—Christine Chapman</p>`,
`<p><b>Just wondering</b><br>If Dracula can’t see his reflection in the mirror, how come his hair is always so neatly combed?<br><br>—Steven Wright</p>`,
`<p><b>Not reassuring</b><br>I was already a nervous wreck about my upcoming surgery. It didn’t help matters when the admitting nurse absent-mindedly asked me, “Have you had a hysterectomy before?”<br><br>—Terry Wisener</p>`,
`<p><b>Gray matter</b><br>A brain walks into a bar and takes a seat. “I’d like some wings and a pint of beer, please,” he says.<br><br>“Sorry, but I can’t serve you,” the bartender replies. “You’re out of your head.”</p>`,
`<p><b>Kitchen confidential</b><br>I hang on to my old, beat-up appliances as long as they keep working. I thought my wife shared, or at least accepted, my philosophy. But the other morning, I saw a note posted in front of my 15-year-old coffeemaker: “Jurassic Perk.”<br><br>—Bill Schmitt</p>`,
`<p><b>Man up!</b><br>Three rough-looking bikers stomp into a truck stop where a grizzled old-timer is having breakfast.<br><br>One of the bikers extinguishes his cigarette in the old guy’s pancakes. The second biker spits a wad of chewing tobacco into his coffee. The third biker dumps the whole plate onto the floor.<br><br>Without a word of protest, the old guy pays his bill and leaves.<br><br>“Not much of a man, was he?” says one of the bikers.<br><br>“Not much of a driver, either,” says the waitress. “He just backed his truck over three motorcycles.”</p>`,
`<p><b>Weighty matter</b><br>“I went to the 30th reunion of my preschool. I didn’t want to go, because I’ve put on, like, a hundred pounds.”<br><br>—Wendy Leibman</p>`,
`<p><b>Strikeout</b><br>Two old friends, Ned and John, lived for baseball. Then one day, John died, leaving Ned inconsolable. A few weeks later, Ned heard someone calling his name. He looked up. Standing on a cloud was his old pal.<br><br>“Ned,” John called down, “I have good news and bad. The good news is, there’s baseball in heaven!”<br><br>“Great,” said Ned. “What’s the bad news?”<br><br>“You’re pitching Sunday.”<br><br>—Earl Fincher</p>`,
`<p><b>Shifting priorities</b><br>As the hedge fund manager gets out of his brand-new Porsche, a truck goes racing by, taking off the door. “My Porsche! My beautiful silver Porsche is ruined!” he screams.<br><br>A police officer on the scene shakes his head in disgust. “I can’t believe you,” he says. “You’re so focused on your possessions that you didn’t even realize your left arm was torn off when the truck hit you.”<br><br>The hedge fund manager looks down in absolute horror. “Oh, no!” he cries. “My Rolex!”</p>`,
`<p><b>Bite size</b><br>Several weeks ago, coming home from work on a crowded bus, I stood next to a woman and her small son. I asked if she wasn’t afraid the little boy would be crushed. “Not at all,” she answered. “He bites.” <br><br>—Mrs. Phil T. Lewis</p>`,
`<p><b>Figure of speech</b><br>After writing a speech for class, my daughter asked for input. I listened to her talk about sexually transmitted diseases, then gave my opinion.<br><br>“It’s great,” I said. “There’s one sentence in particular that I like.”<br><br>“Which one?” she asked.<br><br>“The one where you write, ‘The only way other than abstinence to be sure that you will not contract an STD is to remain in a monotonous relationship.'”<br><br>—Kelli G.</p>`,
`<p><b>Mixed signals</b><br>Few people know what a quartermaster does. So during my aircraft carrier’s Family Day, I demonstrated a procedure called semaphore—I grabbed my flags and signaled an imaginary boat.<br><br>When finished, I pointed to a little girl in front and asked, “Now do you know what I do?”<br><br>“Yes,” she said. “You’re a cheerleader.”<br><br>—Danny Sullivan</p>`,
`<p><b>Landing gear</b><br>The topic of the day at Army Airborne School was what you should do if your parachute malfunctions. We had just gotten to the part about reserve parachutes when another student raised his hand.<br><br>“If the main parachute malfunctions,” he said, “how long do we have to deploy the reserve?”<br><br>Looking the trooper square in the face, the instructor replied, “The rest of your life.”<br><br>—Kenneth Rauens</p>`,
`<p><b>Career move</b><br>With a pile of 300 resumes on his desk and a need to pick someone quickly, my boss told me to make calls on 50 and toss the rest.<br><br>“Throw away 250 resumes?” I asked, shocked. “What if the best candidates are in there?”<br><br>“You have a point,” he said. “But then again, I don’t need people with bad luck around here.”<br><br>—Becky Horowitz</p>`,
`<p><b>No honeymoon?</b><br>The English language often got the better of my German grandfather, a pastor. During one service, he announced that two members of his flock were getting married.<br><br>“You’re all invited to the wedding,” he told the congregation. “And also to the parish hall afterward for the conception.”<br><br>—Jerome Lossner</p>`,
`<p><b>Doctor, doctor</b><br>Randy Pausch is a renowned computer science professor, but that didn’t carry much weight with his mother. After he got his PhD, she introduced him to friends by saying, “This is my son. He’s a doctor, but not the kind who helps people.”</p>`,
`<p><b>Cracking up</b><br>Scene: A morning with my six-year-old granddaughter, Emma.<br><br>Me: Would you like bacon and eggs for breakfast?<br><br>Emma: I only like eggs when they’re mixed with something.<br><br>Me: Like omelets?<br><br>Emma: No, like brownies.<br><br>—Elizabeth Cooper</p>`,
`<p><b>Matching wedding bandwidths</b>
Before you marry a person, you should first make them use a computer with slow internet to see who they really are.<br><br>—Will Ferrell</p>`,
`<p><b>Motherly love</b><br>About a week after my son left for boot training, I happened to go into his room for an afternoon nap. His bed was still warm and cozy, and I seemed to feel his presence. I wrote and told him that either my mind was playing tricks on me or some supernatural phenomenon had comforted me.<br><br>I was still trying to figure out the “miraculous” warmth when his reply came. “Sorry, Mother, I forgot. Turn off my electric blanket.”<br><br>—Mrs. George L. Hicks</p>`,
`<p><b>Picture this</b><br>Mr. and Mrs. Shaw were on safari in Africa, walking through the jungle. Suddenly a huge lion sprang out of the bushes and seized Mrs. Shaw, dragging her off.<br><br>“Shoot!” she screamed to her husband. “Shoot!”<br><br>“I can’t!” he shouted back. “I’ve run out of film!”<br><br>—1,000 More Jokes for Kids</p>`,
`<p><b>Zen koans for the Internet age</b><br>If an anonymous comment goes unread, is it still irritating?
What is the sound of no hands texting?
If nobody likes your selfie, what is the value of the self?
To see a man’s true face, look to the photos he hasn’t posted.<br><br>—Brandon Specktor</p>`,
`<p><b>Marriage go-round</b><br>After finishing our Chinese food, my husband and I cracked open our fortune cookies.<br><br>Mine read, “Be quiet for a little while.”<br><br>His read, “Talk while you have a chance.”<br><br>—Carol Burks</p>`,
`<p><b>Amount due</b><br>A last-minute filer walked into our state income tax office and handed me his returns. Just as he did, a peal of laughter could be heard in another room.<br><br>Glaring at me, he grumbled, “What are they doing back there, counting the money?”<br><br>—William Umberson</p>`,
`<p><b>File under “oops”</b><br>From an article about a hotel renovation in the Reno Gazette-Journal: “The downstairs, which will be connected to the upstairs by a spiral staircase, will have more meeting space plus food and beverage fatalities.”<br><br>—R.E. Gillett</p>`,
`<p><b>Doggone!</b><br>At the bank where I am a teller, a couple with three large dogs in their minivan pulled up to my drive-in window. When the man handed me his deposit slip, the dogs began to climb over him. Pushing them aside, he looked at me sheepishly. “They think we’re at McDonald’s,” he said.<br><br>—Lissa Snyder</p>`,
`<p><b>Batter up!</b><br>Boy’s definition of a waffle: “A pancake with a nonskid tread.”<br><br>—American Boy</p>`,
`<p><b>Pennies from heaven</b><br>Pastor: “Good morning, May. I hear God has seen fit to send you little twin brothers.”<br><br>Little May: “Yes sir, and He knows where the money’s coming from, too. I heard my daddy say so.”<br><br>—National Farm Journal</p>`,
`<p><b>School daze</b><br>Emily had been to school for the first time. When asked what she had learned, she sighed, hopelessly. “Nuffin’. I’ve got to go back tomorrow.” <br><br>—Christian Observer</p>`,
`<p><b>Kid’s logic</b><br>A Stanford University professor took his young son with him on a trip across the country. One day after their return, a package was delivered with postage due. Neither the professor nor his wife had the necessary $3, but their son produced it. Surprised, his mother asked how he came to have that much money.<br><br>“Well,” he said, “Dad was awfully careless with money on our trip and nearly always left some on the table when we ate. So I just picked it up.”<br><br>—D. Elton Trueblood</p>`,
`<p><b>New England brevity</b><br>The editor of a Vermont weekly sent to one Hiram Sparks a notice that his subscription had expired. The notice came back with the laconic scrawl: “So’s Hiram.”<br><br>—Theodore Rubin</p>`,
`<p><b>Ouch!</b><br><br>“I don’t think I look thirty, do you, dear?” asked the wife.<br><br>“No, darling, not now,” her husband replied. “But you used to.”<br><br>—Alabama Courier</p>`,
`<p><b>Listen here</b><br>“Of course I wouldn’t say anything about her unless I could say something good. And, oh boy, is this good…”<br><br>—Bill King, Collier’s</p>`,
`<p><b>On the fly</b><br>Visitor to the War Department: “I have crossed a homing pigeon with a woodpecker. It not only delivers the message, it also knocks on the door.” <br><br>—Click</p>`,
`<p><b>Blah blah blah</b><br>“When she talks it isn’t conversation—it’s a filibuster.”<br><br>—Eric A. Enstrom</p>`,
`<p><b>Funny farm</b><br>A traveling salesman, caught in a torrential rainstorm, stopped overnight at a farmhouse. In the morning, he looked out on a flood coursing through the front yard. He watched pieces of fence, chicken coops, branches, and an old straw hat floating past with the current. Then he saw the straw hat come back, upstream past the house! Then he saw it go down again. Pretty soon it came back upstream—and by now the salesman wondered if he had gone crazy. Finally he called the farmer’s daughter.<br><br>“Oh,” she said, after a glance out the window, “that must be Grandpa. He said yesterday that in spite of hell or high water he was going to mow the yard today.”<br><br>—Marguerite Coyle</p>`,
`<p><b>Alcohol-free zone</b><br>Comedian W.C. Fields, describing a town that ran out of whiskey: “We lived for days on nothing but food and water.”<br><br>—PM newspaper</p>`,
`<p><b>Out of sight</b><br>At a Long Island house party, a chap invited an attractive girl to go fishing with him on the Sound. After an hour without any luck, he asked, “Do you think we ought to try chumming?”<br><br>His companion, a novice at fishing, looked toward the house on the distant shore, then replied, “We might as well. They can’t see us from there.”<br><br>—John C. Miller</p>`,
`<p><b>Case history</b><br>A young mother paying a visit to her doctor in Providence, Rhode Island, made no attempt to restrain her five­-year-­old son, who was ransacking an adjoining treatment room. But finally an extra-­loud clatter of bottles did prompt her to say, “I hope, doctor, you don’t mind Billy being in your examining room.”<br><br>“No,” said the doctor calmly. “He’ll be quiet in a moment when he gets to the poisons.”<br><br>—Edith C. Rock</p>`,
`<p><b>Campaign platform</b><br>Probably the reason many a politician stands on his record is to keep voters from examining it.<br><br>—Cy N. Peace</p>`,
`<p><b>Foot in mouth</b><br>The sailor and his girl had been having a disagreement; she was crying and he was trying to comfort her. As I got closer I heard him say, “Honest, honey, you gotta believe me—I ain’t got a sweetheart in ev’ry port!”<br><br>As I moved on I heard his closing argument: “I ain’t been in ev’ry port!”<br><br>—Roy L. Nicholson</p>`,
`<p><b>On order</b><br>When my teenage son worked part time in a hardware store, a man came in to buy hooks for hanging plants. But there were only two hooks left in the gold color that he needed.<br>My son, trying to be helpful, suggested, “Could you maybe use the silver or the white instead?”<br><br>The customer scrutinized him and said, “You’re not married, are you?”<br><br>—Nancy Guerico</p>`,
`<p><b>Diet tribe</b><br>Dad loves to eat and does so with gusto—to the distress of my mother, who worries about his weight. One evening Dad was devouring a snack of cheese spread and crackers. As he scraped the last bit of spread from its container, he asked Mom if she wanted to save the jar.<br><br>“No, it’s okay,” Mom replied. “Go ahead and eat it.”<br><br>—V.A. Kelly</p>`,
`<p><b>Snail’s pace</b><br>A turtle is crossing the road when he’s mugged by two snails. When the police show up, they ask him what happened. The shaken turtle replies, “I don’t know. It all happened so fast.”<br><br>—Debby Carter</p>`]

let random = collection[Math.floor(Math.random * collection.length)]

document.getElementById("second").innerHTML += random
}
