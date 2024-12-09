import React from 'react';
import Card from './Card';
import CardImg from './CardImg';
import CardTitle from './CardTitle';
import CardText from './CardText';
import CardBody from './CardBody';

export default Object.assign(Card, {
  Img: CardImg,
  Body: CardBody,
  Text: CardText,
  Title: CardTitle,
});
