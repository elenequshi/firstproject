function changeAge(): void {
    let text:string =  document.getElementById("age")!.innerHTML;
    text += " წელი";
    document.getElementById("age")!.innerHTML = text;
}

console.log( 1 + 2 + "nika" + 2 + 7);

let myFunc: (a: number, b: boolean) => string;