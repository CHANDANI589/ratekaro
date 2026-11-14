// Synthetic demo data for RateKaro. Reviews are illustrative, not verified customer feedback.

const review = (userName, date, sentiment, rating, reviewText, pros, cons) => ({
  userName,
  date,
  sentiment,
  rating,
  reviewText,
  pros,
  cons,
});

const product = (id, name, brand, category, price, image, rating, verdictScore, reviews, reviewCountLabel) => {
  const lovedCount = reviews.filter((item) => item.sentiment === "Loved").length;
  const avoidCount = reviews.filter((item) => item.sentiment === "Avoid").length;
  const totalReviews = reviews.length;
  const percentLoved = totalReviews ? Math.round((lovedCount / totalReviews) * 100) : 0;
  const percentAvoid = totalReviews ? Math.round((avoidCount / totalReviews) * 100) : 0;
  const verdictLabel = verdictScore >= 8
    ? "Le Lo - Must Buy"
    : verdictScore >= 7
      ? "Le Lo - Good Value"
      : verdictScore >= 5
        ? "Soch Ke Lo"
        : "Avoid Karo - Not Worth It";

  return {
    id,
    name,
    brand,
    category,
    price,
    image,
    rating,
    verdictScore,
    totalReviews,
    lovedCount,
    avoidCount,
    verdictText: `${verdictLabel} - ${verdictScore.toFixed(1)}/10`,
    verdictSummary: `${percentLoved}% sample reviewers liked it and ${percentAvoid}% avoided it; verdict score ${verdictScore.toFixed(1)}/10 hai.`,
    reviews,
    reviewCountLabel: reviewCountLabel || `${totalReviews} reviews`,
  };
};

const images = {
  iphone15: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80",
  galaxyS24: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80",
  onePlus12: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=900&q=80",
  samsungFridge: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80",
  lgFridge: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=900&q=80",
  whirlpoolFridge: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
  lgWasher: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80",
  samsungWasher: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=900&q=80",
  ifbWasher: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=900&q=80",
  hpLaptop: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
  dellLaptop: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
  lenovoLaptop: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=80",
  samsungTV: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80",
  lgTV: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=80",
  sonyTV: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=900&q=80",
  daikinAC: "https://images.unsplash.com/photo-1759772238012-9d5ad59ae637?auto=format&fit=crop&w=900&q=80",
  lgAC: "https://images.unsplash.com/photo-1762341123870-d706f257a12e?auto=format&fit=crop&w=900&q=80",
  ogeneralAC: "https://images.unsplash.com/photo-1787675907927-ae62773f56f6?auto=format&fit=crop&w=900&q=80",
  sonyHeadphones: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
  boatHeadphones: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
  jblHeadphones: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80",
  canonCamera: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
  nikonCamera: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=900&q=80",
  sonyCamera: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=900&q=80",
  appleWatch: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
  noiseWatch: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
};

export const products = [
  // Mobiles
  product("iphone-15", "iPhone 15", "Apple", "mobiles", 69999, images.iphone15, 4.8, 8.8, [
    review("Neha Sharma", "10 Aug 2026", "Loved", 5, "3 weeks se use kar rahi hu. Photos natural aati hain aur phone ka size one-hand use ke liye comfortable hai. USB-C hona bhi kaafi convenient laga.", "Camera, comfortable size, USB-C", "Box me adapter nahi milta; battery heavy use me shaam tak charge maangti hai."),
    review("Pooja Gupta", "11 Aug 2026", "Loved", 4, "Office calls, maps aur UPI sab smooth chalte hain. Dynamic Island useful hai, bas itne price par 60Hz display thoda disappointing hai.", "Smooth performance, reliable apps", "60Hz display; charger alag lena padta hai."),
    review("Aditya Singh", "12 Aug 2026", "Avoid", 2, "Camera aur mobile data saath chalaye to battery shaam se pehle low ho gayi. Low-light photos bhi price ke hisaab se average lagi.", "USB-C convenience, reliable daytime photos", "Battery drops quickly with mobile data; low-light photos look average."),
    review("Nisha Patel", "13 Aug 2026", "Avoid", 1, "Battery backup meri expectation se kam raha, especially mobile data aur camera use karne par. Itne paise dene ke baad fast charger bhi separately lena pada.", "Build feels premium", "Battery drains with camera and mobile data; charger not included."),
  ]),
  product("samsung-galaxy-s24", "Samsung Galaxy S24", "Samsung", "mobiles", 62999, images.galaxyS24, 4.6, 8.5, [
    review("Rahul Mehra", "14 Aug 2026", "Loved", 5, "Compact phone chahiye tha isliye S24 liya. Display sunlight me readable hai aur office ke beech battery comfortably nikal jaati hai.", "Bright display, compact size", "Camera bump desk par rakhne par thoda wobble karta hai."),
    review("Sneha Iyer", "15 Aug 2026", "Loved", 4, "Portrait photos me skin tone achhi aayi aur Galaxy AI ke circle search se products dhoondhna easy hua. One UI me kuch pre-installed apps hain.", "Portraits, useful Circle to Search", "Some pre-installed apps need cleanup."),
    review("Aman Khan", "16 Aug 2026", "Loved", 5, "Apps fast open hote hain aur 120Hz screen ke baad purane phone par jaana mushkil hoga. Gaming ke baad phone warm hota hai but normal use me issue nahi.", "Responsive screen, fast apps", "Can warm up during long gaming sessions."),
    review("Priya Desai", "17 Aug 2026", "Avoid", 1, "Travel ke din camera aur navigation dono chalaye to battery evening tak nahi pahunchi. Photos achhi hain, but heavy user ke liye charger saath rakhna padta hai.", "Good camera detail", "Battery needs a top-up on busy days."),
  ]),
  product("oneplus-12", "OnePlus 12", "OnePlus", "mobiles", 59999, images.onePlus12, 4.4, 8.3, [
    review("Vikram Kapoor", "18 Aug 2026", "Loved", 5, "Fast charging genuinely helpful hai—subah ready hote hue charge kar diya to kaafi backup mil gaya. Screen par cricket dekhna bhi mast lagta hai.", "Very fast charging, vivid display", "Large phone; one-hand use is difficult."),
    review("Ananya Joshi", "19 Aug 2026", "Loved", 4, "Photos me colours punchy hain aur portrait mode family pictures ke liye kaam aata hai. Phone halka nahi hai, but curved display premium feel deti hai.", "Portrait mode, vivid screen", "A little heavy for long calls."),
    review("Arjun Nair", "20 Aug 2026", "Avoid", 2, "Heavy gaming ke baad phone noticeably heat hua aur curved edge par typing me accidental touches aaye. Grip bhi tiring laga.", "Fast charging and sharp display", "Phone heats up during gaming; curved edge causes accidental touches."),
    review("Aditi Reddy", "21 Aug 2026", "Avoid", 1, "Curved edges ki wajah se kabhi-kabhi typing me accidental touches hote hain. Case lagane ke baad better hai, par bare phone use karna mujhe comfortable nahi laga.", "Fast performance", "Curved edges cause occasional accidental touches."),
  ]),

  // Refrigerators
  product("samsung-320l-double-door", "Samsung 320L Double Door", "Samsung", "refrigerators", 32990, images.samsungFridge, 4.1, 7.5, [
    review("Rohan Malhotra", "22 Aug 2026", "Loved", 5, "4 logon ke ghar ke liye space sahi hai. Sabzi ke drawers me weekly groceries aa jaati hain aur cooling stable rahi.", "Useful storage, consistent cooling", "Door shelves could be a little wider."),
    review("Meera Bhatia", "23 Aug 2026", "Loved", 4, "Delivery team ne time slot par install kar diya. Freezer me ice jaldi jamti hai aur normal setting par awaaz zyada nahi aati.", "Quick installation, quiet operation", "Needs a bit of clearance behind the unit."),
    review("Karan Chawla", "24 Aug 2026", "Avoid", 2, "Power cut ke baad cooling wapas aane me kaafi time laga aur freezer ki ice soften ho gayi. Service line par clear answer nahi mila.", "Spacious shelves and useful freezer", "Cooling takes too long to recover after a power cut; support was unclear."),
    review("Chandani Rao", "25 Aug 2026", "Avoid", 1, "Power cut ke baad cooling wapas normal hone me expected se zyada time laga. Service visit book karna bhi easy nahi tha, phone par wait karna pada.", "Good capacity", "Cooling recovery and service booking took longer than expected."),
  ]),
  product("lg-260l-fridge", "LG 260L", "LG", "refrigerators", 27490, images.lgFridge, 3.7, 6.8, [
    review("Kavya Kulkarni", "26 Aug 2026", "Loved", 5, "2-3 members ke ghar ke liye capacity kaafi hai. Vegetable box me palak aur dhaniya kuch din fresh rahe; freezer bhi theek kaam karta hai.", "Good size for a small family, useful vegetable box", "Large pots need shelf rearrangement."),
    review("Ishaan Sinha", "27 Aug 2026", "Avoid", 1, "Garmi me side panel warm raha aur installation support se confirmation lene me do calls lage. Pehla experience reassuring nahi tha.", "Fits a compact kitchen", "Side panel gets warm; installation support took multiple calls."),
    review("Riya Bose", "28 Aug 2026", "Avoid", 2, "Door bins me tall bottles fit nahi hoti aur shelves adjust karne ke baad bhi weekly groceries tight padti hain.", "Quiet compressor", "Door bins are too small for tall bottles; storage feels tight."),
    review("Kabir Mukherjee", "29 Aug 2026", "Avoid", 1, "Garmi wale din fridge ka side panel kaafi warm feel hua aur mujhe installation support se confirm karna pada. Cooling chal rahi thi, lekin initial experience reassuring nahi tha.", "Decent usable space", "Side panels get warm; support reassurance was slow."),
  ]),
  product("whirlpool-300l-fridge", "Whirlpool 300L", "Whirlpool", "refrigerators", 29990, images.whirlpoolFridge, 3.9, 8.1, [
    review("Sanjana Das", "30 Aug 2026", "Loved", 5, "300L space me monthly grocery comfortably rakh paate hain. Chiller section drinks ke liye useful hai, aur shelves ka layout flexible laga.", "Roomy, useful chiller section", "Top shelf is a little high for shorter users."),
    review("Dev Arora", "31 Aug 2026", "Loved", 4, "Ice cream freezer me properly set rehti hai aur vegetables ko alag rakhna easy hai. Installation wale ne temperature settings samjha di.", "Organised compartments, helpful installation", "Takes time to cool fully after restocking."),
    review("Tanvi Gill", "01 Sep 2026", "Avoid", 2, "Delivery ke baad ek shelf chipped thi; replacement ke liye follow-up me kai din lag gaye. Unpacking par parts zaroor check karein.", "Roomy interior and flexible shelves", "A shelf arrived chipped and replacement follow-up was slow."),
    review("Aarav Saxena", "02 Sep 2026", "Avoid", 1, "Delivery ke baad ek shelf chipped thi. Replacement request karne par follow-up me kuch din lag gaye, isliye unpacking ke waqt sab parts check kar lena.", "Good interior space", "Replacement follow-up was slow for a chipped shelf."),
  ]),

  // Washing machines
  product("lg-7kg-front-load", "LG 7kg Front Load", "LG", "washing_machine", 32490, images.lgWasher, 4.2, 8, [
    review("Simran Menon", "03 Sep 2026", "Loved", 5, "Cotton aur daily office clothes dono achhe wash hue. Spin ke waqt machine stable rahi, aur quick wash weekday par kaam aata hai.", "Good wash quality, useful quick cycle", "Long cycles take planning."),
    review("Yash Shah", "04 Sep 2026", "Loved", 4, "Front load me paani kam lagta hai aur bedsheets ka wash bhi even aaya. Door ka rubber gasket use ke baad sukhaana padta hai.", "Even wash, lower water use", "Gasket needs wiping after use."),
    review("Diya Jain", "05 Sep 2026", "Avoid", 2, "Wash cycle kaafi lamba chala aur spin ke waqt machine vibrate hui. Leveling dobara karwani padi, jo annoying tha.", "Good wash quality", "Long cycle and vibration required another leveling visit."),
    review("Varun Thakur", "06 Sep 2026", "Avoid", 1, "Wash programmes kaafi hain but pehli baar settings samajhne me time laga. Customer care par manual ke liye call kiya to hold par rehna pada.", "Clothes come out clean", "Controls take time to learn; support hold was long."),
  ]),
  product("samsung-8kg-washer", "Samsung 8kg", "Samsung", "washing_machine", 34990, images.samsungWasher, 3.8, 7.7, [
    review("Isha Fernandes", "07 Sep 2026", "Loved", 5, "8kg capacity se bedsheets aur towels ek saath wash ho jaate hain. App alerts useful hain jab laundry room alag floor par ho.", "Large capacity, useful cycle alerts", "App setup took a few attempts."),
    review("Manish Dutta", "08 Sep 2026", "Loved", 4, "Delicate clothes ke liye cycle gentle laga aur rinse ke baad detergent smell nahi rahi. Normal wash thoda lengthy hai.", "Gentle cycle, thorough rinse", "Standard cycle is not very quick."),
    review("Kriti Banerjee", "09 Sep 2026", "Loved", 5, "Daily family laundry handle kar leti hai aur spin me vibration manageable hai. Machine ko wall se thoda gap dena pada.", "Handles family loads, manageable vibration", "Requires installation clearance."),
    review("Sameer Ghosh", "10 Sep 2026", "Avoid", 1, "Cycle khatam hone ke baad bhi beeps kaafi loud lage, especially raat ko. Settings me volume kam karne ka option mujhe turant nahi mila.", "Good capacity", "End-of-cycle alert is loud and setting is not obvious."),
  ]),
  product("ifb-6-5kg-washer", "IFB 6.5kg", "IFB", "washing_machine", 28990, images.ifbWasher, 3.2, 6.3, [
    review("Aditi Sharma", "11 Sep 2026", "Loved", 5, "Chhote ghar ke regular kapdon ke liye capacity theek hai. Stain wash me curry ke purane daag bhi kaafi had tak nikal gaye.", "Useful stain cycle, compact capacity", "Very bulky blankets do not fit comfortably."),
    review("Rohan Gupta", "12 Sep 2026", "Avoid", 1, "Pehli installation visit me machine level nahi hui aur spin cycle me hilli. Dobara appointment lene ke baad hi issue solve hua.", "Compact size and useful stain cycle", "First installation was uneven and the machine shook during spin."),
    review("Meera Singh", "13 Sep 2026", "Avoid", 2, "Rinse ke baad kapdon par detergent smell reh gayi, extra rinse chalana pada. Daily use me yeh extra step irritating hai.", "Simple controls", "Detergent smell remained after rinse; an extra cycle was needed."),
    review("Karan Patel", "14 Sep 2026", "Avoid", 1, "Installation ke liye pehle visit par machine level nahi hui thi aur spin me hil rahi thi. Dobara appointment lena pada; second visit ke baad issue solve hua.", "Good cleaning performance", "Initial installation required a repeat visit."),
  ]),

  // Laptops
  product("hp-pavilion-15", "HP Pavilion 15", "HP", "laptops", 62990, images.hpLaptop, 3.6, 7.2, [
    review("Chandani Mehra", "15 Sep 2026", "Loved", 5, "College assignments, Chrome tabs aur online classes smoothly chal rahe hain. Keyboard par long notes type karna comfortable hai.", "Comfortable keyboard, smooth daily work", "Battery drops faster on video calls."),
    review("Kavya Iyer", "16 Sep 2026", "Loved", 4, "Screen size spreadsheets ke liye sahi hai aur fan normal browsing me quiet rehta hai. Included storage meri files ke liye enough hai.", "Useful screen size, quiet for office work", "A bit bulky to carry daily."),
    review("Ishaan Khan", "17 Sep 2026", "Loved", 5, "Work calls me webcam and mic usable hain; setup ke baad drivers update karne pade. Performance routine office work ke liye reliable hai.", "Reliable for office tasks", "Initial updates took a while."),
    review("Riya Desai", "18 Sep 2026", "Avoid", 1, "Battery par class, browser aur video call saath chalaye to charger jaldi dhoondhna pada. Plugged-in use me theek hai, par commute ke liye backup kam laga.", "Good keyboard and screen size", "Battery life is short under video-call workloads."),
  ]),
  product("dell-inspiron-15", "Dell Inspiron 15", "Dell", "laptops", 58990, images.dellLaptop, 3.5, 8.4, [
    review("Kabir Kapoor", "19 Sep 2026", "Loved", 5, "Office ke Excel sheets aur video meetings ke liye responsive hai. Ports ka selection kaam aaya; external monitor connect karna simple raha.", "Useful ports, responsive for office work", "Speakers sound thin at high volume."),
    review("Sanjana Joshi", "20 Sep 2026", "Loved", 4, "Online classes aur assignments dono ek laptop par manage ho gaye. Keyboard ka number pad budget tracking me kaafi useful hai.", "Number pad, good for study tasks", "Display could be brighter near a window."),
    review("Dev Nair", "21 Sep 2026", "Loved", 5, "Build sturdy lagti hai aur lid ko bag me le jaane par flex nahi dikha. Windows setup ke baad updates me thoda time laga.", "Sturdy build, practical layout", "First-time updates take time."),
    review("Tanvi Reddy", "22 Sep 2026", "Avoid", 1, "Video call ke dauran fan audible ho jata hai aur screen ke viewing angles average hain. Side se dekhne par colours change dikhte hain.", "Works well for basic office tasks", "Fan is audible on calls; viewing angles are limited."),
  ]),
  product("lenovo-ideapad-slim-3", "Lenovo IdeaPad Slim 3", "Lenovo", "laptops", 54990, images.lenovoLaptop, 2.8, 6.5, [
    review("Aarav Malhotra", "23 Sep 2026", "Loved", 5, "Lightweight hone se daily metro commute me carry karna easy hai. Word, browser aur music saath me chalane par lag nahi hua.", "Easy to carry, smooth basic multitasking", "Screen looks washed out in direct sunlight."),
    review("Simran Bhatia", "24 Sep 2026", "Avoid", 1, "Chrome tabs aur video call ek saath chalaye to laptop garam hua aur fan sunai diya. Basic notes ke liye theek, multitasking me nahi.", "Lightweight for commuting", "Laptop gets hot and the fan is audible on calls."),
    review("Yash Chawla", "25 Sep 2026", "Avoid", 2, "Fast typing par keyboard deck flex hota hai aur webcam image indoor light me grainy aati hai. Build quality disappointing lagi.", "Quick startup", "Keyboard deck flexes and webcam looks grainy indoors."),
    review("Diya Rao", "26 Sep 2026", "Avoid", 1, "Plastic body light hai but keyboard deck flex hota hai jab fast type karta hu. Normal use me chal raha hai, bas build premium feel nahi deti.", "Lightweight, quick startup", "Keyboard deck flexes under firm typing."),
  ]),

  // TVs
  product("samsung-43-inch-4k-tv", "Samsung 43 inch 4K", "Samsung", "televisions", 32999, images.samsungTV, 4.5, 7.1, [
    review("Varun Kulkarni", "27 Sep 2026", "Loved", 5, "4K content me subtitles clear dikhte hain aur family movie night ke liye 43 inch size sahi hai. OTT apps setup karna simple tha.", "Sharp 4K picture, easy app setup", "Default picture mode is overly vivid."),
    review("Isha Sinha", "28 Sep 2026", "Loved", 4, "Cricket highlights aur YouTube dono smooth stream hote hain. Remote chhota hai aur buttons samajhne me ek do din lage.", "Smooth streaming, clear picture", "Remote buttons take getting used to."),
    review("Manish Bose", "29 Sep 2026", "Avoid", 2, "Side wale sofa se picture contrast girta hai, aur dark scenes me detail kam dikhti hai. Seedhe saamne baithna padta hai.", "Sharp picture when viewed from the front", "Contrast drops from the side; dark scenes lose detail."),
    review("Kriti Mukherjee", "30 Sep 2026", "Avoid", 1, "Side se sofa par baithkar dekho to picture contrast kam lagta hai. Seedhe saamne se achhi hai, par wide seating room ke liye ideal nahi.", "Good sharpness from the front", "Viewing angle loses contrast from the side."),
  ]),
  product("lg-43-inch-4k-tv", "LG 43 inch 4K", "LG", "televisions", 31999, images.lgTV, 4.3, 7.9, [
    review("Sameer Das", "01 Oct 2026", "Loved", 5, "WebOS par Netflix aur Prime setup karna easy tha. Remote pointer se search karna normal buttons se faster laga.", "Easy webOS navigation, convenient pointer", "Some apps take a moment to open."),
    review("Neha Arora", "02 Oct 2026", "Loved", 4, "Football aur movies me colours natural lagte hain, oversaturated nahi. Stand stable hai, although TV unit par space measure karna zaroori hai.", "Natural colours, stable stand", "Stand feet need a wide surface."),
    review("Pooja Gill", "03 Oct 2026", "Avoid", 2, "Built-in speakers movies ke liye flat lage; volume badhane par bhi dialogues me depth nahi aayi. Soundbar ka extra kharcha hua.", "Clear 4K picture", "Built-in speakers sound flat, so a soundbar adds cost."),
    review("Aditya Saxena", "04 Oct 2026", "Avoid", 1, "Built-in speakers movies ke liye thode flat lage aur volume badhane par clarity improve nahi hui. Soundbar ke saath experience better hai.", "Sharp picture, straightforward menus", "Built-in audio lacks depth at higher volume."),
  ]),
  product("sony-bravia-43-inch", "Sony Bravia 43 inch", "Sony", "televisions", 44999, images.sonyTV, 4.7, 8.7, [
    review("Nisha Menon", "05 Oct 2026", "Loved", 5, "Sony picture processing me old TV shows bhi clean lagte hain. Motion handling sports me achhi rahi aur colours natural dikhte hain.", "Natural colours, good motion handling", "Premium price for this screen size."),
    review("Rahul Shah", "06 Oct 2026", "Loved", 4, "Google TV par voice search se apps aur shows jaldi mil jaate hain. Picture preset thoda tune kiya to movies kaafi balanced lagi.", "Useful voice search, balanced picture", "Remote has many buttons."),
    review("Sneha Jain", "07 Oct 2026", "Loved", 5, "Dialogues clear hain aur living room me viewing distance par 43 inch suitable raha. Installation wale ne cables neatly manage ki.", "Clear dialogue, neat setup", "Setup took longer than the promised slot."),
    review("Aman Thakur", "08 Oct 2026", "Avoid", 1, "Price ke hisaab se refresh rate aur gaming features ki details confusing lagi. Casual console use okay hai, competitive gaming ke liye aur options compare karunga.", "Strong upscaling for regular TV", "Gaming features feel limited for the price."),
  ]),

  // Air conditioners
  product("daikin-1-5-ton-5-star", "Daikin 1.5 Ton 5 Star", "Daikin", "ac", 42990, images.daikinAC, 4, 8.2, [
    review("Priya Fernandes", "09 Oct 2026", "Loved", 5, "Bedroom ko humid Mumbai evening me jaldi comfortable kar deta hai. Sleep mode me fan noise low rehta hai.", "Fast cooling, quiet sleep mode", "Installation extras added to the cost."),
    review("Vikram Dutta", "10 Oct 2026", "Loved", 4, "Temperature stable rehta hai aur remote ke modes samajhne easy hain. 5-star model liya hai, bill ka comparison abhi kuch mahine baad clear hoga.", "Stable temperature, clear controls", "Energy savings need longer-term comparison."),
    review("Ananya Banerjee", "11 Oct 2026", "Avoid", 2, "Installation ke waqt extra copper pipe ka charge pehle nahi bataya. Cooling achhi hai, par final bill dekhkar surprise hua.", "Fast, even cooling", "Extra copper pipe charges were not disclosed before installation."),
    review("Arjun Ghosh", "12 Oct 2026", "Avoid", 1, "Installation ke waqt extra copper pipe charge pehle clearly nahi bataya gaya. AC cooling theek karta hai but billing details pehle written me lein.", "Effective cooling", "Installation add-on charges were not clear upfront."),
  ]),
  product("lg-1-5-ton-ac", "LG 1.5 Ton", "LG", "ac", 38990, images.lgAC, 3.4, 6.2, [
    review("Tanvi Sharma", "13 Oct 2026", "Loved", 5, "Remote par temperature aur timer controls simple hain. Garmi me room cool hota hai without setting ko baar-baar badle.", "Simple controls, steady cooling", "Indoor unit takes regular filter cleaning."),
    review("Aarav Gupta", "14 Oct 2026", "Loved", 4, "Raat ko low fan speed par noise manageable hai aur sleep disturb nahi hui. Installation team ne drain pipe ka slope check kiya.", "Quiet low setting, careful installation", "Remote display is small."),
    review("Simran Singh", "15 Oct 2026", "Avoid", 2, "Cooling complaint ke baad service slot agle hafte mila. Garmi me itna wait karna pada, support experience frustrating raha.", "Simple remote and steady cooling", "Service appointment took a week during a cooling complaint."),
    review("Yash Patel", "16 Oct 2026", "Avoid", 1, "Service booking me available slot agle hafte ka mila, jabki cooling complaint urgent thi. Product chal raha hai par support wait frustrating raha.", "Cools the room effectively", "Service appointment availability was slow."),
  ]),
  product("ogeneral-1-5-ton-ac", "O'General 1.5 Ton", "O'General", "ac", 44990, images.ogeneralAC, 2.1, 5.8, [
    review("Diya Mehra", "17 Oct 2026", "Loved", 5, "Garmi me afternoon sun wale room ko bhi achhi tarah cool karta hai. Fan throw strong hai, so temperature jaldi comfortable hota hai.", "Strong airflow, effective in a sunny room", "Airflow can feel too direct near the bed."),
    review("Varun Iyer", "18 Oct 2026", "Avoid", 1, "Airflow mere bed par seedha aata hai aur swing setting se bhi comfort nahi mila. Placement pehle plan karna chahiye tha.", "Strong cooling", "Airflow hits the bed directly and remains uncomfortable."),
    review("Isha Khan", "19 Oct 2026", "Avoid", 2, "Outdoor unit ki awaaz balcony ke paas noticeable hai, especially raat ko. Cooling strong hai but noise disturb karti hai.", "Cools a sunny room quickly", "Outdoor unit noise is noticeable at night."),
    review("Manish Desai", "20 Oct 2026", "Avoid", 1, "Indoor unit ka airflow mere chhote room me direct face par aa raha tha. Swing setting help karti hai but installation position pehle plan karni chahiye thi.", "Cools quickly", "Air direction was uncomfortable with the chosen placement."),
  ]),

  // Headphones
  product("sony-wh-1000xm5", "Sony WH-1000XM5", "Sony", "headphones", 26990, images.sonyHeadphones, 4.9, 8.6, [
    review("Kriti Kapoor", "21 Oct 2026", "Loved", 5, "Metro commute me ANC se announcements ke beech ka noise kaafi cut hua. Long flight par cushions comfortable rahe.", "Excellent noise cancelling, comfortable cushions", "Headphones fold nahi hote for compact packing."),
    review("Sameer Joshi", "22 Oct 2026", "Loved", 4, "Teams calls me mic clear tha aur laptop-phone switch karna easy hai. Music app me EQ set karne ke baad sound meri pasand ka ho gaya.", "Clear calls, multipoint connection", "Touch controls need a little practice."),
    review("Neha Nair", "23 Oct 2026", "Loved", 5, "Office focus ke liye noise cancelling useful hai; quick attention mode se baat karna easy ho jaata hai. Carry case bag me space leta hai.", "Useful focus mode, strong ANC", "Case is bulky in a small bag."),
    review("Pooja Reddy", "24 Oct 2026", "Avoid", 1, "Headband ka fit mere sir par kuch ghante baad pressure feel karata hai. Sound aur ANC achhe hain, but long work sessions me breaks lene padte hain.", "Detailed sound, effective ANC", "Headband pressure builds up over long sessions."),
  ]),
  product("boat-rockerz-550", "boAt Rockerz 550", "boAt", "headphones", 1999, images.boatHeadphones, 2.3, 5.2, [
    review("Aditya Malhotra", "25 Oct 2026", "Loved", 5, "Gym aur bus rides ke liye price ke hisaab se sound loud hai. Bass-heavy tracks fun lagte hain, calls indoor me theek aati hain.", "Punchy bass, affordable", "Bass can overpower vocals."),
    review("Nisha Bhatia", "26 Oct 2026", "Avoid", 1, "Earcups mere kaan par tight lage aur ek ghante me discomfort hua. Bass theek hai, lekin long commute ke liye comfortable nahi.", "Loud sound for the price", "Tight earcups become uncomfortable after an hour."),
    review("Rahul Chawla", "27 Oct 2026", "Avoid", 2, "Bluetooth do baar bus ride me disconnect hua aur reconnect karne ke liye phone se pair karna pada. Calls bhi noisy jagah par muffled thi.", "Affordable bass-heavy sound", "Bluetooth disconnected during travel; calls sound muffled in noise."),
    review("Sneha Rao", "28 Oct 2026", "Avoid", 1, "Earcups mere kaan par tight lage aur ek ghante ke baad discomfort hua. Sound price ke liye okay hai, but comfort sabko suit nahi karega.", "Decent sound for the price", "Tight fit becomes uncomfortable over time."),
  ]),
  product("jbl-tune-760nc", "JBL Tune 760NC", "JBL", "headphones", 4999, images.jblHeadphones, 3.1, 6.9, [
    review("Aman Kulkarni", "29 Oct 2026", "Loved", 5, "ANC office AC ki constant humming ko reduce karta hai. JBL app me EQ options mile, bass ko thoda kam karke podcasts clear sunta hu.", "Reduces steady background hum, adjustable EQ", "ANC is less effective on sudden voices."),
    review("Priya Sinha", "30 Oct 2026", "Loved", 4, "Lightweight hai aur work calls ke beech pehenna comfortable raha. Multipoint ki wajah se laptop aur phone ke saath switching easy hai.", "Lightweight, handy multipoint", "Buttons feel a little plasticky."),
    review("Vikram Bose", "31 Oct 2026", "Avoid", 2, "Quiet room me ANC on karke music pause kiya to halki hiss sunai di. Gaane ke beech nahi, par silence me distracting hai.", "Comfortable fit and lively sound", "ANC produces a faint hiss in a quiet room."),
    review("Ananya Mukherjee", "01 Nov 2026", "Avoid", 1, "ANC on karne par mere unit me halki hiss sunai di jab music pause tha. Gaane chalte waqt notice nahi hoti, but quiet room me bothersome lagi.", "Comfortable fit, lively sound", "Audible hiss with ANC in a quiet room."),
  ]),

  // Cameras
  product("canon-eos-1500d", "Canon EOS 1500D", "Canon", "cameras", 45999, images.canonCamera, 3.3, 7.3, [
    review("Arjun Das", "02 Nov 2026", "Loved", 5, "DSLR seekhne ke liye liya hai. Kit lens se daylight family photos sharp aaye aur manual settings practice karna fun hai.", "Beginner-friendly controls, good daylight photos", "Kit lens struggles indoors without extra light."),
    review("Aditi Arora", "03 Nov 2026", "Loved", 4, "Optical viewfinder se framing phone se alag aur enjoyable lagti hai. Battery ek outing nikaal gayi, bas live view zyada use nahi kiya.", "Optical viewfinder, decent battery on viewfinder", "Live view drains battery faster."),
    review("Rohan Gill", "04 Nov 2026", "Avoid", 2, "Moving subject par autofocus slow raha aur video ke options limited hain. Still photos seekhne ko useful, reels ke liye nahi.", "Useful for learning still photography", "Autofocus is slow on moving subjects and video options are limited."),
    review("Meera Saxena", "05 Nov 2026", "Avoid", 1, "Video autofocus moving subject par slow laga aur 4K option nahi hai. Still photos practice ke liye useful hai, par reels/video ke liye nahi lunga.", "Useful for learning still photography", "Video features and autofocus feel dated."),
  ]),
  product("nikon-d3500", "Nikon D3500", "Nikon", "cameras", 42999, images.nikonCamera, 2.6, 6.4, [
    review("Karan Menon", "06 Nov 2026", "Loved", 5, "Guide mode se aperture aur shutter speed samajhne me help mili. Park me kit lens se birds ke photos try kiye, daylight results clear aaye.", "Helpful Guide mode, clear daylight shots", "Autofocus is basic for fast action."),
    review("Chandani Shah", "07 Nov 2026", "Avoid", 1, "Fixed screen ke kaaran low-angle photo frame karne ke liye baar-baar jhukna pada. Outdoor stills achhe hain, daily shooting me hassle.", "Clear outdoor still photos", "Fixed screen makes low-angle framing awkward."),
    review("Kavya Jain", "08 Nov 2026", "Avoid", 2, "Phone me photos bhejne ka app setup pehli baar confusing tha aur transfer slow chala. Travel par quick sharing expect ki thi.", "Good battery life", "Wireless transfer setup is confusing and sharing is slow."),
    review("Ishaan Thakur", "09 Nov 2026", "Avoid", 1, "Screen fixed hai, low-angle shots frame karne ke liye jhukna pada. Photo quality achhi hai but vlog ya awkward-angle shooting me limitation hai.", "Good still image quality", "Fixed screen makes low-angle framing difficult."),
  ]),
  product("sony-zv-e10", "Sony ZV-E10", "Sony", "cameras", 59990, images.sonyCamera, 4.95, 9.1, [
    review("Riya Fernandes", "10 Nov 2026", "Loved", 5, "Cooking videos ke liye product showcase mode handy hai; focus face se object par jaldi shift hota hai. Flip screen khud framing check karne me useful.", "Fast focus shift, flip screen for creators", "No viewfinder for bright outdoor shoots."),
    review("Kabir Dutta", "11 Nov 2026", "Loved", 4, "Indoor video me autofocus reliable raha aur external mic connect karna straightforward tha. Kit lens se wide room shots mil jaate hain.", "Reliable autofocus, external mic support", "Handheld footage needs stabilisation."),
    review("Sanjana Banerjee", "12 Nov 2026", "Loved", 5, "Compact body bag me easily aa jaati hai. USB se stream test kiya, setup simple tha; long recording se pehle battery plan karna padta hai.", "Compact, convenient USB streaming", "Battery life is limited for long recording."),
    review("Dev Ghosh", "13 Nov 2026", "Avoid", 2, "Camera me in-body stabilisation nahi hai, walking shots handheld me shaky hue. Tripod ya stabilised lens ke saath better result aaya.", "Good autofocus, creator-friendly screen", "Handheld walking footage is shaky without stabilisation."),
  ]),
  // Smartwatches
  product("apple-watch-series-9", "Apple Watch Series 9", "Apple", "smartwatch", 41999, images.appleWatch, 4.6, 8.8, [
    review("Ira Bansal", "14 Nov 2026", "Loved", 5, "Display super smooth hai, battery 1.5 din chalti hai. Fitness ke liye best hai.", "Smooth display and useful fitness tracking", "Battery lasts about a day and a half."),
  ], "890 reviews"),
  product("noise-colorfit-pro-5", "Noise ColorFit Pro 5", "Noise", "smartwatch", 2999, images.noiseWatch, 4.3, 8.1, [
    review("Ritesh Puri", "15 Nov 2026", "Loved", 5, "Is price me best value. Bluetooth calling accha hai, thoda bulky lagta hai.", "Good value and Bluetooth calling", "The watch feels a little bulky."),
  ], "2.1k reviews"),
];
