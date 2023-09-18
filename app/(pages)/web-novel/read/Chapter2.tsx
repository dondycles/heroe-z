"use client";

import { Divider } from "@nextui-org/react";
import { useAnimateStore } from "@/store";
import { container, item } from "@/transitions";
import { AnimatePresence, motion } from "framer-motion";

export default function Chapter2() {
  const animate = useAnimateStore();
  return (
    <AnimatePresence>
      <motion.h1 initial={{ x: 10 }} animate={{ x: 0 }} exit={{ x: 10 }}>
        CHAPTER <span className="text-primary">2</span>
      </motion.h1>
      {animate.mode && (
        <motion.div
          variants={container}
          key={"chapter2"}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className="flex flex-col h-screen max-h-full gap-3 overflow-x-hidden overflow-y-auto "
        >
          <motion.h2
            variants={item}
            className="text-lg font-montserrat text-primary"
          >
            ALEXIEL REIDHART
          </motion.h2>
          <motion.p variants={item} className="indent-6">
            Alexiel Reidhart grew up in an orphanage for the super humans. She
            used to be a thief that pickpockets in the high society. That time,
            her victim was going to be Seaver but Hao Yua, a new school
            professor caught her in the act. They learned that Alexiel was just
            trying to survive since she had nowhere to go and the orphanage is
            not taking care of them properly instead encouraging them to do bad
            things
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Hao Yua took in Alexiel into his family who was happy to have family
            of her own. Seaver often come and stop by to teach Alexiel of things
            about being a superhuman and also to play with the two-month-old
            twin siblings of Hao Yua. When Alexiel turned fourteen, she passed
            the Police Academy entrance examination and became a cadet at the
            age of 18. She also became one of the youngest police officers in
            the country.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            As Hao Yua became busy at work due to the new recruits at the
            academy, Alexiel also became active at service that she moved out to
            live in the barracks of the officers. Time to time Seaver and the
            twins are the only ones who visits her there.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Seaver already knew that Alexiel is a superhuman but he didn’t have
            an idea what powers does she have until he saw her using fire
            enhancement and manifested blue flames. Fire enhancement power is
            common but to manifest blue flames is another. That’s when he talked
            to the principal of the HERO Federation about Alexiel’s ability.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            In superhuman history, there are 5 powers that are actually
            dangerous to non-super humans if not properly supervised by the
            experts, the blue flames manifestation, the void, the beast tamers,
            the metamorphosis and the mimicry.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Alexiel was called to academy in guise of Federation recruitment for
            new cadets active in service. She wanted to surprise Hao Yua but she
            was the one surprised when Seaver told her that he was also a
            professor in the HERO Academy.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Not fair you scolded me yet you kept from me that you were a
            professor here. I should have applied to that recruitment months
            ago.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “It was not yet time for you go into a place like this.” Hao Yua
            handed her a can of coffee and they both sat down on the bench.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “It was big sis Seaver who recruited me here. I have hard time
            controlling my powers on the field and I almost killed the criminal
            I arrested on that day. If big sis Seaver didn’t appear on that day,
            I’m still struggling till now.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Well, I supposed it’s part of my fault I didn’t notice that ability
            of yours in the first place.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Alexiel manifested a red flame on her palm but unable to fire it
            out.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “This never changed. I can manifest but I can’t fire it out like the
            other do” she sighed as they were watching the other cadets uses
            elements and manipulates them easily.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Did you know I am also a super human?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Eh? You are? I never saw you excel any power throughout the years.
            Oh, I know, your power must be MOMMY power!” Hao Yua hit her in the
            head.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Ouchhh! See? You always do that?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Can’t you be serious for once?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Sorry, I’m not just used to you being so serious…?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I guess you always see me calm and always look out for our family.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Like a mom.” She grinned.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Suddenly fire also gathered at the palms of Hao Yua and it is
            exactly the same as hers.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “You can’t be serious. How on world… you have the same power as me?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “That’s the problem.” He sighed and the fire began to change color.
            It turned into blue and white that surprised Alexiel and her eyes
            grew wide.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I didn’t know you have fire power too? And you can turn them into
            three colors? I wish I could do that too.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Then go and practice if you wanted to do it. You are in the academy
            after all. It’s your duty. There are lots of academy professors here
            who can help you do that.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “You bet I will.” Then the bell rang. Oopsy, lunch is over. I need
            to go back to the class now. See you around big brother.” And
            Alexiel ran back to the academic building.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Yeah, good luck.” He smiled then he got up. Suddenly he felt a head
            ache and slowly sat down back on the bench.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I overused it again. It’s not easy after all to use that power.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “When do you plan to tell her the truth, B-i-g b-r-o-t-h-e-r?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Sly fox, you never get rid that peeping hobby of yours?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Seaver sat down beside him who looked at the lake where there are
            few cadets practicing and few are watching too.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “It’s not yet time for her to know her real identity. It might
            shatter her if she knows that truth.” And he drinks his coffee.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Seaver one of these days, I might encounter that guy again. And
            that time, I will get my revenge.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “That’s dangerous you know. Think about the twins. You won’t see
            them again if that goes wrong.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “That’s where Alexiel comes in. I trust she can do the rest.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Yua…”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Carabella”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Here sir.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Xin Mo”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Here.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Miyazaki”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Present”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Vermonth.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Over here”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “That’s all. Now class, we are going to the practice field and have
            you power tested to classify you up on your categories. Please
            cooperate on this one.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Yes sir!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            The class excitedly marched off to the practice field where in there
            were professors and few medics on standby in case accidents occurs
            while on power classification session.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “That’s awful.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Poor girl, she is the 9th victim this quarter. Even Jack the ripper
            can’t be compared to this monster.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Can’t the reapers catch him?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “They said even the reapers are having a hard time catching him.
            They also posted him all over the country as a wanted criminal, dead
            or alive.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Few of the cadets are reading their phones about a serial killer on
            the loose killing innocent young women who goes late in the middle
            of the night. Alexiel was once a part of the team that pursues this
            maniac. When the Federation took the case, the police force had
            given up but not her. She still finds clues leading to the serial
            killer. When she mentions the case to Seaver and how she still
            searches for that killer who was possibly the same person who killed
            her family in the past, Seaver offered her a cadet training in the
            HERO Academy. He also later revealed that Hao Yua and him are
            teachers in the academy. But Seaver asked Alexiel not to reveal to
            Hao Yua the she is pursuing the serial killer. They both know how
            notorious Hao Yua at nagging and only cares for his family.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “You okay, Vermonth?” her classmate patted her from behind.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Yeah. Sorry. I just lost focus.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “You are next, Vermonth!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Yes, Sir!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Show what you got. Don’t hold back!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Right away sir.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Alexiel assumed an instance and manifested red flames that wowed the
            other students present in the field. She exerted more and the flames
            are slowly turning into another color but a shadow interfered and
            the flames suddenly disappeared.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “What happened?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I don’t know.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            The other cadets didn’t notice it but Alexiel knew it right away who
            did it and looked straight in the eye of the person who did it. The
            young kid on the bench who waved back at her and grinned.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Another Thermal Energy classification. You will be on the afternoon
            classes with professor Gainza.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Thank you, sir.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “You interfered again, principal.” Seaver was behind the kid on the
            bench who was startled.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “That is foul play you know?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Ehem. I don’t have the slightest idea what you are talking about,
            professor Entrope.” While his eyes are averting.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “You can lie to all the professors here but remember, no one has
            ever escaped the eyes of a reaper.” He whispered.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I… ahh… really don’t know what are you referring to.” He grinned to
            Seaver.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Oh, I should say thanks. If she showed her blue flames, one way or
            another, it will create chaos in the entire academy. By the way, how
            did you know about her abilities?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I didn’t become a principal because of my cultivation powers. I was
            appointed for another reason. My knowledge is vast and broader than
            anyone else to understand. Surely, you are already aware why until
            now, no one has ever gone against me in terms of power or anything
            else.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “This old man is a monster.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “You were saying?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Nothing.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Principal Bennet! Please don’t hide anymore! The council is waiting
            for almost two hours, please don’t make my job difficult, I beg of
            you!” a young woman was running towards them. “Principal? Again?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Professor Entrope, catch that old man!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “That reminds me, I have work to do.” but it was too late. He
            disappeared into thin air. “Sorry.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Aish! That old man always escaping from his duties.” she brought
            out a phone. “Reapers, roll out. Catch the old man pretending to be
            a kid! I will give you incentives if you manage him. Take him to
            council immediately!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Hahaha. Good luck hunting him down. He wasn’t called the Houdini
            for no reason.” Seaver laughed as the principal getting hunted by
            his own reapers.
          </motion.p>
          <Divider />
          //!!Part 2
          <motion.h2
            variants={item}
            className="text-lg font-montserrat text-primary"
          >
            DAILY REAPER LIFE
          </motion.h2>
          <motion.p variants={item} className="indent-6">
            The clock alarmed at 6:00 in the morning. Seaver turned off the
            clock and got up from his bed. He put water on his water heater
            while preparing his bath. After taking a bath, he put on few
            foundations on his face and blush on his cheeks. A light color
            lipstick finished the job and he put on his uniform and white rob.
            Grab few books and put on his glasses and headed to the academy.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Good morning professor!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Good morning kids, how’s your day?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Professor, good thing you’re here now, please help us.” A young boy
            came running towards him.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “What’s wrong?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Principal Bennet just escaped from the morning council meeting and
            the board is mad. Please, you are the only one we ask help at this
            hour.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Alright, don’t cry now. I know just where to get him.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            And one hour later, Seaver appears in the door of the board while
            carrying a big bag behind him.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            A muffled voice can be heard inside the bag.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Did you get him?” the secretary opened the door.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Of course, I’m your beat reaper after all. Here you go.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            He handed the heavy bag to the secretary where it revealed the
            young-looking principal bennet tied on both hands and feet while
            mouth is covered with magic laced talisman.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Traitor! Next you will never find me!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Oh! ho ho ho! You are welcome to hide anywhere you want principal.
            Laters!” he made a flying kiss and laughing while walking back to
            his laboratory.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “That’s sly fox.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “You never cease to amaze us every morning, Principal. You always
            have the nerve to escape from your duties. As the principal, you
            must be a role model to your cadets!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            And the nagging of the board started as always.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            10:00 hours, Armaments class, HERO Academy.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “This is a 9mm Winchester Magnum, which is also known as the 9×29mm,
            is a centerfire handgun cartridge developed by Winchester in the
            late 1970s. The cartridge was developed to duplicate the performance
            of the .357 S&W Magnum in an auto-pistol cartridge.” Seaver held out
            a gun from a box and showed them how it should be handled.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “That gun cases can also be trimmed and resized for reloading 9×25mm
            Mauser, right professor?” a cadet raised his hand.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Good impression indeed. You research on it before coming to class.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “My father is an arms dealer so he needed me to memorize all of it.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Ok, here’s another one. Blaser R8 is a
            German straight-pull rifle known for its radially locking bolt
            system, modularity and its barrel mounted scope mount manufactured
            by Blaser. The rifle also features a manual cocking system and a
            direct trigger. This riffle has an uncommon detachable box
            magazine/trigger unit. When detached it renders the rifle inoperable
            and safe. To avoid accidents with set triggers, Blaser offers the R8
            only with a direct trigger. The compact detachable box
            magazine/trigger unit contributes to balancing the rifle, as the
            Blaser straight pull action is about 50 to 60 mm shorter than
            conventional bolt actions.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            The students are all amazed with the models that are place on the
            tables.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Wow, that one is a Arctic Warfare (L96A1)! I can’t believe it, they
            have those relics in our academy.” Another student saw the other box
            beside Seaver.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Is that popular?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Back in days that’s one popular riffle. Its nickname is Accuracy
            International Arctic Warfare rifle. Those are generally fitted with
            a Schmidt & Bender Police & Military II (PM II) telescopic
            sight with fixed or variable magnification. Variable telescopic
            sights can be used if the operator wants more flexibility to shoot
            at varying ranges, or when a wide field of view is required.
            Accuracy International actively promotes fitting the German-made
            Schmidt & Bender PM II product line as sighting components on their
            rifles, which is rare for a rifle manufacturer.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Seaver is pleased on his students learning on their own and has
            large interest or armaments. Few are knowledgeable but they are able
            to share their knowledge to their classmates.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Professor, which of these armaments are to your liking?” one
            student wondered.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Yeah, we also like to know professor.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “If you asked me, I prefer a saber over armaments.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “By any chance, professor, are you a fencer.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Well, I used to be…”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Listen to this guys, Professor Entrope was a fencing genius who won
            15 world fencing titles including the Cadet World Championship and
            Veteran World Championship. He became undefeated at the age of 19
            and now a full pledge FIE board of director.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Do you really need to mention that my dear student?” Seaver
            slightly smiled.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “That’s why Professor is hired. He is the best.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Teach us fencing too professor.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Yeah, why don’t we ask the academy to establish a fencing club and
            have professor Entrope to become the teacher.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “A good idea!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            And another task on Seaver’s table after the Academy approved the
            Fencing Club and him as the adviser and teacher.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Argh I’m so tired… help me Big Brother Yua!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “That serves you right, sly fox. You wanted attention right, now
            you’re getting it.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Meanie.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “By the way, how is Alexiel doing in her class?” “AH, she will be
            just fine, you worry too much mommy Yua.” A notepad flew into
            Seaver’s face. Ooouuccchhh!!!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “The next time I hear that, a table will be flying next.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “This old man can’t even take a simple joke. Why are you so serious?
            I was just kidding.” And he lied down on the sofa.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Don’t lie down, this is an office, not your bedroom.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Dun wanna. I’m exhausted.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Suit yourself.” And a pillow came flying again straight to Seaver’s
            face. “Why do you need to throw everything on my face.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I just don’t like to see your face.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “You are really mean. I’ll tell Alexiel you are always being mean to
            me.” He pretended to wipe tears on his eyes.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Oh yeah, before I forgot, yesterday was the power classification
            session of the new cadets. And your Lil sis almost blew up. Good
            thing principal saw it before another catastrophe happened.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Define blow up?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “She used her fire energy, and was ready to take to another level
            when the colors almost changed into blue.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Hao Yua was stunned and stopped writing.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Are you sure, she tried to manifest blue flame?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I know what it means if that fire became blue. She will be taken
            into custody as per law. Blue flames are forbidden power that can
            cause a great disaster. You should talk to her to not show that kind
            of flame to anyone or anybody.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Yeah, I should. That kid always gives me head ache since the
            beginning. She always does things on her way.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Before going home,
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Professor Entrope, you wanna join us on a small drink near the
            bar?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Yeah. Professor Hao Yua is coming too.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Oh sure.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            In the bar, the teachers were chattering about the new cadets and
            few boasted their students being a genius and few hard headed ones.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “How about you professor Entrope, we heard you became a fencing
            instructor when your students learned you were the undefeated
            fencing champion for 10 years and now a board member of FIE?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Another headache I guess, but what can we do if your students are
            so passionate to learn things. As a teacher, I can’t possibly
            deprive them the education they deserve.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “As expected of Professor Entrope, you always do things perfectly.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I heard about the policewoman who was once the youngest in the
            force who was personally recruited by principal.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “That officer was an acquaintance of Professor Hao?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “To be honest, officer Vermonth was Hao Yua’s adopted sister.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “We didn’t know. But she became a celebrity on the 1st day.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Yeah, you should have seen Professor Hao nagging on her on the
            affairs office.” The group just laughed.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “But it’s nice to have someone nag at you sometimes. You maybe able
            to know what you did wrong and able to change it in the future.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I’m jealous, I wish my brother nags at me too.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “You got your mom nagging at you all the time.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Nagging at me to get married. And I don’t want to!” the teachers
            laughed.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            And the peaceful evening goes on.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Night time,
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I’m so tired. My face got so many bruises. That glasses geek, he
            really doesn’t care about my pretty face at all. Throwing things on
            my face.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Then a shadow knocked on his window. It was a reaper.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “It’s time, Saber. We got work to do.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Can’t I get excuse tonight, Shadow? I need a beauty sleep.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “But don’t blame me when I report you to the board…”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Ok, I’ll just change my clothes. I look sloppy on this one.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            He opened a wardrobe and brought out a saber and a suit in dark
            shade of magenta and pink. “Don’t ask. I love this.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “As long as it doesn’t hinder our job, you may wear any…uh…suit.”
            And shadow flew away in darkness.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “When will this routine stop. I’m getting tired of it.” Seaver
            Sighed.
          </motion.p>
          //!!Part 3
          <Divider />
          <motion.h2
            variants={item}
            className="text-lg font-montserrat text-primary"
          >
            FATEFUL DAY
          </motion.h2>
          <motion.p variants={item} className="indent-6">
            “Please! NO!” a hard blow on her head caused the young girl to die
            immediately. Blood splattered everywhere.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            The man is hungering for more blood after killing the girl and he
            smirked.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I need more blood.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            He walked away from the scene to find another victim.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Yeong, be careful on going home.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Thanks for the treat, guys.” Yeong walked home since her house is
            just 2 blocks away from the academy. Her phone rang and she picked
            it up.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Yeong, you there?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Yeah, what’s up, Shinyan?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “You home now?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Not yet but almost home, why? Something matter?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Not much, I just wanted to come over. Your mom is not home, right?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “You are always aware of my mom.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Who knows it will be my last days on earth if she has her hands on
            my neck. I am stealing her girl after all.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Suddenly someone grabbed her and pulled her into the darkness. and
            she dropped her phone
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “He…l…p m…e.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Hello? Yeong? Hello? What’s happening?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            That man stepped on her phone and stroked her with “Fear” and she
            can’t move anymore.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Daze.” And now her sight is being robbed of her and almost feel
            like death. She just felt stabs of knife all over her body.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            She just heard a burst and crumble beside her dying body. As she was
            trying to open her eyes, she caught a glimpse of a man and a woman
            were fighting her perpetrator and she felt blood splattering on her
            face guessing the two are injured too. Then there were wails of
            sirens and few arguing people. And Yeong passed out due to blood
            loss.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “How is she, doctor?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Multiple stab wounds, her face almost got disfigured after the
            attack. If she’s lucky, she will survive the night.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I see, thank you. Doctor.” Yeong’s mother got near her bed and
            cried. Yeong can sense everything happening to her and an
            unbelievable thing happened. She was able to separate her soul from
            her body and able to roam around the place.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “So, this is the Illusionary power they were talking about. I hope I
            can still go back to my body after this. Ah right, my saviors, where
            are they?” she walked pass the wall and look for patients who were
            stabbed that night and found someone very familiar.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            It was Alexiel who was laid on the ICU bed and unconscious just like
            her. Few people like Professor Entrope and the principal are there
            talking.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I’m sure he had his reasons. But it doesn’t make him the serial
            killer, principal.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I am already aware, professor Entrope. We can’t deny that his
            prints and DNA are all over the previous victim found on that night
            before attacking another victim that happens to be a cadet in our
            academy.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Hao Yua… what will become of the twins now.”
          </motion.p>
          <motion.div variants={item} className="indent-6">
            “It’s your duty to take care of them. One day, they will understand
            everything. Their brother sacrificed himself to save these young
            girls and more victims in the future.”
          </motion.div>
          <motion.p variants={item} className="indent-6">
            “Poor Yua. He doesn’t deserve this. He was just trying to protect
            his family.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Yeong returned to her body.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Although she is unconscious, she is aware of her surroundings. She
            wasn’t the only one who knew that the professor was innocent. That
            he was only framed for the crime he had not done.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            A month passed by, Yeong can’t still wake up from coma sate but she
            often uses her ability to roam around the hospital and most of the
            time hang out to the room of Alexiel.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Somewhere in another world
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Get them!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Don’t let them escape!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “You will pay for your tyranny, Empyreans!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            A war broke out in the city of Undara, on the domain of Prithvi. An
            army of Empyrean attacked the last known summoning hall known as the
            sacred Evoking Hall of Athronia.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Elder, what shall we do? The Empyreans have already broken through
            the last wall of defense.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Report, the soldiers are now heading back to the great hall to
            protect the elders and the guardian.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I knew that this day would come. Vajrah, come forth.” A man covered
            with flying beasts appeared.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Orders, Elder Baleen?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Take Melsa out of Undara. Refuge her to the palace of Lady Van.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “No father, I won’t leave you here. I will fight with you and die
            with our people!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Melsa, listen to me, all this will be in vain if you will die. That
            I won’t allow, my child. You are the Guardian of the Evoking ritual
            of Athronia. Leave Undara and seek refuge to the Prithvi Goddess.
            Only her can protect you from the tyranny of the empyreans. One day,
            you will come back here and avenge our land.” “Please be safe
            father.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Vajrah, take care of her.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Painfully, Elder Baleen watches his daughter disappears in the
            darkness with the guardian.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Elder…”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Into the Hall, we must stand until our last breath. That tyrant
            must not covet the halls for his evil deeds.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “The fortress of Athronia have fallen. Surrender to us now, leaders
            of Undara, you have no place to go.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “We won’t yield to your evil doings, God of Empyreans. It would be
            better for us to serve the highest ancestor above than to become
            your lackeys for injustices!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Kill them all.” A man with golden horns stood up from his throne
            and commanded his army and they massacred all the leaders of that
            place.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            From the edge of the city, another army is approaching and led by a
            woman with sapphire and gold color horns attacked the empyreans.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Kill all these aggressors and save the survivors. Heavenly
            Generals, protect the other citizens and lead them to safety.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “As you wish, your majesty!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “The rest of you, follow me, we must stop that bastard before he
            activates the Convocation Ritual!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            They rode the beasts towards the Evoking Hall. While somewhere in
            the Prithvi Domain, a little girl was looking at the skies
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “It has begun. Teacher, please come back to our world.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Ah…it’s been a while when I have seen this damned place. Looks like
            nobody use this place anymore. Why won’t we use again shall we?”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Prepare those bloods and perform the summoning now!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            The magicians surrounded the circle and they performed the ritual to
            summon other worlder.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Outside of the hall, a large summoning pentagram can be seen. Ans
            lightning and fire ravaged the whole city as the ritual continues.
            The Nether goddess ran toward the hall.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Stop them.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Yes, your majesty!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “I’m almost there.”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Stop her!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Get out of my way!” the nether goddess fire dark flames toward and
            the empyreans guarding the door to the hall.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            She burst into the doors and fired out the guards.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “What the…!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “Stop this madness Sphrium!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            “You really think you can stop me, Kyrijah. I am the sole ruler of
            Aetherea and no one can stop me not even you or your weak sister
            Van. You are destined to die on this moment. Ha ha ha!”
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Kyrijah used all her powers to stop the summoning but it was too
            late. A few people started appearing from the summoning pentagram
            and a huge light engulfed the hall.
          </motion.p>
          <motion.p variants={item} className="indent-6">
            Next thing they knew, they are against an old man that came from the
            summoning circle.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
