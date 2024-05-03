import React from "react";

function ContactCom() {
  return (
    <>
      <section className="flex text-white">
        <div>
          <div className="text-center pt-28 text-3xl xl:text-4xl">
            <h1>Contact</h1>
            <h1>Mikkel Kaldal</h1>
          </div>
          <article className="flex-wrap ">
            <div className="">
              <h2 className="text-center text-3xl mt-12 mb-4">About</h2>
              <div className="px-4 lg:w-2/3 lg:mx-auto text-xl">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt."
              </div>
            </div>
            <div className="text-center mt-12">
              <p>9999 9999</p>
              <p>Mail@hejhej.farvel</p>
              <p>Instalogo</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default ContactCom;
