
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
const tasks = [{ id: 1, title: 'brush your teeth' }, { id: 2, title: 'Do your homework' }, { id: 3, title: 'Go to bed' }]
describe('Todo List Component', () => {
    beforeEach(()=>{
        render(<TodoList tasks={tasks} />);
    })
    test('should render task Items', async () => {
        const items = await screen.findAllByRole('listitem');
        expect(items.length).toBe(3);
    });
    test('should render task items titles', () => {
        const linkElement = screen.getByText('brush your teeth');
        expect(linkElement).toBeInTheDocument();
    })
});