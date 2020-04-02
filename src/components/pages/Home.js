import React,{useContext} from 'react'
import Container from '../container'
import Title from '../title'
import Input from '../input'
import Button from '../button'
import ButtonDark from '../buttondark'
import  ThemeContext  from '../../contexts/Theme'

const Home = () => {
    const {switchTheme} = useContext(ThemeContext)
    return(
        <Container>
            <Title>Dark Mode com Styled Components</Title>
            <Input/>
            <Button onClick={switchTheme}>Ligth Mode</Button>
            <ButtonDark onClick={switchTheme} >Dark Mode</ButtonDark>
        </Container>
    )
}
export default Home