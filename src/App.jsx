import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

// Импортируем ваше изображение
const catImage = require('./images/cat-heart.png');

const App = () => (
  <div className="container py-5">
    <h1 className="mb-5 text-center">Примеры React карточек с Bootstrap 5</h1>
    
    <div className="row g-4">
      {/* Карточка с изображением */}
      <div className="col-md-4">
        <Card>
          <img
            src={catImage}
            className="card-img-top"
            alt="Кот в сердце"
            style={{ width: '100%', height: 'auto' }}
          />
          <CardBody>
            <h5 className="card-title">Заголовок карточки</h5>
            <p className="card-text">
              Это пример текста карточки. Здесь можно разместить описание или любую другую информацию.
            </p>
            <a href="https://AleksVir.github.io/cards" className="btn btn-primary">Перейти</a>
          </CardBody>
        </Card>
      </div>

      {/* Текстовая карточка (без изображения) остаётся без изменений */}
      <div className="col-md-4">
        <Card>
          <CardBody>
            <h5 className="card-title">Текстовая карточка</h5>
            <p className="card-text">
              Пример карточки без изображения, содержащей только текстовое содержимое.
            </p>
            <a href="https://AleksVir.github.io/cards" className="btn btn-outline-primary">Подробнее</a>
          </CardBody>
        </Card>
      </div>

      {/* Карточка с заголовком и футером */}
      <div className="col-md-4">
        <Card>
          <CardHeader>Заголовок</CardHeader>
          <CardBody>
            <h5 className="card-title">Особая карточка</h5>
            <p className="card-text">Карточка с заголовком и нижним колонтитулом.</p>
          </CardBody>
          <CardFooter className="text-muted">2 дня назад</CardFooter>
        </Card>
      </div>

      {/* Цветная карточка */}
      <div className="col-md-4">
        <Card bgColor="primary" className="text-white">
          <CardBody>
            <h5 className="card-title">Цветная карточка</h5>
            <p className="card-text">Пример карточки с цветным фоном и белым текстом.</p>
            <a href="https://AleksVir.github.io/cards" className="btn btn-light">Действие</a>
          </CardBody>
        </Card>
      </div>

      {/* Горизонтальная карточка */}
      <div className="col-md-8">
        <Card horizontal>
          <img
            src={catImage}
            className="img-fluid rounded-start h-100 object-fit-cover"
            alt="Кот в сердце"
          />
          <CardBody>
            <h5 className="card-title">Горизонтальная карточка</h5>
            <p className="card-text">
              Это более широкая карточка с поддерживающим текстом ниже как естественный переход к дополнительному содержимому.
            </p>
            <p className="card-text">
              <small className="text-muted">Последнее обновление 3 минуты назад</small>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>

    {/* Группа карточек */}
    <div className="row mt-5">
      <div className="col-12">
        <h2 className="mb-4">Группа карточек</h2>
        <div className="card-group">
          <Card>
            <img
              src={catImage}
              className="card-img-top"
              alt="Кот в сердце"
              style={{ width: '100%', height: 'auto' }}
            />
            <CardBody>
              <h5 className="card-title">Карточка 1</h5>
              <p className="card-text">Это карточка с поддерживающим текстом ниже...</p>
              <p className="card-text">
                <small className="text-muted">Последнее обновление 3 минуты назад</small>
              </p>
            </CardBody>
          </Card>
          <Card>
            <img
              src={catImage}
              className="card-img-top"
              alt="Кот в сердце"
              style={{ width: '100%', height: 'auto' }}
            />
            <CardBody>
              <h5 className="card-title">Карточка 2</h5>
              <p className="card-text">Эта карточка имеет поддерживающий текст ниже...</p>
              <p className="card-text">
                <small className="text-muted">Последнее обновление 3 минуты назад</small>
              </p>
            </CardBody>
          </Card>
          <Card>
            <img
              src={catImage}
              className="card-img-top"
              alt="Кот в сердце"
              style={{ width: '100%', height: 'auto' }}
            />
            <CardBody>
              <h5 className="card-title">Карточка 3</h5>
              <p className="card-text">Это более широкая карточка с поддерживающим текстом...</p>
              <p className="card-text">
                <small className="text-muted">Последнее обновление 3 минуты назад</small>
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default App;
