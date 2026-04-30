import React  from "react";

export const BannerCiva: React.FC = () => {
  return (
    <img
      src="https://kuposmiscellaneous.s3.us-east-1.amazonaws.com/civa-main-banner.webp"
      alt="Compara y compra pasajes de bus"
      decoding="async"
      style={{ 
        width: '100%',       
        maxHeight: '300px',  
        height: 'auto',
        objectFit: 'cover',
        display: 'block'
      }}
    />
  );
};