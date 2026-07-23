import React from 'react';

export const renderCodeLine = (line: string): React.ReactNode => {
  const tokenRegex = /(@\w+)|(class|public|private|fun|suspend|def|return)\b|(MusicController|JamSessionManager|ResponseEntity)\b|("(.*?)")|(getSongs|syncPlayback|analytics)\b/g;
  const elements = [];
  let lastIndex = 0;
  let match;

  while ((match = tokenRegex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      elements.push(<span key={`text-${lastIndex}`}>{line.slice(lastIndex, match.index)}</span>);
    }
    
    let colorClass = "";
    if (match[1] || match[2]) colorClass = "text-[#c678dd]";
    else if (match[3]) colorClass = "text-[#e5c07b]";
    else if (match[4]) colorClass = "text-[#98c379]";
    else if (match[6]) colorClass = "text-[#61afef]";

    elements.push(<span key={`token-${match.index}`} className={colorClass}>{match[0]}</span>);
    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < line.length) {
    elements.push(<span key={`text-${lastIndex}`}>{line.slice(lastIndex)}</span>);
  }

  return elements.length > 0 ? elements : <span>{line}</span>;
};
