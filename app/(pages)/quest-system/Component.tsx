"use client";
import { useAnimateStore } from "@/store";
import { container, item } from "@/transitions";
import { Link } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
export default function Component() {
  const animate = useAnimateStore();
  return (
    <AnimatePresence>
      {animate.mode && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className="w-full flex flex-col gap-3 h-screen max-h-[calc(100%-60px)] overflow-y-auto"
        >
          <motion.p variants={item}>
            Claiming of Hero license is not yet available. This feature will be
            unlocked in future events.
          </motion.p>
          <motion.p variants={item} className=" text-warning ">
            (Please check the{" "}
            <Link
              underline="always"
              href="/updates"
              className="text-primaryblue"
            >
              updates
            </Link>{" "}
            section for announcements, stay tune.)
          </motion.p>
          <motion.p variants={item}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae
            dolor atque corporis, deserunt nam molestiae ab? Commodi non autem
            nulla minus magnam illum in qui ut. Optio, sit voluptatibus fuga
            illo adipisci dolores aut placeat omnis eos voluptas saepe magnam
            doloribus quam nulla ratione consectetur minima aperiam odit unde
            accusamus amet rem eaque alias sequi! Similique necessitatibus
            officiis in assumenda ipsa nihil, dignissimos placeat saepe
            laboriosam explicabo? Ut, vel commodi corporis dolor ratione non
            voluptas saepe cupiditate repellat repudiandae fugit vitae
            reiciendis est corrupti debitis inventore nostrum voluptate quod
            nobis rerum doloribus facilis nihil aliquid accusantium? Sapiente,
            suscipit? Quo harum ex deserunt odio provident voluptates,
            distinctio illo sint. Nam porro atque, repellat obcaecati maiores
            perferendis eum similique harum ipsum delectus quas. Maxime corrupti
            repellendus dolor ipsam. Quaerat dolore, deserunt dicta doloremque
            ad, numquam sequi nisi porro facilis incidunt repellat officiis
            expedita fugit placeat, quasi ratione facere libero velit minus
            aperiam sed! Eum soluta ducimus nostrum cupiditate dolore vero
            dolores eaque consequuntur quibusdam optio officiis quam asperiores
            at commodi, suscipit consequatur aliquam dolorum possimus? Eveniet
            non omnis laborum maiores qui quas magnam veritatis. Necessitatibus
            laudantium repellendus quia dignissimos ipsa atque beatae dolorem
            blanditiis labore in, illum recusandae ea minima ipsam saepe totam
            praesentium itaque similique vero sapiente sed repellat. Vitae dicta
            excepturi quas, amet consectetur natus! Voluptatibus rerum
            reprehenderit perferendis qui nesciunt. Labore, vitae, inventore
            reiciendis excepturi distinctio tenetur, adipisci officia beatae
            commodi optio ipsam natus. Autem illum asperiores dolor accusamus
            similique atque, quis aut sequi necessitatibus in, cum excepturi
            nostrum molestias minus modi sint perspiciatis eveniet! Nesciunt a
            eligendi voluptatum. Consequuntur dolorem quibusdam, nobis delectus
            mollitia esse eligendi, commodi velit asperiores magni praesentium,
            repellat ea cupiditate modi nisi consectetur sit labore voluptate?
            Reiciendis neque tempore placeat atque minima illo ipsa voluptate
            qui rerum animi doloribus est iure explicabo porro corporis
            consectetur, dolorum quaerat sint. Quam ullam nulla reiciendis
            aliquam quaerat vel, provident quis, soluta quibusdam cum doloremque
            quo esse. Earum quia beatae maiores harum, fugiat similique. Itaque
            minima consectetur omnis non quisquam. Tempora temporibus amet autem
            quisquam asperiores repudiandae, dolorum sequi explicabo deserunt
            obcaecati, odio, ducimus iste. Atque amet, reiciendis dolor
            voluptates temporibus veniam unde. Labore nostrum optio saepe
            suscipit sed tenetur ea vitae adipisci dignissimos molestias
            delectus libero voluptatem itaque, repellat, ratione voluptates!
            Quam optio voluptatem laudantium ducimus architecto, dignissimos
            tempore tempora alias, fuga nobis sunt nisi ratione ullam. Expedita
            numquam quisquam, alias eum, deserunt nemo eveniet provident minima,
            suscipit totam molestias fuga ea magnam rem commodi itaque
            laudantium qui dolore ex animi eaque atque impedit facere? Nesciunt
            excepturi magnam hic, dicta laborum optio quo in repudiandae autem
            facere quia, saepe corrupti, nemo soluta ipsam debitis tenetur ipsum
            vero molestias laudantium delectus. Vel harum officia, est maxime
            voluptate sed, rerum ratione fugiat sequi labore accusamus! Tempora
            quos voluptates accusantium ea maxime provident recusandae nam rem.
            Voluptatibus praesentium nesciunt mollitia nisi ab, rem, voluptates
            et neque accusantium at soluta minus? Officiis ut, itaque explicabo
            libero perferendis, pariatur ratione consequuntur aperiam ad neque
            consectetur saepe accusantium, sint vero adipisci non.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
