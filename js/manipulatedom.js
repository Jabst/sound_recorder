const appendToList = () => {

    let listuff = ``;

    for (var index in audioCollection) {
        listuff += `<li><div onclick="pickFile(${index})">${index}</div><button onclick="saveToPC(${index})">Download Audio</button></li>`
    }
    $('#audios').empty();
    $('#audios').append(listuff)
}

const pickFile = (index) => {
    console.log("carregando o audio ", index)
    loadAudio(audioCollection[index]);
}

const saveToPC = (index) => {
    const audioUrl = URL.createObjectURL(audioCollection[index]);
    var link = document.createElement("a"); // Or maybe get it from the current document
    link.href = audioUrl;
    link.download = index + ".mp3";
    link.innerHTML = "Click here to download the file: " + link.download;
    document.body.appendChild(link);
}
