import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'antd'

function App() {


  return (
    <div>
      <Button type="primary">Botão Primário</Button>
      <Button type="default">Botão Padrão</Button>
      <Button type="dashed">Botão Tracejado</Button>
      <Button type="danger">Botão de Perigo</Button>
      <Button type="link">Botão Link</Button>
    </div>
  )
}

export default App
