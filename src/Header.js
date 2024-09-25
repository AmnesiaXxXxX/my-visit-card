import React from 'react';

function Header() {
  const buttons = [
    {
      id: 'yandex_button',
      className: 'yandex_ref_button',
      imgSrc: 'https://img.icons8.com/?size=35&id=FElR8qsZtN1W&format=png&color=000000',
      alt: 'Yandex Icon',
      url: '/referer/yndx',
    },
    {
        id: 'apple_button',
        className: 'apple_ref_button',
        imgSrc: 'https://img.icons8.com/?size=35&id=EHtxO8ZmA602&format=png&color=0000000',
        alt: 'Apple Icon',
        url: '/referer/aple',
    }
    // Добавьте остальные кнопки аналогично
  ];

  return (
    <header className="header">
      {buttons.map(({ id, className, imgSrc, alt, url }) => (
        <button key={id} id={id} className={className} onClick={() => window.location.href = url}>
          <img width="35" height="35" alt={alt} className="img_button" src={imgSrc} />
        </button>
      ))}
    </header>
  );
}

export default Header;
