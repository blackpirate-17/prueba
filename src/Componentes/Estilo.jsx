const Estilo = () => {
    const a  = document.body.style.backgroundColor;
    if (a === "white") {
        document.body.style.backgroundColor = "grey";
    }
    else if (a === "grey") {
        document.body.style.backgroundColor = "white";
    }
};

export default Estilo;