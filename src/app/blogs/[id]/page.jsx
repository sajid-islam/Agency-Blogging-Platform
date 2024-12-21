import React from "react";
import userLight from "@/images/userLight.png";
import userDark from "@/images/userDark.png";
import Image from "next/image";

const BlogPost = () => {
    return (
        <main>
            <section className="flex flex-col md:flex-row items-center gap-10 mt-10">
                <div className="space-y-5 md:flex-1">
                    <h1 className="text-3xl font-bold">Blog 1</h1>
                    <p className="text-gray-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Libero, vel, ad ut dolorem perferendis asperiores
                        itaque, labore quaerat voluptate sapiente dolor cum
                        incidunt impedit quisquam quos optio! Quidem, odit
                        voluptates.
                    </p>
                    <div className="flex items-center gap-2">
                        <Image
                            className="rounded-full"
                            src={userLight}
                            alt="author image"
                            width={30}
                            height={30}
                            placeholder="blur"
                        />
                        <p>Jhon Doe</p>
                    </div>
                </div>
                <div className="md:flex-1 relative w-full h-[250px]">
                    <Image
                        className="rounded-lg object-cover"
                        src="/images/about.jpg"
                        alt="blog image"
                        fill={true}
                    />
                </div>
            </section>
            <section className="mt-8">
                <p className="text-[18px] text-gray-text text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto voluptatibus quisquam eligendi dolorem error, sed
                    laudantium dignissimos esse maiores adipisci impedit
                    accusantium. Officiis magni tempora provident sint molestiae
                    placeat aspernatur impedit autem alias dolor ducimus vel,
                    cumque dolorem quod, deleniti ratione quasi explicabo quas
                    ipsa minus fugit maiores, inventore ut ad? Quaerat ipsum in
                    deserunt minima blanditiis ut necessitatibus, repellat
                    aspernatur animi neque libero totam praesentium et,
                    asperiores distinctio fugit quas consequatur. Maxime
                    voluptate sapiente suscipit non dolore optio laborum
                    nesciunt cupiditate quia modi officiis aspernatur, velit,
                    accusamus tempore eveniet vero! Vel quo impedit eaque libero
                    natus aperiam numquam rem, quod explicabo animi eius rerum
                    ad et facere. Error possimus esse quisquam similique.
                    Voluptatum minus sequi saepe dolores at delectus, et magni
                    eum accusamus suscipit velit officia vel sit ipsum. Ex
                    quibusdam nam in quia maxime, quod optio illo consectetur
                    quisquam et perspiciatis saepe quis ut accusamus. Aut
                    necessitatibus provident, doloremque aperiam impedit illo ab
                    ratione obcaecati assumenda officia ullam quibusdam iusto,
                    aliquid, debitis magnam voluptates voluptate? Minima iure
                    natus facere iusto similique in accusantium at aut commodi
                    id, et alias error necessitatibus, minus harum pariatur
                    cumque neque. Perspiciatis odio quod similique eaque ad,
                    repudiandae, reiciendis sapiente eveniet tenetur deleniti
                    quia ullam beatae earum distinctio vero facilis, corporis
                    minus asperiores accusantium autem illum hic voluptatem?
                    Quidem ipsa sint commodi suscipit alias tempora ratione
                    ipsum. Maxime perspiciatis magni reprehenderit animi,
                    similique doloribus exercitationem aliquam dolorum sequi
                    amet natus nobis, neque asperiores aperiam deserunt iusto
                    necessitatibus vitae! Numquam, labore tempora. Quidem aut
                    ullam accusantium mollitia modi ducimus nesciunt obcaecati
                    tempora accusamus perferendis magnam ut at culpa, molestias
                    quia cupiditate maxime incidunt eveniet provident inventore
                    sequi quisquam rerum! Ipsa velit rerum, voluptatem
                    distinctio nihil architecto dolores asperiores eum ex,
                    possimus incidunt perferendis adipisci quasi reprehenderit
                    reiciendis error corporis, quas in nemo nesciunt est
                    doloribus! Corrupti veritatis eligendi, reprehenderit, fugit
                    quisquam qui quis quod eaque omnis, consequatur molestias.
                    Eos natus facere rerum sed, minus autem, harum sequi
                    pariatur, perferendis distinctio optio! Nesciunt
                    exercitationem commodi soluta magnam praesentium. Pariatur,
                    repellendus, atque dignissimos distinctio delectus natus
                    ipsam sint adipisci similique possimus velit numquam
                    necessitatibus porro? Quam tempore error ipsa quidem
                    excepturi reprehenderit odit, inventore voluptatum nobis
                    dicta molestias deleniti similique et minus repellat,
                    quibusdam assumenda! Laudantium, aliquam? Dolorem quisquam
                    aliquid, recusandae accusamus praesentium beatae odit earum.
                    Blanditiis sit placeat quam rem, nulla aspernatur corrupti,
                    dignissimos nemo nostrum nobis dolore error. Voluptatum
                    totam facilis nemo recusandae nam?
                </p>
            </section>
        </main>
    );
};

export default BlogPost;
