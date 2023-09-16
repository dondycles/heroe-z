"use client";
import { useAnimateStore } from "@/store";
import { container, item } from "@/transitions";
import { Divider } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
export default function Chapter1() {
  const animate = useAnimateStore();
  return (
    <AnimatePresence>
      <motion.h1
        initial={{ x: 10 }}
        animate={{ x: 0 }}
        exit={{ x: 10 }}
        className="mb-3"
      >
        CHAPTER <span className="text-primary">1</span>
      </motion.h1>
      {animate.mode && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className=" flex flex-col gap-3 overflow-y-auto overflow-x-hidden h-screen max-h-full mx-auto max-w-[800px]"
        >
          <motion.h2
            variants={item}
            className="font-montserrat text-primary text-lg"
          >
            TO AETHEREA
          </motion.h2>
          <motion.p className=" indent-6" variants={item}>
            “Oh, Professor Entrope. Are you here to visit her?” a nurse got out
            of the room and saw a man with flowers approaching the room where in
            a young woman covered with bandages was lying unconscious.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Good morning miss, anything happened while I was gone?”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “None at all sir. She is still the same.” The nurse smiled and left.
            The man entered the room and put the flowers on the vase. He opened
            the curtains to see the overview of the city.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “It’s day 37, Alex. When will you wake up dearest.” He sat down on
            the sofa near the bed on the unconscious woman.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Suddenly the ground was rumbling. He got up and run to Alex who’s
            surrounding a strange pentagram appeared and is absorbing her in. To
            his surprise, the same pentagram appeared on his feet too. He
            embraced Alex and they both disappeared into the light.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Poor girl. She and a police officer are still both unconscious from
            that attack.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Did that teacher really tried to kill that girl?”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “According to the authorities, he was a serial killer who has been
            killing young female students for the past years. Thanks to that
            police woman, they managed to catch the criminal.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “I hope he dies now in prison. He deserves it.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Right.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Stop that you two.” An older nurse stopped the two gossiping nurse.
            “It’s rude to talk like that to a person who is unconscious and
            fighting for her life. She and the other woman are heroes. They are
            the reason the serial killer was caught.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Yes Ma’am. We are very sorry.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Look! What is that?"
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            A strange light appeared under the bed of the unconscious girl on
            the ICU and she disappeared which caused the nurses to panic.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “How’s the rat?” an officer came in for change of guards.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “He got into a fight this afternoon. As usual he got bruises and
            wound.” The other officer replied.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Well, you can’t blame those runts. Murder is a grave crime but
            serial killing is another. That is pure evil.” He sat beside the
            door.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “We can’t blame him though; society made him that way if you asked
            me. We are the ones creating those psychos.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Not all people have that kind of thinking you know.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Then the ground was rumbling and few cells was covered with light
            and those prisoners including the one they are heavily guarding
            disappeared mysteriously.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            An old man was standing on top of a hill having an overview of the
            whole city saw the strange lights smiled.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “They opened the door to Aetherea. What are you up again this time,
            Sphrium of the empyrean domain.” He muttered.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Old man Dao Po, here’s the relic you asked.” A young boy handed him
            a dagger with strange curving in it.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Stand back. I will join those summons in my world. They might end
            up in tragedy if they were really called by that bastard dragon.
            Time to settle our score Sphrium!”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Dao Po raised the dagger and a pentagram appeared in his feet and he
            disappeared into the burst of light.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            In the mountains somewhere in the land of Aetherea, a dragon god is
            seen as he is casting spell on a pentagram and was the responsible
            for the massive light appearing on earth. “Stop this madness
            Sphrium!” Another dragon burst into the doors of the pavilion
            wherein the great summoning was occurring.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “You really think you can stop me, Kyrijah. I am the sole ruler of
            Aetherea and no one can stop me not even you or your weak sister
            Van. You are destined to die on this moment. Ha ha ha!”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Kyrijah used all her powers to stop the summoning but it was too
            late. A few people started appearing from the summoning pentagram.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Then you leave me no choice!” she took out an orb. “May the
            forefathers forgive me for doing this.” She attempted to break the
            orb but an old man appeared who suddenly charged at Sphrium.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “You! How did you survive! Dao Po?” Sphrium was surprised and
            furious when he recognized the old man from the summons. “Old hermit
            Dao Po?!” even Kyrijah was surprised.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “No need to break that relic, your majesty of nether. This dagger
            would be enough to stop him from summoning the earthlings.” Old man
            Dao Po stabbed the circle with the dagger and a burst of energy
            exploded and the summoning stopped. They all turned their attention
            to the unconscious people on the circle and the ground started to
            rumble and the summoning circle starts to break and about to
            explode.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Belaviti, save those children!” Kyrijah commanded a group of imps
            to save the summons but Sphrium managed to grab the golden haired
            one. He also attempted to grab the ragged man but old man Dao Po was
            fast enough to take him. Instead, Sphrium grabbed the muscular one
            who woke up and also grabbed Kyrijah and they all disappeared from
            that place.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Your Majesty!”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “You there, Belaviti right?”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Master?”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Get these children to safety.” Dao Po commanded the imps who opened
            a portal and they all escaped before the pavilion collapsed.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            The portal Belaviti the imp summoned was connected to the garden of
            the Prithvi Goddess, Vantrouyah.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Belaviti!” she run towards the imp and was surprised to see a
            familiar face and tears began to fall from her eyes. “Teacher!” she
            ran to embrace the old man who smiled and hugged her back.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Long time no see, little one.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Teacher, how did you survive?”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Long story. Before that, take these children to safety. They were
            dragged here by that bastard Sphrium and even managed to take your
            sister.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Trents, dryads, attend to these children and treat their wounds.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Yes, Your Majesty.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Old man Dao Po noticed the man Sphrium attempted to take in the
            mountain pavilion and he appraised him.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “I will take that child with me.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Voices woke up the man from slumber. He still feels the pain
            inflicted to him by the other criminals in the correctional
            facility. He opened his eyes and found himself in a bright room that
            overlooks a city from a balcony.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Old man Dao Po and Vantrouyah are in the balcony talking and when
            they saw him got up, they came near him.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Good morning, young one.” Vantrouyah greeted the confused man.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Who are you? What place is this?”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “I am Vantrouyah, the God of middle Aetherea. You are in the domain
            of Prithvi, young one. Can you tell us your name?”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Hao Yua, a Hero…”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “You are a hero from earth? I am Dao Po. A temple keeper in earth.”
            old man Dao Po asked.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Technically, I am a HERO Academy professor. I was wronged when I
            tried to saved one of my students. I wasn’t able to prove my
            innocence in court so I was…” bitterness can be noticed through his
            voice.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “I see. So, this was the serial killer incident. They have been
            telling they caught the culprit turns out was not instead framed
            someone else to justify their vanity.” Old man Dao Po sat on a sofa
            across the bed.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “You believe me? That I am innocent?”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Yes. I can read through someone’s memory you know. I have this
            skill they call Appraisals and I can tell, you really had a hard
            life on that facility.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Then you have seen my…”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Old man Dao Po just nodded. Even Vantrouyah.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Do not worry young one, we are not prejudiced on you power. But we
            know the danger it can bring to anyone near you. Mimicry isn’t your
            average power that can be seen anywhere here or in earth.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “So that explains why that bastard wanted you. Luckily, I got you
            first.” Old man Dao Po laughed. “But Sphrium managed to grab two
            from the summons. We need to find that golden haired girl. She seems
            to carry forbidden power just like you, Hao Yua.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Golden haired? It must be Alex, my adopted sister.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “You said there were two, Teacher? Who was the other one?”
            Vantrouyah wondered.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “The serial killer.” Old man Dao Po looked at Hao Yua who suddenly
            released dark aura due to his anger. “Looks like someone wanted to
            settle score with the muscle man.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Where can they be found?” he is still shaking.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Rest first, Hao Yua. We will talk when you recover.” Old man Dao Po
            patted his shoulder and left the room with Vantrouyah. Hao Yua just
            looked at the door and he laid down to sleep.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            In a secluded dungeon in the empyrean domain, a chained woman with
            golden horns and covered with blood can be seen and a shining man
            with the horns of a dragon entered the cell together with a
            golden-haired woman who lost the colors of its eyes.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “How the mighty has fallen. If only you surrendered to me, you won’t
            become like this, Kyrijah, God of the Netherworld.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Not in a million years, Sphrium. You and the domain of empyrean
            will pay for all your sins.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “You know, I’m still benevolent, no? Why won’t you tell me where is
            that useless teacher of yours? Maybe I can spare your domain and
            your citizens. Or maybe yet, tell him to surrender that guy with the
            glasses to me.” “You are dreaming. Having me captured doesn’t mean
            you already won.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Well. We will see about that. Come human, we will wreak havoc in
            that place. I am sure she is hiding in that wretched place again.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “As you wish, your majesty.” The golden-haired human replied and
            followed the Dragon God who left the dungeon.
          </motion.p>
          <Divider />
          <motion.h2
            variants={item}
            className="font-montserrat text-primary text-lg"
          >
            HAO YUA
          </motion.h2>
          <motion.p className=" indent-6" variants={item}>
            Along the streets of Shibuya, young man Hao Yua excitedly puts on
            his ID as he enters the gates of one of the prestigious universities
            in the country, the Aoyama University where he was hired as a
            Psychology Teacher for the College Department.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Excuse me, can you point me the way to the Internal Affairs
            Department?” he asked the guard.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Are you a new professor?” asked the guard.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “I was hired a week ago in Internal Affairs at Foreign Service job
            hunt. Hao Yua by the way, a Psychology Teacher for the College
            Department.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “You were hired by the Internal Affairs?” the guard looked at him up
            and down and his eyebrows crossed. “Are you sure you were hired by
            the Internal Affairs?”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Yes? I’m sorry I can’t keep up Mr. Guard but would you please tell
            me where is the building of Internal Affairs? My appointment is at
            10:00, I need to be there.” Hao Yua was confused with the tone and
            way of speaking of the security guard.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Alright. Follow me. If you were hired by those guys, means you are
            a super human.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Hao Yua was surprised to hear something that is supposed to be a
            secret. He followed him as they walked to another gate where in an
            old man was sweeping who greeted the security guard.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “A new teacher?” the old janitor approached them.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Yes. Looks like they finally found a good one” the security guard
            replied. “Come Hao Yua.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            They entered the small office and approached a woman on a desk.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Welcome to Internal Affairs. My name is Eloise, the receptionist.
            What can I do for you sir?” she asked and bowed to Hao Yua who bowed
            back and replied.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “I am Hao Yua, the new Teacher for Psychology Department.” He shakes
            hand with Eloise. “I was hired at the Foreign Service Job Hunt…- “
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Tell boss we got company.” The security disrupted Hao Yua who was
            still confused why is he acting like that.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Excuse me but what is happening? I’m really confused.” Hao Yua
            looked at the guard.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “You have been like that since while ago and I was just asking where
            is the Internal Affairs.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Hao Yua, follow me, then you will know what does this mean. This
            way.” Eloise pointed a door.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Good luck young man. Knock those kids hard if you need to. Don’t
            let them be cocky.” the guard laughed and he left the room.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Hao Yua and Eloise entered a room which was an elevator in disguise.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Don’t feel nervous. I am a super human too and was still given an
            opportunity to work peacefully away from the prying eyes and
            prejudices of non-super humans.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Forgive me for asking this, where am I exactly? I applied as a
            teacher and now the guard said, he knows I am a superhuman and…” he
            was interrupted when the door opened and a hangar was revealed and
            left him speechless. There he realized who really hired him.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Welcome to Humane Entity Reformation Order Federation otherwise
            known as the HERO Federation. And I am Eloise of the HERO Affairs
            Department who are responsible guiding the new instructors and
            professor in the Academy. Please follow me and I will guide you to
            the HERO Affairs who will assign you to your class and also to meet
            you colleagues and faculty in the academy."
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “I… ah… I’m…”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “I know it’s a lot to take in, you will get used to it soon.” Eloise
            whispered to him and guided him to the Administration Building.
            “Come on, they are excited to meet you. It’s been a while since we
            had a new teacher in the academy.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            They came out of the hangar and a vast field full of recruits and
            other super humans are seen everywhere. Most of these are children
            who were discovered on the streets and some are recruits from the
            Federal Recruitment which is held once a year to admit all
            superhumans worthy to become a HERO and save the non-super humans
            from the stray ones who uses their power to purge and oppressed the
            weaker ones.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “You will be teaching them in the future. For now, let’s meet the
            principal so you can start your job right away and mentor those kids
            to right path.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            HERO Affairs Department is the one responsible for delegating jobs
            and duties to all of its jurisdictions and employees super human or
            non-super human as long as they are not a threat to the cadets and
            every living entity within the academy.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Eloise here, Principal Bennet.” She knocked on the door of the
            conference room.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Come in Eloise.” A Young voice answered back.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Eloise opened the doors and there stood a young boy on the windows
            who smiled when he saw them.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “I’ll leave him to your care sir. Good day.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Hao Yua was still confused and when attempted to ask why a kid like
            him is a principal….
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “If you are wondering why a kid me is the principal, you should
            consider first me being a super human who accumulated too much time
            cultivating and ended looking like this.” He walked to his chair but
            he had a hard time going up and Hao Yua almost laughed but he
            stopped.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “I know I’m small. But it would be great If I could use some help."
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Well then please pardon me sir.” He carried the principal and
            settled him on the chair and he also sat on the chair across the
            table.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Now, where were we? Ah, you being the new Psychology Teacher, yes?”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Yes sir.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Before you start officially, there are things you need to consider
            in this Academy. Here in the HERO Federation Academy, all are
            welcome, super human or non-Super human, have equal rights to be
            educated and treated without disdain and threat to their lives. You
            as a teacher must know how to deal with your students properly and
            guide them to right path and righteousness.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Principal Bennet, there is something bothers me until now since
            when I was hired in that job hunt. How did they know I am a super
            human?”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “My personnels can easily distinguish the supers from non-supers.
            Simple, they are superhumans that have the ability to detect ones
            like us who hid among the normal ones. You see, this academy existed
            for hundreds of years without the knowledge of the outside world. It
            is our duty to protect and help anyone who need our help, supers or
            not and punish the one who abuse their powers to oppress the weaker
            ones. If a super human is involved in a certain crime and situation,
            it is our duty to handle them in peaceful manner we can.” Hao Yua is
            amazed of what he heard.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “All this time, I thought my family are the only ones who are not
            normal. If only we knew of this place, then my parents were…” tears
            begin to fall from his eyes.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            The little principal got off from his chair and handed a
            handkerchief.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Sorry we are late. By the way, you were already oriented with the
            compensations and benefits by the Affairs?”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Yes sir. They included my free lodging, a monthly salary and
            including few allowances.” He wiped his tears as he tried to calm
            down.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Good. The we will also admit your siblings to the academy once they
            come of age. Do not worry of the fees, we give full scholarships to
            the young ones so you don’t have to worry about their education.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Hao Yua’s face brightened upon hearing the good news.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “This is a lot of help Principal. Thank you very much. I will do my
            best to become the best and most trusted teacher in the academy. I
            will pay you in the future” he bowed down a lot.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “No need to do that! Just guide the cadets and student in the best
            way you can then we are good.” He rung the phone and an employee
            came in. “Guide Hao Yua here to the faculty.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Yes, Principal Bennet. Right this way, professor Hao Yua.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Thank you.”
          </motion.p>

          <motion.p className=" indent-6" variants={item}>
            Years later,
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Big brother Yua!” a golden-haired young woman came running towards
            Hao Yua. “I knew it! It was you!”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Officer Alexiel Vermonth? What are you doing here?” his eyebrows
            raised.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “You are way too formal, big brother. I was admitted as a hero
            cadet. I didn’t know you are a professor here!”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “I told you, the person you were looking for is here.” A man in
            white robes with feminine make up popped up. “Hello Professor. You
            look good in those suits.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Seaver Entrope.” Hao Yua’s facial expression turned disgusted when
            he saw the person behind Alexiel. “You are still alive sly fox?”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Unlucky for you, yes, I am, Professor. You think that super human
            can kill a skilled reaper like me? You must know, foxes like us have
            nine lives so it’s impossible for me to die in the hands of those
            runts.” Seaver laughed and winked at Alexiel.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Yeah right.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “You guys are still at war? I thought you reconciled already since
            you are colleagues here in the academy? It’s been 10 years already.”
            Alexiel is trying to contain her laughter.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Sister Alex!” a little girl suddenly appeared from out of nowhere
            and hugged Alexiel.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “You are choking her, Ezia. Remember sister Alex is not a monster
            like you!” a little boy is approaching them.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “But I missed her a lot. She hasn’t visited us since she graduated
            from college.” Ezia is still clinging to Alexiel.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Ezio, Ezia, how about this. I will cook tonight’s dinner, would you
            mind to join us, Alex?” Hao Yua offered. “And you, fox with nine
            lives, you are excluded.” Hao Yua pointing to Seaver.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Alex, Hao Yua’s so mean.” Seaver wipes his eyes pretending to cry.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Don’t be like that Big Brother, sister Seaver, you will come with
            us too.” The twins clung to Seaver who stick his tongue out at Hao
            Yua.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Serves you right.” Seaver laughed while pulling away the twins.
            “Let’s go dearests. I got chocolates on my table.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Yay! Sister Seaver is the best.”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “You guys still never changed. You always pick a fight when you have
            the chance.” Alexiel smiled.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Who knew my best friend turns into that. By the way, how was the
            force, why did you resign?”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Police force is… good… yeah good.” Alexiel averting her eyes which
            made Hao Yua suspicious.
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            “Alexiel Vermonth! You always do things half-heartedly. If you won’t
            stop that, things would go out of hands in the future that might
            cost your life. Kiddo, I took you out of that hell hole in order for
            you to take full control of your life while you are doing things
            again one way around or the other! You never learn at all!”
          </motion.p>
          <motion.p className=" indent-6" variants={item}>
            Alexiel covered her ears as Hao Yua continues to nag her. The other
            teachers are all leaving the office while some laugh on the scene.
            They knew that when Hao Yua starts to nag, he won’t stop until the
            other person faints. Some just ignore it as the words enters the
            right ear and exits on the left ear.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
