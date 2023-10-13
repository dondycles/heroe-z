"use client";

import { Divider } from "@nextui-org/react";
import { useAnimateStore } from "@/store";
import { container, item } from "@/transitions";
import { AnimatePresence, motion } from "framer-motion";

export default function Chapter1() {
  const animate = useAnimateStore();
  return (
    <AnimatePresence>
      <motion.h1 initial={{ x: 10 }} animate={{ x: 0 }} exit={{ x: 10 }}>
        CHAPTER <span className="text-primary">1</span>
      </motion.h1>
      {animate.mode && (
        <motion.div
          key={"chapter1"}
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className=" flex flex-col gap-3 overflow-y-auto overflow-x-hidden h-screen max-h-full mx-auto max-w-[800px]"
        >
          <motion.h2
            variants={item}
            className="text-lg font-montserrat text-primary"
          >
            TO AETHEREA
          </motion.h2>
          <motion.p className=" indent-6" variants={item}>
            There are 100 universes that are overseen by the Celestial Keepers.
            These Keepers are not bound by the rules of the gods, deities, and
            entities from each universe, they are just and fair to both good and
            evil and do not take sides even if it risks the life of every
            universe’s existence to fade. They are the ultimate source of life
            and creation of everything that exists and they possess no emotion
            toward anything.Their fair judgment made them invulnerable for
            millions of eons.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            But as Time passes by, a ripple has been created from one of the
            Keepers and thus a Malice was born among them. He led the four of
            the most powerful Keepers Famine, Conquest, Death, and War to his
            side and they became known as the Catastrophe whose only goal was to
            destroy everything the Celestial Keepers had created.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            The Celestial Keepers needed to protect the universes and to do it,
            they summon three chosen ones known as HEROES from universes that
            still possess good in them to fight Malice and catastrophes.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            In the first battle, they were able to drive away Malice and the
            Catastrophes. Every 300 eons, they attempt to seize the power of
            creation from the Celestial Keepers but they are always defeated by
            the heroes summoned. In the last battle, one of the Catastrophe, War
            was deeply wounded and died in the battle. Malice attempted to
            resurrect him but he was cursed to wander to eternity by the
            Creator.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Universe 51, on a blue planet called Tera Earth, somewhere in the
            city of Tokyo, Jugo woke up sweating after having a strange dream.
            That dream has been haunting him for eons since childhood. A bloody
            battle wherein he was wounded and died. Everything was unfamiliar
            but, in his dreams, he knew everyone and knew everything. He stood
            up and entered the bathroom. He washed up his face while looking in
            the mirror. Suddenly he sees things like a field on fire, a kid who
            was despised and killed by his own blood, and another a man who lost
            his wife to thieves.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            ???: [What’s going on with me? When will this end?..]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            He wiped his face with a towel and got back to the bed.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            As he closed his eyes, an image appeared in his dreams again telling
            him to come home. He already had enough wandering and it’s time to
            take back what he lost. And that unknown image showed him his past
            where he was abused by his blood relatives after the death of his
            parents. Anger suddenly grew on his chest and he got up as dark
            energy enveloped his body. The image manifested into an entity and
            reached for him.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            ???: [War, it is time.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Jugo smirked and replied.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Jugo: [Yes, it is.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            He reached out that hand and they both disappeared into the
            darkness.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            △▼△▼△▼△▼△▼△▼△
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Not far from Jugo’s place, in a convenient store, a girl got out
            from her shift to go home.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Manager: [Good work Alexiel! Say hi to your brother for me.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [Thank you, Manager.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [Good night!]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            As she got out of the door, she was fazed when suddenly her
            surroundings were changed. She was in an unfamiliar place. She stood
            there in awe. She thought she must be dreaming so she pinched her
            cheeks.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [Ouch! It’s not a dream?! Where the heck I am?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            She walked further and still in awe as she sees things that are only
            can be seen in movies and anime.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            ???: [Watch it kid!]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            A man with a cat ears and cat tails almost bumped into her.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [I’m so sorry!]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “--Pomes! Ribier for low prices!” a woman was selling fruits on her
            stand.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “--Daggers! Swords and bows! Affordable for new adventurers!”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “--Hey Traveler, you want to rest? We got clean rooms in here!”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            She continued to walk until she reached a place where people looks
            like her are found.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “--Are you lost kid? Look at this Merele!” a man with a big and
            bulky body approached her.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Hey Buche, don’t scare the little girl.” Merele came to approach
            her too. ”Where did you come from sweetie? What’s your name?”.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [I’m Alexiel. From Tokyo. Where am I?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [To... kyo? Where is that place?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Buche and Merele look at each other.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Then Alexiel realized she is not in Tokyo anymore but somewhere
            unknown to anyone back home.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Buche, it’s a lost soul.” Merele whispered as she pointed a mark on
            Alexiel’s neck.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Buche: [Come, we need to hide you immediately.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            The two pulled Alexiel away from the street to a building not far
            away.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [Where are we going? What’s a lost soul?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [You will know later.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [You there, don’t let anyone in my office. And also send a
            message to the branch to send Seaver here.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele told the receptionist on the front desk.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Yes, guild master.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Inside her office, Merele handed Alexiel clothes that were similar
            to what they were wearing.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [You didn’t answer my question. Merele, what’s a lost
            soul?] Alexiel insisted.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [A lost soul occurs when the Celestial Keepers summon three
            chosen ones known as heroes to fight against Malice and the four
            Catastrophe. There were only five of the lost souls recorded in the
            books of Historia. But who knows how many of them really came here.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Buche took out a book from a shelf and showed Alexiel a picture of a
            man wearing silver armor who looked young like her.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Buche: [That is Galant, the last lost soul who lives in this
            universe. Unlike the other lost souls, he joined the chosen heroes
            to fight Malice and successfully killed them, War.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Buche: [He is also the one who established this guild called the
            Heroez. Before he passed away 1000 eons ago, he prophesized that one
            day, War would come back along with a lost soul. This guild will
            serve as a home to the lost souls while we are waiting for the
            return of Malice and the four Catastrophe.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [Wait, wait, this is too much information, you guys can’t
            decide that I am a lost soul. How would you guys even know I am a
            lost soul?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [This--]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele raised Alexiel’s hair and a golden mark in the shape of a
            crescent moon on her left neck appeared.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Buche: [The mark of Galant. The very same mark that lost souls
            possess. But yours is in a golden color that indicates you are the
            one we are waiting for.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Someone knocked on the door.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            ???: [Guild master, Seaver here, you called for me?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [Come in, Seaver]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Buche opened the door to Seaver who was astounded to see a stranger
            inside the guild master's office. Then he walked a bit backward
            indicating he was afraid of something.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [This is Seaver, he is one of the direct descendants of
            Galant and he serves as a battle instructor for the new adventurers
            of the guild.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [Seaver, as one of the direct descendants, only you can tell
            if she is the one we are waiting for]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Seaver: [Guild Master, you want me to die do you?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Seaver is still shivering in fear.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [What do you mean?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Seaver: [That kid carries half of War’s spirit!]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Buche immediately armed himself and preparing to attack.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [Hey hey hey! What’s the big deal? First, I’m a lost soul,
            now I’m a reincarnate, you guys are crazy!]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel Attempted to go out but Merele stopped her.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [What?! I just wanna go home!]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [Seaver, cast a soundproof spell now!] Merele shouted.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Seaver: [“Oh, okay. Sorry. Boon! Zetsuen.] He glowed and cast a
            light the he noticed Alexiel giggled.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Seaver: [What? Never heard of a spell before?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [You literally said, soundproof and insulation, you know?
            Is that how you do spells here?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Seaver: [You know how to speak ancient language?!]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [How would I know that my native language is your magic
            spell here? I guess your hero Galant was a Japanese like me.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Seaver looked at Buche and Merele who were now convinced that
            Alexiel was indeed the one they were waiting for. She showed them
            the signs, her origin, the language that only the previous hero
            Galant can use, and the golden mark that is the same as the hero
            himself.
          </motion.p>

          <motion.p className=" indent-6" variants={item}>
            Merele: [That reminds me Seaver, how did you say she have half of
            War’s Spirit?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Seaver: [Her eyes tell everything. The eyes itself is a window to
            your inner being and soul. The color itself carries War’s color.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            The two looked at Alexiel’s eyes which were indeed the same as war’s
            spirit. A golden color that changes into red every time she reacts
            to something.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [This too much to take in.] Alexiel sat on the chair.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [That only means I can’t go home anymore. I’m just a kid
            you know?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Iro henko.” Seaver cast a spell and Alexiel’s eyes turned brownish.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Seaver: [That will settle the first problem. Before anything else,
            let’s start all over again. Hi, I am Seaver Galant, a direct
            descendant of Galant the Lost Soul, 13th generation. I am the
            present head of the Magic Ministry of the kingdom of Quintrell. I
            also serve as the battle instructor for the new adventurers in the
            northern branch.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [I am Merele Flavin, the master of the Heroez guild, and
            this is…]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Buche: [Buche Aug, the Assistant Guild master. I am in charge of the
            internal affairs of the guild.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [Alexiel Reidhart, just your average employee in a
            convenience store in Tokyo.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            She sighed. “Looks like I can’t go home anymore. is there a cheat
            skill something you can grant me? Who am I kidding? As if I can get
            strong in a blink just like your hero Galant.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Buche: [Cepheid can help you.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Buche just blurted then Seaver and Merele looked at him then they
            looked at Alexiel.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [He can’t?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Buche: [It is a gamble but I think he can. The question is can she
            endure it?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Then they looked again at Alexiel who was confused about who are
            they talking about.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [Who is Cepheid?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [Cepheid is the former strongest Hero ever known that has
            lived in the cosmos for hundreds of eons. After Galant appeared, he
            disappeared without a trace and came back after the last battle
            where War died. Since then, he never interacted with anyone. All are
            hoping to be his apprentice but it is futile.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [If he is still alive that is. It’s been thousands of eons
            since he appeared.” Seaver is playing with few magic and fire]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Buche: [He won’t die that easily. He is a Keeper after all. He is an
            immortal.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [Where to find him?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel looked determined.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [Lemme kick that malice’s butt so I can go home. He is the
            reason for all this right?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Merele: [The Mountains of the Orient Keepers. Find the Youngest
            Keeper named Luna Crescencia, she can lead you to him.]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel: [And where is that?]
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Seaver: [The universe of the Bakunawa..]
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
