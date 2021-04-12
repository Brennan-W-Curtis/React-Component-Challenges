import React from "react";
import "./App.css";
import sounds from "./sounds";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div id="drum-machine" className="drum-bank"> 
                    <div id="display" className="display" >
                        {sounds.map((sound, index) => {
                            return <DrumPad text={sound.key} key={index} audio={sound.mp3} />
                        })}
                        <h2 id="id-display">Play a sound</h2>
                    </div>
                </div>
            </div>
        );
    }
}

class DrumPad extends React.Component {
    constructor(props) {
        super(props);

        this.audio = React.createRef();
    }

    componentDidMount() {
        this.audio.current.addEventListener("ended", (event) => {
            const parent = event.target.parentNode;
            parent.classList.remove("active");
        });
    }

    playSound = () => {
        this.audio.current.play();

        const id = this.audio.current.id;
        
        const parent = this.audio.current.parentNode;
        parent.classList.add("active");

        const display = parent.parentNode;
        display.querySelector("h2").innerText = `${id} is currently playing`;
    }

    render() {
        const { text, audio } = this.props; 
        return (
            <div className="drum-pad" onClick={this.playSound} id={`drum-${text}`}>
                {text}
                <audio className="clip" id={text} ref={this.audio} src={audio} />
            </div>
        );
    }
}

document.addEventListener("keydown", event => {
    const audioId = event.key.toUpperCase();
    const audio = document.getElementById(audioId);
    
    if (audio) {
        audio.currentTime = 0;
        
        const parent = audio.parentNode;
        parent.classList.add("active");

        const display = parent.parentNode;
        display.querySelector("h2").innerText = `${audioId} is currently playing`;

        audio.play();
    }
});
    
export default App