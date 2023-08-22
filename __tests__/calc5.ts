//import {Calculator} from "../calculator7";
import {Calculator} from "../calculator8";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('mark and panel adding', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    expect(calcobj.getPanelContents()).toBe("3");
});

test('mark and panel subtracting', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('-');
    expect(calcobj.getPanelContents()).toBe("3");
});




test('mark and panel multiplying', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    expect(calcobj.getPanelContents()).toBe("3");
});

test('mark and panel dividing', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('/');
    expect(calcobj.getPanelContents()).toBe("3");
});


test('adding 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('+');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("5");
});

test('subtracting 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('-');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("1");
});




test('multiply 2', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('X');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("6");
});

test('divide 1', ()=>{
    calcobj.pressButton('3');
    calcobj.pressButton('/');
    calcobj.pressButton('2');
    calcobj.pressButton('=');
    expect(calcobj.getPanelContents()).toBe("1.5");
});