export const philosophers = [
  {
    id: 1,
    quote: {
      zh: '人不是被事物本身困扰，而是被他们对事物的看法困扰。',
      en: 'Men are disturbed not by things, but by the view which they take of them.',
      ja: '人を悩ますのは出来事そのものではなく、出来事に対する捉え方である。',
      el: 'Δεν μας ταράζουν τα πράγματα, αλλά η άποψή μας γι\' αυτά.',
    },
    philosopher: { zh: '爱比克泰德', en: 'Epictetus', ja: 'エピクテトス', el: 'Επίκτητος' },
    era: { zh: '古希腊·斯多葛', en: 'Ancient Greece · Stoicism', ja: '古代ギリシャ・ストア派', el: 'Αρχαία Ελλάδα · Στωικισμός' },
    keywords: ['自由', '认知', '焦虑', '内心'],
    keywordsEn: ['freedom', 'perception', 'anxiety', 'inner peace'],
    keywordsJa: ['自由', '認識', '不安', '内面'],
    story: {
      scene: {
        zh: '一个寒冷的罗马冬夜，奴隶出身的爱比克泰德瘸着腿走过广场——那条腿是被主人用铁棍打折的。有人在背后嘲笑他：你连自己的腿都保护不了，还谈什么自由？他没有回头，只在雪地上用树枝画了一个圈，然后说：我的腿在你手里，但我的思想不在。',
        en: 'On a cold Roman winter night, Epictetus—a former slave with a broken leg—walked through the forum. Someone mocked him: "You couldn\'t even protect your own leg, and yet you speak of freedom?" He drew a circle in the snow and replied: "You have my leg, not my mind."',
        ja: 'ある寒いローマの冬夜、元奴隷で足を不自由にしたエピクテトスが広場を歩いていた。誰かが嘲笑った。「自分の足も守れないくせに、自由を語るのか？」彼は雪の上に円を描いて言った。「あなたは私の足を持っているだけです。心は持っていません」',
        el: 'Μια κρύα ρωμαϊκή νύχτα, ο Επίκτητος—πρώην σκλάβος με σπασμένο πόδι—περπατούσε στην αγορά. Κάποιος τον χλεύασε: "Δεν μπόρεσες να προστατέψεις ούτε το πόδι σου, και μιλάς για ελευθερία;" Έκανε έναν κύκλο στο χιόνι και απάντησε: "Έχεις το πόδι μου, όχι το μυαλό μου."',
      },
      detail: {
        zh: '他曾是尼禄皇帝的奴隶，被释放后一生贫穷。当罗马皇帝多米提安驱逐所有哲学家时，他平静地收拾行李，只带走了一盏铁灯——后来被盗贼偷走，他说：明天我就用陶灯，一样亮。',
        en: 'Once a slave of Emperor Nero, he lived in poverty after his freedom. When Emperor Domitian exiled all philosophers, he calmly packed a single iron lamp. Thieves stole it; he said: "Tomorrow I\'ll use a clay lamp—it shines just the same."',
        ja: 'ネロ皇帝の奴隷だった彼は、解放後も貧しい暮らしを送った。ドミティアヌス帝が哲学者たちを追放した時、彼は静かに鉄のランプ一つだけを持って行った。盗賊に盗まれると「明日は粘土のランプを使おう。明るさは同じだ」と言った。',
        el: 'Δούλος του Νέρωνα, έζησε στη φτώχεια μετά την απελευθέρωσή του. Όταν ο Δομιτιανός εξόρισε όλους τους φιλοσόφους, μάζεψε ήρεμα ένα σιδερένιο λυχνάρι. Το έκλεψαν· είπε: "Αύριο θα \'χω ένα πήλινο—φωτίζει το ίδιο."',
      },
      moment: {
        zh: '临终前，弟子问他还有什么遗言。他说：我没什么可说的了。你们已经知道该怎么活了。然后闭上眼睛，像睡着了一样离开。',
        en: 'On his deathbed, his students asked for final words. "I\'ve told you everything. You already know how to live." He closed his eyes and left like falling asleep.',
        ja: '死の床で弟子が最後の言葉を求めた。「もう何も言うことはない。あなたたちはすでに生きる術を知っている」彼は目を閉じ、眠るように去っていった。',
        el: 'Στο νεκροκρέβατο, οι μαθητές ζήτησαν τελευταία λόγια. "Σας τα είπα όλα. Ξέρετε ήδη πώς να ζείτε." Έκλεισε τα μάτια και έφυγε σαν να κοιμήθηκε.',
      }
    },
    resonance: {
      zh: '现代人焦虑的根源，往往不是事情本身有多糟，而是我们在脑子里把事情想象成了灾难。老板没回消息等于他不重视我；孩子考了80分等于他考不上好学校；房价涨了一点等于这辈子完了。爱比克泰德两千年前就说了：困扰你的从来不是世界，而是你看世界的方式。换个角度，天大的事也不过如此。',
      en: 'Modern anxiety rarely comes from reality—it comes from the catastrophes we construct in our heads. No reply from your boss means they don\'t value you. A score of 80 means no future. Epictetus saw this two thousand years ago: it\'s never the world that troubles you, it\'s your lens. Shift the lens, and the heaviest burden becomes light.',
      ja: '現代人の不安の多くは現実そのものではなく、頭の中で作り上げた災難から来る。上司から返信がないのは軽視されているから、子供が80点を取ったのは将来がないから。エピクテトスは2000年前に見抜いていた。悩むのは世界そのものではなく、世界を見るレンズなのだ。レンズを変えれば、どんな重荷も軽くなる。',
      el: 'Η σύγχρονη αγωνία σπάνια έρχεται από την πραγματικότητα—έρχεται από τις καταστροφές που φτιάχνουμε στο μυαλό μας. Ο Επίκτητος το είδε πριν από δύο χιλιετίες: δεν σε ταράζει ο κόσμος, αλλά ο φακός σου. Άλλαξε φακό, και το βαρύτερο φορτίο γίνεται ελαφρύ.',
    }
  },
  {
    id: 2,
    quote: {
      zh: '你无法在同一河流中踏入两次脚，因为河水在流，你也在变。',
      en: 'No man ever steps in the same river twice, for it\'s not the same river and he\'s not the same man.',
      ja: '同じ川に二度足を踏み入れることはできない。なぜなら川は流れ、その人も変わっているから。',
      el: 'Στο ίδιο ποτάμι δεν μπαίνεις δύο φορές. Άλλα ποτάμια ρέουν και άλλοι άνθρωποι είσαι.',
    },
    philosopher: { zh: '赫拉克利特', en: 'Heraclitus', ja: 'ヘラクレイトス', el: 'Ηράκλειτος' },
    era: { zh: '古希腊·自然哲学', en: 'Ancient Greece · Natural Philosophy', ja: '古代ギリシャ・自然哲学', el: 'Αρχαία Ελλάδα · Φυσική Φιλοσοφία' },
    keywords: ['变化', '时间', '成长', '流逝'],
    keywordsEn: ['change', 'time', 'growth', 'flow'],
    keywordsJa: ['変化', '時間', '成長', '流れ'],
    story: {
      scene: {
        zh: '以弗所城的河边，一个年轻人向赫拉克利特抱怨：为什么我总觉得生活毫无意义？这位被称作"哭泣的哲学家"的老人没有回答，只是蹲下来把脚伸进河里。水流漫过他的脚踝，他说：感觉到了吗？水在流。然后他站起来：你的脚也在抖。年轻人愣住。赫拉克利特笑了——据说他一辈子只笑过这三次。',
        en: 'By the river of Ephesus, a young man asked: "Why does life feel meaningless?" Heraclitus dipped his foot in the water. "Feel that? The river flows." He stood up. "Your foot trembles too." The young man froze. Heraclitus smiled—one of only three times in his life.',
        ja: 'エフェソスの川辺で、若者が尋ねた。「なぜ人生は無意味に感じられるのか？」ヘラクレイトスは足を水に浸した。「感じるか？川は流れている」彼は立ち上がった。「あなたの足も震えている」若者は呆然とした。ヘラクレイトスは微笑んだ――生涯で三度だけの笑みだった。',
        el: 'Στο ποτάμι της Εφέσου, ένας νέος ρώτησε: "Γιατί η ζωή νιώθει χωρίς νόημα;" Ο Ηράκλειτος βύθισε το πόδι του. "Το νιώθεις; Το ποτάμι ρέει." Σηκώθηκε. "Και το πόδι σου τρέμει." Ο νέος πάγωσε. Ο Ηράκλειτος χαμογέλασε—μία από τρεις φορές στη ζωή του.',
      },
      detail: {
        zh: '他拒绝了以弗所城授予的最高权力，选择隐居山林，和牧童下棋。当有人问他为什么不参与政治时，他说：我已经参与了——我选择退出。',
        en: 'He refused the highest office in Ephesus, chose to live in the mountains playing dice with shepherd boys. When asked why he avoided politics: "I\'m already participating—I chose to opt out."',
        ja: 'エフェソスの最高職を拒み、山に隠棲して羊飼いの少年たちと賽子を投げた。なぜ政治に参加しないかと問われ、「すでに参与している。参加しないことを選んだのだ」と答えた。',
        el: 'Αρνήθηκε το ανώτατο αξίωμα στην Έφεσο, προτίμησε να ζει στα βουνά παίζοντας με βοσκούς. Όταν τον ρώτησαν γιατί αποφεύγει την πολιτική: "Ήδη μετέχω—διάλεξα να μην μετέχω."',
      },
      moment: {
        zh: '他留下的残篇只有130多句，却影响了后世两千五百年。他说这些话的时候，没有人记录，只有几个弟子凭记忆传抄。我们今天读到的，是"记忆的残片中的残片"。',
        en: 'Only 130 fragments survived, yet they shaped 2,500 years of thought. No one wrote them down—he spoke, a few disciples memorized, and they copied from memory. What we read today is a "fragment of fragments of memory."',
        ja: '残されたのは130あまりの断片だけだが、2500年の思想を形作った。誰も記録しなかった。彼が語り、数人の弟子が覚え、記憶から書き写した。今読むものは「記憶の断片の断片」にすぎない。',
        el: 'Μόνο 130 θραύσματα σώθηκαν, αλλά διαμόρφωσαν 2.500 χρόνια σκέψης. Κανείς δεν τα έγραψε—μίλησε, λίγοι μαθητές запомнили, και τα αντέγραψαν από μνήμη. Αυτό που διαβάζουμε είναι "θραύσμα θραυσμάτων μνήμης."',
      }
    },
    resonance: {
      zh: '每次刷到"十年前vs现在"的对比照，心里都会咯噔一下。不是感叹岁月催人老，而是突然意识到：那个十年前的我，和现在的我，已经不是同一个人了。这不是伤感，而是释然——既然你一直在变，那么此刻的焦虑、迷茫、不甘心，也终将成为"过去的你"的事，与"现在的你"无关。',
      en: 'Every "10 years ago vs now" photo makes you pause. Not because time ages us, but because you realize: the person from a decade ago and the person now aren\'t the same. This isn\'t sadness—it\'s relief. If you\'re always changing, then today\'s anxiety, confusion, and frustration belong to a version of you that won\'t exist tomorrow.',
      ja: '「10年前vs今」の写真を見ると、ハッとする。歳を重ねた感慨ではなく、10年前の自分と今の自分はもう別人だったことに気づくから。これは悲しみではなく安堵だ。もしあなたがずっと変わっているなら、今の不安や迷いは明日には存在しないバージョンの「あなた」のものなのだ。',
      el: 'Κάθε φωτογραφία "πριν 10 χρόνια vs τώρα" σε κάνει να σταματήσεις. Όχι επειδή ο χρόνος μας γεράζει, αλλά επειδή συνειδητοποιείς: το άτομο πριν μια δεκαετία και το άτομο τώρα δεν είναι το ίδιο. Αυτό δεν είναι θλίψη—είναι ανακούφιση. Αν αλλάζεις συνεχώς, η σημερινή αγωνία ανήκει σε μια εκδοχή σου που αύριο δεν θα υπάρχει.',
    }
  },
  {
    id: 3,
    quote: {
      zh: '他人即地狱。',
      en: 'Hell is other people.',
      ja: '他人は地獄である。',
      el: 'Η κόλαση είναι οι άλλοι.',
    },
    philosopher: { zh: '萨特', en: 'Sartre', ja: 'サルトル', el: 'Σαρτρ' },
    era: { zh: '法国·存在主义', en: 'France · Existentialism', ja: 'フランス・実存主義', el: 'Γαλλία · Υπαρξισμός' },
    keywords: ['自由', '关系', '孤独', '定义'],
    keywordsEn: ['freedom', 'relationships', 'loneliness', 'identity'],
    keywordsJa: ['自由', '関係', '孤独', '定義'],
    story: {
      scene: {
        zh: '1943年，巴黎被德军占领。萨特坐在花神咖啡馆的角落里写作《存在与虚无》。一个年轻侍者走过来给他倒咖啡，动作僵硬得像在表演。萨特盯着他看了很久，突然在笔记本上写下：这个人在扮演一个侍者。他不是侍者——他在选择成为侍者。',
        en: 'In 1943, Nazi-occupied Paris. Sartre sat in Café de Flore writing Being and Nothingness. A young waiter poured his coffee with stiff, theatrical movements. Sartre watched him and wrote: "This man is playing a waiter. He is not a waiter—he is choosing to become one."',
        ja: '1943年、ナチ占領下のパリ。サルトルはカフェ・ド・フロールの隅で「存在と無」を書いていた。若いウェイターがコーヒーを注いだ。ぎこちて演じるような動き。サルトルは彼を見つめてノートに書いた。「この人はウェイターを演じている。彼はウェイターではない。ウェイターになることを選んでいるのだ」',
        el: 'Παρίσι 1943, υπό ναζιστική κατοχή. Ο Σαρτρ έγραφε στο Café de Flore. Ένας νεαρός σερβιτόρος έριχνε καφέ με σκληρές, θεατρικές κινήσεις. Ο Σαρτρ τον κοίταξε και έγραψε: "Αυτός ο άνθρωπος παίζει τον σερβιτόρο. Δεν είναι σερβιτόρος—διαλέγει να γίνεται σερβιτόρος."',
      },
      detail: {
        zh: '他把这句话写进了《禁闭》——三个死人被困在一间屋子里，互相折磨。其中一个说：他人即地狱。但很多人不知道，萨特后来解释过：他的意思是，如果你把自己交给别人来定义，那你就活在地狱里。',
        en: 'He wrote it into No Exit—three dead souls trapped in one room, torturing each other. One says: "Hell is other people." Few know that Sartre later clarified: he meant if you let others define who you are, you live in hell.',
        ja: '彼はこれを「出口なし」に書いた。三人の死者が一室に閉じ込められ、互いを苛める。その一人が言う。「他人は地獄である」多くの人が知らないのは、サルトルが後に説明した真意だ。他人に自分を定義させれば、地獄で生きるのだと。',
        el: 'Το έγραψε στο Κεκλεισμένων των Θυρών—τρεις νεκροί παγιδευμένοι σε ένα δωμάτιο, βασανίζοντας ο ένας τον άλλον. Ένας λέει: "Η κόλαση είναι οι άλλοι." Λίγοι ξέρουν ότι ο Σαρτρ διευκρίνισε: εννοούσε αν αφήνεις τους άλλους να σε ορίζουν, ζεις στην κόλαση.',
      },
      moment: {
        zh: '1964年他拒绝了诺贝尔文学奖，理由是：作家不应该让自己变成一个机构。那天巴黎的记者们疯了，他却在家里安安静静地喝完了一杯咖啡。',
        en: 'In 1964 he refused the Nobel Prize: "A writer must refuse to let himself be transformed into an institution." Paris journalists went wild. He sat at home quietly finishing a cup of coffee.',
        ja: '1964年、ノーベル文学賞を拒否。「作家は制度化されることを拒否しなければならない」パリの記者たちは狂乱した。彼は家で静かにコーヒーを飲み干した。',
        el: 'Το 1964 αρνήθηκε το Νόμπελ: "Ένας συγγραφέας πρέπει να αρνείται να γίνει θεσμός." Οι δημοσιογράφοι τρελάθηκαν. Έκατσε σπίτι ήπια τον καφέ του.',
      }
    },
    resonance: {
      zh: '这句话被误解了半个世纪。萨特不是在说"别人都很可怕"，他是在说：当你太在意别人怎么看你、当你让别人来定义你是谁的时候，你就把自己关进了监狱。朋友圈没人点赞就难过一整天、开会不敢说话怕被笑话、选专业听父母的因为"他们更懂"——每一个"让别人来定义我"的瞬间，都是一小段地狱。',
      en: 'Misunderstood for half a century. Sartre wasn\'t saying "people are terrible." He was saying: when you care too much about how others see you—when you let them define you—you lock yourself in prison. No likes on your post ruins your whole day. Afraid to speak in meetings. Picking a major because your parents "know better." Every time you let others define you, that\'s a little slice of hell.',
      ja: '半世紀も誤解され続けた言葉。サルトルは「他人は恐ろしい」と言ったのではない。「他人の目を気にしすぎ、他人に自分を定義させるとき、あなたは自らを牢獄に閉じ込めるのだ」と。SNSでいいねがないと一日中落ち込む。会議で発言できない。「親のほうが分かっている」と専攻を選ぶ。他人に自分を定義させる瞬間の一つ一つが、地獄のかけらなのだ。',
      el: 'Παρεξηγήθηκε μισό αιώνα. Ο Σαρτρ δεν έλεγε "οι άνθρωποι είναι τρομεροί." Έλεγε: όταν νοιάζεσαι πολύ για το πώς σε βλέπουν οι άλλοι—όταν τους αφήνεις να σε ορίζουν—κλειδώνεσαι στη φυλακή. Κάθε φορά που αφήνεις τους άλλους να σε ορίζουν, αυτό είναι ένα κομμάτι κόλασης.',
    }
  },
  {
    id: 4,
    quote: {
      zh: '知足者虽卧地上，犹为安乐；不知足者虽居天堂，亦常愁苦。',
      en: 'The contented man, though lying on bare ground, is happy. The discontented man, though in paradise, is always miserable.',
      ja: '足るを知る者は地の上卧すもなお安楽なり。足るを知らぬ者は天国に居ても常に愁苦し。',
      el: 'Ο ευχαριστημένος άνθρωπος, κι αν ξαπλώνει στη γη, είναι ευτυχισμένος. Ο ακόρεστος, κι αν ζει στον παράδεισο, πάντα δυστυχεί.',
    },
    philosopher: { zh: '释迦牟尼', en: 'Siddhartha Gautama', ja: 'ガウタマ・シッダールタ', el: 'Σιντάρτα Γκαουτάμα' },
    era: { zh: '古印度·佛教', en: 'Ancient India · Buddhism', ja: '古代インド・仏教', el: 'Αρχαία Ινδία · Βουδισμός' },
    keywords: ['欲望', '满足', '内心', '放下'],
    keywordsEn: ['desire', 'contentment', 'inner peace', 'letting go'],
    keywordsJa: ['欲望', '満足', '内面', '放下'],
    story: {
      scene: {
        zh: '一个富商带着满车的金银珠宝找到佛陀，说：我拥有这么多，为什么还是不快乐？佛陀没有看他，而是指着路边一个正在睡觉的乞丐：你看他，什么都没有，但他睡得很安稳。你呢？你每晚睡得着吗？富商沉默了。佛陀又说：不是拥有的少让人快乐，是不再想要更多让人快乐。',
        en: 'A wealthy merchant brought carts of gold and jewels to the Buddha: "I have so much, why am I not happy?" The Buddha pointed to a sleeping beggar by the road: "He has nothing, yet he sleeps peacefully. Do you?" The merchant was silent. "It\'s not having less that brings happiness—it\'s wanting no more."',
        ja: '裕福な商人が金銀財宝の荷車をブッダの前に連れて言った。「これほど持っているのに、なぜ幸せになれないのか？」ブッダは道端で眠る乞食を指さした。「彼は何もない。それでも安らかに眠る。あなたは？」商人は黙った。「少ないことが幸せをもたらすのではない。もっと欲しくないことが幸せをもたらすのだ」',
        el: 'Ένας πλούσιος έμπορος ήρθε στον Βούδα με κάρα γεμάτα χρυσάφι: "Έχω τόσα πολλά, γιατί δεν είμαι ευτυχισμένος;" Ο Βούδας έδειξε έναν κοιμισμένο ζητιάνι: "Δεν έχει τίποτα, και κοιμάται ήσυχα. Εσύ;" Ο έμπορος σώπασε. "Δεν είναι το να έχεις λιγότερα που φέρνει ευτυχία—είναι το να μη θέλεις περισσότερα."',
      },
      detail: {
        zh: '他本是迦毗罗卫国的太子，有三位宫殿、四季花园、无数的仆人和珍宝。29岁那年，他走出宫门，看到了老人、病人和死人。从那天起，他放弃了王位。',
        en: 'He was a crown prince with three palaces, gardens for every season, countless servants and treasures. At 29, he walked outside the palace gates, saw an old man, a sick man, and a dead body. From that day, he renounced the throne.',
        ja: '彼はカピラヴァストゥ国の太子だった。三つの宮殿、四季の庭園、無数の召使と財宝。29歳の時、宮殿の門を出て老人、病人、死人を見た。その日から王位を捨てた。',
        el: 'Ήταν πρίγκιπας με τρία παλάτια, κήπους για κάθε εποχή, αμέτρητους υπηρέτες και θησαυρούς. Στα 29 βγήκε έξω από την πύλη, είδε έναν γέρο, έναν άρρωστο και έναν νεκρό. Από εκείνη τη μέρα, παραιτήθηκε από τον θρόνο.',
      },
      moment: {
        zh: '他在菩提树下坐了49天，最后一天黎明，一颗晨星划过天际，他睁开了眼睛。后来弟子问他悟到了什么，他说：我什么也没得到，我只是放下了。',
        en: 'He sat under the Bodhi tree for 49 days. At dawn on the last day, a morning star crossed the sky. He opened his eyes. Later his students asked what he had realized. "I gained nothing. I simply let go."',
        ja: '菩提樹の下で49日座した。最終日の夜明け、晨星が空を横切った。彼は目を開けた。後に弟子が何を悟ったか尋ねた。「何も得なかった。ただ手放しただけだ」',
        el: 'Έκατσε κάτω από το δέντρο Μπόντι για 49 μέρες. Την αυγή της τελευταίας μέρας, ένα πρωινό αστέρι διέσχισε τον ουρανό. Άνοιξε τα μάτια του. Αργότερα οι μαθητές ρώτησαν τι συνειδητοποίησε. "Δεν κέρδισα τίποτα. Απλώς άφησα."',
      }
    },
    resonance: {
      zh: '每次发工资那天最开心，过三天就觉得"也就这样"。买了新手机兴奋了两周，刷到别人用最新款又开始失落。我们好像一直在追一个永远差一步的东西。佛陀的意思是：那个"差一步"根本不是距离的问题，而是"追"这个动作本身的问题。停下来，脚下就是终点。',
      en: 'Payday makes you happiest. Three days later: "just another day." A new phone excites you for two weeks. Then you see someone with the latest model. Buddha\'s point: the "one step away" isn\'t a distance problem—it\'s the act of chasing itself. Stop. Where you stand is the finish line.',
      ja: '給料日が一番幸せ。三日後には「まあこんなもの」。新しいスマホは二週間興奮させる。そして最新モデルを持つ人を見て落ち込む。ブッダが言いたいのは：その「一歩先」は距離の問題ではなく「追う」という行為自体の問題なのだ。止まれば、そこに終点がある。',
      el: 'Η μέρα της πληρωμής σε κάνει πιο ευτυχισμένο. Τρεις μέρες μετά: "μια ακόμη μέρα." Το καινούριο κινητό σε ενθουσιάζει για δύο εβδομάδες. Μετά βλέπεις κάποιον με το πιο πρόσφατο μοντέλο. Το σημείο του Βούδα: το "ένα βήμα μακριά" δεν είναι πρόβλημα απόστασης—είναι το ίδιο το κυνήγι. Σταμάτα. Εκεί που στέκεσαι είναι η γραμμή τερματισμού.',
    }
  },
  {
    id: 5,
    quote: {
      zh: '世界上只有一种真正的英雄主义，就是认清了生活的真相后依然热爱它。',
      en: 'There is only one heroism in the world: to see the world as it is, and to love it.',
      ja: 'この世に唯一の真の英雄主義がある。それは生活の真実を知りながらもなおそれを愛することである。',
      el: 'Υπάρχει μόνο ένας ηρωισμός στον κόσμο: να βλέπεις τον κόσμο όπως είναι, και να τον αγαπάς.',
    },
    philosopher: { zh: '罗曼·罗兰', en: 'Romain Rolland', ja: 'ロマン・ロラン', el: 'Ρομαί Ρολάν' },
    era: { zh: '法国·文学', en: 'France · Literature', ja: 'フランス・文学', el: 'Γαλλία · Λογοτεχνία' },
    keywords: ['勇气', '热爱', '现实'],
    keywordsEn: ['courage', 'love', 'reality'],
    keywordsJa: ['勇気', '熱愛', '現実'],
    story: {
      scene: {
        zh: '1916年，索姆河战役的伤亡报告传遍欧洲。罗曼·罗兰坐在日内瓦的书房里，窗外是湖光山色，他手里是每天成千上万条人命。他写信给一个朋友：我写《约翰·克利斯朵夫》不是为了歌颂英雄，而是为了记录那些在泥泞里还愿意抬头看星星的人。',
        en: '1916. Reports from the Battle of the Somme flooded Europe. Romain Rolland sat in his Geneva study, lake and mountains outside, casualty reports in his hands. He wrote to a friend: "I wrote Jean-Christophe not to celebrate heroes, but to record those who, even in the mud, still look up at the stars."',
        ja: '1916年、ソンムの戦いの戦死者報告がヨーロッパを席巻した。ロマン・ロランはジュネーヴの書斎に座り、窓の外には湖と山、手には毎日何万もの命の報告。友人に手紙を書いた。「ジャン・クリストフ」を英雄を讃えるために書いたのではない。泥の中にいてもなお星を見上げる人を記録するために書いたのだ。',
        el: '1916. Αναφορές από τη μάχη του Σομ κατέκλυσαν την Ευρώπη. Ο Ρομαί Ρολάν κάθονταν στο γραφείο του στη Γενεύη, λίμνη και βουνά έξω, αναφορές θυμάτων στα χέρια του. Έγραψε σε έναν φίλο: "Έγραψα τον Ζαν-Κριστόφ όχι για να γιορτάσω ήρωες, αλλά για να καταγράψω εκείνους που, ακόμα και στη λάσπη, κοιτάζουν τα αστέρια."',
      },
      detail: {
        zh: '一战期间他躲在瑞士，被法国人骂叛徒、被德国人骂懦夫。他不辩解，只是埋头写作。后来他获得诺贝尔文学奖，颁奖词里说：他的作品中有一股理想主义的光芒——这光芒不是来自天空，而是来自泥泞。',
        en: 'During WWI he hid in Switzerland—called a traitor by the French, a coward by the Germans. He never defended himself, just kept writing. When he won the Nobel Prize, the citation said: "There is an idealistic light in his work—not from the sky, but from the mud."',
        ja: '第一次大戦中、スイスに隠れた。フランス人には裏切り者、ドイツ人には臆病者と呼ばれた。彼は弁明せず、ただ書き続けた。ノーベル賞を受賞した時、授賞式辞には「彼の作品には理想主義の光がある。それは空からではなく泥の中から来る」と書かれた。',
        el: 'Στον Α\' Παγκόσμιο κρύφτηκε στην Ελβετία—προδότης για τους Γάλλους, δειλός για τους Γερμανούς. Ποτέ δεν αμύνθηκε, απλώς συνέχισε να γράφει. Όταν κέρδισε το Νόμπελ, το σκεπτικό έλεγε: "Υπάρχει ένα ιδεαλιστικό φως στο έργο του—όχι από τον ουρανό, αλλά από τη λάσπη."',
      },
      moment: {
        zh: '晚年的罗曼·罗兰双目几乎失明。有人去看他，问他还能不能写作。他摸着打字机说：我看不见了，但我还爱着。这就够了。',
        en: 'In his final years, nearly blind. A visitor asked if he could still write. He touched his typewriter and said: "I can\'t see anymore, but I still love. That\'s enough."',
        ja: '晩年、ほぼ盲目となった。訪問者がまだ書けるかと尋ねた。タイプライターに触れて言った。「もう見えない。だがまだ愛している。それで十分だ」',
        el: 'Στα τελευταία του χρόνια, σχεδόν τυφλός. Ένας επισκέπτης ρώτησε αν μπορούσε ακόμα να γράψει. Άγγιξε τη γραφομηχανή και είπε: "Δεν βλέπω πια, αλλά ακόμα αγαπώ. Αυτό αρκεί."',
      }
    },
    resonance: {
      zh: '知道会加班还是去上班了，知道会堵车还是出门了，知道大概率不会暴富还是努力工作——这不是妥协，这就是罗曼·罗兰说的英雄主义。不是不知道生活的难，而是知道了之后，该干嘛干嘛。真正的成熟，不是变得冷漠，而是在冷漠的世界里保持温度。',
      en: 'Going to work knowing you\'ll be overworked. Driving knowing there\'ll be traffic. Working hard knowing you probably won\'t get rich. This isn\'t compromise—this is heroism. Knowing life is hard and still doing what you need to do. Real maturity isn\'t becoming cold. It\'s staying warm in a cold world.',
      ja: '残業が分かっているのに出勤する。渋滞が分かっているのに車を出す。大金持ちにならないと分かっているのに頑張る。これは妥協ではない。これが英雄主義だ。生活の難しさを知りながらもやるべきことをやる。真の成熟は冷たくなることではない。冷たい世界の中で温かさを保つことだ。',
      el: 'Πηγαίνεις στη δουλειά ξέροντας ότι θα ξεπεραστείς. Οδηγείς ξέροντας ότι θα έχει κίνηση. Δουλεύεις σκληρά ξέροντας ότι μάλλον δε θα πλουτίσεις. Αυτό δεν είναι συμβιβασμός—είναι ηρωισμός. Ξέρεις ότι η ζωή είναι δύσκολη και κάνεις ό,τι πρέπει. Η πραγματική ωριμότητα δεν είναι να γίνεσαι ψυχρός. Είναι να μένεις ζεστός σε έναν ψυχρό κόσμο.',
    }
  },
  {
    id: 6,
    quote: {
      zh: '未经省察的人生不值得过。',
      en: 'The unexamined life is not worth living.',
      ja: '省察されぬ人生に生きる価値はない。',
      el: 'Ο ανεξέταστος βίος ου βιωτός ανθρώπω.',
    },
    philosopher: { zh: '苏格拉底', en: 'Socrates', ja: 'ソクラテス', el: 'Σωκράτης' },
    era: { zh: '古希腊', en: 'Ancient Greece', ja: '古代ギリシャ', el: 'Αρχαία Ελλάδα' },
    keywords: ['自省', '意义', '智慧'],
    keywordsEn: ['self-reflection', 'meaning', 'wisdom'],
    keywordsJa: ['自省', '意味', '知恵'],
    story: {
      scene: {
        zh: '雅典的市集上，一个衣着华贵的年轻人趾高气扬地走过。苏格拉底拦住他：请问，你每天在忙什么？年轻人说：当然是在追求幸福啊。苏格拉底又问：那幸福是什么？年轻人愣住了。苏格拉底笑了：你追求了一辈子的东西，连它是什么都不知道？',
        en: 'In the Athenian agora, a well-dressed young man strutted by. Socrates stopped him: "What are you busy with every day?" "Pursuing happiness, of course." "And what is happiness?" The young man was speechless. Socrates smiled: "You\'re chasing something your whole life without knowing what it is?"',
        ja: 'アテナイのアゴラで、立派な服を着た若者が得意げに歩いていた。ソクラテスは彼を止めた。「毎日何に忙しいのか？」「もちろん幸福を追求しているのです」「では幸福とは何だ？」若者は言葉を失った。ソクラテスは微笑んだ。「一生追いながら、それが何か知らないのか？」',
        el: 'Στην αθηναϊκή αγορά, ένας καλοντυμένος νέος περνούσε με αλαζονεία. Ο Σωκράτης τον σταμάτησε: "Με τι ασχολείσαι κάθε μέρα;" "Επιδιώκω την ευτυχία, φυσικά." "Και τι είναι η ευτυχία;" Ο νέος έχασε τα λόγια του. Ο Σωκράτης χαμογέλασε: "Κυνηγάς κάτι όλη σου τη ζωή χωρίς να ξέρεις τι είναι;"',
      },
      detail: {
        zh: '他一生没有留下任何文字，所有我们知道的关于他的事，都来自他那个叫柏拉图的学生的记录。据说他长得很丑：塌鼻子、鼓眼睛、大肚子。但他的学生说，听他说话的时候，你会忘记他的长相——因为他的思想太美了。',
        en: 'He left no writings. Everything we know comes from his student Plato. Reportedly he was ugly—flat nose, bulging eyes, big belly. But his students said: when you heard him speak, you forgot what he looked like. His thoughts were too beautiful.',
        ja: '彼は一切の文書を残さなかった。彼について知ることはすべて弟子プラトンの記録による。彼は醜かったと言われる。潰れた鼻、突き出た目、大きな腹。しかし弟子たちは言った。彼の話すことを聞いていると、その外見を忘れてしまう。なぜなら彼の思考があまりにも美しかったから。',
        el: 'Δεν άφησε γραπτά. Όλα τα ξέρουμε από τον μαθητή του Πλάτωνα. Λένε ότι ήταν άσχημος—πλατιά μύτη, προεξέχοντα μάτια, μεγάλη κοιλιά. Αλλά οι μαθητές του έλεγαν: όταν τον άκουγες να μιλά, ξεχνούσες πώς έμοιαζε. Οι σκέψεις του ήταν πολύ όμορφες.',
      },
      moment: {
        zh: '他被判处死刑的时候，学生帮他准备好了逃跑的路线。他拒绝了：我一生遵守雅典的法律，现在法律要杀我，我为什么要逃跑？他喝下毒酒前，最后一句话是：我还欠阿斯克勒庇俄斯一只公鸡，记得帮我归还。',
        en: 'Sentenced to death, his students arranged his escape. He refused: "I\'ve obeyed Athenian law all my life. Now the law wants to kill me—why should I run?" His last words before drinking the hemlock: "I owe a rooster to Asclepius. Please pay that debt."',
        ja: '死刑を宣告された時、弟子たちが逃亡の手配をした。彼は拒否した。「私は一生アテナイの法律に従ってきた。今、法律が私を殺そうとしているのに、なぜ逃げなければならない？」毒杯を仰ぐ前の最後の言葉。「アスクレピオスに雄鶏一羽の借りがある。返済してくれ」',
        el: 'Καταδικασμένος σε θάνατο, οι μαθητές του οργάνωσαν τη φυγή του. Αρνήθηκε: "Υπάκουα στους αθηναϊκούς νόμους όλη μου τη ζωή. Τώρα ο νόμος θέλει να με σκοτώσει—γιατί να τρέξω;" Τα τελευταία του λόγια πριν πιει το κώνειο: "Χρωστάω έναν πετεινό στον Ασκληπιό. Παρακαλώ πληρώστε αυτό το χρέος."',
      }
    },
    resonance: {
      zh: '你有没有想过这个问题：我每天忙忙碌碌的，到底是在忙什么？不是为了某个目标，而是那个目标背后的"为什么"。想买房，为什么？想升职，为什么？想结婚，为什么？苏格拉底的意思不是说"想不清楚就别活了"，而是说：至少问一问。不问的人，不是在生活，只是在被生活推着走。',
      en: 'Have you ever asked yourself: what am I actually busy with? Not the goal, but the "why" behind it. Want to buy a house—why? Want a promotion—why? Want to get married—why? Socrates wasn\'t saying "if you can\'t figure it out, don\'t live." He was saying: at least ask. If you never ask, you\'re not living. You\'re being pushed through life.',
      ja: '考えたことはあるか。私は毎日一体何に忙しいのか？目標そのものではなく、その目標の背後にある「なぜ」を。家を買いたい、なぜ？出世したい、なぜ？結婚したい、なぜ？ソクラテスが言いたかったのは「分からなければ生きるな」ではない。「少なくとも問え」と。問わない人は生きていない。生に押し流されているだけだ。',
      el: 'Έχεις αναρωτηθεί ποτέ: με τι είμαι πραγματικά απασχολημένος; Όχι τον στόχο, αλλά το "γιατί" πίσω του. Θέλεις σπίτι—γιατί; Θέλεις προαγωγή—γιατί; Θέλεις να παντρευτείς—γιατί; Ο Σωκράτης δεν έλεγε "αν δεν το βρεις, μην ζεις." Έλεγε: τουλάχιστον ρώτα. Αν ποτέ δεν ρωτάς, δεν ζεις. Σε σπρώχνει η ζωή.',
    }
  },
  {
    id: 7,
    quote: {
      zh: '吾生也有涯，而知也无涯。以有涯随无涯，殆已。',
      en: 'Life has limits; knowledge has none. To pursue the limitless with the limited is perilous.',
      ja: '我が生には涯あれども知には涯なし。涯あるをもって涯なきを逐うは危うし。',
      el: 'Η ζωή έχει όρια, η γνώση όχι. Να κυνηγάς το απεριόριστο με το περιορισμένο είναι επικίνδυνο.',
    },
    philosopher: { zh: '庄子', en: 'Zhuangzi', ja: '荘子', el: 'Ζουανγκζί' },
    era: { zh: '中国·道家', en: 'China · Daoism', ja: '中国・道家', el: 'Κίνα · Νταοϊσμός' },
    keywords: ['有限', '知识', '放下', '逍遥'],
    keywordsEn: ['limits', 'knowledge', 'letting go', 'freedom'],
    keywordsJa: ['有限', '知識', '放下', '逍遥'],
    story: {
      scene: {
        zh: '战国时代，楚王派人来请庄子做官。庄子正在濮水边钓鱼。他没有回头，举着鱼竿问来人：我听说楚国有一只神龟，死了三千年，骨头被供在庙堂之上。你们说，这只龟是愿意死了被供奉，还是活着在泥巴里摇尾巴？使者说：当然活着在泥巴里摇尾巴。庄子说：你们回去吧，我也要在泥巴里摇尾巴。',
        en: 'The King of Chu sent envoys to offer Zhuangzi a ministerial post. He was fishing by the Pu River. Without turning, he asked: "I hear Chu has a sacred turtle, dead for 3,000 years, its bones enshrined in the temple. Would the turtle prefer to be dead and worshipped, or alive in the mud wagging its tail?" "Alive in the mud." "Go home. I\'ll wag my tail in the mud too."',
        ja: '楚の王が使者を遣わし、荘子に官職を勧めた。荘子は濮水のほとりで釣りをしていた。振り返らずに尋ねた。「楚に神聖な亀がいると聞く。三千年死んで、骨が廟に祀られている。この亀は死んで祀られるのと、泥の中で尾を振るのと、どちらがいいか？」使者は「もちろん泥の中で尾を振ることだ」と答えた。「帰れ。私も泥の中で尾を振る」',
        el: 'Ο βασιλιάς του Τσου έστειλε απεσταλμένους να προσφέρουν στον Ζουανγκζί υπουργική θέση. Έψαχνε στο ποτάμι Που. Χωρίς να γυρίσει, ρώτησε: "Ακούω ότι το Τσου έχει μια ιερή χελώνα, νεκρή 3.000 χρόνια, τα κόκαλά της σε ναό. Θα προτιμούσε η χελώνα να είναι νεκρή και λατρευτή, ή ζωντανή στη λάσπη να κουνάει την ουρά της;" "Ζωντανή στη λάσπη." "Πηγαίνετε σπίτι. Θα κουνάω κι εγώ την ουρά μου στη λάσπη."',
      },
      detail: {
        zh: '他做过漆园吏——一个看管漆树园的小官。这是历史上唯一一个有记载的庄子的工作。他一辈子穷，穷到去监河侯那里借粮。监河侯说：等我收了租税，借你三百金。庄子说：我来的时候路上有一条鱼在车辙里快干死了，说给我一升水。我说等我游说吴越之王，让他们开一条运河来接你。鱼说：那你还不如到卖鱼干的地方找我。',
        en: 'His only recorded job: keeper of a lacquer garden. He was poor his whole life—poor enough to beg grain from a local lord. The lord said: "Wait till I collect my taxes, I\'ll lend you 300 gold." Zhuangzi said: "On my way here, I saw a fish in a rut, dying of thirst. I said: I\'ll get the kings of Wu and Yue to dig you a canal. The fish said: you\'d better find me at the dried fish market."',
        ja: '記録に残された唯一の職業は漆園の管理者だった。彼は一生貧しく、監河侯に穀物を借りに行ったほどだ。監河侯は「租税を収めてから三百金を貸そう」と言った。荘子は「来る途中で車輪の轍の中で渇死しかけた魚を見た。一升の水をくれと言われた。呉越の王に説いて運河を掘らせると言うと、干物屋で私を探せと言われた」',
        el: 'Η μόνη καταγεγραμμένη δουλειά του: φύλακας κήπου λάκκας. Ήταν φτωχός όλη του τη ζωή—τόσο φτωχός που ζήτησε σιτάρι από έναν τοπικό άρχοντα. Ο άρχοντας είπε: "Όταν μαζέψω τους φόρους, θα σου δανείσω 300 χρυσά." Ο Ζουανγκζί είπε: "Στον δρόμο μου είδα ένα ψάρι σε αυλάκι, πέθαινε από δίψα. Του είπα: θα πείσω τους βασιλιάδες να σκάψουν κανάλι. Το ψάρι είπε: καλύτερα να με ψάξεις στην αγορά αποξηραμένων ψαριών."',
      },
      moment: {
        zh: '妻子去世时，他坐在棺材旁边敲着瓦盆唱歌。朋友惠子来看他，说你不过分了吗？庄子说：她刚走的时候我也难过。但想想，她本来没有生命，没有形体，没有气息。后来有了气，有了形，有了生命。现在又回去了。这就像春夏秋冬四季轮转一样自然。我哭什么？',
        en: 'When his wife died, he sat by her coffin singing and beating a pot. His friend Huizi said: "Isn\'t that excessive?" Zhuangzi said: "When she first left, I grieved too. But think about it—she had no life, no form, no breath. Then she had breath, form, life. Now she\'s returned. It\'s as natural as the four seasons. Why should I cry?"',
        ja: '妻が亡くなった時、棺のそばに座って甕を叩きながら歌った。友人の恵子が「やりすぎではないか」と言った。荘子は「彼女が行ったばかりの時は私も悲しんだ。しかし考えてみよ。彼女はもともと命もなく形もなく息もなかった。やがて息があり形があり命が生まれた。今はまた帰っただけ。春夏秋冬の移り変わりのように自然だ。何を泣くのか？」',
        el: 'Όταν πέθανε η γυναίκα του, κάθονταν δίπλα στο φέρετρο τραγουδώντας και χτυπώντας ένα δοχείο. Ο φίλος του είπε: "Δεν είναι υπερβολικό;" Ο Ζουανγκζί είπε: "Όταν έφυγε πρώτα, πένθησα κι εγώ. Αλλά σκέψου—δεν είχε ζωή, μορφή, αναπνοή. Μετά είχε αναπνοή, μορφή, ζωή. Τώρα γύρισε πίσω. Είναι όσο φυσικό κι οι τέσσερις εποχές. Γιατί να κλάψω;"',
      }
    },
    resonance: {
      zh: '现代人最大的焦虑来源之一：学得不够多，懂得不够快。买课、收藏、报班，生怕落后。庄子在两千多年前就说了：你一辈子能学多少？知识是无限的，你的时间是有限的。用有限的命追无限的知识，追不到就焦虑——这不是上进，这是自虐。放下"必须学完"的执念，才是真正的自由。',
      en: 'One of modern anxiety\'s biggest sources: not learning enough, not learning fast enough. Buying courses, bookmarking, enrolling—terrified of falling behind. Zhuangzi said it 2,000 years ago: how much can you learn in a lifetime? Knowledge is infinite. Your time isn\'t. Chasing the infinite with the finite isn\'t self-improvement—it\'s self-torture. Letting go of "I must finish" is true freedom.',
      ja: '現代人の不安の最大源の一つ：もっと学ばないと、もっと速く学ばないと。講座を買い、ブックマークし、登録し、遅れることを恐れる。荘子は2000年前に言った。一生でどれだけ学べる？知識は無限。時間は有限。有限の命で無限の知識を追うのは向上ではなく自虐だ。「やり遂げなければならない」という執念を手放すこと、それが真の自由。',
      el: 'Μία από τις μεγαλύτερες πηγές σύγχρονης αγωνίας: δεν μαθαίνω αρκετά, όχι assez vite. Αγοράζω μαθήματα, bookmark, εγγραφή—τρομοκρατημένος ότι θα μείνω πίσω. Ο Ζουανγκζί το είπε πριν 2.000 χρόνια: πόσα μπορείς να μάθεις σε μια ζωή; Η γνώση είναι άπειρη. Ο χρόνος σου όχι. Το να κυνηγάς το άπειρο με το πεπερασμένο δεν είναι αυτοβελτίωση—είναι αυτοβασανισμός. Το να αφήσεις το "πρέπει να τελειώσω" είναι η πραγματική ελευθερία.',
    }
  },
  {
    id: 8,
    quote: {
      zh: '我唯一知道的，就是我一无所知。',
      en: 'I know one thing: that I know nothing.',
      ja: '私が唯一知っていることは、私が何も知らないということである。',
      el: 'Ένα μόνο ξέρω: ότι δεν ξέρω τίποτα.',
    },
    philosopher: { zh: '苏格拉底', en: 'Socrates', ja: 'ソクラテス', el: 'Σωκράτης' },
    era: { zh: '古希腊', en: 'Ancient Greece', ja: '古代ギリシャ', el: 'Αρχαία Ελλάδα' },
    keywords: ['谦逊', '智慧', '自省', '无知'],
    keywordsEn: ['humility', 'wisdom', 'self-reflection', 'ignorance'],
    keywordsJa: ['謙遜', '知恵', '自省', '無知'],
    story: {
      scene: {
        zh: '德尔斐神庙传来神谕：苏格拉底是雅典最聪明的人。苏格拉底不信，他跑去问那些号称有学问的人——政治家、诗人、工匠。他发现政治家什么都说不清楚，诗人写诗靠的是灵感而不是智慧，工匠只懂自己的一行却以为什么都懂。苏格拉底恍然大悟：他们都不知道自己不知道，而我知道自己不知道。这就是神说的"最聪明"。',
        en: 'The Oracle of Delphi declared: Socrates is the wisest man in Athens. He didn\'t believe it. He went to politicians, poets, craftsmen. Politicians couldn\'t explain anything. Poets wrote by inspiration, not wisdom. Craftsmen knew their trade but thought they knew everything. The realization: they didn\'t know they didn\'t know. He knew he didn\'t know. That\'s what "wisest" meant.',
        ja: 'デルフィの神託：ソクラテスがアテナイで最も賢い人である。彼は信じなかった。政治家、詩人、職人に会いに行った。政治家は何も説明できない。詩人は霊感で書く、知恵でなく。職人は自分の分野しか知らないのにすべてを知っていると思った。気づいた。彼らは自分が知らないことを知らなかった。彼は自分が知らないことを知っていた。これが「最も賢い」という意味だった。',
        el: 'Το Μαντείο των Δελφών ανακοίνωσε: ο Σωκράτης είναι ο σοφότερος άνθρωπος στην Αθήνα. Δεν το πίστευε. Πήγε σε πολιτικούς, ποιητές, τεχνίτες. Οι πολιτικοί δεν μπορούσαν να εξηγήσουν τίποτα. Οι ποιητές έγραφαν από έμπνευση, όχι σοφία. Οι τεχνίτες ήξεραν την τέχνη τους αλλά νόμιζαν ότι ξέρουν τα πάντα. Η συνειδητοποίηση: αυτοί δεν ήξεραν ότι δεν ξέρουν. Αυτός ήξερε ότι δεν ξέρει. Αυτό σήμαινε "σοφότερος".',
      },
      detail: {
        zh: '他不收费、不办学、不写书。他唯一的"教学法"就是不停地问问题。雅典的年轻人喜欢跟着他，因为看他的对话就像看一场精彩的辩论表演——他总是让那些自以为知道答案的大人物哑口无言。',
        en: 'He charged no fees, ran no school, wrote no books. His only "teaching method" was asking questions. Young Athenians loved following him—watching his dialogues was like watching a brilliant debate show. He always left the bigshots speechless.',
        ja: '彼は料金も取らず、学校も開かず、本も書かなかった。彼の唯一の「教授法」は問い続けること。アテナイの若者は彼に従うのが好きだった。彼の対話を見るのは素晴らしい討論ショーを見るようなものだった。彼はいつも大物たちを言葉に詰まらせた。',
        el: 'Δεν χρέωνε, δεν άνοιξε σχολή, δεν έγραψε βιβλία. Η μόνη "διδασκαλία" του ήταν να κάνει ερωτήσεις. Οι νέοι Αθηναίοι τον αγαπούσαν—το να βλέπεις τους διαλόγους του ήταν σαν να βλέπεις ένα λαμπρό debate show. Πάντε έκανε τους μεγάλους να σωπαίνουν.',
      },
      moment: {
        zh: '70岁被判死刑时，他说：死有两种可能，要么是无梦的长眠，要么是灵魂的迁徙。如果是前者，那很好；如果是后者，我可以在那边继续跟荷马、赫西俄德辩论。不管是哪种，我都不怕。',
        en: 'At 70, sentenced to death: "Death is either a dreamless sleep, or a journey to another place. If sleep, wonderful. If a journey, I\'ll debate with Homer and Hesiod. Either way, I have nothing to fear."',
        ja: '70歳で死刑宣告。「死は夢なき眠りか、別の場所への旅のどちらか。眠りなら素晴らしい。旅ならホメロスとヘシオドスと討論できる。どちらにせよ、恐れることはない」',
        el: 'Στα 70, καταδικασμένος σε θάνατο: "Ο θάνατος είναι είτε ένας ύπνος χωρίς όνειρα είτε ένα ταξίδι σε άλλο μέρος. Αν ύπνος, θαυμάσιο. Αν ταξίδι, θα συζητήσω με τον Όμηρο και τον Ησίοδο. Σε κάθε περίπτωση, δεν έχω τίποτα να φοβάμαι."',
      }
    },
    resonance: {
      zh: '在职场里最可怕的从来不是"我不知道"，而是"我以为我知道"。那些拍着胸脯说"这事我熟"然后搞砸的人，比一开始就说"我不太懂，让我先研究一下"的人多得多。承认自己不知道，不丢人。假装知道，才丢人。',
      en: 'The scariest thing in the workplace is never "I don\'t know"—it\'s "I thought I knew." People who say "I\'ve got this" and then mess up far outnumber those who say "I\'m not sure, let me look into it." Admitting ignorance isn\'t shameful. Pretending knowledge is.',
      ja: '職場で最も怖いのは「知らない」ことではなく、「知っていると思い込む」こと。胸を叩いて「任せて」と言って失敗する人は、最初から「よく分からないから調べてみます」と言う人よりはるかに多い。知らないことを認めるのは恥ずかしいことではない。知っているふりをすることこそ恥ずかしい。',
      el: 'Το πιο τρομακτικό πράγμα στον χώρο εργασίας δεν είναι ποτέ το "δεν ξέρω"—είναι το "νόμιζα ότι ξέρω." Άνθρωποι που λένε "το έχω" και μετά τα χαλάνε είναι πολύ περισσότεροι από αυτούς που λένε "δεν είμαι σίγουρος, ας το δω." Το να παραδέχεσαι την άγνοια δεν είναι ντροπή. Το να προσποιείσαι γνώση είναι.',
    }
  },
  {
    id: 9,
    quote: {
      zh: '我们必须想象西西弗斯是幸福的。',
      en: 'One must imagine Sisyphus happy.',
      ja: 'シシュフォスが幸せであることを想像しなければならない。',
      el: 'Πρέπει να φανταζόμαστε τον Σίσυφο ευτυχισμένο.',
    },
    philosopher: { zh: '加缪', en: 'Camus', ja: 'カミュ', el: 'Καμί' },
    era: { zh: '法国·荒诞主义', en: 'France · Absurdism', ja: 'フランス・不条理主義', el: 'Γαλλία · Αμπσουρντισμός' },
    keywords: ['存在', '荒诞', '反抗', '意义'],
    keywordsEn: ['existence', 'absurdity', 'revolt', 'meaning'],
    keywordsJa: ['存在', '不条理', '反抗', '意味'],
    story: {
      scene: {
        zh: '1957年，斯德哥尔摩的冬天格外冷。加缪站在诺贝尔文学奖的领奖台上，但他没有感谢命运，反而说了一个令人不安的故事：西西弗斯被神惩罚，每天把一块巨石推上山顶，石头又滚下来，日复一日，永无止境。加缪说：我们必须想象西西弗斯是幸福的。',
        en: '1957, Stockholm. Camus stood at the Nobel Prize ceremony. Instead of thanking fate, he told a disturbing story: Sisyphus was condemned to push a boulder up a mountain for eternity, only for it to roll back down. Camus said: we must imagine Sisyphus happy.',
        ja: '1957年、ストックホルム。カミュはノーベル賞の授賞式に立った。運命に感謝する代わりに不気味な話をした。シシュフォスは岩を山頂に押し上げ、岩はまた転がり落ちる。永遠に繰り返す。カミュは言った。シシュフォスが幸せであることを想像しなければならないと。',
        el: '1957, Στοκχόλμη. Ο Καμί στάθηκε στα Νόμπελ. Αντί να ευχαριστήσει τη μοίρα, είπε μια ανησυχητική ιστορία: ο Σίσυφος καταδικάστηκε να σπρώχνει έναν βράχο στην κορυφή αιώνια, μόνο να κυλήσει πίσω. Ο Καμί είπε: πρέπει να φανταζόμαστε τον Σίσυφο ευτυχισμένο.',
      },
      detail: {
        zh: '他出生在阿尔及利亚的一个穷人家庭，父亲在一战中阵亡。他靠奖学金读完大学，后来当了记者。二战期间，他加入抵抗运动，编辑地下报纸《战斗报》。他说：我写作是为了对抗这个世界的荒诞。',
        en: 'Born poor in Algeria, father died in WWI. Scholarships got him through university. Became a journalist. During WWII, he joined the Resistance and edited the underground newspaper Combat. "I write to fight the absurdity of this world."',
        ja: 'アルジェリアの貧しい家庭に生まれ、父は第一次大戦で戦死。奨学金で大学を卒業し、ジャーナリストとなった。第二次大戦中、レジスタンスに参加し地下新聞「コンバ」を編集した。「この世界の不条理と闘うために書く」',
        el: 'Γεννήθηκε φτωχός στην Αλγερία, ο πατέρας του πέθανε στον Α\' Παγκόσμιο. Υποτροφίες τον πέρασαν στο πανεπιστήμιο. Έγινε δημοσιογράφος. Στον Β\' Παγκόσμιο μπήκε στην Αντίσταση και编辑 την underground εφημερίδα Combat. "Γράφω για να παλέψω το παράλογο αυτού του κόσμου."',
      },
      moment: {
        zh: '1960年1月4日，他乘坐的法赛尔跑车在一条笔直的公路上撞向一棵梧桐树。他的公文包里有一份未完成的手稿《第一人》。他的墓志铭上写着：这里安睡着一个终于找到安息的人。',
        en: 'January 4, 1960. His Facel Vega crashed into a plane tree on a straight road. In his briefcase: an unfinished manuscript, The First Man. His epitaph: "Here lies a man who finally found rest."',
        ja: '1960年1月4日。彼のファセル・ヴェガが直線の道路でプラタナスの木に衝突した。ブリーフケースの中には未完成の原稿「第一人者」。墓石には「ここに终于に安息を見出した人が眠る」',
        el: '4 Ιανουαρίου 1960. Το Facel Vega του χτύπησε σε έναν πλάτανο σε ευθεία οδό. Στη χαρτοφυλακή του: ένα ημιτελές χειρόγραφο, Ο Πρώτος Άνθρωπος. Η επιτάφια επιγραφή: "Εδώ κοιμάται ένας άνθρωπος που βρήκε επιτέλους ανάπαυση."',
      }
    },
    resonance: {
      zh: '每天起床、挤地铁、上班、加班、回家、睡觉——第二天再重复一遍。这不就是现代版的推石头吗？加缪的意思不是让你绝望，而是告诉你：既然石头注定要滚下来，那推石头的过程本身就是你的反抗。你在无聊的日常里还能保持一点幽默感，这就是幸福。',
      en: 'Wake up, squeeze into the subway, work, overtime, go home, sleep—repeat. Isn\'t this the modern version of pushing the boulder? Camus isn\'t saying "despair." He\'s saying: since the rock always rolls back, the act of pushing is itself your revolt. Keeping a sense of humor in the daily grind—that\'s happiness.',
      ja: '起きて、電車に乗り、仕事して、残業して、帰って、寝る。そして翌日繰り返す。这不就是现代版的推石头吗？カミュは「絶望しろ」と言っているのではない。「岩は必ず転がり落ちるのだから、岩を押す行為そのものが反抗なのだ」と。日々の単調さの中にユーモアを保つこと、それが幸福。',
      el: 'Ξυπνάς, στριμώχνεσαι στο μετρό, δουλειά, υπερωρίες, σπίτι, ύπνος—επανάλαβε. Δεν είναι αυτή η σύγχρονη εκδοχή του Σίσυφου; Ο Καμί δεν λέγει "απελπίσου." Λέει: αφού ο βράχος πάντα κυλάει πίσω, η ίδια η πράξη του σπρωξίματος είναι η εξέγερσή σου. Να κρατάς χιούμορ στην καθημερινότητα—αυτό είναι ευτυχία.',
    }
  },
  {
    id: 10,
    quote: {
      zh: '人是生而自由的，却无往不在枷锁之中。',
      en: 'Man is born free, and everywhere he is in chains.',
      ja: '人間は自由のままに生まれる。しかし至る所で鎖につながれている。',
      el: 'Ο άνθρωπος γεννιέται ελεύθερος, και παντού είναι δεμένος με αλυσίδες.',
    },
    philosopher: { zh: '卢梭', en: 'Rousseau', ja: 'ルソー', el: 'Ρουσσώ' },
    era: { zh: '法国·启蒙运动', en: 'France · Enlightenment', ja: 'フランス・啓蒙主義', el: 'Γαλλία · Διαφωτισμός' },
    keywords: ['自由', '枷锁', '社会', '天性'],
    keywordsEn: ['freedom', 'chains', 'society', 'nature'],
    keywordsJa: ['自由', '鎖', '社会', '天性'],
    story: {
      scene: {
        zh: '1762年，《社会契约论》出版。巴黎议会下令焚毁此书，卢梭被迫逃亡。他在一个小镇上租了一间小屋，房东老太太问他：你是谁？他说：一个被全世界追捕的人。老太太说：那你一定做错了什么。卢梭笑了：不，我做对了。',
        en: '1762, The Social Contract published. The Paris Parliament ordered it burned. Rousseau fled. He rented a room in a small town. The old landlady asked: "Who are you?" "A man the whole world is chasing." "Then you must have done something wrong." Rousseau smiled: "No. I did something right."',
        ja: '1762年、『社会契約論』出版。パリ議会は焚書を命じ、ルソーは逃亡を余儀なくされた。小さな町の部屋を借りた。大家の老婆が尋ねた。「あなたは誰？」「世界中に追われている男だ」「なら何か悪いことをしたのだな」ルソーは微笑んだ。「いや、正しいことをしたのだ」',
        el: '1762, εκδίδεται το Κοινωνικό Συμβόλαιο. το Κοινοβούλιο του Παρισιού το διέταξε να καεί. Ο Ρουσσώ δραπέτευσε. Ενοικίασε δωμάτιο σε μικρή πόλη. Η γριά νοικοκυρά ρώτησε: "Ποιος είσαι;" "Ένας άνθρωπος που τον κυνηγάει όλος ο κόσμος." "Τότε πρέπει να \'κανες κάτι λάθος." Ο Ρουσσώ χαμογέλασε: "Όχι. Έκανα κάτι σωστό."',
      },
      detail: {
        zh: '他一生颠沛流离。早年做过仆役、抄写员、家庭教师。38岁因为一篇论文成名——第戎学院问：科学和艺术的进步是否有助于净化风俗？所有人都答"是"，只有卢梭答"否"，拿了头奖。他写《忏悔录》，把自己的丑事全写出来：偷东西、抛弃五个私生子、背叛朋友。他说：我要让世人看到一个完全真实的人。',
        en: 'His whole life was wandering. Served as valet, copyist, tutor. At 38, an essay made him famous—the Academy of Dijon asked: do arts and sciences purify morals? Everyone said yes. Only Rousseau said no. Won first prize. He wrote Confessions, exposing every scandal: theft, abandoning five illegitimate children, betraying friends. "I want the world to see a completely honest man."',
        ja: '彼の一生は流浪だった。召使、筆写者、家庭教師を転々とした。38歳で論文が有名になった。ディジョン学院の問いに「科学芸術は道徳を浄化するか？」全員が「是」と答える中、ルソーだけが「否」と答えて一等賞を受賞。「告白録」では万引、5人の庶子を捨てること、友人を裏切ることをすべて書いた。「完全な正直な人間を世人に見せたい」',
        el: 'Όλη του τη ζωή περιπλανιόταν. Υπηρέτης, αντιγραφέας, δάσκαλος. Στα 38, ένα δοκίμιο τον έκανε διάσημο—η Ακαδημία της Ντιζόν ρώτησε: οι τέχνες και οι επιστήμες καθαρίζουν τα ήθη; Όλοι είπαν ναι. Μόνο ο Ρουσσώ είπε όχι. Κέρδισε το πρώτο βραβείο. Έγραψε Εξομολογήσεις, εκθέτοντας κάθε σκάνδαλο: κλοπή, εγκατάλειψη πέντε νόθων παιδιών, προδοσία φίλων. "Θέλω ο κόσμος να δει έναν απολύτως ειλικρινή άνθρωπο."',
      },
      moment: {
        zh: '晚年他被所有人误解和攻击。伏尔泰嘲笑他，狄德罗和他决裂，休谟跟他闹翻。他隐居在埃默农维尔的一个小岛上，每天采药、散步、观察植物。他说：我越被人误解，就越享受孤独。',
        en: 'In his final years, misunderstood and attacked by everyone. Voltaire mocked him, Diderot broke with him, Hume fell out with him. He lived on an island at Ermenonville, gathering herbs, walking, observing plants. "The more I\'m misunderstood, the more I enjoy solitude."',
        ja: '晩年、すべての人から誤解され攻撃された。ヴォルテールは彼を嘲笑し、ディドロは決別し、ヒュームは仲違いした。エルメノンヴィルの島に隠棲し、毎日薬草を採り、散歩し、植物を観察した。「誤解されればされるほど、孤独を楽しむ」',
        el: 'Στα τελευταία του χρόνια, παρεξηγημένος και επιτιθέμενος από όλους. Ο Βολταίρος τον χλεύαζε, ο Ντιντερό τον εγκατέλειψε, ο Χιουμ τσακώθηκε μαζί του. Ζούσε σε νησί στο Ερμενονβίλ, μάζευε βότανα, περπατούσε, παρατηρούσε φυτά. "Όσο περισσότερο με παρεξηγούν, τόσο πιο πολύ απολαμβάνω τη μοναξιά."',
      }
    },
    resonance: {
      zh: '现代人何尝不是如此？每天喊着要自由，但自由来了又嫌没有安全感。想要辞职去旅行，又担心社保断缴；想要不结婚，又怕老了没人照顾；想要做自己，又怕别人说你不合群。卢梭的意思是：枷锁不是别人给你的，是你自己选。你选择了安全，就别抱怨没有自由。',
      en: 'Isn\'t this modern life? Everyone shouts "freedom!" but when it comes, they miss security. Want to quit and travel but worry about insurance. Want to stay single but fear growing old alone. Want to be yourself but fear being called weird. Rousseau\'s point: the chains aren\'t given to you. You choose them. If you chose safety, don\'t complain about lacking freedom.',
      ja: '現代人も同じではないか。皆「自由」と叫びながら、自由が来ると不安を嘆く。退職して旅したいが社保が心配。結婚したくないが老後が不安。自分らしく生きたいが変人と思われたくない。ルソーが言いたいのは：鎖は誰かに与えられたものではない。あなたが選んだのだ。安全を選んだなら自由がないと嘆くのはおかしい。',
      el: 'Δεν είναι έτσι και η σύγχρονη ζωή; Όλοι φωνάζουν "ελευθερία!" αλλά όταν έρχεται, χάνουν την ασφάλεια. Θέλεις να παραιτηθείς και να ταξιδέψεις αλλά ανησυχείς για την ασφάλιση. Θέλεις να μείνεις μόνος αλλά φοβάσαι τη μοναξιά στα γηρατειά. Θέλεις να είσαι ο εαυτός σου αλλά φοβάσαι να σε λένε παράξενο. Το σημείο του Ρουσσώ: οι αλυσίδες δεν σου δίνονται. Τις διαλέγεις. Αν διάλεξες ασφάλεια, μην παραπονιέσαι για έλλειψη ελευθερίας.',
    }
  },
  {
    id: 11,
    quote: {
      zh: '没有事实，只有阐释。',
      en: 'There are no facts, only interpretations.',
      ja: '事実など存在しない。あるのは解釈だけである。',
      el: 'Δεν υπάρχουν γεγονότα, μόνο ερμηνείες.',
    },
    philosopher: { zh: '尼采', en: 'Nietzsche', ja: 'ニーチェ', el: 'Νίτσε' },
    era: { zh: '德国·哲学', en: 'Germany · Philosophy', ja: 'ドイツ・哲学', el: 'Γερμανία · Φιλοσοφία' },
    keywords: ['力量', '超越', '价值', '意志'],
    keywordsEn: ['power', 'transcendence', 'values', 'will'],
    keywordsJa: ['力', '超越', '価値', '意志'],
    story: {
      scene: {
        zh: '1889年1月，都灵的一个广场上，一匹马累倒在地，马夫拿鞭子抽它。尼采冲过去，抱住马脖子大哭：我可怜的马啊！然后他倒下了。这是他最后一次清醒。之后的十一年里，他再没有说过一句完整的话。',
        en: 'January 1889, Turin. A horse collapsed in the piazza. The driver whipped it. Nietzsche rushed over, threw his arms around the horse\'s neck, and sobbed. Then he collapsed. It was his last moment of clarity. For the next 11 years, he never spoke a coherent sentence again.',
        ja: '1889年1月、トリノの広場。馬が倒れ、馭者が鞭で打った。ニーチェは駆け寄り、馬の首に抱きついて泣いた。そして倒れた。これが彼の最後の明晰な瞬間だった。その後11年間、まともな言葉を話すことはなかった。',
        el: 'Ιανουάριος 1889, Τορίνο. Ένα άλογο σωριάστηκε στην πλατεία. Ο αμαξάς το χτύπησε με μαστίγιο. Ο Νίτσε όρμησε, αγκάλιασε τον λαιμό του αλόγου και έκλαψε. Μετά κατέρρευσε. Ήταν η τελευταία του στιγμή διαύγειας. Για τα επόμενα 11 χρόνια, δεν ξαναείπε ποτέ μια συνεκτική πρόταση.',
      },
      detail: {
        zh: '他24岁就当上了巴塞尔大学的教授，是当时最年轻的教授。十年后他辞职了，因为健康恶化——偏头痛、失眠、几乎失明。他在瑞士和意大利的山间游荡，住最便宜的旅馆，每天走十几公里山路，一边写书。他说：只有行走时产生的思想才值得被尊重。',
        en: 'Professor at Basel at 24—youngest ever. Resigned 10 years later as health deteriorated: migraines, insomnia, near-blindness. Wandered through Swiss and Italian mountains, stayed in the cheapest hotels, walked 10km a day on mountain paths while writing. "Only thoughts born while walking deserve respect."',
        ja: '24歳でバーゼル大学の教授に。当時最年少だった。10年後、健康悪化で辞職。偏頭痛、不眠、ほぼ失明。スイスとイタリアの山々を彷徨い、最も安いホテルに泊まり、毎日10kmの山道を歩きながら書いた。「歩いていて生まれた思想だけが尊敬に値する」',
        el: 'Καθηγητής στη Βασιλεία στα 24—ο νεότερος όλων των εποχών. Παραιτήθηκε 10 χρόνια μετά καθώς η υγεία του χειροτέρευε: ημικρανίες, αϋπνίες, σχεδόν τύφλωση. Περιπλανιόταν στα βουνά της Ελβετίας και της Ιταλίας, έμενε στα φθηνότερα ξενοδοχεία, περπατούσε 10χλμ τη μέρα σε μονοπάτια ενώ έγραφε. "Μόνο οι σκέψεις που γεννιούνται περπατώντας αξίζουν σεβασμό."',
      },
      moment: {
        zh: '他一生孤独。妹妹嫁给了一个反犹主义者，他为此跟她决裂。妹妹后来篡改他的手稿，把他包装成纳粹的精神导师——而他本人最讨厌的就是反犹主义。他死的时候只有55岁，墓碑上只刻了一个名字：弗里德里希·尼采。',
        en: 'His whole life was lonely. His sister married an anti-Semite; he broke with her over it. She later forged his manuscripts, turned him into a Nazi spiritual guide—the very thing he hated most. He died at 55. His gravestone bears only one name: Friedrich Nietzsche.',
        ja: '彼の一生は孤独だった。妹が反ユダヤ主義者と結婚し、それ以来絶縁した。妹は後に彼の原稿を改竄し、彼をナチスの精神的指導者に仕立て上げた。彼自身が最も嫌っていたものだ。55歳で亡くなった。墓石にはただ一つの名前だけ：フリードリヒ・ニーチェ。',
        el: 'Όλη του τη ζωή μόνος. Η αδελφή του παντρεύτηκε αντισημίτη· διέκοψε τις σχέσεις μαζί της. Αυτή αργότερα πλαστογράφησε τα χειρόγραφά του, τον έκανε πνευματικό οδηγό των Ναζί—το πράγμα που μισούσε περισσότερο. Πέθανε στα 55. Η επιτύμβια πλάκα έχει μόνο ένα όνομα: Φρίντριχ Νίτσε.',
      }
    },
    resonance: {
      zh: '尼采不是让你为所欲为，他是让你问问自己：你现在遵守的那些"规矩"和"价值观"，真的是你自己的吗？还是你从小被灌输了"应该这样做"，就从来没质疑过？"没有事实，只有阐释"不是虚无主义，而是说：你有权利重新定义自己的规则。',
      en: 'Nietzsche isn\'t saying "do whatever you want." He\'s asking: are the "rules" and "values" you follow really yours? Or were they drilled into you since childhood as "you should"? "No facts, only interpretations" isn\'t nihilism. It\'s: you have the right to rewrite your own rules.',
      ja: 'ニーチェは「やりたい放題やれ」と言っているのではない。「あなたが従っている『ルール』と『価値観』は本当にあなた自身のものか？それとも幼い頃から『こうすべきだ』と植え付けられ、一度も疑わなかったか？」と問うているのだ。「事実などない、解釈だけがある」はニヒリズムではない。あなたには自分のルールを書き直す権利があるのだ。',
      el: 'Ο Νίτσε δεν λέγει "κάνε ό,τι θες." Ρωτάει: οι "κανόνες" και οι "αξίες" που ακολουθείς είναι πραγματικά δικοί σου; Ή σου τους εμφύτευσαν από μικρό ως "έτσι πρέπει"; "Δεν υπάρχουν γεγονότα, μόνο ερμηνείες" δεν είναι μηδενισμός. Είναι: έχεις το δικαίωμα να ξαναγράψεις τους δικούς σου κανόνες.',
    }
  },
  {
    id: 12,
    quote: {
      zh: '上善若水，水善利万物而不争。',
      en: 'The highest good is like water. Water benefits all things without competing.',
      ja: '上善は水のごとし。水は万物を利して争わず。',
      el: 'Το ανώτατο αγαθό είναι σαν το νερό. Το νερό ωφελεί όλα τα πράγματα χωρίς να ανταγωνίζεται.',
    },
    philosopher: { zh: '老子', en: 'Laozi', ja: '老子', el: 'Λάοζι' },
    era: { zh: '中国·道家', en: 'China · Daoism', ja: '中国・道家', el: 'Κίνα · Νταοϊσμός' },
    keywords: ['柔', '不争', '道', '自然'],
    keywordsEn: ['softness', 'non-contention', 'Dao', 'nature'],
    keywordsJa: ['柔', '不争', '道', '自然'],
    story: {
      scene: {
        zh: '传说老子要出函谷关，关令尹喜远远看见紫气东来，知道有圣人要经过，就守在关门口等着。老子骑着一头青牛慢悠悠地来了。尹喜说：您就要隐居了，请为我写一本书吧。老子没办法，就在函谷关写下了五千言——这就是《道德经》。写完就走了，没人知道他去了哪里。',
        en: 'Legend says Laozi was leaving through Hangu Pass. The gatekeeper Yin Xi saw purple mist coming from the east and knew a sage was approaching. He waited. Laozi arrived on a green ox, moving slowly. Yin Xi said: "You\'re retiring into seclusion. Please write a book for me." Laozi wrote 5,000 characters—the Tao Te Ching. Then he vanished. No one knows where he went.',
        ja: '老子が函谷関を出ようとした時、関所の役人尹喜は紫気が東から来るのを見て聖人が来ると知り、関所で待っていた。老子は青い牛に乗りゆっくりやって来た。尹喜は「隠遁される前に一冊書いてください」と頼んだ。老子は五千言を書き残した。それが「道徳経」である。書き終えると去り、どこへ行ったか誰も知らない。',
        el: 'Ο μύθος λέει ότι ο Λάοζι έφευγε από το πέρασμα Χανγκού. Ο φύλακας Γιν Σι είδε μοβ ομίχλη από τα ανατολικά και κατάλαβε ότι ερχόταν ένας σοφός. Περίμενε. Ο Λάοζι έφτασε σε ένα πράσινο βόδι, κινούμενος αργά. Ο Γιν Σι είπε: "Πάτε σε απομόνωση. Γράψτε ένα βιβλίο για μένα." Ο Λάοζι έγραψε 5.000 χαρακτήρες—το Ταο Τε Τσινγκ. Μετά εξαφανίστηκε. Κανείς δεν ξέρει πού πήγε.',
      },
      detail: {
        zh: '他做过周朝的守藏史，相当于国家图书馆馆长。他见过最多的书，也见过最多的人来来去去。所以他知道：越是想留住的东西，越留不住。',
        en: 'He was the keeper of the Zhou dynasty archives—the national librarian. He saw more books than anyone, and more people come and go. So he knew: the harder you try to hold onto something, the faster it slips away.',
        ja: '彼は周王朝の守蔵史、つまり国立図書館の館長だった。誰よりも多くの書を読み、誰よりも多くの人々が去っていくのを見た。だから彼は知っていた。留めようとすればするほど、それは早く逃げ去ることを。',
        el: 'Ήταν φύλακας των αρχείων της δυναστείας Τζόου—ο εθνικός βιβλιοθηκάριος. Είδε περισσότερα βιβλία από οποιονδήποτε, και περισσότερους ανθρώπους να έρχονται και να φεύγουν. Ήξερε λοιπόν: όσο πιο πολύ προσπαθείς να κρατήσεις κάτι, τόσο πιο γρήγορα φεύγει.',
      },
      moment: {
        zh: '有人问他为什么不出仕，他说：你见过哪个水坑里的鱼是快乐的？它们都想回到大江大河去。我也不想待在这个小坑里。',
        en: 'Someone asked why he wouldn\'t take office. "Have you ever seen a happy fish in a puddle? They all want to return to the great rivers. I don\'t want to stay in this small pond either."',
        ja: 'なぜ官職に就かないかと問われた。「水溜まりの魚で幸せなものを見たことがあるか？皆大きな川に戻りたがっている。私もこの小さな池にいたくはない」',
        el: 'Κάποιος ρώτησε γιατί δεν θα έπαιρνε αξίωμα. "Είδες ποτέ χαρούμενο ψάρι σε λακούβα; Όλα θέλουν να γυρίσουν στα μεγάλα ποτάμια. Δεν θέλω να μείνω σε αυτή τη μικρή λίμνη ούτε εγώ."',
      }
    },
    resonance: {
      zh: '职场里最厉害的人往往不是那个声音最大的，而是那个最安静但每次开口都能解决问题的。老子说的"不争"不是认怂，而是像水一样——遇到石头就绕过去，遇到低处就流下去，看似软弱，但滴水穿石。你不需要跟所有人比，你只需要找到自己的方向，然后一直流。',
      en: 'The most capable person in the workplace is rarely the loudest. It\'s the quiet one who solves problems every time they speak. Laozi\'s "non-contention" isn\'t weakness. It\'s like water: flows around rocks, finds the lowest path, seems soft but drips through stone. You don\'t need to compete with everyone. Just find your direction and keep flowing.',
      ja: '職場で最も優れた人は往々にして最も声の大きい人ではなく、最も静かで口を開けば毎回問題を解決する人だ。老子の「不争」は弱さではない。水のようなものだ。石に会えば回り込み、低いところへ流れ、柔らかそうだが石をも穿つ。皆と競争する必要はない。ただ自分の方向を見つけて流れ続ければいい。',
      el: 'Ο πιο ικανός στον χώρο εργασίας σπάνια είναι ο πιο φωνακλάς. Είναι ο ήσυχος που λύνει προβλήματα κάθε φορά που μιλά. Η "μη ανταγωνιστικότητα" του Λάοζι δεν είναι αδυναμία. Είναι σαν το νερό: ρέει γύρω από βράχια, βρίσκει τον χαμηλότερο δρόμο, φαίνεται μαλακό αλλά στάζει μέσα από πέτρα. Δεν χρειάζεται να ανταγωνίζεσαι όλους. Βρες την κατεύθυνσή σου και συνέχισε να ρέεις.',
    }
  }
];

// 词到哲人ID的映射（确保每个词点击都有内容）
const wordAssignments = {
  // 核心词
  '自由': [1, 3, 10], '认知': [1, 6], '焦虑': [1], '内心': [1, 4],
  '变化': [2], '时间': [2], '成长': [2], '流逝': [2],
  '关系': [3], '孤独': [3], '定义': [3],
  '欲望': [4], '满足': [4], '放下': [4, 7],
  '勇气': [5], '热爱': [5], '现实': [5],
  '自省': [6], '意义': [6], '智慧': [6],
  '有限': [7], '知识': [7], '逍遥': [7],
  '谦逊': [8], '无知': [8],
  '存在': [9], '荒诞': [9], '反抗': [9],
  '枷锁': [10], '社会': [10], '天性': [10],
  '力量': [11], '超越': [11], '价值': [11], '意志': [11],
  '柔': [12], '不争': [12], '道': [12], '自然': [12],
  // 英文词
  'freedom': [1, 3, 10], 'perception': [1], 'anxiety': [1], 'inner peace': [1, 4],
  'change': [2], 'time': [2], 'growth': [2], 'flow': [2],
  'relationships': [3], 'loneliness': [3], 'identity': [3],
  'desire': [4], 'contentment': [4], 'letting go': [4, 7],
  'courage': [5], 'love': [5], 'reality': [5],
  'self-reflection': [6], 'wisdom': [6, 8], 'ignorance': [8],
  'limits': [7], 'freedom': [1, 3, 10], 'humility': [8],
  'existence': [9], 'absurdity': [9], 'revolt': [9],
  'chains': [10], 'nature': [12], 'power': [11],
  'transcendence': [11], 'values': [11], 'will': [11],
  'softness': [12], 'non-contention': [12], 'Dao': [12],
  // 日文词
  '自由': [1, 3, 10], '認識': [1], '不安': [1], '内面': [1, 4],
  '変化': [2], '時間': [2], '成長': [2], '流れ': [2],
  '関係': [3], '孤独': [3], '定義': [3],
  '欲望': [4], '満足': [4], '放下': [4, 7],
  '勇気': [5], '熱愛': [5], '現実': [5],
  '自省': [6], '意味': [6], '知恵': [6],
  '有限': [7], '知識': [7], '逍遥': [7],
  '謙遜': [8], '無知': [8],
  '存在': [9], '不条理': [9], '反抗': [9],
  '鎖': [10], '社会': [10], '天性': [10],
  '力': [11], '超越': [11], '価値': [11], '意志': [11],
  '柔': [12], '不争': [12], '道': [12], '自然': [12],
  // 意境词分配
  '命运': [9, 2], '灵魂': [1, 8], '永恒': [2, 12], '虚无': [9, 11],
  '沉默': [8, 6], '星光': [12, 2], '黄昏': [9, 11], '黎明': [5, 9],
  '尘埃': [12, 11], '回声': [2, 8], '迷雾': [6, 8], '火焰': [5, 11],
  '深渊': [9, 11], '风暴': [5, 11], '梦境': [7, 9],
  '远方': [5, 7], '寂静': [12, 8], '微光': [5, 9], '潮汐': [2, 12],
  '荒原': [9, 11], '余烬': [9, 11], '归途': [7, 12], '虚空': [9, 12],
  '觉醒': [8, 6], '真理': [8, 6], '死亡': [9, 11],
  '爱情': [3, 5], '理性': [8, 6], '苦难': [9, 5], '希望': [5, 9],
  '信仰': [5, 4], '美': [11, 8], '善': [11, 4], '恶': [11, 3],
  '无常': [2, 4], '因果': [4, 7], '轮回': [4], '涅槃': [4],
  '菩提': [4], '般若': [4], '慈悲': [4], '观照': [6, 8],
  '觉悟': [8, 4], '本心': [12, 7], '明镜': [8, 12], '空性': [12, 4],
  '仁': [6, 10], '义': [11, 5], '礼': [6], '智': [6, 8], '信': [10, 6],
  '天': [12], '地': [12], '人': [10], '心': [7, 8], '性': [7, 10],
  '命': [9, 4], '理': [8, 6], '气': [12], '物': [1, 11],
  '我': [3, 8], '他': [3], '众生': [4, 7], '世界': [9, 2],
  '宇宙': [12, 2], '刹那': [2], '须臾': [2, 7],
  '须弥': [4, 12], '芥子': [7, 12], '莲花': [4], '月光': [12, 7],
  '春风': [5, 7], '秋水': [12, 7], '冬雪': [5, 9], '夏雷': [11, 5],
  '山川': [12, 7], '草木': [12, 7], '花开': [4, 7], '叶落': [2, 7],
  '云起': [12, 7], '星沉': [2, 9], '日出': [5, 9], '月隐': [12, 4],
  '潮生': [2, 12], '潮落': [2, 9], '风起': [5, 11], '风止': [12, 7],
  '雨落': [9, 5], '雨歇': [7, 12], '霜降': [2, 12], '露凝': [4, 12],
  '雾散': [8, 6], '烟消': [2, 7], '雷鸣': [11, 5], '电闪': [11, 5],
  '虹现': [5, 4], '霞飞': [5, 9], '夜深': [8, 9], '天明': [5, 9],
  '岁暮': [2, 9], '年初': [5, 10], '春去': [7, 2], '秋来': [7, 2],
  '生灭': [2, 4], '聚散': [3, 7], '得失': [6, 4], '荣辱': [10, 11],
  '进退': [10, 7], '起落': [9, 2], '沉浮': [9, 2], '明暗': [8, 12],
  '虚实': [9, 12], '有无': [12, 9], '动静': [12, 2], '快慢': [2, 9],
  '轻重': [11, 12], '冷暖': [5, 9], '悲欢': [5, 9], '离合': [3, 7],
  '苦乐': [4, 9], '爱憎': [3, 11], '善恶': [11, 4], '真假': [8, 6],
  '美丑': [11, 8], '穷达': [10, 5], '贵贱': [10, 11], '生死': [9, 4],
  '始终': [2, 8], '首尾': [7, 2], '缘起': [4, 7], '缘灭': [4, 7],
  '执念': [4, 3], '无为': [12, 7],
}

export const wordMap = new Map(Object.entries(wordAssignments))

export const languages = [
  { code: 'zh', name: '中文', label: 'ZH' },
  { code: 'en', name: 'English', label: 'EN' },
  { code: 'ja', name: '日本語', label: 'JA' },
  { code: 'el', name: 'Ελληνικά', label: 'EL' },

  {
    id: 13,
    quote: {
      zh: '世界上唯有两样东西能让我们的内心受到深深的震撼，一是我们头顶上灿烂的星空，一是我们内心崇高的道德法则。',
      en: 'Two things fill the mind with ever new and increasing wonder and awe: the starry heavens above me and the moral law within me.',
      ja: '我の内にあって絶えず新たな感動と畏敬の念を起こさせるものが二つある。それは頭上の星空と内心の道徳法則である。',
      el: 'Δύο πράγματα γεμίζουν το μυαλό με διαρκή θαυμασμό: ο έναστρος ουρανός πάνω μου και ο ηθικός νόμος μέσα μου.',
    },
    philosopher: { zh: '康德', en: 'Kant', ja: 'カント', el: 'Καντ' },
    era: { zh: '德国古典哲学', en: 'German Classical Philosophy', ja: 'ドイツ古典哲学', el: 'Γερμανική Κλασική Φιλοσοφία' },
    keywords: ['星空', '道德', '敬畏', '自律'],
    keywordsEn: ['stars', 'morality', 'awe', 'discipline'],
    keywordsJa: ['星空', '道徳', '畏敬', '自律'],
    story: {
      scene: {
        zh: '柯尼斯堡的傍晚，康德散步归来，抬头仰望星空。他一生未离开过这座小城，却用思想丈量了整个宇宙。',
        en: 'In Königsberg, Kant walked home at dusk and looked up at the stars. He never left this small town, yet measured the entire universe with his mind.',
        ja: 'ケーニヒスベルクの夕暮れ、カントは散歩から戻り星空を見上げた。彼はこの小さな町を離れなかったが、思考で全宇宙を測定した。',
        el: 'Στο Κένιχσμπεργκ, ο Καντ περπατούσε σπίτι το σούρουπο και κοίταζε τα άστρα. Δεν έφυγε ποτέ από αυτή την πόλη, αλλά μέτρησε ολόκληρο το σύμπαν με το μυαλό του.',
      },
      detail: {
        zh: '他终身未婚，生活极其规律，每天下午三点半准时散步，邻居们用他的出现来对表。',
        en: 'He never married, lived with extreme regularity. His daily 3:30 walk was so punctual that neighbors set their watches by it.',
        ja: '生涯独身、極めて規則正しい生活を送った。毎日午後3時半の散歩はあまりにも正確で、近所の人々がそれで時計を合わせた。',
        el: 'Δεν παντρεύτηκε ποτέ, ζούσε με εξαιρετική κανονικότητα. Ο καθημερινός του περίπατος στις 3:30 ήταν τόσο ακριβής που οι γείτονες ρύθμιζαν τα ρολόγια τους.',
      },
      moment: {
        zh: '晚年记忆力衰退，有次他在客厅踱步后停下来说：我已经走了很多路，但道德的路才刚刚开始。',
        en: 'In old age, his memory faded. Once after pacing in his parlor, he said: I have walked many roads, but the road of morality has only just begun.',
        ja: '晩年記憶力が衰え、居間を歩いた後に言った。「多くの道を歩いたが、道徳の道は始まったばかりだ」。',
        el: 'Στα γεράματά του η μνήμη του ατόνησε. Μια φορά είπε: «Περπάτησα πολλούς δρόμους, αλλά ο δρόμος της ηθικής μόλις ξεκίνησε».',
      }
    },
    resonance: {
      zh: '我们每天刷手机、焦虑各种信息，却很少抬头看星空。康德两百年前就说了：真正的震撼不在屏幕里，在头顶的宇宙和内心的良知。今晚放下手机，抬头看看天。',
      en: 'We scroll phones and worry about everything, yet rarely look up at the stars. Kant said two hundred years ago: true awe is not on your screen—it is above you and within you.',
      ja: 'スマホをスクロールして何でも不安がるが、星空を見上げることは少ない。カントは二百年前に言った。真の畏敬は画面の中ではなく、頭上と内にある。',
      el: 'Κυλάμε στα τηλέφωνα και ανησυχούμε για τα πάντα, αλλά σπάνια κοιτάμε τα άστρα. Ο Καντ πριν από διακόσια χρόνια είπε: ο πραγματικός θαυμασμός δεν είναι στην οθόνη—είναι πάνω σου και μέσα σου.',
    }
  },

,
  {
    id: 14,
    quote: { zh: '吾爱吾师，吾更爱真理。', en: 'Plato is dear to me, but truth is still dearer.', ja: 'プラトンは親愛なる師である。されど真理はさらに親愛なり。', el: 'Ο Πλάτωνας μου είναι αγαπητός, αλλά η αλήθεια είναι ακόμα πιο αγαπητή.' },
    philosopher: { zh: '亚里士多德', en: 'Aristotle', ja: 'アリストテレス', el: 'Αριστοτέλης' },
    era: { zh: '古希腊·逍遥学派', en: 'Ancient Greece · Peripatetic', ja: '古代ギリシャ・逍遙学派', el: 'Αρχαία Ελλάδα · Περιπατητική Σχολή' },
    keywords: ['真理', '师生', '理性', '批判'], keywordsEn: ['truth', 'teacher', 'reason', 'criticism'], keywordsJa: ['真理', '師弟', '理性', '批判'],
    story: { scene: { zh: '雅典郊外的学园里，年轻的亚里士多德跟随柏拉图学习了二十年，最终写出了与老师完全不同的哲学体系。', en: 'In the Academy outside Athens, young Aristotle studied under Plato for twenty years, then built a philosophy entirely his own.', ja: 'アテネ郊外の学園で、青年アリストテレスはプラトンの下で20年間学んだ。その後、師とは全く異なる哲学体系を築いた。', el: 'Στην Ακαδημία έξω από την Αθήνα, ο νεαρός Αριστοτέλης σπούδασε κοντά στον Πλάτωνα για είκοσι χρόνια.' }, detail: { zh: '他曾是亚历山大大帝的家庭教师，但拒绝在真理面前向权力妥协。', en: 'He tutored Alexander the Great but refused to compromise truth for power.', ja: 'アレクサンダー大王の家庭教師だったが、真理を権力に屈させることを拒んだ。', el: 'Δίδαξε τον Μέγα Αλέξανδρο αλλά αρνήθηκε να συμβιβάσει την αλήθεια για την εξουσία.' }, moment: { zh: '离开柏拉图学园那天，他说：老师教给了我热爱真理的能力，而热爱真理有时意味着要和老师分道扬镳。', en: 'Leaving the Academy, he said: My teacher gave me the love of truth, and loving truth sometimes means leaving your teacher behind.', ja: '学園を去る日、彼は言った。「師は真理を愛する心をくれた。真理を愛することは、時に師を離れることなのだ」。', el: 'Φεύγοντας από την Ακαδημία είπε: «Ο δάσκαλός μου μου έδωσε την αγάπη για την αλήθεια».' } },
    resonance: { zh: '职场上最难的，是尊重前辈但不盲从。亚里士多德用了二十年跟随柏拉图，然后用余生证明老师是错的。这才是真正的尊师。', en: 'The hardest thing at work is respecting your mentor without blindly following. Aristotle spent twenty years with Plato, then spent the rest of his life proving him wrong.', ja: '職場で最も難しいのは、先輩を尊敬しながらも盲従しないこと。アリストテレスはプラトンと20年間を共にし、その後生涯をかけて師の誤りを証明した。', el: 'Το πιο δύσκολο στη δουλειά είναι να σέβεσαι τον μέντορά σου χωρίς να τον ακολουθείς τυφλά.' }
  },
  {
    id: 15,
    quote: { zh: '知而不行，只是未知。', en: 'Knowledge without action is not yet knowledge.', ja: '知りて行わざれば、ただ未だ知らざるのみ。', el: 'Η γνώση χωρίς πράξη δεν είναι ακόμη γνώση.' },
    philosopher: { zh: '王阳明', en: 'Wang Yangming', ja: '王陽明', el: 'Γουανγκ Γιανγκμίνγκ' },
    era: { zh: '明代·心学', en: 'Ming Dynasty · School of Mind', ja: '明代・心学', el: 'Δυναστεία Μινγκ · Σχολή του Νου' },
    keywords: ['知行合一', '致良知', '行动', '本心'], keywordsEn: ['unity of knowing and doing', 'innate knowing', 'action'], keywordsJa: ['知行合一', '致良知', '行動'],
    story: { scene: { zh: '贵州龙场的荒山野岭中，被贬谪的王阳明在石棺中静坐。这里是瘴气弥漫的蛮荒之地，他却在这里悟出了心学的根本。', en: 'In the wilderness of Longchang, exiled Wang Yangming meditated in a stone sarcophagus. In this malarial wasteland, he discovered the foundation of his philosophy.', ja: '貴州龍場の荒れ野で、左遷された王陽明は石棺の中で座禅した。瘴気が漂うこの不毛の地で、心学の根本を悟った。', el: 'Στην ερημιά του Λονγκτσάνγκ, ο εξόριστος Γουανγκ Γιανγκμίνγκ διαλογιζόταν σε μια πέτρινη σαρκοφάγο.' }, detail: { zh: '三十七岁因直言进谏被贬龙场驿丞，在极端困顿中追问：如果圣人处在这种境地会怎么做？深夜大悟，大呼圣人之道，吾性自足。', en: 'At 37, demoted for speaking truth to power, he asked: What would a sage do in my place? One night, enlightenment: The way of the sage is already complete within me.', ja: '37歳で直言により左遷され、自問した。「聖人ならこの境遇でどうするか」。ある深夜、大悟。「聖人の道は我が性に足る」。', el: 'Στα 37, υποβιβάστηκε για να πει την αλήθεια. Μια νύχτα, φώτιση: «Ο δρόμος του σοφού είναι ήδη ολοκληρωμένος μέσα μου».' }, moment: { zh: '有人问他龙场悟道的秘密。他说：我什么也没得到，只是发现一切本来就在我心里。', en: 'Asked about the secret of his enlightenment: I gained nothing. I just discovered everything was already inside me.', ja: '悟りの秘密を問われ、「何も得なかった。ただ全てがもともと心にあることに気づいただけだ」と答えた。', el: 'Ρωτήθηκε για το μυστικό της φώτισής του: «Δεν κέρδισα τίποτα. Απλά ανακάλυψα ότι όλα ήταν ήδη μέσα μου».' } },
    resonance: { zh: '读了那么多道理，收藏了那么多干货，为什么还是过不好？王阳明五百年前就给了答案：知而不行，只是未知。真正的知道，是身体已经动了。', en: 'Read so many self-help tips, saved so many articles, yet life has not changed. Wang Yangming gave the answer 500 years ago: knowing without doing is not knowing.', ja: '自己啓発をたくさん読み、記事を保存しても人生は変わらない。王陽明は500年前に答えた。知らずして行わなければ、それはまだ知らないのだ。', el: 'Διαβάζουμε τόσες συμβουλές αλλά η ζωή δεν αλλάζει. Ο Γουανγκ έδωσε την απάντηση πριν από 500 χρόνια.' }
  },
  {
    id: 16,
    quote: { zh: '天行有常，不为尧存，不为桀亡。', en: 'Nature has its constant ways; it does not exist for a sage king nor perish for a tyrant.', ja: '天の行いに常あり。堯のために存するのではなく、桀のために亡ぶるのではない。', el: 'Η φύση έχει τους σταθερούς της νόμους· δεν υπάρχει για τον σοφό βασιλιά.' },
    philosopher: { zh: '荀子', en: 'Xunzi', ja: '荀子', el: 'Σιουνγκζί' },
    era: { zh: '战国末期·儒家', en: 'Late Warring States · Confucianism', ja: '戦国末期・儒家', el: 'Ύστερη Περίοδος των Πολεμιστών Κρατών' },
    keywords: ['天道', '规律', '性恶', '教化'], keywordsEn: ['natural law', 'human nature', 'education'], keywordsJa: ['天道', '規律', '性悪', '教化'],
    story: { scene: { zh: '齐国稷下学宫的辩论台上，荀子与孟子学派激烈交锋。孟子说人性本善，荀子摇头：你看这世间，哪个婴儿不是先学会哭闹争夺？', en: 'At the Jixia Academy, Xunzi debated the Mencian school. Human nature is good, they said. Xunzi shook his head: Which baby does not first learn to cry and grab?', ja: '斉の稷下の学宮で、荀子は孟子学派と激しく論じた。「人性は本善なり」と荀子は首を振った。「どの赤んぼうもまず泣いて奪うことを学んでいるではないか」。', el: 'Στην Ακαδημία Τζισία, ο Σιουνγκζί διαφωνούσε με τους Μενκιανούς.' }, detail: { zh: '年过五十才当上稷下学宫祭酒，亲眼见证了战国时代的残酷。坚信人性本恶，但可以通过教化改变。', en: 'He did not become head of the academy until fifty, after witnessing the brutality of the Warring States. He believed human nature is selfish, but education can transform it.', ja: '五十を過ぎて稷下の学宮の長となった。戦国時代の残酷さを目の当たりにし、人性は利己的だが教育で変わると信じた。', el: 'Έγινε επικεφαλής μετά τα πενήντα. Πίστευε ότι η ανθρώπινη φύση είναι εγωιστική, αλλά η εκπαίδευση μπορεί να τη μεταμορφώσει.' }, moment: { zh: '他最著名的学生韩非子和李斯都成了法家代表。荀子叹曰：人性之恶，连我的学生都逃不过。', en: 'His most famous students, Han Feizi and Li Si, became Legalists. Xunzi sighed: Even my students could not escape the darkness of human nature.', ja: '最も有名な弟子の韓非子と李斯は法家になった。荀子は嘆いた。「人性の悪は、わが弟子すら逃れられぬ」。', el: 'Οι πιο διάσημοι μαθητές του έγιναν Νομικιστές. Ο Σιουνγκζί αναστέναξε.' } },
    resonance: { zh: '别指望世界会因为你是谁而改变。天气不会因为你好就出太阳，股市不会因为你亏了钱就反弹。荀子说得好：天道有自己的规律。', en: 'Do not expect the world to change because of who you are. The weather will not be sunny just because you are a good person. Xunzi said it: nature follows its own rules.', ja: 'あなたが誰かによって世界が変わると期待するな。天気はあなたが善人だからといって晴れない。荀子が言った。自然は自らの法則に従う。', el: 'Μην περιμένεις ο κόσμος να αλλάξει εξαιτίας σου. Ο Σιουνγκζί το είπε: η φύση ακολουθεί τους δικούς της νόμους.' }
  },
  {
    id: 17,
    quote: { zh: '我思故我在。', en: 'I think, therefore I am.', ja: '我思う、ゆえに我あり。', el: 'Σκέφτομαι, άρα υπάρχω.' },
    philosopher: { zh: '笛卡尔', en: 'Descartes', ja: 'デカルト', el: 'Ντεκάρτ' },
    era: { zh: '法国·理性主义', en: 'France · Rationalism', ja: 'フランス・合理主義', el: 'Γαλλία · Ρασιοναλισμός' },
    keywords: ['怀疑', '理性', '存在', '思考'], keywordsEn: ['doubt', 'reason', 'existence', 'thought'], keywordsJa: ['懐疑', '理性', '存在', '思考'],
    story: { scene: { zh: '荷兰的冬日壁炉旁，笛卡尔裹着毛毯，开始了他一生中最彻底的怀疑。他问自己：如果一切都是幻觉呢？', en: 'By a Dutch winter fireplace, wrapped in a blanket, Descartes began his most radical doubt: What if everything is an illusion?', ja: 'オランダの冬の暖炉の傍ら、毛布に包まれたデカルトは生涯で最も徹底的な懐疑を始めた。「もしすべてが幻だったら？」', el: 'Κοντά σε ένα τζάκι στην Ολλανδία, τυλιγμένος σε κουβέρτα, ο Ντεκάρτ ξεκίνησε τη ριζοσπαστικότερη αμφιβολία του.' }, detail: { zh: '他曾是雇佣兵，参加过三十年战争。在战场上看到最坚固的城堡也能被摧毁，决心寻找一个不可动摇的真理。', en: 'He was a mercenary soldier who fought in the Thirty Years War. Seeing even the strongest fortresses fall, he resolved to find an unshakeable truth.', ja: '三十年戦争で傭兵として戦った。最も堅固な城塞も崩れるのを目にし、揺るぎない真理を探そうと決意した。', el: 'Ήταν μισθοφόρος που πολέμησε στον Τριακονταετή Πόλεμο. Αποφάσισε να βρει μια αμετακίνητη αλήθεια.' }, moment: { zh: '最终他找到了——当他在怀疑一切时，他发现有一件事无法怀疑：怀疑本身。', en: 'He found it—when doubting everything, one thing could not be doubted: doubt itself.', ja: 'ついに彼は見つけた。すべてを疑うとき、疑えないものが一つあった。疑いそのものだ。', el: 'Το βρήκε—αμφισβητώντας τα πάντα, ένα πράγμα δεν μπορούσε να αμφισβητηθεί: η ίδια η αμφιβολία.' } },
    resonance: { zh: '深夜躺在床上觉得一切都是假的？笛卡尔也有过。但他从深渊里找到了唯一确定的东西：你在想这件事本身，就是存在的证明。', en: 'Ever lain in bed at night feeling like everything is fake? Descartes did too. But he found the one certain thing: the fact that you are thinking about it IS proof you exist.', ja: '深夜ベッドに横たわり、すべてが偽物のように感じたことは？デカルトもあった。だが彼はその深淵から唯一確かなものを見つけた。', el: 'Ξάπλωσες ποτέ στο κρεβάτι νύχτα νιώθοντας ότι όλα είναι ψεύτικα; Ο Ντεκάρτ επίσης.' }
  },
  {
    id: 18,
    quote: { zh: '人生就像钟摆，在痛苦和无聊之间来回摆动。', en: 'Life swings like a pendulum between pain and boredom.', ja: '人生は振り子のごとく、苦痛と退屈の間を揺れ動く。', el: 'Η ζωή ταλαντεύεται σαν εκκρεμές ανάμεσα στον πόνο και την πλήξη.' },
    philosopher: { zh: '叔本华', en: 'Schopenhauer', ja: 'ショーペンハウアー', el: 'Σοπενχάουερ' },
    era: { zh: '德国·悲观主义哲学', en: 'German · Pessimism', ja: 'ドイツ・悲観主義', el: 'Γερμανία · Απαισιοδοξία' },
    keywords: ['痛苦', '无聊', '欲望', '意志'], keywordsEn: ['pain', 'boredom', 'desire', 'will'], keywordsJa: ['苦痛', '退屈', '欲望', '意志'],
    story: { scene: { zh: '法兰克福的清晨，六十五岁的叔本华吹着长笛，这是他每天的仪式。他终身未婚，独自生活，养了一只又一只贵宾犬。', en: 'In Frankfurt at 65, Schopenhauer played the flute every morning. He never married, lived alone, and named every one of his poodles Atma.', ja: 'フランクフルト、65歳のショーペンハウアーは毎朝フルートを吹いた。生涯独身、一人暮らし。', el: 'Στη Φρανκφούρτη στα 65, ο Σοπενχάουερ έπαιζε φλάουτο κάθε πρωί. Δεν παντρεύτηκε ποτέ.' }, detail: { zh: '代表作出版后十几年无人问津，被堆在书店地下室打折出售。他等了三十年才终于被人认可。', en: 'His masterpiece sold so poorly it sat in a bookstore basement for over a decade at a discount. He waited thirty years for recognition.', ja: '代表作は10年以上書店の地下室で割引販売された。認められるまで30年待った。', el: 'Το αριστούργημά του κάθισε στη basement ενός βιβλιοπωλείου πάνω από δέκα χρόνια. Περίμενε τριάντα χρόνια.' }, moment: { zh: '晚年成名后有人问他：你写了那么多关于痛苦的东西，你自己痛苦吗？他笑着说：当然。但至少现在有人听我抱怨了。', en: 'Asked late in life if he was miserable writing about misery: Of course. But at least now people listen to my complaints.', ja: '晩年、苦痛についてたくさん書いた本人は苦しいかと問われ、「もちろん。但至少今なら誰も聞いてくれる」と笑った。', el: 'Ρωτήθηκε αν ήταν δυστυχισμένος γράφοντας για τη δυστυχία: «Φυσικά. Αλλά τουλάχιστον τώρα κάποιος ακούει».' } },
    resonance: { zh: '得不到的时候痛苦，得到了之后无聊——这大概就是每个周末晚上刷手机的状态。叔本华不是要我们绝望，而是让我们看清：欲望本身就是钟摆。', en: 'Suffering when you do not have it, bored when you do—that is basically scrolling your phone every weekend. Schopenhauer is saying: desire itself is the pendulum.', ja: '手に入らないときは苦しく、手に入れたあとは退屈。それが週末のスマホだ。ショーペンハウアーは欲望そのものが振り子だと言っている。', el: 'Υποφέρεις όταν δεν το έχεις, βαριέσαι όταν το έχεις—αυτό είναι βασικά το scroll στο τηλέφωνο.' }
  }
,
  {
    id: 19,
    quote: { zh: '兼相爱，交相利。', en: 'Universal love, mutual benefit.', ja: '兼相爱、交相利。', el: 'Αμοιβαία αγάπη, αμοιβαίο όφελος.' },
    philosopher: { zh: '墨子', en: 'Mozi', ja: '墨子', el: 'Μοζί' },
    era: { zh: '战国初期·墨家', en: 'Early Warring States · Mohism', ja: '戦国初期・墨家', el: 'Πρώιμη Περίοδος · Μοϊσμός' },
    keywords: ['兼爱', '和平', '实用', '非攻'], keywordsEn: ['universal love', 'peace', 'pragmatism', 'non-aggression'], keywordsJa: ['兼愛', '平和', '実用', '非攻'],
    story: { scene: { zh: '楚国边境的城墙上，墨子站在楚王面前。楚王正准备攻打宋国，墨子走了十天十夜赶来劝阻。他用腰带模拟城墙，在沙盘上推演攻防。', en: 'On the walls of Chu, Mozi stood before the king. The king was preparing to attack Song. Mozi walked ten days and nights to stop him, simulating the battle with his belt and a沙盘.', ja: '楚の国境の城壁の上、墨子は楚王の前に立った。楚王は宋を攻めようとしていた。墨子は十日十夜歩いて諫めに来た。', el: 'Στα τείχη του Τσου, ο Μοζί στεκόταν μπροστά στον βασιλιά. Περπάτησε δέκα ημέρες και νύχτες για να τον σταματήσει.' }, detail: { zh: '他出身底层，可能是木匠或手工业者。墨家主张人人平等，国君和农夫都应该被同等对待。墨家是纪律严明的组织，专门帮助弱国抵御侵略。', en: 'He came from the lower classes, possibly a carpenter. Mohism advocated equality—rulers and farmers deserved equal treatment. The Mohists were a disciplined organization defending weak states.', ja: '彼は下層階級の出身で、おそらく大工だった。墨家は万人の平等を主張した。墨者は規律厳格な組織で、弱国を侵略から守った。', el: 'Προερχόταν από τις κατώτερες τάξεις. Ο Μοϊσμός υποστήριζε την ισότητα.' }, moment: { zh: '有人问他为什么要帮素不相识的宋国。他说：因为他们的苦难就是我的苦难。墨家的兼爱不是口号，而是走了十天十夜的双脚磨出的血泡。', en: 'Asked why he would help strangers in Song: Because their suffering is my suffering. Universal love is not a slogan—it is the blisters on feet that walked ten days and nights.', ja: 'なぜ見知らぬ宋を助けるのかと問われ。「彼らの苦しみは我が苦しみ」。兼愛はスローガンではない。十日十夜歩いた両足の血豆だ。', el: 'Γιατί να βοηθήσει ξένους στο Σονγκ; «Ο πόνος τους είναι δικός μου πόνος».' } },
    resonance: { zh: '现代人说关我什么事的时候，墨子在两千多年前说了关每个人的事。兼爱不是圣人才能做到的事。看到远方的灾难会心疼，看到不公义会愤怒，那就是兼爱的种子。', en: 'When modern people say what does it have to do with me, Mozi said 2,000 years ago: it has to do with everyone. Universal love is not just for saints.', ja: '現代人が「関係ない」と言うとき、墨子は2000年以上前に「全員に関係がある」と言った。兼愛は聖人だけのものではない。', el: 'Όταν οι σύγχρονοι άνθρωποι λένε τι με νοιάζει, ο Μοζί είπε πριν από 2.000 χρόνια: νοιάζει τον καθένα.' }
  },
  {
    id: 20,
    quote: { zh: '我步入丛林，因为我希望认真地生活。', en: 'I went to the woods because I wished to live deliberately.', ja: '私が森に入ったのは、意図的に生きたいと願ったからである。', el: 'Πήγα στα δάση γιατί ήθελα να ζω με πρόθεση.' },
    philosopher: { zh: '梭罗', en: 'Thoreau', ja: 'ソロー', el: 'Θόροου' },
    era: { zh: '美国·超验主义', en: 'American · Transcendentalism', ja: 'アメリカ・超絶主義', el: 'Αμερική · Υπερβατισμός' },
    keywords: ['简朴', '自然', '自由', '独立'], keywordsEn: ['simplicity', 'nature', 'freedom', 'independence'], keywordsJa: ['簡素', '自然', '自由', '独立'],
    story: { scene: { zh: '瓦尔登湖畔的小木屋里，梭罗用两磅多的斧头建造了自己的住所。屋高十英尺，宽十五英尺。全部花费二十八美元十二美分。', en: 'In a small cabin by Walden Pond, Thoreau built his home with an axe worth two dollars. Ten feet high, fifteen wide. Total cost: twenty-eight dollars and twelve cents.', ja: 'ウォルデン湖畔の小さな小屋で、ソローは斧で自分の住居を建てた。高さ10フィート、幅15フィート。総費用は28ドル12セント。', el: 'Σε μια μικρή καλύβα κοντά στη λίμνη Ουόλντεν, ο Θόροου έχτισε το σπίτι του. Κόστος: 28 δολάρια και 12 σεντς.' }, detail: { zh: '他借了朋友爱默生的一块地，在湖边独自生活了两年两个月零两天。期间自己种豆子、钓鱼、做木工。最有名的来访者是他的哥哥和母亲。', en: 'He borrowed land from his friend Emerson and lived alone by the lake for two years, two months, and two days. He grew beans, fished, and did carpentry.', ja: '友人エマーソンの土地を借り、湖のほとりで2年2か月と2日間一人暮らしした。豆を育て、釣り、大工仕事をした。', el: 'Δανείστηκε γη από τον φίλο του Έμερσον και έζησε μόνος για δύο χρόνια, δύο μήνες και δύο ημέρες.' }, moment: { zh: '有人问他独居不孤独吗？他说：我从未找到一个伙伴比孤独更友善。在大自然里，我听到的声音永远比人声更真诚。', en: 'Asked if he was lonely living alone: I never found a companion more companionable than solitude. In nature, the sounds I hear are always more genuine than human voices.', ja: '独居して寂しくないかと問かれ。「孤独ほど親しみの伴を見つけたことがない」。自然の中で聞く音はいつも人間の声より真実だ。', el: 'Ρωτήθηκε αν ένιωθε μόνος: «Δεν βρήκα ποτέ σύντροφο πιο συντροφικό από τη μοναξιά».' } },
    resonance: { zh: '你每天刷三小时手机，却说没时间读一本书。梭罗在瓦尔登湖证明了：人真正需要的物质其实很少。你焦虑的大多数问题，都是因为想要的太多，需要的太少。', en: 'You scroll three hours a day but say you have no time to read. Thoreau proved at Walden: we need very little materially. Most anxiety comes from wanting too much, needing too little.', ja: '毎日3時間スマホをスクロールして、本を読む時間がないと言う。ソローは証明した。人が本当に必要なものは実は少ない。', el: 'Κάνεις scroll τρεις ώρες τη μέρα αλλά λες ότι δεν έχεις χρόνο. Ο Θόροου απέδειξε: χρειαζόμαστε πολύ λίγα.' }
  },
  {
    id: 21,
    quote: { zh: '穷则独善其身，达则兼善天下。', en: 'In obscurity, cultivate oneself; in prominence, benefit the world.', ja: '窮すればすなわち独り身を善くし、達すればすなわち天下を兼ねて善くす。', el: 'Στην αφάνεια, καλλιέργησε τον εαυτό· στη δόξα, ωφέλησε τον κόσμο.' },
    philosopher: { zh: '孟子', en: 'Mencius', ja: '孟子', el: 'Μένκιος' },
    era: { zh: '战国·儒家', en: 'Warring States · Confucianism', ja: '戦国・儒家', el: 'Περίοδος των Πολεμιστών Κρατών · Κομφουκιανισμός' },
    keywords: ['仁政', '性善', '气节', '天下'], keywordsEn: ['benevolent governance', 'innate goodness', 'integrity', 'world'], keywordsJa: ['仁政', '性善', '気節', '天下'],
    story: { scene: { zh: '齐国的大殿上，孟子面对齐宣王的质问，毫不退让。齐王说：你说的仁政好是好，但太不现实。孟子回答：用仁政统一天下，就像翻转手掌一样容易。', en: 'In the palace of Qi, King Xuan questioned Mencius: your benevolent governance sounds good but is unrealistic. Mencius replied: uniting the world with benevolence is as easy as flipping your hand.', ja: '斉の大殿で、孟子は斉の宣王の质问に退かなかった。「仁政はよいが非現実的だ」。「仁政で天下を統一するのは手を返すほど容易」', el: 'Στο παλάτι του Τσι, ο Μένκιος απάντησε στον βασιλιά: «Η benevolent governance είναι εύκολη σαν να γυρίζεις το χέρι σου».' }, detail: { zh: '他是孔子之孙子思的再传弟子，一生周游列国推广仁政。但当时的各国君主都忙着打仗，没人听他的。他七十岁才回到家乡，和弟子们一起写出了《孟子》七篇。', en: 'A student of Confucius grandson Zisi, he traveled all states promoting benevolent governance. No ruler listened—they were too busy fighting. At seventy, he returned home and wrote seven chapters.', ja: '孔子の孫の子思の再伝弟子。諸国を巡って仁政を説いたが、誰も聞かなかった。七十歳で故郷に戻り、弟子たちと「孟子」七篇を書いた。', el: 'Μαθητής του εγγονού του Κομφούκιου, ταξίδεψε σε όλα τα κράτη. Κανείς ηγεμόνας δεν άκουγε.' }, moment: { zh: '临终前弟子问他：您游说诸侯多年，一个采纳的都没有，不觉得遗憾吗？孟子说：我说了该说的话，至于他们做不做，不是我的事。', en: 'Asked on his deathbed if he regretted that no ruler listened: I said what needed to be said. Whether they did it was never my business.', ja: '臨終前に弟子が問われた。「誰も聞き入れませんでしたが、後悔は？」。「言うべきことを言った。やるかどうかは彼らの問題」。', el: 'Ρωτήθηκε στο νεκροκρέβατο αν μετάνιωνε που κανένας ηγεμόνας δεν άκουγε: «Είπα όσα έπρεπε. Αν τα έκαναν δεν ήταν δική μου δουλειά».' } },
    resonance: { zh: '混得不好时别怨天尤人，先把自己照顾好；混得好时别忘本，想想能帮到谁。孟子这两句话，把一个人一生最重要的两个阶段的处世哲学都说透了。', en: 'When struggling, take care of yourself first. When thriving, remember to help others. Mencius captured the philosophy of both life stages in one sentence.', ja: 'うまくいかないときはまず自分を大切に。うまくいくときは他人を助けることを忘れずに。孟子はこの二つの人生の段階の哲学を一言で言い表した。', el: 'Όταν δυσκολεύεσαι, φρόντισε πρώτα τον εαυτό σου. Όταν τα πας καλά, θυμήσου να βοηθήσεις.' }
  },
  {
    id: 22,
    quote: { zh: '自由是对必然的认识。', en: 'Freedom is the recognition of necessity.', ja: '自由とは必然性の認識である。', el: 'Η ελευθερία είναι η αναγνώριση της αναγκαιότητας.' },
    philosopher: { zh: '斯宾诺莎', en: 'Spinoza', ja: 'スピノザ', el: 'Σπινόζα' },
    era: { zh: '荷兰·理性主义', en: 'Dutch · Rationalism', ja: 'オランダ・合理主義', el: 'Ολλανδία · Ρασιοναλισμός' },
    keywords: ['自由', '必然', '理性', '神'], keywordsEn: ['freedom', 'necessity', 'reason', 'God'], keywordsJa: ['自由', '必然', '理性', '神'],
    story: { scene: { zh: '阿姆斯特丹的镜片作坊里，斯宾诺莎每天花八个小时打磨透镜。他一生没有固定住所，靠磨镜片谋生。灰尘侵蚀了他的肺，四十四岁就去世了。', en: 'In an Amsterdam lens workshop, Spinoza spent eight hours a day grinding lenses. He lived without a permanent home, earning a living from lens-making. Dust eroded his lungs; he died at 44.', ja: 'アムステルダムのレンズ工房で、スピノザは1日8時間レンズを研磨した。定住せずレンズ研磨で生計を立てた。', el: 'Σε ένα εργαστήριο φακών στο Άμστερνταμ, ο Σπινόζα έτριβε φακούς οκτώ ώρες την ημέρα.' }, detail: { zh: '他原本是犹太人社区的天才少年，但因为质疑宗教教义被逐出教会。教会诅咒他，禁止任何人与他来往。他平静地接受，在斗篷上绣了一行字：我选择了真理，而非安逸。', en: 'Once a prodigy of the Jewish community, he was excommunicated for questioning doctrine. The church cursed him. He calmly accepted it, embroidering on his cloak: I chose truth, not comfort.', ja: 'ユダヤ人社区の天才少年だったが、教義を疑問視して破門された。教会は彼を呪った。彼は静かに受け入れ、マントに刺繍した。「真理を選んだ、安逸ではない」。', el: 'Πρώην θαύμα της εβραϊκής κοινότητας, αφορίστηκε για αμφισβήτηση του δόγματος. Διάλεξε την αλήθεια, όχι την άνεση.' }, moment: { zh: '去世前，他在病床上修改《伦理学》的手稿。朋友来看他，问还有什么未完成的事。他说：书已写完了，剩下的只有磨镜片了。然后安静地闭上眼睛。', en: 'On his deathbed, he was correcting the manuscript of Ethics. Asked if anything remained unfinished: The book is done. Only the lens grinding remains. Then he closed his eyes.', ja: '臨終の病床で「倫理学」の原稿を校正していた。「まだ未完成のことは？」。「本は終わった。レンズ研磨が残っているだけだ」。静かに目を閉じた。', el: 'Στο νεκροκρέβατο διόρθωνε το χειρόγραφο της Ηθικής. «Το βιβλίο τελείωσε. Μόνο η λείανση φακών απομένει».' } },
    resonance: { zh: '你觉得不自由是因为被太多东西束缚：房贷、工作、人际关系。但斯宾诺莎说，真正的自由不是摆脱一切，而是认清什么是必然的。天气你管不了，但你能决定是否带伞。', en: 'You feel unfree because of mortgages, work, relationships. But Spinoza said: true freedom is not escaping everything, but recognizing what is necessary. You cannot control the weather, but you can choose to bring an umbrella.', ja: 'ローン、仕事、人間関係に縛られて不自由を感じる。しかしスピノザは言った。真の自由はすべてから逃れることではなく、必然的なものを認めることだ。天気は変えられないが傘を持つかどうかは選べる。', el: 'Νιώθεις δέσμιος από υποθήκες, δουλειά, σχέσεις. Αλλά ο Σπινόζα είπε: η πραγματική ελευθερία δεν είναι η απόδραση από όλα, αλλά η αναγνώριση του αναγκαίου.' }
  },
  {
    id: 23,
    quote: { zh: '本来无一物，何处惹尘埃。', en: 'Originally there is not a single thing; where can dust alight?', ja: '本来一物無し、何れの処にか塵埃を惹きん。', el: 'Εξ αρχής δεν υπάρχει ούτε ένα πράγμα· πού μπορεί να καθίσει η σκόνη;' },
    philosopher: { zh: '慧能', en: 'Huineng', ja: '慧能', el: 'Χουινένγκ' },
    era: { zh: '唐代·禅宗', en: 'Tang Dynasty · Chan Buddhism', ja: '唐代・禅宗', el: 'Δυναστεία Τανγκ · Τσαν Βουδισμός' },
    keywords: ['空', '顿悟', '本心', '无我'], keywordsEn: ['emptiness', 'sudden enlightenment', 'original mind', 'no-self'], keywordsJa: ['空', '頓悟', '本心', '無我'],
    story: { scene: { zh: '黄梅东山寺的走廊里，一个来自岭南的舂米工人在墙壁上写下了那首著名的偈语。他不识字，却在听到别人诵读《金刚经》时瞬间开悟。', en: 'In the corridor of Dongshan Temple, a rice-pounding worker from Lingnan wrote his famous verse on the wall. Illiterate, he achieved enlightenment the moment he heard the Diamond Sutra recited.', ja: '黄檗東山寺の廊下で、嶺南から来た米搗き労働者が壁に有名な偈を書いた。文字を読めなかったが、金剛経を聞いて瞬間に悟った。', el: 'Στον διάδρομο του Ντόνγκσαν, ένας εργάτης που χτυπούσε ρύζι έγραψε τον διάσημο στίχο του στον τοίχο.' }, detail: { zh: '他本是广东新州的一个普通樵夫，父亲早逝，靠砍柴养母。到黄梅求法后，被安排在厨房舂米八个月。寺中的上座神秀博学多才，作偈身是菩提树心如明镜台。而慧能只改了二十个字，就得到了衣钵。', en: 'He was an ordinary woodcutter from Xinzhou, Guangdong. After arriving at the monastery, he pounded rice in the kitchen for eight months. The senior monk Shenxiu wrote: the body is a bodhi tree, the mind a mirror. Huineng changed twenty characters and received the robe.', ja: '広東新州の普通の木こりだった。寺院に到着後、厨房で8か月米を搗いた。神秀は「身は菩提樹、心は明鏡台」と詠んだ。慧能は二十字を変えただけで衣鉢を得た。', el: 'Ήταν απλός ξυλοκόπος. Μετά την άφιξη στο μοναστήρι, χτυπούσε ρύζι για οκτώ μήνες.' }, moment: { zh: '得法后他隐姓埋名十六年，藏在猎人队伍中吃肉边菜。直到机缘成熟才在广州法性寺剃度出家。有人问他为什么藏这么久。他说：时候未到，急什么。', en: 'After receiving the robe, he hid among hunters for sixteen years, eating only vegetables from the edges of their pots. Asked why he hid so long: The time had not come. Why rush?', ja: '衣鉢を受けた後、16年間狩人たちの中に隠れ、鍋の隅の野菜だけを食べた。「なぜそんなに長く隠れたのか」。「時が来なかった。急ぐな」。', el: 'Μετά τη λήψη του ράσου, κρύφτηκε ανάμεσα σε κυνηγούς για δεκαέξι χρόνια.' } },
    resonance: { zh: '我们总觉得需要不断擦拭自己——学更多课程、读更多书、做更多准备。但慧能告诉你：其实你什么都不缺。尘埃本来就不存在。', en: 'We always feel we need to polish ourselves—more courses, more books, more preparation. But Huineng says: you lack nothing. The dust was never there.', ja: '私たちはいつも自分を磨き続ける必要があると感じる。しかし慧能は言う。実はあなたは何も欠けていない。塵埃はもともと存在しない。', el: 'Πάντα νιώθουμε ότι πρέπει να γυαλίζουμε τον εαυτό μας. Αλλά ο Χουινένγκ λέει: δεν σου λείπει τίποτα.' }
  },
  {
    id: 24,
    quote: { zh: '我不同意你的观点，但我誓死捍卫你说话的权利。', en: 'I disapprove of what you say, but I will defend to the death your right to say it.', ja: 'あなたの意見には賛成できない。だがあなたがそれを言う権利は命をかけて守る。', el: 'Δεν συμφωνώ με αυτά που λες, αλλά θα υπερασπιστώ μέχρι θανάτου το δικαίωμά σου να τα λες.' },
    philosopher: { zh: '伏尔泰', en: 'Voltaire', ja: 'ヴォルテール', el: 'Βολταίρος' },
    era: { zh: '法国·启蒙运动', en: 'France · Enlightenment', ja: 'フランス・啓蒙運動', el: 'Γαλλία · Διαφωτισμός' },
    keywords: ['言论自由', '宽容', '理性', '批判'], keywordsEn: ['free speech', 'tolerance', 'reason', 'criticism'], keywordsJa: ['言論の自由', '寛容', '理性', '批判'],
    story: { scene: { zh: '巴黎的沙龙里，满头银发的伏尔泰正和一位年轻教士激烈辩论。辩论结束后，他举杯向对方致敬：您的观点荒谬至极，但我为您捍卫它的勇气鼓掌。', en: 'In a Paris salon, silver-haired Voltaire debated a young priest. After the debate, he raised his glass: Your views are absurd, but I applaud your courage to defend them.', ja: 'パリのサロンで、白髪のヴォルテールが若い司祭と激しく論じた。討論後、グラスを掲げて敬意を表した。「あなたの見解は愚かだが、それを擁護する勇気に拍手を送る」。', el: 'Σε ένα σαλόνι στο Παρίσι, ο ασημομάλλης Βολταίρος διαφωνούσε με έναν νεαρό ιερέα. Σήκωσε το ποτήρι του: «Οι απόψεις σας είναι παράλογες, αλλά χειροκροτώ το θάρρος σας».' }, detail: { zh: '他因讽刺权贵被关进巴士底狱十一个月，出狱后被驱逐出法国。在英国流亡的三年是他思想最自由的时光——他亲眼看到了言论自由和宗教宽容的力量。', en: 'Imprisoned in the Bastille for eleven months for satirizing the powerful, he was exiled from France. His three years in England were his most intellectually free—witnessing free speech and religious tolerance firsthand.', ja: '権力を風刺してバスティーユ牢獄に11か月投獄され、フランスから追放された。英国での3年間の亡命が最も思想的に自由な時間だった。', el: 'Φυλακίστηκε στη Βαστίλη για έντεκα μήνες, εξορίστηκε από τη Γαλλία. Τα τρία χρόνια στην Αγγλία ήταν τα πιο ελεύθερά του.' }, moment: { zh: '晚年定居费尔奈庄园，他收留了受迫害的新教徒，为他们辩护。当教廷威胁他时，他回信：你们可以烧死我，但烧不死我写的字。', en: 'In his later years at Ferney, he sheltered persecuted Protestants. When the Church threatened him, he replied: You can burn me, but you cannot burn what I wrote.', ja: '晩年フェルネーの荘園で、迫害されたプロテスタントを庇護した。教会が脅すと、「私を焼くことはできるが、私が書いた文字は焼けない」と返信した。', el: 'Στα τελευταία του χρόνια στο Φερνέ, φιλοξένησε διωκόμενους Προτεστάντες. «Μπορείτε να με κάψετε, αλλά όχι αυτά που έγραψα».' } },
    resonance: { zh: '在网上看到不同意见就想骂回去？伏尔泰说：先别急。你最讨厌的那个人，也有把想法说出来的权利。这不是软弱，而是文明。', en: 'See a different opinion online and want to attack? Voltaire says: hold on. Even the person you hate most has the right to speak their mind. This is not weakness—it is civilization.', ja: 'ネットで違う意見を見ると攻撃したくなる？ヴォルテールは言う。待て。あなたが最も嫌う人にも発言する権利がある。これは弱さではない。文明だ。', el: 'Βλέπεις διαφορετική άποψη online και θέλεις να επιτεθείς; Ο Βολταίρος λέει: περίμενε. Ακόμη και αυτός που μισείς έχει δικαίωμα να μιλήσει.' }
  }
,
  {
    id: 25,
    quote: { zh: '天下古今之庸人，皆以一惰字致败。', en: 'Mediocrity, throughout history, always comes down to one word: laziness.', ja: '天下古今の庸人は、みな一「惰」の字をもって敗る。', el: 'Η μετριότητα, σε όλη την ιστορία, ανάγεται σε μία λέξη: τεμπελιά.' },
    philosopher: { zh: '曾国藩', en: 'Zeng Guofan', ja: '曽国藩', el: 'Ζενγκ Γκουοφάν' },
    era: { zh: '晚清', en: 'Late Qing Dynasty', ja: '晩清', el: 'Ύστερη Δυναστεία Τσινγκ' },
    keywords: ['勤奋', '自律', '自省', '恒心'], keywordsEn: ['diligence', 'self-discipline', 'reflection', 'perseverance'], keywordsJa: ['勤勉', '自律', '自省', '恒常'],
    story: { scene: { zh: '湖南乡间的书房里，年轻的曾国藩正在日记里痛骂自己。今天又偷懒了，又和朋友下棋了，又没完成读书计划。他把这些自责写进日记，几十年如一日，从不间断。', en: 'In his Hunan study, young Zeng scolded himself in his diary: lazy again, played chess again, failed to finish reading again. He wrote these self-criticisms daily for decades.', ja: '湖南の書斎で、若い曽国藩は日記に自分自身を厳しく叱った。「また怠けた、また碁を打った、また読書計画を達成できなかった」。これを数十年間毎日書き続けた。', el: 'Στη μελέτη του στο Χουνάν, ο νεαρός Ζενγκ μάλωνε τον εαυτό του στο ημερολόγιό του. Το έκανε καθημερινά για δεκαετίες.' }, detail: { zh: '他天生资质平平，考了七次才中秀才。一个贼人半夜潜入他家，躲在房梁上等他睡着再偷。结果贼人等了一夜——曾国藩背一篇文章背了几十遍都没背下来。贼人终于忍不住跳下来，把文章完整背了一遍，扬长而去。但就是这个笨人，最终成为晚清第一重臣。', en: 'He took the imperial exam seven times before passing. A thief hid on his beam waiting for him to sleep, but Zeng recited one passage dozens of times without memorizing it. The thief finally jumped down, recited it perfectly, and left in disgust. Yet this笨 person became the most powerful minister of the late Qing.', ja: '彼は科挙に七回も合格しなかった。泥棒が梁の上に隠れていたが、曽が一文を何十回も暗唱できなかった。泥棒はついに降りてきて完璧に暗唱して去っていった。だがこの「鈍才」が晩清の第一重臣になった。', el: 'Έδωσε τις αυτοκρατορικές εξετάσεις επτά φορές πριν περάσει. Ένας κλέφτης περίμενε στη δοκό αλλά ο Ζενγκ δεν μπορούσε να αποστηθίσει ένα κείμενο.' }, moment: { zh: '晚年他总结自己一生的经验：唯天下之至诚，能胜天下之至伪；唯天下之至拙，能胜天下之至巧。', en: 'In his later years, he summarized his life: Only the utmost sincerity can defeat the utmost hypocrisy; only the utmost clumsiness can defeat the utmost cleverness.', ja: '晩年、彼は人生の経験をまとめた。「天下の至誠のみ、天下の至偽に克つ。天下の至拙のみ、天下の至巧に克つ」。', el: 'Στα τελευταία του χρόνια: «Μόνο η απόλυτη ειλικρίνεια νικά την απόλυτη υποκρισία».' } },
    resonance: { zh: '总觉得自己不够聪明、不够天赋异禀？曾国藩连一篇文章都背不下来，贼人都替他着急。但他靠着每天写日记反省、每天读书的笨功夫，硬生生逆袭成晚清最有影响力的人。天资平庸不可怕，可怕的是你连曾国藩的笨功夫都不愿意下。', en: 'Feel not smart enough? Zeng could not even memorize one passage—a thief did it for him. But through daily diary reflection and daily reading, he became the most influential person of the late Qing. Being average is not scary; being too lazy to do the basic work is.', ja: '自分が十分に賢くないと感じる？曽国藩は一文すら暗唱できず、泥棒も彼のために心配した。だが毎日日記と読書の鈍功夫で晩清で最も影響力のある人物になった。平凡であることは恐ろしくない。曽国藩の鈍功夫さえやりたくないことが恐ろしい。', el: 'Νιώθεις ότι δεν είσαι αρκετά έξυπνος; Ο Ζενγκ δεν μπορούσε καν να αποστηθίσει ένα κείμενο. Αλλά με καθημερινή αυτοκριτική και ανάγνωση έγινε ο πιο ισχυρός άνθρωπος.' }
  },
  {
    id: 26,
    quote: { zh: '人是一根会思考的芦苇。', en: 'Man is but a reed, the weakest in nature, but he is a thinking reed.', ja: '人間は考える葦にすぎない。', el: 'Ο άνθρωπος είναι μόνο ένα καλάμι, το πιο αδύναμο στη φύση, αλλά είναι ένα σκεπτόμενο καλάμι.' },
    philosopher: { zh: '帕斯卡', en: 'Pascal', ja: 'パスカル', el: 'Πασκάλ' },
    era: { zh: '法国·古典主义', en: 'France · Classicism', ja: 'フランス・古典主義', el: 'Γαλλία · Κλασικισμός' },
    keywords: ['脆弱', '思想', '尊严', '宇宙'], keywordsEn: ['fragility', 'thought', 'dignity', 'universe'], keywordsJa: ['脆さ', '思考', '尊厳', '宇宙'],
    story: { scene: { zh: '巴黎的冬夜里，十八岁的帕斯卡完成了人类历史上第一台机械计算器——帕斯卡计算器。他的父亲是一位税务官，每天都要花大量时间做繁琐的算术。于是儿子发明了一台机器来帮父亲。', en: 'In a Paris winter night, 18-year-old Pascal completed the first mechanical calculator in human history. His father was a tax collector who spent hours on tedious arithmetic. So the son invented a machine to help.', ja: 'パリの冬の夜、18歳のパスカルは人類史上最初の機械式計算機を完成させた。父は税務官で、毎日膨大な計算に時間を費やしていた。息子は父を助けるために機械を発明した。', el: 'Σε μια χειμωνιάτικη νύχτα στο Παρίσι, ο 18χρονος Πασκάλ ολοκλήρωσε την πρώτη μηχανική υπολογιστική μηχανή.' }, detail: { zh: '他体弱多病，一生被头痛和消化不良折磨，只活到三十九岁。但在如此短暂的生命中，他既是数学家、物理学家、发明家，又是哲学家和神学家。他在概率论、流体力学、几何学上都做出了开创性贡献。', en: 'He was frail and sickly, tormented by headaches and indigestion, living only to 39. Yet in that brief life he was mathematician, physicist, inventor, philosopher, and theologian—pioneering probability theory, fluid mechanics, and geometry.', ja: '病弱で、頭痛と消化不良に悩まされ、39歳で亡くなった。だがその短い生涯で数学者、物理学者、発明家、哲学者、神学者となった。', el: 'Ήταν ασθενικός, βασανισμένος από πονοκεφάλους, έζησε μόνο μέχρι 39. Αλλά σε αυτή τη σύντομη ζωή ήταν μαθηματικός, φυσικός, φιλόσοφος και θεολόγος.' }, moment: { zh: '他去世后，人们在缝他的衣服夹层里发现了一张手稿——《思想录》的片段。其中写道：整个宇宙可以用一根芦苇来摧毁人类，但即使宇宙摧毁了人类，人类依然比宇宙更高贵，因为人类知道自己会死，而宇宙不知道。', en: 'After his death, sewn into his coat lining, they found a manuscript—fragments of Pensées. The universe could crush man like a reed, but even so, man is nobler because he knows he dies, and the universe knows nothing.', ja: '死後、コートの裏地に縫い込まれた原稿が見つかった。「思考録」の断片だった。宇宙は人間を葦のように押しつぶせる。それでも人間の方が宇宙より高貴だ。なぜなら人間は自分が死ぬことを知っているが、宇宙は何も知らないから。', el: 'Μετά θάνατον, βρήκαν ένα χειρόγραφο ραμμένο στη φόδρα του παλτού του. Το σύμπαν μπορεί να συνθλίψει τον άνθρωπο σαν καλάμι, αλλά ο άνθρωπος είναι ευγενέστερος γιατί ξέρει ότι πεθαίνει.' } },
    resonance: { zh: '你觉得自己渺小吗？帕斯卡说：是的，在宇宙面前你就是一根芦苇，一口气就能杀死你。但你和芦苇的不同在于——你知道自己渺小。这份自我意识，就是你的尊严。', en: 'Feel small? Pascal says: yes, before the universe you are a reed, a breath can kill you. But you differ from the reed—you know you are small. That self-awareness is your dignity.', ja: '自分がちっぽけだと思う？パスカルは言う。そうだ、宇宙の前ではあなたは葦にすぎない。しかしあなたは自分がちっぽけだと知っている。その自己認識があなたの尊厳だ。', el: 'Νιώθεις μικρός; Ο Πασκάλ λέει: ναι, μπροστά στο σύμπαν είσαι ένα καλάμι. Αλλά διαφέρεις από το καλάμι—ξέρεις ότι είσαι μικρός.' }
  },
  {
    id: 27,
    quote: { zh: '不期修古，不法常可。', en: 'Do not expect to follow the ancient ways; do not take the conventional as the standard.', ja: '古を修むるを期せず、常可を法とせず。', el: 'Μην περιμένεις να ακολουθείς τους αρχαίους τρόπους· μην παίρνεις το συνηθισμένο ως πρότυπο.' },
    philosopher: { zh: '韩非子', en: 'Han Feizi', ja: '韓非子', el: 'Χαν Φεϊζί' },
    era: { zh: '战国末期·法家', en: 'Late Warring States · Legalism', ja: '戦国末期・法家', el: 'Ύστερη Περίοδος · Νομικισμός' },
    keywords: ['变革', '法治', '实用主义', '权术'], keywordsEn: ['reform', 'rule of law', 'pragmatism', 'statecraft'], keywordsJa: ['変革', '法治', '実用主義', '権術'],
    story: { scene: { zh: '韩国宫殿里，韩非站在堂上向韩王进言。他有严重的口吃，说话结巴，但写下的文章却字字如刀。韩王不听他的，他就闭门著书，写出了《韩非子》五十五篇。', en: 'In the palace of Han, Han Feizi stood before the king to advise. He had a severe stutter, but every word he wrote was sharp as a blade. Ignored by the king, he shut his doors and wrote 55 chapters.', ja: '韓の宮殿で、韓非は韓王に進言した。彼は重度の吃音だったが、書いた文章は一字一句が刀のようだった。韓王が聞かなかったので、彼は門を閉じて書を著した。', el: 'Στο παλάτι του Χαν, ο Χαν Φεϊζί στεκόταν μπροστά στον βασιλιά. Είχε σοβαρό τραύλισμα, αλλά κάθε λέξη που έγραφε ήταν κοφτερή σαν λεπίδα.' }, detail: { zh: '他是荀子的学生，却走向了与老师完全不同的道路。荀子相信教化，韩非相信制度。他游说秦王统一天下，文章传到秦国后，秦王嬴政拍案叫绝：如果能见到此人，死不恨矣！韩非入秦后却被李斯陷害，最终死于狱中。', en: 'A student of Xunzi, he went a completely different way. Xunzi believed in education; Han Feizi believed in systems. His writing reached the Qin king, who said: If I could meet this man, I would die without regret. But once in Qin, he was framed by Li Si and died in prison.', ja: '荀子の弟子だったが、師とは全く異なる道に進んだ。荀子は教化を信じ、韓非は制度を信じた。彼の文章が秦に届くと、秦王は「この人に会えれば死んでも悔いなし」と言った。しかし秦に入ると李斯に陥れられ獄中で死んだ。', el: 'Μαθητής του Σιουνγκζί, αλλά πήγε εντελώς διαφορετικό δρόμο. Ο βασιλιάς του Τσιν είπε: «Αν συναντούσα αυτόν τον άνθρωπο, θα πέθαινα χωρίς μετάνοια».' }, moment: { zh: '他在狱中服毒自尽前，对天叹道：我写了一辈子法治，最终却死在不法治的囚牢里。', en: 'Before taking poison in prison, he sighed to heaven: I wrote a lifetime about the rule of law, and I die in a lawless prison.', ja: '獄中で毒を飲んで自尽する前、彼は天に向かって嘆いた。「一生法治を書いて、最終的に不法治の牢獄で死ぬとは」。', el: 'Πριν πάρει το δηλητήριο στη φυλακή, αναστέναξε: «Έγραψα μια ζωή για το κράτος δικαίου και πεθαίνω σε μια άδικη φυλακή».' } },
    resonance: { zh: '别总说以前都是这样的。韩非子两千年前就说了：不守老规矩，不迷信惯例。时代变了，方法就得变。你工作中那些一直都是这样做的流程，可能正是该被推翻的东西。', en: 'Stop saying we have always done it this way. Han Feizi said 2,000 years ago: do not follow old rules blindly. Times change, methods must change. Those we have always done it this way processes at work may be exactly what needs to be overthrown.', ja: '「今までずっとこうやってきた」と言うな。韓非子は2000年前に言った。古い規則を守るな、慣例を迷信するな。時代が変われば方法も変わる必要がある。「ずっとこうしてきた」やり方はまさに覆されるべきものだ。', el: 'Σταμάτα να λες ότι πάντα έτσι το κάναμε. Ο Χαν Φεϊζί είπε πριν από 2.000 χρόνια: μην ακολουθείς τυφλά τους παλιούς κανόνες.' }
  },
  {
    id: 28,
    quote: { zh: '不是生命短暂，而是我们浪费了太多。', en: 'It is not that we have a short time to live, but that we waste much of it.', ja: '生きるのが短いのではない。多くの時間を無駄にしているのである。', el: 'Δεν είναι ότι έχουμε λίγο χρόνο να ζήσουμε, αλλά ότι σπαταλάμε πολύ από αυτόν.' },
    philosopher: { zh: '塞内卡', en: 'Seneca', ja: 'セネカ', el: 'Σενέκας' },
    era: { zh: '古罗马·斯多葛', en: 'Ancient Rome · Stoicism', ja: '古代ローマ・ストア派', el: 'Αρχαία Ρώμη · Στωικισμός' },
    keywords: ['时间', '浪费', '节制', '生死'], keywordsEn: ['time', 'waste', 'temperance', 'life and death'], keywordsJa: ['時間', '浪費', '節制', '生死'],
    story: { scene: { zh: '罗马宫廷的宴会上，塞内卡是皇帝尼禄的老师兼顾问。他富可敌国，却过着极其简朴的生活。他白天给暴君出谋划策，晚上回到书房写下关于如何好好活着的文字。', en: 'At a Roman court banquet, Seneca was Emperor Nero teacher and advisor. He was rich beyond measure but lived an extremely simple life. By day he advised a tyrant; by night he wrote about how to live well.', ja: 'ローマ宮廷の宴会で、セネカは皇帝ネロの師であり顧問だった。彼は国庫に匹敵する富を持ちながら、極めて簡素な生活を送った。昼は暴君に助言し、夜は書斎に戻って如何に良く生きるかを書いた。', el: 'Σε ένα συμπόσιο της ρωμαϊκής αυλής, ο Σενέκας ήταν δάσκαλος και σύμβουλος του Νέρωνα. Ήταν πλούσιος αλλά ζούσε απλά.' }, detail: { zh: '他曾因政治斗争被流放到科西嘉岛八年。在那里，他没有自怨自艾，而是写下了《论生命之短暂》——这本关于时间管理的著作，两千年后依然是经典。后来被尼禄召回，成为帝国最有权势的人之一。', en: 'Exiled to Corsica for eight years due to political struggle, he did not wallow in self-pity but wrote On the Shortness of Life—a book on time management still classic after two thousand years. Recalled by Nero, he became one of the most powerful men in the empire.', ja: '政争でコルシカ島に8年間追放された。そこで自己憐憫に浸らず、「人生の短さについて」を書いた。2000年後の今も古典である。ネロに呼び戻され、帝国で最も有力な人物の一人となった。', el: 'Εξορίστηκε στην Κορσική για οκτώ χρόνια. Δεν βυθίστηκε στην αυτολύπηση αλλά έγραψε «Για τη Συντομία της Ζωής».' }, moment: { zh: '尼禄命令他自杀时，他平静地割开手腕，一边流血一边向秘书口述最后的哲学思考。他死前说的话不是恐惧，而是一句平静的感慨：你让我等了太久才等到死亡这个朋友。', en: 'When Nero ordered him to commit suicide, he calmly cut his wrists, dictating his final philosophical thoughts to his secretary as he bled. His last words were not fear but a calm remark: You made me wait too long for death, my friend.', ja: 'ネロが自死を命じた時、彼は平静に手首を切り、出血しながら最後の哲学的思考を秘書に口述した。「あなたは私を長く待たせたな、死という友よ」。', el: 'Όταν ο Νέρωνας τον διέταξε να αυτοκτονήσει, έκοψε ήρεμα τους καρπούς του, υπαγορεύοντας τις τελευταίες σκέψεις του.' } },
    resonance: { zh: '你总说没时间。但塞内卡说：你有的，你只是浪费在了无意义的社交、无休止的刷屏、无目的的焦虑上。真正的问题不是命短，是你不知道怎么活。今晚少刷半小时手机，读一页书，这就是对时间的尊重。', en: 'You always say you have no time. But Seneca says: you do have it, you just waste it on meaningless socializing, endless scrolling, purposeless anxiety. The real problem is not short life but not knowing how to live.', ja: 'いつも時間がないと言う。しかしセネカは言う。時間は十分にある。意味のない社交、終わらないスクロール、目的のない不安に浪費しているだけだ。本当の問題は人生が短いことではなく、どう生きるかを知らないことだ。', el: 'Πάντα λες ότι δεν έχεις χρόνο. Αλλά ο Σενέκας λέει: έχεις, απλά τον σπαταλάς σε χωρίς νόημα κοινωνικοποίηση και endless scrolling.' }
  },
  {
    id: 29,
    quote: { zh: '死亡与我们无关，因为当我们存在时死亡不在，当死亡在时我们已不在。', en: 'Death is nothing to us, for when we are, death is not come, and when death is come, we are not.', ja: '死は我々にとって何ものでもない。我々あるとき死は来ず、死来るとき我々は已にあればなり。', el: 'Ο θάνατος δεν μας αφορά· όταν υπάρχουμε ο θάνατος δεν υπάρχει, και όταν έρθει ο θάνατος εμείς δεν υπάρχουμε.' },
    philosopher: { zh: '伊壁鸠鲁', en: 'Epicurus', ja: 'エピクロス', el: 'Επίκουρος' },
    era: { zh: '古希腊·伊壁鸠鲁学派', en: 'Ancient Greece · Epicureanism', ja: '古代ギリシャ・エピクロス派', el: 'Αρχαία Ελλάδα · Επικουρισμός' },
    keywords: ['快乐', '死亡', '平静', '节制'], keywordsEn: ['pleasure', 'death', 'tranquility', 'temperance'], keywordsJa: ['快楽', '死', '平静', '節制'],
    story: { scene: { zh: '雅典郊外的花园里，伊壁鸠鲁和他的朋友们席地而坐，分享着面包和橄榄。这里是古希腊第一所接纳女性和奴隶的哲学学校——在等级森严的时代，这本身就是革命。', en: 'In a garden outside Athens, Epicurus and his friends sat on the ground sharing bread and olives. This was the first school in ancient Greece to accept women and slaves—in a rigidly hierarchical age, this itself was revolutionary.', ja: 'アテネ郊外の庭園で、エピクロスと友人たちは地に座りパンとオリーブを分かち合った。これは古代ギリシャで初めて女性と奴隷を受け入れた哲学学校だった。', el: 'Σε έναν κήπο έξω από την Αθήνα, ο Επίκουρος και οι φίλοι του κάθονταν στο χώμα μοιραζόμενοι ψωμί και ελιές. Ήταν η πρώτη σχολή που δεχόταν γυναίκες και δούλους.' }, detail: { zh: '他一生清贫，靠朋友们的接济维持生活。但他的快乐哲学不是纵欲——相反，他主张最简单的快乐：一顿粗茶淡饭、一次真诚的对话、一个没有恐惧的夜晚。他说：给我一杯水、一块面包，我就能和宙斯比幸福。', en: 'He lived in poverty his entire life, sustained by friends generosity. But his philosophy of pleasure was not indulgence—he advocated the simplest joys: a plain meal, a sincere conversation, a night without fear. Give me water and bread, and I will rival Zeus in happiness.', ja: '彼は一生貧しく、友人たちの支援で生計を立てた。だが彼の快楽哲学は放縦ではなかった。最も単純な快楽を主張した。質素な食事、誠実な対話、恐怖のない夜。「水とパンがあれば、ゼウスと幸福を競える」と言った。', el: 'Έζησε στη φτώχεια όλη του τη ζωή. Αλλά η φιλοσοφία του για την ηδονή δεν ήταν ακολασία—υποστήριζε τις απλούστερες χαρές.' }, moment: { zh: '临终时他全身剧痛，但对来访者说：今天是我一生中最快乐的日子。不是因为痛苦消失了，而是因为快乐的回忆淹没了痛苦。', en: 'On his deathbed, in agonizing pain, he told visitors: This is the happiest day of my life. Not because the pain disappeared, but because the memory of joy drowned it out.', ja: '臨終の激痛の中で、訪問者に言った。「今日は人生で最も幸せな日だ」。痛みが消えたからではない。喜びの記憶が痛みを飲み込んだから。', el: 'Στο νεκροκρέβατο, σε φρικτό πόνο, είπε στους επισκέπτες: «Αυτή είναι η πιο ευτυχισμένη μέρα της ζωής μου». Όχι επειδή ο πόνος εξαφανίστηκε, αλλά επειδή η μνήμη της χαράς τον πνίγει.' } },
    resonance: { zh: '害怕死亡是人类最原始的本能。但伊壁鸠鲁说：你不需要害怕一件你永远不会经历的事。你活着的时候死不了，你死了的时候没感觉。焦虑那些万一的时候，想想这句话——它们和你无关。', en: 'Fear of death is the most primal human instinct. But Epicurus says: you need not fear something you will never experience. While alive, death is not here. When death comes, you are not here. Those what-ifs have nothing to do with you.', ja: '死への恐怖は人類の最も原始的な本能だ。しかしエピクロスは言う。決して経験しないものを恐れる必要はない。生きているとき死は来ない。死が来るときあなたはもういない。', el: 'Ο φόβος του θανάτου είναι το πιο πρωτόγονο ένστικτο. Αλλά ο Επίκουρος λέει: δεν χρειάζεται να φοβάσαι κάτι που δεν θα βιώσεις ποτέ.' }
  },
  {
    id: 30,
    quote: { zh: '穿衣吃饭，即是人伦物理。', en: 'Putting on clothes and eating meals — that is the true nature of human ethics.', ja: '衣を着て飯を食う、これ即ち人倫物理なり。', el: 'Το να ντύνεσαι και να τρως — αυτή είναι η αληθινή φύση της ανθρώπινης ηθικής.' },
    philosopher: { zh: '李贽', en: 'Li Zhi', ja: '李贄', el: 'Λι Ζι' },
    era: { zh: '明代·泰州学派', en: 'Ming Dynasty · Taizhou School', ja: '明代・泰州学派', el: 'Δυναστεία Μινγκ · Σχολή Ταϊτζόου' },
    keywords: ['反叛', '本色', '真实', '世俗'], keywordsEn: ['rebellion', 'authenticity', 'truth', 'the mundane'], keywordsJa: ['反逆', '本質', '真実', '世俗'],
    story: { scene: { zh: '湖北麻城的龙湖芝佛院里，六十三岁的李贽剃发为僧，却不守清规。他吃肉、喝酒、收女弟子，还公开说人皆有私心。这在理学独尊的明代，简直是离经叛道。', en: 'At Longhu Zhifo Temple in Macheng, Hubei, 63-year-old Li Zhi shaved his head as a monk but refused to follow monastic rules. He ate meat, drank wine, accepted female students, and publicly declared that everyone has selfish desires. In Ming Dynasty China, this was pure rebellion.', ja: '湖北麻城の龍湖芝仏院で、63歳の李贄は剃髪して僧となったが清規を守らなかった。彼は肉を食べ、酒を飲み、女子弟子を受け入れ、公然と「人は皆私心あり」と言った。理学が独占した明代において、これはまさに異端だった。', el: 'Στον ναό Λονγκχού στο Μάτσενγκ, ο 63χρονος Λι Ζι ξύρισε το κεφάλι του ως μοναχός αλλά αρνήθηκε να ακολουθήσει τους κανόνες.' }, detail: { zh: '他曾任云南姚安知府，任期届满后不愿再做官，开始四处讲学。他的《焚书》和《藏书》被官方列为禁书，但他毫不在意。他说：我写的书，就是给后人烧了玩的。朝廷说他妖言惑众，他却说：我只是说出了人人想说但不敢说的话。', en: 'He once served as prefect of Yaoan in Yunnan. After his term, he refused to be an official again and began lecturing everywhere. His books Burning Books and Hidden Books were banned by the state, but he did not care. I wrote my books for future generations to burn for fun. They said he corrupted the people; he said he only spoke what everyone wanted to say but dared not.', ja: '雲南姚安の知府を務めたが、任期終了後再び官になることを拒み、各地で講学を始めた。「焚書」と「蔵書」は官により禁書となったが、彼は気にしなかった。「私の本は後世の人が焼いて遊ぶためだ」。', el: 'Υπηρέτησε ως έπαρχος στο Γιοανάν. Μετά τη θητεία του αρνήθηκε να ξαναγίνει αξιωματούχος και άρχισε να διδάσκει παντού.' }, moment: { zh: '七十六岁时，朝廷以敢倡乱道惑世诬民的罪名将他逮捕入狱。在狱中，他用剃刀自刎。死前留下最后一句话：我一生追求真，现在终于可以用死来证明我的真了。', en: 'At 76, the court arrested him for daring to spread heretical doctrines and deceive the public. In prison, he cut his own throat with a razor. His last words: I spent my life pursuing truth, and now I can prove it with my death.', ja: '76歳の時、朝廷は「異端を唱え世人を惑わす」の罪で彼を逮捕し投獄した。獄中で剃刀で自刎した。最後の言葉は「私は一生真を追求してきた。今ようやく死をもって私の真を証明できる」。', el: 'Στα 76, το δικαστήριο τον συνέλαβε για διάδοση αιρετικών διδασκαλιών. Στη φυλακή, έκοψε τον λαιμό του με ξυράφι.' } },
    resonance: { zh: '活在一个人人都戴着面具的时代，敢做真实的自己就是一种叛逆。李贽说：穿衣吃饭就是人伦——别装，别演，别把简单的事情搞得高深莫测。你饿了就吃，困了就睡，有想法就说。活得真实，比活得正确更重要。', en: 'In an age where everyone wears masks, daring to be yourself is rebellion. Li Zhi said: eating and dressing is ethics—do not pretend, do not perform, do not make simple things complicated. Eat when hungry, sleep when tired, speak when you have thoughts. Living authentically is more important than living correctly.', ja: '誰もが仮面をつける時代において、自分らしくあることは一つの反逆だ。李贄は言った。衣食こそ人倫だ。演じるな。単純なことを難しくするな。腹が減ったら食べ、眠たくなったら眠れ。本物に生きることは正しく生きることより重要だ。', el: 'Σε μια εποχή όπου όλοι φοράνε μάσκες, το να τολμάς να είσαι ο εαυτός σου είναι επανάσταση. Ο Λι Ζι είπε: το φαγητό και το ντύσιμο είναι ηθική.' }
  }
];
