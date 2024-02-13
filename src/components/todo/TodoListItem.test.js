import { render, screen} from "@testing-library/react";
import TodoListItem, { getPriority } from "./TodoListItem";

describe('TodoListItem Component',()=>{
    
    test('Should convert importance to priority class names',()=>{
        expect(getPriority(0)).toBe('high');    
        expect(getPriority(1)).toBe('medium');    
        expect(getPriority(2)).toBe('low');    
    });
    test('Should render the item with the appropriate class name',()=>{
        render(<TodoListItem importance='2' key='1' >{"brush your teeth"}</TodoListItem>);
        const element =screen.getByText('brush your teeth');
        expect(element).toBeInTheDocument();
    })
})