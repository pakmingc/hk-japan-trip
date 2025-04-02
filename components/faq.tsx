import { HelpCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Faq() {
  const generalFaqs = [
    {
      question: "需要攜帶什麼文件？",
      questionEn: "What documents do I need to bring?",
      answer:
        "請確保攜帶有效護照、日本簽證、機票確認單、酒店預訂確認單以及旅遊保險證明。建議將這些文件的電子副本存儲在手機或雲端，以備不時之需。另外，請準備一些現金和信用卡，以及任何必要的藥物處方。",
      answerEn:
        "Please ensure you have a valid passport, Japan visa, flight confirmation, hotel booking confirmations, and travel insurance proof. It's recommended to keep electronic copies of these documents on your phone or in the cloud for backup. Also, prepare some cash and credit cards, as well as any necessary medication prescriptions.",
    },
    {
      question: "日本的天氣如何？需要帶什麼衣物？",
      questionEn: "How's the weather in Japan? What clothes should I pack?",
      answer:
        "4月的九州地區氣溫通常在15-20°C之間，早晚較涼。建議攜帶輕便外套、長袖衣物、舒適的步行鞋，以及一件防雨外套，因為春季可能會有陣雨。香港4月氣溫約20-25°C，較為溫暖。請查看出發前的天氣預報，以便做最後的調整。",
      answerEn:
        "In April, Kyushu typically has temperatures between 15-20°C, with cooler mornings and evenings. Pack light jackets, long-sleeved clothes, comfortable walking shoes, and a rain jacket as spring showers are possible. Hong Kong is warmer in April with temperatures around 20-25°C. Check the weather forecast before departure for any last-minute adjustments.",
    },
    {
      question: "有哪些必吃的當地美食？",
      questionEn: "What are the must-try local foods?",
      answer:
        "在熊本，必試熊本拉麵和馬肉壽司。由布院有美味的湯圓和特色甜點。柳川的鰻魚飯非常有名。福岡則以豚骨拉麵、明太子和海鮮聞名。香港方面，不要錯過點心、燒味和各種街頭小吃。我們的行程中已經安排了品嚐這些美食的機會。",
      answerEn:
        "In Kumamoto, try Kumamoto ramen and horse meat sushi. Yufuin has delicious dango and specialty desserts. Yanagawa is famous for unagi (eel) rice. Fukuoka is known for tonkotsu ramen, mentaiko, and seafood. In Hong Kong, don't miss dim sum, roasted meats, and various street foods. Our itinerary already includes opportunities to taste these delicacies.",
    },
    {
      question: "如何使用日本的公共交通？",
      questionEn: "How do I use public transportation in Japan?",
      answer:
        "我們在日本九州將租車自駕，但在城市內可能會使用公共交通。建議下載「Japan Transit Planner」或「Google Maps」應用程序來規劃路線。在香港，八達通卡是最方便的支付方式，可用於地鐵、巴士和許多商店。Kit會協助大家購買和使用這些交通卡。",
      answerEn:
        "We'll be renting a car in Kyushu, but may use public transport within cities. Download the 'Japan Transit Planner' or 'Google Maps' apps for route planning. In Hong Kong, an Octopus card is the most convenient payment method for the MTR, buses, and many shops. Kit will assist everyone in purchasing and using these transit cards.",
    },
    {
      question: "有什麼購物建議？",
      questionEn: "Any shopping recommendations?",
      answer:
        "日本的藥妝店如松本清和唐吉訶德提供各種美妝和日用品。九州的特產包括熊本熊周邊、阿蘇的馬油產品和由布院的手工藝品。香港則是購買電子產品、名牌服飾和本地設計師作品的好地方。我們的行程中已安排了充足的購物時間。",
      answerEn:
        "Japanese drugstores like Matsumoto Kiyoshi and Don Quijote offer various beauty and daily products. Kyushu specialties include Kumamon merchandise, horse oil products from Aso, and crafts from Yufuin. Hong Kong is great for electronics, designer fashion, and local designer pieces. Our itinerary includes ample shopping time.",
    },
    {
      question: "如何處理緊急情況？",
      questionEn: "How do I handle emergencies?",
      answer:
        "日本緊急電話：110（警察）、119（救護車/消防）。香港緊急電話：999。請確保隨身攜帶旅遊保險資料和緊急聯繫人信息。Kit的WhatsApp聯繫方式為+852 98066356，可隨時聯繫她獲取幫助。我們也會建立一個WhatsApp群組，以便在旅途中保持聯繫。",
      answerEn:
        "Japan emergency numbers: 110 (police), 119 (ambulance/fire). Hong Kong emergency number: 999. Ensure you carry travel insurance details and emergency contact information. Kit's WhatsApp contact is +852 98066356, feel free to contact her anytime for assistance. We'll also create a WhatsApp group to stay connected during the trip.",
    },
    {
      question: "行程中有自由活動的時間嗎？",
      questionEn: "Is there free time in the itinerary?",
      answer:
        "是的，我們的行程中安排了一些自由活動時間，特別是在香港的部分日子。您可以利用這些時間探索自己感興趣的地方，購物，或者只是放鬆休息。如果您有特定想去的地方，請提前告知Kit，她可以幫助您規劃。",
      answerEn:
        "Yes, there is some free time scheduled in our itinerary, especially during the days in Hong Kong. You can use this time to explore places of your interest, go shopping, or just relax. If you have specific places you want to visit, please inform Kit in advance, and she can help you plan.",
    },
    {
      question: "如何應對時差？",
      questionEn: "How do I deal with jet lag?",
      answer:
        "從英國到香港和日本，時差約為7-8小時。建議在飛機上盡量休息，抵達後盡快適應當地時間。白天保持活動，避免午睡，晚上按當地時間睡覺。多喝水，避免過量咖啡因和酒精。如果需要，可以使用褪黑素等輔助睡眠的產品。",
      answerEn:
        "From the UK to Hong Kong and Japan, the time difference is about 7-8 hours. It's recommended to rest as much as possible on the plane and adapt to local time as soon as you arrive. Stay active during the day, avoid napping, and sleep according to local time at night. Drink plenty of water and avoid excessive caffeine and alcohol. If needed, you can use products like melatonin to aid sleep.",
    },
    {
      question: "旅行中如何保持聯繫？",
      questionEn: "How do we stay connected during the trip?",
      answer:
        "我們將建立一個WhatsApp群組，以便在旅途中保持聯繫。在香港，您可以購買本地SIM卡或使用國際漫遊。在日本，我們將租用便攜式Wi-Fi設備或購買旅遊SIM卡，確保全程有網絡連接。大多數酒店也提供免費Wi-Fi。",
      answerEn:
        "We will create a WhatsApp group to stay connected during the trip. In Hong Kong, you can purchase local SIM cards or use international roaming. In Japan, we'll rent portable Wi-Fi devices or purchase travel SIM cards to ensure internet connectivity throughout the trip. Most hotels also provide free Wi-Fi.",
    },
    {
      question: "行程可以根據個人喜好調整嗎？",
      questionEn: "Can the itinerary be adjusted according to personal preferences?",
      answer:
        "是的，我們的行程有一定的靈活性。如果您有特殊的興趣或喜好，請提前告知Kit，我們會盡量調整行程以滿足您的需求。在某些地方，我們也可能會分組活動，以滿足不同人的興趣。",
      answerEn:
        "Yes, our itinerary has some flexibility. If you have special interests or preferences, please inform Kit in advance, and we'll try to adjust the itinerary to meet your needs. In some places, we might also split into groups to accommodate different interests.",
    },
  ]

  const japanFaqs = [
    {
      question: "日本的插座是什麼類型？需要轉換器嗎？",
      questionEn: "What type of electrical outlets does Japan use? Do I need an adapter?",
      answer:
        "日本使用A型和B型插座，電壓為100V。如果您來自使用220-240V電壓的國家（如香港），您可能需要變壓器。大多數現代電子設備（如手機充電器、筆記本電腦）都可以自動適應不同電壓，但請檢查您設備的標籤。建議攜帶一個多功能轉換器。",
      answerEn:
        "Japan uses Type A and Type B outlets with 100V electricity. If you're coming from a country that uses 220-240V (like Hong Kong), you might need a voltage converter. Most modern electronic devices (like phone chargers, laptops) can automatically adapt to different voltages, but check the label on your devices. It's recommended to bring a multi-functional adapter.",
    },
    {
      question: "日本的網絡連接如何？有免費Wi-Fi嗎？",
      questionEn: "How's the internet connectivity in Japan? Is there free Wi-Fi?",
      answer:
        "日本的主要城市和旅遊景點通常提供免費Wi-Fi，但覆蓋範圍可能不如香港廣泛。我們將租用便攜式Wi-Fi設備或購買日本SIM卡，確保旅途中有穩定的網絡連接。大多數酒店也提供免費Wi-Fi。",
      answerEn:
        "Major cities and tourist attractions in Japan usually offer free Wi-Fi, but coverage may not be as extensive as in Hong Kong. We'll rent portable Wi-Fi devices or purchase Japanese SIM cards to ensure stable internet connectivity during the trip. Most hotels also provide free Wi-Fi.",
    },
    {
      question: "日本的小費文化是怎樣的？",
      questionEn: "What's the tipping culture in Japan?",
      answer:
        "日本沒有小費文化，實際上，給小費可能被視為失禮。餐廳、酒店和計程車都不期望收到小費。提供優質服務是他們工作的一部分，所以只需禮貌地表示感謝即可。",
      answerEn:
        "Japan doesn't have a tipping culture; in fact, tipping can be considered rude. Restaurants, hotels, and taxis don't expect tips. Providing quality service is part of their job, so just a polite thank you is sufficient.",
    },
    {
      question: "日本的廁所如何使用？",
      questionEn: "How do I use Japanese toilets?",
      answer:
        "日本的廁所從基本的蹲廁到高科技的智能馬桶不等。高科技廁所通常有多個按鈕控制不同功能，如溫水清洗、烘乾和加熱座圈。公共場所通常有圖示說明按鈕功能。請記得攜帶隨身紙巾，因為有些公共廁所可能沒有提供衛生紙。",
      answerEn:
        "Japanese toilets range from basic squat toilets to high-tech smart toilets. High-tech toilets usually have multiple buttons controlling different functions like warm water washing, drying, and heated seats. Public places usually have pictorial guides explaining the button functions. Remember to carry pocket tissues, as some public restrooms might not provide toilet paper.",
    },
    {
      question: "在日本如何處理垃圾？",
      questionEn: "How do I dispose of trash in Japan?",
      answer:
        "日本有嚴格的垃圾分類系統。通常分為可燃垃圾、不可燃垃圾、可回收物品和大型垃圾。在公共場所，垃圾桶通常有明確標示。在街上，垃圾桶可能較少，所以建議隨身攜帶一個小袋子收集自己的垃圾，直到找到適當的垃圾桶。",
      answerEn:
        "Japan has a strict garbage sorting system. It's usually divided into combustible garbage, non-combustible garbage, recyclables, and oversized garbage. In public places, trash bins are usually clearly marked. On the streets, trash bins might be scarce, so it's advisable to carry a small bag to collect your trash until you find an appropriate bin.",
    },
    {
      question: "日本的溫泉禮儀是什麼？",
      questionEn: "What's the etiquette for Japanese hot springs (onsen)?",
      answer:
        "使用日本溫泉前必須先沖洗乾淨。溫泉內不允許穿著泳衣，需要全裸入浴。通常會提供一條小毛巾，可以用來遮蓋隱私部位走動，但不要將其浸入溫泉水中。有紋身的人可能被禁止使用某些公共溫泉，但私人溫泉通常較為寬鬆。",
      answerEn:
        "Before entering a Japanese hot spring, you must wash yourself thoroughly. Swimwear is not allowed in the hot spring; you need to bathe naked. A small towel is usually provided, which can be used to cover private parts while walking around, but don't immerse it in the hot spring water. People with tattoos might be prohibited from using some public hot springs, but private ones are usually more lenient.",
    },
    {
      question: "日本的飲用水安全嗎？",
      questionEn: "Is tap water safe to drink in Japan?",
      answer:
        "是的，日本的自來水完全可以飲用，水質非常好。大多數酒店房間會提供免費的瓶裝水或水壺。在餐廳，通常會免費提供自來水。如果您擔心，可以購買瓶裝水，在日本各地的自動販賣機和便利店都很容易找到。",
      answerEn:
        "Yes, tap water in Japan is completely safe to drink and of very good quality. Most hotel rooms will provide complimentary bottled water or water pitchers. In restaurants, tap water is usually served for free. If you're concerned, bottled water is easily available from vending machines and convenience stores throughout Japan.",
    },
    {
      question: "日本的便利店有什麼特別之處？",
      questionEn: "What's special about Japanese convenience stores?",
      answer:
        "日本的便利店（如7-Eleven、Lawson、Family Mart）提供各種服務和產品，遠超一般便利店。它們提供新鮮食品、飲料、日用品、ATM服務、票務服務、包裹寄送和接收等。便利店的食品質量通常很高，是快速解決一餐的好選擇。",
      answerEn:
        "Japanese convenience stores (like 7-Eleven, Lawson, Family Mart) offer a wide range of services and products beyond typical convenience stores. They provide fresh food, drinks, daily necessities, ATM services, ticketing services, package sending and receiving, etc. The food quality at convenience stores is usually high and is a good option for a quick meal.",
    },
    {
      question: "在日本如何支付？現金還是信用卡？",
      questionEn: "How do I pay in Japan? Cash or credit card?",
      answer:
        "日本仍然是一個以現金為主的社會，尤其是在小型商店、餐廳和鄉村地區。大型百貨公司、連鎖店和旅遊景點通常接受信用卡。建議隨身攜帶足夠的現金，特別是在九州的鄉村地區旅行時。我們會協助大家在機場或銀行兌換日元。",
      answerEn:
        "Japan is still largely a cash-based society, especially in small shops, restaurants, and rural areas. Large department stores, chain stores, and tourist attractions usually accept credit cards. It's advisable to carry enough cash, especially when traveling in rural areas of Kyushu. We'll assist everyone in exchanging yen at the airport or banks.",
    },
    {
      question: "日本的禮儀和習俗有哪些需要注意的？",
      questionEn: "What etiquette and customs should I be aware of in Japan?",
      answer:
        "日本有許多禮儀習俗：鞠躬是常見的問候方式；進入家庭或某些餐廳時需脫鞋；用餐時不要邊走邊吃；不要在公共場所大聲說話；排隊時要遵守秩序；不要在公共交通工具上通電話。尊重這些習俗將幫助您更好地融入當地文化。",
      answerEn:
        "Japan has many etiquette customs: bowing is a common greeting; shoes should be removed when entering homes and some restaurants; don't eat while walking; avoid loud talking in public places; maintain order when queuing; don't talk on the phone on public transportation. Respecting these customs will help you better integrate into the local culture.",
    },
    {
      question: "日本的公共浴室（銭湯）如何使用？",
      questionEn: "How do I use public baths (sento) in Japan?",
      answer:
        "公共浴室使用步驟：付費入場後，在更衣室脫衣服並存放在置物櫃中；帶上毛巾進入浴室；在進入浴池前，先在淋浴區徹底清洗身體；清洗後才能進入公共浴池；不要將毛巾浸入浴池水中；使用完畢後，可以輕輕擦乾身體再返回更衣室。",
      answerEn:
        "Steps for using public baths: after paying the entrance fee, undress in the changing room and store clothes in lockers; bring a towel to the bathing area; before entering the bath, thoroughly wash your body in the shower area; only enter the communal bath after washing; don't immerse your towel in the bath water; after bathing, lightly dry yourself before returning to the changing room.",
    },
    {
      question: "在日本如何應對語言障礙？",
      questionEn: "How do I deal with the language barrier in Japan?",
      answer:
        "雖然日本的英語普及率不高，但在旅遊區和大城市，基本英語交流通常沒問題。建議下載翻譯應用程序如Google翻譯，並學習一些基本的日語短語。準備一張寫有您住宿地址的卡片，以便需要時向計程車司機或路人出示。Kit會協助翻譯和溝通。",
      answerEn:
        "Although English proficiency is not high in Japan, basic English communication is usually fine in tourist areas and big cities. It's recommended to download translation apps like Google Translate and learn some basic Japanese phrases. Prepare a card with your accommodation address to show to taxi drivers or locals when needed. Kit will assist with translation and communication.",
    },
  ]

  const hongKongFaqs = [
    {
      question: "香港的交通系統如何使用？",
      questionEn: "How do I use Hong Kong's transportation system?",
      answer:
        "香港有高效的公共交通系統，包括地鐵（MTR）、巴士、小巴、電車和渡輪。八達通卡是最方便的支付方式，可在各種交通工具和商店使用。地鐵是最快捷的交通方式，覆蓋了大部分主要地區。我們會協助大家購買和充值八達通卡。",
      answerEn:
        "Hong Kong has an efficient public transportation system, including the MTR (subway), buses, minibuses, trams, and ferries. The Octopus card is the most convenient payment method, usable on various transportation and in shops. The MTR is the fastest way to travel, covering most major areas. We'll assist everyone in purchasing and topping up Octopus cards.",
    },
    {
      question: "香港的天氣如何？需要帶什麼衣物？",
      questionEn: "How's the weather in Hong Kong? What clothes should I pack?",
      answer:
        "4月的香港氣溫通常在20-25°C之間，濕度較高。建議攜帶輕便、透氣的衣物，以及一件輕薄外套，因為室內空調可能較強。也請準備舒適的步行鞋，因為香港有許多山坡和樓梯。雨傘或雨衣也是必要的，因為春季可能有陣雨。",
      answerEn:
        "In April, Hong Kong typically has temperatures between 20-25°C with high humidity. Pack light, breathable clothes and a light jacket, as indoor air conditioning can be strong. Also prepare comfortable walking shoes, as Hong Kong has many slopes and stairs. An umbrella or raincoat is also necessary, as spring showers are possible.",
    },
    {
      question: "香港有哪些必吃美食？",
      questionEn: "What are the must-try foods in Hong Kong?",
      answer:
        "香港美食豐富多樣，包括點心（如蝦餃、燒賣、叉燒包）、燒味（如燒鴨、叉燒）、雲吞麵、魚蛋粉、蛋撻、菠蘿包、港式奶茶等。街頭小吃如雞蛋仔、魚丸、咖喱魚蛋也不容錯過。我們的行程中已安排在不同地區品嚐這些美食。",
      answerEn:
        "Hong Kong cuisine is rich and diverse, including dim sum (like har gow, siu mai, char siu bao), roasted meats (like roast duck, char siu), wonton noodles, fish ball noodles, egg tarts, pineapple buns, Hong Kong-style milk tea, etc. Street snacks like egg waffles, fish balls, and curry fish balls shouldn't be missed. Our itinerary includes opportunities to taste these delicacies in different areas.",
    },
    {
      question: "香港的購物區域有哪些？",
      questionEn: "What are the shopping areas in Hong Kong?",
      answer:
        "香港的主要購物區包括中環（高端品牌和精品店）、銅鑼灣（時尚品牌和百貨公司）、旺角（街頭時尚和本地品牌）、尖沙咀（奢侈品和紀念品）和深水埗（便宜服裝和電子產品）。我們的行程中已安排在這些地區的購物時間。",
      answerEn:
        "Hong Kong's main shopping areas include Central (high-end brands and boutiques), Causeway Bay (fashion brands and department stores), Mong Kok (street fashion and local brands), Tsim Sha Tsui (luxury goods and souvenirs), and Sham Shui Po (budget clothing and electronics). Our itinerary includes shopping time in these areas.",
    },
    {
      question: "香港的插座是什麼類型？",
      questionEn: "What type of electrical outlets does Hong Kong use?",
      answer:
        "香港使用英式三腳插座（G型），電壓為220-240V。如果您的電器使用不同類型的插頭或不同電壓，請攜帶適當的轉換器。大多數酒店房間都有一個萬能插座，可以接受不同類型的插頭。",
      answerEn:
        "Hong Kong uses British-style three-pin plugs (Type G) with 220-240V electricity. If your appliances use different plug types or voltages, please bring appropriate adapters. Most hotel rooms have a universal socket that can accept different types of plugs.",
    },
    {
      question: "香港的飲用水安全嗎？",
      questionEn: "Is tap water safe to drink in Hong Kong?",
      answer:
        "香港的自來水經過處理，技術上是可以飲用的，但大多數本地人和遊客還是偏好飲用瓶裝水或煮沸後的水。酒店通常會提供免費的瓶裝水或熱水壺。餐廳通常會提供免費的茶水。",
      answerEn:
        "Hong Kong's tap water is treated and technically safe to drink, but most locals and tourists prefer bottled water or boiled water. Hotels usually provide complimentary bottled water or kettles. Restaurants typically serve free tea.",
    },
    {
      question: "香港的小費文化是怎樣的？",
      questionEn: "What's the tipping culture in Hong Kong?",
      answer:
        "香港的餐廳通常會在賬單中加收10%的服務費，這種情況下不需要額外給小費。如果沒有收取服務費，可以給約10%的小費。計程車司機通常不期望收到小費，但可以將零錢湊整。酒店服務員和行李搬運工通常期望收到小費，約10-20港元。",
      answerEn:
        "Restaurants in Hong Kong usually add a 10% service charge to the bill, in which case no additional tip is needed. If no service charge is included, a tip of about 10% is appropriate. Taxi drivers don't usually expect tips, but you can round up the fare. Hotel service staff and porters usually expect tips of about HK$10-20.",
    },
    {
      question: "香港有哪些必訪景點？",
      questionEn: "What are the must-visit attractions in Hong Kong?",
      answer:
        "香港的熱門景點包括太平山頂（欣賞城市全景）、維多利亞港（尤其是晚上的幻彩詠香江燈光秀）、香港迪士尼樂園、海洋公園、黃大仙祠、蘭桂坊、女人街、天壇大佛和昂坪360纜車等。我們的行程中已包含了其中一些景點。",
      answerEn:
        "Popular attractions in Hong Kong include Victoria Peak (for city panoramas), Victoria Harbour (especially the Symphony of Lights show at night), Hong Kong Disneyland, Ocean Park, Wong Tai Sin Temple, Lan Kwai Fong, Ladies' Market, the Big Buddha, and the Ngong Ping 360 cable car. Our itinerary already includes some of these attractions.",
    },
    {
      question: "香港的緊急聯繫方式是什麼？",
      questionEn: "What are the emergency contacts in Hong Kong?",
      answer:
        "香港的緊急電話號碼是999，可用於警察、消防和救護服務。如果您需要醫療協助，香港有多家公立和私立醫院提供服務。Kit的聯繫方式為+852 98066356，可隨時聯繫她獲取幫助。",
      answerEn:
        "Hong Kong's emergency number is 999, which can be used for police, fire, and ambulance services. If you need medical assistance, Hong Kong has several public and private hospitals. Kit's contact is +852 98066356, feel free to contact her anytime for assistance.",
    },
  ]

  const travelTipsFaqs = [
    {
      question: "如何應對時差？",
      questionEn: "How do I deal with jet lag?",
      answer:
        "從英國到香港和日本，時差約為7-8小時。建議在飛機上盡量休息，抵達後盡快適應當地時間。白天保持活動，避免午睡，晚上按當地時間睡覺。多喝水，避免過量咖啡因和酒精。如果需要，可以使用褪黑素等輔助睡眠的產品。",
      answerEn:
        "From the UK to Hong Kong and Japan, the time difference is about 7-8 hours. It's recommended to rest as much as possible on the plane and adapt to local time as soon as you arrive. Stay active during the day, avoid napping, and sleep according to local time at night. Drink plenty of water and avoid excessive caffeine and alcohol. If needed, you can use products like melatonin to aid sleep.",
    },
    {
      question: "如何保持健康和避免生病？",
      questionEn: "How do I stay healthy and avoid getting sick?",
      answer:
        "旅行期間保持健康的建議：經常洗手或使用消毒洗手液；避免生食或未煮熟的食物；飲用瓶裝水或煮沸的水；攜帶基本藥物如止痛藥、腹瀉藥、抗過敏藥等；保持充足的休息和水分；根據需要使用防曬霜和防蚊產品。",
      answerEn:
        "Tips for staying healthy during travel: wash hands frequently or use hand sanitizer; avoid raw or undercooked food; drink bottled or boiled water; carry basic medications like painkillers, anti-diarrhea medicine, antihistamines, etc.; get adequate rest and stay hydrated; use sunscreen and mosquito repellent as needed.",
    },
    {
      question: "如何處理行李？有行李限制嗎？",
      questionEn: "How do I handle luggage? Are there luggage restrictions?",
      answer:
        "阿聯酋航空的經濟艙通常允許每人托運一件30kg的行李和一件7kg的隨身行李。香港航空的國際航班通常允許每人托運一件20kg的行李和一件7kg的隨身行李。建議在行李上貼上標籤，包括您的姓名和聯繫方式。也請為貴重物品和必需品準備隨身行李。",
      answerEn:
        "Emirates Economy Class usually allows one checked bag of 30kg per person and one carry-on bag of 7kg. Hong Kong Airlines international flights usually allow one checked bag of 20kg per person and one carry-on bag of 7kg. It's advisable to label your luggage with your name and contact information. Also, prepare carry-on luggage for valuables and essentials.",
    },
    {
      question: "如何換取當地貨幣？",
      questionEn: "How do I exchange local currency?",
      answer:
        "可以在出發前在銀行或兌換所換取一些日元和港幣，以應付抵達後的初期開支。機場也有兌換所，但匯率可能不如市區的優惠。在香港和日本的主要城市，有許多兌換所提供良好的匯率。也可以使用ATM提取現金，但請注意可能有手續費。",
      answerEn:
        "You can exchange some Japanese yen and Hong Kong dollars at banks or exchange offices before departure to cover initial expenses upon arrival. Airports also have exchange offices, but rates might not be as favorable as those in the city. In major cities in Hong Kong and Japan, there are many exchange offices offering good rates. You can also use ATMs to withdraw cash, but be aware of possible transaction fees.",
    },
    {
      question: "如何保持聯繫？有推薦的SIM卡或Wi-Fi設備嗎？",
      questionEn: "How do I stay connected? Are there recommended SIM cards or Wi-Fi devices?",
      answer:
        "在香港，可以購買本地SIM卡（如中國移動、3HK等）或使用國際漫遊。在日本，我們將租用便攜式Wi-Fi設備或購買旅遊SIM卡，確保全程有網絡連接。大多數酒店也提供免費Wi-Fi。我們會在抵達後協助大家設置網絡連接。",
      answerEn:
        "In Hong Kong, you can purchase local SIM cards (like China Mobile, 3HK, etc.) or use international roaming. In Japan, we'll rent portable Wi-Fi devices or purchase travel SIM cards to ensure internet connectivity throughout the trip. Most hotels also provide free Wi-Fi. We'll assist everyone in setting up internet connectivity upon arrival.",
    },
    {
      question: "有哪些實用的旅行應用程序？",
      questionEn: "What are some useful travel apps?",
      answer:
        "推薦的旅行應用程序：Google Maps（導航）、Google翻譯（語言翻譯）、Japan Transit Planner（日本交通規劃）、MTR Mobile（香港地鐵）、OpenRice（餐廳評論）、WhatsApp（與團隊保持聯繫）、XE Currency（貨幣換算）、AccuWeather（天氣預報）。請在出發前下載這些應用程序。",
      answerEn:
        "Recommended travel apps: Google Maps (navigation), Google Translate (language translation), Japan Transit Planner (Japan transportation planning), MTR Mobile (Hong Kong subway), OpenRice (restaurant reviews), WhatsApp (staying connected with the team), XE Currency (currency conversion), AccuWeather (weather forecast). Please download these apps before departure.",
    },
    {
      question: "如何應對語言障礙？",
      questionEn: "How do I deal with language barriers?",
      answer:
        "在香港，英語和粵語都是官方語言，大多數人能說基本英語。在日本，英語普及率較低，特別是在鄉村地區。建議學習一些基本的日語短語，如「你好」（こんにちは，Konnichiwa）、「謝謝」（ありがとう，Arigatou）、「對不起」（すみません，Sumimasen）等。使用翻譯應用程序和圖片/手勢也很有幫助。Kit會協助翻譯。",
      answerEn:
        "In Hong Kong, both English and Cantonese are official languages, and most people can speak basic English. In Japan, English proficiency is lower, especially in rural areas. It's recommended to learn some basic Japanese phrases like 'hello' (こんにちは, Konnichiwa), 'thank you' (ありがとう, Arigatou), 'excuse me/sorry' (すみません, Sumimasen), etc. Using translation apps and pictures/gestures is also helpful. Kit will assist with translation.",
    },
    {
      question: "如何保持安全？",
      questionEn: "How do I stay safe?",
      answer:
        "香港和日本都是相對安全的地方，但仍需注意一般安全事項：保管好貴重物品；避免在陌生或偏僻地區單獨行動，特別是晚上；隨身攜帶酒店地址和緊急聯繫方式；遵守當地法律和習俗；注意交通安全，特別是在日本，他們靠左行駛。如有任何安全問題，請立即聯繫Kit或當地警方。",
      answerEn:
        "Both Hong Kong and Japan are relatively safe places, but general safety precautions should still be observed: keep valuables secure; avoid being alone in unfamiliar or remote areas, especially at night; carry your hotel address and emergency contacts; respect local laws and customs; be aware of traffic safety, especially in Japan where they drive on the left. If you have any safety concerns, contact Kit or local police immediately.",
    },
    {
      question: "有特殊飲食需求怎麼辦？",
      questionEn: "What if I have special dietary requirements?",
      answer:
        "如果您有特殊飲食需求（如素食、過敏等），請提前告知Kit，以便在餐廳預訂時考慮。在日本，素食選擇可能較少，但大城市的國際餐廳通常能提供素食選項。學習一些與您飲食需求相關的日語短語也很有幫助。我們會盡力確保每個人都能找到合適的食物。",
      answerEn:
        "If you have special dietary requirements (like vegetarian, allergies, etc.), please inform Kit in advance so that they can be considered when making restaurant reservations. In Japan, vegetarian options might be limited, but international restaurants in big cities usually offer vegetarian options. Learning some Japanese phrases related to your dietary needs is also helpful. We'll do our best to ensure everyone can find suitable food.",
    },
    {
      question: "旅行保險涵蓋什麼？",
      questionEn: "What does travel insurance cover?",
      answer:
        "我們建議購買全面的旅行保險，應包括醫療費用、行李丟失/損壞、航班取消/延誤、個人責任等。請確保保險涵蓋您計劃參與的所有活動。出發前請仔細閱讀保單條款，了解具體的保障範圍和理賠程序。請將保險文件的副本存儲在手機或雲端，以便需要時查閱。",
      answerEn:
        "We recommend purchasing comprehensive travel insurance that should cover medical expenses, luggage loss/damage, flight cancellation/delay, personal liability, etc. Make sure the insurance covers all activities you plan to participate in. Please read the policy terms carefully before departure to understand the specific coverage and claim procedures. Keep a copy of your insurance documents on your phone or in the cloud for easy access when needed.",
    },
  ]

  const tripSpecificFaqs = [
    {
      question: "行程中有自由活動時間嗎？",
      questionEn: "Is there free time in the itinerary?",
      answer:
        "是的，行程中安排了一些自由活動時間，特別是在香港的部分日子。您可以利用這些時間探索自己感興趣的地方，購物，或者只是放鬆休息。如果您有特定想去的地方，請告知Kit，她可以幫助您規劃。",
      answerEn:
        "Yes, there is some free time scheduled in the itinerary, especially during the days in Hong Kong. You can use this time to explore places of your interest, go shopping, or just relax. If you have specific places you want to visit, please let Kit know, and she can help you plan.",
    },
    {
      question: "如何處理不同家庭成員的需求和興趣？",
      questionEn: "How do we handle different family members' needs and interests?",
      answer:
        "我們的行程盡量考慮了不同家庭成員的需求和興趣，包括文化體驗、購物、美食和休閒活動。在某些地方，我們可能會分組活動，以滿足不同人的興趣。如果您有特殊需求或興趣，請告知Kit，我們會盡力安排。",
      answerEn:
        "Our itinerary tries to consider the needs and interests of different family members, including cultural experiences, shopping, food, and leisure activities. In some places, we might split into groups to accommodate different interests. If you have special needs or interests, please inform Kit, and we'll try our best to arrange accordingly.",
    },
    {
      question: "行程中的餐食如何安排？",
      questionEn: "How are meals arranged in the itinerary?",
      answer:
        "大多數早餐包含在酒店住宿中。午餐和晚餐通常在當地餐廳，我們會嘗試各種當地美食。有些日子我們會預訂特定餐廳，有些則是自由選擇。餐費通常由Kit統一支付，但請準備一些現金用於小費或個人額外消費。",
      answerEn:
        "Most breakfasts are included in the hotel accommodation. Lunches and dinners are usually at local restaurants, and we'll try various local cuisines. On some days, we'll book specific restaurants, while on others, it's free choice. Meal expenses are usually paid by Kit, but please prepare some cash for tips or personal extra expenses.",
    },
    {
      question: "如何處理不同家庭成員的體力水平？",
      questionEn: "How do we handle different family members' physical fitness levels?",
      answer:
        "我們的行程考慮了不同家庭成員的體力水平，安排了適當的休息時間和步行距離。在某些需要較多步行的景點，我們會確保有足夠的休息區和替代選項。如果您有特殊的體力限制，請告知Kit，我們會相應調整。",
      answerEn:
        "Our itinerary considers the physical fitness levels of different family members, with appropriate rest times and walking distances. For attractions that require more walking, we'll ensure there are adequate rest areas and alternative options. If you have specific physical limitations, please inform Kit, and we'll adjust accordingly.",
    },
    {
      question: "如何處理可能的天氣變化？",
      questionEn: "How do we handle possible weather changes?",
      answer:
        "4月的香港和日本九州通常天氣宜人，但仍可能有陣雨或溫度變化。我們會密切關注天氣預報，並在必要時調整行程。請攜帶適合不同天氣的衣物，如輕便外套、雨傘或雨衣。如果遇到極端天氣，我們會優先考慮安全，可能會更改或取消某些活動。",
      answerEn:
        "April in Hong Kong and Kyushu, Japan, usually has pleasant weather, but there might still be showers or temperature changes. We'll closely monitor weather forecasts and adjust the itinerary if necessary. Please bring clothes suitable for different weather conditions, such as light jackets, umbrellas, or raincoats. In case of extreme weather, we'll prioritize safety and might change or cancel certain activities.",
    },
  ]

  return (
    <section id="faq" className="scroll-mt-16">
      <Card className="border-primary/20">
        <CardHeader className="border-b border-border">
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            常見問題 | FAQ
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="general">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-gray-50">
              <TabsTrigger value="general" className="data-[state=active]:bg-white">
                一般問題
              </TabsTrigger>
              <TabsTrigger value="japan" className="data-[state=active]:bg-white">
                日本相關
              </TabsTrigger>
              <TabsTrigger value="hongkong" className="data-[state=active]:bg-white">
                香港相關
              </TabsTrigger>
              <TabsTrigger value="tips" className="data-[state=active]:bg-white">
                旅行貼士
              </TabsTrigger>
              <TabsTrigger value="specific" className="data-[state=active]:bg-white">
                行程特定
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="pt-4">
              <Accordion type="single" collapsible className="w-full">
                {generalFaqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`general-${idx}`} className="border-gray-200">
                    <AccordionTrigger className="text-left hover:bg-gray-50 px-4 py-2 rounded-md">
                      <div>
                        <div>{faq.question}</div>
                        <div className="text-sm text-muted-foreground">{faq.questionEn}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-4">
                      <div className="pt-2 pb-4 space-y-2">
                        <p>{faq.answer}</p>
                        <p className="text-muted-foreground">{faq.answerEn}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="japan" className="pt-4">
              <Accordion type="single" collapsible className="w-full">
                {japanFaqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`japan-${idx}`} className="border-gray-200">
                    <AccordionTrigger className="text-left hover:bg-gray-50 px-4 py-2 rounded-md">
                      <div>
                        <div>{faq.question}</div>
                        <div className="text-sm text-muted-foreground">{faq.questionEn}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-4">
                      <div className="pt-2 pb-4 space-y-2">
                        <p>{faq.answer}</p>
                        <p className="text-muted-foreground">{faq.answerEn}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="hongkong" className="pt-4">
              <Accordion type="single" collapsible className="w-full">
                {hongKongFaqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`hongkong-${idx}`} className="border-gray-200">
                    <AccordionTrigger className="text-left hover:bg-gray-50 px-4 py-2 rounded-md">
                      <div>
                        <div>{faq.question}</div>
                        <div className="text-sm text-muted-foreground">{faq.questionEn}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-4">
                      <div className="pt-2 pb-4 space-y-2">
                        <p>{faq.answer}</p>
                        <p className="text-muted-foreground">{faq.answerEn}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="tips" className="pt-4">
              <Accordion type="single" collapsible className="w-full">
                {travelTipsFaqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`tips-${idx}`} className="border-gray-200">
                    <AccordionTrigger className="text-left hover:bg-gray-50 px-4 py-2 rounded-md">
                      <div>
                        <div>{faq.question}</div>
                        <div className="text-sm text-muted-foreground">{faq.questionEn}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-4">
                      <div className="pt-2 pb-4 space-y-2">
                        <p>{faq.answer}</p>
                        <p className="text-muted-foreground">{faq.answerEn}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="specific" className="pt-4">
              <Accordion type="single" collapsible className="w-full">
                {tripSpecificFaqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`specific-${idx}`} className="border-gray-200">
                    <AccordionTrigger className="text-left hover:bg-gray-50 px-4 py-2 rounded-md">
                      <div>
                        <div>{faq.question}</div>
                        <div className="text-sm text-muted-foreground">{faq.questionEn}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-4">
                      <div className="pt-2 pb-4 space-y-2">
                        <p>{faq.answer}</p>
                        <p className="text-muted-foreground">{faq.answerEn}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}

