import { getImportance } from "./NewItemForm"

describe('New Item Form Component',()=>{
    test('Should give the appropriate importance',()=>{
        expect(getImportance('high')).toBe(0);
        expect(getImportance('medium')).toBe(1);
        expect(getImportance('low')).toBe(2);
    })
})