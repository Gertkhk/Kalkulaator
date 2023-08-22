class Calculator{
    protected panelContents:string="";
    protected memoryContents:number=0;
    protected markContents:string="";
    protected marks:string[]=["+", "-", "X", "/"];
    pressButton(b:string):void{
        if(b=="C"){this.panelContents=""}
        else if(this.marks.includes(b)){
            this.memoryContents=parseFloat(this.panelContents);
            this.markContents=b;
            this.panelContents="";
        } else if(b=="="){
            if(this.markContents.length==1){
                if(this.markContents=="+"){
                    this.panelContents=(this.memoryContents+parseFloat(this.panelContents)).toString();
                }
                if(this.markContents=="-"){
                    this.panelContents=(this.memoryContents-parseFloat(this.panelContents)).toString();
                }
                if(this.markContents=="X"){
                    this.panelContents=(this.memoryContents*parseFloat(this.panelContents)).toString();
                }
                if(this.markContents=="/"){
                    this.panelContents=(this.memoryContents/parseFloat(this.panelContents)).toString();
                }
            }
        }
        else{this.panelContents+=b;}
    }
    getPanelContents():string{
        if(this.panelContents.length>0){
            return this.panelContents;
        }
        return "0";
    }
}

export{
    Calculator
}