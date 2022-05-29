import { useModal } from '@stores/modals'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import { useEffect } from 'react'
describe('useModal', () => {
  it('initializes', async () => {
    const Component = () => {
      const store = useModal()

      useEffect(() => {
        store.open('test')
      }, [])

      return <Text>{store.activeModal}</Text>
    }
    const renderer = render(<Component />)
    const element = await renderer.findByText('test')
    expect(element).toBeDefined()
  })
})
