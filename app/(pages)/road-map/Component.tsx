"use client";
import { useAnimateStore } from "@/store";
import { container } from "@/transitions";
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
          className=" flex flex-col gap-3 overflow-y-auto h-screen max-h-[calc(100%-44px)]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          inventore laudantium aspernatur deserunt iste unde fugit, quas ipsa
          sed cumque earum sunt velit illo iusto magnam. Dolor repellendus
          quibusdam asperiores quod ducimus soluta illo ipsa temporibus cumque!
          Porro voluptas quas, quibusdam numquam nihil totam recusandae odio
          facilis quam a itaque veniam. Iure cupiditate minima rem quas quos
          facere cum non delectus tempora porro inventore id, incidunt aut
          aliquam natus hic nesciunt iste fugit nihil est, assumenda mollitia.
          Perspiciatis repellendus iste eum possimus voluptates cupiditate quo
          qui odio ratione beatae sint nisi exercitationem perferendis dolores
          labore ipsam alias aliquam, totam consequatur nam expedita id
          accusamus fugiat necessitatibus. Ipsa maiores qui similique
          consequuntur reprehenderit quidem minima excepturi, voluptatem esse
          nesciunt laborum cum accusamus non, officiis omnis ullam laboriosam,
          iure dignissimos labore? Maxime ipsa commodi eligendi, porro
          voluptatibus velit ab nulla sint earum dicta blanditiis laborum autem?
          Ratione maxime ea sed voluptatibus. Expedita eveniet optio deleniti
          reiciendis sunt ratione ex soluta fugit laborum quasi cum corporis
          obcaecati dolor rerum aspernatur maiores fuga, quaerat quas at dicta
          deserunt beatae, debitis et? Ratione hic ipsum in autem labore nihil
          laborum voluptatum adipisci facere perspiciatis alias aliquid non et
          repudiandae sequi culpa rerum animi ab deserunt, error saepe unde,
          officiis, velit vel. Nulla officiis obcaecati optio, qui vitae dolore
          ut recusandae, pariatur, ad esse maxime odio quisquam id
          exercitationem sint a nobis blanditiis quam ab aliquid quae ullam
          perspiciatis atque voluptate. Voluptas facere repellat pariatur cum
          repudiandae doloremque libero inventore quas, assumenda illo
          voluptatem eius earum ullam est iste asperiores quasi aliquam
          consectetur, fugiat saepe consequatur. Ipsam quos aut quibusdam,
          accusantium eligendi odio vero sit dolorem soluta! A pariatur
          inventore aut cupiditate amet voluptates accusamus magnam assumenda,
          soluta sapiente dicta vitae atque voluptate possimus reiciendis nobis
          nemo. Molestiae fugiat tenetur illo architecto? Voluptate provident
          laborum ipsam sint libero corrupti, consequuntur necessitatibus nobis!
          Soluta sed assumenda, commodi voluptatibus aliquid repellendus
          distinctio magnam. Omnis quas quis quasi impedit pariatur, saepe porro
          odio reiciendis placeat a dolore harum consectetur optio quidem
          facilis expedita corporis esse eius maxime officia natus labore? Non,
          reiciendis ipsam illo eum repudiandae beatae et eius odio. Corporis
          deleniti quaerat debitis laboriosam sint eligendi? Quia quaerat magni
          nihil quisquam tenetur eaque earum. Earum corporis minima quam libero
          aliquid provident voluptate quidem, sit consequuntur culpa
          reprehenderit rerum est sint quisquam! Numquam similique reiciendis
          atque odit necessitatibus, nobis magni ratione facere commodi itaque
          quo doloribus quia obcaecati, asperiores aliquid iusto rem ea
          molestias, aspernatur in tempore esse mollitia! Porro, sequi delectus,
          ipsa dolorem quibusdam magni enim eos, est ea veritatis alias illum
          eum error. Laboriosam culpa labore error cupiditate nemo dolore,
          sapiente autem optio hic nihil quidem tempora voluptates, ipsa unde
          eaque architecto id veritatis illo rerum est. Animi saepe cumque
          provident debitis eveniet atque officiis dicta praesentium dolorum at
          ad temporibus illum vel quas perspiciatis quidem eius laudantium
          itaque illo dolores ex rem, eos quaerat. Incidunt fugiat tempora
          dolores minus asperiores. Suscipit praesentium sunt magnam animi ipsa!
          Soluta blanditiis sunt accusantium eaque qui fugit quas corporis
          dolore!
        </motion.div>
      )}
    </AnimatePresence>
  );
}
