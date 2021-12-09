import React from 'react';
import './style.scss';
interface propDefine {
    title: string,
    url: string,
    content: string,
    image: string,
    customeClass: string,
    width?: string,
    height?: string,
}
const ImageCard = (props: propDefine) => {
  return (
    <div className={`image-card ${props.customeClass}`} style={{backgroundImage:  'url(' +  props.image  + ')', width: props.width || '300px', height: props.height || '500px'}}>
      <div className="card-content">
        <h4 className={'card-title'}>{props.title}</h4>
        <p className={'card-body'}>{props.content}</p>
        <a href={props.url} className={'button'}>Learn more</a>
      </div>
    </div>
  );
};
export default ImageCard;