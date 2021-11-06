# react-responsive-maparea

> React component for responsive map-area HTML-tags

[![NPM](https://img.shields.io/npm/v/react-responsive-maparea.svg)](https://www.npmjs.com/package/react-responsive-maparea) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-responsive-maparea
```
```bash
yarn add react-responsive-maparea
```

## Usage

```tsx
import React, { Component, useRef } from 'react'
import { Map, Area } from 'react-responsive-maparea'

const Example = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <div>
      <Map name='map' imgRef={imgRef}>
        <Area
          shape='rect'
          coords='0,0,100,50'
          href='https://google.com'
        />
      </Map>
      <img
        ref={imgRef}
        useMap='#map'
        src={img}
        alt='MDN infographic resize'
        style={{ width: 200, height: 100 }}
      />
    </div>
  )
}
```

## Possible problems
```tsx
<Area shape='circle'/>
```
Correct works only with saving original aspect ratio

## License

GNU GENERAL PUBLIC LICENSE © [dergunovd](https://github.com/dergunovd)
