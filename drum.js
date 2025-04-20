const audioClips = [
  {
    key: 'Q',
    sound: 'Heater 1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    key: 'W',
    sound: 'Heater 2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    key: 'E',
    sound: 'Heater 3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    key: 'A',
    sound: 'Heater 4',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    key: 'S',
    sound: 'Clap',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    key: 'D',
    sound: 'Open-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    key: 'Z',
    sound: "Kick-n'-Hat",
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key: 'X',
    sound: 'Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key: 'C',
    sound: 'Closed-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

function DrumPad({ clip, playSound }) {
  return (
    <div
      className="drum-pad"
      id={clip.sound}
      onClick={() => playSound(clip.key)}
    >
      {clip.key}
      <audio className="clip" id={clip.key} src={clip.src} />
    </div>
  );
}

function App() {
  const [display, setDisplay] = React.useState('');

  const playSound = (selector) => {
    const audio = document.getElementById(selector);
    audio.currentTime = 0;
    audio.play();
    const clip = audioClips.find(c => c.key === selector);
    setDisplay(clip.sound);
  };

  React.useEffect(() => {
    document.addEventListener('keydown', (e) => {
      const key = e.key.toUpperCase();
      if (audioClips.some(c => c.key === key)) {
        playSound(key);
      }
    });
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="pads">
        {audioClips.map((clip) => (
          <DrumPad clip={clip} key={clip.key} playSound={playSound} />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('drum-machine'));
