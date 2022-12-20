import React from 'react'

export default function Todo(props) {
  const {item, yukaridaOl, mevcutlar} = props;

  const handleClick = () => {


    const mevcutlarCopy = [...mevcutlar];
    mevcutlarCopy.filter(oge => oge.id === item.id)[0].tamamlandi = !item.tamamlandi;
   
  
    yukaridaOl(mevcutlarCopy);

  }
    return (
      <li className="test" onClick={handleClick}>
      {item.isim} {item.tamamlandi ? "(ok)" : ""}
    </li>
    )
}
