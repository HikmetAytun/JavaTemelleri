# JavaScript Yazım ve Noktalama Kuralları

1- Açıklama satırları ve boşluk karakterleri gözardı edilir, derlenmez.
2- Her komutun sonuna noktalı virgül koyulur.
3- JavaScript dili büyük-küçük harf duyarlı bir dildir. Örneğin Sayi=20, sayi=10 // farklı değişkenler.
4- Bazı JavaScript komutlarında blok denilen yapılar kullanılır. Blokların başlangıç ve bitiş yerini adına küme parantezi denilen işaretler belirler. Örneğin if(saat < 18) {document.write("selam);}

# Değişken Oluşturma

JavaScript'te değişken oluşturmak için var komutu kullanılır.

var a; //önce değişken oluştur.
a=1; //sonra değer ata

var sayi=2; //değilken oluşturup değer ata

var x=5, y; //tek satırda birden fazla değişken
y=20;

# let ve const ile değişken oluşturma

Çok eskiden beri kullanılan var komutunun yanına 2015 yılından sonra let ve const komutları gelmiştir.
    Eski tarayıcıları destelemek için var komutunu kullanmalısınız.
    Değeri hiç bir zaman değişmeyecek olan değişkenler için const komutu kullanılabilir: const pi=3.14;
    Değişkeni sadece tanımlandığı blok/fonksiyon içinde kullanacaksanız let komutunu kullanabilirsiniz.
    exp: let x=5;
         let y=6;
         let toplam=x+y;

# Değişken Tanımlama Kuralları

🔘 JavaScript komutları (deyimleri) değişken adı olarak kullanılamaz.
🔘 Değişkenin ilk karakteri harf (alfanumerik) olmalıdır. Rakam (0-9) ile başlayan değişkenler hataya neden olur.
🔘 Değişken tek kelime olmalıdır. Eğer iki kelimeden oluşan değişkenler tanımlayacaksanız araya alt çizgi (_) koyabilirsiniz.
🔘 Değişkenlere sözel değer atanacaksa çift tırnak ("...") içinde atanmalıdır. exp: var ad="hikmet"; //gibi
🔘 JavaScript büyük-küçük harf duyarlı bir dildir; sayi ile Sayi değişkenleri birbirinden farklıdır.
🔘 JavaScript dilinde ş,ç,ü,I,ğ gibi Türkçe harfler kullanılabilir fakat pek tercih edilmemelidir çünkü umulmadık yerlerde hata alabilirsiniz.

# Data Printing
🔘 Yapılan işlem sonuçlarını ekranda görmek için document.write(), alert(), console.log() veya innerHTML komutlarını kullanabiliriz.

- alert("mesaj penceresi"); // en kolayı

- document.write("ilk satır"); //sayfaya yazar
- document.write(<br>);
- document.write("ikinci satır");

- console.log("konsola yaz"); //konsola yazar

- document.getElementById("h1Baslik").innerHTML="Başlık";

# Data Reading
🔘 Ziyaretçiden veri almak için HTML formları veya promt() komutu kullanılabilir.
- var ad=prompt("adınızı giriniz:")
- document.write(ad)

🔘 HTML formlarından veri okumayı ilerleyen derslerde öğreneceğiz.

# Verbal Addition (Sözel Toplama)

📌 Metinleri veya değişkenleri yan yana göstermek veya başka bir ifade ile yan yana yazdırmak için "sözel toplama" yapılır.

📌 Sözel toplamada artı (+) karakteri aşağıdaki gibi kullanılır.

- var ad="ahmet"
- document.write("adınız"+ad);

- var isim="ali"
- var soyisim="kal"
- documet.write("adınız:"+isim+"soyadınız:"+soyisim);

# Variable Data Types

✏️ JavaScript dilinde oluşturduğunuz değişkenlere değişik türde değerler/veriler atayabilirsiniz.

✏️ JavaScript değişkenleri dinamik veri tipindedir; atadığınız değere göre otomatik olarak veritipi değişir.

✏️ Örneğin, bir değişkene 5 değerini atarsanız değişken veritipi otomatik olarak sayısal (Number), "deneme" değerini atarsanız otomatik olarak sözel (String) veritipine dönüşür.

- var x=5;      //sayısal değer (Number)
- var ad="Mehmet"   //sözel değer(String)

- Number = Sayısal veri: Değişkenlere atanan tamsayı veya ondalıklı değerler değişken veritipini Number yapar.

- String = Sözel veri: Değişkenlere atanan karakter veya metinler değişkenin veritipini String yapar.

- Boolean = Mantıksal veri: Bir değişkene true ve false değerini atarsanız bu değişken Booelan tipine dönüşür.

- Array = Dizi: Diziler birden fazla değer taşıyan değişkenlerdir.

- Undefined = Herhangi bir JavaScript değişkeni tanımlanmış ama değer atanmamışsa değişkenin veri tipi Undefined olarak görülür.

- Null = Boş veya değer yok.

# Learning About Variable Data Types
✅ JavaScript değişkenlerinin veri tipinin öğrenmenin en kolay yolu typeof() komutunu kullanmaktadır. Bu komut parantez içine yazılan değişkenin veri tipini döndürür.

✅ Kullanımı aşağıdaki gibidir:

🟠  var x=5;
    document.write("veri tipi:"+typeof(x)+"<br>");      //number

🟠  x="ali";
    document.write("veri tipi:"+typeof(x)+"<br>");      //string

🟠  x=true;
    document.write("veri tipi:"+typeof(x)+"<br>");      //boolean

#  Data Type Conversion
⚪  JavaScript değişkenlerinin veritipini değiştirmek için aşağıdaki komutlar kullanılır.

♻  Number(veri) **Parantez içindeki veriyi sayısal değere dönüştürür.**
♻  String(veri) **Parantez içindeki veriyi sözel değere dönüştürür.**
♻  Boolean(veri) **Verinini Boolean tipine dönüştürülmesini sağlar. Sıfırdan büyük tüm değerler ve metinler true; boş, sıfır ve daha küçük değerler ile null ve undefined değerleri false veritipine dönüştürülür**
♻  Date(veri)   **Verinin Date(tarih) tipinin dönüştürülmesini sağlar**

#  Using HTML in JavaScript
◽   HTML içinde JavaScript, JavaScript içinde HTML kodu kullanılabilir.
◽   HTML kodu içinde JavaScript kodu yazmak için <script> etiketi kullanılır.
◽   JavaScript içinde HTML kodu "metin" olarak yazılır.
    🔵  var ad="Ahmet";
    🔵  document.write("merhaba <b>ad</b>");
    🔵  document.write("<br>");
    🔵  document.write("web sitemize hoş geldiniz!");

# Aritmetik Operatörler

+   Toplama     x=y+2;
-   Çıkarma     z=z-1;
*   Çarpma      c=a*b;
/   Bölme       x=a/b;
%   Mod(kalan)  m=k%3;

# Artırma ve azaltma operatörleri

C tabanlı dillerde ++ ve -- operatörleri oldukça fazla kullanılmaktadır ve iyi bilinmesinde fayda vardır.

++x:    Önce x'i 1 arttır, daha sonra x değişkenini yeni değeri ile kullan.
x++:    Önce x değerini kullan, işlemden sonra x değerini 1 artır.
--x:    Önce x'i 1 azalt, daha sonra x değişkenini yeni değeri ile kullan.
x--:    Önce x değerinin kullan, işlemden sonra x değerini 1 azalt.

```javascript
var a = 2;
document.write(a++);        // önce a değişkenini yazar sonra a değişkenine +1 ekler.
document.write("<br>");     // br etkiketi ile bir alt satıra geçer.
document.write(a);          // a değişkenine eklenmiş son halini yazar.

document.write(++a);        // önce a değişkenine +1 ekler sonra a değişkenini yazar
document.write("<br>");     // br etkiketi ile bir alt satıra geçer.
document.write(a);          // a değişkeninin son halini yazar.

document.write(a--);        // önce a değişkenini yazar sonra a değişkenine -1.
document.write("<br>");     // br etkiketi ile bir alt satıra geçer.
document.write(a);          // a değişkeninin son halini yazar.

document.write(--a);        // önce a değişkenine -1 yapar sonra a değişkenini yazar
document.write("<br>");     // br etkiketi ile bir alt satıra geçer.
document.write(a);          // a değişkeninin son halini yazar.
```

# Eşitlik ve İlişki Operatörleri

İki değerin birbiriyle eşit olup olmadığını veya büyük olup olmadığını ölçmek için kullanılan operatörlerdir.
Sorgu ifadelerinde veya döngülerde sıklıkla kullanılırlar.


``` 
==      Eşit            x==y
!=      Eşit Değil      a!=b
>       Büyük           a>b
<       Küçük           b<c
>=      Büyük Eşit      d>=k
<=      Küçük Eşit      k<=z      
```

# Atama Operatörleri

Atama operatörleri, atama işlemini yapmak kolaylaştırmak için kullanılan operatörlerdir. Örneğin x=x+1 yerine x+=1 gibi bir operatör kullanılabilir.

``` 
=       x=y     Atama
+=      x+=y    x=x+y
-=      x-=y    x=x-y
*=      x*
/=
%=
```

# Operatör Öncelik Sırası
- Eğer aynı ifade içinde birden fazla operatör kullanılırsa operatörlerin öncelik sırasına dikkat etmek gerekiyor; önceliği olan operatör işlemini daha önce yapmalıyız.

1- ()
2- x++, x--
3- ++y, --y
4- *, /,  %
5- +, -
6- <<, >>
7- <, >, <=, >=
8- ==, !=
9- &
10- ^
11- |
12- &&
13- ||

# If Komutu

Bilgisayarların en çok yaptığı işlerden biri farklı durumlarda farklı kodlar çalıştırmaktır.
Örneğin saat 12 olduysa alarm çalışsın.

- If komutu iki farklı şekilde kullanılabilir. Eğer şart gerçekleştiğinde tek bir komut çalıştırılacaksa if komutunun kalıbı aşağıdaki gibi yazılır:
    if (şart)
    komut;

- Eğer şart gerçekleştiğinde birden fazla komut çalıştırılacaksa if komutu aşağıdaki gibi yazılmalıdır:
    if (şart){
        komut1;
        komut2;
    }

