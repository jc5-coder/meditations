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
];
