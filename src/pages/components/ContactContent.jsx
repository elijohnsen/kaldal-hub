function ContactContent() {
  return (
    <section className="flex justify-center items-center min-h-screen text-center text-white">
      <div className="max-w-6xl w-full px-6">
        <h1 className="text-4xl xl:text-4xl pb-6">Contact</h1>
        <h1 className="text-2xl">Mikkel Kaldal</h1>
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-30 mt-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl">About</h2>
            <p className="text-xl">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt."
            </p>
          </div>
          <div className="md:w-1/2 flex gap-4 flex-col justify-between text-2xl p-6">
            <p>9999 9999</p>
            <p>Mail@hejhej.farvel</p>
            <p>Instalogo</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactContent;
