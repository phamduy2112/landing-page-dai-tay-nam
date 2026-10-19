import React, { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import bg1 from "../../public/assets/ĐTN COVER (1).png"
import bg2 from "../../public/assets/banner_doc.png"

export default function Banner() {
    return (
        <section id="" className={``}>
            <div className="mx-auto w-full hidden sm:block">
                <img src={bg1} alt="Banner" />
            </div>
            <div className="mx-auto w-full  sm:hidden">
                <img src={bg2} alt="Banner" />
            </div>
        </section>

    );
}