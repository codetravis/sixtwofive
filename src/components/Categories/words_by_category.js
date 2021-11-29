const words_by_category = {
  "Animal": ["dog", "cat", "fish", "bird", "cow", "pig", "mouse", "horse", "wing", "animal"], 
  "Transportation": ["train", "plane", "car", "truck", "bicycle", "bus", "boat", "ship", "tire", "gasoline", "engine", "(train) ticket", "transportation"], 
  "Location": ["city", "house", "apartment", "street/road", "airport", "train station", "bridge", "hotel", "restaurant", "farm", "court", "school", "office", "room", "town", "university", "club", "bar", "park", "camp", "store/shop", "theater", "library", "hospital", "church", "market", "country (USA, France, etc.)", "building", "ground", "space (outer space)", "bank", "location"], 
  "Clothing": ["hat", "dress", "suit", "skirt", "shirt", "T-shirt", "pants", "shoes", "pocket", "coat", "stain", "clothing"], 
  "Color": ["red", "green", "blue (light/dark)", "yellow", "brown", "pink", "orange", "black", "white", "gray", "colorC"], 
  "People": ["son*", "daughter*", "mother", "father", "parent (= mother/father)", "baby", "man", "woman", "brother*", "sister*", "family", "grandfather", "grandmother", "husband*", "wife*", "king", "queen", "president", "neighbor", "boy", "girl", "child (= boy/girl)", "adult (= man/woman)", "human (animal)", "friend", "victim", "player", "fan", "crowd", "person"], 
  "Job": ["Teacher", "student", "lawyer", "doctor", "patient", "waiter", "secretary", "priest", "police", "army", "soldier", "artist", "author", "manager", "reporter", "actor", "job"], "Society": ["religion", "heaven", "hell", "death", "medicine", "money", "dollar", "bill", "marriage*", "wedding*", "team", "relationship", "race (ethnicity)", "sex (the act)", "sex (gender)", "murder", "prison", "technology", "energy", "war", "peace", "attack", "election", "magazine", "newspaper", "poison", "gun", "sport", "race (sport)", "exercise", "ball", "game", "price", "contract", "drug", "sign", "science", "God"], 
  "Art": ["band", "song", "instrument (musical)", "music", "movie", "art"], 
  "Beverages": ["coffee", "tea", "wine", "beer", "juice", "water", "milk", "beverage"], 
  "Food": ["egg", "cheese", "bread", "soup", "cake", "chicken", "pork", "beef", "apple", "banana", "orange", "lemon", "corn", "rice", "oil", "seed", "knife", "spoon", "fork", "plate", "cup", "breakfast", "lunch", "dinner", "sugar", "salt", "bottle", "food"], 
  "Home": ["table", "chair", "bed", "dream", "window", "door", "bedroom", "kitchen", "bathroom", "pencil", "pen", "photograph", "soap", "book", "page", "key", "paint", "letter", "note", "wall", "paper", "floor", "ceiling", "roof", "pool", "lock", "telephone", "garden", "yard", "needle", "bag", "box", "gift", "card", "ring", "tool"], 
  "Electronics": ["clock", "lamp", "fan", "cell phone", "network", "computer", "program (computer)", "laptop", "screen", "camera", "television", "radio"], 
  "Body": ["head", "neck", "face", "beard", "hair", "eye", "mouth*", "lip*", "nose", "tooth", "ear", "tear (drop)", "tongue", "back", "toe", "finger", "foot", "hand", "leg", "arm", "shoulder", "heart", "blood", "brain", "knee", "sweat", "disease", "bone", "voice", "skin", "body"], 
  "Nature": ["sea*", "ocean*", "river", "mountain", "rain", "snow", "tree", "sun", "moon", "world", "Earth", "forest", "sky", "plant", "wind", "soil/earth", "flower", "valley", "root", "lake", "star", "grass", "leaf", "air", "sand", "beach", "wave", "fire", "ice", "island", "hill", "heat", "nature"], 
  "Materials": ["glass", "metal", "plastic", "wood", "stone", "diamond", "clay", "dust", "gold", "copper", "silver", "material"], 
  "Math/Measurements": ["meter", "centimeter", "kilogram", "inch", "foot", "pound", "half", "circle", "square", "temperature", "date", "weight", "edge", "corner"], 
  "Misc Nouns": ["map", "dot", "consonant", "vowel", "light", "sound", "yes", "no", "piece", "pain", "injury", "hole", "image", "pattern", "noun", "verb", "adjective"], 
  "Directions": ["top", "bottom", "side", "front", "back", "outside", "inside", "up", "down", "left", "right", "straight", "north", "south", "east", "west", "direction"], 
  "Seasons": ["Summer", "Spring", "Winter", "Fall", "season"], 
  "Numbers": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "30", "31", "32", "40", "41", "42", "50", "51", "52", "60", "61", "62", "70", "71", "72", "80", "81", "82", "90", "91", "92", "100", "101", "102", "110", "111", "1000", "1001", "10000", "100000", "million", "billion", "1st", "2nd", "3rd", "4th", "5th", "number"], 
  "Months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], 
  "Days of the week": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], 
  "Time": ["year", "month", "week", "day", "hour", "minute", "second", "morning", "afternoon", "evening", "night", "time"], 
  "Verbs": ["work", "play", "walk", "run", "drive", "fly", "swim", "go", "stop", "follow", "think", "speak/say", "eat", "drink", "kill", "die", "smile", "laugh", "cry", "buy*", "pay*", "sell*", "shoot(a gun)", "learn", "jump", "smell", "hear* (a sound)", "listen* (music)", "taste", "touch", "see (a bird)", "watch (TV)", "kiss", "burn", "melt", "dig", "explode", "sit", "stand", "love", "pass by", "cut", "fight", "lie down", "dance", "sleep", "wake up", "sing", "count", "marry", "pray", "win", "lose", "mix/stir", "bend", "wash", "cook", "open", "close", "write", "call", "turn", "build", "teach", "grow", "draw", "feed", "catch", "throw", "clean", "find", "fall", "push", "pull", "carry", "break", "wear", "hang", "shake", "sign", "beat", "lift"], 
  "Adjectives": ["long", "short (vs long)", "tall", "short (vs tall)", "wide", "narrow", "big/large", "small/little", "slow", "fast", "hot", "cold", "warm", "cool", "new", "old (new)", "young", "old (young)", "good", "bad", "wet", "dry", "sick", "healthy", "loud", "quiet", "happy", "sad", "beautiful", "ugly", "deaf", "blind", "nice", "mean", "rich", "poor", "thick", "thin", "expensive", "cheap", "flat", "curved", "male", "female", "tight", "loose", "high", "low", "soft", "hard", "deep", "shallow", "clean", "dirty", "strong", "weak", "dead", "alive", "heavy", "light (weight)", "dark", "light (brightness)", "nuclear", "famous"], 
  "Pronouns": ["I", "you (singular)", "he", "she", "it", "we", "you (plural)", "they."]
}