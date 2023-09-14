async function getnews(){
    try {
        const response = await fetch('https://g1-clone-node-react.onrender.com/news');
        const news = await response.json();

        return news

    } catch (e) {

        console.log(e)

    }
}

export {getnews}