import {Calculator} from "../calculator4";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});


test('multiply 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    expect(calcobj.getPanelContents()).toBe("2");
});


test('multiply 2', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("6");
});