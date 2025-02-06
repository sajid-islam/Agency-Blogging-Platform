import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const Category = async ({ params }) => {
    const param = await params;
    console.log(param);
    return (
        <section className="mt-5">
            <h4 className="text-2xl font-semibold text-primary-500">
                {param.category.charAt(0).toUpperCase() +
                    param.category.slice(1)}
            </h4>
            <div className="mt-10 space-y-16">
                <div className={`flex flex-col-reverse md:flex-row items-center gap-10 md:${styles.itemContainer}`}>
                    <div className="space-y-5 flex-1">
                        <h3 className="text-3xl font-bold">
                            Creative Portfolio
                        </h3>
                        <p className="text-gray-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepturi repellendus in accusamus sapiente
                            delectus voluptatum veritatis explicabo ea soluta a?
                        </p>
                        <Button className="bg-black hover:bg-black/85 text-white font-semibold" >See more</Button>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            className="object-cover"
                            src="/images/application.jpg"
                            alt="Blog cover image"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div className={`flex flex-col-reverse md:flex-row items-center gap-10 ${styles.itemContainer}`}>
                    <div className="space-y-5 flex-1">
                        <h3 className="text-3xl font-bold">
                            Creative Portfolio
                        </h3>
                        <p className="text-gray-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepturi repellendus in accusamus sapiente
                            delectus voluptatum veritatis explicabo ea soluta a?
                        </p>
                        <Button className="bg-black hover:bg-black/85 text-white font-semibold" >See more</Button>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            className="object-cover"
                            src="/images/application.jpg"
                            alt="Blog cover image"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div className={`flex flex-col-reverse md:flex-row items-center gap-10 ${styles.itemContainer}`}>
                    <div className="space-y-5 flex-1">
                        <h3 className="text-3xl font-bold">
                            Creative Portfolio
                        </h3>
                        <p className="text-gray-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepturi repellendus in accusamus sapiente
                            delectus voluptatum veritatis explicabo ea soluta a?
                        </p>
                        <Button className="bg-black hover:bg-black/85 text-white font-semibold" >See more</Button>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            className="object-cover"
                            src="/images/application.jpg"
                            alt="Blog cover image"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;
