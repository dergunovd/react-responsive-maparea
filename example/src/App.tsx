import React, { useRef } from 'react'
import { Area, Map } from 'react-responsive-maparea'
import img from './img.png'

const App = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  const imgRefResized = useRef<HTMLImageElement>(null)

  return (
    <div>
      <h1>Original size</h1>
      <Map name='infographic' imgRef={imgRef}>
        <Area
          shape='rect'
          coords='184,6,253,27'
          href='https://mozilla.org'
          target='_blank'
          alt='Mozilla'
        />
        <Area
          shape='circle'
          coords='130,136,60'
          href='https://developer.mozilla.org/'
          target='_blank'
          alt='MDN'
        />
        <Area
          shape='poly'
          coords='130,6,253,96,223,106,130,39'
          href='https://developer.mozilla.org/docs/Web/Guide/Graphics'
          target='_blank'
          alt='Graphics'
        />
        <Area
          shape='poly'
          coords='253,96,207,241,189,217,223,103'
          href='https://developer.mozilla.org/docs/Web/HTML'
          target='_blank'
          alt='HTML'
        />
        <Area
          shape='poly'
          coords='207,241,54,241,72,217,189,217'
          href='https://developer.mozilla.org/docs/Web/JavaScript'
          target='_blank'
          alt='JavaScript'
        />
        <Area
          shape='poly'
          coords='54,241,6,97,36,107,72,217'
          href='https://developer.mozilla.org/docs/Web/API'
          target='_blank'
          alt='Web APIs'
        />
        <Area
          shape='poly'
          coords='6,97,130,6,130,39,36,107'
          href='https://developer.mozilla.org/docs/Web/CSS'
          target='_blank'
          alt='CSS'
        />
      </Map>
      <img ref={imgRef} useMap='#infographic' src={img} alt='MDN infographic' />

      <h1>Resized</h1>
      <Map name='infographicResized' imgRef={imgRefResized}>
        <Area
          shape='rect'
          coords='184,6,253,27'
          href='https://mozilla.org'
          target='_blank'
          alt='Mozilla'
        />
        <Area
          shape='circle'
          coords='130,136,60'
          href='https://developer.mozilla.org/'
          target='_blank'
          alt='MDN'
        />
        <Area
          shape='poly'
          coords='130,6,253,96,223,106,130,39'
          href='https://developer.mozilla.org/docs/Web/Guide/Graphics'
          target='_blank'
          alt='Graphics'
        />
        <Area
          shape='poly'
          coords='253,96,207,241,189,217,223,103'
          href='https://developer.mozilla.org/docs/Web/HTML'
          target='_blank'
          alt='HTML'
        />
        <Area
          shape='poly'
          coords='207,241,54,241,72,217,189,217'
          href='https://developer.mozilla.org/docs/Web/JavaScript'
          target='_blank'
          alt='JavaScript'
        />
        <Area
          shape='poly'
          coords='54,241,6,97,36,107,72,217'
          href='https://developer.mozilla.org/docs/Web/API'
          target='_blank'
          alt='Web APIs'
        />
        <Area
          shape='poly'
          coords='6,97,130,6,130,39,36,107'
          href='https://developer.mozilla.org/docs/Web/CSS'
          target='_blank'
          alt='CSS'
        />
      </Map>
      <img
        ref={imgRefResized}
        useMap='#infographicResized'
        src={img}
        alt='MDN infographic resize'
        style={{ width: 300, height: 200 }}
      />
    </div>
  )
}

export default App
