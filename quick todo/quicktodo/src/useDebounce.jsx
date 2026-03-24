import { useEffect, useState } from "react";

const useDebounce = (text, delay) => {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);

  return debounce;
};

export const useDebounceQuestion = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 1000);

  return (
    <div>
      <h2>Debounce</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="write something"
      />
      <p>Debounce Value: {debouncedText}</p>
    </div>
  );
};
