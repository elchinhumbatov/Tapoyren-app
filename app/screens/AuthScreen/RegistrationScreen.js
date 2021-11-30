import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Input, Button, CheckBox, Overlay } from "react-native-elements";
import colors from "../../config/colors";

const RegistrationScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [agree, setAgree] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignUp = () => {
    return;
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View>
        <Input
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
          leftIcon={{ type: "ionicon", name: "person", color: "gray" }}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          leftIcon={{ type: "ionicon", name: "mail", color: "gray" }}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          leftIcon={{ type: "ionicon", name: "lock-closed", color: "gray" }}
          secureTextEntry
        />
        <Input
          placeholder="Confirm Password"
          value={password2}
          onChangeText={setPassword2}
          leftIcon={{ type: "ionicon", name: "lock-closed", color: "gray" }}
          secureTextEntry
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            title="Agree with"
            checked={agree}
            textStyle={{ fontWeight: "500", fontSize: 16 }}
            containerStyle={{
              backgroundColor: null,
              padding: 0,
              marginRight: 0,
            }}
            onPress={() => setAgree((prev) => !prev)}
          />
          <Pressable onPress={() => setModalVisible(true)}>
            <Text style={styles.terms}>Terms & Conditions</Text>
          </Pressable>
        </View>
        <Button
          title="Sign Up"
          buttonStyle={{ backgroundColor: colors.primary, marginTop: 15 }}
          onPress={handleSignUp}
        />

        {/* ------ terms modal ------ */}

        <Overlay
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          overlayStyle={{ width: "95%", maxHeight: "70%" }}
        >
          <ScrollView>
            <Text>
              Hazırki İstifadə Şərtləri ("Şərtlər") 10 mart, 2020-ci ildə
              hazırlanmışdır. “ALISHOVS EDUCATION” MMC-nin (bundan sonra
              “TapÖyrən” adlandırılacaq) missiyası TapÖyrən veb platformasında
              istifadəçilərin öyrənmələrini təmin etməklə onların həyatını
              yaxşılaşdırmaqdır. Biz təlimatçılara kursların hazırlanması ilə
              şirkətlə əməkdaşlıq etməyə və istifadəçilərə (tələbələrə) bu
              təhsil kurslarında öyrənmək üçün qeydiyyatdan keçməyə imkan
              yaradırıq. Biz istifadəçilərə dəyərli təhsil məzmununu təqdim
              etmək üçün öz bazar modelimizi ən səmərəli üsul hesab edirik.
              Sizin, özümüzün, tələbələrimiz və təlimatçı komandamız üçün
              hazırlanmış olan bu platformanın və xidmətlərimizin
              təhlükəsizliyinin qorunub saxlanılmasında ,əlbəttə ki, müəyyən
              qaydalar lazımdır. Hazırki Şərtlər TapÖyrən veb səhifəsində,
              API-larımızda və digər əlaqəli xidmətlərdə (bundan sonra
              “Xidmətlər” adlandırılacaq) sizin bütün fəaliyyətlərinizə şamil
              ediləcək. 1. Hesablar Platformamızdakı bir çox fəaliyyətlər üçün
              sizin hesabınız olmalıdır. Şifrənizi etibarlı yerdə saxlayın,
              çünki hesabınızla bağlı bütün əməliyyatlar üçün siz məsuliyyət
              daşıyırsınız. Şifrənizin digər şəxs tərəfindən istifadə
              olunmasından şübhələndikdə, dərhal bizim Dəstək Komandamızla əlaqə
              saxlayın. Platformamızdakı bir çox fəaliyyətlər, o cümlədən, kursu
              almaq və qeydiyyatdan keçmək üçün sizin hesabınız olmalıdır.
              Hesabınızı yaradarkən e-poçt ünvanınız da daxil olmaqla, özünüz
              haqqında məlumatları tam və düzgün daxil etməlisiniz. Hesabınıza,
              hesabınızla apardığınız bütün əməliyyatlara, eləcə də sizin
              icazəniz olmadan hesabınızdan istifadə etməklə digər şəxsin
              vurduğu hər hansı zərərə görə (bizə və ya hər hansı şəxsə) siz tam
              məsuliyyət daşıyırsınız. Bu o deməkdir ki, siz şifrənizlə
              ehtiyatlı olmalısınız. Siz hesabınızı başqasına verə və ya
              başqasının hesabından istifadə edə bilməzsiniz. Siz hesabınıza
              daxil olmaq üçün bizə müraciət etdikdə, bu hesab üçün təsdiqləyici
              giriş məlumatları təqdim etməyincə, biz sizi bu cür giriş imkanı
              ilə təmin edə bilmərik. İstifadəçi vəfat etdiyi təqdirdə, həmin
              istifadəçinin hesabı bağlanacaq. Əgər siz hesabınızın giriş
              məlumatlarını başqası ilə paylaşsanız, hesabınızla bağlı baş verən
              hallara görə siz məsuliyyət daşıyırsınız və “TapÖyrən”hesablarının
              giriş məlumatlarını paylaşan tələbələr və ya təlimatçılar arasında
              yaranan mübahisələrə müdaxilə etməyəcək. Hesabınızın digər şəxs
              tərəfindən istifadə olunduğunu öyrəndikdə (və ya hər hansı
              təhlükəsizliyin pozulmasından şübhələndikdə), dərhal bizim Dəstək
              Komandamıza məlumat verin. Biz hesabınızın həqiqi sahibi
              olduğunuzu təsdiqləməyiniz üçün sizdən bəzi məlumatlar tələb edə
              bilərik. 2. Kursa qeydiyyat və istifadə müddəti Kursdan
              qeydiyyatdan keçərkən kursu TapÖyrənXidmətləri vasitəsilə
              görüntüləmək və onu başqa məqsədlər üçün istifadə etməmək üçün
              sizə tərəfimizdən lisenziya təqdim olunur. Kursları hər hansı bir
              yolla başqasına ötürə və ya təkrar sata bilməzsiniz. Kursun
              qeydiyyat səhifəsində sizin seçdiyiniz paketin növündən asılı
              olaraq biz sizə müəyyən müddət üçün giriş lisenziyası veririk
              (hüquqi və ya siyasi səbəblərdən tərəfimizdən hesabınızın
              dayandırılması halları istisna olmaqla). Bizim Təlimatçı
              Müqaviləmizə əsasən, tapoyren.com saytındakı bütün kursların
              mülkiyyət hüquqları TapÖyrən-ə məxsusdur və şirkət tələbələri
              paketdə seçilmiş müddət üçün kursa giriş lisenziyası ilə təmin edə
              bilər. Bir tələbə kimi, siz qeydiyyatdan keçərkən ödənişsiz və ya
              ödənişli olmasından asılı olmayaraq, kursu TapÖyrən platforması və
              Xidmətləri vasitəsilə görüntüləmək üçün TapÖyrən-dən lisenziya
              alırsınız. Kurslar lisenziyalaşdırılır, sizə satılmır. Bu
              lisenziya sizə istənilən yolla kursu təkrar satmaq hüququ vermir
              (alıcı ilə hesab məlumatlarının paylaşılması və ya qanunsuz
              şəkildə kurs materiallarının endirilməsi və torrent səhifələrdə və
              ya hər hansı səhifədə paylaşılması daxil olmaqla). Hüquqi dillə
              desək, bu Şərtlərə və xüsusi kurslarla və ya Xidmətlərimizin
              imkanları ilə əlaqədar hər hansı şərtlərə və ya məhdudiyyətlərə
              əsasən, Xidmətlər vasitəsilə təkcə sizin şəxsi, qeyri-kommersial,
              təhsil məqsədləriniz üçün bütün lazımi xərcləri ödədiyiniz
              kurslara və əlaqəli məzmuna giriş əldə etmək və onları
              görüntüləmək üçün TapÖyrən sizə (bir tələbə kimi)
              məhdudlaşdırılmış, qeyri-ekskluziv, köçürülməyən lisenziya verir.
              Digər məqsədlər üçün istifadəsi açıq şəkildə qadağandır. Sizə
              TapÖyrən-in səlahiyyətli nümayəndəsi tərəfindən imzalanmış yazılı
              razılaşmada açıq icazə verilmədikcə, siz kursları təkrar
              hazırlaya, təkrar paylaşa, göndərə, təyin edə, sata, yayımlaya,
              icarəyə verə, paylaya, dəyişdirə, uyğunlaşdıra, redaktə edə,
              kursdan törəmə məhsullar hazırlaya, kursa sub-lisenziya verə və ya
              kursu digər məqsədlər üçün ötürə və ya kursdan digər məqsədlər
              üçün istifadə edə bilməzsiniz. Bu, həmçinin bizim API-larımız
              vasitəsilə giriş imkanı əldə edə biləcəyiniz məzmuna da şamil
              edilir. Biz ümumiyyətlə tələbələrimiz kurs üçün qeydiyyatdan
              keçərkən onlara müddətli giriş lisenziyası veririk. Bu müddət siz
              kursdan qeydiyyatdan keçdikdə seçmiş olduğunuz paketə görə müəyyən
              edilir. Bununla birlikdə, bizim qanuni və ya siyasi səbəblərdən
              kursa girişi dayandırmaq qərarına gəldiyimiz və ya dayandırmağa
              məcbur olduğumuz hallarda, məsələn, əgər qeydiyyatdan keçdiyiniz
              kurs müəlliflik hüququna dair şikayət obyektidirsə və ya
              tərəfimizdən kursun məzmununun Etimad və Təhlükəsizlik
              Təlimatlarını pozduğu müəyyən edilərsə, istənilən vaxt kurslara
              daxil olmaq və kursdan istifadə etmək üçün lisenziyanı ləğv etmək
              hüququmuz var. 3. Ödəmələr, kreditlər və geri ödənişlər Siz ödəniş
              edərkən etibarlı ödəmə metodundan istifadə etməyə razılaşırsınız.
              Əgər kursdan məmnun qalmasanız, şirkət sizə geri ödəniş və ya
              kredit üçün paket üzrə müəyyən bir müddət təklif edir. 3.1.
              Paketlər Qiymətlər, şərtlər və xidmətlər qeydiyyat səhifəsində
              şirkət tərəfindən təmin edilən paketlərin içərisində müəyyən
              edilir. Biz kurslarımız üçün mütəmadi olaraq, kampaniyalar və
              endirimlər edirik və bəzi kurslar endirimli qiymətlərlə yalnız
              müəyyən müddət üçün mövcuddur. Kurs üçün tətbiq olunan qiymət
              sizin kursu aldığınız zaman ödədiyiniz qiymət olacaq. Siz
              hesabınıza daxil olarkən müəyyən bir kurs üçün təklif olunan hər
              hansı bir qiymət qeydiyyatdan keçməyən və ya hesabına daxil
              olmayan istifadəçilərə mövcud olan qiymətdən fərqli ola bilər,
              çünki bizim bəzi kampaniyalarımızyalnız yeni istifadəçilər üçün
              mövcuddur. Əgər siz istifadə və satış vergisinin, mal və xidmət
              vergisinin və ya ƏDV-nin istehlak satışına tətbiq olunduğu ölkədə
              yaşayırsınızsa, biz tranzaksiya ölkəsində bu cür vergini vergi
              orqanlarına toplamaq və göndərmək üçün məsuliyyət daşımırıq.
              Müəyyən ölkələrdə gördüyünüz qiymətə bu cür vergilər daxil ola
              bilər. 3.2. Ödəmələr Siz satın aldığınız kurslar üçün ödəniş
              etməyə razılaşır və bu ödənişlər üçün bizə sizin debit və ya
              kredit kartınızdan ödənişləri tutmağa və ya digər ödəmə
              vasitələrini emal etməyə icazə verirsiniz. Şirkət ölkənizdə sizə
              ən rahat ödəmə metodlarını təklif etmək və sizin ödəniş
              məlumatlarınızı təhlükəsiz saxlamaq üçün üçüncü tərəf ödəniş emalı
              tərəfdaşları ilə işləyir. Siz kursu aldığınız zaman yanlış və ya
              qeyri-qanuni ödəmə metodundan istifadə etməyəcəyinizə
              razılaşırsınız. Əgər ödəmə metodunuz baş tutmasa və sizin hələ də
              qeydiyyatdan keçdiyiniz kursa giriş imkanınız varsa, siz bizdən
              bildiriş verildikdən on dörd (14) gün ərzində müvafiq ödənişləri
              bizə ödəməyə razılaşırsınız. Bizim müvafiq ödənişləri almadığımız
              hər hansı kursa girişi ləğv etmək hüququmuz var. Bəzi hallarda
              sizin hesabınıza balans kreditləri verə bilərik. Bu kreditlər
              avtomatik olaraq bizim veb səhifəmizdə sizin növbəti alacağınız
              kursa tətbiq ediləcək, lakin mobil tətbiqetməmizdə olan alışlar
              üçün istifadə oluna bilməz. Müəyyən müddət ərzində istifadə
              olunmasa, kreditlərin vaxtı bitir və onun pul dəyəri yoxdur. 3.3.
              Geri ödənişlər və kreditlər Əgər aldığınız kurs gözləntilərinizə
              cavab verməsə, seçdiyiniz kursun paketində müəyyən edilən müddət
              ərzində siz TapÖyrən-dən krediti/ödənişi hesabınıza geri tələb edə
              bilərsiniz. Bizim ödənişin emalı tərəfdaşlarımızdan və ya kursu
              aldığınız platformadan (veb səhifə, mobil telefon və ya TV
              tətbiqetməsi) asılı olaraq, öz istəyimizlə krediti və ya ödənişi
              tətbiq etmək hüququmuz var. Əgər siz tələbi seçdiyiniz paketin
              içərisində göstərilən müəyyən müddət bitdikdən sonra etmisinizsə,
              kredit və ya ödəniş sizə qaytarılmır. Krediti və ya ödənişi tələb
              etmək üçün TapÖyrən ilə əlaqə saxlayın. Əgər biz sizin kredit və
              ya geri ödəniş siyasətimizdən sui-istifadə etdiyinizi bilsək,
              bizim öz istəyimizlə, hesabınıza qadağa qoymaq və sizin
              Xidmətlərdən gələcəkdə istifadənizi məhdudlaşdırmaq hüququmuz var.
              Əgər bu Etimad və Təhlükəsizlik Təlimatlarını pozduğunuza görə
              sizin kursa girşinizə qadağa qoysaq və ya məhdudlaşdırsaq, siz hər
              hansı krediti və ya ödənişi ala bilməyəcəksiniz. 4. Məzmun və
              davranış qaydaları Siz TapÖyrən-i yalnız hüquqi məqsədlər üçün
              istifadə edə bilərsiniz. Bizim platformamızda dərc etdiyiniz bütün
              məzmunlara görə siz məsuliyyət daşıyırsınız. Siz rəyləri,
              sualları, postları və yüklədiyiniz digər məzmunları qanuna uyğun
              olaraq saxlamalı və başqalarının əqli mülkiyyət hüquqlarına hörmət
              etməlisiniz. Təkrarladığınız və ya böyük qanun pozuntularına görə
              biz sizin hesabınıza qadağa qoya bilərik. Əgər platformamızda
              kiminsə sizin müəlliflik hüququnuzu pozduğunu düşünürsünüzsə, bizə
              məlumat verin. Siz qeyri-qanuni məqsədlər üçün Xidmətlərə giriş
              əldə edə və ya onları istifadə edə və ya hesab yarada bilməzsiniz.
              Sizin Xidmətlərdən istifadəniz və bizim platformamızdakı
              davranışınız yerli və ya milli qanunlara və ya ölkəmizin
              qaydalarına uyğun gəlməlidir. Sizə tətbiq olunan bu cür qanun və
              qaydaları bilmək və onlara əməl etmək üçün yalnız siz məsuliyyət
              daşıyırsınız. Əgər tələbəsinizsə, Xidmətlər sizə qeydiyyatdan
              keçdiyiniz kursların təlimatçılarına sual vermək və kursla bağlı
              rəyləri dərc etmək imkanı yaradır. Müəyyən kurslar üçün təlimatçı
              sizi “ev tapşırığı” və ya testlər kimi məzmunu təqdim etməyə dəvət
              edir. Sizə məxsus olmayan heç bir şeyi dərc etməyin və
              göndərməyin. Əgər sizin məzmununuzun başqalarının qanun və ya
              hüquqlarını pozması barədə bizə məlumat verilərsə (məsələn,
              məzmununuzun başqalarının əqli mülkiyyətini və ya ictimai
              hüquqlarını pozduğu və ya qeyri-qanuni olduğu məlum olarsa) və ya
              əgər biz sizin məzmununuzun və ya davranışınızın başqa
              istifadəçilərin hüquqlarını pozduğunu öyrənsək və ya əgər biz
              sizin məzmununuzun və ya davranışınızın qeyri-qanuni, uyğunsuz və
              ya xoşagəlməz olduğunu güman etsək (məsələn, siz başqasını təqlid
              etsəniz), biz sizin məzmununuzu platformamızdan silə bilərik.
              Şirkət müəlliflik hüquqlarına riayət edir. Şirkətin bu Şərtləri və
              bizim Etimad və Təhlükəsizlik Təlimatlarımızı tətbiq etmək hüququ
              var. Biz istənilən vaxt xəbərdarlıq edərək və ya etməyərək bu
              Şərtlərin pozulmasına görə, sizin ödənişləri vaxtında ödəyə
              bilməmənizə görə, hüquq-mühafizə orqanlarının və ya dövlət
              orqanlarının tələbi ilə, uzun müddətli hərəkətsizliyə və ya
              gözlənilməz texniki məsələlərə və ya problemlərə görə və ya biz
              sizin saxta və ya qeyri-qanuni fəaliyyətlə məşğul olduğunuzdan
              şübhələndikdə, sizin platformamızdan və Xidmətlərimizdən istifadə
              etmək üçün icazənizi ləğv edə və ya dayandıra və ya hesabınıza
              qadağa qoya bilərik. Bu cür dayandırmadan sonra biz sizin
              hesabınızı və məzmununuzu silə və sizin platformamıza daxil
              olmağınızın və Xidmətlərimizdən istifadə etməyinizin qarşısını ala
              bilərik. Hesabınız ləğv olunduqda və ya dayandırıldıqda belə,
              sizin məzmununuz hələ də platformalarda mövcud ola bilər. Siz
              razılaşırsınız ki, biz hesabınızın ləğv olunmasına, məzmununuzun
              silinməsinə və ya bizim platforma və Xidmətlərimizə girişinizin
              bloklanmasına görə sizin və ya üçüncü tərəfin qarşısında
              məsuliyyət daşımırıq. Əgər təlimatçılarımızdan biri sizin
              müəlliflik hüququnuzu və ya ticarət nişanı hüququnuzu pozacaq hər
              hansı bir kursu yayımlasa, bizə məlumat verin. 5. TapÖyrən-dən öz
              riskinizlə istifadə TapÖyrən-dən hər kəs istifadə edə bilər və biz
              öyrətmək və öyrənmək üçün təlimatçılara və tələbələrə qarşılıqlı
              əlaqə yaratmağa imkan veririk. İnsanların məzmunu dərc etdikləri
              və qarşılıqlı əlaqə yaratdıqları digər platformalarda olduğu kimi
              burada da bəzi məqamlarda xəta ola bilər. Siz TapÖyrən-dən öz
              riskinizlə istifadə edirsiniz. Tələbə və ya təlimatçı ilə birbaşa
              qarşılıqlı əlaqədə olarkən, paylaşdığınız şəxsi məlumatın növü ilə
              ehtiyatlı olmalısınız. Biz tələbə və təlimatçıların platformada
              başqa istifadəçilərdən əldə etdiyi məlumatlarla nə etdiklərinə
              nəzarət etmirik. Təhlükəsizliyiniz üçün e-poçt və ya digər şəxsi
              məlumatlarınızı paylaşmamalısınız. Biz təlimatçıları işə
              götürmürük və təlimatçı və tələbə arasında baş verən hər hansı
              qarşılıqlı əlaqəyə görə də məsuliyyət daşımırıq. Biz təlimatçı və
              tələbələrin davranışlarından yaranan və ya davranışları ilə
              əlaqəli mübahisələrə, iddialara, itkilərə, xəsarətlərə və ya
              zərərlərə görə cavabdeh deyilik. Siz bizim Xidmətlərimizdən
              istifadə edərkən, bizə məxsus olmayan və ya bizim idarə
              etmədiyimiz digər veb səhifələrin keçidlərini görə bilərsiniz. Biz
              həmin üçüncü tərəf saytların məzmununa və ya digər
              xüsusiyyətlərinə görə, eləcə də, onların sizin haqqınızda bilgilər
              toplamasına görə cavabdeh deyilik. Siz, həmçinin onların da
              şərtlərini və məxfilik siyasətini oxumalısınız. 6. TapÖyrən-nin
              hüquqları Biz TapÖyrən-nin platformasına və Xidmətlərə, həmçinin
              veb səhifəyə, indiki və gələcək tətbiqetmələrə və xidmətlərə,
              loqoya, API-ya, koda və işçilərimiz tərəfindən yaradılan
              məzmunlara sahibik. Siz bunları saxtalaşdıra və ya icazəsiz
              istifadə edə bilməzsiniz. Veb səhifəmiz, indiki və gələcək
              tətbiqetmələrimiz, API-larımız, məlumat bazalarımız və
              işçilərimizin və ya tərəfdaşlarımızın Xidmətlərimiz vasitəsilə
              təqdim və ya təmin etdiyi məzmunlar daxil olmaqla (lakin
              təlimatçılar və tələbələr tərəfindən təmin edilən məzmunlar
              istisna olmaqla) TapÖyrən platformasına və Xidmətlərə aid bütün
              hüquqlar, vəzifələr və maraqlar TapÖyrən-nin və onun
              lisenziarlarının müstəsna mülkiyyətidir və belə də qalacaq. Bizim
              platforma və xidmətlərimiz müəlliflik hüququ, ticarət nişanları və
              həm Azərbaycan Respublikasının, həm də xarici dövlətlərin
              qanunları ilə qorunur. Heç nə sizə TapÖyrən-nin adından və ya
              TapÖyrən-nin ticarət nişanlarından, loqolarından, domen adlarından
              və digər fərqləndirici brend xüsusiyyətlərindən istifadə etmək
              hüququ vermir. TapÖyrən və Xidmətlərlə bağlı verə biləcəyiniz hər
              hansı irad, rəy və ya təkliflər tamamilə könüllüdür və biz sizin
              üçün uyğun gördüyümüz və sizə heç bir öhdəlik qoymadan bu cür
              iradları, rəyləri və ya təklifləri istifadə edə bilərik. Siz
              TapÖyrən platformasına və Xidmətlərə daxil olarkən və bunlardan
              istifadə edərkən aşağıdakıları edə bilməzsiniz: Platformanın
              qeyri-ictimai sahələrinə, TapÖyrən-nin kompüter sistemlərinə və ya
              TapÖyrən-nin xidmət təminatçılarının texniki çatdırılma
              sistemlərinə daxil olmaq, onları saxtalaşdırmaq və ya onlardan
              istifadə etmək; Təhlükəsizliyə aid platformaların hər hansı
              xüsusiyyətlərini sıradan çıxartmaq, müdaxilə etmək və ya pozmağa
              çalışmaq və ya bizim hər hansı sistemimizin həssaslığını yoxlamaq,
              skan etmək və ya sınaqdan keçirmək; TapÖyrən platformasının və
              Xidmətlərin mənbə kodunu və ya məzmununu nüsxələmək, dəyişdirmək,
              bunlardan törəmə məhsul hazırlamaq, geri layihələndirmək,
              hissələrə ayırmaq və ya araşdırmağa çalışmaq; Bizim veb səhifəmiz,
              mobil tətbiqetmələrimiz və API-larımız vasitəsilə (yalnız API
              şərtlərinə uyğun olaraq) təmin olunan hazırki mövcud axtarış
              parametrlərimizdən başqa digər vasitələrlə (avtomatlaşdırılmış və
              ya digər) platformamıza daxil olmaq və platformamızı araşdırmaq və
              ya buna cəhd etmək; Xidmətlərə daxil olmaq üçün veb səhifələrdən
              məlumatları nüsxələyə (scraping), qlobal axtarış modulundan
              (spider), robotdan və ya digər avtomatlaşdırılmış vasitələrdən
              istifadə edə bilməzsiniz. Dəyişdirilmiş, aldadıcı və ya yanlış
              mənbəni göstərən məlumatları göndərmək üçün hər hansı bir şəkildə
              Xidmətlərdən istifadə etmək (məsələn, yanlışlıqla TapÖyrən-nin
              adından e-poçt yazışmalarını göndərmək) və ya Xidmətlərə mane
              olacaq və ya Xidmətləri hədsiz yükləyəcəyi şəkildə hər hansı
              istifadəçinin, hostun və ya şəbəkənin girişinə müdaxilə etmək və
              ya giriş imkanını pozmaq (və ya buna cəhd etmək), eləcə də,
              platforma və ya xidmətlərə virus göndərmək, onları həddindən artıq
              yükləmək, “flooding”, spam məktublar və ya külli-miqdarda e-məktub
              göndərmək (e-məktub bombardmanı) və s. 7. Müxtəlif hüquqi şərtlər
              Bu Şərtlər istənilən digər müqavilə kimidir və bu Şərtlərin bizi
              baş verə biləcək saysız hadisələrdən qoruyan və bizimlə sizin
              aranızda hüquqi münasibətlərə aydınlıq gətirən vacib hüquqi
              aspektləri var. 7.1. İcbari müqavilə Xidmətlərimiz üçün
              qeydiyyatdan keçərək, giriş imkanı əldə edərək və ya Xidmətlərdən
              istifadə edərək siz TapÖyrən ilə hüquqi icbari müqavilə bağlamağa
              razılıq verirsiniz. Əgər bu Şərtlərlə razılaşmasanız,
              Xidmətlərimiz üçün qeydiyyatdan keçməyin, Xidmətlərə daxil olmayın
              və ya Xidmətlərdən istifadə etməyin. Bu Şərtlərin Azərbaycan
              dilindən başqa, digər dildə də nüsxəsi təmin edilir və siz başa
              düşür və razılaşırsınız ki, bu nüsxələr arasında ziddiyyət
              yaranarsa, Azərbaycan dilində olan nüsxəyə üstünlük veriləcək. Bu
              Şərtlər (bu Şərtlərlə əlaqəli hər hansı müqavilə və siyasət daxil
              olmaqla) sizinlə bizim aramızda tam müqaviləni təşkil edir. Bu
              Şərtlərin hər hansı bir hissəsi müvafiq qanunla etibarsız və ya
              qeyri-qanuni hesab edilərsə, o zaman bu müddəa orijinal müddəanın
              niyyətinə daha çox uyğun gələn etibarlı və qüvvədə olan başqa bir
              müddəa ilə əvəz ediləcək və bu Şərtlərin qalan hissəsi qüvvədə
              qalmaqda davam edəcək. Biz öz hüquqlarımızı tətbiq etməkdə
              geciksək və ya müəyyən situasiyada bir hüququmuzu tətbiq edə
              bilməsək, bu, bizim bu Şərtlər əsasında hüquqlarımızdan imtina
              etdiyimiz anlamına gəlmir və biz bu hüquqları gələcəkdə tətbiq
              edəcəyik. Əgər biz müəyyən bir halda hər hansı hüququmuzdan imtina
              etməyi qərara alsaq, bu, bizim ümumilikdə və ya gələcəkdə
              hüquqlarımızdan imtina etdiyimiz anlamına gəlmir. Aşağıdakı
              bölmələr bu Şərtlərin vaxtı bitdikdə və ya bu Şərtlərə xitam
              verildikdə belə, qüvvədə qalacaq: Bölmə 2 (Kursa qeydiyyat və
              istifadə müddəti), Bölmə 5 (TapÖyrən-dən öz riskinizlə istifadə),
              Bölmə 6 (TapÖyrən-in hüquqları), Bölmə 7 (Müxtəlif hüquqi
              şərtlər), Bölmə 8 (Tənzimləyici qanunlar və mübahisələrin həlli)
              və Bölmə 9 (Hazırki Şərtlərin yenilənməsi). 7.2. İmtina
              Platformamız planlaşdırılmış təmirə və ya saytda baş verən hər
              hansı problemə görə işləməyə və ya təlimatçılarımızdan biri kursda
              yanlış məlumat verə bilər və ya biz təhlükəsizlik problemləri ilə
              qarşılaşa bilərik. Bunlar sadəcə nümunələrdir. Siz bu kimi
              hallarla qarşılaşdıqda bizə qarşı hər hansı iddia
              qaldırmayacağınızı qəbul edirsiniz. Hüquqi dillə desək, Xidmətlər
              və onların məzmunu “olduğu kimi” və “mövcud olduğu kimi” təmin
              edilir. Biz (və bizim filiallarımız, təchizatçılarımız,
              tərəfdaşlarımız və nümayəndələrimiz) Xidmətlərin və onların
              məzmununun uyğunluğu, etibarlılığı, mövcudluğu, dəqiqliyi,
              təhlükəsizliyi, xətalarının olmaması və ya düzgünlüyü barədə
              təminat və ya zəmanət vermirik və açıq şəkildə zəmanətdən və ya
              şərtlərdən (ifadə edilən və ya nəzərdə tutulan), həmçinin
              kommersiya dəyərinin nəzərdə tutulmuş zəmanətindən, müvafiq
              məqsədə uyğunluqdan, titul və ya hüquqların pozulmamasından imtina
              edirik. Biz (və bizim filiallarımız, təchizatçılarımız,
              tərəfdaşlarımız və nümayəndələrimiz) sizin Xidmətlərdən istifadə
              etməklə müəyyən nəticələr əldə edəcəyinizə dair zəmanət vermirik.
              Sizin Xidmətlərdən (məzmun da daxil olmaqla) istifadə etməyiniz
              tamamilə öz riskinizdir. Bəzi yurisdiksiyalar nəzərdə tutulan
              zəmanətlərin istisna edilməsinə icazə vermədiyindən, yuxarıdakı
              istisnaların bəziləri sizə tətbiq olunmaya bilər. Biz Xidmətlərin
              müəyyən imkanlarının mövcudluğunu istənilən vaxt və istənilən
              səbəbdən dayndıra bilərik. Bu cür dayandırılmaların və ya bu cür
              imkanların mövcud olmamasının səbəb olduğu hər hansı zərərə görə
              TapÖyrən və ya onun filialları, təchizatçıları, tərəfdaşları və ya
              nümayəndələri heç bir halda məsuliyyət daşımır. Biz müharibə,
              hərbi əməliyyatlar və ya sabotaj, təbii fəlakətlər, elektrik,
              internet və ya telekommunikasiya kəsilmələri və ya hökumət
              məhdudiyyətləri kimi bizdən asılı olmayan hadisələrin səbəb olduğu
              Xidmətlərin yerinə yetirilməsinin gecikməsinə və ya yerinə
              yetirilməməsinə görə məsuliyyət daşımırıq. 7.3. Öhdəliyin
              məhdudlaşdırılması Xidmətlərimizdən istifadə edilməsi ilə bağlı
              bəzi risklər mövcuddur (məsələn, yoqa kimi sağlamlıq kursuna
              yazılmaq və özünə zərər vermək). Bizim platforma və
              Xidmətlərimizdən istifadə etməkdən zərər və ya ziyan görsəniz
              belə, siz bu riskləri tam qəbul edir və təzminat tələb etmək üçün
              müraciət etməyəcəyinizə dair razılıq verirsiniz. Hüquqi dillə
              desək, qanunla icazə verilən dərəcədə və hətta bizə zərərlərin
              mümkünlüyü barədə əvvəlcədən tövsiyə verilsə belə, biz (və bizim
              qrup şirkətlərimiz, təchizatçılarımız, tərəfdaşlarımız və
              nümayəndələrimiz) müqavilədən, zəmanətdən, qanun pozuntusundan,
              məhsul öhdəliyindən və ya digər səbəblərdən yaranan hər hansı
              dolayı, təsadüfi, cəzalandırıcı və ya ardıcıl itkilərə görə
              (məlumatların, gəlirlərin, mənfəətin və ya biznes imkanlarının
              itkisi və ya şəxsi zədələlər və ya ölüm halları daxil olmaqla)
              cavabdeh deyilik. İstənilən vəziyyətdə bizim sizin və ya hər hansı
              üçüncü tərəf qarşısındakı öhdəliyimiz (və bizim qrup
              şirkətlərimizin, təchizatçılarımızın, tərəfdaşlarımızın və
              nümayəndələrimizin hər birinin öhdəliyi) yüz dollardan (100$) daha
              çox məbləğlə və ya iddialarınıza səbəb olan hadisədən on iki (12)
              ay əvvəl bizə ödədiyiniz məbləğlə məhdudlaşır. 7.4. Təzminat Əgər
              bizə hüquqi çətinliklər yaradacaq tərzdə davransanız, biz sizə
              qarşı hüquqi tədbirlər görə bilərik. Siz (a) dərc etdiyiniz və ya
              göndərdiyiniz məzmundan, (b) Xidmətlərdən istifadə etməyinizdən,
              (c) bu Şərtləri pozmağınızdan və ya (d) üçüncü tərəfin hüquqlarını
              pozmağınızdan yaranan hər hansı üçüncü tərəf iddialardan,
              tələblərdən, itkilərdən, zərərlərdən və ya xərclərdən (müvafiq
              vəkil haqları daxil olmaqla) şirkəti, bizim qrup şirkətlərimizi və
              onların məsul şəxslərini, direktorlarını, təchizatçılarını,
              tərəfdaşlarını və nümayəndələrini müdafiə edəcəyinizə, zərərdən
              məsul tutmayacağınıza və təzminat ödəyəcəyinizə (əgər biz belə
              tələb etsək) razılıq verirsiniz. Sizin təzminat öhdəliyiniz bu
              Şərtlərin və sizin Xidmətlərdən istifadənizin ləğv edilməsinin
              qarşısını alacaq. 7.5. Hüquqi iddialar və bildirişlər Formasından
              asılı olmayaraq hazırki Müqavilədən irəli gələn və ya hazırki
              Müqavilə ilə əlaqəli heç bir hüquqi iddia, bu iddianın səbəbinin
              yaranmasından bir (1) il keçdikdən sonra hər hansı Tərəf
              tərəfindən təqdim oluna bilməz. Bununla bağlı verilən hər hansı
              bildiriş və ya məlumat yazılı formada olacaq və qeydə alınmış və
              ya təsdiqlənmiş poçtla və ya e-məktubla göndəriləcək (biz tərəfdən
              hesabınızla əlaqəli e-poçtunuza və ya siz tərəfdən
              notices@tapoyren.com ünvanına). 7.6. Bizim aramızdakı əlaqə Siz və
              biz aramızda heç bir birgə müəssisənin, tərəfdaşlığın,
              məşğuliyyətin, podratçının və ya nümayəndəliyin olmamasına
              razılaşırıq. 7.7. Şərtlərin təyin edilməməsi Siz bu Şərtləri (və
              ya bu Şərtlərin verdiyi hüquqları və lisenziyaları) təyin edə və
              ya ötürə bilməzsiniz. Məsələn, əgər siz hər hansı bir şirkətin
              işçisi kimi hesab açsanız, sizin hesabınız başqa bir işçiyə
              ötürülə bilməz. Biz bu Şərtləri (və ya bu Şərtlərin verdiyi
              hüquqları və lisenziyaları) başqa bir şirkətə və ya şəxsə heç bir
              məhdudiyyət olmadan təyin edə bilərik. Bu Şərtlərdə heç bir müddəa
              istənilən üçüncü tərəfə hüquq, fayda və ya qorunma vasitəsi
              vermir. Siz hesabınızın ötürülməyəcəyi və hesabınızla bağlı bütün
              hüquqların və bu Şərtlər əsasında digər hüquqların sizin
              vəfatınızdan sonra ləğv olunacağı ilə razılaşırsınız. 8.
              Tənzimləyici qanunlar və mübahisələrin həlli Qanunların ziddiyyət
              prinsiplərinə baxmayaraq, bu Şərtlər Azərbaycan Respublikasının
              qanunları ilə tənzimlənir. Mübahisə yarandığı təqdirdə bizim
              Dəstək Komandamız mübahisələrin həllində kömək edəcək. Bizim
              Dəstək Komandamız bir çox mübahisələri həll edə bilər. Buna görə
              rəsmi hüquqi prosedura başlamazdan əvvəl Dəstək Komandamıza
              müraciət edin. Əgər Dəstək Komandamız mübahisəni həll edə bilməsə,
              o zaman siz və biz Azərbaycan Respublikasının müstəsna
              yurisdiksiyasına və dövlət məhkəmələrinin ərazi yurisdiksiyasına
              müraciət etməyə razılaşırıq. 8.1. Dəyişikliklər Aşağıdakı
              “Şərtlərin yenilənməsi” bölməsinə baxmayaraq, siz bu Şərtlərə son
              dəyişiklikləri qəbul etdiyiniz tarixdən sonra şirkət
              “Mübahisələrin həlli” bölməsini dəyişərsə, yuxarıdakı “sonuncu
              yenilənmə” tarixini göstərərək siz bu cür dəyişikliyin qüvvəyə
              mindiyi 30 gün ərzində poçt və ya əllə təslim yolu ilə (kimə:
              “ALISHOVS EDUCATION” MMC, ünvan: Bakı şəhəri, Yasamal rayonu,
              Bəxtiyar Vahabzadə 5b (2ci mərtəbə) və ya hesabınızla əlaqəli
              e-poçt ünvanınızdan (kimə: notices@tapoyren.com) etiraz barədə
              şirkətə yazılı bildiriş göndərməklə bu cür dəyişiklikdən imtina
              edə bilərsiniz. Effektiv olması üçün bildirişdə sizin ad,
              soyadınız və ata adınız olmalı və sizin “Mübahisələrin həlli”
              bölməsinə olan etirazınızı açıq şəkildə göstərməlidir.
              Dəyişikliklərə etiraz etməklə razılaşırsınız ki, bu Şərtləri qəbul
              etdiyiniz son tarixdən etibarən siz “Mübahisələrin həlli”
              bölməsinin müddəalarına əsasən sizinlə TapÖyrən arasındakı
              mübahisələrin həlli üçün arbitraj məhkəməsinə müraciət
              edəcəksiniz. 9. Hazırki Şərtlərin yenilənməsi Biz zaman-zaman öz
              təcrübələrimizi müəyyənləşdirmək və ya yeni və ya fərqli
              təcrübələri əks etdirmək üçün (məsələn, biz yeni imkanları əlavə
              etdikdə) bu Şərtləri yeniləyə bilərik və TapÖyrən öz istəyi ilə
              hər an bu Şərtləri dəyişmək və ya bu Şərtlərə dəyişiklik etmək
              hüququna sahibdir. Əgər biz dəyişiklik etsək, sizdən yenilənmiş
              Şərtlərlə razılaşıb-razılaşmamağınız barədə soruşaraq sizə xəbər
              verəcəyik. Dəyişikliklər sizin qəbul etdiyiniz gündən qüvvəyə
              minəcək.
            </Text>
          </ScrollView>
        </Overlay>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  terms: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "tomato",
  },
});
