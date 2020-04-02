import React,{useState} from 'react';
import Home from './components/pages/Home'
import {ThemeProvider } from 'styled-components'
import ThemeContext from './contexts/Theme'

const ligthTheme = {
  background: '#dcdcdc',
  backgrounddark: '#000',
  backgroundAlt: '#fdfdfd',
  text: '#333',
  textdark: '#fff',
  border: '#dcdcdc',
  shadow: '0 0 5px rgba(0,0,0,.5)',
}
const darkTheme = {
  background: '#595959',
  backgroundAlt: '#333',
  text: '#f2f2f2',
  textinput:'#333',
  border: '#f2f2f2',
  shadow: '0 0 5px rgba(255,255,255,.75)',
}
const App = () => {
  const [theme,updateTheme] = useState(ligthTheme)
  const handleSwitchMode = () => {
    updateTheme(oldTheme => {
      if(oldTheme.background === '#595959'){
        return ligthTheme
      }
      return darkTheme
    })
  }
  return(
    <ThemeContext.Provider value={{
      switchTheme : handleSwitchMode,
    }}>
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App;
