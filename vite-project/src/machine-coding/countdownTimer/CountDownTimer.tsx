import { FormEvent, useEffect, useState, useCallback } from "react";

const CountDownTimer = () => {
  const [time, setTime] = useState<number>(1);
  const [inputTime, setInputTime] = useState<number>(1);
  const [pause, setPause] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTime(inputTime);
  };
  const handlePause = () => {
    setPause(!pause);
  };

  useEffect(() => {
    if (time > 0 && !pause) {
      const timerId = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [time, pause]);
  const handleReset = () => {
    setTime(inputTime);
  };

  const formatTime = useCallback((seconds: number) => {
    const hr = Math.floor(seconds / 3600);
    const remainingSeconds = seconds - hr * 3600;
    const min = Math.floor(remainingSeconds / 60);
    const sec = remainingSeconds - min * 60;

    return `${hr.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputTime}
          placeholder="Please enter time in seconds"
          onChange={(e) => setInputTime(Number(e.target.value))}
        />
        <button type="submit">Go</button>
      </form>
      {time > 0 && <h3 className="countdown-timer">{formatTime(time)}</h3>}
      {time === 0 && <h3>Hurrah! Time's up!! 🥳</h3>}
      <button type="button" onClick={handlePause}>
        {pause ? "Resume" : "Pause"}
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default CountDownTimer;
