import { useState } from "react";
import "./styles.css";

var animeinfo = {
  Action: [
    {
      name: "My Hero Academia",
      rating: "5/5",
      available: "Netflix,Crunchyroll",
      description:
        "The story follows the first adventures of Izuku Midoriya, a boy who dreams of becoming a superhero himself despite being Quirkless. He is scouted by Japan's greatest hero All Might, who passes his Quirk to him and helps to enroll him in U.A. High, the prestigious high school for heroes in training."
    },
    {
      name: "One Punch Man",
      rating: "4.5/5",
      available: "Netflix,Kayoanime",
      description:
        "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch. In a world of superhuman beings, Saitama is a unique hero, he can defeat enemies with a single punch."
    },
    {
      name: "Vinland Saga",
      rating: "4/5",
      available: "Netflix,Crunchyroll",
      description:
        "A young man named Thorfinn finds himself in a quest for revenge against his father's killer. Firstly indulged in the aparent greatness of war and honor, Thorfinn quickly changes as he endures having to survive alone and then alongside the man he vows to kill, developing conflicting emotions towards the causality of his past and present life."
    },
    {
      name: "Sword Art Online",
      rating: "3.5/5",
      available: "Netflix,Kayoanime",
      description:
        "In 2022, a virtual reality massively multiplayer online role-playing game (VRMMORPG) called Sword Art Online (SAO) will be released. With the NerveGear, a helmet that stimulates the user's five senses via their brain, players can experience and control their in-game characters with their minds.On November 6, 10,000 players log into SAO's mainframe cyberspace for the first time, only to discover that they are unable to log out. Kayaba appears and tells the players that they must beat all 100 floors of a steel castle which is the setting of SAO if they wish to be free.He also states that those who suffer in-game deaths or forcibly remove the NerveGear out-of-game will suffer real-life deaths."
    }
  ],
  Thriller: [
    {
      name: "Classroom of The Elite",
      rating: "4.5/5",
      available: "Kayoanime,Hulu",
      description:
        " In the distant future, the Japanese government has established the Tokyo Metropolitan Advanced Nurturing School, dedicated to instruct and foster the generation of people that will support the country in the future. The students are given a high degree of freedom in order to closely mimic real life.The story follows the perspective of Kiyotaka Ayanokōji, a quiet and unassuming boy, who is not good at making friends and would rather keep his distance, but possesses unrivaled intelligence. He is a student of Class-D, which is where the school dumps its inferior students. After meeting Suzune Horikita and Kikyō Kushida, two other students in his class, the situation begins to change and he starts to get involved in many affairs, and his thought of an ideal normal high school life begins to get scattered."
    },
    {
      name: "Death Note",
      rating: "5/5",
      available: "Disney+,Kayoanime",
      description:
        "In Tokyo, a disaffected high school student named Light Yagami finds the Death Note, a mysterious black notebook that can kill anyone as long as the user knows both the target's name and face. Initially terrified of its god-like power, Light considers the possibilities of the Death Note's abilities and kills high-profile Japanese criminals, then targets international criminals. Five days after discovering the notebook, Light is visited by Ryuk, a shinigami and the Death Note's previous owner. Ryuk, invisible to anyone who has not touched the notebook, reveals that he dropped the notebook into the human world out of boredom and is amused by Light's actions."
    },
    {
      name: "Steins Gate",
      rating: "4/5",
      available: "Netflix,Disney+",
      description:
        "Okabe Rintarou, a university student who refers to himself as Crazy Mad Scientist Hououin Kyouma and his lab's members work on a microwave device that can transfer messages to the past. Without getting captured, they should get it working in order to beat the evil organization, SERN and stop their evil plans."
    },
    {
      name: "Death Parade",
      rating: "3.5/5",
      available: "Hulu,Kayoanime",
      description:
        "Whenever someone dies, they are sent to one of many mysterious bars run by bartenders serving as arbiters inside a tower in the afterlife. There, they must compete in Death Games with their souls on the line, the results of which reveal what secrets led them to their situation and what their fate will be afterwards, with the arbiters judging if their souls will either be sent for reincarnation or banished into the void. The series follows Decim, the lone bartender of the bar where people who died at the same time are sent to, known as the Quindecim bar, and his assistant."
    }
  ],
  Romance: [
    {
      name: "Plastic Memories",
      rating: "4/5",
      available: "Crunchyroll,Kayoanime",
      description:
        "Plastic Memories takes place in a city in the near future,in which humans live alongside androids that look exactly like humans and have human emotion and memory. SAI Corp, the leading android production company, has introduced the Giftia, an advanced android model with the most human-like qualities of any model.The lifespan of a Giftia is determined beforehand, and a Giftia can only live for a maximum of 81,920 hours (roughly nine years and four months). If they pass their expiration date, it causes personality disintegration, memory loss, and outbreaks of violence; those who experience this are known as wanderers. Wanderers only act on instinct and can no longer recognize their owners. As a result, the Terminal Services are established with the duty of retrieving Giftias who are close to the end of their lifespans from their owners, and erasing the Giftias' memories. To perform this job, the Terminal Service employees work in teams consisting of a human (called a spotter) and a Giftia (called a marksman). The story follows the work and life of such a team in SAI Corp's Terminal Service One office, the human protagonist Tsukasa Mizugaki and a Giftia named Isla. Their relationship progresses, and as they both slowly fall in love, Isla is revealed to be nearing the end of her own lifespan."
    },
    {
      name: "From Me to You",
      rating: "4.5/5",
      available: "Hulu,Crunchyroll",
      description:
        "Known for her semblance to the Sadako character of The Ring series, Sawako Kuronuma is given the nickname Sadako and misunderstood to be frightening and malicious like her fictional counterpart, despite having a timid and sweet nature. Longing to make friends and live a normal life, Sawako is naturally drawn to the cheerful and friendly Shouta Kazehaya, the most popular boy in her class. From their first meeting, Sawako has admired Kazehaya's ability to be the center of attention and aspires to be like him.When Kazehaya organizes a test of courage for the entire class and encourages her to attend, Sawako sees this as an opportunity to get along with her classmates, starting with Ayane Yano and Chizuru Yoshida. Through each new encounter and emotion she experiences, Sawako believes that meeting Kazehaya has changed her for the better. Little does Sawako know, her presence has also changed Kazehaya."
    },
    {
      name: "Rent-A-Girlfriend",
      rating: "5/5",
      available: "Netflix,Kayoanime",
      description:
        "Kazuya Kinoshita is a 20-year-old college student who has a wonderful girlfriend: the bright and sunny Mami Nanami. But suddenly, he doesn't. Without warning, Mami breaks up with him. Seeking to soothe the pain, he hires a rental girlfriend through an online app. His partner is Chizuru Mizuhara, who through her unparalleled beauty and cute demeanor, manages to gain Kazuya's affection.But after reading similar experiences other customers had had with Chizuru, Kazuya believes her warm smile and caring personality were all just an act to toy with his heart, and he rates her poorly. Aggravated, Chizuru lambastes him for his shameless hypocrisy, revealing her true pert and hot-tempered self. This one-sided exchange is cut short, however, when Kazuya finds out that his grandmother has collapsed.They dash toward the hospital and find Kazuya's grandmother already in good condition. Baffled by Chizuru's presence, she asks who this girl might be. On impulse, Kazuya promptly declares that they are lovers, forcing Chizuru to play the part. But with Kazuya still hung up on his previous relationship with Mami, how long can this difficult client and reluctant rental girlfriend keep up their act ? "
    },
    {
      name: "Kokoro Connect",
      rating: "3.5/5",
      available: "Crunchyroll",
      description:
        " When five students at Yamaboshi Academy realize that there are no clubs where they fit in, they band together to form the Student Cultural Society, or StuCS for short. The club consists of: Taichi Yaegashi, a hardcore wrestling fan; Iori Nagase, an indecisive optimist; Himeko Inaba, a calm computer genius; Yui Kiriyama, a petite karate practitioner; and Yoshifumi Aoki, the class clown.One day, Aoki and Yui experience a strange incident when, without warning, they switch bodies for a short period of time. As this supernatural phenomenon continues to occur randomly amongst the five friends, they begin to realize that it is not just fun and games. Now forced to become closer than ever, they soon discover each other's hidden secrets and emotional scars, which could end up tearing the StuCS and their friendship apart."
    }
  ],
  Adventure: [
    {
      name: "One Piece",
      rating: "5/5",
      available: "Netflix,Crunchyroll",
      description:
        "The series focuses on Monkey D. Luffy, a young man made of rubber, who, inspired by his childhood idol, the powerful pirate Red-Haired Shanks, sets off on a journey from the East Blue Sea to find the mythical treasure, the One Piece, and proclaim himself the King of the Pirates. In an effort to organize his own crew, the Straw Hat Pirates,Luffy rescues and befriends a pirate hunter and swordsman named Roronoa Zoro, and they head off in search of the titular treasure. They are joined in their journey by Nami, a money-obsessed thief and navigator; Usopp, a sniper and compulsive liar; and Sanji, a perverted but chivalrous cook. They acquire a ship, the Going Merry,[Jp 2] and engage in confrontations with notorious pirates of the East Blue. As Luffy and his crew set out on their adventures, others join the crew later in the series,including Tony Tony Chopper,an anthropomorphized reindeer doctor; Nico Robin, an archaeologist and former Baroque Works assassin; Franky,a cyborg shipwright; Brook,a skeleton musician and swordsman; and Jimbei,a fish-man helmsman and former member of the Seven Warlords of the Sea. Once the Going Merry is damaged beyond repair, Franky builds the Straw Hat Pirates a new ship, the Thousand Sunny,Together,they encounter other pirates,bounty hunters,criminal organizations,revolutionaries,secret agents,and soldiers of the corrupt World Government,and various other friends and foes,as they sail the seas in pursuit of their dreams."
    },
    {
      name: "JoJo's Bizarre Adventure",
      rating: "4/5",
      available: "Netflix,Hulu",
      description:
        "The universe of JoJo's Bizarre Adventure is a reflection of the real world with the added existence of supernatural forces and beings.[2] In this setting, some people are capable of transforming their inner spiritual power into a Stand (Sutando);another significant form of energy is Hamon Ripple,a martial arts technique that allows its user to focus bodily energy into sunlight via controlled breathing. The narrative of JoJo's Bizarre Adventure is split into parts with independent stories and different characters. Each of the series' protagonists is a member of the Joestar family, whose mainline descendants possess a star-shaped birthmark above their left shoulder blade and a name that can be abbreviated to the titular JoJo.The first six parts take place within a single continuity whose generational conflict stems from the rivalry between Jonathan Joestar and Dio Brando, while the latter two parts take place in an alternate universe where the Joestar family tree is heavily altered."
    },
    {
      name: "Dragon Ball Series",
      rating: "4.5/5",
      available: "Disney+,Hulu",
      description:
        "The story of Dragon Ball follows the life of Son Goku, a monkey-tailed boy loosely based on the traditional Chinese folk tale Journey to the West, from his life and adventures as a child all the way up to being a grandfather. During his life, he fights many battles and eventually becomes (arguably) the strongest martial artist in the universe. He is not without help, however: the comic boasts a large ensemble cast of martial artist heroes and villains which provide the conflict that drives the story.Goku's aim is to fing the seven dragon balls. These balls, when combined, can grant the owner any one wish he desires. Along the way he makes many new friends, and enemies, and he trains to become the strongest fighter in the world. "
    },
    {
      name: "Naruto",
      rating: "3.5/5",
      available: "Netflix",
      description:
        "t tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.A powerful fox known as the Nine-Tails attacks Konoha,the hidden leaf village in the Land of Fire,one of the Five Great Shinobi Countries in the Ninja World. In response,the leader of Konoha and the Fourth Hokage, Minato Namikaze seals the fox inside the body of his newborn son,Naruto Uzumaki,making Naruto a host of the beast;this costs Naruto's father his life, and the Third Hokage returns from retirement to become the leader of Konoha again.Naruto is often scorned by Konoha's villagers for being the host of the Nine-Tails. Due to a decree by the Third Hokage forbidding any mention of these events, Naruto learns nothing about the Nine-Tails until 12 years later, when Mizuki, a renegade ninja, reveals the truth to Naruto. Naruto then defeats Mizuki in combat, earning the respect of his teacher, Iruka Umino."
    }
  ]
};

var animes = Object.keys(animeinfo);

export default function App() {
  var [display, setDisplay] = useState([]);
  function onClickHandler(item) {
    display = animeinfo[item];
    setDisplay(display);
  }
  return (
    <div className="App">
      <header>
        <h1>Anime Show Recommender</h1>
      </header>
      <h2> Please Select a Genre !!</h2>
      <ul>
        {animes.map((item) => {
          return (
            <button key={item} onClick={() => onClickHandler(item)}>
              {item}
            </button>
          );
        })}
      </ul>
      <div>
        {display.map((item) => {
          return (
            <li key={item} id="head">
              <div id="head-text">{item.name}</div>
              <div id="text">Rating - {item.rating}</div>
              <div id="available">Available on {item.available}</div>
              <div id="description">Description - {item.description}</div>
            </li>
          );
        })}
      </div>
      <footer
        style={{
          position: "relative",
          bottom: "0",
          left: "0",
          right: "0",
          backgroundColor: "black",
          color: "#e74c3c",
          fontSize: "2rem"
        }}
      >
        <span style={{ color: "#e74c3" }}>Made By </span>
        <a
          href="https://sunny-singh.netlify.app"
          style={{ textDecoration: "none" }}
        >
          Sunny Singh
        </a>
      </footer>
    </div>
  );
}
