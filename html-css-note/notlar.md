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