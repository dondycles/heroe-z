"use client";
import { useAnimateStore } from "@/store";
import { container } from "@/transitions";
import { AnimatePresence, motion } from "framer-motion";
export default function Page() {
  const animate = useAnimateStore();
  return (
    <AnimatePresence>
      {animate.mode && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className="flex flex-col gap-3 overflow-y-auto h-screen max-h-[calc(100%-44px)]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolores
          molestiae, natus rerum optio ad eum facilis labore saepe illo nostrum
          odio dolor officia quis inventore nisi corporis distinctio deleniti.
          Iusto aspernatur beatae nisi, explicabo at et doloremque accusantium
          quos quasi voluptate ab ipsa quisquam temporibus repudiandae facere
          itaque sunt recusandae porro nostrum illo culpa! Amet officia, sed
          deleniti nam deserunt asperiores mollitia reprehenderit? Officia
          beatae harum facilis quas quam dolore nihil omnis amet veritatis!
          Aspernatur ad dicta libero nisi. Minima, eaque voluptatum. Quae
          maiores perspiciatis repellat magni nihil. Delectus quod porro impedit
          placeat, repudiandae eum dolore. Quidem, ratione quia? Dolores aliquid
          aut sapiente modi, repudiandae nobis accusantium, deserunt facilis
          pariatur ullam repellat dolor eveniet, alias laudantium impedit
          mollitia qui culpa vero omnis dolore magnam? Inventore cum eos
          doloremque et tenetur. Incidunt voluptate aperiam reiciendis nam
          dolorem amet doloremque at autem quasi. Sapiente voluptatem dolores
          sunt exercitationem, amet maxime. Vero numquam distinctio architecto
          omnis facere, aliquam velit placeat suscipit nostrum ab quam quibusdam
          aperiam est eveniet voluptates voluptatibus ipsa. Quod ex saepe
          laudantium facilis eum delectus non magnam quia optio porro unde
          officiis maiores facere error debitis odit soluta, alias quidem
          quibusdam excepturi vitae! Numquam similique accusantium quos dicta
          nostrum eius sed unde voluptatem officiis, tempore nesciunt tempora
          quo quaerat, animi nemo doloremque accusamus, quas ipsum dolores
          voluptatum nobis nam iste? Eaque sit assumenda ducimus fugit nemo eum
          deleniti, adipisci libero repellat, voluptatibus atque at aspernatur
          ullam ex? Et, aperiam ab cum eum vel beatae praesentium ad ducimus
          quasi voluptatum aliquid quibusdam voluptatem modi veritatis molestias
          consequatur itaque nulla id at dolorum nam! Eaque nihil,
          exercitationem repudiandae laborum tenetur molestias minima harum iure
          alias doloremque nulla voluptate aspernatur in nobis atque nesciunt
          magnam sit consectetur. Quasi sapiente nesciunt laborum ab non tenetur
          quas beatae, eos aspernatur voluptate autem eum, consectetur,
          praesentium ullam cum reiciendis! Magni dicta eos similique pariatur
          quas, quod vero. Corrupti reprehenderit praesentium itaque vero nulla
          distinctio eos dolore. Fugit qui nemo, temporibus ea ex impedit
          itaque. Aperiam perferendis voluptas consectetur totam ut eum
          cupiditate cum est doloremque dolorum ipsa fugiat eaque minima sequi,
          eos, tempore accusamus magni odit debitis blanditiis obcaecati rem
          aspernatur? Voluptatibus nobis in, earum libero quos quis quae soluta
          recusandae quaerat error enim corrupti! Vero veniam, obcaecati quam
          consequatur harum tempora hic, pariatur aperiam nostrum quasi dolor
          dolorem veritatis sunt, magni sint eos rerum? Alias corrupti quisquam
          officia nesciunt, doloremque nam maxime aliquam neque sit. Eaque vitae
          quaerat asperiores sint blanditiis quibusdam velit aspernatur repellat
          ex, sed perferendis illum amet magni, necessitatibus architecto
          impedit dolores cum corporis, odio ut! Tempora quis pariatur nulla
          soluta voluptas, totam quia eius corrupti, recusandae sapiente
          architecto numquam. Error dolore, accusantium ullam commodi enim
          debitis, facilis cumque eligendi, minus tempora quisquam voluptatem
          consectetur non voluptas ut laboriosam placeat. A, voluptatum
          corrupti? Quisquam, aspernatur sit ullam veritatis reprehenderit eaque
          neque suscipit error rem corporis fugiat expedita laudantium ut
          laboriosam perferendis enim id cumque. Eos suscipit, asperiores velit
          veritatis mollitia a dignissimos qui saepe dicta harum iusto voluptate
          tempore, accusantium quidem!
        </motion.div>
      )}
    </AnimatePresence>
  );
}
