//faktöriyel bulma
//Değişkenleri tanımlayalım
let sayac, f=1, n;
//Kullanıcıdan hangi sayının faktöriyeli alacağını isteyelim.
n=Number(prompt("n: "));
//For döngüsü
for(sayac=1;sayac<=n;sayac++)
    f=f*sayac;

console.log(n+"!= "+f);
