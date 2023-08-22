import {Isikukood} from "../k1";
test("positiivne", ()=>{
    expect(new Isikukood("37605030299").sugu()).toBe("M");
});