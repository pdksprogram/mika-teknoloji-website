import React from 'react';

interface SmartImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

export function SmartImg({ src, alt = '', width, height, ...rest }: SmartImgProps) {
  // Generate meaningful alt text from filename if empty
  const autoAlt = alt || src.split('/').pop()?.split('.')[0]?.replace(/[-_]/g, ' ') || 'image';
  
  return (
    <img 
      src={src} 
      alt={autoAlt} 
      loading="lazy" 
      width={width}
      height={height}
      {...rest} 
    />
  );
}

export default SmartImg;