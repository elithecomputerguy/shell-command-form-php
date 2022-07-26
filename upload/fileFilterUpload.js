function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function loopLingua() {
		const five = new Array (
		'Determine friendliness of the User Input without any background Security and Safety Processes.',
		'在没有任何后台安全和安全流程的情况下确定用户输入的友好性。',
		'배경 보안 및 안전 프로세스 없이 사용자 입력의 친화성을 결정합니다.',
		'बिना किसी पृष्ठभूमि सुरक्षा और सुरक्षा प्रक्रियाओं के उपयोगकर्ता इनपुट की मित्रता का निर्धारण करें।',
		'バックグラウンドのセキュリティおよび安全プロセスなしで、ユーザー入力の親しみやすさを判断します。',
		'Herhangi bir arka plan Güvenlik ve Güvenlik Süreci olmaksızın Kullanıcı Girişinin kolaylığını belirleyin.',
		'Determinare l&apos;amichevolezza dell&apos;input dell&apos;utente senza alcun processo di sicurezza e protezione in background.'
		);
		const six = new Array (
		'Command&#44; Shell Command',
		'命令，命令',
		'명령&#44; 쉘 명령',
		'कमांड, शेल कमांड',
		'コマンド、シェルコマンド',
		'Komut&#44; Kabuk Komutu',
		'Comando&#44; comando Shell'
		);
		const seven = new Array (
		'elithecomputerguy',
		'计算机精英',
		'엘리트 컴퓨터가이',
		'इलीथकंप्यूटर गाइ',
		'elithecomputerguy',
		'elit bilgisayarcı',
		'elithecomputerguy'
		);
		const eight = new Array (
		'Command',
		'命令',
		'명령',
		'आज्ञा',
		'指示',
		'Emretmek',
		'Comando'
		);
		const ten = new Array (
		'Elithecomputerguy presents the Executable Command in the Server Command Shell.',
		'计算机精英 在服务器命令外壳中显示可执行命令。',
		'엘리트 컴퓨터가이 는 서버 명령 셸에서 실행 가능한 명령을 제공합니다.',
		'इलीथकंप्यूटर गाइ सर्वर कमांड शेल में निष्पादन योग्य कमांड प्रस्तुत करता है।',
		'Elithecomputerguyは、サーバーコマンドシェルに実行可能コマンドを表示します。',
		'Elithecomputerguy&#44; Sunucu Komut Kabuğunda Yürütülebilir Komutu sunar.',
		'Elithecomputerguy presenta il comando eseguibile nella shell dei comandi del server.'
		);
		const twentyfour = new Array (
		'Upload',
		'上传',
		'업로드',
		'डालना',
		'アップロード',
		'Yüklemek',
		'Caricamento'
		);
		const fourtyseven = new Array (
		'English',
		'英语',
		'영어',
		'अंग्रेज़ी',
		'英語',
		'ingilizce',
		'inglese'
		);
		const fourtyeight = new Array (
		'Chinese',
		'中国人',
		'중국인',
		'चीनी',
		'中国語',
		'Çince',
		'Cinese'
		);
		const fourtynine = new Array (
		'Korean',
		'韩国人',
		'한국인',
		'कोरियाई',
		'韓国語',
		'Koreli',
		'coreano'
		);
		const fifty = new Array (
		'Hindi',
		'印地语',
		'힌 디 어',
		'हिन्दी',
		'ヒンディー語',
		'Hintçe',
		'hindi'
		);
		const fiftyone = new Array (
		'Japanese',
		'日本人',
		'일본어',
		'जापानी',
		'日本',
		'Japonca',
		'giapponese'
		);
		const fiftytwo = new Array (
		'Turkish',
		'土耳其',
		'터키어',
		'तुर्की',
		'トルコ語',
		'Türk',
		'Turco'
		);
		const fiftythree = new Array (
		'Italian',
		'意大利语',
		'이탈리아 사람',
		'इतालवी',
		'イタリアの',
		'İtalyan',
		'Italiano'
		);
		const fiftyfive = new Array (
		'Load the File into the System',
		'将文件加载到系统中',
		'시스템에 파일 로드',
		'फाइल को सिस्टम में लोड करें',
		'ファイルをシステムにロードします',
		'Dosyayı Sisteme Yükleyin',
		'Carica il file nel sistema'
		);
		const fiftysevenitwo = new Array (
		'Select a file to upload',
		'选择要上传的文件',
		'업로드할 파일 선택',
		'अपलोड करने के लिए फ़ाइल का चयन करें',
		'アップロードするファイルを選択してください',
		'Yüklemek için bir dosya seçin',
		'Seleziona un file da caricare'
		);		
		const fiftysevenithree = new Array (
		'Load',
		'加载',
		'짐',
		'भार',
		'ロード',
		'Yük',
		'Carico'
		);
		const fiftyeightithirteen = new Array (
		'The file already exists',
		'文件已经存在',
		'파일이 이미 있습니다.',
		'फ़ाइल पहले से मौजूद है',
		'ファイルはすでに存在します',
		'file zaten var',
		'Il file esiste già'
		);
		const fiftyeightieighteen = new Array (
		'File is over 50kB in size',
		'文件已经存在',
		'파일 크기가 50kB를 초과합니다.',
		'फ़ाइल का आकार 50kB से अधिक है',
		'ファイルのサイズが50kBを超えています',
		'file boyutu 50 kB&apos;nin üzerinde',
		'La dimensione del file è superiore a 50 kB'
		);
		const fiftyeightitwentythree = new Array (
		'File Type is not Allowed (Upload jpeg&#44; jpg&#44; gif&#44; png)',
		'文件类型不允许（上传 jpeg、jpg、gif、png）',
		'허용되지 않는 파일 형식(jpeg&#44; jpg&#44; gif&#44; png 업로드)',
		'फ़ाइल प्रकार की अनुमति नहीं है (jpeg&#44; jpg&#44; gif&#44; png अपलोड करें)',
		'ファイルタイプは許可されていません（jpeg、jpg、gif、pngをアップロード）',
		'file Türüne İzin Verilmiyor (Jpeg&#44; jpg&#44; gif&#44; png yükleyin)',
		'Il tipo di file non è consentito (Carica jpeg&#44; jpg&#44; gif&#44; png)'
		);
		const fiftyeightithirtynine = new Array (
		'File Mime Type is not Allowed',
		'不允许文件 Mime 类型',
		'파일 MIME 유형이 허용되지 않습니다.',
		'फ़ाइल माइम प्रकार की अनुमति नहीं है',
		'ファイルのMIMEタイプは許可されていません',
		'file Mime Türüne İzin Verilmiyor',
		'Il tipo MIME di file non è consentito'
		);
		const fiftyeightifourtyfive = new Array (
		'File was uploaded',
		'文件已上传',
		'파일이 업로드되었습니다.',
		'फ़ाइल अपलोड की गई',
		'ファイルがアップロードされました',
		'file yüklendi',
		'Il file è stato caricato'
		);
		const fiftyeightifourtyseven = new Array (
		'Upload failed',
		'上传失败',
		'업로드 실패',
		'अपलोड विफल',
		'アップロードに失敗しました',
		'Yükleme başarısız',
		'Caricamento non riuscito'
		);
		const fiftyeightififtyone = new Array (
		'The following information about File from $ FILES array:',
		'$ FILES 数组中有关文件的以下信息：',
		'$ FILES 배열의 파일에 대한 다음 정보:',
		'$ FILES सरणी से फ़ाइल के बारे में निम्नलिखित जानकारी:',
		'$ FILES配列からのファイルに関する次の情報：',
		'$ FILES dizisinden File hakkında aşağıdaki bilgiler:',
		'Le seguenti informazioni sulla matrice File from $ FILES:'
		);
		const fiftyeightififtythree = new Array (
		'File Name:',
		'文件名：',
		'파일 이름:',
		'फ़ाइल का नाम:',
		'ファイル名：',
		'file adı:',
		'Nome file:'
		);
		const fiftyeightififtyfour = new Array (
		'File Type:',
		'文件类型：',
		'파일 형식:',
		'फाइल का प्रकार:',
		'ファイルの種類：',
		'file tipi:',
		'Tipo di file:'
		); 
		const fiftyeightififtyfive = new Array (
		'File Size:',
		'文件大小：',
		'파일 크기:',
		'फाइल का आकार:',
		'ファイルサイズ：',
		'file boyutu:',
		'Dimensione file:'
		);
		const fiftyeightififtynine = new Array (
		'Back',
		'向后',
		'거꾸로',
		'पीछे की ओर',
		'後方',
		'geri',
		'Indietro'
		);
		const fiftynine = new Array (
		'Diagnostic Data:',
		'诊断数据：',
		'진단 데이터:',
		'नैदानिक ​​डेटा:',
		'診断データ：',
		'Teşhis Verileri:',
		'Dati diagnostici:'
		);
		const sixtyone = new Array (
		'Conclusions:',
		'结论：',
		'결론:',
		'निष्कर्ष:',
		'結論：',
		'Sonuçlar:',
		'Conclusioni:'
		);
		const sixtytwo = new Array (
		'The &lt;input type=file&gt; is defined in one unified element which consist from three units (my tested HTML interpreter) in left-to-right order: First Push Button&#44; Text Label&#44; Last Push Button. By specifying the &quot;value&quot; attribute You would be able to change the text value in Last Push Button. For the rest the Internet could suggest only Hacking Techniques with hidding&#44; minimizing&#44; transparenting and so on. Does HTML really is Global Leader or just another small tech which does not give proper way to swap languages in International and utf-8 compatible way? There are many Document Management Systems&#44; so assume there would be many Hackers who tries to fit the needs of Small-Medium or Enterprise level Organisation. The HTTP Method like &quot;PUT&quot; is directly associated to the Full Document Integral Transaction (i.e. file object of PNG) from one System to another. Tech for putting file from the User to the Server in the HTML and HTTP were already destroyed / never was available / is being destroyed from the Public and non-Public needs.',
		'&lt;input type=file&gt; 定义在一个统一的元素中，该元素由三个单元（我测试的 HTML 解释器）按从左到右的顺序组成：第一个按钮、文本标签、最后一个按钮。通过指定“value”属性，您将能够更改 Last Push Button 中的文本值。对于其余部分，互联网只能建议具有隐藏、最小化、透明等的黑客技术。 HTML 真的是全球领导者还是只是另一种没有提供以国际和 utf-8 兼容方式交换语言的正确方法的小技术？有许多文档管理系统，因此假设会有许多黑客试图满足中小型或企业级组织的需求。像“PUT”这样的 HTTP 方法直接与从一个系统到另一个系统的完整文档整体事务（即 PNG 的文件对象）相关联。将文件从用户以 HTML 和 HTTP 格式放置到服务器的技术已经被破坏/永远不可用/正在被公共和非公共需求破坏。',
		'&lt;input type=file&gt;은 왼쪽에서 오른쪽으로 첫 번째 푸시 버튼&#44; 텍스트 레이블&#44; 마지막 푸시 버튼의 세 가지 단위(테스트한 HTML 인터프리터)로 구성된 하나의 통합 요소로 정의됩니다. &quot;value&quot; 속성을 지정하면 마지막 푸시 버튼에서 텍스트 값을 변경할 수 있습니다. 나머지는 인터넷에서 은폐&#44; 최소화&#44; 투명화 등의 해킹 기술만 제안할 수 있습니다. HTML은 정말 글로벌 리더입니까 아니면 국제 및 utf-8 호환 방식으로 언어를 교환하는 적절한 방법을 제공하지 않는 또 다른 작은 기술입니까? 많은 문서 관리 시스템이 있으므로 중소기업 또는 기업 수준 조직의 요구 사항을 충족시키려는 많은 해커가 있다고 가정합니다. &quot;PUT&quot;과 같은 HTTP 메서드는 한 시스템에서 다른 시스템으로의 전체 문서 통합 트랜잭션(즉&#44; PNG의 파일 개체)과 직접 연결됩니다. HTML 및 HTTP의 사용자에서 서버로 파일을 저장하는 기술은 이미 파괴되었습니다/사용할 수 없었습니다/공공 및 비공공 요구로 인해 파괴되고 있습니다.',
		'&lt;इनपुट प्रकार = फ़ाइल&gt; को एक एकीकृत तत्व में परिभाषित किया गया है जिसमें बाएं से दाएं क्रम में तीन इकाइयां (मेरे परीक्षण किए गए HTML दुभाषिया) शामिल हैं: पहला पुश बटन&#44; टेक्स्ट लेबल&#44; अंतिम पुश बटन। &quot;मान&quot; विशेषता निर्दिष्ट करके आप लास्ट पुश बटन में टेक्स्ट वैल्यू को बदलने में सक्षम होंगे। बाकी के लिए इंटरनेट केवल हैकिंग तकनीकों का सुझाव दे सकता है जिसमें छिपाने&#44; कम करने&#44; पारदर्शी करने आदि शामिल हैं। क्या HTML वास्तव में ग्लोबल लीडर है या सिर्फ एक और छोटी तकनीक है जो अंतर्राष्ट्रीय और utf-8 संगत तरीके से भाषाओं को स्वैप करने का उचित तरीका नहीं देती है? कई दस्तावेज़ प्रबंधन प्रणालियाँ हैं&#44; इसलिए मान लें कि ऐसे कई हैकर होंगे जो लघु-मध्यम या उद्यम स्तर के संगठन की आवश्यकताओं को पूरा करने का प्रयास करते हैं। HTTP मेथड जैसे &quot;PUT&quot; एक सिस्टम से दूसरे सिस्टम में सीधे फुल डॉक्यूमेंट इंटीग्रल ट्रांजैक्शन (यानी PNG की फाइल ऑब्जेक्ट) से जुड़ा होता है। एचटीएमएल और एचटीटीपी में यूजर से सर्वर में फाइल डालने की तकनीक पहले ही नष्ट हो चुकी थी / कभी उपलब्ध नहीं थी / सार्वजनिक और गैर-सार्वजनिक जरूरतों से नष्ट की जा रही है।',
		'&lt;input type = file&gt;は、左から右の順序で3つのユニット（テスト済みのHTMLインタープリター）で構成される1つの統合要素で定義されます：最初のプッシュボタン、テキストラベル、最後のプッシュボタン。 「value」属性を指定することにより、最後のプッシュボタンのテキスト値を変更できます。残りの部分については、インターネットは、隠蔽、最小化、透過化などを伴うハッキング技術のみを提案することができます。 HTMLは本当にグローバルリーダーなのか、それとも国際的なutf-8互換の方法で言語を交換する適切な方法を提供しない別の小さな技術なのか？多くのドキュメント管理システムがあるので、中小規模または企業レベルの組織のニーズに適合しようとする多くのハッカーがいると想定します。 「PUT」のようなHTTPメソッドは、あるシステムから別のシステムへの完全なドキュメント統合トランザクション（つまり、PNGのファイルオブジェクト）に直接関連付けられています。 HTMLとHTTPでユーザーからサーバーにファイルを配置するための技術はすでに破壊されている/利用できなかった/パブリックおよび非パブリックのニーズから破壊されています。',
		'&lt;input type=file&gt;&#44; soldan sağa sırayla üç birimden (test edilen HTML yorumlayıcım) oluşan tek bir birleşik öğede tanımlanır: İlk Basma Düğmesi&#44; Metin Etiketi&#44; Son Basma Düğmesi. &quot;Değer&quot; niteliğini belirleyerek&#44; Son Basma Düğmesindeki metin değerini değiştirebilirsiniz. Geri kalanı için İnternet yalnızca gizleme&#44; küçültme&#44; şeffaflaştırma vb. içeren Hacking Tekniklerini önerebilir. HTML gerçekten Global Lider mi yoksa dilleri Uluslararası ve utf-8 uyumlu bir şekilde değiştirmek için uygun bir yol sağlamayan başka bir küçük teknoloji mi? Birçok Belge Yönetim Sistemi vardır&#44; bu nedenle Küçük-Orta veya Kurumsal düzeydeki Kuruluşun ihtiyaçlarını karşılamaya çalışan birçok Hacker olacağını varsayın. &quot;PUT&quot; gibi HTTP Yöntemi&#44; bir Sistemden diğerine Tam Belge İntegral İşlemi (yani PNG&apos;nin dosya nesnesi) ile doğrudan ilişkilidir. HTML ve HTTP&apos;de Kullanıcıdan Sunucuya dosya koyma teknolojisi zaten yok edildi / hiçbir zaman mevcut değildi / Genel ve Kamusal olmayan ihtiyaçlardan yok ediliyor.',
		'Il &lt;tipo di input=file&gt; è definito in un elemento unificato che consiste di tre unità (il mio interprete HTML testato) in ordine da sinistra a destra: Primo pulsante&#44; Etichetta di testo&#44; Ultimo pulsante. Specificando l&apos;attributo &quot;value&quot; Saresti in grado di modificare il valore del testo in Last Push Button. Per il resto Internet potrebbe suggerire solo Tecniche di Hacking con occultamento&#44; minimizzazione&#44; trasparenza e così via. HTML è davvero il leader globale o solo un&apos;altra piccola tecnologia che non fornisce il modo corretto di scambiare le lingue in modo internazionale e compatibile con utf-8? Esistono molti sistemi di gestione dei documenti&#44; quindi supponiamo che ci siano molti hacker che cercano di soddisfare le esigenze di organizzazioni di livello medio-piccolo o aziendale. Il metodo HTTP come &quot;PUT&quot; è direttamente associato alla Transazione integrale del documento completo (ovvero file oggetto di PNG) da un sistema all&apos;altro. La tecnologia per inserire file dall&apos;utente al server nell&apos;HTML e HTTP era già distrutta / non era mai disponibile / viene distrutta dalle esigenze pubbliche e non pubbliche.'
		);
		const seventytwo = new Array (
		'The name of &quot;Browse...&quot; You should be able to link with the &quot;Internet Browser&quot; term. Previous Conclusions shows that such tools are not Perfect. Especially when we have various Programming languages&#44; Applications or simply Apps who does not need the HTML and HTTP functionality. Does specifications ever take in consieration the i18n?',
		'“浏览...”的名称您应该能够与“Internet 浏览器”术语链接。先前的结论表明，此类工具并不完美。尤其是当我们有各种编程语言、应用程序或只是不需要 HTML 和 HTTP 功能的应用程序时。规格是否考虑过 i18n？',
		'&quot;찾아보기...&quot;의 이름은 &quot;인터넷 브라우저&quot;라는 용어와 연결할 수 있어야 합니다. 이전 결론은 그러한 도구가 완벽하지 않다는 것을 보여줍니다. 특히 HTML 및 HTTP 기능이 필요하지 않은 다양한 프로그래밍 언어&#44; 애플리케이션 또는 단순히 앱이 있는 경우. 사양이 i18n을 고려한 적이 있습니까?',
		'&quot;ब्राउज़ करें...&quot; का नाम आपको &quot;इंटरनेट ब्राउज़र&quot; शब्द से लिंक करने में सक्षम होना चाहिए। पिछला निष्कर्ष दर्शाता है कि ऐसे उपकरण परफेक्ट नहीं होते हैं। विशेष रूप से जब हमारे पास विभिन्न प्रोग्रामिंग भाषाए&#44; एप्लिकेशन या केवल ऐसे ऐप्स हैं जिन्हें HTML और HTTP कार्यक्षमता की आवश्यकता नहीं है। क्या विशिष्टताओं को कभी i18n में शामिल किया जाता है?',
		'「ブラウズ...」の名前「インターネットブラウザ」という用語とリンクできるはずです。以前の結論は、そのようなツールは完璧ではないことを示しています。特に、HTMLおよびHTTP機能を必要としないさまざまなプログラミング言語、アプリケーション、または単にアプリがある場合。仕様はi18nを考慮に入れていますか？',
		'&quot;Gözat...&quot; adı &quot;İnternet Tarayıcısı&quot; terimiyle bağlantı kurabilmelisiniz. Önceki Sonuçlar&#44; bu tür araçların Mükemmel olmadığını göstermektedir. Özellikle çeşitli Programlama dillerimiz&#44; Uygulamalarımız veya yalnızca HTML ve HTTP işlevselliğine ihtiyaç duymayan Uygulamalarımız olduğunda. Spesifikasyonlar i18n&apos;yi hiç dikkate alıyor mu?',
		'Il nome di &quot;Sfoglia...&quot; Dovresti essere in grado di collegarti con il termine &quot;Internet Browser&quot;. Le conclusioni precedenti mostrano che tali strumenti non sono perfetti. Soprattutto quando abbiamo vari linguaggi di programmazione&#44; applicazioni o semplicemente app che non necessitano della funzionalità HTML e HTTP. Le specifiche prendono mai in considerazione l&apos;i18n?'
		);
		const seventysix = new Array (
		'There are Situations especially in the Gaming Industry when big Enterprise Companies Open Sources their Products&#44; maybe not newest ones&#44; but with the Idea for building Community around the Products which they created. It helps to gain new Ideas to see how this Community which are cappable to program will build their Game Solution and would develop it later. There are possibility that there would be multiple Communities&#44; in this case less programmers would do less development. Nowadays there are Game Theory University study modules which could be linked with real life situations with aim to Succeed not in short period of time&#44; but in long run.',
		'当大型企业公司开源他们的产品时，特别是在游戏行业中存在一些情况，可能不是最新的产品，而是围绕他们创建的产品建立社区的想法。它有助于获得新的想法，看看这个有能力编程的社区将如何构建他们的游戏解决方案并在以后开发它。有可能会有多个社区，在这种情况下，更少的程序员会做更少的开发。现在有博弈论大学的学习模块，可以与现实生活中的情况联系起来，目标不是在短期内，而是在长期内取得成功。',
		'특히 게임 산업에는 큰 기업이 최신 제품은 아니지만 자신이 만든 제품을 중심으로 커뮤니티를 구축하기 위한 아이디어로 제품을 공개하는 상황이 있습니다. 프로그래밍할 수 있는 이 커뮤니티가 게임 솔루션을 구축하고 나중에 개발할 방법을 알아보기 위해 새로운 아이디어를 얻는 데 도움이 됩니다. 여러 커뮤니티가 있을 가능성이 있으며&#44; 이 경우 더 적은 프로그래머가 개발을 덜 수행합니다. 최근에는 단기간에 성공하지 않고 장기적으로 성공을 목표로 실제 상황과 연결할 수 있는 게임 이론 대학 학습 모듈이 있습니다.',
		'गेमिंग उद्योग में विशेष रूप से ऐसी स्थितियां होती हैं जब बड़ी उद्यम कंपनियां अपने उत्पादों को खोलती ह&#44; शायद नवीनतम नही&#44; लेकिन उनके द्वारा बनाए गए उत्पादों के आसपास समुदाय बनाने के विचार के साथ। यह देखने के लिए नए विचारों को प्राप्त करने में मदद करता है कि यह समुदाय जो प्रोग्राम करने में सक्षम ह&#44; अपने गेम सॉल्यूशन का निर्माण करेगा और बाद में इसे विकसित करेगा। ऐसी संभावना है कि कई समुदाय होंगे&#44; इस मामले में कम प्रोग्रामर कम विकास करेंगे। आजकल गेम थ्योरी यूनिवर्सिटी के अध्ययन मॉड्यूल हैं जिन्हें वास्तविक जीवन स्थितियों से जोड़ा जा सकता है&#44; जिसका उद्देश्य कम समय में नहीं&#44; बल्कि लंबे समय में सफल होना है।',
		'特にゲーム業界では、大企業が自社製品をオープンソース化する状況がありますが、最新のものではないかもしれませんが、作成した製品を中心にコミュニティを構築するというアイデアがあります。プログラムに対応できるこのコミュニティがゲームソリューションを構築し、後で開発する方法を確認するために、新しいアイデアを得るのに役立ちます。複数のコミュニティが存在する可能性があります。この場合、プログラマーの数が少なくなると、開発も少なくなります。今日では、短期的にではなく長期的に成功することを目的として、実際の状況にリンクできるゲーム理論大学の学習モジュールがあります。',
		'Özellikle Oyun Endüstrisinde&#44; büyük Kurumsal Şirketler Ürünlerini Açık Kaynak Kullandıklarında&#44; belki de en yenilerini değil&#44; oluşturdukları Ürünler etrafında Topluluk oluşturma fikriyle Durumlar vardır. Programlama yeteneğine sahip bu Topluluğun Oyun Çözümlerini nasıl oluşturacağını ve daha sonra geliştireceğini görmek yeni Fikirler kazanmaya yardımcı olur. Birden fazla Topluluk olma olasılığı vardır&#44; bu durumda daha az programcı daha az geliştirme yapar. Günümüzde&#44; kısa sürede değil&#44; uzun vadede Başarılı olmak amacıyla gerçek yaşam durumlarıyla ilişkilendirilebilecek Oyun Teorisi Üniversitesi çalışma modülleri bulunmaktadır.',
		'Ci sono situazioni soprattutto nell&apos;industria dei giochi in cui le grandi aziende aziendali aprono i loro prodotti&#44; forse non quelli più nuovi&#44; ma con l&apos;idea di costruire una comunità attorno ai prodotti che hanno creato. È utile acquisire nuove idee per vedere come questa comunità che è in grado di programmare costruirà la propria soluzione di gioco e la svilupperà in seguito. Ci sono possibilità che ci siano più Comunità&#44; in questo caso meno programmatori farebbero meno sviluppo. Al giorno d&apos;oggi ci sono moduli di studio della Game Theory University che potrebbero essere collegati a situazioni di vita reale con l&apos;obiettivo di avere successo non in un breve periodo di tempo&#44; ma a lungo termine.'
		);
		const eightyone = new Array (
		'By taking in the Account Internationalization and other Translator functionalities&#44; proper Banking Systems prohibits the use of Online Translation Services because of various Risks.',
		'通过考虑账户国际化和其他翻译功能，适当的银行系统由于各种风险而禁止使用在线翻译服务。',
		'계정 국제화 및 기타 번역기 기능을 사용함으로써 적절한 뱅킹 시스템은 다양한 위험으로 인해 온라인 번역 서비스의 사용을 금지합니다.',
		'खाता अंतर्राष्ट्रीयकरण और अन्य अनुवादक कार्यक्षमताओं को अपनाकर&#44; उचित बैंकिंग प्रणाली विभिन्न जोखिमों के कारण ऑनलाइन अनुवाद सेवाओं के उपयोग को प्रतिबंधित करती है।',
		'アカウントの国際化およびその他の翻訳機能を取り入れることにより、適切な銀行システムは、さまざまなリスクのためにオンライン翻訳サービスの使用を禁止します。',
		'Uygun Bankacılık Sistemleri&#44; Hesap Uluslararasılaştırma ve diğer Çevirmen işlevlerini alarak&#44; çeşitli Riskler nedeniyle Online Çeviri Hizmetlerinin kullanımını yasaklar.',
		'Adottando l&apos;Internazionalizzazione del conto e altre funzionalità del Traduttore&#44; i Sistemi Bancari appropriati vietano l&apos;uso dei Servizi di Traduzione Online a causa di vari Rischi.'
		);
		const eightythree = new Array (
		'If we would think more about this functionality&#44; there could be used Virus and Malware Detection Systems which would help to determine&#44; if the File is Infected with Virus and (or) Malware&#44; i.e. from shell_exec conduct the file scan: clamscan --log=/tmp/hash.and.results /tmp/temporary.loaded.file. In this case would need own proper Hardware which could be cappable to do the proper scans with smallest possible latency for better user exprience.',
		'如果我们想更多地考虑这个功能，可以使用病毒和恶意软件检测系统来帮助确定文件是否感染了病毒和（或）恶意软件，即从 shell_exec 进行文件扫描： clamscan --log=/tmp/hash.and.results /tmp/temporary.loaded.file. 在这种情况下，需要自己的适当硬件，该硬件能够以尽可能小的延迟进行适当的扫描，以获得更好的用户体验。',
		'이 기능에 대해 더 생각해 보면 파일이 바이러스 및(또는) 맬웨어에 감염되었는지 확인하는 데 도움이 되는 바이러스 및 맬웨어 감지 시스템을 사용할 수 있습니다. 즉&#44; shell_exec에서 파일 검사를 수행합니다. clamscan --log=/tmp/hash.and.results /tmp/temporary.loaded.file. 이 경우 더 나은 사용자 경험을 위해 가능한 최소 대기 시간으로 적절한 스캔을 수행할 수 있는 적절한 자체 하드웨어가 필요합니다.',
		'यदि हम इस कार्यक्षमता के बारे में अधिक सोचते हैं तो वायरस और मैलवेयर डिटेक्शन सिस्टम का उपयोग किया जा सकता है जो यह निर्धारित करने में मदद करेगा कि क्या फ़ाइल वायरस से संक्रमित है और (या) मैलवेयर&#44; यानी shell_exec से फ़ाइल स्कैन करें: clamscan --log=/tmp/hash.and.results /tmp/temporary.loaded.file. इस मामले में अपने उचित हार्डवेयर की आवश्यकता होगी जो बेहतर उपयोगकर्ता अनुभव के लिए कम से कम संभव विलंबता के साथ उचित स्कैन करने में सक्षम हो।',
		'この機能についてもっと考えると、ファイルがウイルスに感染しているかどうか、および（または）マルウェア、つまりshell_execからファイルスキャンを実行するかどうかを判断するのに役立つウイルスおよびマルウェア検出システムを使用できます。clamscan --log=/tmp/hash.and.results /tmp/temporary.loaded.file. この場合、ユーザーエクスペリエンスを向上させるために、可能な限り最小の遅延で適切なスキャンを実行できる独自の適切なハードウェアが必要になります。',
		'Bu işlevsellik hakkında daha fazla düşünecek olursak&#44; Dosyaya Virüs ve (veya) Kötü Amaçlı Yazılım Bulaşmış olup olmadığını belirlemeye yardımcı olacak Virüs ve Kötü Amaçlı Yazılım Algılama Sistemleri kullanılabilir&#44; yani dosya taramasını shell_exec&apos;ten gerçekleştirebilir: clamscan --log=/tmp/hash.and.results /tmp/temporary.loaded.file. Bu durumda&#44; daha iyi kullanıcı deneyimi için mümkün olan en küçük gecikmeyle uygun taramaları yapabilecek kendi uygun Donanımına ihtiyaç duyulacaktır.',
		'Se pensassimo di più a questa funzionalità&#44; potrebbero essere utilizzati sistemi di rilevamento di virus e malware che aiuterebbero a determinare se il file è infetto da virus e (o) malware&#44; ovvero da shell_exec eseguire la scansione del file: clamscan --log=/tmp/hash.and.results /tmp/temporary.loaded.file. In questo caso sarebbe necessario possedere un hardware adeguato che potrebbe essere in grado di eseguire le scansioni corrette con la minore latenza possibile per una migliore esperienza dell&apos;utente.'
		);
		
		sessionStorage.five = five;
		sessionStorage.six = six;
		sessionStorage.seven = seven;
		sessionStorage.eight = eight;
		sessionStorage.ten = ten;
		sessionStorage.twentyfour = twentyfour;
		sessionStorage.fourtyseven = fourtyseven;
		sessionStorage.fourtyeight = fourtyeight;
		sessionStorage.fourtynine = fourtynine;
		sessionStorage.fifty = fifty;
		sessionStorage.fiftyone = fiftyone;
		sessionStorage.fiftytwo = fiftytwo;
		sessionStorage.fiftythree = fiftythree;
		sessionStorage.fiftyfive = fiftyfive;
		sessionStorage.fiftysevenitwo = fiftysevenitwo;
		sessionStorage.fiftysevenithree = fiftysevenithree;
		sessionStorage.fiftyeightithirteen = fiftyeightithirteen;
		sessionStorage.fiftyeightieighteen = fiftyeightieighteen;
		sessionStorage.fiftyeightitwentythree = fiftyeightitwentythree;
		sessionStorage.fiftyeightithirtynine = fiftyeightithirtynine;
		sessionStorage.fiftyeightifourtyfive = fiftyeightifourtyfive;
		sessionStorage.fiftyeightifourtyseven = fiftyeightifourtyseven;
		sessionStorage.fiftyeightififtyone = fiftyeightififtyone;
		sessionStorage.fiftyeightififtythree = fiftyeightififtythree;
		sessionStorage.fiftyeightififtyfour = fiftyeightififtyfour; 
		sessionStorage.fiftyeightififtyfive = fiftyeightififtyfive;
		sessionStorage.fiftyeightififtynine = fiftyeightififtynine;
		sessionStorage.fiftynine = fiftynine;
		sessionStorage.sixtyone = sixtyone;
		sessionStorage.sixtytwo = sixtytwo;
		sessionStorage.seventytwo = seventytwo;
		sessionStorage.seventysix = seventysix;
		sessionStorage.eightyone = eightyone;
		sessionStorage.eightythree = eightythree;
}

function fileFilterUpload() {
	const lan_availa = new Array ('en-US','zh-CN','ko-KR','hi-IN','ja-JA','tr-TR','it-IT');
	let lan_select = 'en-US';
	let lif_select = 0;
	let val = localStorage.lingua;
	let obj_params = getSearchParameters();	
	
	if(val !== undefined || val !== 'undefined')
	{
		lif_select = lan_availa.indexOf(val);
		
		if(lif_select !== -1)
		{
			lan_select = val;
		} else {
			lif_select = 0;
		}
	} else {
		localStorage.lingua = lan_select;
		loopLingua();		
	}
	
	let check = typeof sessionStorage.five;
	if(check === undefined || check === 'undefined') {
		loopLingua();
	}
		
	var arr_params = Object.values(obj_params);
	if(arr_params.length !== 0)
	{
		for (i=0;i<arr_params.length;i++)
		{
			if(lan_availa.indexOf(arr_params[i]) !== -1)
			{
				lan_select = arr_params[i];
				localStorage.lingua = arr_params[i];
				lif_select = lan_availa.indexOf(lan_select);
			}
		}
	}
	
	window.onload = init(lif_select);
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

function translation(string = '', x = 0) {
	let string_a = new Array ();
	string_a = string.split(',');
	return string_a[x];
}

function init(x = 0) {
	/* Some Browser Apps allows to change <meta> and (or) has a list of names and properties which could be changed */
	$('meta[name="description"]').remove();
	$('head').append( '<meta name="description" content="' + translation(sessionStorage.five, x) + '">' );
	$('meta[name="keywords"]').remove();
	$('head').append( '<meta name="keywords" content="' + translation(sessionStorage.six, x) + '">' );
	$('meta[name="author"]').remove();
	$('head').append( '<meta name="author" content="' + translation(sessionStorage.seven, x) + '">' );
	$('meta[property="og:title"]').remove();
	$('head').append( '<meta property="og:title" content="' + translation(sessionStorage.eight, x) + '">' );
	$('meta[property="og:description"]').remove();
	$('head').append( '<meta property="og:description" content="' + translation(sessionStorage.ten, x) + '">' );
	$('#twentyfour').html(translation(sessionStorage.twentyfour, x));
	$('#fourtyseven').html(translation(sessionStorage.fourtyseven, x));
	$('#fourtyeight').html(translation(sessionStorage.fourtyeight, x));
	$('#fourtynine').html(translation(sessionStorage.fourtynine, x));
	$('#fifty').html(translation(sessionStorage.fifty, x));
	$('#fiftyone').html(translation(sessionStorage.fiftyone, x));
	$('#fiftytwo').html(translation(sessionStorage.fiftytwo, x));
	$('#fiftythree').html(translation(sessionStorage.fiftythree, x));
	$('#fiftyfive').html(translation(sessionStorage.fiftyfive, x));
	$('#fiftysevenitwo').html(translation(sessionStorage.fiftysevenitwo, x));
	$("input[type='submit']").attr("value", translation(sessionStorage.fiftysevenithree, x));
	$('#fiftyeightithirteen').html(translation(sessionStorage.fiftyeightithirteen, x));
	$('#fiftyeightieighteen').html(translation(sessionStorage.fiftyeightieighteen, x));
	$('#fiftyeightitwentythree').html(translation(sessionStorage.fiftyeightitwentythree, x));
	$('#fiftyeightithirtynine').html(translation(sessionStorage.fiftyeightithirtynine, x));
	$('#fiftyeightifourtyfive').html(translation(sessionStorage.fiftyeightifourtyfive, x));
	$('#fiftyeightifourtyseven').html(translation(sessionStorage.fiftyeightifourtyseven, x));
	$('#fiftyeightififtyone').html(translation(sessionStorage.fiftyeightififtyone, x));
	$('#fiftyeightififtythree').html(translation(sessionStorage.fiftyeightififtythree, x));
	$('#fiftyeightififtyfour').html(translation(sessionStorage.fiftyeightififtyfour, x));
	$('#fiftyeightififtyfive').html(translation(sessionStorage.fiftyeightififtyfive, x));
	$('#fiftyeightififtynine').html(translation(sessionStorage.fiftyeightififtynine, x));
	$('#fiftynine').html(translation(sessionStorage.fiftynine, x));
	$('#sixtyone').html(translation(sessionStorage.sixtyone, x));
	$('#sixtytwo').html(translation(sessionStorage.sixtytwo, x));
	$('#seventytwo').html(translation(sessionStorage.seventytwo, x));
	$('#seventysix').html(translation(sessionStorage.seventysix, x));
	$('#eightyone').html(translation(sessionStorage.eightyone, x));
	$('#eightythree').html(translation(sessionStorage.eightythree, x));
}
