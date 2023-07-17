const Titulos = ({ subtitulo, estadoNuevo }) => {
  //aqui escribimos la logica
  return (
    //aqui tambien se puede escribir la logica
    <section className="text-center">
      <h1 className="display-4">Proyecto contador con React</h1>
      <h2 className="display-6">
        {subtitulo} , estado{" "}
        {estadoNuevo === true ? "Habilitado" : "deshabilitado"}
      </h2>
      <hr />
    </section>
  );
};

export default Titulos;
