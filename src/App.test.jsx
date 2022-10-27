import {render, screen} from '@testing-library/react'
import App from './App'

describe('App component', ()=>{
    test('check the available text', ()=>{
        render(<App />)
        const text = screen.getByText('Learn & Master GitHub Actions')
        expect(text).not.toBeInTheDocument()
        
    })
})
