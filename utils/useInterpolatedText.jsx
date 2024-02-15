export const useInterpolateText = (text, className) => {
  const regex = /\[html\](.*?)\[html\]/;
  const match = regex.exec(text);

  const word = match.input.replace(
    match[0],
    `<span className="${className}">${match[1]}</span>`
  );
  return <span dangerouslySetInnerHTML={{ __html: word }}></span>;
};
